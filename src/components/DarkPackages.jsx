import React from 'react';
import { Calendar, Check, ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DarkPackages({ onOpenBooking, onNavigateToService }) {
  const { t, getLocalizedServiceById } = useLanguage();

  const packages = [
    {
      id: "srv_headspa",
      badge: t('badgeHeadSpa', "⭐ TENDENCIA"),
      title: getLocalizedServiceById("srv_headspa")?.name || "Japanese Head Spa Premium",
      subtitle: getLocalizedServiceById("srv_headspa")?.description || "Microcascada tibia y masaje craneal shiatsu",
      price: 65,
      duration: "75 min",
      image: "./assets/head_spa.jpg",
      popular: true,
      features: [
        t('feat1_1', "Ducha circular de cascada tibia Halo"),
        t('feat1_2', "Masaje shiatsu craneal y cervical"),
        t('feat1_3', "Vapor ozono purificante capilar"),
        t('feat1_4', "Hidratación facial express incluida")
      ]
    },
    {
      id: "srv_masaje_pareja",
      badge: t('badgeCouples', "❤️ PAREJAS"),
      title: getLocalizedServiceById("srv_masaje_pareja")?.name || "Ritual Momentos en Pareja Deluxe",
      subtitle: getLocalizedServiceById("srv_masaje_pareja")?.description || "Cabina suite privada para dos con brindis",
      price: 80,
      duration: "90 min",
      image: "./assets/masaje_pareja.jpg",
      popular: true,
      features: [
        t('feat2_1', "Masaje relajante sincronizado para 2"),
        t('feat2_2', "Copas de bienvenida y bombones"),
        t('feat2_3', "Acceso privado a jacuzzi y sauna"),
        t('feat2_4', "Batas de felpa y pantuflas de cortesía")
      ]
    },
    {
      id: "srv_circuito_completo",
      badge: t('badgeThermal', "🌿 TERMOTERAPIA"),
      title: getLocalizedServiceById("srv_circuito_completo")?.name || "Circuito Termal & Piedras",
      subtitle: getLocalizedServiceById("srv_circuito_completo")?.description || "Jacuzzi con sales y piedras volcánicas",
      price: 85,
      duration: "110 min",
      image: "./assets/circuito_termal.jpg",
      popular: false,
      features: [
        t('feat3_1', "Sauna seco terapéutico de cedro"),
        t('feat3_2', "Jacuzzi privado con sales minerales"),
        t('feat3_3', "Masaje completo de piedras calientes"),
        t('feat3_4', "Infusión botánica revitalizante")
      ]
    }
  ];

  return (
    <section className="py-20 bg-mahogany-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mahogany-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            {t('packagesBadge', '⭐ EXPERIENCIAS EXCLUSIVAS')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('packagesTitle', 'Nuestros Rituales Signature Más Solicitados')}
          </h2>
          <p className="text-cream-200/80 text-sm sm:text-base">
            {t('packagesSubtitle', 'Selección de tratamientos holísticos diseñados para brindar la máxima desconexión y revitalización sensorial.')}
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
                  onClick={() => onNavigateToService && onNavigateToService({ id: pkg.id, name: pkg.title })}
                  className="relative h-52 overflow-hidden cursor-pointer"
                  title="Ver página de este ritual"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-mahogany-950/80 text-gold border border-gold/30 backdrop-blur-sm">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="bg-white/90 text-mahogany-950 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t('packagesViewDetail', 'Ver detalle completo')}</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 
                      onClick={() => onNavigateToService && onNavigateToService({ id: pkg.id, name: pkg.title })}
                      className="font-serif-title text-xl sm:text-2xl font-bold cursor-pointer hover:text-gold transition-colors"
                    >
                      {pkg.title}
                    </h3>
                  </div>
                  <p className="text-xs text-cream-200/70 mb-4 line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10 text-xs text-cream-200/90">
                    <span className="font-serif-title text-3xl font-extrabold text-gold">${pkg.price} USD</span>
                    <span>•</span>
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-cream-100">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenBooking({ id: pkg.id, name: pkg.title, price: pkg.price, duration: pkg.duration })}
                    className="w-full py-3.5 px-6 rounded-full bg-gold hover:bg-gold-light text-mahogany-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t('packagesBookNow', 'Reservar este Ritual')}</span>
                  </button>
                  <button
                    onClick={() => onNavigateToService && onNavigateToService({ id: pkg.id, name: pkg.title })}
                    className="w-full py-2 text-center text-xs text-cream-200/60 hover:text-gold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{t('packagesViewDetail', 'Ver detalle completo')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
