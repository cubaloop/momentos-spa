import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function ComparisonTable() {
  const { t } = useLanguage();

  const rows = [
    {
      featureKey: 'compRow1Feature',
      featureDef: "Privacidad en Cabina",
      usKey: 'compRow1Us',
      usDef: "100% Suite privada individual o en pareja",
      themKey: 'compRow1Them',
      themDef: "Salas compartidas con cortinas"
    },
    {
      featureKey: 'compRow2Feature',
      featureDef: "Japanese Head Spa",
      usKey: 'compRow2Us',
      usDef: "Cascada Halo tibia y shiatsu capilar",
      themKey: 'compRow2Them',
      themDef: "No disponible en la mayoría"
    },
    {
      featureKey: 'compRow3Feature',
      featureDef: "Circuito de Hidroterapia",
      usKey: 'compRow3Us',
      usDef: "Jacuzzi privado con sales + sauna de cedro",
      themKey: 'compRow3Them',
      themDef: "Acceso limitado o compartido"
    },
    {
      featureKey: 'compRow4Feature',
      featureDef: "Reserva & Confirmación",
      usKey: 'compRow4Us',
      usDef: "Inmediata vía WhatsApp y Calendario",
      themKey: 'compRow4Them',
      themDef: "Llamadas lentas o sin respuesta"
    },
    {
      featureKey: 'compRow5Feature',
      featureDef: "Ubicación & Parqueo",
      usKey: 'compRow5Us',
      usDef: "Miramar residencial con parqueo vigilado",
      themKey: 'compRow5Them',
      themDef: "Zonas concurridas con difícil acceso"
    }
  ];

  return (
    <section className="py-20 bg-cream-50/80 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            <EditableText
              textKey="comparisonTag"
              defaultText="ESTÁNDARES DE CALIDAD"
              label="Etiqueta Superior Tabla"
            />
          </span>
          <EditableText
            as="h2"
            textKey="comparisonTitle"
            defaultText="¿Por qué Momentos Spa es Diferente?"
            className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
            label="Título Tabla Comparativa"
          />
          <EditableText
            as="p"
            textKey="comparisonSubtitle"
            defaultText="Compara los detalles que convierten nuestra experiencia en el santuario predilecto de La Habana."
            className="text-stone-600 text-xs sm:text-sm"
            multiline={true}
            label="Subtítulo Tabla Comparativa"
          />
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-mahogany-950 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold">
            <div className="col-span-5">
              <EditableText
                textKey="compCol1"
                defaultText="Experiencia"
                label="Columna 1 Encabezado"
              />
            </div>
            <div className="col-span-4 text-gold">
              <EditableText
                textKey="compCol2"
                defaultText="Momentos Spa Miramar"
                label="Columna 2 Encabezado"
              />
            </div>
            <div className="col-span-3 text-stone-400">
              <EditableText
                textKey="compCol3"
                defaultText="Spas Tradicionales"
                label="Columna 3 Encabezado"
              />
            </div>
          </div>

          <div className="divide-y divide-stone-100 text-xs sm:text-sm">
            {rows.map((r, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-cream-50/60 transition-colors">
                <div className="col-span-5 font-semibold text-stone-900 pr-2">
                  <EditableText
                    textKey={r.featureKey}
                    defaultText={r.featureDef}
                    label={`Fila ${idx + 1} Característica`}
                  />
                </div>
                <div className="col-span-4 text-emerald-900 font-medium flex items-center gap-2 pr-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <EditableText
                    textKey={r.usKey}
                    defaultText={r.usDef}
                    label={`Fila ${idx + 1} Momentos Spa`}
                  />
                </div>
                <div className="col-span-3 text-stone-500 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center text-xs shrink-0 font-bold">✕</span>
                  <EditableText
                    textKey={r.themKey}
                    defaultText={r.themDef}
                    label={`Fila ${idx + 1} Otros Spas`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
