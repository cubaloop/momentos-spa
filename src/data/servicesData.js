// Catálogo oficial maestro de Momentos Spa sincronizado con los 50 servicios oficiales
// Lema: "Pensando en ti"
// Todos los servicios incluyen bebida no alcohólica de cortesía (té, agua, café, jugo y refresco)

export const categoriesData = [
  {
    "id": "spa-masajes",
    "title": "Masajes",
    "subtitle": "Técnicas manuales y terapias para liberar tensión y restaurar el equilibrio",
    "icon": "Sparkles",
    "badge": "Más Popular",
    "subcategories": [
      {
        "id": "masajes",
        "name": "Masajes Terapéuticos y Relajantes",
        "description": "Alivio de tensiones, relajación profunda y estimulación de la circulación",
        "services": [
          {
            "id": "srv_masaje_relajante_30",
            "name": "Masaje relajante – 30 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 12,
            "duration": "30 min",
            "badge": "Express",
            "image": "./assets/catalog/masaje-relajante-de-30-min.webp",
            "gallery": [
              "./assets/catalog/masaje-relajante-de-30-min.webp",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Masaje relajante en cervicales, espalda y piernas. Ideal para personas que acumulan mucho estrés y disponen de poco tiempo.",
            "longDescription": [
              "Masaje relajante focalizado en cervicales, espalda y piernas. Es el tratamiento ideal para personas que acumulan tensión por la rutina diaria o disponen de poco tiempo para una pausa revitalizante.",
              "Mediante pases rítmicos y suaves, ayuda a descomprimir la musculatura dorsal y favorece la circulación en piernas cansadas."
            ],
            "benefits": [
              "Alivio focalizado en cuello, hombros y lumbares",
              "Descanso muscular rápido y efectivo",
              "Disminución del estrés en poco tiempo",
              "Activación de la circulación en extremidades"
            ],
            "includes": [
              "Cabina privada climatizada",
              "Aceites esenciales naturales",
              "Bebida no alcohólica de cortesía (té, café, agua, jugo o refresco)"
            ],
            "recommendations": "Recomendado como descanso reparador a mitad del día o al salir del trabajo.",
            "slug": "masaje-relajante-30-min"
          },
          {
            "id": "srv_masaje_relajante_60",
            "name": "Masaje relajante – 60 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 20,
            "duration": "60 min",
            "badge": "Esencial",
            "image": "./assets/catalog/masaje-relajante-u.webp",
            "gallery": [
              "./assets/catalog/masaje-relajante-u.webp",
              "./assets/servicios_spa.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Técnica terapéutica que se centra en aliviar la tensión muscular y promover un estado de calma y bienestar. Movimientos suaves y rítmicos de amasamiento, fricción y estiramiento.",
            "longDescription": [
              "El masaje relajante es una técnica terapéutica que se centra en aliviar la tensión muscular y promover un estado de calma y bienestar general.",
              "Durante una sesión de 60 minutos completos, el terapeuta aplica movimientos suaves y rítmicos, utilizando técnicas precisas de amasado, fricción y estiramientos suaves con aceites aromáticos."
            ],
            "benefits": [
              "Relajación muscular integral cuerpo completo",
              "Reducción profunda de niveles de cortisol y estrés",
              "Optimización de la circulación periférica",
              "Sensación duradera de serenidad mental y física"
            ],
            "includes": [
              "Sesión completa de 60 minutos",
              "Cabina privada climatizada con aromaterapia",
              "Bebida no alcohólica de cortesía a elección"
            ],
            "recommendations": "Ideal para disfrutar semanal o quincenalmente para mantener el equilibrio corporal.",
            "slug": "masaje-relajante-60-min"
          },
          {
            "id": "srv_masaje_relajante_90",
            "name": "Masaje relajante – 90 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 30,
            "duration": "90 min",
            "badge": "Inmersión Total",
            "image": "./assets/catalog/masaje-relajante-de-90-min.webp",
            "gallery": [
              "./assets/catalog/masaje-relajante-de-90-min.webp",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Experiencia prolongada de relajación profunda cuerpo completo. Tiempo extendido para trabajar con calma cada grupo muscular y lograr desconexión total.",
            "longDescription": [
              "Una hora y media de inmersión total diseñada para personas que buscan una desconexión absoluta del mundo exterior.",
              "Permite al terapeuta profundizar en cada segmento muscular, desde los pies hasta el cuello y cuero cabelludo, asegurando un alivio sin prisas."
            ],
            "benefits": [
              "Desconexión sensorial y mental absoluta",
              "Tratamiento minucioso de cada grupo muscular",
              "Inducción a un estado de relajación restaurador",
              "Alivio duradero de tensiones acumuladas"
            ],
            "includes": [
              "90 minutos de terapia manual continua",
              "Aceites botánicos de alta gama y aromaterapia",
              "Bebida no alcohólica de cortesía"
            ],
            "recommendations": "Perfecto para fines de semana o momentos de alta sobrecarga emocional y física.",
            "slug": "masaje-relajante-90-min"
          },
          {
            "id": "srv_masaje_descontracturante_60",
            "name": "Masaje descontracturante – 60 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 25,
            "duration": "60 min",
            "badge": "Alivio Fuerte",
            "image": "./assets/catalog/masaje-descontracturante-h.webp",
            "gallery": [
              "./assets/catalog/masaje-descontracturante-h.webp",
              "./assets/masaje_m01.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Técnica terapéutica utilizada para aliviar la tensión muscular y reducir contracturas. Movimientos profundos y firmes en espalda, cuello y hombros.",
            "longDescription": [
              "Técnica terapéutica vigorosa y focalizada en deshacer nudos musculares y contracturas crónicas causadas por posturas inadecuadas o sobrecargas.",
              "El terapeuta aplica presiones progresivas, fricciones transversas y amasamientos intensos para liberar las fibras miofasciales."
            ],
            "benefits": [
              "Disolución de nudos musculares y contracturas",
              "Alivio significativo del dolor cervical y lumbar",
              "Recuperación del rango de movimiento articular",
              "Mejora inmediata de la flexibilidad postural"
            ],
            "includes": [
              "60 minutos de terapia descontracturante",
              "Aplicación de bálsamos térmicos desinflamatorios",
              "Bebida no alcohólica de cortesía"
            ],
            "recommendations": "Recomendado para deportistas o personas con dolores crónicos de espalda.",
            "slug": "masaje-descontracturante-60-min"
          },
          {
            "id": "srv_masaje_descontracturante_90",
            "name": "Masaje descontracturante – 90 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 35,
            "duration": "90 min",
            "badge": "Terapéutico Plus",
            "image": "./assets/catalog/masaje-descontracturante.webp",
            "gallery": [
              "./assets/catalog/masaje-descontracturante.webp",
              "./assets/masaje_m02.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Sesión intensiva de 90 minutos para contracturas crónicas severas. Permite trabajar espalda, tren inferior y zonas articulares comprometidas.",
            "longDescription": [
              "Sesión extendida para tratar contracturas severas o múltiples focos de tensión en todo el cuerpo con la calma necesaria para no generar sobrestimulación.",
              "Combina pases profundos con estiramientos asistidos y puntos de presión neuromuscular."
            ],
            "benefits": [
              "Tratamiento exhaustivo de múltiples contracturas",
              "Mayor efectividad en tensiones arraigadas por meses",
              "Integración de estiramientos pasivos",
              "Sensación de ligereza y liberación corporal total"
            ],
            "includes": [
              "90 minutos de maniobras terapéuticas profundas",
              "Aceites con extractos botánicos desfatigantes",
              "Bebida de cortesía"
            ],
            "recommendations": "Excelente para personas tras viajes largos, jornadas de alta tensión o entrenamientos intensos.",
            "slug": "masaje-descontracturante-90-min"
          },
          {
            "id": "srv_masaje_combinado_90",
            "name": "Masaje combinado",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 35,
            "duration": "90 min",
            "badge": "A tu Medida",
            "image": "./assets/catalog/masaje-deportivo.webp",
            "gallery": [
              "./assets/catalog/masaje-deportivo.webp",
              "./assets/masaje_m02.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Posibilidad de elegir diferentes técnicas de masaje en una sola sesión. Como por ejemplo masaje relajante combinado con reflexología podal.",
            "longDescription": [
              "El masaje combinado brinda la máxima versatilidad: puedes solicitar combinar masaje relajante sueco con reflexología podal, o descontracturante con drenaje linfático.",
              "Diseñado a medida según las prioridades que converses directamente con tu terapeuta al ingresar a cabina."
            ],
            "benefits": [
              "Personalización 100% adaptada a tus dolencias del día",
              "Sinergia de múltiples técnicas en una sola visita",
              "Equilibrio entre relajación suave y descarga muscular",
              "Atención preferencial a zonas prioritarias"
            ],
            "includes": [
              "90 minutos personalizados con tu terapeuta",
              "Elección de técnicas manuales",
              "Bebida de cortesía"
            ],
            "recommendations": "Indica a tu terapeuta qué zonas prefieres priorizar al inicio de la sesión.",
            "slug": "masaje-combinado"
          },
          {
            "id": "srv_masaje_holistico_90",
            "name": "Masaje Holístico",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 35,
            "duration": "90 min",
            "badge": "Especialidad",
            "image": "./assets/catalog/masaje-holistioco-90-min.webp",
            "gallery": [
              "./assets/catalog/masaje-holistioco-90-min.webp",
              "./assets/masaje_m7.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Atiende a cada persona según sus necesidades. Técnicas de presión y estiramiento del masaje Tailandés, masaje relajante y digitopresión shiatsu. Especialidad del centro.",
            "longDescription": [
              "Nuestra terapia insignia. El masaje holístico concibe el cuerpo y la mente como una unidad integrada.",
              "Emplea técnicas de estiramientos rítmicos del masaje Tailandés tradicional, pases fluidos del masaje relajante y digitopresión en meridianos energéticos de la medicina oriental shiatsu."
            ],
            "benefits": [
              "Restablecimiento de la armonía energética",
              "Apertura articular y mayor elongación muscular",
              "Alivio emocional y disminución de ansiedad",
              "Estimulación de los canales naturales de autosanación"
            ],
            "includes": [
              "90 minutos de técnica holística integral",
              "Aromaterapia seleccionada",
              "Bebida de cortesía"
            ],
            "recommendations": "Altamente recomendado para quienes buscan una experiencia profunda y transformadora.",
            "slug": "masaje-holistico"
          },
          {
            "id": "srv_masaje_cuatro_manos_90",
            "name": "Masaje a 4 Manos",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 50,
            "duration": "90 min",
            "badge": "Lujo Supremo",
            "image": "./assets/catalog/exfoliacion-suprema-y-masaje-a-4-manos-90min.webp",
            "gallery": [
              "./assets/catalog/exfoliacion-suprema-y-masaje-a-4-manos-90min.webp",
              "./assets/masaje_m4.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Dos terapeutas trabajando en perfecta sincronía. Mayor cobertura corporal, estimulación simultánea y una inmersión sensorial única que desconecta la mente por completo.",
            "longDescription": [
              "El punto cumbre del arte del masaje. Dos terapeutas expertas sincronizan sus movimientos en una coreografía armónica sobre tu cuerpo.",
              "Al recibir estímulos táctiles simétricos en dos zonas a la vez, el cerebro abandona todo intento de control y entra en un estado hipnótico de relajación absoluta."
            ],
            "benefits": [
              "Doble beneficio terapéutico en el mismo tiempo",
              "Desconexión cerebral profunda e instantánea",
              "Sensación envolvente única e inolvidable",
              "Relajación muscular simultánea superior"
            ],
            "includes": [
              "90 minutos con 2 terapeutas en cabina",
              "Aceites tibios de textura sedosa",
              "Bebida de cortesía"
            ],
            "recommendations": "Reservar con antelación para coordinar el horario de las dos terapeutas.",
            "slug": "masaje-a-4-manos"
          },
          {
            "id": "srv_masaje_linfodrenante_60",
            "name": "Masaje linfodrenante",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 20,
            "duration": "60 min",
            "badge": "Detox & Circulación",
            "image": "./assets/catalog/masaje-linfodrenante.webp",
            "gallery": [
              "./assets/catalog/masaje-linfodrenante.webp",
              "./assets/masaje_m5.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Estimula el sistema linfático para la eliminación de toxinas y equilibrio de líquidos. Movimientos suaves y rítmicos que reducen la hinchazón y retención.",
            "longDescription": [
              "Técnica manual suave y superficial que sigue las vías del sistema linfático corporal.",
              "Facilita el drenaje de líquidos retenidos en tejidos intersticiales, alivia la pesadez en piernas y acelera la eliminación de deshechos metabólicos."
            ],
            "benefits": [
              "Disminución notable de la retención de líquidos",
              "Alivio de la pesadez en piernas y tobillos",
              "Estimulación del sistema inmunitario",
              "Favorece la recuperación postquirúrgica y detox"
            ],
            "includes": [
              "60 minutos de maniobras de bombeo linfático",
              "Aceites descongestivos naturales",
              "Bebida de cortesía purificante (té o agua)"
            ],
            "recommendations": "Beber abundante agua antes y después de la sesión para optimizar la eliminación de toxinas.",
            "slug": "masaje-linfodrenante"
          },
          {
            "id": "srv_masaje_velas_60",
            "name": "Masaje con velas aromáticas – 60 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 25,
            "duration": "60 min",
            "badge": "Calidez Sensorial",
            "image": "./assets/catalog/masaje-con-velas-aromaticas.webp",
            "gallery": [
              "./assets/catalog/masaje-con-velas-aromaticas.webp",
              "./assets/masaje_m01.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Combina masaje relajante con velas de aceites esenciales que al derretirse se convierten en un bálsamo cálido e hidratante sobre la piel.",
            "longDescription": [
              "Una experiencia sensorial cálida y envolvente. Se utilizan velas cosméticas elaboradas con ceras de soja pura, manteca de karité y esencias aromáticas.",
              "Al fundirse a baja temperatura, el aceite tibio se vierte suavemente sobre el cuerpo y se trabaja con maniobras fluidas y reconfortantes."
            ],
            "benefits": [
              "Nutrición profunda e hidratación de la piel con aceites tibios",
              "Relajación muscular favorecida por el calor agradable",
              "Efecto aromaterapéutico que calma el sistema nervioso",
              "Aroma delicado y duradero sobre la dermis"
            ],
            "includes": [
              "60 minutos con vela aromática de masaje",
              "Bálsamo tibio nutritivo",
              "Bebida de cortesía"
            ],
            "recommendations": "Ideal para días en los que busques confort térmico y consentirte al máximo.",
            "slug": "masaje-con-velas-aromaticas-60-min"
          },
          {
            "id": "srv_masaje_velas_90",
            "name": "Masaje con velas aromáticas – 90 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 35,
            "duration": "90 min",
            "badge": "Sensorial Plus",
            "image": "./assets/catalog/masaje-con-velas-aromaticas-de-90-min.webp",
            "gallery": [
              "./assets/catalog/masaje-con-velas-aromaticas-de-90-min.webp",
              "./assets/masaje_m01.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Versión extendida de 90 minutos con velas aromáticas tibias. Cobertura completa y nutrición cutánea con aceites esenciales naturales.",
            "longDescription": [
              "La versión extendida de nuestro masaje con velas permite recorrer minuciosamente todo el cuerpo con el aceite fundido a temperatura corporal ideal.",
              "El calor y los aromas naturales disuelven cualquier vestigio de fatiga física y mental."
            ],
            "benefits": [
              "Mayor tiempo de absorción de nutrientes botánicos",
              "Relajación prolongada sin interrupciones",
              "Piel tersa, elástica y profundamente perfumada",
              "Efecto ansiolítico natural gracias a los aceites esenciales"
            ],
            "includes": [
              "90 minutos de masaje con bálsamo de vela caliente",
              "Cabina climatizada con luz tenue",
              "Bebida de cortesía"
            ],
            "recommendations": "Permite que los aceites permanezcan sobre la piel unas horas para aprovechar sus propiedades nutritivas.",
            "slug": "masaje-con-velas-aromaticas-90-min"
          },
          {
            "id": "srv_masaje_piedras_60",
            "name": "Masaje con piedras volcánicas – 60 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 25,
            "duration": "60 min",
            "badge": "Termoterapia",
            "image": "./assets/catalog/masaje-con-piedras-volcanicas.webp",
            "gallery": [
              "./assets/catalog/masaje-con-piedras-volcanicas.webp",
              "./assets/servicios_spa.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "El calor terapéutico de las piedras de basalto penetra en los músculos, liberando tensiones, mejorando la circulación y proporcionando una profunda relajación.",
            "longDescription": [
              "Terapia geotermal milenaria que utiliza piedras de basalto volcánico pulidas calentadas a temperatura controlada.",
              "El calor penetrante de las piedras relaja las fibras musculares con mayor rapidez que la presión manual sola, induciendo un sosiego inigualable."
            ],
            "benefits": [
              "Penetración térmica que ablanda la rigidez muscular",
              "Reactiva el flujo circulatorio y linfático",
              "Alivio notable de dolores reumáticos y articulares",
              "Sedación natural del sistema nervioso central"
            ],
            "includes": [
              "60 minutos de masaje con piedras volcánicas calientes",
              "Puntos de apoyo energético con piedras estáticas",
              "Bebida de cortesía"
            ],
            "recommendations": "No recomendado en personas con inflamaciones agudas o fiebre.",
            "slug": "masaje-con-piedras-volcanicas-60-min"
          },
          {
            "id": "srv_masaje_piedras_90",
            "name": "Masaje con piedras volcánicas – 90 min",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 35,
            "duration": "90 min",
            "badge": "Geotermal Plus",
            "image": "./assets/catalog/masaje-con-piedras-volcanicas-90-min.webp",
            "gallery": [
              "./assets/catalog/masaje-con-piedras-volcanicas-90-min.webp",
              "./assets/servicios_spa.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Sesión completa de 90 minutos con piedras volcánicas. Mayor dedicación a puntos energéticos y combinación con maniobras de masaje manual.",
            "longDescription": [
              "Sesión geotermal completa donde se intercalan maniobras de masaje manual profundo con deslizamientos de piedras calientes sobre espalda, extremidades y chakras.",
              "El calor continuo permite alcanzar capas musculares profundas sin dolor ni molestias."
            ],
            "benefits": [
              "Máximo aprovechamiento de la termoterapia volcánica",
              "Alivio prolongado de contracturas dorsales y lumbares",
              "Calma el estrés crónico e insomnio",
              "Sensación de renovación y ligereza corporal"
            ],
            "includes": [
              "90 minutos de terapia geotermal continua",
              "Aceites minerales y piedras volcánicas de basalto",
              "Bebida de cortesía"
            ],
            "recommendations": "Excelente opción durante días lluviosos o cuando sientas fatiga acumulada.",
            "slug": "masaje-con-piedras-volcanicas-90-min"
          },
          {
            "id": "srv_reflexologia_podal_60",
            "name": "Reflexología podal",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 20,
            "duration": "60 min",
            "badge": "Equilibrio Orgánico",
            "image": "./assets/catalog/reflexologia-podal.webp",
            "gallery": [
              "./assets/catalog/reflexologia-podal.webp",
              "./assets/masaje_m5.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Presión en puntos específicos de los pies conectados a órganos y sistemas. Estimula el equilibrio natural, alivia el estrés y revitaliza las piernas.",
            "longDescription": [
              "La reflexología podal se fundamenta en los mapas reflejos ubicados en las plantas de los pies, donde convergen terminaciones nerviosas vinculadas a los órganos internos.",
              "Mediante presiones pulgares precisas y digitopuntura, se estimula la autorregulación orgánica y se alivia la sobrecarga de pies y piernas."
            ],
            "benefits": [
              "Alivio inmediato del cansancio y dolor en la planta de los pies",
              "Estimulación refleja del funcionamiento de órganos internos",
              "Desbloqueo de tensiones en extremidades inferiores",
              "Profunda relajación y bienestar integral"
            ],
            "includes": [
              "60 minutos de reflexología podal especializada",
              "Crema descongestiva con mentol y árnica",
              "Bebida de cortesía"
            ],
            "recommendations": "Ideal para personas que pasan muchas horas de pie o caminan con frecuencia.",
            "slug": "reflexologia-podal"
          },
          {
            "id": "srv_metfit_90",
            "name": "METFIT tejido profundo",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 35,
            "duration": "90 min",
            "badge": "Deportivo & Miofascial",
            "image": "./assets/catalog/metfit.webp",
            "gallery": [
              "./assets/catalog/metfit.webp",
              "./assets/masaje_m02.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Manipulaciones específicas sobre el tejido profundo activando la circulación sanguínea y linfática. Reduce espasmos y previene lesiones musculares.",
            "longDescription": [
              "Método de tratamiento físico-técnico que engloba maniobras vigorosas y estiramientos pasivos sobre las capas miofasciales profundas.",
              "Especialmente concebido para atletas, deportistas y personas con hábitos de alto rendimiento que requieren una descompresión muscular contundente."
            ],
            "benefits": [
              "Prevención y recuperación de sobrecargas deportivas",
              "Disminución drástica de espasmos musculares y rigidez",
              "Activación potente del riego sanguíneo y oxigenación",
              "Aumento de la elasticidad de los tendones y fascias"
            ],
            "includes": [
              "90 minutos de técnica especializada de tejido profundo",
              "Emulsiones deportivas desfatigantes",
              "Bebida de cortesía"
            ],
            "recommendations": "Puede causar ligera sensibilidad pasajera post-sesión mientras los tejidos se reoxigenan.",
            "slug": "metfit-tejido-profundo"
          },
          {
            "id": "srv_masaje_craneal_20",
            "name": "Masaje craneal con alta frecuencia",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 5,
            "duration": "20 min",
            "badge": "Capilar Express",
            "image": "./assets/catalog/masaje-craneal-con-alta-frecuencia.webp",
            "gallery": [
              "./assets/catalog/masaje-craneal-con-alta-frecuencia.webp",
              "./assets/head_spa.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Mejora el riego sanguíneo al descomprimir los vasos. Reduce dolores de cabeza y migrañas, evita la somnolencia y estimula el crecimiento activo del cabello.",
            "longDescription": [
              "Terapia express que combina maniobras de digitopresión en cráneo, sienes y nuca con la aplicación de electroterapia de alta frecuencia.",
              "El electrodo de alta frecuencia oxigena los folículos pilosos, estimula el crecimiento capilar y alivia cefaleas tensionales en minutos."
            ],
            "benefits": [
              "Alivio inmediato de jaquecas, migrañas y tensión ocular",
              "Descompresión de vasos sanguíneos craneales",
              "Estimulación de los folículos contra la caída del cabello",
              "Claridad mental y superación del cansancio acumulado"
            ],
            "includes": [
              "20 minutos de masaje craneal + electrodo de alta frecuencia",
              "Bebida de cortesía"
            ],
            "recommendations": "Excelente adición rápida a cualquier otro masaje o tratamiento facial.",
            "slug": "masaje-craneal-con-alta-frecuencia"
          },
          {
            "id": "srv_spa_labial_15",
            "name": "Spa labial",
            "categoryTitle": "Masajes",
            "categoryId": "spa-masajes",
            "subcategoryName": "Masajes Terapéuticos y Relajantes",
            "price": 5,
            "duration": "15 min",
            "badge": "Hidratación Express",
            "image": "./assets/catalog/spa-labial-10-min.webp",
            "gallery": [
              "./assets/catalog/spa-labial-10-min.webp",
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg"
            ],
            "description": "\"No es solo hidratar los labios, es devolverles vida.\" Tratamiento de hidratación profunda para labios resecos o con líneas marcadas. Labios suaves y nutridos en una sesión.",
            "longDescription": [
              "\"No es solo hidratar los labios, es devolverles vida.\" Nuestro Tratamiento de Hidratación Labial Profunda es una experiencia diseñada para labios resecos, opacos o con líneas marcadas.",
              "En solo una sesión logramos labios más suaves, nutridos, definidos y visiblemente rejuvenecidos con exfoliación suave y sérum de ácido hialurónico."
            ],
            "benefits": [
              "Eliminación de células muertas y pellejitos secos",
              "Hidratación intensa y nutrición labial con péptidos",
              "Relleno óptico de líneas de expresión en el contorno",
              "Apariencia jugosa, sana y juvenil"
            ],
            "includes": [
              "Exfoliación labial de azúcar y aceites",
              "Mascarilla o sérum reparador con ácido hialurónico",
              "Bebida de cortesía"
            ],
            "recommendations": "Perfecto antes de un evento especial o para complementar un facial.",
            "slug": "spa-labial"
          }
        ]
      }
    ]
  },
  {
    "id": "tratamientos-faciales",
    "title": "Tratamientos faciales",
    "subtitle": "Cuidado profesional, renovación celular e hidratación dérmica profunda",
    "icon": "Sparkles",
    "badge": "Piel Luminosa",
    "subcategories": [
      {
        "id": "faciales",
        "name": "Faciales y Cosmiatría",
        "description": "Higiene, nutrición profunda y efecto anti-edad para tu rostro",
        "services": [
          {
            "id": "srv_masaje_facial_hidratacion_30",
            "name": "Masaje facial de Hidratación",
            "categoryTitle": "Tratamientos faciales",
            "categoryId": "tratamientos-faciales",
            "subcategoryName": "Faciales y Cosmiatría",
            "price": 10,
            "duration": "30 min",
            "badge": "Luminosidad Express",
            "image": "./assets/catalog/hidratacion-de-30min.webp",
            "gallery": [
              "./assets/catalog/hidratacion-de-30min.webp",
              "./assets/facial_original.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Exfoliante facial para eliminar impurezas y suavizar. Aplicación de cremas y suave masaje relajante para lograr mayor hidratación, luminosidad y aspecto fresco.",
            "longDescription": [
              "Tratamiento facial rápido pero altamente revitalizante. Se realiza una exfoliación suave para desprender impurezas y células muertas.",
              "Posteriormente se aplican activos hidratantes acompañados de un reconfortante masaje facial que drena y estimula la microcirculación cutánea."
            ],
            "benefits": [
              "Textura suave y piel visiblemente más lisa al tacto",
              "Aporte inmediato de luminosidad y frescura",
              "Relajación de los músculos de expresión facial",
              "Rápida absorción de principios activos hidratantes"
            ],
            "includes": [
              "30 minutos de sesión facial",
              "Exfoliación suave no abrasiva",
              "Crema hidratante y masaje facial",
              "Bebida de cortesía"
            ],
            "recommendations": "Ideal para preparar el rostro antes de maquillarse o tras una semana ajetreada.",
            "slug": "masaje-facial-de-hidratacion"
          },
          {
            "id": "srv_facial_hidratacion_profunda_60",
            "name": "Facial de Hidratación profunda",
            "categoryTitle": "Tratamientos faciales",
            "categoryId": "tratamientos-faciales",
            "subcategoryName": "Faciales y Cosmiatría",
            "price": 15,
            "duration": "60 min",
            "badge": "Hidratación Completa",
            "image": "./assets/catalog/facial-hidratante.webp",
            "gallery": [
              "./assets/catalog/facial-hidratante.webp",
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg"
            ],
            "description": "Renueva, nutre e hidrata desde las capas más profundas. Consigue un rostro luminoso, suave y terso, devolviendo vitalidad a pieles cansadas o deshidratadas.",
            "longDescription": [
              "Procedimiento cosmiátrico enfocado en restaurar el manto hidrolipídico y el balance hídrico de la piel.",
              "La deshidratación causa opacidad y pérdida de elasticidad; este facial infunde ácido hialurónico, sérums nutritivos y mascarillas oclusivas para reponer la turgencia cutánea."
            ],
            "benefits": [
              "Restauración profunda de la hidratación tisular",
              "Efecto de relleno natural sobre líneas de sequedad",
              "Rostro descansado, flexible y radiante",
              "Fortalecimiento de la barrera cutánea protectora"
            ],
            "includes": [
              "60 minutos de tratamiento facial completo",
              "Limpieza preparatoria, tónico, sérums y mascarilla hidro-nutritiva",
              "Bebida de cortesía"
            ],
            "recommendations": "Recomendado una vez al mes para preservar la salud y juventud cutánea.",
            "slug": "facial-de-hidratacion-profunda"
          },
          {
            "id": "srv_facial_antiedad_60",
            "name": "Facial anti-edad",
            "categoryTitle": "Tratamientos faciales",
            "categoryId": "tratamientos-faciales",
            "subcategoryName": "Faciales y Cosmiatría",
            "price": 20,
            "duration": "60 min",
            "badge": "Efecto Lifting & Colágeno",
            "image": "./assets/catalog/facial-con-ventosas.webp",
            "gallery": [
              "./assets/catalog/facial-con-ventosas.webp",
              "./assets/facial_original.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "description": "Estimula la circulación, favorece la desintoxicación, reduce hinchazón, promueve la renovación celular, suaviza arrugas y estimula colágeno para un aspecto firme y tonificado.",
            "longDescription": [
              "Protocolo avanzado antienvejecimiento que trabaja sobre la flacidez, líneas de expresión y falta de tono muscular facial.",
              "Combina principios activos tensores y antioxidantes con técnicas de masaje reafirmante o ventosas faciales que estimulan la síntesis de colágeno y elastina."
            ],
            "benefits": [
              "Atenuación de líneas de expresión y arrugas finas",
              "Efecto lifting y mayor definición del óvalo facial",
              "Estimulación endógena de colágeno",
              "Drenaje de bolsas y reducción de hinchazón periocular"
            ],
            "includes": [
              "60 minutos de protocolo anti-edad",
              "Sérums concentrados de péptidos y antioxidantes",
              "Mascarilla tensora reafirmante",
              "Bebida de cortesía"
            ],
            "recommendations": "Apto para pieles maduras o personas a partir de los 28 años como prevención activa.",
            "slug": "facial-anti-edad"
          },
          {
            "id": "srv_limpieza_facial_profunda_60",
            "name": "Limpieza facial profunda",
            "categoryTitle": "Tratamientos faciales",
            "categoryId": "tratamientos-faciales",
            "subcategoryName": "Faciales y Cosmiatría",
            "price": 18,
            "duration": "60 min",
            "badge": "Purificante & Anti-Impurezas",
            "image": "./assets/catalog/limpieza-profunda-x.webp",
            "gallery": [
              "./assets/catalog/limpieza-profunda-x.webp",
              "./assets/facial_original.jpg",
              "./assets/dsc_6325.jpg"
            ],
            "description": "Elimina puntos negros y células muertas, logrando una piel suave, fresca e hidratada. Desobstruye poros y unifica el cutis.",
            "longDescription": [
              "Tratamiento esencial de higiene dérmica. Elimina con precisión comedones, puntos negros, microquistes y tapones sebáceos.",
              "Prepara la piel mediante vapor o lociones emolientes, extracción higiénica cuidadosa, descongestión con alta frecuencia y mascarilla calmante antiséptica."
            ],
            "benefits": [
              "Poros limpios y visiblemente afinados",
              "Eliminación total de impurezas y queratina acumulada",
              "Regulación del exceso de sebo y prevención de brotes",
              "Cutis limpio, uniforme y revitalizado"
            ],
            "includes": [
              "60 minutos de protocolo de limpieza profunda",
              "Extracción profesional higiénica",
              "Alta frecuencia bactericida y mascarilla calmante",
              "Bebida de cortesía"
            ],
            "recommendations": "No exponerse al sol directo las 24 horas posteriores a la sesión.",
            "slug": "limpieza-facial-profunda"
          }
        ]
      }
    ]
  },
  {
    "id": "tratamientos-corporales",
    "title": "Tratamientos corporales",
    "subtitle": "Envolturas, termoterapia, maderoterapia y exfoliación corporal",
    "icon": "Sparkles",
    "badge": "Bienestar Integral",
    "subcategories": [
      {
        "id": "corporales",
        "name": "Cuidado Corporal y Estética",
        "description": "Tratamientos termales, modelado y reactivación circulatoria",
        "services": [
          {
            "id": "srv_parafina_manos_pies_45",
            "name": "Parafina para manos y pies",
            "categoryTitle": "Tratamientos corporales",
            "categoryId": "tratamientos-corporales",
            "subcategoryName": "Cuidado Corporal y Estética",
            "price": 10,
            "duration": "45 min",
            "badge": "Nutrición Cutánea",
            "image": "./assets/catalog/parafina-para-manos-y-pies-45-min.webp",
            "gallery": [
              "./assets/catalog/parafina-para-manos-y-pies-45-min.webp",
              "./assets/snack_bandeja.jpg"
            ],
            "description": "Baño de parafina tibia que humecta profundamente manos y pies secos o agrietados, alivia dolores articulares y deja la piel aterciopelada.",
            "longDescription": [
              "Tratamiento termoterapéutico donde las manos y los pies se sumergen en parafina cosmética tibia enriquecida con esencias emolientes.",
              "El calor abre los poros y permite la absorción intensiva de aceites, proporcionando alivio en articulaciones rígidas y una tersura extraordinaria en talones y manos."
            ],
            "benefits": [
              "Hidratación intensiva contra resequedad extrema y grietas",
              "Calma la rigidez en dedos, muñecas y tobillos",
              "Piel con tacto de seda durante días",
              "Sensación de descanso absoluto en manos y pies"
            ],
            "includes": [
              "45 minutos de tratamiento de parafina en ambas extremidades",
              "Envoltura térmica y masaje final hidratante",
              "Bebida de cortesía"
            ],
            "recommendations": "Ideal para combinar con pedicura o tras una jornada intensa de trabajo manual.",
            "slug": "parafina-para-manos-y-pies"
          },
          {
            "id": "srv_maderoterapia_corporal_75",
            "name": "Maderoterapia corporal localizada",
            "categoryTitle": "Tratamientos corporales",
            "categoryId": "tratamientos-corporales",
            "subcategoryName": "Cuidado Corporal y Estética",
            "price": 25,
            "duration": "75 min",
            "badge": "Reductor & Reafirmante",
            "image": "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
            "gallery": [
              "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
              "./assets/maderoterapia.jpg"
            ],
            "description": "Técnica con instrumentos de madera diseñados para estimular la circulación, reafirmar tejidos, modelar el contorno y reducir celulitis.",
            "longDescription": [
              "Técnica holística de modelado corporal mediante instrumentos anatómicos de madera noble (rodillos estriados, copas suecas, tabla moldeadora).",
              "Reactiva la lipólisis local, moviliza adiposidades rebeldes, favorece la retracción de la piel y tonifica glúteos, abdomen o muslos."
            ],
            "benefits": [
              "Atenuación de la apariencia de piel de naranja y celulitis",
              "Modelado y definición del contorno corporal",
              "Estimulación linfática y eliminación de líquidos",
              "Reafirmación del tejido conjuntivo dérmico"
            ],
            "includes": [
              "75 minutos de maniobras con instrumental de maderoterapia",
              "Aceites reductores con extractos botánicos",
              "Bebida de cortesía"
            ],
            "recommendations": "Para resultados óptimos de reducción se aconseja una secuencia de varias sesiones.",
            "slug": "maderoterapia-corporal-localizada"
          },
          {
            "id": "srv_exfoliante_corporal_30",
            "name": "Exfoliante corporal",
            "categoryTitle": "Tratamientos corporales",
            "categoryId": "tratamientos-corporales",
            "subcategoryName": "Cuidado Corporal y Estética",
            "price": 15,
            "duration": "30 min",
            "badge": "Renovación Dermo-Pulido",
            "image": "./assets/catalog/exfoliante-corporal-z.webp",
            "gallery": [
              "./assets/catalog/exfoliante-corporal-z.webp",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Elimina células muertas y asperezas en todo el cuerpo con sales marinas o scrubs botánicos, dejando la piel renovada, luminosa y suave.",
            "longDescription": [
              "Pulido dérmico integral mediante exfoliantes granulados naturales a base de sales del mar o azúcares botánicos con aceites esenciales.",
              "Desobstruye folículos, oxigena la epidermis y prepara la piel para recibir masajes o hidrataciones con máxima absorción."
            ],
            "benefits": [
              "Eliminación eficaz de asperezas en codos, rodillas y espalda",
              "Homogeneidad y suavidad aterciopelada al tacto",
              "Estimulación de la microcirculación cutánea superficial",
              "Potencia el efecto de cualquier tratamiento posterior"
            ],
            "includes": [
              "30 minutos de exfoliación corporal completa",
              "Retirada tibia y emulsión hidratante ligera",
              "Bebida de cortesía"
            ],
            "recommendations": "Excelente antes de tomar el sol o recibir un masaje relajante.",
            "slug": "exfoliante-corporal"
          },
          {
            "id": "srv_termoterapia_parafina_60",
            "name": "Termoterapia con manta térmica y parafina",
            "categoryTitle": "Tratamientos corporales",
            "categoryId": "tratamientos-corporales",
            "subcategoryName": "Cuidado Corporal y Estética",
            "price": 10,
            "duration": "60 min",
            "badge": "Detox Térmico",
            "image": "./assets/catalog/envoltura-corporal-con-parafina.webp",
            "gallery": [
              "./assets/catalog/envoltura-corporal-con-parafina.webp",
              "./assets/circuito_termal.jpg"
            ],
            "description": "Aplicación de parafina y calor controlado mediante manta térmica para desintoxicar, relajar la musculatura y favorecer la sudoración depurativa.",
            "longDescription": [
              "Tratamiento de calor profundo que eleva la temperatura corporal de manera segura y placentera con manta térmica especializada y activos emolientes de parafina.",
              "Provoca una sudoración depurativa que elimina toxinas, alivia tensiones musculares generalizadas y promueve el descanso."
            ],
            "benefits": [
              "Eliminación de toxinas por vía sudorípara",
              "Alivio de dolores musculares y articulares crónicos",
              "Relajación profunda por efecto vasodilatador",
              "Piel suave e hidratada por la parafina"
            ],
            "includes": [
              "60 minutos de protocolo termoterapéutico",
              "Manta térmica regulable y envoltura corporal",
              "Bebida de cortesía hidratante"
            ],
            "recommendations": "Beber agua fresca al terminar la sesión para rehidratar el organismo.",
            "slug": "termoterapia-con-manta-termica-y-parafina"
          },
          {
            "id": "srv_terapia_ventosas_75",
            "name": "Terapia con ventosas",
            "categoryTitle": "Tratamientos corporales",
            "categoryId": "tratamientos-corporales",
            "subcategoryName": "Cuidado Corporal y Estética",
            "price": 25,
            "duration": "75 min",
            "badge": "Cupping Descompresivo",
            "image": "./assets/catalog/terapia-con-ventosas.webp",
            "gallery": [
              "./assets/catalog/terapia-con-ventosas.webp",
              "./assets/masaje_m01.jpg"
            ],
            "description": "Técnica tradicional de cupping que succiona y descomprime la fascia muscular, incrementando la irrigación sanguínea y aliviando contracturas resistentes.",
            "longDescription": [
              "Terapia milenaria de ventosas (cupping) fijas y dinámicas que genera presión negativa sobre el tejido blando.",
              "A diferencia del masaje por compresión, la ventosa separa las fascias de los músculos, facilitando la oxigenación celular y barriendo el ácido láctico acumulado."
            ],
            "benefits": [
              "Descompresión fascial profunda en espalda y piernas",
              "Aumento drástico del flujo sanguíneo local",
              "Eficaz en contracturas crónicas que no ceden al masaje tradicional",
              "Acelera la recuperación tras entrenamientos intensos"
            ],
            "includes": [
              "75 minutos de terapia de ventosas + masaje manual preparatorio",
              "Aceites terapéuticos botánicos",
              "Bebida de cortesía"
            ],
            "recommendations": "Puede dejar marcas circulares rojizas normales que desaparecen naturalmente en pocos días.",
            "slug": "terapia-con-ventosas"
          },
          {
            "id": "srv_auriculoterapia_20",
            "name": "Auriculoterapia",
            "categoryTitle": "Tratamientos corporales",
            "categoryId": "tratamientos-corporales",
            "subcategoryName": "Cuidado Corporal y Estética",
            "price": 3,
            "duration": "20 min",
            "badge": "Reflexología Auricular",
            "image": "./assets/catalog/auriculoterapia.webp",
            "gallery": [
              "./assets/catalog/auriculoterapia.webp",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Estimulación de puntos reflejos en la oreja mediante microesferas para regular el estrés, ansiedad, apetito y desequilibrios energéticos.",
            "longDescription": [
              "Especialidad de la medicina tradicional oriental basada en el microsistema de la oreja, donde se proyectan todos los órganos corporales.",
              "Se aplican semillas de vaccaria o balines imantados en puntos estratégicos que continúan estimulando el sistema nervioso durante varios días."
            ],
            "benefits": [
              "Control de la ansiedad y el estrés cotidiano",
              "Apoyo en programas de control de peso y hábitos saludables",
              "Alivio de dolores de cabeza e insomnio",
              "Efecto prolongado durante los días siguientes"
            ],
            "includes": [
              "20 minutos de diagnóstico y colocación de microesferas auriculares",
              "Bebida de cortesía"
            ],
            "recommendations": "Presionar suavemente los balines cuando sientas episodios de ansiedad o estrés.",
            "slug": "auriculoterapia"
          }
        ]
      }
    ]
  },
  {
    "id": "paquetes-parejas",
    "title": "Paquetes",
    "subtitle": "Rituales signature, experiencias románticas en pareja y días de spa",
    "icon": "Sparkles",
    "badge": "Signature",
    "subcategories": [
      {
        "id": "paquetes",
        "name": "Paquetes Signature y Rituales",
        "description": "Combinaciones completas de masajes, faciales y atenciones especiales",
        "services": [
          {
            "id": "srv_escapada_chicas",
            "name": "Escapada de chicas",
            "categoryTitle": "Paquetes",
            "categoryId": "paquetes-parejas",
            "subcategoryName": "Paquetes Signature y Rituales",
            "price": 110,
            "duration": "2 h 20 min aprox.",
            "badge": "Grupal & Amigas",
            "image": "./assets/catalog/escapada-de-chicas-2-horas-y-20-min.webp",
            "gallery": [
              "./assets/catalog/escapada-de-chicas-2-horas-y-20-min.webp",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            "description": "Paquete completo diseñado para disfrutar entre amigas: masajes relajantes, mascarillas faciales, exfoliación y brindis de bienvenida.",
            "longDescription": [
              "El plan perfecto para compartir momentos inolvidables de risas, belleza y relax absoluto entre amigas en nuestras instalaciones privadas.",
              "Incluye circuito de masajes relajantes, exfoliación corporal renovadora, hidratación facial y atención gourmet personalizada."
            ],
            "benefits": [
              "Experiencia compartida inolvidable en ambiente exclusivo",
              "Tratamiento estético y relajante integral simultáneo",
              "Bebidas y aperitivos de cortesía",
              "Fotografías y recuerdos memorables"
            ],
            "includes": [
              "2 horas y 20 minutos de experiencia combinada",
              "Masaje relajante + Tratamiento facial express + Exfoliación",
              "Bebidas de cortesía y atenciones especiales"
            ],
            "recommendations": "Reservar con anticipación para coordinar el horario del grupo.",
            "slug": "escapada-de-chicas"
          },
          {
            "id": "srv_ritual_amor_pareja",
            "name": "Ritual de Amor & Relax en Pareja",
            "categoryTitle": "Paquetes",
            "categoryId": "paquetes-parejas",
            "subcategoryName": "Paquetes Signature y Rituales",
            "price": 130,
            "duration": "3 h aprox.",
            "badge": "Romance & Parejas",
            "image": "./assets/catalog/masaje-en-pareja-2-horas.webp",
            "gallery": [
              "./assets/catalog/masaje-en-pareja-2-horas.webp",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/masaje_pareja.jpg"
            ],
            "description": "Experiencia romántica en cabina doble privada. Masaje corporal simultáneo con aromaterapia, tratamiento facial hidratante y brindis con cava o vino espumoso.",
            "longDescription": [
              "Diseñado para reconectar, celebrar aniversarios o regalar una velada mágica en pareja.",
              "En una cabina doble ambientada con velas y música suave, dos terapeutas realizan un masaje completo simultáneo, seguido de hidratación facial y un momento íntimo de brindis."
            ],
            "benefits": [
              "Fortalece la conexión íntima y emocional en pareja",
              "Cabina doble ambientada con pétalos y luz tenue",
              "Masaje integral simultáneo a cuatro manos (dos terapeutas)",
              "Brindis exclusivo y amenidades especiales"
            ],
            "includes": [
              "3 horas aproximadas en suite privada de parejas",
              "Masaje corporal completo para ambos",
              "Hidratación facial para los dos",
              "Brindis con copa de espumoso o vino + bebida de cortesía"
            ],
            "recommendations": "El paquete favorito para celebrar aniversarios, cumpleaños o pedidas de mano.",
            "slug": "ritual-de-amor-relax-en-pareja"
          },
          {
            "id": "srv_refugio_zen",
            "name": "Refugio Zen",
            "categoryTitle": "Paquetes",
            "categoryId": "paquetes-parejas",
            "subcategoryName": "Paquetes Signature y Rituales",
            "price": 200,
            "duration": "4 h 20 min aprox.",
            "badge": "Día de Spa Completo",
            "image": "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
            "gallery": [
              "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
              "./assets/circuito_termal.jpg",
              "./assets/pareja_sauna.jpg"
            ],
            "description": "La experiencia de spa más completa de La Habana: exfoliación, envoltura corporal, masaje a elección, limpieza facial y salón de belleza con merienda gourmet.",
            "longDescription": [
              "Más de cuatro horas de entrega absoluta al autocuidado. Tu día de spa definitivo para resetear cuerpo y mente.",
              "Recorrerás todas las estaciones del santuario: exfoliación profunda, envoltura nutritiva, masaje holístico o de piedras calientes, facial completo y servicios de estilismo capilar o manicura."
            ],
            "benefits": [
              "Transformación integral de pies a cabeza",
              "Máximo nivel de personalización de cada protocolo",
              "Merienda gourmet saludable y bebidas ilimitadas",
              "Sensación de renacimiento físico y anímico"
            ],
            "includes": [
              "4 horas y 20 minutos de atenciones continuas",
              "Exfoliación + Envoltura + Masaje 90 min + Facial completo + Salón",
              "Merienda gourmet y bebidas de cortesía"
            ],
            "recommendations": "Reserva este día enteramente para ti sin compromisos de agenda posteriores.",
            "slug": "refugio-zen"
          },
          {
            "id": "srv_plan_romantico",
            "name": "Plan Romántico",
            "categoryTitle": "Paquetes",
            "categoryId": "paquetes-parejas",
            "subcategoryName": "Paquetes Signature y Rituales",
            "price": 105,
            "duration": "2 h aprox.",
            "badge": "Especial Parejas",
            "image": "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
            "gallery": [
              "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
              "./assets/masaje_pareja.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            "description": "Dos horas de escape en cabina doble para compartir con tu pareja: masaje sincronizado relajante, aromaterapia personalizada y copas de cortesía.",
            "longDescription": [
              "Una pausa romántica y acogedora de dos horas completas para parejas que desean desconectar del ajetreo diario.",
              "Masaje corporal relajante sincronizado, aceites aromáticos afrodisíacos y una atmósfera íntima diseñada con esmero."
            ],
            "benefits": [
              "Desconexión conjunta en cabina doble",
              "Alivio de tensiones y renovación del vínculo afectivo",
              "Música envolvente y aceites aromáticos de rosas y jazmín",
              "Detalles de cortesía románticos"
            ],
            "includes": [
              "2 horas completas en cabina privada de pareja",
              "Masaje relajante corporal para ambos",
              "Copas de cortesía"
            ],
            "recommendations": "Excelente detalle sorpresa para una fecha especial.",
            "slug": "plan-romantico"
          },
          {
            "id": "srv_escape_romantico_spa",
            "name": "Escape Romántico Spa",
            "categoryTitle": "Paquetes",
            "categoryId": "paquetes-parejas",
            "subcategoryName": "Paquetes Signature y Rituales",
            "price": 60,
            "duration": "1 h 45 min aprox.",
            "badge": "Pareja Express",
            "image": "./assets/catalog/tarde-de-spa-para-dos-3-horas-y-30-min.webp",
            "gallery": [
              "./assets/catalog/tarde-de-spa-para-dos-3-horas-y-30-min.webp",
              "./assets/pareja_jacuzzi.jpg"
            ],
            "description": "Versión condensada para disfrutar en pareja: masaje relajante de 60 minutos en cabina compartida más cóctel sin alcohol o infusión de cortesía.",
            "longDescription": [
              "Para parejas con agendas apretadas que no quieren renunciar a regalarse una experiencia de relajación compartida de primer nivel.",
              "Incluye recepción con bebidas frías o calientes y masaje relajante simultáneo en cabina doble."
            ],
            "benefits": [
              "Optimización de tiempo con máxima calidad de spa",
              "Masaje simultáneo en cabina privada para dos",
              "Alivio muscular y serenidad compartida",
              "Tarifa accesible para disfrutar regularmente"
            ],
            "includes": [
              "1 hora y 45 minutos de experiencia en pareja",
              "Masaje corporal simultáneo para ambos",
              "Bebida no alcohólica de cortesía"
            ],
            "recommendations": "Ideal para coordinar entre semana al terminar la jornada.",
            "slug": "escape-romantico-spa"
          }
        ]
      }
    ]
  },
  {
    "id": "salon-belleza",
    "title": "Salón de belleza",
    "subtitle": "Lavados, cortes, tratamientos capilares, color y pedicura spa",
    "icon": "Sparkles",
    "badge": "Estilismo",
    "subcategories": [
      {
        "id": "salon",
        "name": "Peluquería, Estilismo y Pedicura",
        "description": "Cuidado capilar profesional y spa para tus pies",
        "services": [
          {
            "id": "srv_lavar_peinar_corto",
            "name": "Lavar y peinar cabello corto",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 5,
            "duration": null,
            "badge": "Estilismo",
            "image": "./assets/catalog/lavar-y-peinar-1-hora.webp",
            "gallery": [
              "./assets/catalog/lavar-y-peinar-1-hora.webp",
              "./assets/peluqueria_orig.jpg"
            ],
            "description": "Lavado profesional con champú nutritivo, acondicionador desenredante y peinado o brushing para cabello corto.",
            "longDescription": [
              "Servicio de peluquería profesional que incluye lavado con productos de salón de alta calidad y peinado con secador y fijadores suaves para melenas cortas."
            ],
            "benefits": [
              "Cabello limpio, brillante y libre de residuos",
              "Peinado duradero con volumen y definición",
              "Productos profesionales nutritivos"
            ],
            "includes": [
              "Lavado con champú y acondicionador profesional",
              "Secado y peinado para cabello corto",
              "Bebida de cortesía"
            ],
            "recommendations": "Perfecto para antes de reuniones de trabajo o salidas sociales.",
            "slug": "lavar-y-peinar-cabello-corto"
          },
          {
            "id": "srv_lavar_peinar_medio",
            "name": "Lavar y peinar cabello medio",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 7,
            "duration": null,
            "badge": "Estilismo",
            "image": "./assets/catalog/lavar-y-peinar-cabello-medio.webp",
            "gallery": [
              "./assets/catalog/lavar-y-peinar-cabello-medio.webp",
              "./assets/peluqueria2_orig.jpg"
            ],
            "description": "Lavado completo y peinado estructurado para cabello de longitud media (a la altura de los hombros).",
            "longDescription": [
              "Lavado con cosmética capilar premium que hidrata y aporta soltura, seguido de peinado profesional con cepillo redondo o plancha según preferencia."
            ],
            "benefits": [
              "Manejo impecable del frizz y movimiento natural",
              "Brillo radiante y sellado de cutícula",
              "Estilo pulido y duradero"
            ],
            "includes": [
              "Lavado capilar con champú y mascarilla",
              "Brushing o peinado para cabello medio",
              "Bebida de cortesía"
            ],
            "recommendations": "Consúltale a tu estilista el estilo de peinado que mejor favorezca tus rasgos.",
            "slug": "lavar-y-peinar-cabello-medio"
          },
          {
            "id": "srv_lavar_peinar_largo",
            "name": "Lavar y peinar cabello largo",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 9,
            "duration": null,
            "badge": "Estilismo",
            "image": "./assets/catalog/lavar-y-peinar.webp",
            "gallery": [
              "./assets/catalog/lavar-y-peinar.webp",
              "./assets/peluqueria3_orig.jpg"
            ],
            "description": "Lavado hidratante con desenredado minucioso y peinado con secador o plancha para cabello largo.",
            "longDescription": [
              "Atención especial para melenas largas: lavado suave, nutrición de medios a puntas con mascarilla selladora y peinado con movimiento, ondas o alisado perfecto."
            ],
            "benefits": [
              "Desenredado sin tirones ni rotura de fibra",
              "Puntas selladas y cabello con caída suave",
              "Aspecto de peluquería impecable"
            ],
            "includes": [
              "Lavado y acondicionamiento profundo",
              "Peinado profesional para cabello largo",
              "Bebida de cortesía"
            ],
            "recommendations": "Añade un tratamiento de nutrición si tus puntas se sienten secas.",
            "slug": "lavar-y-peinar-cabello-largo"
          },
          {
            "id": "srv_lavar_peinar_extralargo",
            "name": "Lavar y peinar cabello extra largo",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 12,
            "duration": null,
            "badge": "Estilismo Melena",
            "image": "./assets/catalog/lavar-y-peinar-cabello-extra-largo.webp",
            "gallery": [
              "./assets/catalog/lavar-y-peinar-cabello-extra-largo.webp",
              "./assets/peluqueria_orig.jpg"
            ],
            "description": "Lavado y peinado especializado para melenas abundantes y de longitud extra larga. Tratamiento minucioso de medios y puntas.",
            "longDescription": [
              "Cuidado exhaustivo para cabellos por debajo de la cintura o de gran volumen: lavado con productos enriquecidos, secado por secciones y peinado de alta definición."
            ],
            "benefits": [
              "Control del volumen y eliminación del encrespamiento",
              "Manejo experto de melenas muy largas",
              "Brillo de raíz a puntas sin sobrecalentar el cabello"
            ],
            "includes": [
              "Lavado integral con mascarilla acondicionadora",
              "Secado y moldeado de cabello extra largo",
              "Bebida de cortesía"
            ],
            "recommendations": "Disfruta de tu bebida de cortesía mientras nuestras estilistas miman tu cabello.",
            "slug": "lavar-y-peinar-cabello-extra-largo"
          },
          {
            "id": "srv_corte_cabello",
            "name": "Corte de cabello",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 5,
            "duration": null,
            "badge": "Corte & Estilo",
            "image": "./assets/catalog/lavado-corte-y-peinado-de-cabello-para-mujeres.webp",
            "gallery": [
              "./assets/catalog/lavado-corte-y-peinado-de-cabello-para-mujeres.webp",
              "./assets/peluqueria_orig.jpg"
            ],
            "description": "Asesoría de imagen, saneamiento de puntas o cambio de look radical realizado por nuestras estilistas profesionales.",
            "longDescription": [
              "Corte de precisión adaptado a la forma de tu rostro y textura natural de tu cabello. Desde saneamiento de puntas hasta cortes en capas, bobs o estilos vanguardistas."
            ],
            "benefits": [
              "Eliminación de puntas abiertas y orquillas",
              "Renovación del volumen y caída natural",
              "Asesoramiento personalizado según tu fisonomía"
            ],
            "includes": [
              "Diagnóstico capilar y corte profesional",
              "Peinado básico final",
              "Bebida de cortesía"
            ],
            "recommendations": "Puedes traer fotos de referencia del estilo que deseas lograr.",
            "slug": "corte-de-cabello"
          },
          {
            "id": "srv_antifrizz_felps",
            "name": "Tratamiento Anti-Frizz FELPS",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 15,
            "duration": null,
            "badge": "Botox Capilar & Control",
            "image": "./assets/catalog/tratamiento-anti-frizz-felps.webp",
            "gallery": [
              "./assets/catalog/tratamiento-anti-frizz-felps.webp",
              "./assets/peluqueria2_orig.jpg"
            ],
            "description": "Tratamiento disciplinante con fórmula FELPS que sella la cutícula, reduce el encrespamiento por humedad y aporta brillo espejo.",
            "longDescription": [
              "Tratamiento intensivo con la reconocida línea brasileña FELPS. Rellena la fibra capilar con aminoácidos y queratina hidrolizada para controlar el frizz persistente del clima caribeño."
            ],
            "benefits": [
              "Control total del encrespamiento frente a la humedad",
              "Efecto alisador suave y disciplina de la onda",
              "Brillo espejo y tacto sedoso inmediato",
              "Duración prolongada de varias semanas"
            ],
            "includes": [
              "Aplicación de tratamiento FELPS",
              "Sellado térmico con plancha profesional",
              "Bebida de cortesía"
            ],
            "recommendations": "Evita lavar el cabello las primeras 48 horas tras la aplicación para fijar los activos.",
            "slug": "tratamiento-anti-frizz-felps"
          },
          {
            "id": "srv_scalp_balance_detox",
            "name": "Experiencia Capilar “Scalp Balance Detox”",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 35,
            "duration": "60–90 min",
            "badge": "Head Spa Signature",
            "image": "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
            "gallery": [
              "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
              "./assets/head_spa.jpg"
            ],
            "description": "Ritual de bienestar inspirado en el Head Spa japonés: exfoliación del cuero cabelludo, masaje craneal con cascada de agua tibia, mascarilla botánica y alta frecuencia.",
            "longDescription": [
              "Nuestra joya del salón inspirada en los famosos Head Spas de Japón. Trata la salud del cuero cabelludo como la raíz de un cabello espléndido.",
              "Comienza con exfoliación purificante, hidroterapia con arco de agua tibia relajante, masaje craneal descontracturante, electroterapia y mascarilla de nutrición profunda."
            ],
            "benefits": [
              "Desintoxicación del cuero cabelludo de excesos sebáceos y caspa",
              "Estimulación profunda del crecimiento del cabello",
              "Alivio del estrés mental y dolor de cabeza",
              "Sensación de frescura y ligereza inigualable"
            ],
            "includes": [
              "Sesión completa de 60 a 90 minutos en camilla con arco de agua",
              "Masaje craneal, cervical y de hombros",
              "Productos botánicos purificantes",
              "Bebida de cortesía"
            ],
            "recommendations": "Nuestra experiencia capilar más elogiada en reseñas.",
            "slug": "experiencia-capilar-scalp-balance-detox"
          },
          {
            "id": "srv_color_1oz",
            "name": "Color",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 5,
            "duration": null,
            "badge": "Coloración",
            "image": "./assets/catalog/balayage-mechas-premium.webp",
            "gallery": [
              "./assets/catalog/balayage-mechas-premium.webp",
              "./assets/peluqueria3_orig.jpg"
            ],
            "description": "Aplicación de tinte profesional, cobertura total de canas o baño de color para reavivar tonos y reflejos.",
            "longDescription": [
              "Coloración profesional con tintes que respetan la estructura capilar, garantizando tonos vibrantes, cobertura óptima de canas y brillo duradero."
            ],
            "benefits": [
              "Cobertura perfecta de canas desde la raíz",
              "Tonos intensos con reflejos luminosos",
              "Fórmulas con agentes protectores del brillo"
            ],
            "includes": [
              "Aplicación de coloración profesional",
              "Lavado con champú post-color fijador",
              "Bebida de cortesía"
            ],
            "recommendations": "Consulta con nuestra colorista para elegir el matiz perfecto.",
            "slug": "color"
          },
          {
            "id": "srv_decoloracion_1oz",
            "name": "Decoloración",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 7,
            "duration": null,
            "badge": "Aclarado Técnico",
            "image": "./assets/catalog/decoloracion-o-mechas-30-g.webp",
            "gallery": [
              "./assets/catalog/decoloracion-o-mechas-30-g.webp",
              "./assets/peluqueria3_orig.jpg"
            ],
            "description": "Técnica de aclarado controlado para mechas, balayage o fondos de decoloración con protectores plex para cuidar la fibra capilar.",
            "longDescription": [
              "Proceso técnico de aclarado del cabello mediante decolorantes formulados con aditivos protectores que minimizan la agresión sobre la cutícula."
            ],
            "benefits": [
              "Aclarado parejo y limpio para fondos rubios o fantasía",
              "Cuidado de la fibra con aditivos protectores",
              "Técnica personalizada para mechas o balayage"
            ],
            "includes": [
              "Proceso de decoloración técnica",
              "Lavado neutralizante y tratamiento protector",
              "Bebida de cortesía"
            ],
            "recommendations": "Se sugiere acompañar con un tratamiento reconstructor capilar.",
            "slug": "decoloracion"
          },
          {
            "id": "srv_tratamientos_capilares",
            "name": "Tratamientos capilares",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Peluquería y Estilismo",
            "price": 10,
            "duration": null,
            "badge": "Reparación & Brillo",
            "image": "./assets/catalog/tratamientos-capilares-4t.webp",
            "gallery": [
              "./assets/catalog/tratamientos-capilares-4t.webp",
              "./assets/peluqueria2_orig.jpg"
            ],
            "description": "Ampollas nutritivas, cócteles de hidratación profunda y mascarillas de queratina para recuperar cabellos secos o castigados.",
            "longDescription": [
              "Protocolo de emergencia capilar para devolverle la vida a cabellos deshidratados, opacos o químicamente tratados con mascarillas y ampollas concentradas."
            ],
            "benefits": [
              "Sellado de puntas abiertas y disminución de quiebre",
              "Recuperación de la elasticidad y suavidad perdida",
              "Nutrición profunda de la cutícula"
            ],
            "includes": [
              "Diagnóstico de la hebra capilar",
              "Aplicación de cóctel de mascarilla y ampolla térmica",
              "Bebida de cortesía"
            ],
            "recommendations": "Excelente adición antes o después de cualquier peinado o corte.",
            "slug": "tratamientos-capilares"
          },
          {
            "id": "srv_pedicura_spa_90",
            "name": "Pedicura Spa",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Manicura y Pedicura",
            "price": 12,
            "duration": "1 h 30 min",
            "badge": "Pies Perfectos",
            "image": "./assets/catalog/pedicura-spa-1-hora.webp",
            "gallery": [
              "./assets/catalog/pedicura-spa-1-hora.webp",
              "./assets/pedicura_orig.jpg",
              "./assets/pedicura2_orig.jpg"
            ],
            "description": "Cuidado completo para pies: remojo en sales, exfoliación, limado, tratamiento de cutículas, masaje relajante en pies y esmaltado.",
            "longDescription": [
              "Una hora y media de descanso para tus pies: baño en tina con sales aromáticas, limado y pulido de uñas, exfoliación con scrub de azúcar, masaje relajante y esmaltado tradicional o pulido natural."
            ],
            "benefits": [
              "Eliminación de piel seca y callosidades suaves",
              "Uñas perfectamente delineadas y limpias",
              "Alivio del dolor y descanso en los pies",
              "Esmaltado prolijo de larga duración"
            ],
            "includes": [
              "90 minutos de pedicura spa completa",
              "Exfoliación, masaje y esmaltado",
              "Bebida de cortesía"
            ],
            "recommendations": "Traer calzado abierto para permitir el secado perfecto del esmalte.",
            "slug": "pedicura-spa"
          },
          {
            "id": "srv_anticallosidad_pies",
            "name": "Tratamiento anti-callosidad para los pies",
            "categoryTitle": "Salón de belleza",
            "categoryId": "salon-belleza",
            "subcategoryName": "Manicura y Pedicura",
            "price": 15,
            "duration": null,
            "badge": "Podológico & Suavidad",
            "image": "./assets/catalog/manicura-spa.webp",
            "gallery": [
              "./assets/catalog/manicura-spa.webp",
              "./assets/pedicura2_orig.jpg"
            ],
            "description": "Tratamiento intensivo con lociones queratolíticas para ablandar y eliminar durezas y callosidades rebeldes en talones y plantas de los pies.",
            "longDescription": [
              "Protocolo intensivo enfocado en restaurar pies con durezas severas, hiperqueratosis o talones agrietados. Ablanda las capas córneas engrosadas para removerlas sin lastimar la piel sana."
            ],
            "benefits": [
              "Eliminación eficaz de durezas gruesas y asperezas",
              "Regeneración de talones agrietados",
              "Sensación inmediata de pies suaves y ligeros"
            ],
            "includes": [
              "Aplicación de loción emoliente queratolítica",
              "Retirado técnico de callosidades e hidratación intensiva",
              "Bebida de cortesía"
            ],
            "recommendations": "Ideal para pies castigados por el calzado cerrado o caminatas prolongadas.",
            "slug": "tratamiento-anti-callosidad-para-los-pies"
          }
        ]
      }
    ]
  },
  {
    "id": "depilacion",
    "title": "Depilación",
    "subtitle": "Depilación higiénica con cera para axilas, piernas, cejas y bozo",
    "icon": "Sparkles",
    "badge": "Piel Suave",
    "subcategories": [
      {
        "id": "depilacion-sub",
        "name": "Depilación con Cera",
        "description": "Extracción higiénica con ceras especiales para zonas delicadas",
        "services": [
          {
            "id": "srv_depilacion_axilas",
            "name": "Depilación de axilas",
            "categoryTitle": "Depilación",
            "categoryId": "depilacion",
            "subcategoryName": "Depilación con Cera",
            "price": 7,
            "duration": null,
            "badge": "Cuidado Piel Suave",
            "image": "./assets/catalog/depilacion-de-axilas-5my9n.webp",
            "gallery": [
              "./assets/catalog/depilacion-de-axilas-5my9n.webp",
              "./assets/depilacion_orig.jpg"
            ],
            "description": "Depilación higiénica con cera tibia especial para zonas sensibles, garantizando una piel limpia, suave y libre de vello por semanas.",
            "longDescription": [
              "Depilación rápida y eficaz con ceras de baja temperatura formuladas con activos calmantes para evitar irritaciones en la delicada zona de las axilas."
            ],
            "benefits": [
              "Extracción del vello desde la raíz",
              "Piel suave sin cortes ni sombras de afeitado",
              "Efecto duradero de 3 a 4 semanas"
            ],
            "includes": [
              "Depilación con cera higiénica desechable",
              "Loción calmante con aloe vera post-depilatoria",
              "Bebida de cortesía"
            ],
            "recommendations": "No aplicar desodorantes con alcohol en las primeras 12 horas.",
            "slug": "depilacion-de-axilas"
          },
          {
            "id": "srv_depilacion_piernas",
            "name": "Depilación de piernas",
            "categoryTitle": "Depilación",
            "categoryId": "depilacion",
            "subcategoryName": "Depilación con Cera",
            "price": 20,
            "duration": null,
            "badge": "Piernas de Seda",
            "image": "./assets/catalog/depilacion-de-piernas-geakj.webp",
            "gallery": [
              "./assets/catalog/depilacion-de-piernas-geakj.webp",
              "./assets/depilacion_orig.jpg"
            ],
            "description": "Depilación completa de piernas con cera tibia que retira el vello de raíz dejando las piernas suaves y sedosas.",
            "longDescription": [
              "Depilación integral de piernas (muslos, rodillas y pantorrillas) con cera de alta elasticidad. Arranca el vello desde el bulbo para debilitarlo progresivamente."
            ],
            "benefits": [
              "Piernas tersas, libres de vello y suaves al tacto",
              "Debilitamiento paulatino del grosor del vello",
              "Cuidado de la circulación con ceras tibias"
            ],
            "includes": [
              "Depilación completa de piernas",
              "Aceite calmante post-depilación y masaje ligero",
              "Bebida de cortesía"
            ],
            "recommendations": "Exfoliar las piernas 48 horas antes para evitar vellos encarnados.",
            "slug": "depilacion-de-piernas"
          },
          {
            "id": "srv_depilacion_cejas",
            "name": "Depilación de cejas",
            "categoryTitle": "Depilación",
            "categoryId": "depilacion",
            "subcategoryName": "Depilación con Cera",
            "price": 2,
            "duration": null,
            "badge": "Diseño & Definición",
            "image": "./assets/catalog/cejas-u.webp",
            "gallery": [
              "./assets/catalog/cejas-u.webp",
              "./assets/pestanas_orig.jpg"
            ],
            "description": "Diseño y limpieza del arco de las cejas con cera y pinzas para realzar la mirada y armonizar las facciones del rostro.",
            "longDescription": [
              "Perfilado de cejas profesional con cera de precisión y pinza para retirar vellos dispersos y resaltar la arquitectura natural de tu mirada."
            ],
            "benefits": [
              "Arco de cejas limpio, simétrico y definido",
              "Realce inmediato de la mirada",
              "Técnica rápida y poco dolorosa"
            ],
            "includes": [
              "Limpieza y diseño de cejas",
              "Gel descongestivo de manzanilla",
              "Bebida de cortesía"
            ],
            "recommendations": "Mantener la forma cada 3 a 4 semanas.",
            "slug": "depilacion-de-cejas"
          },
          {
            "id": "srv_depilacion_bozo_menton",
            "name": "Depilación de bozo y mentón",
            "categoryTitle": "Depilación",
            "categoryId": "depilacion",
            "subcategoryName": "Depilación con Cera",
            "price": 3,
            "duration": null,
            "badge": "Rostro Limpio",
            "image": "./assets/catalog/bozo-y-menton.webp",
            "gallery": [
              "./assets/catalog/bozo-y-menton.webp",
              "./assets/pestanas_orig.jpg"
            ],
            "description": "Depilación suave del labio superior y mentón con cera especial para el rostro sensible, dejando la piel limpia y tersa.",
            "longDescription": [
              "Remoción del vello facial indeseado en la zona del bozo y mentón con cera hipoalergénica de baja temperatura, evitando irritaciones y vellos enquistados."
            ],
            "benefits": [
              "Rostro completamente limpio y libre de sombras",
              "Mayor adherencia y acabado uniforme del maquillaje",
              "Debilitamiento gradual del vello facial"
            ],
            "includes": [
              "Depilación de labio superior y mentón",
              "Tónico calmante refrescante",
              "Bebida de cortesía"
            ],
            "recommendations": "Evitar el maquillaje directo en la zona las primeras horas.",
            "slug": "depilacion-de-bozo-y-menton"
          }
        ]
      }
    ]
  },
  {
    "id": "otros",
    "title": "Otros",
    "subtitle": "Tarjetas de regalo personalizadas y servicio exclusivo de taxi",
    "icon": "Sparkles",
    "badge": "Exclusivo",
    "subcategories": [
      {
        "id": "otros-sub",
        "name": "Servicios Complementarios",
        "description": "Obsequios inolvidables y traslado cómodo puerta a puerta",
        "services": [
          {
            "id": "srv_tarjeta_regalo",
            "name": "Tarjeta de Regalo",
            "categoryTitle": "Otros",
            "categoryId": "otros",
            "subcategoryName": "Servicios Complementarios",
            "price": "Sin costo",
            "duration": "Personalizado",
            "badge": "Obsequio Exclusivo",
            "image": "./assets/catalog/tarjeta-de-regalo-q.webp",
            "gallery": [
              "./assets/catalog/tarjeta-de-regalo-q.webp",
              "./assets/servicios_spa.jpg"
            ],
            "description": "Sorprende a esa persona especial con una experiencia inolvidable de spa. Monto y servicios a tu elección con dedicatoria personalizada.",
            "longDescription": [
              "Obsequia momentos de paz, renovación y mimos inolvidables. Nuestras Tarjetas de Regalo se personalizan con el tratamiento, paquete o monto que elijas.",
              "Se emite en formato digital de lujo o física para entregar en ocasiones especiales: cumpleaños, aniversarios, regalos corporativos o simplemente para consentir."
            ],
            "benefits": [
              "Personalización completa con el servicio o importe deseado",
              "Dedicatoria especial con el nombre de la persona agasajada",
              "Vigencia flexible para coordinar la cita con tranquilidad",
              "El regalo perfecto de bienestar y autocuidado"
            ],
            "includes": [
              "Diseño de tarjeta con dedicatoria personalizada",
              "Coordinación de cita preferencial para el beneficiario",
              "Bebida de cortesía y atención VIP en el spa"
            ],
            "recommendations": "Contáctanos por WhatsApp para emitir tu tarjeta de regalo personalizada en minutos.",
            "slug": "tarjeta-de-regalo"
          },
          {
            "id": "srv_taxi",
            "name": "Servicio de taxi 🚕",
            "categoryTitle": "Otros",
            "categoryId": "otros",
            "subcategoryName": "Servicios Complementarios",
            "price": "Sin costo",
            "duration": "Personalizado",
            "badge": "Transporte Exclusivo",
            "image": "./assets/servicio_taxi.jpg",
            "gallery": [
              "./assets/servicio_taxi.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "description": "\"¿No tienes cómo llegar? Nosotros te recogemos y te llevamos de regreso.\"",
            "longDescription": [
              "\"¿No tienes cómo llegar? Nosotros te recogemos y te llevamos de regreso.\"",
              "Disfruta de la máxima comodidad desde que sales de tu casa o alojamiento. Coordinamos transporte privado climatizado para recogerte puntualmente antes de tu cita en Momentos Spa y llevarte de vuelta al finalizar tu sesión de bienestar."
            ],
            "benefits": [
              "Recogida y regreso directo en tu domicilio, hotel o casa de renta",
              "Vehículo privado con aire acondicionado y chofer puntual",
              "Cero preocupaciones por buscar transporte o estacionamiento",
              "Llegas a tu sesión totalmente relajado y puntual"
            ],
            "includes": [
              "Coordinación personalizada de traslado ida y vuelta",
              "Vehículo privado climatizado",
              "Atención directa vía WhatsApp para acordar dirección y hora"
            ],
            "recommendations": "Solicita tu servicio de taxi con anticipación al coordinar tu cita por WhatsApp indicando tu dirección.",
            "slug": "servicio-de-taxi",
            "isTaxi": true
          }
        ]
      }
    ]
  }
];

export const allServices = [
  {
    "id": "srv_masaje_relajante_30",
    "name": "Masaje relajante – 30 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 12,
    "duration": "30 min",
    "badge": "Express",
    "image": "./assets/catalog/masaje-relajante-de-30-min.webp",
    "gallery": [
      "./assets/catalog/masaje-relajante-de-30-min.webp",
      "./assets/masaje_relax.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Masaje relajante en cervicales, espalda y piernas. Ideal para personas que acumulan mucho estrés y disponen de poco tiempo.",
    "longDescription": [
      "Masaje relajante focalizado en cervicales, espalda y piernas. Es el tratamiento ideal para personas que acumulan tensión por la rutina diaria o disponen de poco tiempo para una pausa revitalizante.",
      "Mediante pases rítmicos y suaves, ayuda a descomprimir la musculatura dorsal y favorece la circulación en piernas cansadas."
    ],
    "benefits": [
      "Alivio focalizado en cuello, hombros y lumbares",
      "Descanso muscular rápido y efectivo",
      "Disminución del estrés en poco tiempo",
      "Activación de la circulación en extremidades"
    ],
    "includes": [
      "Cabina privada climatizada",
      "Aceites esenciales naturales",
      "Bebida no alcohólica de cortesía (té, café, agua, jugo o refresco)"
    ],
    "recommendations": "Recomendado como descanso reparador a mitad del día o al salir del trabajo.",
    "slug": "masaje-relajante-30-min"
  },
  {
    "id": "srv_masaje_relajante_60",
    "name": "Masaje relajante – 60 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 20,
    "duration": "60 min",
    "badge": "Esencial",
    "image": "./assets/catalog/masaje-relajante-u.webp",
    "gallery": [
      "./assets/catalog/masaje-relajante-u.webp",
      "./assets/servicios_spa.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Técnica terapéutica que se centra en aliviar la tensión muscular y promover un estado de calma y bienestar. Movimientos suaves y rítmicos de amasamiento, fricción y estiramiento.",
    "longDescription": [
      "El masaje relajante es una técnica terapéutica que se centra en aliviar la tensión muscular y promover un estado de calma y bienestar general.",
      "Durante una sesión de 60 minutos completos, el terapeuta aplica movimientos suaves y rítmicos, utilizando técnicas precisas de amasado, fricción y estiramientos suaves con aceites aromáticos."
    ],
    "benefits": [
      "Relajación muscular integral cuerpo completo",
      "Reducción profunda de niveles de cortisol y estrés",
      "Optimización de la circulación periférica",
      "Sensación duradera de serenidad mental y física"
    ],
    "includes": [
      "Sesión completa de 60 minutos",
      "Cabina privada climatizada con aromaterapia",
      "Bebida no alcohólica de cortesía a elección"
    ],
    "recommendations": "Ideal para disfrutar semanal o quincenalmente para mantener el equilibrio corporal.",
    "slug": "masaje-relajante-60-min"
  },
  {
    "id": "srv_masaje_relajante_90",
    "name": "Masaje relajante – 90 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 30,
    "duration": "90 min",
    "badge": "Inmersión Total",
    "image": "./assets/catalog/masaje-relajante-de-90-min.webp",
    "gallery": [
      "./assets/catalog/masaje-relajante-de-90-min.webp",
      "./assets/masaje_relax.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Experiencia prolongada de relajación profunda cuerpo completo. Tiempo extendido para trabajar con calma cada grupo muscular y lograr desconexión total.",
    "longDescription": [
      "Una hora y media de inmersión total diseñada para personas que buscan una desconexión absoluta del mundo exterior.",
      "Permite al terapeuta profundizar en cada segmento muscular, desde los pies hasta el cuello y cuero cabelludo, asegurando un alivio sin prisas."
    ],
    "benefits": [
      "Desconexión sensorial y mental absoluta",
      "Tratamiento minucioso de cada grupo muscular",
      "Inducción a un estado de relajación restaurador",
      "Alivio duradero de tensiones acumuladas"
    ],
    "includes": [
      "90 minutos de terapia manual continua",
      "Aceites botánicos de alta gama y aromaterapia",
      "Bebida no alcohólica de cortesía"
    ],
    "recommendations": "Perfecto para fines de semana o momentos de alta sobrecarga emocional y física.",
    "slug": "masaje-relajante-90-min"
  },
  {
    "id": "srv_masaje_descontracturante_60",
    "name": "Masaje descontracturante – 60 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 25,
    "duration": "60 min",
    "badge": "Alivio Fuerte",
    "image": "./assets/catalog/masaje-descontracturante-h.webp",
    "gallery": [
      "./assets/catalog/masaje-descontracturante-h.webp",
      "./assets/masaje_m01.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Técnica terapéutica utilizada para aliviar la tensión muscular y reducir contracturas. Movimientos profundos y firmes en espalda, cuello y hombros.",
    "longDescription": [
      "Técnica terapéutica vigorosa y focalizada en deshacer nudos musculares y contracturas crónicas causadas por posturas inadecuadas o sobrecargas.",
      "El terapeuta aplica presiones progresivas, fricciones transversas y amasamientos intensos para liberar las fibras miofasciales."
    ],
    "benefits": [
      "Disolución de nudos musculares y contracturas",
      "Alivio significativo del dolor cervical y lumbar",
      "Recuperación del rango de movimiento articular",
      "Mejora inmediata de la flexibilidad postural"
    ],
    "includes": [
      "60 minutos de terapia descontracturante",
      "Aplicación de bálsamos térmicos desinflamatorios",
      "Bebida no alcohólica de cortesía"
    ],
    "recommendations": "Recomendado para deportistas o personas con dolores crónicos de espalda.",
    "slug": "masaje-descontracturante-60-min"
  },
  {
    "id": "srv_masaje_descontracturante_90",
    "name": "Masaje descontracturante – 90 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 35,
    "duration": "90 min",
    "badge": "Terapéutico Plus",
    "image": "./assets/catalog/masaje-descontracturante.webp",
    "gallery": [
      "./assets/catalog/masaje-descontracturante.webp",
      "./assets/masaje_m02.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Sesión intensiva de 90 minutos para contracturas crónicas severas. Permite trabajar espalda, tren inferior y zonas articulares comprometidas.",
    "longDescription": [
      "Sesión extendida para tratar contracturas severas o múltiples focos de tensión en todo el cuerpo con la calma necesaria para no generar sobrestimulación.",
      "Combina pases profundos con estiramientos asistidos y puntos de presión neuromuscular."
    ],
    "benefits": [
      "Tratamiento exhaustivo de múltiples contracturas",
      "Mayor efectividad en tensiones arraigadas por meses",
      "Integración de estiramientos pasivos",
      "Sensación de ligereza y liberación corporal total"
    ],
    "includes": [
      "90 minutos de maniobras terapéuticas profundas",
      "Aceites con extractos botánicos desfatigantes",
      "Bebida de cortesía"
    ],
    "recommendations": "Excelente para personas tras viajes largos, jornadas de alta tensión o entrenamientos intensos.",
    "slug": "masaje-descontracturante-90-min"
  },
  {
    "id": "srv_masaje_combinado_90",
    "name": "Masaje combinado",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 35,
    "duration": "90 min",
    "badge": "A tu Medida",
    "image": "./assets/catalog/masaje-deportivo.webp",
    "gallery": [
      "./assets/catalog/masaje-deportivo.webp",
      "./assets/masaje_m02.jpg",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Posibilidad de elegir diferentes técnicas de masaje en una sola sesión. Como por ejemplo masaje relajante combinado con reflexología podal.",
    "longDescription": [
      "El masaje combinado brinda la máxima versatilidad: puedes solicitar combinar masaje relajante sueco con reflexología podal, o descontracturante con drenaje linfático.",
      "Diseñado a medida según las prioridades que converses directamente con tu terapeuta al ingresar a cabina."
    ],
    "benefits": [
      "Personalización 100% adaptada a tus dolencias del día",
      "Sinergia de múltiples técnicas en una sola visita",
      "Equilibrio entre relajación suave y descarga muscular",
      "Atención preferencial a zonas prioritarias"
    ],
    "includes": [
      "90 minutos personalizados con tu terapeuta",
      "Elección de técnicas manuales",
      "Bebida de cortesía"
    ],
    "recommendations": "Indica a tu terapeuta qué zonas prefieres priorizar al inicio de la sesión.",
    "slug": "masaje-combinado"
  },
  {
    "id": "srv_masaje_holistico_90",
    "name": "Masaje Holístico",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 35,
    "duration": "90 min",
    "badge": "Especialidad",
    "image": "./assets/catalog/masaje-holistioco-90-min.webp",
    "gallery": [
      "./assets/catalog/masaje-holistioco-90-min.webp",
      "./assets/masaje_m7.jpg",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Atiende a cada persona según sus necesidades. Técnicas de presión y estiramiento del masaje Tailandés, masaje relajante y digitopresión shiatsu. Especialidad del centro.",
    "longDescription": [
      "Nuestra terapia insignia. El masaje holístico concibe el cuerpo y la mente como una unidad integrada.",
      "Emplea técnicas de estiramientos rítmicos del masaje Tailandés tradicional, pases fluidos del masaje relajante y digitopresión en meridianos energéticos de la medicina oriental shiatsu."
    ],
    "benefits": [
      "Restablecimiento de la armonía energética",
      "Apertura articular y mayor elongación muscular",
      "Alivio emocional y disminución de ansiedad",
      "Estimulación de los canales naturales de autosanación"
    ],
    "includes": [
      "90 minutos de técnica holística integral",
      "Aromaterapia seleccionada",
      "Bebida de cortesía"
    ],
    "recommendations": "Altamente recomendado para quienes buscan una experiencia profunda y transformadora.",
    "slug": "masaje-holistico"
  },
  {
    "id": "srv_masaje_cuatro_manos_90",
    "name": "Masaje a 4 Manos",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 50,
    "duration": "90 min",
    "badge": "Lujo Supremo",
    "image": "./assets/catalog/exfoliacion-suprema-y-masaje-a-4-manos-90min.webp",
    "gallery": [
      "./assets/catalog/exfoliacion-suprema-y-masaje-a-4-manos-90min.webp",
      "./assets/masaje_m4.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Dos terapeutas trabajando en perfecta sincronía. Mayor cobertura corporal, estimulación simultánea y una inmersión sensorial única que desconecta la mente por completo.",
    "longDescription": [
      "El punto cumbre del arte del masaje. Dos terapeutas expertas sincronizan sus movimientos en una coreografía armónica sobre tu cuerpo.",
      "Al recibir estímulos táctiles simétricos en dos zonas a la vez, el cerebro abandona todo intento de control y entra en un estado hipnótico de relajación absoluta."
    ],
    "benefits": [
      "Doble beneficio terapéutico en el mismo tiempo",
      "Desconexión cerebral profunda e instantánea",
      "Sensación envolvente única e inolvidable",
      "Relajación muscular simultánea superior"
    ],
    "includes": [
      "90 minutos con 2 terapeutas en cabina",
      "Aceites tibios de textura sedosa",
      "Bebida de cortesía"
    ],
    "recommendations": "Reservar con antelación para coordinar el horario de las dos terapeutas.",
    "slug": "masaje-a-4-manos"
  },
  {
    "id": "srv_masaje_linfodrenante_60",
    "name": "Masaje linfodrenante",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 20,
    "duration": "60 min",
    "badge": "Detox & Circulación",
    "image": "./assets/catalog/masaje-linfodrenante.webp",
    "gallery": [
      "./assets/catalog/masaje-linfodrenante.webp",
      "./assets/masaje_m5.jpg",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Estimula el sistema linfático para la eliminación de toxinas y equilibrio de líquidos. Movimientos suaves y rítmicos que reducen la hinchazón y retención.",
    "longDescription": [
      "Técnica manual suave y superficial que sigue las vías del sistema linfático corporal.",
      "Facilita el drenaje de líquidos retenidos en tejidos intersticiales, alivia la pesadez en piernas y acelera la eliminación de deshechos metabólicos."
    ],
    "benefits": [
      "Disminución notable de la retención de líquidos",
      "Alivio de la pesadez en piernas y tobillos",
      "Estimulación del sistema inmunitario",
      "Favorece la recuperación postquirúrgica y detox"
    ],
    "includes": [
      "60 minutos de maniobras de bombeo linfático",
      "Aceites descongestivos naturales",
      "Bebida de cortesía purificante (té o agua)"
    ],
    "recommendations": "Beber abundante agua antes y después de la sesión para optimizar la eliminación de toxinas.",
    "slug": "masaje-linfodrenante"
  },
  {
    "id": "srv_masaje_velas_60",
    "name": "Masaje con velas aromáticas – 60 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 25,
    "duration": "60 min",
    "badge": "Calidez Sensorial",
    "image": "./assets/catalog/masaje-con-velas-aromaticas.webp",
    "gallery": [
      "./assets/catalog/masaje-con-velas-aromaticas.webp",
      "./assets/masaje_m01.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Combina masaje relajante con velas de aceites esenciales que al derretirse se convierten en un bálsamo cálido e hidratante sobre la piel.",
    "longDescription": [
      "Una experiencia sensorial cálida y envolvente. Se utilizan velas cosméticas elaboradas con ceras de soja pura, manteca de karité y esencias aromáticas.",
      "Al fundirse a baja temperatura, el aceite tibio se vierte suavemente sobre el cuerpo y se trabaja con maniobras fluidas y reconfortantes."
    ],
    "benefits": [
      "Nutrición profunda e hidratación de la piel con aceites tibios",
      "Relajación muscular favorecida por el calor agradable",
      "Efecto aromaterapéutico que calma el sistema nervioso",
      "Aroma delicado y duradero sobre la dermis"
    ],
    "includes": [
      "60 minutos con vela aromática de masaje",
      "Bálsamo tibio nutritivo",
      "Bebida de cortesía"
    ],
    "recommendations": "Ideal para días en los que busques confort térmico y consentirte al máximo.",
    "slug": "masaje-con-velas-aromaticas-60-min"
  },
  {
    "id": "srv_masaje_velas_90",
    "name": "Masaje con velas aromáticas – 90 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 35,
    "duration": "90 min",
    "badge": "Sensorial Plus",
    "image": "./assets/catalog/masaje-con-velas-aromaticas-de-90-min.webp",
    "gallery": [
      "./assets/catalog/masaje-con-velas-aromaticas-de-90-min.webp",
      "./assets/masaje_m01.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Versión extendida de 90 minutos con velas aromáticas tibias. Cobertura completa y nutrición cutánea con aceites esenciales naturales.",
    "longDescription": [
      "La versión extendida de nuestro masaje con velas permite recorrer minuciosamente todo el cuerpo con el aceite fundido a temperatura corporal ideal.",
      "El calor y los aromas naturales disuelven cualquier vestigio de fatiga física y mental."
    ],
    "benefits": [
      "Mayor tiempo de absorción de nutrientes botánicos",
      "Relajación prolongada sin interrupciones",
      "Piel tersa, elástica y profundamente perfumada",
      "Efecto ansiolítico natural gracias a los aceites esenciales"
    ],
    "includes": [
      "90 minutos de masaje con bálsamo de vela caliente",
      "Cabina climatizada con luz tenue",
      "Bebida de cortesía"
    ],
    "recommendations": "Permite que los aceites permanezcan sobre la piel unas horas para aprovechar sus propiedades nutritivas.",
    "slug": "masaje-con-velas-aromaticas-90-min"
  },
  {
    "id": "srv_masaje_piedras_60",
    "name": "Masaje con piedras volcánicas – 60 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 25,
    "duration": "60 min",
    "badge": "Termoterapia",
    "image": "./assets/catalog/masaje-con-piedras-volcanicas.webp",
    "gallery": [
      "./assets/catalog/masaje-con-piedras-volcanicas.webp",
      "./assets/servicios_spa.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "El calor terapéutico de las piedras de basalto penetra en los músculos, liberando tensiones, mejorando la circulación y proporcionando una profunda relajación.",
    "longDescription": [
      "Terapia geotermal milenaria que utiliza piedras de basalto volcánico pulidas calentadas a temperatura controlada.",
      "El calor penetrante de las piedras relaja las fibras musculares con mayor rapidez que la presión manual sola, induciendo un sosiego inigualable."
    ],
    "benefits": [
      "Penetración térmica que ablanda la rigidez muscular",
      "Reactiva el flujo circulatorio y linfático",
      "Alivio notable de dolores reumáticos y articulares",
      "Sedación natural del sistema nervioso central"
    ],
    "includes": [
      "60 minutos de masaje con piedras volcánicas calientes",
      "Puntos de apoyo energético con piedras estáticas",
      "Bebida de cortesía"
    ],
    "recommendations": "No recomendado en personas con inflamaciones agudas o fiebre.",
    "slug": "masaje-con-piedras-volcanicas-60-min"
  },
  {
    "id": "srv_masaje_piedras_90",
    "name": "Masaje con piedras volcánicas – 90 min",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 35,
    "duration": "90 min",
    "badge": "Geotermal Plus",
    "image": "./assets/catalog/masaje-con-piedras-volcanicas-90-min.webp",
    "gallery": [
      "./assets/catalog/masaje-con-piedras-volcanicas-90-min.webp",
      "./assets/servicios_spa.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Sesión completa de 90 minutos con piedras volcánicas. Mayor dedicación a puntos energéticos y combinación con maniobras de masaje manual.",
    "longDescription": [
      "Sesión geotermal completa donde se intercalan maniobras de masaje manual profundo con deslizamientos de piedras calientes sobre espalda, extremidades y chakras.",
      "El calor continuo permite alcanzar capas musculares profundas sin dolor ni molestias."
    ],
    "benefits": [
      "Máximo aprovechamiento de la termoterapia volcánica",
      "Alivio prolongado de contracturas dorsales y lumbares",
      "Calma el estrés crónico e insomnio",
      "Sensación de renovación y ligereza corporal"
    ],
    "includes": [
      "90 minutos de terapia geotermal continua",
      "Aceites minerales y piedras volcánicas de basalto",
      "Bebida de cortesía"
    ],
    "recommendations": "Excelente opción durante días lluviosos o cuando sientas fatiga acumulada.",
    "slug": "masaje-con-piedras-volcanicas-90-min"
  },
  {
    "id": "srv_reflexologia_podal_60",
    "name": "Reflexología podal",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 20,
    "duration": "60 min",
    "badge": "Equilibrio Orgánico",
    "image": "./assets/catalog/reflexologia-podal.webp",
    "gallery": [
      "./assets/catalog/reflexologia-podal.webp",
      "./assets/masaje_m5.jpg",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Presión en puntos específicos de los pies conectados a órganos y sistemas. Estimula el equilibrio natural, alivia el estrés y revitaliza las piernas.",
    "longDescription": [
      "La reflexología podal se fundamenta en los mapas reflejos ubicados en las plantas de los pies, donde convergen terminaciones nerviosas vinculadas a los órganos internos.",
      "Mediante presiones pulgares precisas y digitopuntura, se estimula la autorregulación orgánica y se alivia la sobrecarga de pies y piernas."
    ],
    "benefits": [
      "Alivio inmediato del cansancio y dolor en la planta de los pies",
      "Estimulación refleja del funcionamiento de órganos internos",
      "Desbloqueo de tensiones en extremidades inferiores",
      "Profunda relajación y bienestar integral"
    ],
    "includes": [
      "60 minutos de reflexología podal especializada",
      "Crema descongestiva con mentol y árnica",
      "Bebida de cortesía"
    ],
    "recommendations": "Ideal para personas que pasan muchas horas de pie o caminan con frecuencia.",
    "slug": "reflexologia-podal"
  },
  {
    "id": "srv_metfit_90",
    "name": "METFIT tejido profundo",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 35,
    "duration": "90 min",
    "badge": "Deportivo & Miofascial",
    "image": "./assets/catalog/metfit.webp",
    "gallery": [
      "./assets/catalog/metfit.webp",
      "./assets/masaje_m02.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Manipulaciones específicas sobre el tejido profundo activando la circulación sanguínea y linfática. Reduce espasmos y previene lesiones musculares.",
    "longDescription": [
      "Método de tratamiento físico-técnico que engloba maniobras vigorosas y estiramientos pasivos sobre las capas miofasciales profundas.",
      "Especialmente concebido para atletas, deportistas y personas con hábitos de alto rendimiento que requieren una descompresión muscular contundente."
    ],
    "benefits": [
      "Prevención y recuperación de sobrecargas deportivas",
      "Disminución drástica de espasmos musculares y rigidez",
      "Activación potente del riego sanguíneo y oxigenación",
      "Aumento de la elasticidad de los tendones y fascias"
    ],
    "includes": [
      "90 minutos de técnica especializada de tejido profundo",
      "Emulsiones deportivas desfatigantes",
      "Bebida de cortesía"
    ],
    "recommendations": "Puede causar ligera sensibilidad pasajera post-sesión mientras los tejidos se reoxigenan.",
    "slug": "metfit-tejido-profundo"
  },
  {
    "id": "srv_masaje_craneal_20",
    "name": "Masaje craneal con alta frecuencia",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 5,
    "duration": "20 min",
    "badge": "Capilar Express",
    "image": "./assets/catalog/masaje-craneal-con-alta-frecuencia.webp",
    "gallery": [
      "./assets/catalog/masaje-craneal-con-alta-frecuencia.webp",
      "./assets/head_spa.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Mejora el riego sanguíneo al descomprimir los vasos. Reduce dolores de cabeza y migrañas, evita la somnolencia y estimula el crecimiento activo del cabello.",
    "longDescription": [
      "Terapia express que combina maniobras de digitopresión en cráneo, sienes y nuca con la aplicación de electroterapia de alta frecuencia.",
      "El electrodo de alta frecuencia oxigena los folículos pilosos, estimula el crecimiento capilar y alivia cefaleas tensionales en minutos."
    ],
    "benefits": [
      "Alivio inmediato de jaquecas, migrañas y tensión ocular",
      "Descompresión de vasos sanguíneos craneales",
      "Estimulación de los folículos contra la caída del cabello",
      "Claridad mental y superación del cansancio acumulado"
    ],
    "includes": [
      "20 minutos de masaje craneal + electrodo de alta frecuencia",
      "Bebida de cortesía"
    ],
    "recommendations": "Excelente adición rápida a cualquier otro masaje o tratamiento facial.",
    "slug": "masaje-craneal-con-alta-frecuencia"
  },
  {
    "id": "srv_spa_labial_15",
    "name": "Spa labial",
    "categoryTitle": "Masajes",
    "categoryId": "spa-masajes",
    "subcategoryName": "Masajes Terapéuticos y Relajantes",
    "price": 5,
    "duration": "15 min",
    "badge": "Hidratación Express",
    "image": "./assets/catalog/spa-labial-10-min.webp",
    "gallery": [
      "./assets/catalog/spa-labial-10-min.webp",
      "./assets/facial_original.jpg",
      "./assets/ojos_orig.jpg"
    ],
    "description": "\"No es solo hidratar los labios, es devolverles vida.\" Tratamiento de hidratación profunda para labios resecos o con líneas marcadas. Labios suaves y nutridos en una sesión.",
    "longDescription": [
      "\"No es solo hidratar los labios, es devolverles vida.\" Nuestro Tratamiento de Hidratación Labial Profunda es una experiencia diseñada para labios resecos, opacos o con líneas marcadas.",
      "En solo una sesión logramos labios más suaves, nutridos, definidos y visiblemente rejuvenecidos con exfoliación suave y sérum de ácido hialurónico."
    ],
    "benefits": [
      "Eliminación de células muertas y pellejitos secos",
      "Hidratación intensa y nutrición labial con péptidos",
      "Relleno óptico de líneas de expresión en el contorno",
      "Apariencia jugosa, sana y juvenil"
    ],
    "includes": [
      "Exfoliación labial de azúcar y aceites",
      "Mascarilla o sérum reparador con ácido hialurónico",
      "Bebida de cortesía"
    ],
    "recommendations": "Perfecto antes de un evento especial o para complementar un facial.",
    "slug": "spa-labial"
  },
  {
    "id": "srv_tarjeta_regalo",
    "name": "Tarjeta de Regalo",
    "categoryTitle": "Otros",
    "categoryId": "otros",
    "subcategoryName": "Servicios Complementarios",
    "price": "Sin costo",
    "duration": "Personalizado",
    "badge": "Obsequio Exclusivo",
    "image": "./assets/catalog/tarjeta-de-regalo-q.webp",
    "gallery": [
      "./assets/catalog/tarjeta-de-regalo-q.webp",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Sorprende a esa persona especial con una experiencia inolvidable de spa. Monto y servicios a tu elección con dedicatoria personalizada.",
    "longDescription": [
      "Obsequia momentos de paz, renovación y mimos inolvidables. Nuestras Tarjetas de Regalo se personalizan con el tratamiento, paquete o monto que elijas.",
      "Se emite en formato digital de lujo o física para entregar en ocasiones especiales: cumpleaños, aniversarios, regalos corporativos o simplemente para consentir."
    ],
    "benefits": [
      "Personalización completa con el servicio o importe deseado",
      "Dedicatoria especial con el nombre de la persona agasajada",
      "Vigencia flexible para coordinar la cita con tranquilidad",
      "El regalo perfecto de bienestar y autocuidado"
    ],
    "includes": [
      "Diseño de tarjeta con dedicatoria personalizada",
      "Coordinación de cita preferencial para el beneficiario",
      "Bebida de cortesía y atención VIP en el spa"
    ],
    "recommendations": "Contáctanos por WhatsApp para emitir tu tarjeta de regalo personalizada en minutos.",
    "slug": "tarjeta-de-regalo"
  },
  {
    "id": "srv_masaje_facial_hidratacion_30",
    "name": "Masaje facial de Hidratación",
    "categoryTitle": "Tratamientos faciales",
    "categoryId": "tratamientos-faciales",
    "subcategoryName": "Faciales y Cosmiatría",
    "price": 10,
    "duration": "30 min",
    "badge": "Luminosidad Express",
    "image": "./assets/catalog/hidratacion-de-30min.webp",
    "gallery": [
      "./assets/catalog/hidratacion-de-30min.webp",
      "./assets/facial_original.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Exfoliante facial para eliminar impurezas y suavizar. Aplicación de cremas y suave masaje relajante para lograr mayor hidratación, luminosidad y aspecto fresco.",
    "longDescription": [
      "Tratamiento facial rápido pero altamente revitalizante. Se realiza una exfoliación suave para desprender impurezas y células muertas.",
      "Posteriormente se aplican activos hidratantes acompañados de un reconfortante masaje facial que drena y estimula la microcirculación cutánea."
    ],
    "benefits": [
      "Textura suave y piel visiblemente más lisa al tacto",
      "Aporte inmediato de luminosidad y frescura",
      "Relajación de los músculos de expresión facial",
      "Rápida absorción de principios activos hidratantes"
    ],
    "includes": [
      "30 minutos de sesión facial",
      "Exfoliación suave no abrasiva",
      "Crema hidratante y masaje facial",
      "Bebida de cortesía"
    ],
    "recommendations": "Ideal para preparar el rostro antes de maquillarse o tras una semana ajetreada.",
    "slug": "masaje-facial-de-hidratacion"
  },
  {
    "id": "srv_facial_hidratacion_profunda_60",
    "name": "Facial de Hidratación profunda",
    "categoryTitle": "Tratamientos faciales",
    "categoryId": "tratamientos-faciales",
    "subcategoryName": "Faciales y Cosmiatría",
    "price": 15,
    "duration": "60 min",
    "badge": "Hidratación Completa",
    "image": "./assets/catalog/facial-hidratante.webp",
    "gallery": [
      "./assets/catalog/facial-hidratante.webp",
      "./assets/facial_original.jpg",
      "./assets/ojos_orig.jpg"
    ],
    "description": "Renueva, nutre e hidrata desde las capas más profundas. Consigue un rostro luminoso, suave y terso, devolviendo vitalidad a pieles cansadas o deshidratadas.",
    "longDescription": [
      "Procedimiento cosmiátrico enfocado en restaurar el manto hidrolipídico y el balance hídrico de la piel.",
      "La deshidratación causa opacidad y pérdida de elasticidad; este facial infunde ácido hialurónico, sérums nutritivos y mascarillas oclusivas para reponer la turgencia cutánea."
    ],
    "benefits": [
      "Restauración profunda de la hidratación tisular",
      "Efecto de relleno natural sobre líneas de sequedad",
      "Rostro descansado, flexible y radiante",
      "Fortalecimiento de la barrera cutánea protectora"
    ],
    "includes": [
      "60 minutos de tratamiento facial completo",
      "Limpieza preparatoria, tónico, sérums y mascarilla hidro-nutritiva",
      "Bebida de cortesía"
    ],
    "recommendations": "Recomendado una vez al mes para preservar la salud y juventud cutánea.",
    "slug": "facial-de-hidratacion-profunda"
  },
  {
    "id": "srv_facial_antiedad_60",
    "name": "Facial anti-edad",
    "categoryTitle": "Tratamientos faciales",
    "categoryId": "tratamientos-faciales",
    "subcategoryName": "Faciales y Cosmiatría",
    "price": 20,
    "duration": "60 min",
    "badge": "Efecto Lifting & Colágeno",
    "image": "./assets/catalog/facial-con-ventosas.webp",
    "gallery": [
      "./assets/catalog/facial-con-ventosas.webp",
      "./assets/facial_original.jpg",
      "./assets/dsc_6328.jpg"
    ],
    "description": "Estimula la circulación, favorece la desintoxicación, reduce hinchazón, promueve la renovación celular, suaviza arrugas y estimula colágeno para un aspecto firme y tonificado.",
    "longDescription": [
      "Protocolo avanzado antienvejecimiento que trabaja sobre la flacidez, líneas de expresión y falta de tono muscular facial.",
      "Combina principios activos tensores y antioxidantes con técnicas de masaje reafirmante o ventosas faciales que estimulan la síntesis de colágeno y elastina."
    ],
    "benefits": [
      "Atenuación de líneas de expresión y arrugas finas",
      "Efecto lifting y mayor definición del óvalo facial",
      "Estimulación endógena de colágeno",
      "Drenaje de bolsas y reducción de hinchazón periocular"
    ],
    "includes": [
      "60 minutos de protocolo anti-edad",
      "Sérums concentrados de péptidos y antioxidantes",
      "Mascarilla tensora reafirmante",
      "Bebida de cortesía"
    ],
    "recommendations": "Apto para pieles maduras o personas a partir de los 28 años como prevención activa.",
    "slug": "facial-anti-edad"
  },
  {
    "id": "srv_limpieza_facial_profunda_60",
    "name": "Limpieza facial profunda",
    "categoryTitle": "Tratamientos faciales",
    "categoryId": "tratamientos-faciales",
    "subcategoryName": "Faciales y Cosmiatría",
    "price": 18,
    "duration": "60 min",
    "badge": "Purificante & Anti-Impurezas",
    "image": "./assets/catalog/limpieza-profunda-x.webp",
    "gallery": [
      "./assets/catalog/limpieza-profunda-x.webp",
      "./assets/facial_original.jpg",
      "./assets/dsc_6325.jpg"
    ],
    "description": "Elimina puntos negros y células muertas, logrando una piel suave, fresca e hidratada. Desobstruye poros y unifica el cutis.",
    "longDescription": [
      "Tratamiento esencial de higiene dérmica. Elimina con precisión comedones, puntos negros, microquistes y tapones sebáceos.",
      "Prepara la piel mediante vapor o lociones emolientes, extracción higiénica cuidadosa, descongestión con alta frecuencia y mascarilla calmante antiséptica."
    ],
    "benefits": [
      "Poros limpios y visiblemente afinados",
      "Eliminación total de impurezas y queratina acumulada",
      "Regulación del exceso de sebo y prevención de brotes",
      "Cutis limpio, uniforme y revitalizado"
    ],
    "includes": [
      "60 minutos de protocolo de limpieza profunda",
      "Extracción profesional higiénica",
      "Alta frecuencia bactericida y mascarilla calmante",
      "Bebida de cortesía"
    ],
    "recommendations": "No exponerse al sol directo las 24 horas posteriores a la sesión.",
    "slug": "limpieza-facial-profunda"
  },
  {
    "id": "srv_parafina_manos_pies_45",
    "name": "Parafina para manos y pies",
    "categoryTitle": "Tratamientos corporales",
    "categoryId": "tratamientos-corporales",
    "subcategoryName": "Cuidado Corporal y Estética",
    "price": 10,
    "duration": "45 min",
    "badge": "Nutrición Cutánea",
    "image": "./assets/catalog/parafina-para-manos-y-pies-45-min.webp",
    "gallery": [
      "./assets/catalog/parafina-para-manos-y-pies-45-min.webp",
      "./assets/snack_bandeja.jpg"
    ],
    "description": "Baño de parafina tibia que humecta profundamente manos y pies secos o agrietados, alivia dolores articulares y deja la piel aterciopelada.",
    "longDescription": [
      "Tratamiento termoterapéutico donde las manos y los pies se sumergen en parafina cosmética tibia enriquecida con esencias emolientes.",
      "El calor abre los poros y permite la absorción intensiva de aceites, proporcionando alivio en articulaciones rígidas y una tersura extraordinaria en talones y manos."
    ],
    "benefits": [
      "Hidratación intensiva contra resequedad extrema y grietas",
      "Calma la rigidez en dedos, muñecas y tobillos",
      "Piel con tacto de seda durante días",
      "Sensación de descanso absoluto en manos y pies"
    ],
    "includes": [
      "45 minutos de tratamiento de parafina en ambas extremidades",
      "Envoltura térmica y masaje final hidratante",
      "Bebida de cortesía"
    ],
    "recommendations": "Ideal para combinar con pedicura o tras una jornada intensa de trabajo manual.",
    "slug": "parafina-para-manos-y-pies"
  },
  {
    "id": "srv_maderoterapia_corporal_75",
    "name": "Maderoterapia corporal localizada",
    "categoryTitle": "Tratamientos corporales",
    "categoryId": "tratamientos-corporales",
    "subcategoryName": "Cuidado Corporal y Estética",
    "price": 25,
    "duration": "75 min",
    "badge": "Reductor & Reafirmante",
    "image": "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
    "gallery": [
      "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
      "./assets/maderoterapia.jpg"
    ],
    "description": "Técnica con instrumentos de madera diseñados para estimular la circulación, reafirmar tejidos, modelar el contorno y reducir celulitis.",
    "longDescription": [
      "Técnica holística de modelado corporal mediante instrumentos anatómicos de madera noble (rodillos estriados, copas suecas, tabla moldeadora).",
      "Reactiva la lipólisis local, moviliza adiposidades rebeldes, favorece la retracción de la piel y tonifica glúteos, abdomen o muslos."
    ],
    "benefits": [
      "Atenuación de la apariencia de piel de naranja y celulitis",
      "Modelado y definición del contorno corporal",
      "Estimulación linfática y eliminación de líquidos",
      "Reafirmación del tejido conjuntivo dérmico"
    ],
    "includes": [
      "75 minutos de maniobras con instrumental de maderoterapia",
      "Aceites reductores con extractos botánicos",
      "Bebida de cortesía"
    ],
    "recommendations": "Para resultados óptimos de reducción se aconseja una secuencia de varias sesiones.",
    "slug": "maderoterapia-corporal-localizada"
  },
  {
    "id": "srv_exfoliante_corporal_30",
    "name": "Exfoliante corporal",
    "categoryTitle": "Tratamientos corporales",
    "categoryId": "tratamientos-corporales",
    "subcategoryName": "Cuidado Corporal y Estética",
    "price": 15,
    "duration": "30 min",
    "badge": "Renovación Dermo-Pulido",
    "image": "./assets/catalog/exfoliante-corporal-z.webp",
    "gallery": [
      "./assets/catalog/exfoliante-corporal-z.webp",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Elimina células muertas y asperezas en todo el cuerpo con sales marinas o scrubs botánicos, dejando la piel renovada, luminosa y suave.",
    "longDescription": [
      "Pulido dérmico integral mediante exfoliantes granulados naturales a base de sales del mar o azúcares botánicos con aceites esenciales.",
      "Desobstruye folículos, oxigena la epidermis y prepara la piel para recibir masajes o hidrataciones con máxima absorción."
    ],
    "benefits": [
      "Eliminación eficaz de asperezas en codos, rodillas y espalda",
      "Homogeneidad y suavidad aterciopelada al tacto",
      "Estimulación de la microcirculación cutánea superficial",
      "Potencia el efecto de cualquier tratamiento posterior"
    ],
    "includes": [
      "30 minutos de exfoliación corporal completa",
      "Retirada tibia y emulsión hidratante ligera",
      "Bebida de cortesía"
    ],
    "recommendations": "Excelente antes de tomar el sol o recibir un masaje relajante.",
    "slug": "exfoliante-corporal"
  },
  {
    "id": "srv_termoterapia_parafina_60",
    "name": "Termoterapia con manta térmica y parafina",
    "categoryTitle": "Tratamientos corporales",
    "categoryId": "tratamientos-corporales",
    "subcategoryName": "Cuidado Corporal y Estética",
    "price": 10,
    "duration": "60 min",
    "badge": "Detox Térmico",
    "image": "./assets/catalog/envoltura-corporal-con-parafina.webp",
    "gallery": [
      "./assets/catalog/envoltura-corporal-con-parafina.webp",
      "./assets/circuito_termal.jpg"
    ],
    "description": "Aplicación de parafina y calor controlado mediante manta térmica para desintoxicar, relajar la musculatura y favorecer la sudoración depurativa.",
    "longDescription": [
      "Tratamiento de calor profundo que eleva la temperatura corporal de manera segura y placentera con manta térmica especializada y activos emolientes de parafina.",
      "Provoca una sudoración depurativa que elimina toxinas, alivia tensiones musculares generalizadas y promueve el descanso."
    ],
    "benefits": [
      "Eliminación de toxinas por vía sudorípara",
      "Alivio de dolores musculares y articulares crónicos",
      "Relajación profunda por efecto vasodilatador",
      "Piel suave e hidratada por la parafina"
    ],
    "includes": [
      "60 minutos de protocolo termoterapéutico",
      "Manta térmica regulable y envoltura corporal",
      "Bebida de cortesía hidratante"
    ],
    "recommendations": "Beber agua fresca al terminar la sesión para rehidratar el organismo.",
    "slug": "termoterapia-con-manta-termica-y-parafina"
  },
  {
    "id": "srv_terapia_ventosas_75",
    "name": "Terapia con ventosas",
    "categoryTitle": "Tratamientos corporales",
    "categoryId": "tratamientos-corporales",
    "subcategoryName": "Cuidado Corporal y Estética",
    "price": 25,
    "duration": "75 min",
    "badge": "Cupping Descompresivo",
    "image": "./assets/catalog/terapia-con-ventosas.webp",
    "gallery": [
      "./assets/catalog/terapia-con-ventosas.webp",
      "./assets/masaje_m01.jpg"
    ],
    "description": "Técnica tradicional de cupping que succiona y descomprime la fascia muscular, incrementando la irrigación sanguínea y aliviando contracturas resistentes.",
    "longDescription": [
      "Terapia milenaria de ventosas (cupping) fijas y dinámicas que genera presión negativa sobre el tejido blando.",
      "A diferencia del masaje por compresión, la ventosa separa las fascias de los músculos, facilitando la oxigenación celular y barriendo el ácido láctico acumulado."
    ],
    "benefits": [
      "Descompresión fascial profunda en espalda y piernas",
      "Aumento drástico del flujo sanguíneo local",
      "Eficaz en contracturas crónicas que no ceden al masaje tradicional",
      "Acelera la recuperación tras entrenamientos intensos"
    ],
    "includes": [
      "75 minutos de terapia de ventosas + masaje manual preparatorio",
      "Aceites terapéuticos botánicos",
      "Bebida de cortesía"
    ],
    "recommendations": "Puede dejar marcas circulares rojizas normales que desaparecen naturalmente en pocos días.",
    "slug": "terapia-con-ventosas"
  },
  {
    "id": "srv_auriculoterapia_20",
    "name": "Auriculoterapia",
    "categoryTitle": "Tratamientos corporales",
    "categoryId": "tratamientos-corporales",
    "subcategoryName": "Cuidado Corporal y Estética",
    "price": 3,
    "duration": "20 min",
    "badge": "Reflexología Auricular",
    "image": "./assets/catalog/auriculoterapia.webp",
    "gallery": [
      "./assets/catalog/auriculoterapia.webp",
      "./assets/servicios_spa.jpg"
    ],
    "description": "Estimulación de puntos reflejos en la oreja mediante microesferas para regular el estrés, ansiedad, apetito y desequilibrios energéticos.",
    "longDescription": [
      "Especialidad de la medicina tradicional oriental basada en el microsistema de la oreja, donde se proyectan todos los órganos corporales.",
      "Se aplican semillas de vaccaria o balines imantados en puntos estratégicos que continúan estimulando el sistema nervioso durante varios días."
    ],
    "benefits": [
      "Control de la ansiedad y el estrés cotidiano",
      "Apoyo en programas de control de peso y hábitos saludables",
      "Alivio de dolores de cabeza e insomnio",
      "Efecto prolongado durante los días siguientes"
    ],
    "includes": [
      "20 minutos de diagnóstico y colocación de microesferas auriculares",
      "Bebida de cortesía"
    ],
    "recommendations": "Presionar suavemente los balines cuando sientas episodios de ansiedad o estrés.",
    "slug": "auriculoterapia"
  },
  {
    "id": "srv_escapada_chicas",
    "name": "Escapada de chicas",
    "categoryTitle": "Paquetes",
    "categoryId": "paquetes-parejas",
    "subcategoryName": "Paquetes Signature y Rituales",
    "price": 110,
    "duration": "2 h 20 min aprox.",
    "badge": "Grupal & Amigas",
    "image": "./assets/catalog/escapada-de-chicas-2-horas-y-20-min.webp",
    "gallery": [
      "./assets/catalog/escapada-de-chicas-2-horas-y-20-min.webp",
      "./assets/pareja_jacuzzi.jpg",
      "./assets/snack_bandeja.jpg"
    ],
    "description": "Paquete completo diseñado para disfrutar entre amigas: masajes relajantes, mascarillas faciales, exfoliación y brindis de bienvenida.",
    "longDescription": [
      "El plan perfecto para compartir momentos inolvidables de risas, belleza y relax absoluto entre amigas en nuestras instalaciones privadas.",
      "Incluye circuito de masajes relajantes, exfoliación corporal renovadora, hidratación facial y atención gourmet personalizada."
    ],
    "benefits": [
      "Experiencia compartida inolvidable en ambiente exclusivo",
      "Tratamiento estético y relajante integral simultáneo",
      "Bebidas y aperitivos de cortesía",
      "Fotografías y recuerdos memorables"
    ],
    "includes": [
      "2 horas y 20 minutos de experiencia combinada",
      "Masaje relajante + Tratamiento facial express + Exfoliación",
      "Bebidas de cortesía y atenciones especiales"
    ],
    "recommendations": "Reservar con anticipación para coordinar el horario del grupo.",
    "slug": "escapada-de-chicas"
  },
  {
    "id": "srv_ritual_amor_pareja",
    "name": "Ritual de Amor & Relax en Pareja",
    "categoryTitle": "Paquetes",
    "categoryId": "paquetes-parejas",
    "subcategoryName": "Paquetes Signature y Rituales",
    "price": 130,
    "duration": "3 h aprox.",
    "badge": "Romance & Parejas",
    "image": "./assets/catalog/masaje-en-pareja-2-horas.webp",
    "gallery": [
      "./assets/catalog/masaje-en-pareja-2-horas.webp",
      "./assets/pareja_jacuzzi.jpg",
      "./assets/masaje_pareja.jpg"
    ],
    "description": "Experiencia romántica en cabina doble privada. Masaje corporal simultáneo con aromaterapia, tratamiento facial hidratante y brindis con cava o vino espumoso.",
    "longDescription": [
      "Diseñado para reconectar, celebrar aniversarios o regalar una velada mágica en pareja.",
      "En una cabina doble ambientada con velas y música suave, dos terapeutas realizan un masaje completo simultáneo, seguido de hidratación facial y un momento íntimo de brindis."
    ],
    "benefits": [
      "Fortalece la conexión íntima y emocional en pareja",
      "Cabina doble ambientada con pétalos y luz tenue",
      "Masaje integral simultáneo a cuatro manos (dos terapeutas)",
      "Brindis exclusivo y amenidades especiales"
    ],
    "includes": [
      "3 horas aproximadas en suite privada de parejas",
      "Masaje corporal completo para ambos",
      "Hidratación facial para los dos",
      "Brindis con copa de espumoso o vino + bebida de cortesía"
    ],
    "recommendations": "El paquete favorito para celebrar aniversarios, cumpleaños o pedidas de mano.",
    "slug": "ritual-de-amor-relax-en-pareja"
  },
  {
    "id": "srv_refugio_zen",
    "name": "Refugio Zen",
    "categoryTitle": "Paquetes",
    "categoryId": "paquetes-parejas",
    "subcategoryName": "Paquetes Signature y Rituales",
    "price": 200,
    "duration": "4 h 20 min aprox.",
    "badge": "Día de Spa Completo",
    "image": "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
    "gallery": [
      "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
      "./assets/circuito_termal.jpg",
      "./assets/pareja_sauna.jpg"
    ],
    "description": "La experiencia de spa más completa de La Habana: exfoliación, envoltura corporal, masaje a elección, limpieza facial y salón de belleza con merienda gourmet.",
    "longDescription": [
      "Más de cuatro horas de entrega absoluta al autocuidado. Tu día de spa definitivo para resetear cuerpo y mente.",
      "Recorrerás todas las estaciones del santuario: exfoliación profunda, envoltura nutritiva, masaje holístico o de piedras calientes, facial completo y servicios de estilismo capilar o manicura."
    ],
    "benefits": [
      "Transformación integral de pies a cabeza",
      "Máximo nivel de personalización de cada protocolo",
      "Merienda gourmet saludable y bebidas ilimitadas",
      "Sensación de renacimiento físico y anímico"
    ],
    "includes": [
      "4 horas y 20 minutos de atenciones continuas",
      "Exfoliación + Envoltura + Masaje 90 min + Facial completo + Salón",
      "Merienda gourmet y bebidas de cortesía"
    ],
    "recommendations": "Reserva este día enteramente para ti sin compromisos de agenda posteriores.",
    "slug": "refugio-zen"
  },
  {
    "id": "srv_plan_romantico",
    "name": "Plan Romántico",
    "categoryTitle": "Paquetes",
    "categoryId": "paquetes-parejas",
    "subcategoryName": "Paquetes Signature y Rituales",
    "price": 105,
    "duration": "2 h aprox.",
    "badge": "Especial Parejas",
    "image": "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
    "gallery": [
      "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
      "./assets/masaje_pareja.jpg",
      "./assets/snack_bandeja.jpg"
    ],
    "description": "Dos horas de escape en cabina doble para compartir con tu pareja: masaje sincronizado relajante, aromaterapia personalizada y copas de cortesía.",
    "longDescription": [
      "Una pausa romántica y acogedora de dos horas completas para parejas que desean desconectar del ajetreo diario.",
      "Masaje corporal relajante sincronizado, aceites aromáticos afrodisíacos y una atmósfera íntima diseñada con esmero."
    ],
    "benefits": [
      "Desconexión conjunta en cabina doble",
      "Alivio de tensiones y renovación del vínculo afectivo",
      "Música envolvente y aceites aromáticos de rosas y jazmín",
      "Detalles de cortesía románticos"
    ],
    "includes": [
      "2 horas completas en cabina privada de pareja",
      "Masaje relajante corporal para ambos",
      "Copas de cortesía"
    ],
    "recommendations": "Excelente detalle sorpresa para una fecha especial.",
    "slug": "plan-romantico"
  },
  {
    "id": "srv_escape_romantico_spa",
    "name": "Escape Romántico Spa",
    "categoryTitle": "Paquetes",
    "categoryId": "paquetes-parejas",
    "subcategoryName": "Paquetes Signature y Rituales",
    "price": 60,
    "duration": "1 h 45 min aprox.",
    "badge": "Pareja Express",
    "image": "./assets/catalog/tarde-de-spa-para-dos-3-horas-y-30-min.webp",
    "gallery": [
      "./assets/catalog/tarde-de-spa-para-dos-3-horas-y-30-min.webp",
      "./assets/pareja_jacuzzi.jpg"
    ],
    "description": "Versión condensada para disfrutar en pareja: masaje relajante de 60 minutos en cabina compartida más cóctel sin alcohol o infusión de cortesía.",
    "longDescription": [
      "Para parejas con agendas apretadas que no quieren renunciar a regalarse una experiencia de relajación compartida de primer nivel.",
      "Incluye recepción con bebidas frías o calientes y masaje relajante simultáneo en cabina doble."
    ],
    "benefits": [
      "Optimización de tiempo con máxima calidad de spa",
      "Masaje simultáneo en cabina privada para dos",
      "Alivio muscular y serenidad compartida",
      "Tarifa accesible para disfrutar regularmente"
    ],
    "includes": [
      "1 hora y 45 minutos de experiencia en pareja",
      "Masaje corporal simultáneo para ambos",
      "Bebida no alcohólica de cortesía"
    ],
    "recommendations": "Ideal para coordinar entre semana al terminar la jornada.",
    "slug": "escape-romantico-spa"
  },
  {
    "id": "srv_lavar_peinar_corto",
    "name": "Lavar y peinar cabello corto",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 5,
    "duration": null,
    "badge": "Estilismo",
    "image": "./assets/catalog/lavar-y-peinar-1-hora.webp",
    "gallery": [
      "./assets/catalog/lavar-y-peinar-1-hora.webp",
      "./assets/peluqueria_orig.jpg"
    ],
    "description": "Lavado profesional con champú nutritivo, acondicionador desenredante y peinado o brushing para cabello corto.",
    "longDescription": [
      "Servicio de peluquería profesional que incluye lavado con productos de salón de alta calidad y peinado con secador y fijadores suaves para melenas cortas."
    ],
    "benefits": [
      "Cabello limpio, brillante y libre de residuos",
      "Peinado duradero con volumen y definición",
      "Productos profesionales nutritivos"
    ],
    "includes": [
      "Lavado con champú y acondicionador profesional",
      "Secado y peinado para cabello corto",
      "Bebida de cortesía"
    ],
    "recommendations": "Perfecto para antes de reuniones de trabajo o salidas sociales.",
    "slug": "lavar-y-peinar-cabello-corto"
  },
  {
    "id": "srv_lavar_peinar_medio",
    "name": "Lavar y peinar cabello medio",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 7,
    "duration": null,
    "badge": "Estilismo",
    "image": "./assets/catalog/lavar-y-peinar-cabello-medio.webp",
    "gallery": [
      "./assets/catalog/lavar-y-peinar-cabello-medio.webp",
      "./assets/peluqueria2_orig.jpg"
    ],
    "description": "Lavado completo y peinado estructurado para cabello de longitud media (a la altura de los hombros).",
    "longDescription": [
      "Lavado con cosmética capilar premium que hidrata y aporta soltura, seguido de peinado profesional con cepillo redondo o plancha según preferencia."
    ],
    "benefits": [
      "Manejo impecable del frizz y movimiento natural",
      "Brillo radiante y sellado de cutícula",
      "Estilo pulido y duradero"
    ],
    "includes": [
      "Lavado capilar con champú y mascarilla",
      "Brushing o peinado para cabello medio",
      "Bebida de cortesía"
    ],
    "recommendations": "Consúltale a tu estilista el estilo de peinado que mejor favorezca tus rasgos.",
    "slug": "lavar-y-peinar-cabello-medio"
  },
  {
    "id": "srv_lavar_peinar_largo",
    "name": "Lavar y peinar cabello largo",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 9,
    "duration": null,
    "badge": "Estilismo",
    "image": "./assets/catalog/lavar-y-peinar.webp",
    "gallery": [
      "./assets/catalog/lavar-y-peinar.webp",
      "./assets/peluqueria3_orig.jpg"
    ],
    "description": "Lavado hidratante con desenredado minucioso y peinado con secador o plancha para cabello largo.",
    "longDescription": [
      "Atención especial para melenas largas: lavado suave, nutrición de medios a puntas con mascarilla selladora y peinado con movimiento, ondas o alisado perfecto."
    ],
    "benefits": [
      "Desenredado sin tirones ni rotura de fibra",
      "Puntas selladas y cabello con caída suave",
      "Aspecto de peluquería impecable"
    ],
    "includes": [
      "Lavado y acondicionamiento profundo",
      "Peinado profesional para cabello largo",
      "Bebida de cortesía"
    ],
    "recommendations": "Añade un tratamiento de nutrición si tus puntas se sienten secas.",
    "slug": "lavar-y-peinar-cabello-largo"
  },
  {
    "id": "srv_lavar_peinar_extralargo",
    "name": "Lavar y peinar cabello extra largo",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 12,
    "duration": null,
    "badge": "Estilismo Melena",
    "image": "./assets/catalog/lavar-y-peinar-cabello-extra-largo.webp",
    "gallery": [
      "./assets/catalog/lavar-y-peinar-cabello-extra-largo.webp",
      "./assets/peluqueria_orig.jpg"
    ],
    "description": "Lavado y peinado especializado para melenas abundantes y de longitud extra larga. Tratamiento minucioso de medios y puntas.",
    "longDescription": [
      "Cuidado exhaustivo para cabellos por debajo de la cintura o de gran volumen: lavado con productos enriquecidos, secado por secciones y peinado de alta definición."
    ],
    "benefits": [
      "Control del volumen y eliminación del encrespamiento",
      "Manejo experto de melenas muy largas",
      "Brillo de raíz a puntas sin sobrecalentar el cabello"
    ],
    "includes": [
      "Lavado integral con mascarilla acondicionadora",
      "Secado y moldeado de cabello extra largo",
      "Bebida de cortesía"
    ],
    "recommendations": "Disfruta de tu bebida de cortesía mientras nuestras estilistas miman tu cabello.",
    "slug": "lavar-y-peinar-cabello-extra-largo"
  },
  {
    "id": "srv_corte_cabello",
    "name": "Corte de cabello",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 5,
    "duration": null,
    "badge": "Corte & Estilo",
    "image": "./assets/catalog/lavado-corte-y-peinado-de-cabello-para-mujeres.webp",
    "gallery": [
      "./assets/catalog/lavado-corte-y-peinado-de-cabello-para-mujeres.webp",
      "./assets/peluqueria_orig.jpg"
    ],
    "description": "Asesoría de imagen, saneamiento de puntas o cambio de look radical realizado por nuestras estilistas profesionales.",
    "longDescription": [
      "Corte de precisión adaptado a la forma de tu rostro y textura natural de tu cabello. Desde saneamiento de puntas hasta cortes en capas, bobs o estilos vanguardistas."
    ],
    "benefits": [
      "Eliminación de puntas abiertas y orquillas",
      "Renovación del volumen y caída natural",
      "Asesoramiento personalizado según tu fisonomía"
    ],
    "includes": [
      "Diagnóstico capilar y corte profesional",
      "Peinado básico final",
      "Bebida de cortesía"
    ],
    "recommendations": "Puedes traer fotos de referencia del estilo que deseas lograr.",
    "slug": "corte-de-cabello"
  },
  {
    "id": "srv_antifrizz_felps",
    "name": "Tratamiento Anti-Frizz FELPS",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 15,
    "duration": null,
    "badge": "Botox Capilar & Control",
    "image": "./assets/catalog/tratamiento-anti-frizz-felps.webp",
    "gallery": [
      "./assets/catalog/tratamiento-anti-frizz-felps.webp",
      "./assets/peluqueria2_orig.jpg"
    ],
    "description": "Tratamiento disciplinante con fórmula FELPS que sella la cutícula, reduce el encrespamiento por humedad y aporta brillo espejo.",
    "longDescription": [
      "Tratamiento intensivo con la reconocida línea brasileña FELPS. Rellena la fibra capilar con aminoácidos y queratina hidrolizada para controlar el frizz persistente del clima caribeño."
    ],
    "benefits": [
      "Control total del encrespamiento frente a la humedad",
      "Efecto alisador suave y disciplina de la onda",
      "Brillo espejo y tacto sedoso inmediato",
      "Duración prolongada de varias semanas"
    ],
    "includes": [
      "Aplicación de tratamiento FELPS",
      "Sellado térmico con plancha profesional",
      "Bebida de cortesía"
    ],
    "recommendations": "Evita lavar el cabello las primeras 48 horas tras la aplicación para fijar los activos.",
    "slug": "tratamiento-anti-frizz-felps"
  },
  {
    "id": "srv_scalp_balance_detox",
    "name": "Experiencia Capilar “Scalp Balance Detox”",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 35,
    "duration": "60–90 min",
    "badge": "Head Spa Signature",
    "image": "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
    "gallery": [
      "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
      "./assets/head_spa.jpg"
    ],
    "description": "Ritual de bienestar inspirado en el Head Spa japonés: exfoliación del cuero cabelludo, masaje craneal con cascada de agua tibia, mascarilla botánica y alta frecuencia.",
    "longDescription": [
      "Nuestra joya del salón inspirada en los famosos Head Spas de Japón. Trata la salud del cuero cabelludo como la raíz de un cabello espléndido.",
      "Comienza con exfoliación purificante, hidroterapia con arco de agua tibia relajante, masaje craneal descontracturante, electroterapia y mascarilla de nutrición profunda."
    ],
    "benefits": [
      "Desintoxicación del cuero cabelludo de excesos sebáceos y caspa",
      "Estimulación profunda del crecimiento del cabello",
      "Alivio del estrés mental y dolor de cabeza",
      "Sensación de frescura y ligereza inigualable"
    ],
    "includes": [
      "Sesión completa de 60 a 90 minutos en camilla con arco de agua",
      "Masaje craneal, cervical y de hombros",
      "Productos botánicos purificantes",
      "Bebida de cortesía"
    ],
    "recommendations": "Nuestra experiencia capilar más elogiada en reseñas.",
    "slug": "experiencia-capilar-scalp-balance-detox"
  },
  {
    "id": "srv_color_1oz",
    "name": "Color",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 5,
    "duration": null,
    "badge": "Coloración",
    "image": "./assets/catalog/balayage-mechas-premium.webp",
    "gallery": [
      "./assets/catalog/balayage-mechas-premium.webp",
      "./assets/peluqueria3_orig.jpg"
    ],
    "description": "Aplicación de tinte profesional, cobertura total de canas o baño de color para reavivar tonos y reflejos.",
    "longDescription": [
      "Coloración profesional con tintes que respetan la estructura capilar, garantizando tonos vibrantes, cobertura óptima de canas y brillo duradero."
    ],
    "benefits": [
      "Cobertura perfecta de canas desde la raíz",
      "Tonos intensos con reflejos luminosos",
      "Fórmulas con agentes protectores del brillo"
    ],
    "includes": [
      "Aplicación de coloración profesional",
      "Lavado con champú post-color fijador",
      "Bebida de cortesía"
    ],
    "recommendations": "Consulta con nuestra colorista para elegir el matiz perfecto.",
    "slug": "color"
  },
  {
    "id": "srv_decoloracion_1oz",
    "name": "Decoloración",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 7,
    "duration": null,
    "badge": "Aclarado Técnico",
    "image": "./assets/catalog/decoloracion-o-mechas-30-g.webp",
    "gallery": [
      "./assets/catalog/decoloracion-o-mechas-30-g.webp",
      "./assets/peluqueria3_orig.jpg"
    ],
    "description": "Técnica de aclarado controlado para mechas, balayage o fondos de decoloración con protectores plex para cuidar la fibra capilar.",
    "longDescription": [
      "Proceso técnico de aclarado del cabello mediante decolorantes formulados con aditivos protectores que minimizan la agresión sobre la cutícula."
    ],
    "benefits": [
      "Aclarado parejo y limpio para fondos rubios o fantasía",
      "Cuidado de la fibra con aditivos protectores",
      "Técnica personalizada para mechas o balayage"
    ],
    "includes": [
      "Proceso de decoloración técnica",
      "Lavado neutralizante y tratamiento protector",
      "Bebida de cortesía"
    ],
    "recommendations": "Se sugiere acompañar con un tratamiento reconstructor capilar.",
    "slug": "decoloracion"
  },
  {
    "id": "srv_tratamientos_capilares",
    "name": "Tratamientos capilares",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Peluquería y Estilismo",
    "price": 10,
    "duration": null,
    "badge": "Reparación & Brillo",
    "image": "./assets/catalog/tratamientos-capilares-4t.webp",
    "gallery": [
      "./assets/catalog/tratamientos-capilares-4t.webp",
      "./assets/peluqueria2_orig.jpg"
    ],
    "description": "Ampollas nutritivas, cócteles de hidratación profunda y mascarillas de queratina para recuperar cabellos secos o castigados.",
    "longDescription": [
      "Protocolo de emergencia capilar para devolverle la vida a cabellos deshidratados, opacos o químicamente tratados con mascarillas y ampollas concentradas."
    ],
    "benefits": [
      "Sellado de puntas abiertas y disminución de quiebre",
      "Recuperación de la elasticidad y suavidad perdida",
      "Nutrición profunda de la cutícula"
    ],
    "includes": [
      "Diagnóstico de la hebra capilar",
      "Aplicación de cóctel de mascarilla y ampolla térmica",
      "Bebida de cortesía"
    ],
    "recommendations": "Excelente adición antes o después de cualquier peinado o corte.",
    "slug": "tratamientos-capilares"
  },
  {
    "id": "srv_pedicura_spa_90",
    "name": "Pedicura Spa",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Manicura y Pedicura",
    "price": 12,
    "duration": "1 h 30 min",
    "badge": "Pies Perfectos",
    "image": "./assets/catalog/pedicura-spa-1-hora.webp",
    "gallery": [
      "./assets/catalog/pedicura-spa-1-hora.webp",
      "./assets/pedicura_orig.jpg",
      "./assets/pedicura2_orig.jpg"
    ],
    "description": "Cuidado completo para pies: remojo en sales, exfoliación, limado, tratamiento de cutículas, masaje relajante en pies y esmaltado.",
    "longDescription": [
      "Una hora y media de descanso para tus pies: baño en tina con sales aromáticas, limado y pulido de uñas, exfoliación con scrub de azúcar, masaje relajante y esmaltado tradicional o pulido natural."
    ],
    "benefits": [
      "Eliminación de piel seca y callosidades suaves",
      "Uñas perfectamente delineadas y limpias",
      "Alivio del dolor y descanso en los pies",
      "Esmaltado prolijo de larga duración"
    ],
    "includes": [
      "90 minutos de pedicura spa completa",
      "Exfoliación, masaje y esmaltado",
      "Bebida de cortesía"
    ],
    "recommendations": "Traer calzado abierto para permitir el secado perfecto del esmalte.",
    "slug": "pedicura-spa"
  },
  {
    "id": "srv_anticallosidad_pies",
    "name": "Tratamiento anti-callosidad para los pies",
    "categoryTitle": "Salón de belleza",
    "categoryId": "salon-belleza",
    "subcategoryName": "Manicura y Pedicura",
    "price": 15,
    "duration": null,
    "badge": "Podológico & Suavidad",
    "image": "./assets/catalog/manicura-spa.webp",
    "gallery": [
      "./assets/catalog/manicura-spa.webp",
      "./assets/pedicura2_orig.jpg"
    ],
    "description": "Tratamiento intensivo con lociones queratolíticas para ablandar y eliminar durezas y callosidades rebeldes en talones y plantas de los pies.",
    "longDescription": [
      "Protocolo intensivo enfocado en restaurar pies con durezas severas, hiperqueratosis o talones agrietados. Ablanda las capas córneas engrosadas para removerlas sin lastimar la piel sana."
    ],
    "benefits": [
      "Eliminación eficaz de durezas gruesas y asperezas",
      "Regeneración de talones agrietados",
      "Sensación inmediata de pies suaves y ligeros"
    ],
    "includes": [
      "Aplicación de loción emoliente queratolítica",
      "Retirado técnico de callosidades e hidratación intensiva",
      "Bebida de cortesía"
    ],
    "recommendations": "Ideal para pies castigados por el calzado cerrado o caminatas prolongadas.",
    "slug": "tratamiento-anti-callosidad-para-los-pies"
  },
  {
    "id": "srv_depilacion_axilas",
    "name": "Depilación de axilas",
    "categoryTitle": "Depilación",
    "categoryId": "depilacion",
    "subcategoryName": "Depilación con Cera",
    "price": 7,
    "duration": null,
    "badge": "Cuidado Piel Suave",
    "image": "./assets/catalog/depilacion-de-axilas-5my9n.webp",
    "gallery": [
      "./assets/catalog/depilacion-de-axilas-5my9n.webp",
      "./assets/depilacion_orig.jpg"
    ],
    "description": "Depilación higiénica con cera tibia especial para zonas sensibles, garantizando una piel limpia, suave y libre de vello por semanas.",
    "longDescription": [
      "Depilación rápida y eficaz con ceras de baja temperatura formuladas con activos calmantes para evitar irritaciones en la delicada zona de las axilas."
    ],
    "benefits": [
      "Extracción del vello desde la raíz",
      "Piel suave sin cortes ni sombras de afeitado",
      "Efecto duradero de 3 a 4 semanas"
    ],
    "includes": [
      "Depilación con cera higiénica desechable",
      "Loción calmante con aloe vera post-depilatoria",
      "Bebida de cortesía"
    ],
    "recommendations": "No aplicar desodorantes con alcohol en las primeras 12 horas.",
    "slug": "depilacion-de-axilas"
  },
  {
    "id": "srv_depilacion_piernas",
    "name": "Depilación de piernas",
    "categoryTitle": "Depilación",
    "categoryId": "depilacion",
    "subcategoryName": "Depilación con Cera",
    "price": 20,
    "duration": null,
    "badge": "Piernas de Seda",
    "image": "./assets/catalog/depilacion-de-piernas-geakj.webp",
    "gallery": [
      "./assets/catalog/depilacion-de-piernas-geakj.webp",
      "./assets/depilacion_orig.jpg"
    ],
    "description": "Depilación completa de piernas con cera tibia que retira el vello de raíz dejando las piernas suaves y sedosas.",
    "longDescription": [
      "Depilación integral de piernas (muslos, rodillas y pantorrillas) con cera de alta elasticidad. Arranca el vello desde el bulbo para debilitarlo progresivamente."
    ],
    "benefits": [
      "Piernas tersas, libres de vello y suaves al tacto",
      "Debilitamiento paulatino del grosor del vello",
      "Cuidado de la circulación con ceras tibias"
    ],
    "includes": [
      "Depilación completa de piernas",
      "Aceite calmante post-depilación y masaje ligero",
      "Bebida de cortesía"
    ],
    "recommendations": "Exfoliar las piernas 48 horas antes para evitar vellos encarnados.",
    "slug": "depilacion-de-piernas"
  },
  {
    "id": "srv_depilacion_cejas",
    "name": "Depilación de cejas",
    "categoryTitle": "Depilación",
    "categoryId": "depilacion",
    "subcategoryName": "Depilación con Cera",
    "price": 2,
    "duration": null,
    "badge": "Diseño & Definición",
    "image": "./assets/catalog/cejas-u.webp",
    "gallery": [
      "./assets/catalog/cejas-u.webp",
      "./assets/pestanas_orig.jpg"
    ],
    "description": "Diseño y limpieza del arco de las cejas con cera y pinzas para realzar la mirada y armonizar las facciones del rostro.",
    "longDescription": [
      "Perfilado de cejas profesional con cera de precisión y pinza para retirar vellos dispersos y resaltar la arquitectura natural de tu mirada."
    ],
    "benefits": [
      "Arco de cejas limpio, simétrico y definido",
      "Realce inmediato de la mirada",
      "Técnica rápida y poco dolorosa"
    ],
    "includes": [
      "Limpieza y diseño de cejas",
      "Gel descongestivo de manzanilla",
      "Bebida de cortesía"
    ],
    "recommendations": "Mantener la forma cada 3 a 4 semanas.",
    "slug": "depilacion-de-cejas"
  },
  {
    "id": "srv_depilacion_bozo_menton",
    "name": "Depilación de bozo y mentón",
    "categoryTitle": "Depilación",
    "categoryId": "depilacion",
    "subcategoryName": "Depilación con Cera",
    "price": 3,
    "duration": null,
    "badge": "Rostro Limpio",
    "image": "./assets/catalog/bozo-y-menton.webp",
    "gallery": [
      "./assets/catalog/bozo-y-menton.webp",
      "./assets/pestanas_orig.jpg"
    ],
    "description": "Depilación suave del labio superior y mentón con cera especial para el rostro sensible, dejando la piel limpia y tersa.",
    "longDescription": [
      "Remoción del vello facial indeseado en la zona del bozo y mentón con cera hipoalergénica de baja temperatura, evitando irritaciones y vellos enquistados."
    ],
    "benefits": [
      "Rostro completamente limpio y libre de sombras",
      "Mayor adherencia y acabado uniforme del maquillaje",
      "Debilitamiento gradual del vello facial"
    ],
    "includes": [
      "Depilación de labio superior y mentón",
      "Tónico calmante refrescante",
      "Bebida de cortesía"
    ],
    "recommendations": "Evitar el maquillaje directo en la zona las primeras horas.",
    "slug": "depilacion-de-bozo-y-menton"
  },
  {
    "id": "srv_taxi",
    "name": "Servicio de taxi 🚕",
    "categoryTitle": "Otros",
    "categoryId": "otros",
    "subcategoryName": "Servicios Complementarios",
    "price": "Sin costo",
    "duration": "Personalizado",
    "badge": "Transporte Exclusivo",
    "image": "./assets/servicio_taxi.jpg",
    "gallery": [
      "./assets/servicio_taxi.jpg",
      "./assets/servicios_spa.jpg"
    ],
    "description": "\"¿No tienes cómo llegar? Nosotros te recogemos y te llevamos de regreso.\"",
    "longDescription": [
      "\"¿No tienes cómo llegar? Nosotros te recogemos y te llevamos de regreso.\"",
      "Disfruta de la máxima comodidad desde que sales de tu casa o alojamiento. Coordinamos transporte privado climatizado para recogerte puntualmente antes de tu cita en Momentos Spa y llevarte de vuelta al finalizar tu sesión de bienestar."
    ],
    "benefits": [
      "Recogida y regreso directo en tu domicilio, hotel o casa de renta",
      "Vehículo privado con aire acondicionado y chofer puntual",
      "Cero preocupaciones por buscar transporte o estacionamiento",
      "Llegas a tu sesión totalmente relajado y puntual"
    ],
    "includes": [
      "Coordinación personalizada de traslado ida y vuelta",
      "Vehículo privado climatizado",
      "Atención directa vía WhatsApp para acordar dirección y hora"
    ],
    "recommendations": "Solicita tu servicio de taxi con anticipación al coordinar tu cita por WhatsApp indicando tu dirección.",
    "slug": "servicio-de-taxi",
    "isTaxi": true
  }
];

export function getServiceBySlug(slug) {
  if (!slug) return null;
  return allServices.find(s => s.slug === slug || s.id === slug);
}

export function getServiceById(id) {
  if (!id) return null;
  return allServices.find(s => s.id === id || s.slug === id);
}
