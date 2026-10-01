import React, { createContext, useContext, useMemo } from 'react';
import { translations } from '../i18n/translations';
import { categoriesData, allServices } from '../data/servicesData';

export const AVAILABLE_LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇨🇺', short: 'ES' }
];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const language = 'es';

  const t = (key, fallback) => {
    const langDict = translations['es'] || {};
    if (langDict[key]) {
      return langDict[key];
    }
    return fallback !== undefined ? fallback : key;
  };

  // Direct 1:1 pass-through of the exact Spanish catalog
  const getLocalizedService = (srv) => srv;
  const getLocalizedCategory = (cat) => cat;
  const getLocalizedServiceById = (id) => allServices.find(s => s.id === id) || null;

  const localizedCategories = categoriesData;
  const localizedServices = allServices;

  const currentLangObj = AVAILABLE_LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: () => {},
      t,
      currentLangObj,
      languages: AVAILABLE_LANGUAGES,
      localizedCategories,
      localizedServices,
      getLocalizedService,
      getLocalizedCategory,
      getLocalizedServiceById
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
