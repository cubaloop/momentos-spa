import React from 'react';
import { Sparkles, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenAdmin }) {
  const { t } = useLanguage();

  return (
    <footer className="bg-mahogany-950 text-white border-t border-mahogany-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="./assets/logo_white.png" alt="Momentos Spa" className="w-14 h-14 object-contain" />
              <div>
                <span className="font-serif-title text-xl font-bold text-white block">Momentos Spa</span>
                <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">Miramar • La Habana</span>
              </div>
            </div>
            <p className="text-xs text-cream-200/70 leading-relaxed">
              {t('footerSlogan', 'Santuario de salud, relajación y estética en Miramar, La Habana. Tratamientos holísticos en cabinas privadas climatizadas.')}
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-serif-title font-bold text-sm text-gold tracking-wide uppercase">
              {t('footerLinksTitle', 'Navegación')}
            </h4>
            <ul className="space-y-2 text-cream-200/80">
              <li><a href="#servicios" className="hover:text-white transition-colors">{t('navServices', 'Servicios')}</a></li>
              <li><a href="#experiencias" className="hover:text-white transition-colors">{t('navExperiences', 'Experiencias')}</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">{t('navBenefits', 'Beneficios')}</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">{t('navReviews', 'Opiniones')}</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">{t('navLocation', 'Ubicación')}</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-serif-title font-bold text-sm text-gold tracking-wide uppercase">
              {t('footerContactTitle', 'Contacto & Reservas')}
            </h4>
            <div className="space-y-2 text-cream-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Calle 44 #111 e/ 3ra y 1ra A, Miramar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="https://wa.me/5359710688" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +53 59710688 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-serif-title font-bold text-sm text-gold tracking-wide uppercase">
              {t('footerHoursTitle', 'Días de Atención')}
            </h4>
            <div className="space-y-1.5 text-cream-200/80">
              <p className="font-medium text-white">{t('schedule', 'Miércoles a Domingo: 10:00 AM - 7:00 PM')}</p>
              <p className="text-[11px] text-cream-200/60">{t('closedNotice', 'Lunes y Martes cerrado por mantenimiento.')}</p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-[11px] text-cream-200/50 hover:text-gold transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('footerAdminLink', 'Panel Administrativo')}</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Momentos Spa Habana. {t('footerRights', 'Todos los derechos reservados.')}</p>
          <div className="flex items-center gap-2 text-gold text-[11px]">
            <Sparkles className="w-3 h-3" />
            <span>Santuario de Bienestar en Miramar</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
