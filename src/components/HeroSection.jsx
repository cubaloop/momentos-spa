import React from 'react';
import { Calendar, Star, CheckCircle2, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 pb-12">
      
      {/* Full-Width Horizontal Panoramic Container */}
      <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-stone-200/80 group">
        
        {/* Panoramic Background Photo */}
        <img 
          src="./assets/masaje_pareja.jpg" 
          alt="Momentos Spa Miramar" 
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
        />

        {/* Cinematic Deep Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-mahogany-950/95 via-mahogany-950/75 to-mahogany-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/90 via-transparent to-black/20" />

        {/* Content Floating on Left Side of the Panoramic Banner */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center">
          
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" />
              <span>{t('heroBadge', 'SANTUARIO EN MIRAMAR, LA HABANA')}</span>
              <span className="text-white/40">•</span>
              <span className="text-cream-200 font-normal">Calle 44 #111</span>
            </div>

            {/* Headline - Condensed & Punchy */}
            <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-md">
              {t('heroTitle1', 'El Arte del Bienestar &')} <br className="hidden sm:inline" />
              <span className="text-gold italic font-normal">{t('heroTitle2', 'Relajación Absoluta')}</span>
            </h1>

            {/* Condensed Subtitle */}
            <p className="text-cream-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl drop-shadow">
              {t('heroSubtitle', 'Sumérgete en un oasis sensorial privado en el corazón de Miramar. Masajes terapéuticos, circuito termal, Japanese Head Spa y rituales holísticos diseñados para renovar tu cuerpo y espíritu.')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2.5 bg-gold hover:bg-gold-light text-mahogany-950 font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-full shadow-2xl shadow-gold/30 hover:scale-105 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-mahogany-950" />
                <span>{t('heroCtaBook', 'Reservar Cita Online')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#servicios"
                className="px-6 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
              >
                {t('heroCtaExplore', 'Explorar Rituales')}
              </a>
            </div>

            {/* Minimalist Trust Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-cream-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Cabinas Privadas Climatizadas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Terapeutas Certificadas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Confirmación por WhatsApp
              </span>
            </div>

          </div>

        </div>

        {/* Floating Mini 3D Badge on Bottom-Right */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-2xl hidden md:flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-mahogany-950 text-gold flex items-center justify-center font-bold">
            <Star className="w-5 h-5 fill-gold text-gold" />
          </div>
          <div>
            <div className="text-xs font-bold text-stone-900">4.9 / 5 Estrellas</div>
            <div className="text-[11px] text-stone-500">+1,500 Clientes Satisfechos</div>
          </div>
        </div>

      </div>

    </section>
  );
}
