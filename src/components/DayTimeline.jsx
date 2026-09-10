import React from 'react';
import { Sun, Coffee, Sunset, Moon, Sparkles } from 'lucide-react';

export default function DayTimeline({ onOpenBooking }) {
  const steps = [
    {
      time: "10:30 AM",
      phase: "Ritual Matutino",
      title: "Despertar Dérmico & Japanese Head Spa",
      desc: "Comienza la jornada con una infusión herbal purificante seguida de nuestro exclusivo ritual de micro-cascada para oxigenar el cuero cabelludo.",
      icon: Sun
    },
    {
      time: "01:30 PM",
      phase: "Alivio de Mediodía",
      title: "Masaje Descontracturante & Circuito Termal",
      desc: "Libera la tensión lumbar en cabina privada y sumérgete en el jacuzzi térmico para resetear la fatiga muscular acumulada.",
      icon: Coffee
    },
    {
      time: "04:30 PM",
      phase: "Estilismo & Manicura",
      title: "Belleza en Salón & Mirada Perfecta",
      desc: "Manicura rusa impecable y tratamiento intensivo botox capilar para lucir un brillo espejo inigualable.",
      icon: Sunset
    },
    {
      time: "06:30 PM",
      phase: "Desconexión de Cierre",
      title: "Masaje con Piedras Calientes & Brindis",
      desc: "Cierra el día en batas de felpa con un masaje holístico de cuerpo completo y copa de espumante o snack gourmet.",
      icon: Moon
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mahogany-700">
            • CRONOGRAMA DE RELAJACIÓN •
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany-950">
            Tu Día de Bienestar en Momentos Spa
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Descubre cómo planificar tu escapada perfecta de descanso desde que cruzas nuestras puertas en Miramar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-cream-100 rounded-3xl p-6 border border-stone-200 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-mahogany-800 bg-white px-3 py-1 rounded-full border border-stone-200">
                      {item.time}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-mahogany-950 text-gold flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    {item.phase}
                  </span>
                  <h3 className="font-serif-title text-lg font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-200/60">
                  <button
                    onClick={() => onOpenBooking()}
                    className="text-xs font-bold text-mahogany-900 hover:text-mahogany-700 flex items-center gap-1 group"
                  >
                    <span>Agendar este horario</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
