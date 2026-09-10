import React from 'react';
import { Calendar, Check, Star, ArrowRight, Eye } from 'lucide-react';
import { getServiceById } from '../data/servicesData';

export default function DarkPackages({ onOpenBooking, onNavigateToService }) {
  const packages = [
    {
      id: "srv_headspa",
      badge: "⭐ TENDENCIA",
      title: "Japanese Head Spa Premium",
      subtitle: "Microcascada tibia y masaje craneal shiatsu",
      price: 65,
      duration: "75 min",
      image: "./assets/head_spa.jpg",
      popular: true,
      features: [
        "Ducha circular de cascada tibia Halo",
        "Masaje shiatsu craneal y cervical",
        "Vapor ozono purificante capilar",
        "Hidratación facial express incluida"
      ]
    },
    {
      id: "srv_masaje_pareja",
      badge: "❤️ PAREJAS",
      title: "Ritual Momentos en Pareja Deluxe",
      subtitle: "Cabina suite privada para dos con brindis",
      price: 80,
      duration: "90 min",
      image: "./assets/masaje_pareja.jpg",
      popular: true,
      features: [
        "Masaje relajante sincronizado para 2",
        "Copas de bienvenida y bombones",
        "Acceso privado a jacuzzi y sauna",
        "Batas de felpa y pantuflas de cortesía"
      ]
    },
    {
      id: "srv_circuito_completo",
      badge: "🌿 TERMOTERAPIA",
      title: "Circuito Termal & Piedras",
      subtitle: "Jacuzzi con sales y piedras volcánicas",
      price: 85,
      duration: "110 min",
      image: "./assets/circuito_termal.jpg",
      popular: false,
      features: [
        "Sauna seco terapéutico de cedro",
        "Jacuzzi privado con sales minerales",
        "Masaje completo de piedras calientes",
        "Infusión botánica revitalizante"
      ]
    }
  ];

  return (
    <section className="py-20 bg-mahogany-950 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-mahogany-900/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Condensed Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Experiencias de Alta Gama
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-100">
            Rituales de Lujo
          </h2>
          <p className="text-cream-300 text-xs sm:text-sm">
            Nuestros paquetes más solicitados en Miramar para una desconexión total.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-mahogany-900/90 to-mahogany-950 border border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-gold/30 hover:shadow-[0_25px_60px_rgba(197,168,128,0.25)]'
                  : 'bg-mahogany-900/40 border border-stone-800 shadow-xl hover:border-stone-700 hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Photo Thumbnail */}
                <div 
                  onClick={() => {
                    const srv = getServiceById(pkg.id);
                    if (srv && onNavigateToService) onNavigateToService(srv);
                  }}
                  className="w-full h-44 rounded-2xl overflow-hidden mb-5 relative shadow-inner cursor-pointer group"
                  title="Ver página completa de este ritual"
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-mahogany-950 bg-gold px-2.5 py-1 rounded-full shadow">
                    {pkg.badge}
                  </div>
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                    <span>{pkg.duration}</span>
                    <span className="flex items-center gap-1 text-gold">
                      <Eye className="w-3 h-3" />
                      <span>Ver fotos</span>
                    </span>
                  </div>
                </div>

                <h3 
                  onClick={() => {
                    const srv = getServiceById(pkg.id);
                    if (srv && onNavigateToService) onNavigateToService(srv);
                  }}
                  className="font-serif-title text-xl sm:text-2xl font-bold text-white mb-1 cursor-pointer hover:text-gold transition-colors"
                >
                  {pkg.title}
                </h3>
                <p className="text-xs text-cream-300 mb-4">
                  {pkg.subtitle}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 pb-4 border-b border-white/10 mb-4">
                  <span className="font-serif-title text-3xl sm:text-4xl font-extrabold text-white">${pkg.price}</span>
                  <span className="text-xs text-cream-300">USD / {pkg.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 text-xs text-cream-200 mb-6">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    const srv = getServiceById(pkg.id);
                    onOpenBooking(srv || { name: pkg.title, duration: pkg.duration, price: pkg.price });
                  }}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gold hover:bg-gold-light text-mahogany-950'
                      : 'bg-white hover:bg-cream-100 text-mahogany-950'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reservar Ahora</span>
                </button>

                <button
                  onClick={() => {
                    const srv = getServiceById(pkg.id);
                    if (srv && onNavigateToService) onNavigateToService(srv);
                  }}
                  className="w-full py-2 text-xs text-stone-300 hover:text-gold transition-colors flex items-center justify-center gap-1 font-medium"
                >
                  <span>Ver página completa & fotos</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
