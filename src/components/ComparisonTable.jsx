import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ComparisonTable() {
  const { t } = useLanguage();

  const rows = [
    {
      feature: t('compRow1Feature', "Privacidad en Cabina"),
      us: t('compRow1Us', "100% Suite privada individual o en pareja"),
      them: t('compRow1Them', "Salas compartidas con cortinas")
    },
    {
      feature: t('compRow2Feature', "Japanese Head Spa"),
      us: t('compRow2Us', "Cascada Halo tibia y shiatsu capilar"),
      them: t('compRow2Them', "No disponible en la mayoría")
    },
    {
      feature: t('compRow3Feature', "Circuito de Hidroterapia"),
      us: t('compRow3Us', "Jacuzzi privado con sales + sauna de cedro"),
      them: t('compRow3Them', "Acceso limitado o compartido")
    },
    {
      feature: t('compRow4Feature', "Reserva & Confirmación"),
      us: t('compRow4Us', "Inmediata vía WhatsApp y Calendario"),
      them: t('compRow4Them', "Llamadas lentas o sin respuesta")
    },
    {
      feature: t('compRow5Feature', "Ubicación & Parqueo"),
      us: t('compRow5Us', "Miramar residencial con parqueo vigilado"),
      them: t('compRow5Them', "Zonas concurridas con difícil acceso")
    }
  ];

  return (
    <section className="py-20 bg-cream-50/80 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            {t('comparisonTag', 'ESTÁNDARES DE CALIDAD')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            {t('comparisonTitle', '¿Por qué Momentos Spa es Diferente?')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('comparisonSubtitle', 'Compara los detalles que convierten nuestra experiencia en el santuario predilecto de La Habana.')}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-mahogany-950 text-white p-4 sm:p-5 text-xs sm:text-sm font-bold">
            <div className="col-span-5">{t('compCol1', 'Experiencia')}</div>
            <div className="col-span-4 text-gold">{t('compCol2', 'Momentos Spa Miramar')}</div>
            <div className="col-span-3 text-stone-400">{t('compCol3', 'Spas Tradicionales')}</div>
          </div>

          <div className="divide-y divide-stone-100 text-xs sm:text-sm">
            {rows.map((r, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-cream-50/60 transition-colors">
                <div className="col-span-5 font-semibold text-stone-900 pr-2">
                  {r.feature}
                </div>
                <div className="col-span-4 text-emerald-900 font-medium flex items-center gap-2 pr-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                  <span>{r.us}</span>
                </div>
                <div className="col-span-3 text-stone-500 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center text-xs shrink-0 font-bold">✕</span>
                  <span>{r.them}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
