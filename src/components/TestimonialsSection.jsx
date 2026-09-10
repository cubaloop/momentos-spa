import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Valeria Domínguez",
      location: "La Habana",
      service: "Japanese Head Spa Premium",
      rating: 5,
      date: "Hace 3 días",
      text: "El Japanese Head Spa es una maravilla absoluta. Sentir la lluvia circular tibia en el cuero cabelludo mientras te realizan el masaje craneal te transporta a otra dimensión. Salí renovada y mi cabello brilla como nunca."
    },
    {
      name: "Ernesto & Claudia",
      location: "Miramar, Playa",
      service: "Ritual Momentos en Pareja",
      rating: 5,
      date: "Hace 1 semana",
      text: "Celebramos nuestro aniversario en la suite privada para dos. La copa de bienvenida, las batas suaves y el masaje sincronizado fueron un 10/10. Muy agradecidos con el equipo por hacernos sentir tan especiales."
    },
    {
      name: "Dra. Laura Morales",
      location: "Vedado, La Habana",
      service: "Masaje con Piedras Volcánicas",
      rating: 5,
      date: "Hace 2 semanas",
      text: "Llegué con dolor crónico en cervicales por largas cirugías. El calor de las piedras basálticas y la precisión de la masajista disolvieron toda la contractura. Instalaciones impecables y privacidad garantizada."
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
            <span className="font-bold text-stone-900 text-sm ml-2">4.9 de 5 Estrellas</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-mahogany-950">
            Experiencias Reales de Clientes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Más de 1,500 testimonios avalan nuestra dedicación y hospitalidad en Miramar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-cream-100 rounded-3xl p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">{rev.date}</span>
                </div>

                <Quote className="w-8 h-8 text-mahogany-800/20 mb-2" />
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-stone-500">{rev.location}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-white text-mahogany-800 rounded font-semibold border border-stone-200">
                  {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
