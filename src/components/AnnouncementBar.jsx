import React from 'react';
import { Sparkles, Phone, Clock, MapPin, CheckCircle2, Moon } from 'lucide-react';
import { useCubaStatus } from '../utils/cubaTime';
import { useLanguage } from '../context/LanguageContext';

export default function AnnouncementBar({ onOpenBooking }) {
  const { isOpen, statusText, detailText, havanaTimeString, currentDayName } = useCubaStatus();
  const { t } = useLanguage();

  return (
    <div className="bg-mahogany-950 text-cream-200 text-xs sm:text-sm py-2 px-4 transition-colors border-b border-mahogany-900/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
        
        {/* Left Side: Brand & Location */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 font-medium">
          <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold uppercase tracking-wider font-semibold text-[11px]">{t('sanctuaryTitle', 'Santuario de Bienestar en Miramar')}</span>
          <span className="hidden lg:inline text-white/40">|</span>
          <span className="hidden lg:inline text-white/90">{t('addressShort', 'Calle 44 #111 e/ 3ra y 1ra A, La Habana')}</span>
        </div>

        {/* Right Side: Dynamic Cuba Open/Closed Status + Hours + Contact */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 text-xs">
          
          {/* Base Schedule */}
          <div className="flex items-center gap-1.5 text-white/80">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span className="font-normal">{t('schedule', 'Mié - Dom: 10:00 AM - 7:00 PM')}</span>
          </div>

          {/* Dynamic Open / Closed Status Badge according to Cuba Time */}
          <div className="flex items-center">
            {isOpen ? (
              <div 
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-medium shadow-sm transition-all animate-fade-in"
                title={`Hora en La Habana, Cuba: ${havanaTimeString} (${currentDayName})`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="font-bold text-emerald-200">{t('openNow', 'Abierto ahora')}</span>
                <span className="hidden xl:inline text-emerald-400/70 font-normal">• {detailText}</span>
                {havanaTimeString && (
                  <span className="text-[10px] text-emerald-400/90 font-mono bg-emerald-900/60 px-1.5 py-0.2 rounded ml-0.5">
                    {havanaTimeString} CU
                  </span>
                )}
              </div>
            ) : (
              <div 
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-950/80 border border-rose-500/50 text-rose-300 text-[11px] font-medium shadow-sm transition-all animate-fade-in"
                title={`Hora en La Habana, Cuba: ${havanaTimeString} (${currentDayName})`}
              >
                <span className="inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
                <span className="font-bold text-rose-200">{t('closedNow', 'Cerrado ahora')}</span>
                <span className="hidden sm:inline text-rose-300/80 font-normal">• {detailText}</span>
                {havanaTimeString && (
                  <span className="text-[10px] text-rose-400/90 font-mono bg-rose-900/60 px-1.5 py-0.2 rounded ml-0.5">
                    {havanaTimeString} CU
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Quick WhatsApp Link */}
          <a 
            href="https://wa.me/5359710688?text=Hola%20Momentos%20Spa,%20deseo%20consultar%20sobre%20sus%20servicios" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gold hover:text-white transition-colors underline font-medium"
          >
            <Phone className="w-3 h-3" />
            +53 59710688
          </a>
        </div>

      </div>
    </div>
  );
}
