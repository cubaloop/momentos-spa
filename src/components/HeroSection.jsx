import React from 'react';
import { ArrowRight, Star, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection({ onOpenBooking, onOpenAuth }) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12">
      
      {/* Centered Luxury Onboarding Card Container - 21st.dev Welcome Screen Design */}
      <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-white rounded-[32px] sm:rounded-[40px] md:rounded-[44px] shadow-2xl shadow-stone-900/10 border border-stone-200/80 overflow-hidden transition-all duration-300 hover:shadow-stone-900/15">
        
        {/* Top Hero Image with Curved Convex Bottom Arch */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden bg-stone-950 group">
          <img 
            src="./assets/masaje_pareja.jpg" 
            alt="Momentos Spa Sanctuary" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Cinematic Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

          {/* Top Floating Sanctuary Badges */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-gold-light text-xs font-medium tracking-wide shadow-md pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">{t('heroBadge', 'SANTUARIO EN MIRAMAR')}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-md pointer-events-auto">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span>4.9</span>
            </div>
          </div>

          {/* Signature 21st.dev Convex Curved Arch Cutout dipping into the white section */}
          <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg 
              viewBox="0 0 500 50" 
              preserveAspectRatio="none" 
              className="w-full h-10 sm:h-14 text-white fill-current block"
            >
              <path d="M0,0 Q250,50 500,0 L500,50 L0,50 Z" />
            </svg>
          </div>
        </div>

        {/* Lower Welcome Content Area */}
        <div className="bg-white px-6 sm:px-10 md:px-14 pt-2 pb-8 sm:pb-10 text-center flex flex-col items-center">
          
          {/* Welcome Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            {t('welcomeHeroTitle', 'Bienvenido a Momentos')}
          </h1>

          {/* Short App / Sanctuary Purpose Description */}
          <p className="text-stone-500 text-xs sm:text-sm md:text-base max-w-lg mt-3 sm:mt-3.5 font-normal leading-relaxed">
            {t('welcomeHeroSubtitle', 'Descubre y reserva tratamientos de spa y rituales de bienestar sin esfuerzo en Momentos, tu santuario exclusivo en Miramar, La Habana.')}
          </p>

          {/* Trust Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-5 text-[11px] sm:text-xs text-stone-600 font-medium">
            <span className="flex items-center gap-1 bg-cream-100 px-2.5 py-1 rounded-full border border-stone-200">
              <CheckCircle2 className="w-3 h-3 text-gold" />
              {t('trustCabins', 'Cabinas Privadas Climatizadas')}
            </span>
            <span className="flex items-center gap-1 bg-cream-100 px-2.5 py-1 rounded-full border border-stone-200">
              <ShieldCheck className="w-3 h-3 text-gold" />
              {t('trustTherapists', 'Terapeutas Certificadas')}
            </span>
          </div>

          {/* Primary Call To Action - "Let's get started" */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] bg-stone-900 hover:bg-black text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t('welcomeHeroStartBtn', "Let's get started")}</span>
              <ArrowRight className="w-4 h-4 text-stone-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Secondary Action - "Already have an account? Login Now" */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-stone-500">
            <span>{t('welcomeHeroLoginPrompt', 'Already have an account?')}</span>
            <button
              type="button"
              onClick={() => onOpenAuth ? onOpenAuth('login') : null}
              className="font-bold text-stone-900 hover:text-gold hover:underline transition-colors cursor-pointer ml-0.5"
            >
              {t('welcomeHeroLoginBtn', 'Login Now')}
            </button>
            <span className="text-stone-300 mx-1.5 hidden sm:inline">•</span>
            <a
              href="#servicios"
              className="text-stone-500 hover:text-stone-900 underline text-xs font-medium transition-colors"
            >
              {t('welcomeHeroExplore', 'Explorar Servicios')}
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
