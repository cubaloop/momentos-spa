import React, { useState } from 'react';
import { categoriesData } from '../data/servicesData';
import { Calendar, Clock, Sparkles, Eye, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesCatalog({ onOpenBooking, onNavigateToService }) {
  const { t, localizedCategories } = useLanguage();
  const cats = localizedCategories && localizedCategories.length > 0 ? localizedCategories : categoriesData;
  const [selectedCatId, setSelectedCatId] = useState(cats[0].id);

  const currentCat = cats.find(c => c.id === selectedCatId) || cats[0];

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Condensed Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-mahogany-700">
          {t('catalogTag', 'Catálogo Completo')}
        </span>
        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
          {t('catalogTitle', 'Tratamientos & Tarifas')}
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm">
          {t('catalogSubtitle', 'Haz clic en cualquier servicio para abrir su página propia con fotos reales y explicación detallada.')}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {cats.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCatId(cat.id)}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              selectedCatId === cat.id
                ? 'bg-mahogany-950 text-white shadow-xl shadow-mahogany-950/20 scale-105'
                : 'bg-white text-stone-700 hover:bg-cream-200 border border-stone-200'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${selectedCatId === cat.id ? 'text-gold' : 'text-stone-400'}`} />
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Subcategories & Services Grid */}
      <div className="space-y-10">
        {currentCat.subcategories.map((sub) => (
          <div key={sub.id} className="space-y-4">
            <div className="border-b border-stone-200 pb-2 flex items-center justify-between">
              <h3 className="font-serif-title text-xl font-bold text-stone-900">
                {sub.name}
              </h3>
              <span className="text-xs text-stone-500 hidden sm:inline">{sub.description}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sub.services.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-lg hover:shadow-[0_20px_45px_rgba(60,19,24,0.12)] hover:-translate-y-2 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {srv.image && (
                      <div 
                        onClick={() => onNavigateToService && onNavigateToService(srv)}
                        className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-stone-100 shadow-sm relative cursor-pointer group-hover:ring-2 group-hover:ring-gold/60 transition-all"
                        title="Ver página completa de este servicio"
                      >
                        <img 
                          src={srv.image} 
                          alt={srv.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-mahogany-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5 text-gold" />
                            <span>{t('viewServiceDetails', 'Ver página del servicio')}</span>
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-mahogany-800 bg-mahogany-50 px-2 py-0.5 rounded-full border border-mahogany-200">
                        {srv.badge}
                      </span>
                      <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {srv.duration}
                      </span>
                    </div>

                    <h4 
                      onClick={() => onNavigateToService && onNavigateToService(srv)}
                      className="font-serif-title text-base sm:text-lg font-bold text-stone-900 group-hover:text-mahogany-900 transition-colors mb-1.5 cursor-pointer line-clamp-1"
                      title={`Ver detalles de ${srv.name}`}
                    >
                      {srv.name}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed mb-3 line-clamp-2">
                      {srv.description}
                    </p>

                    <button
                      onClick={() => onNavigateToService && onNavigateToService(srv)}
                      className="text-xs font-bold text-mahogany-900 hover:text-mahogany-700 flex items-center gap-1 mb-4 transition-colors"
                    >
                      <span>{t('viewFullExplanation', 'Ver explicación & fotos reales')}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-serif-title text-2xl font-bold text-mahogany-950">
                      ${srv.price} <span className="text-xs font-sans font-normal text-stone-500">USD</span>
                    </span>
                    <button
                      onClick={() => onOpenBooking(srv)}
                      className="flex items-center gap-1.5 bg-cream-200 hover:bg-mahogany-950 text-mahogany-900 hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm hover:scale-105"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t('bookShort', 'Reservar')}</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
