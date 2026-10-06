import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check, X, RotateCcw } from 'lucide-react';
import { useEditableText } from '../context/EditableTextContext';

/**
 * EditableText Component
 * Renders any text element with in-place WYSIWYG editing when isEditingMode is active.
 *
 * Props:
 * - textKey: Unique identifier in momentos_site_content (e.g. 'aboutQuote', 'compRow1Feature', etc.)
 * - defaultText: Default string if no override exists
 * - as: HTML tag to render ('h1', 'h2', 'h3', 'p', 'span', 'div', etc.)
 * - className: CSS classes to apply
 * - multiline: boolean, whether to use textarea in popover/in-place
 * - label: Friendly human-readable label shown when editing
 * - inlineEdit: boolean, if true enables direct contentEditable / inline input
 */
export default function EditableText({
  textKey,
  defaultText,
  as = 'span',
  className = '',
  multiline = false,
  label = '',
  children
}) {
  const { isEditingMode, isAdmin, getText, updateText, resetText, overrides } = useEditableText();
  const currentText = getText(textKey, defaultText || (typeof children === 'string' ? children : ''));
  const hasCustomOverride = overrides && overrides[textKey] !== undefined;

  const [isEditingThis, setIsEditingThis] = useState(false);
  const [draftValue, setDraftValue] = useState(currentText);
  const inputRef = useRef(null);

  useEffect(() => {
    setDraftValue(currentText);
  }, [currentText]);

  useEffect(() => {
    if (isEditingThis && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current.select) {
        inputRef.current.select();
      }
    }
  }, [isEditingThis]);

  const handleStartEdit = (e) => {
    if (!isAdmin || !isEditingMode) return;
    e.stopPropagation();
    e.preventDefault();
    setDraftValue(currentText);
    setIsEditingThis(true);
  };

  const handleSave = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    updateText(textKey, draftValue);
    setIsEditingThis(false);
  };

  const handleCancel = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setDraftValue(currentText);
    setIsEditingThis(false);
  };

  const handleResetToDefault = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    resetText(textKey);
    setDraftValue(defaultText);
    setIsEditingThis(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  // Normal view when not in editing mode
  if (!isAdmin || !isEditingMode) {
    const Tag = as;
    return <Tag className={className}>{currentText || children}</Tag>;
  }

  // ACTIVE EDITING MODAL / IN-PLACE INPUT
  if (isEditingThis) {
    return (
      <span className="relative inline-block z-40 my-1 p-2 rounded-2xl bg-white border-2 border-amber-500 shadow-2xl text-stone-900 animate-scale-in text-left">
        {label && (
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center justify-between">
            <span>✏️ Editando: {label}</span>
            {hasCustomOverride && (
              <span className="text-[9px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Personalizado</span>
            )}
          </div>
        )}

        {multiline ? (
          <textarea
            ref={inputRef}
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none leading-relaxed text-stone-900 bg-white"
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full min-w-[200px] text-xs sm:text-sm p-2 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-500 outline-none font-medium text-stone-900 bg-white"
          />
        )}

        <div className="mt-2 flex items-center justify-between gap-2 pt-1 border-t border-stone-100">
          <div className="flex items-center gap-1">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg shadow flex items-center gap-1 transition-all"
              title="Guardar este texto"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Listo</span>
            </button>
            <button
              onClick={handleCancel}
              className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-lg transition-all"
              title="Cancelar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {hasCustomOverride && (
            <button
              onClick={handleResetToDefault}
              className="px-2 py-1 text-[10px] text-stone-500 hover:text-rose-600 hover:bg-rose-50 rounded flex items-center gap-1 transition-colors"
              title="Restaurar al texto original por defecto"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Original</span>
            </button>
          )}
        </div>
      </span>
    );
  }

  // In editing mode, but not currently being typed in: show hoverable dashed border + pencil badge
  const Tag = as;
  return (
    <Tag
      onClick={handleStartEdit}
      className={`${className} relative group cursor-pointer border border-dashed border-amber-400/80 hover:border-amber-600 hover:bg-amber-50/30 transition-all rounded px-1.5 py-0.5 inline-block`}
      title="Haz clic para editar este texto directamente"
    >
      <span>{currentText || children}</span>
      <span className="inline-flex ml-1.5 align-middle p-1 rounded-full bg-amber-500/20 text-amber-700 group-hover:bg-amber-500 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm pointer-events-none">
        <Pencil className="w-3 h-3" />
      </span>
    </Tag>
  );
}
