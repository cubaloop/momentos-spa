import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function MetricsBanner() {
  const { t } = useLanguage();
  const metrics = [
    { numKey: 'metric1Num', numDef: "98%", lblKey: 'metric1Label', lblDef: "SATISFACCIÓN", subKey: 'metric1Sub', subDef: "Clientes que repiten su visita cada mes" },
    { numKey: 'metric2Num', numDef: "15+", lblKey: 'metric2Label', lblDef: "TERAPEUTAS", subKey: 'metric2Sub', subDef: "Especialistas certificadas en salud & belleza" },
    { numKey: 'metric3Num', numDef: "6,000+", lblKey: 'metric3Label', lblDef: "SESIONES", subKey: 'metric3Sub', subDef: "Experiencias de bienestar completadas" },
    { numKey: 'metric4Num', numDef: "5 DÍAS", lblKey: 'metric4Label', lblDef: "MIÉ - DOM", subKey: 'metric4Sub', subDef: "Horario de 10:00 AM a 6:00 PM" }
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {metrics.map((m, idx) => (
            <div key={idx} className="px-4 py-2">
              <EditableText
                as="div"
                textKey={m.numKey}
                defaultText={m.numDef}
                className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-mahogany-950"
                label={`Métrica ${idx + 1} Número`}
              />
              <EditableText
                as="div"
                textKey={m.lblKey}
                defaultText={m.lblDef}
                className="text-xs font-bold uppercase tracking-widest text-mahogany-700 mt-2"
                label={`Métrica ${idx + 1} Etiqueta`}
              />
              <EditableText
                as="div"
                textKey={m.subKey}
                defaultText={m.subDef}
                className="text-xs text-stone-500 mt-1 max-w-[200px] mx-auto"
                multiline={true}
                label={`Métrica ${idx + 1} Subtítulo`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
