import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: t('faq1Q', "¿Cómo se confirma la reserva?"), a: t('faq1A', "Al completar el formulario en la web, se envía tu solicitud directamente a nuestro WhatsApp oficial (+53 59710688), donde nuestra recepcionista te confirma la cita en pocos minutos.") },
    { q: t('faq2Q', "¿Cuáles son los días y horarios de apertura?"), a: t('faq2A', "Abrimos de Miércoles a Domingo de 10:00 AM a 7:00 PM. Lunes y Martes cerramos por mantenimiento general de instalaciones y descanso del equipo.") },
    { q: t('faq3Q', "¿Qué debo llevar a mi cita?"), a: t('faq3A', "Nada en absoluto. En Momentos Spa te proporcionamos toallas precalentadas, batas de felpa, pantuflas desechables, gorros y productos de ducha botánicos de alta gama.") },
    { q: t('faq4Q', "¿Puedo reservar para dos personas en la misma cabina?"), a: t('faq4A', "¡Sí! Contamos con cabinas suites dobles especialmente diseñadas para parejas o amigos/as que deseen recibir su tratamiento al unísono.") },
    { q: t('faq5Q', "¿Dónde están ubicados exactamente en Miramar?"), a: t('faq5A', "Nos encontramos en Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana. Contamos con parqueo privado vigilado gratuito para nuestros clientes.") },
    { q: t('faq6Q', "¿Qué métodos de pago aceptan?"), a: t('faq6A', "Aceptamos pagos en efectivo (USD, EUR, MLC, CUP a la tasa del día) y transferencias bancarias nacionales o internacionales.") }
  ];

  return (
    <section className="py-20 bg-cream-50/60 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            {t('faqTag', 'RESOLVEMOS TUS DUDAS')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            {t('faqTitle', 'Preguntas Frecuentes')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('faqSubtitle', 'Todo lo que necesitas saber antes de tu cita de bienestar.')}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-900 hover:text-mahogany-900 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ${openIdx === idx ? 'rotate-180 text-mahogany-800' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
