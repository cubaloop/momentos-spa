import React from 'react';

export default function MetricsBanner() {
  const metrics = [
    { number: "98%", label: "SATISFACCIÓN", sub: "Clientes que repiten su visita cada mes" },
    { number: "15+", label: "TERAPEUTAS", sub: "Especialistas certificadas en salud & belleza" },
    { number: "6,000+", label: "SESIONES", sub: "Experiencias de bienestar completadas" },
    { number: "5 DÍAS", label: "MIÉ - DOM", sub: "Horarios extendidos de 10am a 7pm" }
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {metrics.map((m, idx) => (
            <div key={idx} className="px-4 py-2">
              <div className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-mahogany-950">
                {m.number}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-mahogany-700 mt-2">
                {m.label}
              </div>
              <div className="text-xs text-stone-500 mt-1 max-w-[200px] mx-auto">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
