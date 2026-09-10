import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export default function ComparisonTable({ onOpenBooking }) {
  const rows = [
    { feature: "Terapeutas certificadas con amplia trayectoria", spa: true, salon: false, diy: false },
    { feature: "Japanese Head Spa con microcascada y diagnóstico capilar", spa: true, salon: false, diy: false },
    { feature: "Circuito termal privado con jacuzzi y sauna seco de cedro", spa: true, salon: false, diy: false },
    { feature: "Cabinas climatizadas, insonorizadas y batas de felpa", spa: true, salon: "Parcial", diy: false },
    { feature: "Aceites esenciales 100% orgánicos y cosmética premium", spa: true, salon: false, diy: false },
    { feature: "Copa de cortesía, frutas y aromaterapia en cada sesión", spa: true, salon: false, diy: false },
    { feature: "Reserva digital sincronizada directamente a WhatsApp", spa: true, salon: false, diy: false }
  ];

  return (
    <section className="py-20 bg-cream-50/70 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mahogany-700">
            • LA DIFERENCIA MOMENTOS •
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany-950">
            Más que un Salón, Tu Santuario
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Compara por qué nuestros clientes eligen la experiencia integral de Momentos Spa en Miramar.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-12 bg-cream-200/70 p-4 sm:p-6 text-xs sm:text-sm font-bold text-stone-700 border-b border-stone-200">
            <div className="col-span-6 sm:col-span-6">Criterio de Experiencia</div>
            <div className="col-span-3 sm:col-span-3 text-center text-mahogany-950 font-extrabold flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Momentos Spa</span>
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-stone-400 font-semibold">Salones Comunes</div>
          </div>

          <div className="divide-y divide-stone-100">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-cream-50 transition-colors">
                <div className="col-span-6 sm:col-span-6 text-stone-800 font-medium">
                  {row.feature}
                </div>
                <div className="col-span-3 sm:col-span-3 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-mahogany-950 text-gold flex items-center justify-center shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-3 flex justify-center">
                  {row.salon === "Parcial" ? (
                    <span className="text-[11px] px-2 py-0.5 bg-stone-100 text-stone-500 rounded font-medium">A veces</span>
                  ) : (
                    <X className="w-4 h-4 text-stone-300" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-mahogany-950 p-6 text-center text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="font-serif-title font-bold text-lg">¿Listo para vivir la verdadera relajación?</div>
              <div className="text-xs text-cream-300">Reserva online en 2 minutos sin esperas.</div>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="bg-gold hover:bg-gold-light text-mahogany-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
              Agendar Cita Ahora
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
