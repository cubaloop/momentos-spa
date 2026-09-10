import React from 'react';
import { Calendar, Star, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-10">
      
      {/* 1. Header Photo: Horizontal across the full width of the Hero */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] min-h-[220px] max-h-[480px] rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl border border-stone-200/80 group bg-stone-950">
        
        {/* Full-width Horizontal Photo */}
        <img 
          src="./assets/masaje_pareja.jpg" 
          alt="Momentos Spa Miramar" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette Overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Floating Sanctuary Badge & Rating on the Horizontal Photo */}
        <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between pointer-events-none z-10">
          
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-gold text-[11px] sm:text-xs font-semibold tracking-wide shadow-md pointer-events-auto">
            <Sparkles className="w-3 h-3 text-gold animate-spin" />
            <span>{t('heroBadge', 'SANTUARIO EN MIRAMAR, LA HABANA')}</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-cream-200 font-normal">Calle 44 #111</span>
          </div>

          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold shadow-md pointer-events-auto">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span>4.9</span>
            <span className="hidden sm:inline text-white/70 font-normal text-[10px]">• 2,500+ visitas</span>
          </div>

        </div>

      </div>

      {/* 2. Hero Headline, Subtitle, Action Buttons & Trust Highlights */}
      <div className="mt-6 sm:mt-8 max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
        
        {/* Headline */}
        <h1 className="font-serif-title text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-[1.15] tracking-tight">
          {t('heroTitle1', 'El Arte del Bienestar &')} <span className="text-gold-dark italic font-normal">{t('heroTitle2', 'Relajación Absoluta')}</span>
        </h1>

        {/* Condensed Subtitle */}
        <p className="text-stone-600 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto">
          {t('heroSubtitle', 'Sumérgete en un oasis sensorial privado en el corazón de Miramar. Masajes terapéuticos, circuito termal, Japanese Head Spa y rituales holísticos diseñados para renovar tu cuerpo y espíritu.')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2.5 bg-mahogany-950 hover:bg-black text-white font-semibold text-xs sm:text-sm md:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span>{t('heroCtaBook', 'Reservar Cita Online')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#servicios"
            className="px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-105"
          >
            {t('heroCtaExplore', 'Explorar Rituales')}
          </a>
        </div>

        {/* Minimalist Trust Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-stone-600 font-medium">
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200/80 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
            {t('trustCabins', 'Cabinas Privadas Climatizadas')}
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200/80 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
            {t('trustTherapists', 'Terapeutas Certificadas')}
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200/80 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
            {t('trustWhatsApp', 'Confirmación por WhatsApp')}
          </span>
        </div>

      </div>

    </section>
  );
}
