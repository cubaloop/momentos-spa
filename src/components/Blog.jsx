import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Search, Calendar, Clock, User, Tag, 
  Sparkles, ChevronRight, X, Share2, BookOpen
} from 'lucide-react';

export const BLOG_POSTS = [
  {
    id: "masaje-contra-estres-cronico",
    title: "Beneficios del masaje terapéutico contra el estrés crónico: Ciencia y bienestar",
    category: "Masajes & Terapias",
    date: "12 Septiembre, 2026",
    readTime: "4 min de lectura",
    author: "Equipo Momentos Spa",
    image: "./assets/catalog/masaje-relajante-u.webp",
    excerpt: "Descubre cómo las maniobras rítmicas del masaje reducen el cortisol, estimulan endorfinas y restauran el equilibrio de tu sistema nervioso.",
    content: [
      "El estrés crónico es uno de los mayores detonantes de fatiga, contracturas musculares y trastornos del sueño. Cuando vivimos con ritmos acelerados, el organismo segrega cortisol de manera sostenida, manteniendo el cuerpo en estado de alerta constante.",
      "La terapia de masaje manual actúa directamente sobre el sistema nervioso parasimpático. A través de presiones graduales, fricciones térmicas y amasamiento rítmico, se activa la vasodilatación y se induce la liberación natural de endorfinas, serotonina y dopamina, conocidas como las hormonas de la calma y la felicidad.",
      "En Momentos Spa combinamos aceites botánicos puros y cabinas aclimatadas para potenciar esta respuesta biológica. Una sola sesión de 60 minutos es capaz de reducir la tensión arterial, descontracturar los trapecios y devolver la claridad mental.",
      "Consejo Momentos: Tras recibir tu sesión de masaje relajante, bebe abundante agua natural o infusión de cortesía para ayudar a tus riñones a depurar los metabolitos liberados durante la terapia."
    ]
  },
  {
    id: "guia-reflexologia-podal",
    title: "Reflexología podal: Cómo la estimulación de tus pies alivia todo el cuerpo",
    category: "Masajes & Terapias",
    date: "8 Septiembre, 2026",
    readTime: "5 min de lectura",
    author: "Equipo Momentos Spa",
    image: "./assets/catalog/reflexologia-podal.webp",
    excerpt: "Los pies son un mapa reflejo del organismo. Conoce cómo la presión focalizada en puntos específicos desbloquea la energía y alivia dolencias.",
    content: [
      "La reflexología podal es una disciplina milenaria basada en el principio de que existen más de 7,000 terminaciones nerviosas en la planta de los pies, conectadas directamente con órganos, glándulas y sistemas corporales.",
      "Al aplicar presiones controladas con el pulgar en zonas reflejas diana, el terapeuta envía estímulos neurofisiológicos que favorecen la autorregulación del organismo. Por ejemplo, la zona del talón se relaciona con la pelvis y zona lumbar, mientras que las almohadillas bajo los dedos se vinculan a pulmones y plexo solar.",
      "Es el tratamiento predilecto para quienes pasan largas jornadas de pie, sufren de retención de líquidos o experimentan cansancio crónico. Al terminar, la sensación de ligereza al pisar es instantánea.",
      "Recomendación: Combina una sesión de reflexología podal con un baño previo de agua tibia para abrir los poros y preparar los receptores nerviosos."
    ]
  },
  {
    id: "guia-cuidado-facial-completo",
    title: "Guía experta de cuidado facial: De la limpieza profunda a la hidratación celular",
    category: "Cuidado Facial",
    date: "2 Septiembre, 2026",
    readTime: "4 min de lectura",
    author: "Cosmetología Momentos Spa",
    image: "./assets/catalog/facial-hidratante.webp",
    excerpt: "Aprende por qué el calor y la humedad del Caribe exigen una rutina facial rigurosa que limpie los poros sin destruir la barrera lipídica.",
    content: [
      "El cutis facial está continuamente expuesto al sol, la polución y la humedad ambiental. En climas cálidos como el de La Habana, los poros tienden a saturarse de sebo y células muertas, impidiendo que la piel respire.",
      "Una limpieza facial profunda mensual no es un lujo, sino un paso higiénico fundamental. Al extraer comedones mediante vaporización y desinfectar con alta frecuencia bactericida, se evita la formación de brotes inflamatorios y se afina la textura cutánea.",
      "El paso posterior es la nutrición profunda: devolver ácido hialurónico, antioxidantes y colágeno a las capas vivas de la epidermis mediante masajes ascendentes que tonifican el óvalo facial.",
      "Resultado: Un rostro con brillo natural, libre de puntos negros, con poros cerrados y un aspecto descansado y juvenil."
    ]
  },
  {
    id: "poder-geotermal-piedras-volcanicas",
    title: "Terapia con piedras volcánicas: El poder geotermal del basalto para descontracturar",
    category: "Masajes & Terapias",
    date: "25 Agosto, 2026",
    readTime: "4 min de lectura",
    author: "Equipo Momentos Spa",
    image: "./assets/catalog/masaje-con-piedras-volcanicas.webp",
    excerpt: "El calor sostenido de las piedras volcánicas penetra hasta 4 centímetros en la masa muscular, disolviendo nudos que las manos solas tardarían horas en calmar.",
    content: [
      "Las piedras de basalto volcánico poseen una capacidad única de retención térmica gracias a su rica composición en minerales de hierro y magnesio. Calentadas en un baño de agua a temperatura precisa, se convierten en una extensión terapéutica insuperable.",
      "Cuando se deslizan sobre la espalda untada con aceites botánicos templados, el calor penetra gradualmente en el tejido miofascial, produciendo una dilatación vascular inmediata que afloja la musculatura tensa.",
      "Es la terapia indicada para contracturas posturales profundas, rigidez matutina en cuello y columna, y personas sensibles al dolor del masaje intenso.",
      "Sensación: Una calidez envolvente que sosiega el sistema nervioso y transporta a un estado de relajación meditativa."
    ]
  },
  {
    id: "maderoterapia-corporal-beneficios",
    title: "Maderoterapia corporal: La técnica natural para moldear tu cuerpo y combatir la celulitis",
    category: "Bienestar & Pareja",
    date: "18 Agosto, 2026",
    readTime: "5 min de lectura",
    author: "Equipo Momentos Spa",
    image: "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
    excerpt: "Conoce el funcionamiento de los rodillos estriados, copas suecas y tablas moldeadoras de madera noble para reafirmar y drenar.",
    content: [
      "La maderoterapia es una técnica de origen oriental perfeccionada en la estética moderna que utiliza herramientas anatómicas de madera natural para estimular distintas capas del tejido celular subcutáneo.",
      "A diferencia de aparatología invasiva, los rodillos y copas suecas movilizan el tejido adiposo respetando la fisiología del cuerpo. Al ser combinadas con maniobras drenantes, se estimula la microcirculación y se facilita la eliminación de líquidos retenidos.",
      "Zonas principales de aplicación: Abdomen, flancos, glúteos y piernas. Con sesiones regulares de 75 minutos se observa un contorno más definido, piel más firme y disminución visible de la celulitis edematosa.",
      "Sugerencia: Complementa la maderoterapia con una ingesta adecuada de agua y caminatas diarias para prolongar los beneficios tonificantes."
    ]
  },
  {
    id: "drenaje-linfatico-aliado-salud",
    title: "Por qué el drenaje linfático manual es el mejor aliado post-rutina y desintoxicante",
    category: "Masajes & Terapias",
    date: "10 Agosto, 2026",
    readTime: "4 min de lectura",
    author: "Equipo Momentos Spa",
    image: "./assets/catalog/masaje-linfodrenante.webp",
    excerpt: "Una técnica extremadamente suave y rítmica que desinflama las piernas, acelera recuperaciones y fortalece tus defensas.",
    content: [
      "El sistema linfático es la red encargada de recolectar desechos metabólicos, toxinas y excesos de líquido del espacio intercelular para conducirlos a los ganglios linfáticos, donde son filtrados y neutralizados.",
      "A diferencia del sistema circulatorio, la linfa no cuenta con una bomba como el corazón; su flujo depende de las contracciones musculares y la respiración. Cuando llevamos una vida sedentaria o sufrimos calor prolongado, la linfa se estanca, causando piernas hinchadas y sensación de pesadez.",
      "El drenaje linfático manual (método Vodder) emplea bombeos sumamente suaves que abren los canales linfáticos y reabsorben los edemas sin provocar dolor alguno.",
      "Ideal para: Postoperatorios estéticos, pesadez en piernas, desintoxicación corporal y retención estacional de líquidos."
    ]
  },
  {
    id: "experiencias-spa-en-pareja",
    title: "Experiencias de spa en pareja: El valor del descanso compartido y la reconexión",
    category: "Bienestar & Pareja",
    date: "1 Agosto, 2026",
    readTime: "4 min de lectura",
    author: "Equipo Momentos Spa",
    image: "./assets/catalog/masaje-en-pareja-2-horas.webp",
    excerpt: "Compartir cabina, hidromasaje y brindis crea recuerdos íntimos y fortalece el vínculo afectivo lejos de las distracciones cotidianas.",
    content: [
      "En el día a día, las responsabilidades laborales y los compromisos absorben gran parte de nuestra atención. Regalarse un espacio privado para dos en un spa es una de las maneras más sinceras de cuidar y celebrar el amor.",
      "En Momentos Spa diseñamos paquetes exclusivos como el 'Ritual de Amor & Relax en Pareja' o el 'Plan Romántico', donde la cabina doble se transforma en un refugio íntimo con velas aromáticas, música tenue y copas de vino.",
      "Recibir masajes coordinados por dos terapeutas mientras se comparte el silencio o una conversación tranquila ayuda a sincronizar las frecuencias de calma y reconectar emocionalmente.",
      "Detalle especial: Bañera de hidromasaje privada con microburbujas y aperitivos gourmet para brindar por los aniversarios o fechas memorables."
    ]
  },
  {
    id: "cuidado-capilar-clima-habana",
    title: "Cuidado capilar en el clima de La Habana: Cómo proteger tu cabello del calor y la humedad",
    category: "Salón & Capilar",
    date: "20 Julio, 2026",
    readTime: "5 min de lectura",
    author: "Estilistas Momentos Spa",
    image: "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
    excerpt: "El salitre, el sol tropical y la humedad constante abren la cutícula capilar. Aprende cómo blindar tu hebra y desintoxicar tu cuero cabelludo.",
    content: [
      "Vivir en una ciudad costera y tropical como La Habana tiene innumerables encantos, pero somete a la fibra capilar a un estrés continuo. La humedad ambiente provoca frizz, mientras que la radiación solar reseca las puntas y altera los tonos de tinte.",
      "La base de una melena sana comienza en el cuero cabelludo: una exfoliación craneal detox desobstruye los folículos del exceso de sebo y sudor, permitiendo que la raíz respire y el pelo crezca fuerte.",
      "En nuestro salón de belleza ofrecemos tratamientos como la Experiencia Capilar Scalp Balance Detox y el tratamiento anti-frizz FELPS, que sellan la cutícula para que el cabello resista la humedad sin esponjarse.",
      "Consejo de estilista: Aplica mascarillas hidratantes con gorro térmico al menos una vez por semana y utiliza protectores térmicos antes de cualquier secado."
    ]
  }
];

