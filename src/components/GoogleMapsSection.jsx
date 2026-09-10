import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GoogleMapsSection() {
  const { t } = useLanguage();

  return (
    <section id="ubicacion" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            {t('locationTag', 'ENCUÉNTRANOS EN LA HABANA')}
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950">
            {t('locationTitle', 'Visítanos en el Corazón de Miramar')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('locationSubtitle', 'Una zona residencial tranquila, segura y rodeada de jardines en Calle 44 #111.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-cream-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-mahogany-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{t('addressTitle', 'Dirección')}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {t('addressDesc', 'Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana, Cuba.')}
                </p>
                <p className="text-xs text-stone-500">
                  {t('mapsDirections', 'A sólo 2 cuadras de 3ra Avenida y a pocos minutos de los principales hoteles de Miramar.')}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-cream-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-mahogany-900 font-bold text-sm">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{t('phoneTitle', 'Teléfono / WhatsApp')}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-mono font-semibold">
                  +53 59710688
                </p>
                <p className="text-xs text-stone-500">
                  {t('phoneDesc', '+53 59710688 (Atención continua)')}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-cream-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-mahogany-900 font-bold text-sm">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{t('hoursTitle', 'Horario de Atención')}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  {t('hoursDesc', 'Miércoles a Domingo: 10:00 AM - 7:00 PM (Lunes y Martes Cerrado)')}
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/hhEppr8jVbSn3EaW6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-full bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105"
            >
              <Navigation className="w-4 h-4 text-gold" />
              <span>{t('mapsBtn', 'Abrir en Google Maps')}</span>
            </a>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-stone-200 min-h-[360px]">
            <iframe
              title="Ubicación Momentos Spa Habana"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.364426543169!2d-82.42878642398573!3d23.120364979104077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd774431bc89a7%3A0xe541c4d7d11df835!2sCalle%2044%20111%2C%20La%20Habana!5e0!3m2!1ses!2scu!4v1710000000000!5m2!1ses!2scu"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
