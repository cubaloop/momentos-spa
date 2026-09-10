import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

export const AVAILABLE_LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇪🇸', short: 'ES' },
  { code: 'en', name: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', short: 'IT' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', short: 'RU' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', short: 'DE' },
];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_language');
      if (saved && AVAILABLE_LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
      // Auto-detect browser language if matches one of the 6
      const browserLang = navigator.language ? navigator.language.substring(0, 2).toLowerCase() : 'es';
      if (AVAILABLE_LANGUAGES.some(l => l.code === browserLang)) {
        return browserLang;
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return 'es';
  });

  const setLanguage = (langCode) => {
    if (AVAILABLE_LANGUAGES.some(l => l.code === langCode)) {
      setLanguageState(langCode);
      try {
        localStorage.setItem('momentos_language', langCode);
      } catch (e) {
        console.warn('LocalStorage save error:', e);
      }
    }
  };

  const t = (key, fallback) => {
    const langDict = translations[language] || translations['es'];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    if (translations['es'] && translations['es'][key]) {
      return translations['es'][key];
    }
    return fallback !== undefined ? fallback : key;
  };

  const currentLangObj = AVAILABLE_LANGUAGES.find(l => l.code === language) || AVAILABLE_LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      currentLangObj,
      languages: AVAILABLE_LANGUAGES
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
