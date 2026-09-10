import React from 'react';
import { Sparkles, Calendar, Droplets, Heart, Shield, Check } from 'lucide-react';

export default function BenefitsRejuvenation({ onOpenBooking }) {
  const benefits = [
    {
      step: "1",
      title: "Aceites Esenciales Puros de Grado Terapéutico",
      description: "Infusiones botánicas destiladas al vapor que penetran la epidermis, activando la regeneración celular y la relajación miofascial."
    },
    {
      step: "2",
      title: "Técnicas de Hidroterapia y Piedras Basálticas",
      description: "Contraste de temperaturas que dilata los capilares, oxigena los tejidos y disuelve la fatiga acumulada en músculos profundos."
    },
    {
      step: "3",
      title: "Ritual Holístico de Descompresión Mental",
      description: "Ambiente con aromaterapia graduada, sonoterapia binaural y cabinas climatizadas que reducen los niveles de cortisol en sangre."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-cream-100/80 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling & Checklist (inspired by IM8) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mahogany-700">
              • LA CIENCIA DEL DESCANSO •
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany-950 leading-tight">
              Tecnología de Rejuvenecimiento & Armonía Holística
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              En Momentos Spa combinamos tradiciones milenarias de bienestar oriental con cosmética dermatológica de última generación para ofrecer resultados visibles desde la primera sesión.
            </p>

            <div className="space-y-5 pt-2">
              {benefits.map((b) => (
                <div key={b.step} className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-stone-200/70 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-mahogany-950 text-gold flex items-center justify-center font-serif-title font-bold text-sm shrink-0">
                    {b.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">{b.title}</h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-mahogany-950/20 transition-all hover:scale-105"
              >
                Reservar Experiencia Terapéutica
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Spa Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-200">
              <img 
                src="./assets/servicios_spa.jpg" 
                alt="Tratamiento con piedras volcánicas calientes en Momentos Spa" 
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-white/50 shadow-md">
                <span className="text-[10px] uppercase tracking-wider font-bold text-mahogany-700">Protocolo Exclusivo</span>
                <div className="font-serif-title font-bold text-sm text-stone-900">Masaje con Piedras Volcánicas & Aromaterapia</div>
                <div className="text-xs text-stone-500">Calle 44 #111, Miramar • La Habana</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
