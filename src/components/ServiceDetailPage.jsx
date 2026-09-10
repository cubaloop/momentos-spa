import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Calendar, Clock, DollarSign, Sparkles, CheckCircle2, 
  ShieldCheck, Heart, Share2, Phone, MapPin, ChevronRight, Info, Award
} from 'lucide-react';
import { allServices } from '../data/servicesData';

export default function ServiceDetailPage({ service, onBack, onOpenBooking, onSelectOtherService }) {
  const [activePhoto, setActivePhoto] = useState(service?.image || './assets/servicios_spa.jpg');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (service?.image) {
      setActivePhoto(service.image);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service]);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-serif-title font-bold text-mahogany-950 mb-4">Servicio no encontrado</h2>
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-mahogany-950 text-white rounded-full font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a todos los servicios
        </button>
      </div>
    );
  }

  const relatedServices = allServices
    .filter(s => s.id !== service.id && (s.categoryId === service.categoryId || s.subcategoryId === service.subcategoryId))
    .slice(0, 3);

  const galleryPhotos = service.gallery && service.gallery.length > 0 
    ? service.gallery 
    : [service.image, './assets/servicios_spa.jpg', './assets/dsc_6328.jpg'].filter(Boolean);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${service.name} - Momentos Spa Habana`,
        text: service.description,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappUrl = `https://wa.me/5359710688?text=${encodeURIComponent(
    `Hola Momentos Spa, deseo consultar y reservar el servicio: "${service.name}" (${service.duration} - $${service.price} USD). ¿Tienen disponibilidad próxima?`
  )}`;

  return (
    <div className="min-h-screen bg-cream-50/70 text-stone-900 pb-24 animate-fade-in">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-white/80 backdrop-blur border-b border-stone-200/80 sticky top-20 z-30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          
          {/* Back button & Breadcrumb */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-600 truncate">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 hover:bg-mahogany-950 hover:text-white transition-all font-bold text-xs text-mahogany-950 border border-stone-200 shrink-0 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
            
            <div className="hidden sm:flex items-center gap-1.5 text-stone-400 truncate">
              <span className="hover:text-stone-700 cursor-pointer" onClick={onBack}>Servicios</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="text-stone-600 truncate">{service.categoryTitle || 'Spa'}</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold text-mahogany-950 truncate">{service.name}</span>
            </div>
          </div>

          {/* Quick Share & Book CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              title="Compartir enlace de este servicio"
              className="p-2 rounded-full border border-stone-200 bg-white hover:bg-cream-100 text-stone-600 transition-colors text-xs flex items-center gap-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{copied ? '¡Copiado!' : 'Compartir'}</span>
            </button>

            <button
              onClick={() => onOpenBooking(service)}
              className="px-4 py-2 bg-mahogany-950 hover:bg-mahogany-900 text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Agendar Cita</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Hero Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Photography Showcase */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Featured Photo Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(60,19,24,0.16)] border border-stone-200/90 aspect-[4/3] bg-stone-900 group">
              <img 
                src={activePhoto} 
                alt={service.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
              
              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-mahogany-950/90 backdrop-blur-md text-gold border border-gold/30 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {service.badge || 'Tratamiento Exclusivo'}
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-stone-800 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Foto Real en Cabina
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white/90">
                  Momentos Spa • Miramar, La Habana
                </span>
                <span className="font-semibold text-gold bg-mahogany-950/80 px-2.5 py-1 rounded-full">
                  {service.duration}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {galleryPhotos.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(photo)}
                    className={`relative rounded-2xl overflow-hidden border-2 transition-all shrink-0 w-24 h-18 aspect-[4/3] shadow-sm ${
                      activePhoto === photo 
                        ? 'border-mahogany-950 ring-2 ring-gold scale-105 shadow-md' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt={`${service.name} vista ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Included Guarantee Card */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-mahogany-950 font-bold text-sm">
                <Award className="w-4 h-4 text-gold" />
                <span>Compromiso de Calidad Momentos Spa</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Todas nuestras sesiones se realizan en cabinas privadas climatizadas, con toallas higienizadas, aceites botánicos de máxima pureza y terapeutas tituladas con amplia trayectoria en bienestar holístico.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-700 font-medium pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Ambiente Privado & Zen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Degustación de Vino o Té</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Toallas Precalentadas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Parqueo Privado Gratis</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Service Details & Action Box */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-block px-3 py-1 bg-mahogany-100 text-mahogany-950 font-bold text-xs rounded-full uppercase tracking-wider mb-3">
                {service.categoryTitle || 'Spa & Bienestar'}
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-mahogany-950 leading-tight">
                {service.name}
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-2 font-normal leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Price & Duration Feature Box */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-[0_10px_35px_rgba(60,19,24,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Inversión en Bienestar</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-serif-title font-bold text-mahogany-950">${service.price}</span>
                  <span className="text-sm font-semibold text-stone-500">USD</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-stone-600 font-medium">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream-100 border border-stone-200">
                    <Clock className="w-3.5 h-3.5 text-mahogany-800" />
                    {service.duration} de sesión
                  </span>
                  <span className="text-stone-400">•</span>
                  <span>Mié a Dom: 10am - 7pm</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full sm:w-auto flex flex-col gap-2 shrink-0">
                <button
                  onClick={() => onOpenBooking(service)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-mahogany-950 hover:bg-mahogany-900 text-white rounded-full font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span>Agendar en Calendario</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Reservar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Extended Explanation */}
            <div className="bg-white/90 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-mahogany-950 font-serif-title font-bold text-xl">
                <Sparkles className="w-5 h-5 text-gold" />
                <h2>Filosofía & Fundamento del Tratamiento</h2>
              </div>
              
              <div className="space-y-3.5 text-stone-700 text-sm sm:text-base leading-relaxed">
                {service.longDescription && Array.isArray(service.longDescription) ? (
                  service.longDescription.map((p, idx) => (
                    <p key={idx} className="text-justify">{p}</p>
                  ))
                ) : (
                  <p>{service.description}</p>
                )}
              </div>

              {service.recommendations && (
                <div className="mt-4 p-4 rounded-2xl bg-cream-50 border border-mahogany-900/15 flex items-start gap-3 text-xs text-stone-700">
                  <Info className="w-4 h-4 text-mahogany-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-mahogany-950">Consejo del Terapeuta: </span>
                    <span>{service.recommendations}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Proven Benefits Grid */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4 shadow-sm">
                <h3 className="text-lg sm:text-xl font-serif-title font-bold text-mahogany-950 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Beneficios Comprobados</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-50/70 border border-stone-200/70 text-xs sm:text-sm text-stone-800 font-medium">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step-by-Step Experience Breakdown */}
            {service.steps && service.steps.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-4 shadow-sm">
                <h3 className="text-lg sm:text-xl font-serif-title font-bold text-mahogany-950">
                  El Paso a Paso de tu Experiencia
                </h3>
                <div className="space-y-3">
                  {service.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3.5 rounded-2xl bg-cream-50/60 border border-stone-100 hover:border-mahogany-900/30 transition-all">
                      <div className="w-10 h-10 rounded-2xl bg-mahogany-950 text-gold flex items-center justify-center font-serif-title font-bold text-sm shrink-0 shadow-sm">
                        {st.step}
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-mahogany-950">{st.title}</div>
                        <div className="text-xs text-stone-600 mt-0.5 leading-relaxed">{st.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included */}
            {service.includes && service.includes.length > 0 && (
              <div className="bg-mahogany-950 text-white rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
                <div className="text-gold uppercase tracking-widest text-[11px] font-bold">Servicio Integral Premium</div>
                <h3 className="text-lg sm:text-xl font-serif-title font-bold">¿Qué incluye tu reserva?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.includes.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-cream-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Related Services Recommendation Row */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-200/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-mahogany-800">Continuar Explorando</span>
              <h3 className="text-2xl font-serif-title font-bold text-mahogany-950">Otros Rituales Recomendados</h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-bold text-mahogany-900 hover:underline flex items-center gap-1"
            >
              <span>Ver catálogo completo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div 
                key={rel.id}
                onClick={() => {
                  if (onSelectOtherService) onSelectOtherService(rel);
                }}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={rel.image} 
                    alt={rel.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-mahogany-950/90 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                    {rel.duration}
                  </span>
                  <span className="absolute bottom-3 right-3 px-3 py-1 bg-white/95 text-mahogany-950 font-serif-title font-bold text-sm rounded-full shadow">
                    ${rel.price} USD
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm group-hover:text-mahogany-900 transition-colors line-clamp-1">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-mahogany-950">
                    <span>Ver página del servicio</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sticky Bottom Bar on Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3.5 z-40 flex items-center justify-between shadow-2xl">
        <div>
          <div className="text-xs text-stone-500 font-medium">{service.duration}</div>
          <div className="text-lg font-serif-title font-bold text-mahogany-950">${service.price} USD</div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-emerald-700 text-white rounded-full shadow"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => onOpenBooking(service)}
            className="px-5 py-2.5 bg-mahogany-950 text-white rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>Agendar Cita</span>
          </button>
        </div>
      </div>

    </div>
  );
}