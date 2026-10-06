import React from 'react';
import { Sparkles, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { useCubaStatus } from '../utils/cubaTime';
import { useAuth } from '../context/AuthContext';

export default function Footer({ onOpenAdmin, onNavigateToPage }) {
  const { isOpen, havanaTimeString } = useCubaStatus();
  const { user } = useAuth();

  return (
    <footer className="bg-mahogany-950 text-white border-t border-mahogany-900/60">
      
      {/* Dynamic Cuba Sanctuary Status Bar */}
      <div className="w-full bg-[#200b0f] border-b border-[#3d161e] text-[#e8ded5] py-4 sm:py-5 px-4 transition-colors">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-2 sm:space-y-2.5">
          
          {/* Line 1: Slogan & Ubicación */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[#c2a280] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2a280]" />
            <span className="text-gold font-serif-title normal-case italic text-base tracking-normal">“Siempre pensando en ti”</span>
            <span className="text-white/40">•</span>
            <span>Miramar, La Habana</span>
          </div>

          {/* Line 2: Schedule */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-cream-100/90 tracking-wide font-normal">
            <Clock className="w-4 h-4 text-[#c2a280] shrink-0" />
            <span>Miércoles a Domingo: 10:00 AM – 6:00 PM</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-200/90 text-xs sm:text-sm font-medium">Lunes y Martes: Cerrado</span>
          </div>

          {/* Line 3: Live Cuba Status Pill + Phone */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
            
            {isOpen ? (
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05281d] border border-[#0e6144] text-emerald-300 text-xs font-medium shadow-sm transition-all"
                title={`Hora oficial en La Habana, Cuba: ${havanaTimeString}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="font-bold text-emerald-200">Abierto ahora</span>
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
                <span className="font-bold text-rose-200">Cerrado ahora</span>
                {havanaTimeString && (
                  <span className="text-[11px] text-rose-400/90 font-mono tracking-tight pl-1 border-l border-rose-500/30">
                    {havanaTimeString} CU
                  </span>
                )}
              </div>
            )}

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
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="./assets/logo_white.png" alt="Momentos Spa" className="w-14 h-14 object-contain" />
              <div>
                <span className="font-serif-title text-xl font-bold text-white block">Momentos Spa</span>
                <span className="text-[10px] text-gold uppercase tracking-widest font-semibold block">Miramar • La Habana</span>
                <span className="text-gold font-serif-title italic text-xs block">“Siempre pensando en ti”</span>
              </div>
            </div>
            <p className="text-xs text-cream-200/70 leading-relaxed">
              Santuario de salud, relajación y estética en Miramar, Playa. Masajes terapéuticos, tratamientos faciales, salón de belleza y paquetes en parejas en cabinas privadas climatizadas.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-serif-title font-bold text-sm text-gold tracking-wide uppercase">
              Navegación
            </h4>
            <ul className="space-y-2 text-cream-200/80">
              <li>
                <a href="#servicios" onClick={() => onNavigateToPage && onNavigateToPage('home')} className="hover:text-white transition-colors">
                  Servicios del Spa
                </a>
              </li>
              <li>
                <a href="#experiencias" onClick={() => onNavigateToPage && onNavigateToPage('home')} className="hover:text-white transition-colors">
                  Paquetes Signature
                </a>
              </li>
              <li>
                <a 
                  href="#sobre-nosotros" 
                  onClick={(e) => { 
                    if (onNavigateToPage) { 
                      e.preventDefault(); 
                      window.location.hash = 'sobre-nosotros'; 
                      onNavigateToPage('sobre-nosotros'); 
                    } 
                  }} 
                  className="hover:text-white transition-colors font-medium text-gold/90"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => { 
                    if (onNavigateToPage) { 
                      e.preventDefault(); 
                      window.location.hash = 'blog'; 
                      onNavigateToPage('blog'); 
                    } 
                  }} 
                  className="hover:text-white transition-colors font-medium text-gold/90"
                >
                  Blog de Bienestar
                </a>
              </li>
              <li>
                <a href="#ubicacion" onClick={() => onNavigateToPage && onNavigateToPage('home')} className="hover:text-white transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-serif-title font-bold text-sm text-gold tracking-wide uppercase">
              Contacto & Reservas
            </h4>
            <div className="space-y-2 text-cream-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="https://wa.me/5359710688" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +53 59710688 (WhatsApp)
                </a>
              </div>
              <div className="pt-1 text-[11px] text-cream-200/60">
                ☕ Todos nuestros servicios incluyen bebida de cortesía (té, agua, café expreso, jugo o refresco).
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className="font-serif-title font-bold text-sm text-gold tracking-wide uppercase">
              Horario Oficial
            </h4>
            <div className="space-y-1 text-cream-200/80">
              <p className="font-medium text-white">Miércoles a Domingo: 10:00 AM – 6:00 PM</p>
              <p className="text-amber-200/90 font-medium text-[11px]">Lunes y Martes: Cerrado</p>
              <p className="text-[11px] text-cream-200/60 pt-0.5">Citas previa reservación por WhatsApp o calendario web.</p>
            </div>
            
            {/* TripAdvisor Link Button */}
            <div className="pt-2">
              <a
                href="https://www.tripadvisor.es/Attraction_Review-g147271-d26792951-Reviews-Momentos_Spa-Havana_Ciudad_de_la_Habana_Province_Cuba.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00AA6C]/20 hover:bg-[#00AA6C]/30 text-white border border-[#00AA6C]/50 transition-all font-semibold text-[11px] group shadow-sm hover:border-[#00AA6C]"
                title="Ver reseñas de clientes en TripAdvisor"
              >
                {/* Official TripAdvisor Icon */}
                <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-5.75 8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm11.5 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 16.5l-2.25-3h4.5L12 16.5zM6.25 10.25a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0zm11.5 0a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill="#00AA6C"/>
                  <circle cx="8" cy="10.25" r="0.8" fill="#14201B"/>
                  <circle cx="16" cy="10.25" r="0.8" fill="#14201B"/>
                </svg>
                <span className="font-medium text-[#34e0a1] group-hover:text-white transition-colors">Opiniones en TripAdvisor</span>
              </a>
            </div>

            {user && user.role === 'admin' && (
              <div className="pt-1">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 text-[11px] text-gold hover:text-white transition-colors bg-gold/10 px-2.5 py-1 rounded-lg border border-gold/30"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>Panel Administrativo</span>
                </button>
              </div>
            )}
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Momentos Spa Habana. Todos los derechos reservados. • <span className="text-gold italic">“Pensando en ti”</span></p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-[11px]">
            <div className="flex items-center gap-1.5 text-gold">
              <Sparkles className="w-3 h-3" />
              <span>Siempre pensando en ti • Miramar, La Habana</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-cream-200/50">Developed by <strong className="text-cream-100 font-semibold">Tecnoemprende</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
