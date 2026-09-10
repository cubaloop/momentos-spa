import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ isMobile = false, onCloseMobile }) {
  const { language, setLanguage, languages, currentLangObj, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (!isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile]);

  const handleSelect = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
    if (isMobile && onCloseMobile) {
      onCloseMobile();
    }
  };

  // Mobile Version (Collapsible Accordion / Compact Menu)
  if (isMobile) {
    return (
      <div className="border border-stone-200 rounded-2xl bg-cream-50/70 p-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-xs font-bold text-stone-800"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gold" />
            <span>{t('language', 'Idioma')}:</span>
            <span className="px-2 py-0.5 rounded-full bg-mahogany-950 text-white text-[11px] font-medium flex items-center gap-1">
              <span>{currentLangObj.flag}</span>
              <span>{currentLangObj.name}</span>
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-mahogany-900' : ''}`} />
        </button>

        {isOpen && (
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-stone-200 animate-fade-in">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => handleSelect(item.code)}
                className={`flex items-center justify-between p-2 rounded-xl text-xs font-medium transition-all border ${
                  language === item.code
                    ? 'bg-mahogany-950 text-white border-mahogany-950 shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-cream-100 border-stone-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{item.flag}</span>
                  <span className="truncate">{item.name}</span>
                </div>
                {language === item.code && <Check className="w-3.5 h-3.5 text-gold shrink-0" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop Collapsible Dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        title={t('selectLanguage', 'Seleccionar idioma')}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all text-xs font-semibold ${
          isOpen
            ? 'bg-cream-200 text-mahogany-950 border-mahogany-900/40 shadow-sm'
            : 'bg-white/80 text-stone-700 hover:bg-cream-200 hover:text-mahogany-950 border-stone-200'
        }`}
      >
        <span className="text-base leading-none">{currentLangObj.flag}</span>
        <span className="font-bold text-stone-800 text-[11px] uppercase tracking-wider">
          {currentLangObj.short}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-mahogany-800' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-mahogany-950/10 border border-stone-200 py-1.5 z-50 animate-fade-in">
          <div className="px-3 py-1.5 border-b border-stone-100 text-[10px] uppercase font-bold tracking-wider text-stone-400">
            {t('selectLanguage', 'Seleccionar idioma')}
          </div>
          <div className="p-1 space-y-0.5">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => handleSelect(item.code)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                  language === item.code
                    ? 'bg-mahogany-950 text-white font-bold'
                    : 'text-stone-700 hover:bg-cream-100 hover:text-mahogany-950 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{item.flag}</span>
                  <span>{item.name}</span>
                </div>
                {language === item.code && (
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
