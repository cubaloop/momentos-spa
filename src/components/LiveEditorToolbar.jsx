import React, { useState } from 'react';
import { Pencil, Check, X, Sparkles, RotateCcw, Eye, Save } from 'lucide-react';
import { useEditableText } from '../context/EditableTextContext';

export default function LiveEditorToolbar() {
  const { isAdmin, isEditingMode, toggleEditMode, overrides } = useEditableText();
  const [savedNotification, setSavedNotification] = useState(false);

  if (!isAdmin) return null;

  const overridesCount = Object.keys(overrides || {}).length;

  const handleManualSave = () => {
    try {
      localStorage.setItem('momentos_site_content', JSON.stringify(overrides));
      window.dispatchEvent(new Event('momentos_content_updated'));
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 animate-fade-in">
      {/* Main Toggle Button */}
      <button
        onClick={toggleEditMode}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full font-bold text-xs shadow-2xl border-2 transition-all duration-300 hover:scale-105 ${
          isEditingMode
            ? 'bg-amber-600 text-white border-amber-300 shadow-amber-600/40 ring-4 ring-amber-400/30'
            : 'bg-mahogany-950 text-white border-gold/70 hover:bg-black'
        }`}
        title={isEditingMode ? "Desactivar Modo Edición Visual" : "Activar Modo Edición Visual Directa"}
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
          isEditingMode ? 'bg-white text-amber-600' : 'bg-gold/20 text-gold'
        }`}>
          <Pencil className="w-3.5 h-3.5" />
        </div>
        <span>
          {isEditingMode ? 'Modo Editor Activo' : 'Editar Textos'}
        </span>
        {overridesCount > 0 && (
          <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-gold text-mahogany-950">
            {overridesCount}
          </span>
        )}
      </button>

      {/* Floating Toolbar when in Editing Mode */}
      {isEditingMode && (
        <div className="flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-amber-300 text-xs animate-scale-in">
          <div className="px-3 py-1 text-[11px] font-medium text-stone-700 hidden sm:flex items-center gap-1.5 border-r border-stone-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Toca cualquier texto con borde naranja para editarlo</span>
          </div>

          <button
            onClick={handleManualSave}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-all"
            title="Asegurar y guardar cambios"
          >
            <Check className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Guardar</span>
          </button>

          <button
            onClick={toggleEditMode}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[11px] transition-all"
            title="Salir del modo edición"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Salir</span>
          </button>
        </div>
      )}

      {/* Toast Notification */}
      {savedNotification && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold animate-fade-in">
          <Check className="w-4 h-4" />
          <span>¡Todos los textos han sido guardados con éxito!</span>
        </div>
      )}
    </div>
  );
}
