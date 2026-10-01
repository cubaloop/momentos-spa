import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, Calendar, Phone, Menu, X, Clock, MapPin, 
  Sparkles, CheckCircle2, ChevronRight, User, LogOut, ShieldCheck 
} from 'lucide-react';
import { categoriesData } from '../data/servicesData';
import { useAuth } from '../context/AuthContext';
import { useCubaStatus } from '../utils/cubaTime';

export default function Navbar({ 
  onOpenBooking, 
  onOpenAuth, 
  onOpenAdmin, 
  onSelectService, 
  onNavigateToService,
  onNavigateToPage,
  onBackHome,
  currentView = 'home',
  isViewingService = false
}) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
  const [mobileExpandedSub, setMobileExpandedSub] = useState(null);
  
  const megaMenuRef = useRef(null);
  const { user, logout } = useAuth();
  const { isOpen, statusText, detailText, havanaTimeString } = useCubaStatus();

  // Close desktop mega menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cats = categoriesData || [];
  const currentCat = cats[activeCategoryIndex] || cats[0];

  const handleServiceClick = (srv) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateToService) {
      onNavigateToService(srv);
    }
  };

  const handleDirectReserve = (e, srv) => {
    e.stopPropagation();
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    if (onSelectService) onSelectService(srv);
    onOpenBooking(srv);
  };

  const handleNavClick = (page) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateToPage) {
      onNavigateToPage(page);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-sm transition-all duration-300">
      
      {/* Upper Status Line - Havana Cuba Time */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-[#200b0f] text-[#e8ded5] text-xs border-b border-[#3d161e]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
          </span>
          <span className="font-semibold">{statusText}</span>
          <span className="text-white/40">•</span>
          <span className="text-cream-200/70">{detailText}</span>
          {havanaTimeString && (
            <span className="text-[10px] font-mono text-emerald-300 ml-1">
              ({havanaTimeString} La Habana)
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-[11px] text-cream-200/80">
          <span className="text-gold font-serif-title italic">“Siempre pensando en ti”</span>
          <span>•</span>
          <a 
            href="https://wa.me/5359710688" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 text-gold hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-gold" />
            <span>+53 59710688</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => {
              if (onBackHome) onBackHome();
              else handleNavClick('home');
            }} 
            className="flex items-center gap-3 group text-left"
          >
            <img 
              src="./assets/logo_dark.png" 
              alt="Momentos Spa Logo" 
              className="w-12 h-12 rounded-full shadow-md border border-mahogany-900/20 group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-mahogany-950 leading-none">
                Momentos <span className="text-mahogany-700 italic font-normal">Spa</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-mahogany-600/90 mt-1">
                Miramar • La Habana
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            
            {/* Mega Menu Trigger: "Servicios" */}
            <div className="relative" ref={megaMenuRef}>
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                onMouseEnter={() => setMegaMenuOpen(true)}
                className="flex items-center gap-1.5 text-stone-800 hover:text-mahogany-900 font-semibold text-sm py-2 transition-colors"
              >
                <span>Servicios del Spa</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-mahogany-800' : 'text-stone-400'}`} />
              </button>

              {/* Minimalist Delimited Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[920px] bg-white rounded-3xl shadow-[0_25px_60px_rgba(60,19,24,0.18)] border border-stone-200 p-6 z-50 animate-fade-in"
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <div className="grid grid-cols-12 gap-6">
                    
                    {/* Categories Column (Left) */}
                    <div className="col-span-4 border-r border-stone-100 pr-4 space-y-2">
                      <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        Categorías del Catálogo
                      </div>
                      {cats.map((cat, idx) => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategoryIndex(idx)}
                          onMouseEnter={() => setActiveCategoryIndex(idx)}
                          className={`w-full text-left px-4 py-3 rounded-2xl border transition-all flex items-center justify-between ${
                            activeCategoryIndex === idx
                              ? 'bg-mahogany-950 text-white border-mahogany-950 shadow-md'
                              : 'bg-cream-50 hover:bg-cream-100 border-stone-200/80 text-stone-800'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-bold leading-tight">{cat.title}</div>
                            <div className={`text-[10px] mt-0.5 ${activeCategoryIndex === idx ? 'text-gold' : 'text-stone-400'}`}>
                              {cat.badge}
                            </div>
                          </div>
                          <ChevronRight className={`w-4 h-4 ${activeCategoryIndex === idx ? 'text-gold' : 'text-stone-300'}`} />
                        </button>
                      ))}

                      {/* View All button */}
                      <div className="pt-2">
                        <a
                          href="#servicios"
                          onClick={() => { setMegaMenuOpen(false); handleNavClick('home'); }}
                          className="w-full block text-center py-2.5 rounded-xl border border-dashed border-stone-300 hover:border-mahogany-900 text-xs font-bold text-mahogany-950 hover:bg-cream-100 transition-all"
                        >
                          Ver Catálogo Completo
                        </a>
                      </div>
                    </div>

                    {/* Subcategories & Services (Right 8 columns) */}
                    <div className="col-span-8 pl-2 space-y-4 max-h-[460px] overflow-y-auto pr-1">
                      <div>
                        <h4 className="text-base font-serif-title font-bold text-mahogany-950">{currentCat?.title}</h4>
                        <p className="text-xs text-stone-500 leading-relaxed">{currentCat?.subtitle}</p>
                      </div>

                      <div className="space-y-4">
                        {currentCat?.subcategories?.map((sub) => (
                          <div key={sub.id} className="space-y-2">
                            <div className="flex items-center gap-2 border-b border-stone-100 pb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                              <span className="text-xs font-bold uppercase tracking-wider text-mahogany-900">
                                {sub.name}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {sub.services.map((srv) => (
                                <div
                                  key={srv.id}
                                  onClick={() => handleServiceClick(srv)}
                                  className="group cursor-pointer p-2.5 rounded-xl border border-stone-100 hover:border-stone-300 hover:bg-cream-50/80 transition-all flex items-center justify-between gap-2"
                                >
                                  <div className="truncate">
                                    <div className="text-xs font-bold text-stone-800 group-hover:text-mahogany-900 truncate">
                                      {srv.name}
                                    </div>
                                    <div className="text-[11px] text-stone-400 mt-0.5 flex items-center gap-1.5">
                                      <span>{srv.duration}</span>
                                      <span>•</span>
                                      <span className="font-bold text-mahogany-800">${srv.price} USD</span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={(e) => handleDirectReserve(e, srv)}
                                    className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-cream-100 text-stone-700 hover:bg-mahogany-950 hover:text-white transition-colors shrink-0"
                                    title="Agendar Cita en Calendario"
                                  >
                                    Reservar
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Link to Paquetes */}
            <a 
              href="#experiencias" 
              onClick={() => handleNavClick('home')}
              className="text-stone-800 hover:text-mahogany-900 font-semibold text-sm transition-colors"
            >
              Paquetes
            </a>

            {/* New Page: Sobre Nosotros */}
            <button 
              onClick={() => handleNavClick('sobre-nosotros')}
              className={`font-semibold text-sm transition-colors ${
                currentView === 'sobre-nosotros'
                  ? 'text-mahogany-950 font-bold border-b-2 border-gold pb-0.5'
                  : 'text-stone-800 hover:text-mahogany-900'
              }`}
            >
              Sobre Nosotros
            </button>

            {/* New Page: Blog */}
            <button 
              onClick={() => handleNavClick('blog')}
              className={`font-semibold text-sm transition-colors ${
                currentView === 'blog'
                  ? 'text-mahogany-950 font-bold border-b-2 border-gold pb-0.5'
                  : 'text-stone-800 hover:text-mahogany-900'
              }`}
            >
              Blog
            </button>

            <a 
              href="#ubicacion" 
              onClick={() => handleNavClick('home')}
              className="text-stone-800 hover:text-mahogany-900 font-semibold text-sm transition-colors"
            >
              Ubicación
            </a>
          </div>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin Dashboard */}
            <button
              onClick={onOpenAdmin}
              title="Panel de Administración (Gestión de Clientes, Citas y Precios)"
              className="p-2.5 rounded-full text-stone-600 hover:text-mahogany-950 hover:bg-cream-200 transition-all border border-stone-200"
            >
              <ShieldCheck className="w-5 h-5" />
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-xl shadow-mahogany-950/20 hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4 text-gold" />
              <span>Reservar Cita</span>
            </button>

          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-mahogany-950 text-white text-xs font-bold px-3 py-2 rounded-full"
            >
              Reservar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:bg-cream-200 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE-OPTIMIZED DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 max-h-[85vh] overflow-y-auto p-5 space-y-4 shadow-2xl animate-fade-in">
          
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Menú & Servicios</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-stone-500 font-bold"
            >
              Cerrar ✕
            </button>
          </div>

          {/* Real-time Cuba Open/Closed Status Card */}
          <div className={`p-3 rounded-2xl border flex items-center justify-between text-xs ${
            isOpen 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950' 
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
              </span>
              <div>
                <span className="font-bold">{statusText}</span>
                <span className="text-stone-500 ml-1.5 font-normal">• {detailText}</span>
              </div>
            </div>
            {havanaTimeString && (
              <span className="text-[10px] font-mono text-stone-600 bg-white px-2 py-0.5 rounded-md border border-stone-200 shadow-sm shrink-0">
                {havanaTimeString} CU
              </span>
            )}
          </div>

          {/* Quick Navigation Links in Mobile */}
          <div className="grid grid-cols-2 gap-2 pt-1 pb-2 border-b border-stone-200">
            <button
              onClick={() => handleNavClick('sobre-nosotros')}
              className="p-2.5 rounded-xl bg-cream-100 text-mahogany-950 text-xs font-bold text-center hover:bg-cream-200 transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="p-2.5 rounded-xl bg-cream-100 text-mahogany-950 text-xs font-bold text-center hover:bg-cream-200 transition-colors"
            >
              Blog de Bienestar
            </button>
          </div>

          {/* Accordion Categories */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-1">
              Catálogo de Servicios
            </div>
            {cats.map((cat) => {
              const isCatExpanded = mobileExpandedCat === cat.id;

              return (
                <div key={cat.id} className="rounded-2xl border border-stone-200 overflow-hidden bg-cream-50/60">
                  <button
                    onClick={() => setMobileExpandedCat(isCatExpanded ? null : cat.id)}
                    className="w-full text-left p-3.5 flex items-center justify-between font-bold text-xs sm:text-sm text-stone-900 hover:bg-cream-100"
                  >
                    <span>{cat.title}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${isCatExpanded ? 'rotate-180 text-mahogany-900' : ''}`} />
                  </button>

                  {/* Nested Subcategories Accordion */}
                  {isCatExpanded && (
                    <div className="p-3 bg-white border-t border-stone-200/80 space-y-3">
                      {cat.subcategories.map((sub) => {
                        const isSubExpanded = mobileExpandedSub === sub.id;

                        return (
                          <div key={sub.id} className="rounded-xl border border-stone-100 bg-cream-50/40 p-2.5 space-y-2">
                            <button
                              onClick={() => setMobileExpandedSub(isSubExpanded ? null : sub.id)}
                              className="w-full text-left flex items-center justify-between text-xs font-semibold text-mahogany-950"
                            >
                              <span>{sub.name}</span>
                              <span className="text-[10px] text-stone-400">{isSubExpanded ? '▲' : '▼'}</span>
                            </button>

                            {/* Service Buttons inside Subcategory */}
                            {isSubExpanded && (
                              <div className="space-y-1.5 pt-1">
                                {sub.services.map((srv) => (
                                  <div
                                    key={srv.id}
                                    onClick={() => handleServiceClick(srv)}
                                    className="w-full text-left p-2.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between text-xs cursor-pointer hover:border-mahogany-900"
                                  >
                                    <div className="flex items-center gap-2">
                                      {srv.image && (
                                        <img src={srv.image} alt={srv.name} className="w-8 h-8 rounded-lg object-cover shrink-0" />
                                      )}
                                      <div>
                                        <div className="font-bold text-stone-900 line-clamp-1">{srv.name}</div>
                                        <div className="text-[10px] text-stone-500">{srv.duration} • ${srv.price} USD</div>
                                      </div>
                                    </div>
                                    <button
                                      onClick={(e) => handleDirectReserve(e, srv)}
                                      className="px-2.5 py-1 bg-mahogany-950 text-white text-[10px] font-bold rounded-lg shrink-0 ml-1 hover:bg-mahogany-900"
                                    >
                                      Reservar
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="border-t border-stone-200 pt-3 space-y-2 text-xs font-semibold text-stone-700">
            <a href="#experiencias" onClick={() => { setMobileMenuOpen(false); handleNavClick('home'); }} className="block py-1">Paquetes</a>
            <a href="#beneficios" onClick={() => { setMobileMenuOpen(false); handleNavClick('home'); }} className="block py-1">Beneficios</a>
            <a href="#testimonios" onClick={() => { setMobileMenuOpen(false); handleNavClick('home'); }} className="block py-1">Opiniones</a>
            <a href="#ubicacion" onClick={() => { setMobileMenuOpen(false); handleNavClick('home'); }} className="block py-1">Ubicación en Google Maps</a>
          </div>

          {/* Mobile Admin Link */}
          <div className="border-t border-stone-200 pt-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="w-full py-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-cream-100 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-mahogany-950" />
              <span>Panel de Administración</span>
            </button>
          </div>

        </div>
      )}

    </nav>
  );
}
