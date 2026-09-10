import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t('review1Name', "Alejandro Gómez"),
      location: t('review1Location', "La Habana, Cuba"),
      text: t('review1Text', '"El Head Spa japonés es otro nivel. La cascada tibia de agua en el cuero cabelludo me quitó el dolor de cabeza y el estrés de semanas. La atención de las terapeutas es impecable."')
    },
    {
      name: t('review2Name', "Claire Dupont"),
      location: t('review2Location', "París, Francia"),
      text: t('review2Text', '"Reservamos el paquete de pareja para nuestro aniversario durante nuestro viaje a La Habana. El jacuzzi privado, los masajes y la copa de vino crearon un recuerdo inolvidable."')
    },
    {
      name: t('review3Name', "Marco Rossi"),
      location: t('review3Location', "Milán, Italia"),
      text: t('review3Text', '"Excelente masaje descontracturante. La presión exacta y la cabina muy fresca y limpia. Sin duda el mejor spa de Miramar."')
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            {t('testimonialsTag', 'TESTIMONIOS REALES')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            {t('testimonialsTitle', 'Lo Que Dicen Quienes Nos Visitan')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('testimonialsSubtitle', 'Más de 12,000 huéspedes locales e internacionales han encontrado su pausa en Miramar.')}
          </p>
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
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/70">
                <div className="font-serif-title font-bold text-sm text-stone-900">{rev.name}</div>
                <div className="text-xs text-stone-500">{rev.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
