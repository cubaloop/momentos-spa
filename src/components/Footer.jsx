import React from 'react';
import { Phone, MapPin, Clock, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBooking, onOpenAdmin }) {
  return (
    <footer className="bg-mahogany-950 text-cream-200 pt-16 pb-12 border-t border-mahogany-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/logo_white.png" alt="Momentos Spa" className="w-14 h-14 object-contain" />
              <div>
                <span className="font-serif-title text-2xl font-bold text-white block leading-none">
                  Momentos <span className="text-gold italic font-normal">Spa</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cream-300">
                  Pensando en Ti
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-cream-300 leading-relaxed max-w-sm">
              Santuario exclusivo de bienestar y rejuvenecimiento en La Habana. Masajes terapéuticos, circuito termal, Japanese Head Spa y estilismo en cabinas privadas de lujo.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-gold hover:bg-gold-light text-mahogany-950 text-xs font-bold px-6 py-2.5 rounded-full shadow transition-all"
              >
                Reservar tu momento
              </button>
            </div>
          </div>

          {/* Column 2: Categorías */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-title text-base font-bold text-white uppercase tracking-wider">
              Tratamientos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-300">
              <li><a href="#servicios" className="hover:text-gold transition-colors">Masajes Relajantes & Deep Tissue</a></li>
              <li><a href="#servicios" className="hover:text-gold transition-colors">Japanese Head Spa Premium</a></li>
              <li><a href="#servicios" className="hover:text-gold transition-colors">Ritual Momentos en Pareja</a></li>
              <li><a href="#servicios" className="hover:text-gold transition-colors">Circuito Termal & Hidroterapia</a></li>
              <li><a href="#servicios" className="hover:text-gold transition-colors">Manicura Rusa & Pedicura Spa</a></li>
              <li><a href="#servicios" className="hover:text-gold transition-colors">Lifting de Pestañas & Cejas</a></li>
            </ul>
          </div>

          {/* Column 3: Contacto Directo */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-title text-base font-bold text-white uppercase tracking-wider">
              Sede Miramar
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-cream-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="https://wa.me/5359710688" target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">
                  WhatsApp: +53 59710688
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Mié - Dom: 10:00 AM - 7:00 PM (Lun y Mar cerrado)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Acceso Rápido & Admin */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-title text-base font-bold text-white uppercase tracking-wider">
              Administración
            </h4>
            <div className="space-y-2 text-xs text-cream-300">
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-gold hover:text-white font-semibold transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Panel de Clientes</span>
              </button>
              <div className="text-[11px] text-cream-400">
                Gestión de reservas y clientes registrados.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <div>
            © {new Date().getFullYear()} Momentos Spa Habana. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Diseñado con excelencia y serenidad para Miramar, La Habana</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
