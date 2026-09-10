import React from 'react';
import { Clock, Phone, Sparkles } from 'lucide-react';
import { useCubaStatus } from '../utils/cubaTime';
import { useLanguage } from '../context/LanguageContext';

export default function PreFooterStatusStrip() {
  const { isOpen, havanaTimeString } = useCubaStatus();
  const { t } = useLanguage();

  return (
    <section 
      aria-label="Información y Horarios del Santuario"
      className="w-full bg-[#200b0f] border-y border-[#3d161e] text-[#e8ded5] py-4 sm:py-5 px-4 transition-colors"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-2 sm:space-y-2.5">
        
        {/* Line 1: Sanctuary Title with Dot Indicator */}
        <div className="flex items-center justify-center gap-2 text-[#c2a280] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2a280]" />
          <span>{t('sanctuaryTitle', 'SANTUARIO DE BIENESTAR EN MIRAMAR')}</span>
        </div>

        {/* Line 2: Schedule with Clock Icon */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-cream-100/90 tracking-wide font-normal">
          <Clock className="w-4 h-4 text-[#c2a280] shrink-0" />
          <span>{t('schedule', 'Mié - Dom: 10:00 AM - 7:00 PM')}</span>
        </div>

        {/* Line 3: Live Cuba Status Pill + Phone */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
          
          {/* Status Badge with Live Havana Time */}
          {isOpen ? (
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05281d] border border-[#0e6144] text-emerald-300 text-xs font-medium shadow-sm transition-all"
              title={`Hora oficial en La Habana, Cuba: ${havanaTimeString}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-bold text-emerald-200">{t('openNow', 'Abierto ahora')}</span>
              {havanaTimeString && (
                <span className="text-[11px] text-emerald-400/90 font-mono tracking-tight pl-1 border-l border-emerald-500/30">
                  {havanaTimeString} CU
                </span>
              )}
            </div>
          ) : (
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a0e13] border border-[#5e1a24] text-rose-300 text-xs font-medium shadow-sm transition-all"
              title={`Hora oficial en La Habana, Cuba: ${havanaTimeString}`}
            >
              <span className="inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
              <span className="font-bold text-rose-200">{t('closedNow', 'Cerrado ahora')}</span>
              {havanaTimeString && (
                <span className="text-[11px] text-rose-400/90 font-mono tracking-tight pl-1 border-l border-rose-500/30">
                  {havanaTimeString} CU
                </span>
              )}
            </div>
          )}

          {/* Contact Direct WhatsApp / Call Link */}
          <a
            href="https://wa.me/5359710688?text=Hola%20Momentos%20Spa,%20deseo%20consultar%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#d4af85] hover:text-white underline font-medium text-xs sm:text-sm tracking-wider transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af85]" />
            <span>+53 59710688</span>
          </a>

        </div>

      </div>
    </section>
  );
}
