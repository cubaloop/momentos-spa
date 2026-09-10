import React, { createContext, useContext, useState, useMemo } from 'react';
import { translations } from '../i18n/translations';
import { catalogTranslations } from '../i18n/catalogTranslations';
import { categoriesData, allServices } from '../data/servicesData';

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

  // Localize a single service object
  const getLocalizedService = (srv) => {
    if (!srv) return srv;
    const trans = catalogTranslations.services[srv.id];
    if (!trans) return srv;
    const langData = trans[language] || trans['es'] || {};
    return {
      ...srv,
      name: langData.name || srv.name,
      description: langData.desc || srv.description
    };
  };

  // Localize a single category object
  const getLocalizedCategory = (cat) => {
    if (!cat) return cat;
    const catTrans = catalogTranslations.categories[cat.id];
    const langCat = catTrans ? (catTrans[language] || catTrans['es'] || {}) : {};
    return {
      ...cat,
      title: langCat.title || cat.title,
      subtitle: langCat.subtitle || cat.subtitle,
      badge: langCat.badge || cat.badge,
      subcategories: (cat.subcategories || []).map(sub => {
        const subTrans = catalogTranslations.subcategories[sub.id];
        const langSub = subTrans ? (subTrans[language] || subTrans['es'] || {}) : {};
        return {
          ...sub,
          name: langSub.name || sub.name,
          description: langSub.description || sub.description,
          services: (sub.services || []).map(srv => getLocalizedService(srv))
        };
      })
    };
  };

  // Full reactive localized categoriesData tree
  const localizedCategories = useMemo(() => {
    return categoriesData.map(cat => getLocalizedCategory(cat));
  }, [language]);

  // Full reactive localized allServices flat array
  const localizedServices = useMemo(() => {
    return allServices.map(srv => getLocalizedService(srv));
  }, [language]);

  const getLocalizedServiceById = (id) => {
    return localizedServices.find(s => s.id === id) || null;
  };

  const currentLangObj = AVAILABLE_LANGUAGES.find(l => l.code === language) || AVAILABLE_LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
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
