import React from 'react';
import { Sparkles, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { useCubaStatus } from '../utils/cubaTime';

export default function Footer({ onOpenAdmin, onNavigateToPage }) {
  const { isOpen, havanaTimeString } = useCubaStatus();

  return (
    <footer className="bg-mahogany-950 text-white border-t border-mahogany-900/60">
      
      {/* Dynamic Cuba Sanctuary Status Bar */}
      <div className="w-full bg-[#200b0f] border-b border-[#3d161e] text-[#e8ded5] py-4 sm:py-5 px-4 transition-colors">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-2 sm:space-y-2.5">
          
          {/* Line 1: Sanctuary Title & Lema */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[#c2a280] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2a280]" />
            <span>SANTUARIO DE BIENESTAR EN MIRAMAR</span>
            <span className="text-white/40">•</span>
            <span className="text-gold normal-case font-serif-title italic text-sm tracking-normal">“Siempre pensando en ti”</span>
          </div>

          {/* Line 2: Schedule */}
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-cream-100/90 tracking-wide font-normal">
            <Clock className="w-4 h-4 text-[#c2a280] shrink-0" />
            <span>Todos los días: 9:00 AM – 7:00 PM</span>
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
              Horario de Atención
            </h4>
            <div className="space-y-1.5 text-cream-200/80">
              <p className="font-medium text-white">Lunes a Domingo: 9:00 AM – 7:00 PM</p>
              <p className="text-[11px] text-cream-200/60">Citas previa reservación por WhatsApp o calendario web.</p>
            </div>
            <div className="pt-3">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-[11px] text-cream-200/50 hover:text-gold transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Panel Administrativo</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Momentos Spa Habana. Todos los derechos reservados. • <span className="text-gold italic">“Siempre pensando en ti”</span></p>
          <div className="flex items-center gap-2 text-gold text-[11px]">
            <Sparkles className="w-3 h-3" />
            <span>Santuario de Bienestar en Miramar, La Habana</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
