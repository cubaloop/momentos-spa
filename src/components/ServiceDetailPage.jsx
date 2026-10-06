import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Calendar, Clock, DollarSign, Sparkles, CheckCircle2, 
  ShieldCheck, Heart, Share2, Phone, MapPin, ChevronRight, ChevronLeft, Info
} from 'lucide-react';
import { allServices } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceDetailPage({ service: rawService, onBack, onOpenBooking, onSelectOtherService }) {
  const { t, getLocalizedService, localizedServices } = useLanguage();
  const service = getLocalizedService(rawService);
  
  // Lista robusta de fotos de la galería (sin duplicados consecutivos y con fallbacks elegantes)
  const galleryPhotos = React.useMemo(() => {
    let list = [];
    if (service?.gallery && Array.isArray(service.gallery) && service.gallery.length > 0) {
      list = [...service.gallery];
    } else if (service?.image) {
      list = [service.image];
    }
    // Asegurar al menos 3 imágenes atractivas si la lista es corta
    const fallbacks = ['./assets/servicios_spa.jpg', './assets/masaje_relax.jpg', './assets/dsc_6328.jpg', './assets/dsc_6325.jpg'];
    for (const fb of fallbacks) {
      if (list.length >= 3) break;
      if (!list.includes(fb)) {
        list.push(fb);
      }
    }
    // Filtrar falsy y duplicados
    return Array.from(new Set(list.filter(Boolean)));
  }, [service?.id, service?.gallery, service?.image]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const touchStartPos = useRef({ x: 0, y: 0 });

  // Solo scrollear arriba cuando realmente cambia el ID del servicio (evita rebote al interactuar o scrollear)
  const serviceId = service?.id;
  useEffect(() => {
    setCurrentSlide(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  // Autoplay carousel: rota automáticamente cada 4 segundos salvo si el usuario pasa el mouse
  useEffect(() => {
    if (!galleryPhotos || galleryPhotos.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % galleryPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryPhotos.length, isHovered]);

  const nextSlide = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentSlide(prev => (prev + 1) % galleryPhotos.length);
  };

  const prevSlide = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentSlide(prev => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartPos.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = touchStartPos.current.x - endX;
    const diffY = touchStartPos.current.y - endY;

    // Solo cambiar de diapositiva si el movimiento es predominantemente horizontal (> 40px y más del doble que vertical)
    // Esto previene que el scroll vertical de la página dispare cambio de fotos o trabe el scroll del usuario
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-serif-title font-bold text-mahogany-950 mb-4">Servicio no encontrado</h2>
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-mahogany-950 text-white rounded-full font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </button>
      </div>
    );
  }

  const relatedServices = (localizedServices && localizedServices.length > 0 ? localizedServices : allServices)
    .filter(s => s.id !== service.id && (s.categoryId === service.categoryId || s.subcategoryId === service.subcategoryId))
    .slice(0, 3);

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

  const whatsappUrl = service.isTaxi
    ? `https://wa.me/5359710688?text=${encodeURIComponent(
        `Hola Momentos Spa, deseo solicitar el Servicio de taxi 🚕 para mi cita.`
      )}`
    : `https://wa.me/5359710688?text=${encodeURIComponent(
        `Hola Momentos Spa, deseo consultar y reservar el servicio: "${service.name}"${service.duration ? ` (${service.duration})` : ''}${typeof service.price === 'number' ? ` - $${service.price} USD` : ''}. ¿Tienen disponibilidad próxima?`
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
          
          {/* Left Column: Authentic Photography Showcase Carousel */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* CAROUSEL CONTAINER (Rotación automática garantizada) */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(60,19,24,0.16)] border border-stone-200/90 aspect-[4/3] bg-stone-900 group select-none touch-pan-y"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides */}
              {galleryPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img 
                    src={photo} 
                    alt={`${service.name} foto ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.handled) {
                        e.currentTarget.dataset.handled = 'true';
                        e.currentTarget.src = './assets/servicios_spa.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
                </div>
              ))}

              {/* Navigation Arrows */}
              {galleryPhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Foto siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              {/* Badges on Image */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-none">
                <span className="px-3 py-1 bg-mahogany-950/90 backdrop-blur-md text-gold border border-gold/30 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {service.badge || 'Tratamiento Exclusivo'}
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-stone-800 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Foto Original
                </span>
              </div>

              {/* Bottom Image Info Strip */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white text-xs pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white/90 font-medium">
                  Momentos Spa • Miramar
                </span>
                <span className="font-semibold text-gold bg-mahogany-950/90 border border-gold/30 px-2.5 py-1 rounded-full">
                  {service.duration}
                </span>
              </div>

              {/* Dot Indicators */}
              {galleryPhotos.length > 1 && (
                <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center gap-2 pointer-events-auto">
                  {galleryPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                      aria-label={`Ir a foto ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx 
                          ? 'w-7 bg-gold shadow-md' 
                          : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Strip for Direct Selection */}
            {galleryPhotos.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1">
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                    className={`relative rounded-2xl overflow-hidden border-2 transition-all shrink-0 w-20 sm:w-24 aspect-[4/3] shadow-sm cursor-pointer ${
                      currentSlide === idx 
                        ? 'border-mahogany-950 ring-2 ring-gold scale-105 shadow-md' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={photo} 
                      alt={`${service.name} miniatura ${idx + 1}`} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        if (!e.currentTarget.dataset.handled) {
                          e.currentTarget.dataset.handled = 'true';
                          e.currentTarget.src = './assets/servicios_spa.jpg';
                        }
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Bebida de cortesía destacada (del catálogo original) */}
            <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/80 shadow-sm flex items-start gap-3">
              <span className="text-xl">☕</span>
              <div className="text-xs text-stone-700 leading-relaxed">
                <span className="font-bold text-mahogany-950 block mb-0.5">Bebida de cortesía incluida:</span>
                Todos nuestros servicios incluyen una bebida no alcohólica a su elección: Té, agua purificada, Café expreso, jugo natural o refresco frío.
              </div>
            </div>

          </div>

          {/* Right Column: Service Information & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                  {service.subcategoryName || service.categoryTitle || 'Spa'}
                </span>
                {service.duration && (
                  <span className="text-xs text-stone-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {service.duration}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-mahogany-950 tracking-tight leading-tight">
                {service.name}
              </h1>

              {/* Price & Duration banner */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider block">Inversión</span>
                  <div className="flex items-baseline gap-1">
                    {typeof service.price === 'number' ? (
                      <>
                        <span className="text-3xl font-bold text-mahogany-950 font-serif-title">
                          ${service.price}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">USD</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-stone-800 font-serif-title">
                        {service.price}
                      </span>
                    )}
                  </div>
                </div>
                {service.duration && (
                  <div className="text-right border-l border-stone-200 pl-6">
                    <span className="text-xs text-stone-500 uppercase tracking-wider block">Duración</span>
                    <span className="text-lg font-bold text-stone-800">{service.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
              {Array.isArray(service.longDescription) && service.longDescription.length > 0 ? (
                service.longDescription.map((p, idx) => (
                  <p key={idx} className="text-stone-700 leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-stone-700 leading-relaxed">{service.description}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {service.isTaxi ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-4 h-4" />
                  <span>Solicitar Taxi por WhatsApp</span>
                </a>
              ) : (
                <>
                  <button
                    onClick={() => onOpenBooking(service)}
                    className="flex-1 py-3.5 px-6 rounded-full bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <Calendar className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                    <span>Reservar este Servicio</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </>
              )}
            </div>

            {/* Benefits list */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm space-y-3">
                <h2 className="font-serif-title font-bold text-stone-900 text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  Beneficios del Tratamiento
                </h2>
                <ul className="space-y-2 text-sm text-stone-600">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps / Protocol */}
            {service.steps && service.steps.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm space-y-4">
                <h2 className="font-serif-title font-bold text-stone-900 text-base">
                  Protocolo y Desarrollo de la Sesión
                </h2>
                <div className="space-y-3">
                  {service.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-cream-100 text-mahogany-950 font-bold text-xs flex items-center justify-center shrink-0 border border-stone-200">
                        {st.step}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900">{st.title}</h4>
                        <p className="text-xs text-stone-600 leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included in session */}
            {service.includes && service.includes.length > 0 && (
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">¿Qué incluye la sesión?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {service.recommendations && (
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Recomendación: </span>
                  {service.recommendations}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-200/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs text-gold-dark font-bold uppercase tracking-wider">Explorar más</span>
              <h2 className="text-2xl font-serif-title font-bold text-mahogany-950">Otros tratamientos que te pueden interesar</h2>
            </div>
            <button 
              onClick={onBack}
              className="text-xs font-bold text-mahogany-950 hover:underline flex items-center gap-1"
            >
              Ver todos los servicios
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectOtherService ? onSelectOtherService(rel) : null}
                className="group cursor-pointer rounded-2xl bg-white border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.handled) {
                        e.currentTarget.dataset.handled = 'true';
                        e.currentTarget.src = './assets/servicios_spa.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white bg-black/50 backdrop-blur px-2.5 py-0.5 rounded-full">
                    {rel.duration}
                  </span>
                  <span className="absolute bottom-2.5 right-3 text-xs font-bold text-gold bg-mahogany-950/90 px-2.5 py-0.5 rounded-full border border-gold/30">
                    ${rel.price} USD
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-title font-bold text-stone-900 group-hover:text-mahogany-950 transition-colors line-clamp-1">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-mahogany-950 font-bold">
                    <span>Ver detalles</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
