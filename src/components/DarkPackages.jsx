import React from 'react';
import { Calendar, Check, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { allServices } from '../data/servicesData';

export default function DarkPackages({ onOpenBooking, onNavigateToService }) {
  const packages = [
    {
      id: "srv_ritual_amor_pareja",
      badge: "❤️ MÁS POPULAR",
      title: "Ritual de Amor & Relax en Pareja",
      subtitle: "3 horas aprox. con piedras volcánicas, facial hidratante y jacuzzi privado",
      price: 130,
      duration: "3h aprox.",
      image: "./assets/catalog/masaje-en-pareja-2-horas.webp",
      popular: true,
      features: [
        "Ambiente romántico con velas y duchas dobles",
        "Exfoliante corporal + Masaje piedras volcánicas 30 min",
        "Facial hidratante revitalizante 60 min",
        "Bañera hidromasaje privada 45 min con vino y aperitivo"
      ]
    },
    {
      id: "srv_refugio_zen",
      badge: "⭐ MÁXIMA INMERSIÓN",
      title: "Refugio Zen",
      subtitle: "4 horas y 20 min aprox. de retiro integral y cuidado holístico",
      price: 160,
      duration: "4h 20 min",
      image: "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
      popular: true,
      features: [
        "Masaje descontracturante y piedras calientes 2 horas",
        "Limpieza facial 60 min + Exfoliante corporal 20 min",
        "Duchas climatizadas 15 min + Bañera hidromasaje 45 min",
        "Copa de vino al gusto y aperitivo para acompañar"
      ]
    },
    {
      id: "srv_plan_romantico",
      badge: "🍾 BOTELLA DE VINO",
      title: "Plan Romántico",
      subtitle: "2 horas aprox. con masaje de velas, facial y botella de vino",
      price: 95,
      duration: "2h aprox.",
      image: "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
      popular: false,
      features: [
        "Masaje con velas aromáticas tibias 30 min",
        "Facial iluminador para dos 30 min",
        "Bañera de hidromasaje privada 45 min",
        "Botella de vino a elección y aperitivo"
      ]
    }
  ];

  const handlePackageClick = (pkg) => {
    const matchedService = allServices.find(s => s.id === pkg.id);
    if (onNavigateToService && matchedService) {
      onNavigateToService(matchedService);
    } else if (onNavigateToService) {
      onNavigateToService({ id: pkg.id, name: pkg.title });
    }
  };

  return (
    <section className="py-20 bg-mahogany-950 text-white relative overflow-hidden" id="experiencias">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mahogany-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            EXPERIENCIAS EXCLUSIVAS
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Nuestros Paquetes Signature Más Solicitados
          </h2>
          <p className="text-cream-200/80 text-sm sm:text-base">
            Selección de experiencias sensoriales y combinadas diseñadas para brindar la máxima desconexión, privacidad y bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
                pkg.popular
                  ? 'bg-mahogany-900/90 border-gold/60 shadow-2xl shadow-gold/10 lg:-translate-y-2'
                  : 'bg-mahogany-900/40 border-white/10 hover:border-white/30'
              }`}
            >
              {pkg.image && (
                <div 
                  onClick={() => handlePackageClick(pkg)}
                  className="relative h-56 overflow-hidden cursor-pointer"
                  title="Ver detalles de este paquete"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.handled) {
                        e.currentTarget.dataset.handled = 'true';
                        e.currentTarget.src = './assets/masaje_pareja.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-mahogany-950/80 text-gold border border-gold/30 backdrop-blur-sm">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-mahogany-950/80 text-white backdrop-blur-sm text-xs flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-gold" />
                      <span>Ver</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => handlePackageClick(pkg)}
                    className="font-serif-title text-2xl font-bold text-white mb-2 cursor-pointer hover:text-gold transition-colors"
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-cream-200/70 mb-6 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl font-serif-title font-bold text-gold">
                      ${pkg.price}
                    </span>
                    <span className="text-xs text-cream-200/60 uppercase">USD / {pkg.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-cream-100/90 leading-relaxed">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4">
                  <button
                    onClick={() => {
                      const matched = allServices.find(s => s.id === pkg.id);
                      onOpenBooking(matched || { name: pkg.title, duration: pkg.duration, price: pkg.price });
                    }}
                    className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                      pkg.popular
                        ? 'bg-gold hover:bg-gold-light text-mahogany-950 hover:shadow-gold/20'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reservar este Paquete</span>
                  </button>

                  <button
                    onClick={() => handlePackageClick(pkg)}
                    className="w-full py-2 text-center text-xs text-cream-200/60 hover:text-gold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Ver ficha técnica y fotos</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-cream-200/60 italic">
          ☕ Todos nuestros paquetes incluyen bebida de cortesía (té, agua, café expreso, jugo o refresco frío).
        </div>
      </div>
    </section>
  );
}
