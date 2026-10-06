import React, { useState, useEffect } from 'react';
import { Sparkles, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import EditableText from './EditableText';

export default function AboutSplit({ onOpenBooking, onNavigateToPage }) {
  const [customTexts, setCustomTexts] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_site_content');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const saved = localStorage.getItem('momentos_site_content');
        if (saved) setCustomTexts(JSON.parse(saved));
      } catch (e) {}
    };
    window.addEventListener('momentos_content_updated', handleUpdate);
    return () => window.removeEventListener('momentos_content_updated', handleUpdate);
  }, []);

  return (
    <section id="experiencias" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-mahogany-950 text-white min-h-[420px] flex flex-col justify-between p-8 sm:p-10 group">
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
              <EditableText 
                textKey="aboutUniverseBadge" 
                defaultText="Conoce Nuestro Universo" 
                label="Etiqueta Superior Universo"
              />
            </span>
            <EditableText
              as="h2"
              textKey="aboutMainTitle"
              defaultText="¿Qué es Momentos Spa?"
              className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              label="Título Principal Izquierdo"
            />
            <EditableText
              as="p"
              textKey="aboutMainDesc"
              defaultText="Un refugio privado en Miramar creado para quienes comprenden que el descanso no es un lujo, sino una necesidad vital de renovación."
              className="text-cream-200 text-sm sm:text-base mt-2 max-w-md font-normal leading-relaxed"
              multiline={true}
              label="Descripción Principal Izquierda"
            />
          </div>

          <div className="relative z-10 pt-8 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                if (onNavigateToPage) onNavigateToPage('sobre-nosotros');
                else window.location.hash = 'sobre-nosotros';
              }}
              className="flex items-center gap-2 bg-white hover:bg-cream-100 text-mahogany-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <EditableText 
                textKey="aboutBtnKnowUs" 
                defaultText="Conocer Sobre Nosotros" 
                label="Texto Botón Sobre Nosotros"
              />
              <ArrowRight className="w-3.5 h-3.5 text-gold-dark" />
            </button>
            <div className="text-right">
              <EditableText
                as="div"
                textKey="aboutLocationTag"
                defaultText="Ubicación Exclusiva"
                className="text-xs text-gold font-semibold uppercase tracking-wider"
                label="Etiqueta Ubicación"
              />
              <EditableText
                as="div"
                textKey="aboutLocationVal"
                defaultText="Calle 44 #111, Miramar"
                className="text-xs text-white/80"
                label="Dirección Breve"
              />
            </div>
          </div>
        </div>

        {/* Right Card (Tarjetas que el usuario mostró en la captura) */}
        <div className="rounded-3xl bg-cream-200/90 border border-stone-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
          <div>
            <Quote className="w-10 h-10 text-mahogany-800/20 mb-4" />
            
            {/* Cita Destacada Editable Directamente en la Pantalla */}
            <EditableText
              as="p"
              textKey="aboutQuote"
              defaultText="Cuidar de tu salud y serenidad debe ser tan constante como tu respiración. Por eso en Momentos Spa nuestro lema es Siempre pensando en ti."
              className="font-serif-title text-xl sm:text-2xl text-stone-900 italic leading-snug"
              multiline={true}
              label="Cita Destacada del Spa"
            />

            {/* Puntos de Lista con Checks Editables Directamente */}
            <div className="mt-6 space-y-2.5 text-stone-700 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mahogany-800 shrink-0" />
                <EditableText
                  textKey="aboutBullet1"
                  defaultText="Cabinas 100% privadas y climatizadas en Miramar"
                  label="Punto 1 con Check"
                />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mahogany-800 shrink-0" />
                <EditableText
                  textKey="aboutBullet2"
                  defaultText="Aceites botánicos esenciales de grado terapéutico"
                  label="Punto 2 con Check"
                />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mahogany-800 shrink-0" />
                <EditableText
                  textKey="aboutBullet3"
                  defaultText="Bebida no alcohólica de cortesía en cada sesión (té, café, agua, jugo o refresco)"
                  label="Punto 3 con Check"
                />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mahogany-800 shrink-0" />
                <EditableText
                  textKey="aboutBullet4"
                  defaultText="Atención personalizada con reserva previa vía WhatsApp"
                  label="Punto 4 con Check"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-300/60 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="./assets/logo_emblem_gold.png" 
                alt="Momentos Spa" 
                className="w-12 h-12 rounded-full border border-stone-300 object-contain p-1.5 bg-cream-50/80 shadow-sm" 
              />
              <div>
                <EditableText
                  as="div"
                  textKey="aboutBrandTitle"
                  defaultText="Momentos Spa Habana"
                  className="font-serif-title font-bold text-stone-900 text-base"
                  label="Nombre de Marca en Tarjeta"
                />
                <EditableText
                  as="div"
                  textKey="aboutAddressFooter"
                  defaultText="Calle 44 #111 e/ 3ra y 1ra A, Miramar"
                  className="text-xs text-stone-500"
                  label="Dirección en Tarjeta"
                />
              </div>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="text-xs font-bold text-mahogany-950 hover:text-gold-dark underline"
            >
              <EditableText
                textKey="aboutBookCta"
                defaultText="Agendar Cita"
                label="Texto Enlace Agendar"
              />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
