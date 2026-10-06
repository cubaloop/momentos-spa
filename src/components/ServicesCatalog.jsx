import React, { useState } from 'react';
import { categoriesData } from '../data/servicesData';
import { Calendar, Clock, Sparkles, Eye, ChevronRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

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
          <EditableText
            textKey="catalogTag"
            defaultText="Catálogo Completo"
            label="Etiqueta Superior Catálogo"
          />
        </span>
        <EditableText
          as="h2"
          textKey="catalogTitle"
          defaultText="Tratamientos & Tarifas"
          className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
          label="Título Catálogo"
        />
        <EditableText
          as="p"
          textKey="catalogSubtitle"
          defaultText="Haz clic en cualquier servicio para abrir su página propia con fotos reales y explicación detallada."
          className="text-stone-600 text-xs sm:text-sm"
          multiline={true}
          label="Subtítulo Catálogo"
        />
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
            <span>{cat.title}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              selectedCatId === cat.id ? 'bg-gold text-mahogany-950' : 'bg-stone-100 text-stone-500'
            }`}>
              {cat.badge}
            </span>
          </button>
        ))}
      </div>

      {/* Subcategories & Services */}
      <div className="space-y-12">
        {currentCat.subcategories.map((subcat) => (
          <div key={subcat.id} className="space-y-6">
            
            <div className="border-b border-stone-200 pb-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-mahogany-950">
                  {subcat.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  Cabinas privadas y climatizadas • Incluye bebida de cortesía
                </p>
              </div>
              <span className="text-xs font-semibold text-mahogany-800 bg-cream-200 px-3 py-1 rounded-full">
                {subcat.services.length} opciones disponibles
              </span>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcat.services.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Service Image with Direct Link to Detail Page */}
                    <div 
                      onClick={() => onNavigateToService(srv)}
                      className="relative h-48 sm:h-52 overflow-hidden bg-stone-100 cursor-pointer"
                      title="Ver página completa del servicio"
                    >
                      <img
                        src={srv.image || './assets/servicios_spa.jpg'}
                        alt={srv.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = './assets/servicios_spa.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Eye className="w-3.5 h-3.5 text-gold" />
                          <span>Ver fotos & explicación</span>
                        </span>
                      </div>

                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        {srv.popular && (
                          <span className="px-2.5 py-1 rounded-full bg-mahogany-950/90 backdrop-blur text-gold font-bold text-[10px] uppercase tracking-wider shadow">
                            ⭐ Popular
                          </span>
                        )}
                        {srv.badge && (
                          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-mahogany-950 font-bold text-[10px] shadow">
                            {srv.badge}
                          </span>
                        )}
                      </div>

                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg border border-stone-200/50">
                        <div className="text-xs font-extrabold text-mahogany-950 font-sans">
                          ${srv.price} <span className="text-[10px] font-semibold text-stone-500">USD</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="flex items-center gap-1 bg-cream-100 px-2.5 py-0.5 rounded-full font-medium">
                          <Clock className="w-3 h-3 text-gold-dark" />
                          {srv.duration}
                        </span>
                        <span className="text-[11px] text-stone-400">Cabina Privada</span>
                      </div>

                      <h4 
                        onClick={() => onNavigateToService(srv)}
                        className="font-serif-title font-bold text-base sm:text-lg text-stone-900 group-hover:text-mahogany-950 transition-colors cursor-pointer"
                      >
                        {srv.name}
                      </h4>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onNavigateToService(srv)}
                      className="text-xs font-bold text-stone-600 hover:text-mahogany-950 flex items-center gap-1 transition-colors py-2"
                    >
                      <span>Ver detalles</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(srv, currentCat.id)}
                      className="px-4 py-2 bg-mahogany-950 hover:bg-black text-white font-bold text-xs rounded-xl shadow transition-all duration-200 flex items-center gap-1.5 hover:scale-105"
                    >
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>Reservar</span>
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
