import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      qKey: 'faq1Q',
      qDef: "¿Cómo se confirma la reserva?",
      aKey: 'faq1A',
      aDef: "Al completar el formulario en la web, se envía tu solicitud directamente a nuestro WhatsApp oficial (+53 59710688), donde nuestra recepcionista te confirma la cita en pocos minutos."
    },
    {
      qKey: 'faq2Q',
      qDef: "¿Cuáles son los días y horarios de apertura?",
      aKey: 'faq2A',
      aDef: "Abrimos de Miércoles a Domingo de 10:00 AM a 6:00 PM. Lunes y Martes cerramos por mantenimiento general de instalaciones y descanso del equipo."
    },
    {
      qKey: 'faqTaxiQ',
      qDef: "¿Tienen servicio de transporte o taxi?",
      aKey: 'faqTaxiA',
      aDef: '“¿No tienes cómo llegar? Nosotros te recogemos y te llevamos de regreso.” Ofrecemos Servicio de taxi privado para trasladarte cómodamente antes y después de tu cita. Puedes solicitarlo al reservar por WhatsApp.'
    },
    {
      qKey: 'faq3Q',
      qDef: "¿Qué debo llevar a mi cita?",
      aKey: 'faq3A',
      aDef: "Nada en absoluto. En Momentos Spa te proporcionamos toallas precalentadas, batas de felpa, pantuflas desechables, gorros y productos de ducha botánicos de alta gama."
    },
    {
      qKey: 'faq4Q',
      qDef: "¿Puedo reservar para dos personas en la misma cabina?",
      aKey: 'faq4A',
      aDef: "¡Sí! Contamos con cabinas suites dobles especialmente diseñadas para parejas o amigos/as que deseen recibir su tratamiento al unísono."
    },
    {
      qKey: 'faq5Q',
      qDef: "¿Dónde están ubicados exactamente en Miramar?",
      aKey: 'faq5A',
      aDef: "Nos encontramos en Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana. Contamos con parqueo privado vigilado gratuito para nuestros clientes."
    },
    {
      qKey: 'faq6Q',
      qDef: "¿Qué métodos de pago aceptan?",
      aKey: 'faq6A',
      aDef: "Aceptamos pagos en efectivo (USD, EUR, MLC, CUP a la tasa del día) y transferencias bancarias nacionales o internacionales."
    }
  ];

  return (
    <section className="py-20 bg-cream-50/60 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            <EditableText
              textKey="faqTag"
              defaultText="RESOLVEMOS TUS DUDAS"
              label="Etiqueta Superior Preguntas"
            />
          </span>
          <EditableText
            as="h2"
            textKey="faqTitle"
            defaultText="Preguntas Frecuentes"
            className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
            label="Título Preguntas Frecuentes"
          />
          <EditableText
            as="p"
            textKey="faqSubtitle"
            defaultText="Todo lo que necesitas saber antes de tu cita de bienestar."
            className="text-stone-600 text-xs sm:text-sm"
            multiline={true}
            label="Subtítulo Preguntas Frecuentes"
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-900 hover:text-mahogany-900 transition-colors"
              >
                <EditableText
                  textKey={faq.qKey}
                  defaultText={faq.qDef}
                  label={`Pregunta ${idx + 1}`}
                />
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ${openIdx === idx ? 'rotate-180 text-mahogany-800' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                  <EditableText
                    as="p"
                    textKey={faq.aKey}
                    defaultText={faq.aDef}
                    multiline={true}
                    label={`Respuesta ${idx + 1}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
