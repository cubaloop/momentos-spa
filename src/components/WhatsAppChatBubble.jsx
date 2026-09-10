import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppChatBubble() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phone = "5359710688";

  const handleSend = (text) => {
    const message = encodeURIComponent(text || customMsg || "Hola Momentos Spa, deseo consultar disponibilidad y servicios.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-fade-in">
          
          {/* Header */}
          <div className="bg-mahogany-950 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="./assets/logo_dark.png" alt="Momentos Spa" className="w-10 h-10 rounded-full border border-white/30" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-mahogany-950" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Momentos Spa Habana</h4>
                <p className="text-[11px] text-gold flex items-center gap-1">
                  <span>{t('bubbleOnline', 'En línea')}</span> • <span>{t('bubbleQuickResponse', 'Respuesta rápida')}</span>
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-cream-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-stone-200/80 text-stone-700 shadow-sm leading-relaxed">
              {t('bubbleGreeting', '¡Hola! ✨ Bienvenido/a a Momentos Spa en Miramar. ¿En qué podemos consentirte hoy?')}
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase font-bold text-stone-400 px-1">
                {t('bubbleQuickOptions', 'Opciones rápidas')}
              </div>
              <button
                onClick={() => handleSend("Hola, deseo consultar disponibilidad para reservar hoy o esta semana.")}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-cream-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
              >
                {t('bubbleOption1', '📅 Consultar disponibilidad de citas')}
              </button>
              <button
                onClick={() => handleSend("Hola, quisiera información sobre los rituales y paquetes para parejas.")}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-cream-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
              >
                {t('bubbleOption2', '💆‍♂️ Preguntar por paquetes para parejas')}
              </button>
              <button
                onClick={() => handleSend("Hola, me gustaría saber más sobre el Japanese Head Spa y sus tarifas.")}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-cream-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
              >
                {t('bubbleOption3', '✨ Información de Japanese Head Spa')}
              </button>
            </div>

            {/* Input Row */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                placeholder={t('bubblePlaceholder', 'Escribe tu consulta aquí...')}
                className="flex-1 bg-white border border-stone-300 rounded-full px-3 py-2 text-xs focus:outline-none focus:border-mahogany-900"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors shrink-0 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title={t('bubbleTooltip', 'Chatea con nosotros (+53 59710688)')}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 fill-white" />}
      </button>

    </div>
  );
}
