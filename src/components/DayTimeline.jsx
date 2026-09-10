import React from 'react';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DayTimeline() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t('time1Title', "10:00 AM • Llegada & Test Sensorial"),
      desc: t('time1Desc', "Bienvenida en nuestro salón climatizado, infusión relajante y selección de aceites esenciales personalizados.")
    },
    {
      step: "02",
      title: t('time2Title', "10:30 AM • Terapia Principal en Cabina"),
      desc: t('time2Desc', "Sesión de masaje terapéutico o Japanese Head Spa en camilla con toallas precalentadas.")
    },
    {
      step: "03",
      title: t('time3Title', "11:45 AM • Circuito Termal & Jacuzzi"),
      desc: t('time3Desc', "Inmersión en hidromasaje con sales marinas minerales y sesión de sauna seco de cedro.")
    },
    {
      step: "04",
      title: t('time4Title', "12:30 PM • Reposo con Copa & Aperitivo"),
      desc: t('time4Desc', "Degustación de frutas frescas, bombones y vino en nuestra terraza privada antes de regresar a la ciudad.")
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            {t('timelineTag', 'TU VIAJE SENSORIAL')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            {t('timelineTitle', 'Tu Día Perfecto de Spa en 4 Fases')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('timelineSubtitle', 'Diseñado para que disfrutes sin prisas desde que entras por nuestro jardín en Miramar.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-cream-50 border border-stone-200/80 space-y-3 relative group hover:bg-cream-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-mahogany-950 text-gold flex items-center justify-center font-serif-title font-bold text-lg shadow-sm">
                {st.step}
              </div>
              <h3 className="font-bold text-sm text-stone-900 leading-snug">
                {st.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
