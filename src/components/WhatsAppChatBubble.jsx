import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export default function WhatsAppChatBubble() {
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
                  <span>En línea</span> • <span>Respuesta rápida</span>
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
              ¡Hola! ✨ Bienvenido/a a <strong>Momentos Spa</strong> en Miramar. ¿En qué podemos consentirte hoy?
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase font-bold text-stone-400 px-1">Opciones rápidas</div>
              <button
                onClick={() => handleSend("Hola, deseo consultar disponibilidad para reservar hoy o esta semana.")}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-cream-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
              >
                📅 Consultar disponibilidad de citas
              </button>
              <button
                onClick={() => handleSend("Hola, me gustaría información detallada sobre el Japanese Head Spa.")}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-cream-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
              >
                💆 Info del Japanese Head Spa
              </button>
              <button
                onClick={() => handleSend("Hola, deseo información sobre paquetes de spa para parejas.")}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-cream-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
              >
                ❤️ Ritual en Pareja Deluxe
              </button>
            </div>

            {/* Custom Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="pt-2 flex items-center gap-2"
            >
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-white"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="bg-cream-100 px-4 py-2 border-t border-stone-200/60 text-center text-[10px] text-stone-500">
            Conexión directa con +53 59710688
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Chatear por WhatsApp con Momentos Spa"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 group"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-bold text-xs sm:text-sm hidden sm:inline">
          {isOpen ? 'Cerrar Chat' : 'Chatear por WhatsApp'}
        </span>
      </button>

    </div>
  );
}
