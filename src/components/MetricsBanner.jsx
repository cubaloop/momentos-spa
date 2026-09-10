import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function MetricsBanner() {
  const { t } = useLanguage();
  const metrics = [
    { number: t('metric1Num', "98%"), label: t('metric1Label', "SATISFACCIÓN"), sub: t('metric1Sub', "Clientes que repiten su visita cada mes") },
    { number: t('metric2Num', "15+"), label: t('metric2Label', "TERAPEUTAS"), sub: t('metric2Sub', "Especialistas certificadas en salud & belleza") },
    { number: t('metric3Num', "6,000+"), label: t('metric3Label', "SESIONES"), sub: t('metric3Sub', "Experiencias de bienestar completadas") },
    { number: t('metric4Num', "5 DÍAS"), label: t('metric4Label', "MIÉ - DOM"), sub: t('metric4Sub', "Horarios extendidos de 10am a 7pm") }
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {metrics.map((m, idx) => (
            <div key={idx} className="px-4 py-2">
              <div className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-mahogany-950">
                {m.number}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-mahogany-700 mt-2">
                {m.label}
              </div>
              <div className="text-xs text-stone-500 mt-1 max-w-[200px] mx-auto">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
