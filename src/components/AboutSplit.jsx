import React, { useState } from 'react';
import { Play, Sparkles, Quote, HeartHandshake, CheckCircle } from 'lucide-react';

export default function AboutSplit({ onOpenBooking }) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="experiencias" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Card: "What is Momentos Spa?" Visual Preview Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-mahogany-950 text-white min-h-[420px] flex flex-col justify-between p-8 sm:p-10 group">
          
          {/* Background image with dark overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="./assets/snack_bandeja.jpg" 
              alt="Ambiente y Detalles de Momentos Spa" 
              className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950 via-mahogany-950/60 to-transparent" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conoce Nuestro Universo</span>
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              ¿Qué es Momentos Spa?
            </h2>
            <p className="text-cream-200 text-sm sm:text-base mt-2 max-w-md font-normal leading-relaxed">
              Un refugio privado en Miramar creado para quienes comprenden que el descanso no es un lujo, sino una necesidad vital de renovación.
            </p>
          </div>

          <div className="relative z-10 pt-8 flex items-center justify-between">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-3 bg-white hover:bg-cream-100 text-mahogany-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <span>Explorar Rituales</span>
            </button>
            <div className="text-right">
              <div className="text-xs text-gold font-semibold uppercase tracking-wider">Ubicación Exclusiva</div>
              <div className="text-xs text-white/80">Calle 44 #111, Miramar</div>
            </div>
          </div>

        </div>

        {/* Right Card: Editorial Quote Card with Warm Sand Tone */}
        <div className="rounded-3xl bg-cream-200/90 border border-stone-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
          <div>
            <Quote className="w-10 h-10 text-mahogany-800/20 mb-4" />
            <p className="font-serif-title text-xl sm:text-2xl text-stone-900 italic leading-snug">
              "Cuidar de tu salud y serenidad debe ser tan constante como tu respiración. Por eso en Momentos Spa cada detalle, desde el aroma al entrar hasta la temperatura de las toallas, está pensado en ti."
            </p>
            <div className="mt-6 space-y-2 text-stone-600 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-mahogany-700 shrink-0" />
                <span>Atención personalizada en cabinas climatizadas con insonorización.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-mahogany-700 shrink-0" />
                <span>Protocolos de higiene rigurosos y cosmética natural de primera línea.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-mahogany-700 shrink-0" />
                <span>Bebida detox o copa de espumante de bienvenida en cada visita.</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-300/60 mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="./assets/logo_dark.png" 
                alt="Directora de Momentos Spa" 
                className="w-12 h-12 rounded-full border-2 border-mahogany-800/30" 
              />
              <div>
                <div className="font-bold text-sm text-stone-900">Equipo Terapéutico</div>
                <div className="text-xs text-stone-500 font-medium">Momentos Spa • Miramar</div>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="text-xs font-bold text-mahogany-900 hover:text-mahogany-700 underline"
            >
              Agendar tu visita
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