export default function Blog({ onBack, onOpenBooking }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['Todos', 'Masajes & Terapias', 'Cuidado Facial', 'Bienestar & Pareja', 'Salón & Capilar'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream-50/70 text-stone-900 pb-24 animate-fade-in">
      
      {/* Header Breadcrumb */}
      <div className="bg-white/80 backdrop-blur border-b border-stone-200/80 sticky top-20 z-30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 hover:bg-mahogany-950 hover:text-white transition-all font-bold text-xs text-mahogany-950 border border-stone-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al inicio</span>
          </button>
          
          <span className="text-xs font-serif-title font-bold text-mahogany-950">
            Blog de Bienestar • Momentos Spa
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-mahogany-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany-950 via-mahogany-900 to-mahogany-950 opacity-90" />
        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Artículos & Consejos de Belleza</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight">
            El Blog de Momentos Spa
          </h1>

          <p className="text-cream-200 text-sm sm:text-base leading-relaxed">
            Consejos expertos, ciencia del descanso, protocolos de autocuidado y todo lo que necesitas saber para cultivar tu salud integral.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-stone-200/80 shadow-sm">
          {/* Categories Pill list */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-mahogany-950 text-white shadow-md'
                    : 'bg-cream-100 text-stone-700 hover:bg-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-cream-50 border border-stone-200 rounded-full text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-mahogany-950"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.handled) {
                      e.currentTarget.dataset.handled = 'true';
                      e.currentTarget.src = './assets/servicios_spa.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-mahogany-950/90 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur border border-gold/30">
                  {post.category}
                </span>
                <span className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/90 bg-black/50 backdrop-blur px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gold" />
                  {post.readTime}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-stone-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-serif-title font-bold text-lg text-mahogany-950 group-hover:text-gold-dark transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-mahogany-950">
                  <span className="group-hover:underline">Leer artículo completo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
            <p className="text-stone-500 text-sm">No encontramos artículos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('Todos'); }}
              className="text-xs font-bold text-mahogany-950 underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>

      {/* Modal Lector de Artículo Completo */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-10 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-cream-100 hover:bg-mahogany-950 hover:text-white transition-colors text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 bg-gold/20 text-gold-dark border border-gold/30 rounded-full text-xs font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-mahogany-950 leading-tight">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-stone-500">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
                <span>•</span>
                <span>Por {selectedPost.author}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-md bg-stone-900">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base border-t border-stone-100 pt-4">
              {selectedPost.content.map((parr, idx) => (
                <p key={idx} className="leading-relaxed">
                  {parr}
                </p>
              ))}
            </div>

            {/* Bottom Actions inside Article */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-500 italic">
                “Siempre pensando en ti” • Momentos Spa Miramar
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  <span>Agendar Cita en el Spa</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
