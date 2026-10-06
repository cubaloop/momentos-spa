import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const reviews = [
    {
      nameKey: 'review1Name',
      nameDef: "Alejandro Gómez",
      locKey: 'review1Location',
      locDef: "La Habana, Cuba",
      textKey: 'review1Text',
      textDef: '"El Head Spa japonés es otro nivel. La cascada tibia de agua en el cuero cabelludo me quitó el dolor de cabeza y el estrés de semanas. La atención de las terapeutas es impecable."'
    },
    {
      nameKey: 'review2Name',
      nameDef: "Claire Dupont",
      locKey: 'review2Location',
      locDef: "París, Francia",
      textKey: 'review2Text',
      textDef: '"Reservamos el paquete de pareja para nuestro aniversario durante nuestro viaje a La Habana. El jacuzzi privado, los masajes y la copa de vino crearon un recuerdo inolvidable."'
    },
    {
      nameKey: 'review3Name',
      nameDef: "Marco Rossi",
      locKey: 'review3Location',
      locDef: "Milán, Italia",
      textKey: 'review3Text',
      textDef: '"Excelente masaje descontracturante. La presión exacta y la cabina muy fresca y limpia. Sin duda el mejor spa de Miramar."'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            <EditableText
              textKey="testimonialsTag"
              defaultText="TESTIMONIOS REALES"
              label="Etiqueta Superior Testimonios"
            />
          </span>
          <EditableText
            as="h2"
            textKey="testimonialsTitle"
            defaultText="Lo Que Dicen Quienes Nos Visitan"
            className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
            label="Título Testimonios"
          />
          <EditableText
            as="p"
            textKey="testimonialsSubtitle"
            defaultText="Más de 12,000 huéspedes locales e internacionales han encontrado su pausa en Miramar."
            className="text-stone-600 text-xs sm:text-sm"
            multiline={true}
            label="Subtítulo Testimonios"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-cream-50 rounded-3xl p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                <EditableText
                  as="p"
                  textKey={rev.textKey}
                  defaultText={rev.textDef}
                  className="text-stone-700 text-xs sm:text-sm leading-relaxed italic"
                  multiline={true}
                  label={`Testimonio ${idx + 1} Opinión`}
                />
              </div>

              <div className="pt-4 border-t border-stone-200/70">
                <EditableText
                  as="div"
                  textKey={rev.nameKey}
                  defaultText={rev.nameDef}
                  className="font-serif-title font-bold text-sm text-stone-900"
                  label={`Testimonio ${idx + 1} Nombre`}
                />
                <EditableText
                  as="div"
                  textKey={rev.locKey}
                  defaultText={rev.locDef}
                  className="text-xs text-stone-500"
                  label={`Testimonio ${idx + 1} Ubicación`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
