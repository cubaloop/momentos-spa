import React from 'react';

export default function MediaRow() {
  const mentions = [
    { label: "Miramar Luxury Guide", icon: "💎" },
    { label: "Habana Bienestar & Salud", icon: "🌿" },
    { label: "TripAdvisor Certificado 2025", icon: "🦉" },
    { label: "Google Reviews 4.9★", icon: "⭐" },
    { label: "Revista Estilo & Confort", icon: "✨" }
  ];

  return (
    <div className="border-y border-stone-200/70 bg-cream-50/70 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-[11px] uppercase tracking-[0.25em] font-bold text-stone-400 mb-4">
          Reconocido por clientes de todo el mundo en La Habana
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 opacity-75">
          {mentions.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-stone-700 hover:text-mahogany-950 font-serif-title text-sm sm:text-base font-semibold tracking-wide transition-colors">
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
