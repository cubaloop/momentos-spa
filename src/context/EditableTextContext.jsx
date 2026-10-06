import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';

const EditableTextContext = createContext();

export function EditableTextProvider({ children }) {
  const { user } = useAuth();
  const isAdmin = !!(user && user.role === 'admin');

  // Toggle for Edit Mode
  const [isEditingMode, setIsEditingMode] = useState(false);

  // Active inline modal/popover state if editing rich elements or direct modal
  const [activeEditingKey, setActiveEditingKey] = useState(null);

  // Dictionary of custom text overrides
  const [overrides, setOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_site_content');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Keep in sync with external storage events
  useEffect(() => {
    const handleSync = () => {
      try {
        const saved = localStorage.getItem('momentos_site_content');
        if (saved) setOverrides(JSON.parse(saved));
      } catch (e) {}
    };
    window.addEventListener('momentos_content_updated', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('momentos_content_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  // Turn off editing mode automatically if admin logs out
  useEffect(() => {
    if (!isAdmin && isEditingMode) {
      setIsEditingMode(false);
    }
  }, [isAdmin, isEditingMode]);

  // Update a single text key
  const updateText = useCallback((key, newText) => {
    setOverrides(prev => {
      const next = { ...prev, [key]: newText };
      try {
        localStorage.setItem('momentos_site_content', JSON.stringify(next));
        window.dispatchEvent(new Event('momentos_content_updated'));
      } catch (e) {
        console.error('Error saving text override:', e);
      }
      return next;
    });
  }, []);

  // Update multiple keys at once
  const updateMultipleTexts = useCallback((newOverrides) => {
    setOverrides(prev => {
      const next = { ...prev, ...newOverrides };
      try {
        localStorage.setItem('momentos_site_content', JSON.stringify(next));
        window.dispatchEvent(new Event('momentos_content_updated'));
      } catch (e) {
        console.error('Error saving text overrides:', e);
      }
      return next;
    });
  }, []);

  // Reset a key or all keys
  const resetText = useCallback((key) => {
    setOverrides(prev => {
      const next = { ...prev };
      delete next[key];
      try {
        localStorage.setItem('momentos_site_content', JSON.stringify(next));
        window.dispatchEvent(new Event('momentos_content_updated'));
      } catch (e) {}
      return next;
    });
  }, []);

  // Helper to get text with fallback
  const getText = useCallback((key, fallback) => {
    if (overrides && overrides[key] !== undefined && overrides[key] !== null && overrides[key] !== '') {
      return overrides[key];
    }
    return fallback !== undefined ? fallback : '';
  }, [overrides]);

  const toggleEditMode = useCallback(() => {
    if (!isAdmin) return;
    setIsEditingMode(prev => !prev);
  }, [isAdmin]);

  return (
    <EditableTextContext.Provider value={{
      isAdmin,
      isEditingMode,
      setIsEditingMode,
      toggleEditMode,
      overrides,
      updateText,
      updateMultipleTexts,
      resetText,
      getText,
      activeEditingKey,
      setActiveEditingKey
    }}>
      {children}
    </EditableTextContext.Provider>
  );
}

export function useEditableText() {
  const context = useContext(EditableTextContext);
  if (!context) {
    throw new Error('useEditableText must be used within an EditableTextProvider');
  }
  return context;
}
