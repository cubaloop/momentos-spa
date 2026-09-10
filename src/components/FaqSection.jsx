import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "¿Es necesario reservar con anticipación?",
      a: "Sí, recomendamos reservar con al menos 24 a 48 horas de anticipación a través de nuestro calendario web o vía WhatsApp para garantizar la disponibilidad de la cabina privada y su terapeuta preferida."
    },
    {
      q: "¿Cuáles son los días y horarios de atención?",
      a: "Atendemos de Miércoles a Domingo en el horario de 10:00 AM a 7:00 PM. Los días Lunes y Martes permanecemos cerrados por descanso del personal y mantenimiento profundo de las instalaciones."
    },
    {
      q: "¿Qué incluye la visita a Momentos Spa?",
      a: "Todas nuestras sesiones de spa incluyen uso de toallas higienizadas, batas de felpa, pantuflas descartables, taquillas privadas con llave y bebida de bienvenida (infusión botánica o copa de cortesía)."
    },
    {
      q: "¿Cómo funciona el envío de reserva por WhatsApp?",
      a: "Una vez que eliges tu tratamiento, día y hora en el calendario y completas tu cuenta de usuario, el sistema genera automáticamente un mensaje estructurado y abre directamente el chat con nuestra recepción en el +53 59710688 para confirmar tu cita al instante."
    },
    {
      q: "¿Dónde están ubicados exactamente?",
      a: "Nos encontramos en Calle 44 #111 entre 3ra y 1ra A, Miramar, Playa, La Habana, Cuba. Una zona tranquila, accesible y con fácil estacionamiento privado."
    }
  ];

  return (
    <section className="py-20 bg-cream-100 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mahogany-700">
            • DUDAS FRECUENTES •
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            Preguntas & Respuestas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-cream-50 transition-colors"
              >
                <span className="font-serif-title font-bold text-stone-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${openIndex === idx ? 'rotate-180 text-mahogany-800' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
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
