import React, { useEffect } from 'react';
import { 
  Heart, Sparkles, Award, MapPin, Clock, Phone, ShieldCheck, 
  CheckCircle2, ArrowLeft, Calendar, Coffee, Users, Droplets
} from 'lucide-react';

export default function SobreNosotros({ onBack, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappUrl = "https://wa.me/5359710688?text=" + encodeURIComponent(
    "Hola Momentos Spa, he leído sobre ustedes y deseo solicitar información o reservar una cita."
  );

  return (
    <div className="min-h-screen bg-cream-50/70 text-stone-900 pb-24 animate-fade-in">
      
      {/* Header Breadcrumb */}
      <div className="bg-white/80 backdrop-blur border-b border-stone-200/80 sticky top-20 z-30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 hover:bg-mahogany-950 hover:text-white transition-all font-bold text-xs text-mahogany-950 border border-stone-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al inicio</span>
          </button>
          
          <span className="text-xs font-serif-title font-bold text-mahogany-950">
            Sobre Nosotros • Momentos Spa
          </span>
        </div>
      </div>

      {/* Hero Banner Sobre Nosotros */}
      <section className="relative overflow-hidden bg-mahogany-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="./assets/servicios_spa.jpg" 
            alt="Fondo Spa" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950 via-mahogany-950/80 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Santuario de Calma en Miramar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-white leading-tight">
            Sobre Momentos Spa
          </h1>

          {/* Lema Oficial */}
          <div className="pt-2">
            <span className="font-serif-title italic text-2xl sm:text-3xl text-gold block font-normal">
              “Siempre pensando en ti”
            </span>
          </div>

          <p className="text-cream-200/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Nacimos con la vocación de brindar una experiencia de desconexión auténtica, armonía física y renovación interior en el entorno más acogedor y exclusivo de La Habana.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 bg-gold hover:bg-gold-light text-mahogany-950 font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar una Cita</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-full transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-16">
        
        {/* Quick Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(60,19,24,0.08)] border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold-dark flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title font-bold text-xl text-mahogany-950">Filosofía Holística</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              No tratamos solo síntomas de tensión; comprendemos el cuerpo como una unidad donde mente, emociones y musculatura se equilibran mediante el tacto consciente.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(60,19,24,0.08)] border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-mahogany-950 text-gold flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title font-bold text-xl text-mahogany-950">Terapeutas Certificadas</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Nuestro equipo cuenta con rigurosa preparación en anatomía, masajes terapéuticos orientales y occidentales, maderoterapia y cosmetología avanzada.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(60,19,24,0.08)] border border-stone-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title font-bold text-xl text-mahogany-950">Atención de Cortesía</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Fieles a nuestro lema, cada visita incluye una bebida no alcohólica de cortesía: café expreso recién colado, té botánico, jugo natural, agua o refresco frío.
            </p>
          </div>
        </div>

        {/* Historia & Misión */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 text-mahogany-950 text-xs font-bold uppercase tracking-wider">
              <span>Nuestra Historia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-mahogany-950 leading-tight">
              Un remanso de paz concebido para tu bienestar
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
              <p>
                Momentos Spa nació en el emblemático barrio residencial de <strong>Miramar, Playa</strong>, ante la creciente necesidad de un espacio genuino de alivio y serenidad en La Habana.
              </p>
              <p>
                Diseñamos cada rincón pensando en aislar los ruidos del entorno y sumergirte en una atmósfera de luz cálida, aromas botánicos puros y cabinas climatizadas que invitan al reposo inmediato.
              </p>
              <p>
                Desde masajes descontracturantes intensos hasta paquetes sensoriales para dos personas con bañera de hidromasaje y brindis, cada detalle está pensado bajo una única premisa: <em>hacerte sentir cuidado, valorado y renovado</em>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]">
              <img 
                src="./assets/pareja_jacuzzi.jpg" 
                alt="Instalaciones Jacuzzi" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] mt-6">
              <img 
                src="./assets/masaje_relax.jpg" 
                alt="Cabina de Masajes" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Nuestras Instalaciones */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">Espacios de Confort</span>
            <h2 className="text-3xl font-serif-title font-bold text-mahogany-950">Nuestras Instalaciones</h2>
            <p className="text-stone-600 text-sm">Diseñadas para garantizar privacidad, higiene estricta y confort absoluto.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img src="./assets/masaje_m01.jpg" alt="Cabinas Individuales" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-title font-bold text-stone-900 text-base">Cabinas Climatizadas</h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Espacios privados con camillas acolchadas ergonómicas, toallas higienizadas y luz tenue relajante.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img src="./assets/pareja_jacuzzi.jpg" alt="Bañera de Hidromasaje" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-title font-bold text-stone-900 text-base">Bañera de Hidromasaje</h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Jacuzzi con microburbujas a temperatura regulable y sales minerales para sesiones privadas individuales o en pareja.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img src="./assets/pareja_sauna.jpg" alt="Zona de Calor y Sauna" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-title font-bold text-stone-900 text-base">Sauna & Calor Terapéutico</h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Área hidrotermal para inducir transpiración desintoxicante, apertura de poros y relajación muscular profunda.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm flex flex-col">
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden">
                <img src="./assets/salon_belleza.jpg" alt="Salón de Belleza" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-title font-bold text-stone-900 text-base">Salón de Belleza</h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Área técnica para peluquería, lavado de estilo, tratamientos capilares, pedicura spa y depilación higiénica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación y Horarios Banner */}
        <section className="bg-mahogany-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gold/20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Visítanos en Miramar</span>
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
              ¿Dónde estamos ubicados?
            </h3>
            <p className="text-cream-200/80 text-sm leading-relaxed">
              En una de las zonas más tranquilas y seguras de Playa, con fácil acceso y privacidad asegurada para tu llegada.
            </p>

            <div className="space-y-2 text-sm text-cream-100 pt-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Miércoles a Domingo: 10:00 AM – 6:00 PM (Lunes y Martes Cerrado)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+53 59710688</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
            <span className="text-gold font-serif-title italic text-lg">“Pensando en ti”</span>
            <p className="text-xs text-cream-200/70 max-w-sm">
              Coordina tu cita previa con anticipación. Además contamos con <strong>Servicio de taxi 🚕</strong> para recogerte y llevarte de regreso.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3 bg-gold hover:bg-gold-light text-mahogany-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all"
            >
              Reservar Cita Ahora
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
