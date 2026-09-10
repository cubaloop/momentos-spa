import React from 'react';
import { ShieldCheck, Heart, Moon, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BenefitsRejuvenation() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: ShieldCheck,
      title: t('benefit1Title', "Alivio del Dolor & Tensión Muscular"),
      desc: t('benefit1Desc', "Liberación de contracturas cervicales, lumbares y sobrecargas del día a día mediante maniobras descontracturantes profundas.")
    },
    {
      icon: Sparkles,
      title: t('benefit2Title', "Regeneración Celular & Oxigenación"),
      desc: t('benefit2Desc', "La termoterapia en sauna y jacuzzi estimula la microcirculación y favorece la desintoxicación profunda del organismo.")
    },
    {
      icon: Moon,
      title: t('benefit3Title', "Salud Mental, Sueño Profundo & Calma"),
      desc: t('benefit3Desc', "Reducción radical de cortisol y estimulación de endorfinas para combatir el insomnio y la fatiga mental.")
    },
    {
      icon: Heart,
      title: t('benefit4Title', "Atmósfera de Privacidad & Exclusividad"),
      desc: t('benefit4Desc', "Cabinas suite individuales y para parejas con climatización independiente y luz tenue sin interrupciones.")
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-cream-50/60 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            {t('benefitsTag', 'RENOVACIÓN TOTAL')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            {t('benefitsTitle', 'Beneficios de Nuestro Santuario Terapéutico')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('benefitsSubtitle', 'Cada tratamiento en Momentos Spa está formulado con técnicas clínicas y botánicas para maximizar tu bienestar.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream-100 text-mahogany-900 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-mahogany-800" />
                </div>
                <h3 className="font-serif-title text-base sm:text-lg font-bold text-stone-900 leading-snug">
                  {b.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
