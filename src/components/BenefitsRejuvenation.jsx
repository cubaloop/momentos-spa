import React from 'react';
import { ShieldCheck, Heart, Moon, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function BenefitsRejuvenation() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: ShieldCheck,
      titleKey: 'benefit1Title',
      titleDef: "Alivio del Dolor & Tensión Muscular",
      descKey: 'benefit1Desc',
      descDef: "Liberación de contracturas cervicales, lumbares y sobrecargas del día a día mediante maniobras descontracturantes profundas."
    },
    {
      icon: Sparkles,
      titleKey: 'benefit2Title',
      titleDef: "Regeneración Celular & Oxigenación",
      descKey: 'benefit2Desc',
      descDef: "La termoterapia en sauna y jacuzzi estimula la microcirculación y favorece la desintoxicación profunda del organismo."
    },
    {
      icon: Moon,
      titleKey: 'benefit3Title',
      titleDef: "Salud Mental, Sueño Profundo & Calma",
      descKey: 'benefit3Desc',
      descDef: "Reducción radical de cortisol y estimulación de endorfinas para combatir el insomnio y la fatiga mental."
    },
    {
      icon: Heart,
      titleKey: 'benefit4Title',
      titleDef: "Atmósfera de Privacidad & Exclusividad",
      descKey: 'benefit4Desc',
      descDef: "Cabinas suite individuales y para parejas con climatización independiente y luz tenue sin interrupciones."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-cream-50/60 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            <EditableText
              textKey="benefitsTag"
              defaultText="RENOVACIÓN TOTAL"
              label="Etiqueta Superior Beneficios"
            />
          </span>
          <EditableText
            as="h2"
            textKey="benefitsTitle"
            defaultText="Beneficios de Nuestro Santuario Terapéutico"
            className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
            label="Título Beneficios"
          />
          <EditableText
            as="p"
            textKey="benefitsSubtitle"
            defaultText="Cada tratamiento en Momentos Spa está formulado con técnicas clínicas y botánicas para maximizar tu bienestar."
            className="text-stone-600 text-xs sm:text-sm"
            multiline={true}
            label="Subtítulo Beneficios"
          />
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
                <EditableText
                  as="h3"
                  textKey={b.titleKey}
                  defaultText={b.titleDef}
                  className="font-serif-title text-base sm:text-lg font-bold text-stone-900 leading-snug"
                  label={`Beneficio ${idx + 1} Título`}
                />
                <EditableText
                  as="p"
                  textKey={b.descKey}
                  defaultText={b.descDef}
                  className="text-xs sm:text-sm text-stone-600 leading-relaxed"
                  multiline={true}
                  label={`Beneficio ${idx + 1} Descripción`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
