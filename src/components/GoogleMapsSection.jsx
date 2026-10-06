import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EditableText from './EditableText';

export default function GoogleMapsSection() {
  const { t } = useLanguage();

  return (
    <section id="ubicacion" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-mahogany-700">
            <EditableText
              textKey="locationTag"
              defaultText="ENCUÉNTRANOS EN LA HABANA"
              label="Etiqueta Superior Ubicación"
            />
          </span>
          <EditableText
            as="h2"
            textKey="locationTitle"
            defaultText="Visítanos en el Corazón de Miramar"
            className="font-serif-title text-3xl sm:text-4xl font-bold text-mahogany-950"
            label="Título Sección Ubicación"
          />
          <EditableText
            as="p"
            textKey="locationSubtitle"
            defaultText="Una zona residencial tranquila, segura y rodeada de jardines en Calle 44 #111."
            className="text-stone-600 text-xs sm:text-sm"
            multiline={true}
            label="Subtítulo Sección Ubicación"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-cream-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-mahogany-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-gold" />
                  <EditableText
                    textKey="addressTitle"
                    defaultText="Dirección"
                    label="Título Tarjeta Dirección"
                  />
                </div>
                <EditableText
                  as="p"
                  textKey="addressDesc"
                  defaultText="Calle 44 #111 e/ 3ra y 1ra A, Miramar, Playa, La Habana, Cuba."
                  className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium"
                  label="Texto Dirección"
                />
                <EditableText
                  as="p"
                  textKey="mapsDirections"
                  defaultText="A sólo 2 cuadras de 3ra Avenida y a pocos minutos de los principales hoteles de Miramar."
                  className="text-xs text-stone-500"
                  multiline={true}
                  label="Puntos de Referencia Dirección"
                />
              </div>

              <div className="p-6 rounded-3xl bg-cream-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-mahogany-900 font-bold text-sm">
                  <Phone className="w-4 h-4 text-gold" />
                  <EditableText
                    textKey="phoneTitle"
                    defaultText="Teléfono / WhatsApp"
                    label="Título Tarjeta Teléfono"
                  />
                </div>
                <EditableText
                  as="p"
                  textKey="phoneDescNumber"
                  defaultText="+53 59710688"
                  className="text-xs sm:text-sm text-stone-700 font-mono font-semibold"
                  label="Número Telefónico Mostrado"
                />
                <EditableText
                  as="p"
                  textKey="phoneDesc"
                  defaultText="+53 59710688 (Atención continua)"
                  className="text-xs text-stone-500"
                  label="Detalle de Atención Telefónica"
                />
              </div>

              <div className="p-6 rounded-3xl bg-cream-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-mahogany-900 font-bold text-sm">
                  <Clock className="w-4 h-4 text-gold" />
                  <EditableText
                    textKey="hoursTitle"
                    defaultText="Horario de Atención"
                    label="Título Tarjeta Horario"
                  />
                </div>
                <EditableText
                  as="p"
                  textKey="hoursDesc"
                  defaultText="Miércoles a Domingo: 10:00 AM - 6:00 PM (Lunes y Martes Cerrado)"
                  className="text-xs sm:text-sm text-stone-700 font-medium"
                  label="Texto Horario de Atención"
                />
                <EditableText
                  as="p"
                  textKey="parkingDesc"
                  defaultText="Parqueo vigilado gratuito frente a las instalaciones."
                  className="text-xs text-stone-500"
                  label="Texto Parqueo Vigilado"
                />
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Momentos+Spa+Miramar+La+Habana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-mahogany-950 hover:bg-black text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg transition-transform hover:scale-102 mt-4"
            >
              <Navigation className="w-4 h-4 text-gold" />
              <EditableText
                textKey="mapsOpenBtn"
                defaultText="Abrir en Google Maps"
                label="Botón Abrir Google Maps"
              />
            </a>
          </div>

          <div className="lg:col-span-7 min-h-[350px] lg:min-h-[420px] rounded-3xl overflow-hidden border border-stone-200 shadow-md">
            <iframe
              title="Ubicación de Momentos Spa en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.366224378873!2d-82.42859062391062!3d23.120286979105435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7728f3223019%3A0x633d7637841f4862!2sMomentos%20Spa!5e0!3m2!1ses!2ses!4v1711928392010!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
