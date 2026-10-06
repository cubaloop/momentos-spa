import React from 'react';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function DayTimeline() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      titleKey: 'time1Title',
      titleDef: "10:00 AM • Llegada & Test Sensorial",
      descKey: 'time1Desc',
      descDef: "Bienvenida en nuestro salón climatizado, infusión relajante y selección de aceites esenciales personalizados."
    },
    {
      step: "02",
      titleKey: 'time2Title',
      titleDef: "10:30 AM • Terapia Principal en Cabina",
      descKey: 'time2Desc',
      descDef: "Sesión de masaje terapéutico o Japanese Head Spa en camilla con toallas precalentadas."
    },
    {
      step: "03",
      titleKey: 'time3Title',
      titleDef: "11:45 AM • Circuito Termal & Jacuzzi",
      descKey: 'time3Desc',
      descDef: "Inmersión en hidromasaje con sales marinas minerales y sesión de sauna seco de cedro."
    },
    {
      step: "04",
      titleKey: 'time4Title',
      titleDef: "12:30 PM • Reposo con Copa & Aperitivo",
      descKey: 'time4Desc',
      descDef: "Degustación de frutas frescas, bombones y vino en nuestra terraza privada antes de regresar a la ciudad."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            <EditableText
              textKey="timelineTag"
              defaultText="TU VIAJE SENSORIAL"
              label="Etiqueta Superior Itinerario"
            />
          </span>
          <EditableText
            as="h2"
            textKey="timelineTitle"
            defaultText="Tu Día Perfecto de Spa en 4 Fases"
            className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
            label="Título Itinerario"
          />
          <EditableText
            as="p"
            textKey="timelineSubtitle"
            defaultText="Diseñado para que disfrutes sin prisas desde que entras por nuestro jardín en Miramar."
            className="text-stone-600 text-xs sm:text-sm"
            multiline={true}
            label="Subtítulo Itinerario"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-cream-50 border border-stone-200/80 space-y-3 relative group hover:bg-cream-100 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-mahogany-950 text-gold flex items-center justify-center font-serif-title font-bold text-lg shadow-sm">
                {st.step}
              </div>
              <EditableText
                as="h3"
                textKey={st.titleKey}
                defaultText={st.titleDef}
                className="font-bold text-sm text-stone-900 leading-snug"
                label={`Fase ${st.step} Título`}
              />
              <EditableText
                as="p"
                textKey={st.descKey}
                defaultText={st.descDef}
                className="text-xs text-stone-600 leading-relaxed"
                multiline={true}
                label={`Fase ${st.step} Descripción`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
