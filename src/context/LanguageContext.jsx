import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { translations } from '../i18n/translations';
import { categoriesData as defaultCategoriesData, allServices as defaultAllServices } from '../data/servicesData';

export const AVAILABLE_LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇨🇺', short: 'ES' }
];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const language = 'es';

  // Reactive state for customized services from localStorage (or fallback to default catalog)
  const [servicesList, setServicesList] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_custom_services');
      return saved ? JSON.parse(saved) : defaultAllServices;
    } catch (e) {
      return defaultAllServices;
    }
  });

  // Listen for admin changes dispatched across the application
  useEffect(() => {
    const handleServicesUpdate = () => {
      try {
        const saved = localStorage.getItem('momentos_custom_services');
        if (saved) {
          setServicesList(JSON.parse(saved));
        } else {
          setServicesList(defaultAllServices);
        }
      } catch (e) {
        setServicesList(defaultAllServices);
      }
    };

    window.addEventListener('momentos_services_updated', handleServicesUpdate);
    window.addEventListener('storage', handleServicesUpdate);
    return () => {
      window.removeEventListener('momentos_services_updated', handleServicesUpdate);
      window.removeEventListener('storage', handleServicesUpdate);
    };
  }, []);

  // Compute reactive categories mapped with updated services (updating names, prices, durations, photos, etc.)
  const reactiveCategories = useMemo(() => {
    const serviceMap = new Map();
    servicesList.forEach(s => {
      if (s && s.id) serviceMap.set(s.id, s);
    });

    return defaultCategoriesData.map(cat => ({
      ...cat,
      subcategories: cat.subcategories.map(sub => ({
        ...sub,
        services: sub.services.map(srv => {
          const updated = serviceMap.get(srv.id);
          return updated ? { ...srv, ...updated } : srv;
        })
      }))
    }));
  }, [servicesList]);

  const t = useCallback((key, fallback) => {
    const langDict = translations['es'] || {};
    if (langDict[key]) {
      return langDict[key];
    }
    return fallback !== undefined ? fallback : key;
  }, []);

  const getLocalizedService = useCallback((srv) => {
    if (!srv) return null;
    const found = servicesList.find(s => s.id === srv.id || s.slug === srv.slug || s.name === srv.name);
    return found ? { ...srv, ...found } : srv;
  }, [servicesList]);

  const getLocalizedCategory = useCallback((cat) => cat, []);

  const getLocalizedServiceById = useCallback((id) => {
    if (!id) return null;
    return servicesList.find(s => s.id === id || s.slug === id) || null;
  }, [servicesList]);

  const currentLangObj = AVAILABLE_LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: () => {},
      t,
      currentLangObj,
      languages: AVAILABLE_LANGUAGES,
      localizedCategories: reactiveCategories,
      localizedServices: servicesList,
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

