import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

export default function GoogleMapsSection() {
  const mapUrl = "https://maps.app.goo.gl/hhEppr8jVbSn3EaW6";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.082071987515!2d-82.4239!3d23.1207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd77539764140b%3A0x4b3d491026487838!2sMOMENTOS%20SPA%2C%20Calle%2044%20%23111%20entre%203ra%20y%201ra%20A.%20Miramar%2C%20La%20Habana!5e0!3m2!1ses!2scu!4v1710000000000!5m2!1ses!2scu";

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (Left) */}
          <div className="lg:col-span-5 bg-cream-100 rounded-3xl p-8 sm:p-10 border border-stone-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-mahogany-700 block mb-2">
                  Visítanos en Miramar
                </span>
                <h2 className="font-serif-title text-3xl font-bold text-mahogany-950">
                  Ubicación & Contacto
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  Un oasis de tranquilidad ubicado en la mejor zona residencial de Playa, La Habana.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80">
                  <MapPin className="w-5 h-5 text-mahogany-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Dirección Oficial</div>
                    <div>Calle 44 #111, entre 3ra y 1ra A, Miramar, Playa, La Habana, Cuba</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80">
                  <Phone className="w-5 h-5 text-mahogany-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Teléfono & WhatsApp</div>
                    <div className="text-mahogany-900 font-semibold">+53 59710688</div>
                    <div className="text-[11px] text-stone-400">Atención de citas e información</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80">
                  <Clock className="w-5 h-5 text-mahogany-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-stone-900">Días & Horarios</div>
                    <div>Miércoles a Domingo: 10:00 AM – 7:00 PM</div>
                    <div className="text-[11px] text-stone-500 font-medium">Lunes y Martes: Cerrado</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-200">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-gold" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Interactive Google Maps Frame (Right) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 shadow-xl min-h-[420px] relative bg-stone-100">
            <iframe
              title="Mapa de Momentos Spa Habana"
              src="https://maps.google.com/maps?q=Calle%2044%20%23111%20entre%203ra%20y%201ra%20A%2C%20Miramar%2C%20La%20Habana&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-stone-200 text-xs font-semibold text-mahogany-950 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Momentos Spa Miramar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
