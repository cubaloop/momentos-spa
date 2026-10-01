// Catálogo oficial de Momentos Spa sincronizado fielmente con elyerromenu.com/b/catalogo-momentos-spa
// Lema: "Siempre pensando en ti"
// Todos los servicios incluyen bebida no alcohólica de cortesía (té, agua, café, jugo y refresco)

export const categoriesData = [
  {
    id: "spa-masajes",
    title: "Servicios de Spa y Masajes",
    subtitle: "Técnicas terapéuticas y relajantes diseñadas para reequilibrar tu cuerpo y mente",
    icon: "Sparkles",
    badge: "Más Popular",
    subcategories: [
      {
        id: "masajes",
        name: "Masajes Terapéuticos y Relajantes",
        description: "Alivio de tensiones, relajación profunda y estimulación de la circulación",
        services: [
          {
            id: "srv_masaje_relajante_30",
            name: "Masaje relajante de 30 min",
            duration: "30 min",
            price: 25,
            badge: "Express",
            image: "./assets/catalog/masaje-relajante-de-30-min.webp",
            gallery: [
              "./assets/catalog/masaje-relajante-de-30-min.webp",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6325.jpg"
            ],
            description: "Masaje relajante en cervicales, espalda y piernas. Ideal para personas que acumulan mucho estrés y disponen de poco tiempo.",
            longDescription: [
              "Masaje relajante focalizado en cervicales, espalda y piernas. Es el tratamiento ideal para personas que acumulan tensión por la rutina diaria o disponen de poco tiempo para una pausa revitalizante.",
              "Mediante pases rítmicos y suaves, ayuda a descomprimir la musculatura dorsal y favorece la circulación en piernas cansadas."
            ],
            benefits: [
              "Alivio focalizado en cuello, hombros y lumbares",
              "Descanso muscular rápido y efectivo",
              "Disminución del estrés en poco tiempo",
              "Activación de la circulación en piernas"
            ],
            steps: [
              { step: "01", title: "Acomodación", desc: "Preparación en cabina privada climatizada con aceites cálidos." },
              { step: "02", title: "Masaje Cervical y Espalda", desc: "Maniobras suaves y de amasamiento para soltar tensión acumulada." },
              { step: "03", title: "Pases en Piernas", desc: "Relajación muscular ascendente en extremidades inferiores." },
              { step: "04", title: "Bebida de Cortesía", desc: "Té, café, jugo o infusión al finalizar la sesión." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Aceites esenciales naturales",
              "Bebida no alcohólica de cortesía (té, café, agua, jugo o refresco)"
            ],
            recommendations: "Recomendado como descanso reparador a mitad del día o al salir del trabajo.",
            slug: "masaje-relajante-de-30-min"
          },
          {
            id: "srv_masaje_relajante_60",
            name: "Masaje relajante (60 min)",
            duration: "60 min",
            price: 35,
            badge: "Esencial",
            popular: true,
            image: "./assets/catalog/masaje-relajante-u.webp",
            gallery: [
              "./assets/catalog/masaje-relajante-u.webp",
              "./assets/masaje_relax.jpg",
              "./assets/servicios_spa.jpg"
            ],
            description: "Técnica terapéutica centrada en aliviar la tensión muscular y promover un estado de calma y bienestar. Reduce el estrés, mejora la circulación sanguínea y fomenta la relajación profunda mediante movimientos suaves y rítmicos.",
            longDescription: [
              "El masaje relajante es una técnica terapéutica que se centra en aliviar la tensión muscular y promover un estado de calma y bienestar. Se utiliza para reducir el estrés, mejorar la circulación sanguínea y fomentar la relajación profunda.",
              "Durante una sesión de masaje relajante, el terapeuta aplica movimientos suaves y rítmicos, utilizando técnicas como el amasado, la fricción y el estiramiento. Los beneficios incluyen disminución de la ansiedad, mejora del sueño y alivio general en un ambiente tranquilo y acogedor."
            ],
            benefits: [
              "Disminución notable de la ansiedad y el estrés mental",
              "Mejora de la calidad del sueño y descanso nocturno",
              "Alivio de la tensión muscular acumulada",
              "Sensación integral de paz y ligereza"
            ],
            steps: [
              { step: "01", title: "Recepción & Aromaterapia", desc: "Ambientación sensorial con aromas botánicos suaves." },
              { step: "02", title: "Masaje Dorsal Completo", desc: "Fricciones fluidas y amasado rítmico en espalda y cuello." },
              { step: "03", title: "Extremidades y Cuello", desc: "Estiramientos suaves y descompresión en brazos y piernas." },
              { step: "04", title: "Momento de Reposo", desc: "Tiempo de reposo con bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Cabina climatizada con luz tenue y música relajante",
              "Aceites corporales hidratantes",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Ideal para desconectar de la rutina y recuperar la vitalidad física y mental.",
            slug: "masaje-relajante-60-min"
          },
          {
            id: "srv_masaje_relajante_90",
            name: "Masaje relajante de 90 min",
            duration: "90 min",
            price: 50,
            badge: "Completo",
            image: "./assets/catalog/masaje-relajante-de-90-min.webp",
            gallery: [
              "./assets/catalog/masaje-relajante-de-90-min.webp",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6328.jpg"
            ],
            description: "Sesión extendida de masaje relajante de cuerpo entero, diseñada para quienes buscan desconexión prolongada y máxima relajación muscular.",
            longDescription: [
              "Una experiencia extendida de hora y media donde cada grupo muscular recibe la atención y el tiempo necesarios para soltarse por completo.",
              "Perfecto para combatir el agotamiento físico severo, el insomnio recurrente y las tensiones profundas generalizadas."
            ],
            benefits: [
              "Relajación neuromuscular profunda sin prisas",
              "Eliminación prolongada del estrés somático",
              "Reactivación de la circulación periférica",
              "Paz mental y descanso duradero"
            ],
            steps: [
              { step: "01", title: "Bienvenida", desc: "Acomodación en cabina privada." },
              { step: "02", title: "Masaje Integral Profundo", desc: "Maniobras rítmicas pausadas en todo el cuerpo." },
              { step: "03", title: "Cierre Craneal y Facial", desc: "Pases suaves en sienes y cuello." },
              { step: "04", title: "Bebida de Cortesía", desc: "Degustación de bebida fría o caliente." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Aceites aromáticos",
              "Bebida no alcohólica de cortesía (té, café, agua, jugo o refresco)"
            ],
            recommendations: "Se aconseja acudir sin compromisos posteriores para prolongar el estado de calma.",
            slug: "masaje-relajante-de-90-min"
          },
          {
            id: "srv_masaje_descontracturante_60",
            name: "Masaje descontracturante (60 min)",
            duration: "60 min",
            price: 40,
            badge: "Alivio Fuerte",
            popular: true,
            image: "./assets/catalog/masaje-descontracturante-h.webp",
            gallery: [
              "./assets/catalog/masaje-descontracturante-h.webp",
              "./assets/masaje_m01.jpg",
              "./assets/masaje_m02.jpg"
            ],
            description: "Técnica terapéutica utilizada para aliviar la tensión muscular y reducir el dolor asociado a contracturas. Se enfoca en espalda, cuello y hombros mediante movimientos profundos, firmes, amasamientos y presiones específicas.",
            longDescription: [
              "El masaje descontracturante es una técnica terapéutica utilizada para aliviar la tensión muscular y reducir el dolor asociado a contracturas.",
              "Se enfoca en las áreas del cuerpo donde se acumula mayor tensión, como la espalda, el cuello y los hombros. Este tipo de masaje implica movimientos profundos y firmes, que pueden incluir amasamientos, fricciones y presiones específicas sobre los músculos y tejidos conectivos."
            ],
            benefits: [
              "Alivio directo de contracturas y nudos musculares",
              "Recuperación de la movilidad articular y cervical",
              "Disminución del dolor provocado por malas posturas",
              "Oxigenación muscular mediante hiperemia controlada"
            ],
            steps: [
              { step: "01", title: "Evaluación Muscular", desc: "Identificación de los puntos de dolor y sobrecarga." },
              { step: "02", title: "Fricción de Calentamiento", desc: "Preparación del tejido conectivo con bálsamos térmicos." },
              { step: "03", title: "Presión Descontracturante", desc: "Maniobras firmes y amasamientos dirigidos a disolver nudos." },
              { step: "04", title: "Descanso y Bebida", desc: "Bebida refrescante o infusión caliente incluida." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Bálsamos y aceites descontracturantes",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Sensación de bienestar progresivo; se aconseja tomar abundante agua tras la sesión.",
            slug: "masaje-descontracturante-60-min"
          },
          {
            id: "srv_masaje_descontracturante_90",
            name: "Masaje descontracturante (90 min)",
            duration: "90 min",
            price: 55,
            badge: "Intensivo",
            image: "./assets/catalog/masaje-descontracturante.webp",
            gallery: [
              "./assets/catalog/masaje-descontracturante.webp",
              "./assets/masaje_m01.jpg",
              "./assets/masaje_m02.jpg"
            ],
            description: "Sesión intensiva y extendida de descompresión muscular. Dedica 90 minutos para disolver contracturas crónicas en espalda completa, cuello, hombros y extremidades.",
            longDescription: [
              "Sesión de alta eficacia recomendada para personas con contracturas severas, deportistas o quienes sufren dolor postural crónico.",
              "El tiempo extra de 90 minutos permite trabajar cada grupo muscular a fondo, combinando presiones profundas, pases miofasciales y estiramientos pasivos."
            ],
            benefits: [
              "Disolución de adherencias y contracturas severas",
              "Mayor rango de movimiento y alivio duradero",
              "Descompresión de toda la columna vertebral",
              "Recuperación muscular integral"
            ],
            steps: [
              { step: "01", title: "Palpación", desc: "Detección de puntos gatillo en espalda y extremidades." },
              { step: "02", title: "Descompresión Dorsal", desc: "Trabajo profundo en zona escapular y lumbar." },
              { step: "03", title: "Extremidades y Cuello", desc: "Maniobras firmes en hombros, brazos y piernas." },
              { step: "04", title: "Cierre Revitalizante", desc: "Bebida de cortesía al concluir." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Aceites analgésicos naturales",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Evitar ejercicios de alta exigencia física inmediatamente después.",
            slug: "masaje-descontracturante-90-min"
          },
          {
            id: "srv_masaje_combinado_90",
            name: "Masaje combinado (90 min)",
            duration: "90 min",
            price: 50,
            badge: "A tu Medida",
            image: "./assets/catalog/masaje-deportivo.webp",
            gallery: [
              "./assets/catalog/masaje-deportivo.webp",
              "./assets/masaje_relax.jpg",
              "./assets/servicios_spa.jpg"
            ],
            description: "Permite elegir y combinar diferentes técnicas de masaje en una sola sesión de 90 minutos, como por ejemplo masaje relajante combinado con reflexología podal.",
            longDescription: [
              "El masaje combinado le da la posibilidad de elegir diferentes técnicas de masaje en una sola sesión. Como por ejemplo el masaje relajante combinado con reflexología podal.",
              "Es la opción más versátil y personalizada de Momentos Spa, adaptándose con precisión a lo que tu cuerpo necesita en el momento de la cita."
            ],
            benefits: [
              "Combinación personalizada de técnicas terapéuticas",
              "Tratamiento adaptado a tus zonas de mayor molestia",
              "Integración de relajación corporal y reflexología podal",
              "Sesión completa y reparadora de 90 minutos"
            ],
            steps: [
              { step: "01", title: "Consulta Previa", desc: "Selección de las dos técnicas que prefieres combinar." },
              { step: "02", title: "Primera Fase Corporal", desc: "Aplicación de la técnica principal (relajante o descontracturante)." },
              { step: "03", title: "Segunda Fase Específica", desc: "Reflexología podal o terapia puntual según lo elegido." },
              { step: "04", title: "Bebida Incluida", desc: "Degustación de bebida de cortesía." }
            ],
            includes: [
              "Cabina climatizada",
              "Personalización completa de la sesión",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Comunica a tu terapeuta tus zonas de mayor tensión al iniciar.",
            slug: "masaje-combinado-90"
          },
          {
            id: "srv_masaje_holistico_90",
            name: "Masaje Holístico (90 min)",
            duration: "90 min",
            price: 60,
            badge: "Especialidad",
            popular: true,
            image: "./assets/catalog/masaje-holistioco-90-min.webp",
            gallery: [
              "./assets/catalog/masaje-holistioco-90-min.webp",
              "./assets/masaje_m7.jpg",
              "./assets/servicios_spa.jpg"
            ],
            description: "Atiende a cada persona según sus necesidades individuales para restablecer el equilibrio natural. Emplea técnicas de presión y estiramiento del masaje Tailandés, masaje relajante y la digitopresión del Shiatsu en una sola sesión. Especialidad de nuestro centro. Súper recomendado.",
            longDescription: [
              "Con el masaje holístico se atiende a cada persona en función de sus necesidades individuales, por lo que el cuerpo puede restablecer así su propio equilibrio natural.",
              "En el transcurso del masaje holístico se emplean técnicas de presión y estiramiento del masaje Tailandés, masaje relajante y la digitopresión del Shiatsu en una sola sesión. Especialidad insignia de nuestro centro en Miramar. Súper recomendado."
            ],
            benefits: [
              "Fusión única de Masaje Tailandés, Shiatsu y Relajante",
              "Restablecimiento del equilibrio biomecánico y energético",
              "Estiramientos pasivos que mejoran la flexibilidad",
              "Liberación profunda de bloqueos y fatiga acumulada"
            ],
            steps: [
              { step: "01", title: "Diagnóstico Energético", desc: "Alineación y toma de contacto en cabina privada." },
              { step: "02", title: "Digitopresión Shiatsu", desc: "Presiones rítmicas en puntos reflejos clave del cuerpo." },
              { step: "03", title: "Estiramientos Tailandeses", desc: "Movilizaciones asistidas suaves que desbloquean articulaciones." },
              { step: "04", title: "Descanso Zen", desc: "Reposo final acompañado de una bebida no alcohólica." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Aceites puros botánicos",
              "Terapeutas especializadas en técnicas orientales",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "El tratamiento más completo para renovar cuerpo, energía y mente.",
            slug: "masaje-holistico-90-min"
          },
          {
            id: "srv_masaje_cuatro_manos_90",
            name: 'Masaje a 4 Manos" (90 min)',
            duration: "90 min",
            price: 75,
            badge: "Lujo & Sincronía",
            popular: true,
            image: "./assets/catalog/exfoliacion-suprema-y-masaje-a-4-manos-90min.webp",
            gallery: [
              "./assets/catalog/exfoliacion-suprema-y-masaje-a-4-manos-90min.webp",
              "./assets/masaje_m4.jpg",
              "./assets/dsc_6328.jpg"
            ],
            description: "¡Transforma tu bienestar! Deja que el estrés se disuelva mientras dos terapeutas trabajan en perfecta armonía y sincronía para brindarte una experiencia sensorial incomparable.",
            longDescription: [
              "🌿✨ ¡Transforma tu bienestar con nuestro Masaje a 4 Manos! ✨🌿",
              "Deja que el estrés se disuelva mientras dos terapeutas trabajan en perfecta armonía para brindarte una experiencia única. Los movimientos simultáneos y coreografiados desconectan el control consciente del cerebro, permitiendo una relajación que ninguna otra terapia puede igualar."
            ],
            benefits: [
              "Sincronía perfecta de dos terapeutas profesionales",
              "Desconexión mental inmediata e insuperable",
              "Sensación de flotación y estimulación doble simultánea",
              "Experiencia exclusiva de alta gama"
            ],
            steps: [
              { step: "01", title: "Sincronización Dual", desc: "Presentación de las dos terapeutas y respiración armónica." },
              { step: "02", title: "Oleaje a Cuatro Manos", desc: "Maniobras simultáneas en espalda, piernas y brazos." },
              { step: "03", title: "Relajación Completa", desc: "Pases rítmicos en paralelo con aceites templados." },
              { step: "04", title: "Cierre Sensorial", desc: "Bebida de cortesía al concluir en la cabina suite." }
            ],
            includes: [
              "Dos terapeutas tituladas al unísono",
              "Cabina suite privada climatizada",
              "Aceites aromáticos tibios",
              "Bebida no alcohólica: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Reservar con antelación para coordinar el horario de las dos terapeutas.",
            slug: "masaje-a-4-manos-90min"
          },
          {
            id: "srv_masaje_linfodrenante_60",
            name: "Masaje linfodrenante (60 min)",
            duration: "60 min",
            price: 40,
            badge: "Detox",
            image: "./assets/catalog/masaje-linfodrenante.webp",
            gallery: [
              "./assets/catalog/masaje-linfodrenante.webp",
              "./assets/masaje_m5.jpg",
              "./assets/servicios_spa.jpg"
            ],
            description: "Técnica terapéutica diseñada para estimular el sistema linfático, fundamental para la eliminación de toxinas y el equilibrio de líquidos. Movimientos suaves y rítmicos que ayudan a desinflamar y mejorar la circulación.",
            longDescription: [
              "El masaje linfodrenante es una técnica terapéutica diseñada para estimular el sistema linfático, que es fundamental para la eliminación de toxinas y el mantenimiento del equilibrio de líquidos en el cuerpo.",
              "Este tipo de masaje se caracteriza por movimientos suaves y rítmicos, que ayudan a mejorar la circulación de la linfa, un líquido que transporta células inmunitarias y desechos, dejando una sensación inmediata de alivio y ligereza."
            ],
            benefits: [
              "Eliminación natural de toxinas y exceso de líquidos",
              "Alivio notable de piernas pesadas y edemas",
              "Estimulación del sistema inmunitario y linfático",
              "Técnica sumamente suave, indolora y sedante"
            ],
            steps: [
              { step: "01", title: "Apertura Ganglionar", desc: "Estimulación manual suave en las estaciones ganglionares." },
              { step: "02", title: "Maniobras Suaves de Drenaje", desc: "Pases rítmicos muy ligeros que encauzan la linfa." },
              { step: "03", title: "Drenaje en Extremidades", desc: "Maniobras ascendentes en piernas y brazos." },
              { step: "04", title: "Rehidratación", desc: "Té o infusión diurética de cortesía." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Atención especializada",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Ideal tras viajes largos, retención de líquidos o procesos de desintoxicación.",
            slug: "masaje-linfodrenante"
          },
          {
            id: "srv_masaje_velas_60",
            name: "Masaje con velas aromáticas (60 min)",
            duration: "60 min",
            price: 45,
            badge: "Sensorial",
            popular: true,
            image: "./assets/catalog/masaje-con-velas-aromaticas.webp",
            gallery: [
              "./assets/catalog/masaje-con-velas-aromaticas.webp",
              "./assets/masaje_m01.jpg",
              "./assets/dsc_6325.jpg"
            ],
            description: "Combina los beneficios del masaje tradicional con el uso de velas que, al derretirse, se convierten en un aceite caliente natural de soja o abeja, enriquecido con aceites esenciales nutritivos y fragancias terapéuticas.",
            longDescription: [
              "El masaje con velas aromáticas es una técnica de relajación que combina los beneficios del masaje tradicional con el uso de velas que, al derretirse, se convierten en un aceite caliente.",
              "Estas velas están elaboradas con ingredientes naturales, como cera de soja o cera de abeja, y suelen estar infusionadas con aceites esenciales que proporcionan fragancias agradables y propiedades terapéuticas, dejando la piel sedosa y profundamente nutrida."
            ],
            benefits: [
              "Calor agradable del aceite tibio de soja natural",
              "Nutrición e hidratación profunda de la piel",
              "Aromaterapia envolvente que sosiega el sistema nervioso",
              "Experiencia sensorial placentera y calmante"
            ],
            steps: [
              { step: "01", title: "Encendido de la Vela", desc: "Aromaterapia ambiental y fundición suave del aceite natural." },
              { step: "02", title: "Vertido Tibio Controlado", desc: "Aplicación del bálsamo templado directamente sobre la piel." },
              { step: "03", title: "Masaje Relajante Caliente", desc: "Pases fluidos y envolventes por todo el cuerpo." },
              { step: "04", title: "Bebida de Cortesía", desc: "Té, café, jugo o refresco al gusto." }
            ],
            includes: [
              "Velas terapéuticas de cera de soja 100% natural",
              "Cabina climatizada",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Excelente para pieles resecas y para quienes buscan un calor acogedor.",
            slug: "masaje-con-velas-aromaticas"
          },
          {
            id: "srv_masaje_velas_90",
            name: "Masaje con velas aromáticas de 90 min",
            duration: "90 min",
            price: 60,
            badge: "Lujo Cálido",
            image: "./assets/catalog/masaje-con-velas-aromaticas-de-90-min.webp",
            gallery: [
              "./assets/catalog/masaje-con-velas-aromaticas-de-90-min.webp",
              "./assets/masaje_m01.jpg",
              "./assets/dsc_6328.jpg"
            ],
            description: "Experiencia prolongada de 90 minutos con aceite tibio de velas aromáticas naturales, relajación extendida e hidratación cutánea absoluta.",
            longDescription: [
              "Una hora y media de pura calidez y nutrición cutánea. La cera tibia infusionada con esencias florales y botánicas penetra en los tejidos, aliviando las tensiones más persistentes y dejando el cuerpo renovado.",
              "Perfecto para regalar o para una jornada completa de descanso."
            ],
            benefits: [
              "90 minutos de aplicación de aceites tibios naturales",
              "Efecto sedante intenso en musculatura y mente",
              "Piel suave, tersa y perfumada",
              "Desconexión total del estrés diario"
            ],
            steps: [
              { step: "01", title: "Ambientación", desc: "Preparación de la vela botánica aromática." },
              { step: "02", title: "Masaje Corporal Extendido", desc: "Pases lentos y profundos con el bálsamo caliente." },
              { step: "03", title: "Nutrición Cutánea", desc: "Absorción de los nutrientes y vitaminas de la cera de soja." },
              { step: "04", title: "Degustación de Bebida", desc: "Bebida de cortesía incluida al finalizar." }
            ],
            includes: [
              "Vela aromática terapéutica",
              "Cabina privada",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Dejar el aceite en la piel unas horas para aprovechar al máximo sus nutrientes.",
            slug: "masaje-con-velas-aromaticas-de-90-min"
          },
          {
            id: "srv_masaje_piedras_60",
            name: "Masaje con piedras volcánicas (60 min)",
            duration: "60 min",
            price: 45,
            badge: "Calor Geotermal",
            popular: true,
            image: "./assets/catalog/masaje-con-piedras-volcanicas.webp",
            gallery: [
              "./assets/catalog/masaje-con-piedras-volcanicas.webp",
              "./assets/servicios_spa.jpg",
              "./assets/masaje_relax.jpg"
            ],
            description: "Vive total armonía con nuestro masaje con piedras volcánicas. El calor terapéutico de las piedras de basalto penetra en los músculos, liberando tensiones, mejorando la circulación y proporcionando una profunda relajación física y emocional.",
            longDescription: [
              "Vive un momento de total armonía con nuestro masaje con piedras volcánicas.",
              "El calor terapéutico de las piedras de basalto penetra en los músculos, liberando tensiones, mejorando la circulación y proporcionando una profunda relajación física y emocional. Una terapia diseñada para reconectar cuerpo, mente y espíritu."
            ],
            benefits: [
              "Calor penetrante de piedras de basalto naturales",
              "Relajación inmediata de fibras musculares profundas",
              "Activación del flujo sanguíneo y oxigenación",
              "Reequilibrio y armonía física y emocional"
            ],
            steps: [
              { step: "01", title: "Calentamiento Térmico", desc: "Atemperado preciso de las piedras volcánicas en baño de agua." },
              { step: "02", title: "Colocación Estratégica", desc: "Ubicación sobre puntos de tensión en la espalda." },
              { step: "03", title: "Masaje Deslizante", desc: "Pases suaves y firmes utilizando las piedras como instrumento." },
              { step: "04", title: "Descanso Armónico", desc: "Cierre con bebida no alcohólica incluida." }
            ],
            includes: [
              "Piedras volcánicas de basalto pulidas",
              "Aceites esenciales hidratantes",
              "Cabina climatizada",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Especialmente indicado para aliviar dolores articulares y fatiga física.",
            slug: "masaje-con-piedras-volcanicas"
          },
          {
            id: "srv_masaje_piedras_90",
            name: "Masaje con piedras volcánicas 90 min",
            duration: "90 min",
            price: 60,
            badge: "Geotermal Plus",
            image: "./assets/catalog/masaje-con-piedras-volcanicas-90-min.webp",
            gallery: [
              "./assets/catalog/masaje-con-piedras-volcanicas-90-min.webp",
              "./assets/servicios_spa.jpg",
              "./assets/dsc_6328.jpg"
            ],
            description: "Sesión completa de 90 minutos de terapia geotermal con piedras de basalto caliente para una descompresión muscular prolongada y completa.",
            longDescription: [
              "Una hora y media de terapia geotermal continua. El calor sostenido de las piedras volcánicas permite trabajar en profundidad la espalda, hombros, cuello, piernas y pies.",
              "Ideal para personas con sobrecargas crónicas o que buscan un descanso físico total."
            ],
            benefits: [
              "Efecto térmico prolongado y sedación profunda",
              "Descompresión de toda la musculatura del cuerpo",
              "Apertura de la microcirculación tisular",
              "Paz interior y renovación de energías"
            ],
            steps: [
              { step: "01", title: "Preparación Geotermal", desc: "Ajuste térmico de las piedras de basalto." },
              { step: "02", title: "Trabajo Dorsal", desc: "Pases térmicos en espalda y cervicales." },
              { step: "03", title: "Piernas y Extremidades", desc: "Deslizamiento geotermal en brazos y piernas." },
              { step: "04", title: "Bebida de Cortesía", desc: "Degustación de bebida al finalizar." }
            ],
            includes: [
              "Piedras de basalto natural",
              "Cabina privada",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Recomendado para días fríos o tras periodos de intenso esfuerzo laboral.",
            slug: "masaje-con-piedras-volcanicas-90-min"
          },
          {
            id: "srv_reflexologia_podal_60",
            name: "Reflexología podal (60 min)",
            duration: "60 min",
            price: 35,
            badge: "Puntos Reflejos",
            image: "./assets/catalog/reflexologia-podal.webp",
            gallery: [
              "./assets/catalog/reflexologia-podal.webp",
              "./assets/masaje_m5.jpg",
              "./assets/servicios_spa.jpg"
            ],
            description: "Terapia alternativa que se basa en la idea de que ciertas áreas del pie están conectadas a diferentes órganos y sistemas del cuerpo. Al aplicar presión en puntos específicos de los pies, se promueve la salud, se alivia el estrés y se tratan diversas dolencias.",
            longDescription: [
              "La reflexología podal es una terapia alternativa que se basa en la idea de que ciertas áreas del pie están conectadas a diferentes órganos y sistemas del cuerpo.",
              "Según esta práctica, al aplicar presión en puntos específicos de los pies, se puede promover la salud y el bienestar, aliviar el estrés y tratar diversas dolencias. Los principios de la reflexología se fundamentan en la teoría de que los pies son un mapa del cuerpo humano."
            ],
            benefits: [
              "Estimulación refleja de los órganos y sistemas corporales",
              "Alivio del dolor, pesadez e inflamación en pies y tobillos",
              "Reducción directa del estrés y la ansiedad",
              "Equilibrio homeostático y bienestar general"
            ],
            steps: [
              { step: "01", title: "Lavado e Higiene", desc: "Limpieza y toallas calientes en pies." },
              { step: "02", title: "Palpación Refleja", desc: "Localización de puntos sensibles y de bloqueo." },
              { step: "03", title: "Digitopresión Podal", desc: "Maniobras de presión rítmica en la planta, empeine y dedos." },
              { step: "04", title: "Descanso y Bebida", desc: "Bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Cabina confortable climatizada",
              "Cremas y aceites botánicos para pies",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Excelente para personas que pasan muchas horas de pie o caminan frecuentemente.",
            slug: "reflexologia-podal"
          },
          {
            id: "srv_metfit_90",
            name: "METFIT tejido profundo (90 min)",
            duration: "90 min",
            price: 55,
            badge: "Tejido Profundo",
            image: "./assets/catalog/metfit.webp",
            gallery: [
              "./assets/catalog/metfit.webp",
              "./assets/masaje_m02.jpg",
              "./assets/dsc_6328.jpg"
            ],
            description: "Método de tratamiento físico-técnico que engloba una serie de manipulaciones específicas sobre el tejido profundo activando la circulación sanguínea y linfática, reduce los espasmos musculares y ayuda a la prevención de lesiones.",
            longDescription: [
              "Método de tratamiento físico-técnico que engloba una serie de manipulaciones específicas sobre el tejido profundo activando la circulación sanguínea y linfática, reduce los espasmos musculares y ayuda a la prevención de lesiones musculares.",
              "Especialmente concebido para quienes realizan actividad física de alta exigencia, sufren sobrecargas por posturas repetitivas o requieren descompresión de las capas musculares más profundas."
            ],
            benefits: [
              "Manipulación técnica avanzada sobre fascia y tejido profundo",
              "Activación profunda de la circulación sanguínea y linfática",
              "Reducción eficaz de espasmos y contracturas severas",
              "Prevención de lesiones musculares y alivio postural"
            ],
            steps: [
              { step: "01", title: "Valoración Físico-Técnica", desc: "Evaluación de grupos musculares sobrecargados." },
              { step: "02", title: "Calentamiento Miofascial", desc: "Fricción inicial para preparar el tejido profundo." },
              { step: "03", title: "Manipulaciones METFIT", desc: "Técnicas específicas y firmes de liberación muscular." },
              { step: "04", title: "Elongación y Cierre", desc: "Estiramiento suave y bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Cabina privada climatizada",
              "Terapeutas con entrenamiento en técnica METFIT",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Mantener una buena hidratación durante las horas posteriores a la sesión.",
            slug: "metfit"
          },
          {
            id: "srv_masaje_craneal_20",
            name: "Masaje Craneal con alta frecuencia (20 min)",
            duration: "20 min",
            price: 25,
            badge: "Capilar & Craneal",
            image: "./assets/catalog/masaje-craneal-con-alta-frecuencia.webp",
            gallery: [
              "./assets/catalog/masaje-craneal-con-alta-frecuencia.webp",
              "./assets/head_spa.jpg",
              "./assets/dsc_6325.jpg"
            ],
            description: "Mejora el riego sanguíneo al descomprimir los vasos. Reduce los dolores de cabeza, incluyendo migrañas y jaquecas. Ayuda a evitar la somnolencia, acaba con el cansancio, frena la caída del cabello y favorece su crecimiento activo.",
            longDescription: [
              "Masaje craneal con alta frecuencia: Mejora el riego sanguíneo al descomprimir los vasos. Se reducen los dolores de cabeza, incluyendo también las migrañas y jaquecas. Ayuda a evitar la somnolencia. Consigue acabar con la sensación de cansancio.",
              "Además, la corriente de alta frecuencia estimula los folículos capilares, ayudando con la caída del cabello y favoreciendo su crecimiento activo en solo 20 minutos."
            ],
            benefits: [
              "Descompresión de vasos sanguíneos en cuero cabelludo y sienes",
              "Alivio rápido de cefaleas, migrañas y tensión ocular",
              "Efecto energizante que disipa el cansancio y la somnolencia",
              "Estimulación del folículo piloso para frenar la caída del cabello"
            ],
            steps: [
              { step: "01", title: "Masaje Manual Craneal", desc: "Presiones y círculos en cuero cabelludo, sienes y base del cráneo." },
              { step: "02", title: "Pase de Alta Frecuencia", desc: "Aplicación del electrodo capilar para oxigenar y activar la microcirculación." },
              { step: "03", title: "Relajación Cervical", desc: "Descompresión ligera del cuello." },
              { step: "04", title: "Bebida de Cortesía", desc: "Infusión o refresco al concluir." }
            ],
            includes: [
              "Aparatología de alta frecuencia profesional",
              "Cabina privada",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Perfecto para combinar con cualquier masaje corporal o facial.",
            slug: "masaje-craneal-con-alta-frecuencia"
          },
          {
            id: "srv_spa_labial_15",
            name: "Spa labial (15 min)",
            duration: "15 min",
            price: 15,
            badge: "Hidratación Labial",
            image: "./assets/catalog/spa-labial-10-min.webp",
            gallery: [
              "./assets/catalog/spa-labial-10-min.webp",
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg"
            ],
            description: "“No es solo hidratar los labios, es devolverles vida.” Tratamiento de hidratación labial profunda diseñado para labios resecos, opacos o con líneas marcadas. En una sola sesión logramos labios más suaves, nutridos, definidos y rejuvenecidos.",
            longDescription: [
              "“No es solo hidratar los labios, es devolverles vida.”",
              "Nuestro Tratamiento de Hidratación Labial Profunda es una experiencia completa diseñada para labios resecos, opacos o con líneas marcadas. En solo una sesión logramos labios más suaves, nutridos, definidos y visiblemente rejuvenecidos, listos para lucir perfectos incluso sin labial."
            ],
            benefits: [
              "Exfoliación suave de células muertas en zona labial",
              "Nutrición profunda con activos emolientes y vitaminas",
              "Definición y aspecto juvenil sin resequedad",
              "Efecto visible inmediato en apenas 15 minutos"
            ],
            steps: [
              { step: "01", title: "Exfoliación Delicada", desc: "Retiro de pellejitos y células muertas." },
              { step: "02", title: "Mascarilla Nutritiva", desc: "Aplicación de bálsamo regenerador intensivo." },
              { step: "03", title: "Sellado Hidratante", desc: "Fórmula protectora de larga duración." },
              { step: "04", title: "Cortesía", desc: "Bebida de bienvenida o despedida incluida." }
            ],
            includes: [
              "Productos labiales cosméticos de alta pureza",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Excelente adición rápida a cualquier tratamiento facial.",
            slug: "spa-labial-10-min"
          },
          {
            id: "srv_tarjeta_regalo",
            name: "Tarjeta de Regalo",
            duration: "Personalizado",
            price: 50,
            badge: "Regalo Especial",
            image: "./assets/catalog/tarjeta-de-regalo-q.webp",
            gallery: [
              "./assets/catalog/tarjeta-de-regalo-q.webp",
              "./assets/servicios_spa.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            description: "Tarjeta Regalo sin costo adicional de emisión. Regala libertad para elegir: tu agasajado puede hacer un depósito o seleccionar el servicio de spa de su preferencia.",
            longDescription: [
              "Regala una experiencia inolvidable de descanso y bienestar en Momentos Spa Habana.",
              "Con nuestra Tarjeta Regalo, la persona especial puede seleccionar el masaje, tratamiento facial o paquete de spa que prefiera, coordinando su cita en el momento que más le convenga."
            ],
            benefits: [
              "El regalo perfecto para cumpleaños, aniversarios o agradecimientos",
              "Validez flexible para coordinar la cita previa",
              "Personalizable con dedicatoria especial",
              "Atención VIP garantizada en cabinas de Miramar"
            ],
            steps: [
              { step: "01", title: "Selección del Monto o Servicio", desc: "Elige el servicio o crédito deseado." },
              { step: "02", title: "Emisión Personalizada", desc: "Envío digital o entrega física de la tarjeta." },
              { step: "03", title: "Reserva del Homenajeado", desc: "Coordinación fácil vía WhatsApp." },
              { step: "04", title: "Experiencia Spa", desc: "Disfrute pleno con bebida de cortesía incluida." }
            ],
            includes: [
              "Tarjeta regalo digital o física con presentación de lujo",
              "Asesoramiento personalizado para el destinatario"
            ],
            recommendations: "Contáctanos directamente por WhatsApp para coordinar los datos del beneficiario.",
            slug: "tarjeta-de-regalo-q"
          }
        ]
      }
    ]
  },
  {
    id: "tratamientos-faciales",
    title: "Tratamientos Faciales",
    subtitle: "Todo para el cuidado, renovación e hidratación profunda de tu piel",
    icon: "Heart",
    badge: "Piel Radiante",
    subcategories: [
      {
        id: "faciales",
        name: "Cuidado y Salud Facial",
        description: "Renovación celular, nutrición y luminosidad para todo tipo de cutis",
        services: [
          {
            id: "srv_masaje_facial_hidratacion_30",
            name: "Masaje facial de Hidratacion (30 min)",
            duration: "30 min",
            price: 25,
            badge: "Express",
            image: "./assets/catalog/hidratacion-de-30min.webp",
            gallery: [
              "./assets/catalog/hidratacion-de-30min.webp",
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg"
            ],
            description: "Se aplica exfoliante facial para uniformar la piel, eliminar impurezas y dar más suavidad en la piel del rostro. Con cremas y un suave masaje relajante logramos mayor hidratación, luminosidad, dando un aspecto más joven y fresco.",
            longDescription: [
              "Se aplica exfoliante facial para uniformar la piel, eliminar impurezas y dar más suavidad en la piel del rostro.",
              "Con la aplicación de cremas y un suave masaje relajante logramos mayor hidratación, luminosidad, dando un aspecto más joven y fresco en solo media hora de cuidado experto."
            ],
            benefits: [
              "Eliminación de impurezas superficiales mediante exfoliación suave",
              "Hidratación inmediata con cremas regeneradoras",
              "Luminosidad y lozanía en la piel del rostro",
              "Relajación de los músculos faciales y expresión serena"
            ],
            steps: [
              { step: "01", title: "Limpieza Previa", desc: "Retiro de polución y preparación cutánea." },
              { step: "02", title: "Exfoliante Suave", desc: "Unificación de la textura y remoción de células muertas." },
              { step: "03", title: "Masaje Facial Hidratante", desc: "Maniobras ascendentes con emulsión nutritiva." },
              { step: "04", title: "Bebida de Cortesía", desc: "Té, agua, café, jugo o refresco incluido." }
            ],
            includes: [
              "Cabina climatizada",
              "Cosméticos hidratantes hipoalergénicos",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Recomendado como mantenimiento quincenal para mantener el rostro resplandeciente.",
            slug: "hidratacion-de-30min"
          },
          {
            id: "srv_facial_hidratacion_profunda_60",
            name: "Facial de Hidratación profunda (60 min)",
            duration: "60 min",
            price: 40,
            badge: "Nutrición Intensa",
            popular: true,
            image: "./assets/catalog/facial-hidratante.webp",
            gallery: [
              "./assets/catalog/facial-hidratante.webp",
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg"
            ],
            description: "Consiste en renovar, nutrir e hidratar desde las capas más profundas. Obtenemos un rostro más luminoso y con una textura mucho más suave y tersa. Tener una piel deshidratada trae consigo un aspecto de piel cansada y poco flexible.",
            longDescription: [
              "La hidratación facial es un tratamiento que consiste en renovar, nutrir e hidratar desde las capas más profundas.",
              "Con este tratamiento obtenemos un rostro más luminoso y con una textura mucho más suave y tersa. Tener una piel deshidratada trae consigo un aspecto de piel cansada y poco flexible; este protocolo devuelve el agua y la vitalidad a las células dérmicas."
            ],
            benefits: [
              "Nutrición e hidratación profunda en capas dérmicas",
              "Recuperación de la elasticidad, tersura y frescura",
              "Combate la opacidad y el aspecto de cansancio en la piel",
              "Textura aterciopelada y brillo natural saludable"
            ],
            steps: [
              { step: "01", title: "Diagnóstico Cutáneo", desc: "Evaluación del nivel de resequedad y sensibilidad." },
              { step: "02", title: "Higiene y Exfoliación", desc: "Preparación de los poros para máxima absorción." },
              { step: "03", title: "Velo Hidratante & Masaje", desc: "Penetración de principios activos y sueros emolientes." },
              { step: "04", title: "Protección y Cortesía", desc: "Sellado dérmico y bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Cabina facial privada climatizada",
              "Ampolletas y mascarillas de hidratación profunda",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Ideal antes de eventos especiales o para reparar la piel tras exposición solar.",
            slug: "facial-hidratante"
          },
          {
            id: "srv_facial_antiedad_60",
            name: "Facial anti - edad (60 min)",
            duration: "60 min",
            price: 45,
            badge: "Rejuvenecedor",
            popular: true,
            image: "./assets/catalog/facial-con-ventosas.webp",
            gallery: [
              "./assets/catalog/facial-con-ventosas.webp",
              "./assets/facial_original.jpg",
              "./assets/dsc_6328.jpg"
            ],
            description: "Estimula la circulación sanguínea, favorece la desintoxicación de la piel, reduce la hinchazón, promueve la renovación celular, suaviza las arrugas y líneas finas, alivia la tensión muscular y estimula la producción de colágeno, dejando la piel firme, tonificada y luminosa.",
            longDescription: [
              "Duración: 1 hora. Estimula la circulación sanguínea, favorece la desintoxicación de la piel, reduce la hinchazón, promueve la renovación celular, suaviza las arrugas y líneas finas.",
              "Alivia la tensión de los músculos faciales, estimula la producción natural de colágeno y elastina y deja la piel con un aspecto notablemente más firme, tonificado y luminoso."
            ],
            benefits: [
              "Suaviza líneas de expresión y arrugas de tensión",
              "Estimula la síntesis de colágeno y la firmeza tisular",
              "Drenaje facial que disminuye bolsas e hinchazón",
              "Tono facial más uniforme, despierto y revitalizado"
            ],
            steps: [
              { step: "01", title: "Limpieza Antiedad", desc: "Preparación suave de rostro, cuello y escote." },
              { step: "02", title: "Estimulación Circulatoria", desc: "Masaje reafirmante y técnicas descongestivas." },
              { step: "03", title: "Mascarilla Tensora Colágeno", desc: "Nutrición con antioxidantes y activos reafirmantes." },
              { step: "04", title: "Cierre & Bebida", desc: "Crema protectora y bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Cosmética antiedad con péptidos y colágeno",
              "Cabina privada",
              "Bebida no alcohólica: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Apto para todo tipo de piel que busque frenar el envejecimiento prematuro.",
            slug: "facial-con-ventosas"
          },
          {
            id: "srv_limpieza_facial_profunda_60",
            name: "Limpieza facial profunda (60 min)",
            duration: "60 min",
            price: 40,
            badge: "Piel Pura",
            image: "./assets/catalog/limpieza-profunda-x.webp",
            gallery: [
              "./assets/catalog/limpieza-profunda-x.webp",
              "./assets/facial_original.jpg",
              "./assets/dsc_6325.jpg"
            ],
            description: "Mejora la salud y la apariencia del cutis. Este tratamiento elimina los puntos negros y las células muertas, con lo que se consigue que la piel respire y absorba mejor los tratamientos cosméticos o de medicina estética.",
            longDescription: [
              "Mejorar la salud y la apariencia del cutis. Este tratamiento elimina los puntos negros y las células muertas, con lo que se consigue que la piel respire y absorba mejor los tratamientos cosméticos o de medicina estética.",
              "Un protocolo higiénico esencial que purifica los poros, equilibra el sebo y devuelve la luminosidad perdida por la polución y el paso de los días."
            ],
            benefits: [
              "Extracción higiénica de comedones y puntos negros",
              "Oxigenación celular y eliminación de células muertas",
              "Piel limpia, fresca y libre de impurezas",
              "Máxima receptividad a cremas y tratamientos posteriores"
            ],
            steps: [
              { step: "01", title: "Doble Limpieza", desc: "Desmaquillado y purificación superficial." },
              { step: "02", title: "Apertura de Poros", desc: "Vaporización suave para facilitar la extracción sin lastimar." },
              { step: "03", title: "Extracción & Alta Frecuencia", desc: "Retiro de impurezas y desinfección bactericida de alta frecuencia." },
              { step: "04", title: "Mascarilla Calmante & Bebida", desc: "Sellado de poros y bebida no alcohólica incluida." }
            ],
            includes: [
              "Aparatología bactericida de alta frecuencia",
              "Mascarilla descongestiva de arcillas o aloe",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Se sugiere realizar cada 30 días para conservar la salud de los poros.",
            slug: "limpieza-profunda-x"
          }
        ]
      }
    ]
  },
  {
    id: "tratamientos-corporales",
    title: "Tratamientos Corporales",
    subtitle: "Técnicas terapéuticas y estéticas para renovar, tonificar y aliviar tu cuerpo",
    icon: "Award",
    badge: "Bienestar Integral",
    subcategories: [
      {
        id: "corporales",
        name: "Terapias Corporales",
        description: "Maderoterapia, termoterapia, envolturas de parafina y terapias ancestrales",
        services: [
          {
            id: "srv_parafina_manos_pies_45",
            name: "Parafina para manos y pies (45 min)",
            duration: "45 min",
            price: 25,
            badge: "Nutrición Extrema",
            image: "./assets/catalog/parafina-para-manos-y-pies-45-min.webp",
            gallery: [
              "./assets/catalog/parafina-para-manos-y-pies-45-min.webp",
              "./assets/manicura_orig.jpg",
              "./assets/pedicura_orig.jpg"
            ],
            description: "✨ Manos y pies suaves, hidratados y rejuvenecidos ✨ Disfruta de nuestro tratamiento de parafina terapéutica, ideal para nutrir profundamente la piel, aliviar resequedad y relajar articulaciones.",
            longDescription: [
              "✨ Manos y pies suaves, hidratados y rejuvenecidos ✨",
              "Disfruta de nuestro tratamiento de parafina terapéutica, ideal para nutrir profundamente la piel, aliviar resequedad y relajar articulaciones. El calor de la parafina crea una barrera oclusiva que sella la hidratación y alivia la rigidez en dedos y tobillos."
            ],
            benefits: [
              "Hidratación profunda y duradera en manos y pies",
              "Suaviza la piel y mejora visiblemente su textura",
              "Ayuda a aliviar dolores articulares y rigidez",
              "Estimula la circulación y aporta relajación inmediata"
            ],
            steps: [
              { step: "01", title: "Limpieza y Exfoliación", desc: "Preparación de la piel de manos y pies." },
              { step: "02", title: "Inmersión en Parafina Tibia", desc: "Baño térmico en parafina cosmética purificada." },
              { step: "03", title: "Tiempo de Pose Térmica", desc: "Envoltura en guantes y botines térmicos para fijar nutrientes." },
              { step: "04", title: "Retiro y Masaje", desc: "Retiro suave, masaje hidratante y bebida no alcohólica." }
            ],
            includes: [
              "Parafina de alta calidad cosmética",
              "Botines y manoplas térmicas",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Excelente para personas con piel agrietada, artritis o resequedad invernal.",
            slug: "parafina-para-manos-y-pies-45-min"
          },
          {
            id: "srv_maderoterapia_corporal_75",
            name: "Maderoterapia corporal localizada (75 min)",
            duration: "75 min",
            price: 45,
            badge: "Modelador",
            popular: true,
            image: "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
            gallery: [
              "./assets/catalog/maderoterapia-corporal-localizada-75min.webp",
              "./assets/maderoterapia.jpg",
              "./assets/masaje_m5.jpg"
            ],
            description: "Técnica de masaje terapéutico que utiliza diferentes instrumentos de madera natural para moldear el cuerpo, reducir la celulitis, reafirmar la piel y mejorar la circulación sanguínea y linfática.",
            longDescription: [
              "La maderoterapia es una técnica de masaje terapéutico, que utiliza diferentes instrumentos de madera natural para moldear el cuerpo, reducir la celulitis, reafirmar la piel y mejorar la circulación sanguínea y linfática.",
              "Mediante copas suecas, rodillos estriados y tablas modeladoras de madera pulida, se rompen los acúmulos grasos y se estimula la elastina sin dañar los tejidos."
            ],
            benefits: [
              "Modelado localizado de abdomen, glúteos, flancos y piernas",
              "Reducción visible de la celulitis y piel de naranja",
              "Reafirmación de los tejidos y tonificación cutánea",
              "Estimulación del drenaje linfático natural"
            ],
            steps: [
              { step: "01", title: "Diagnóstico Localizado", desc: "Definición de las zonas prioritarias a moldear." },
              { step: "02", title: "Aceites Reductores", desc: "Aplicación de emulsión natural para facilitar el deslizamiento." },
              { step: "03", title: "Técnica con Maderas", desc: "Uso combinado de rodillos, copas y tablas moldeadoras." },
              { step: "04", title: "Drenaje Final & Bebida", desc: "Pases de vaciado linfático y bebida no alcohólica incluida." }
            ],
            includes: [
              "Instrumentos de maderoterapia de madera noble",
              "Aceites tensores reafirmantes",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Se sugiere un ciclo de varias sesiones para resultados óptimos y beber mucha agua.",
            slug: "maderoterapia-corporal-localizada-75min"
          },
          {
            id: "srv_exfoliante_corporal_30",
            name: "Exfoliante corporal (30 min)",
            duration: "30 min",
            price: 30,
            badge: "Renovación Cutánea",
            image: "./assets/catalog/exfoliante-corporal-z.webp",
            gallery: [
              "./assets/catalog/exfoliante-corporal-z.webp",
              "./assets/masaje_m5.jpg",
              "./assets/dsc_6325.jpg"
            ],
            description: "Producto de cuidado de la piel para eliminar las células muertas, mejorar la circulación y proporcionar una sensación de suavidad. Popular por sus propiedades antioxidantes y antiinflamatorias que ayudan a tonificar la piel.",
            longDescription: [
              "El exfoliante corporal es un tratamiento para eliminar las células muertas de la piel, mejorar la circulación y proporcionar una sensación de extrema suavidad.",
              "Los beneficios incluyen exfoliación efectiva con grano natural, estimulación de la circulación sanguínea, propiedades antioxidantes que protegen del daño ambiental e hidratación con aceites naturales."
            ],
            benefits: [
              "Exfoliación homogénea y efectiva de células muertas",
              "Estimulación de la circulación y oxigenación celular",
              "Aporte de antioxidantes y suavidad sedosa al tacto",
              "Deja la piel perfectamente preparada para recibir masajes o sol"
            ],
            steps: [
              { step: "01", title: "Preparación Cutánea", desc: "Acomodación en cabina y humidificación suave." },
              { step: "02", title: "Aplicación Exfoliante", desc: "Masaje en círculos con granos naturales de café y aceites." },
              { step: "03", title: "Retiro en Ducha", desc: "Enjuague templado revitalizante." },
              { step: "04", title: "Emulsión Final & Bebida", desc: "Loción corporal nutritiva y bebida de cortesía." }
            ],
            includes: [
              "Exfoliante natural con antioxidantes",
              "Acceso a ducha privada climatizada",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Excelente previo a un bronceado parejo o como complemento a un masaje relajante.",
            slug: "exfoliante-corporal-z"
          },
          {
            id: "srv_termoterapia_parafina_60",
            name: "Termoterapia con manta térmica y parafina (1 hora)",
            duration: "60 min",
            price: 45,
            badge: "Detox Térmico",
            image: "./assets/catalog/envoltura-corporal-con-parafina.webp",
            gallery: [
              "./assets/catalog/envoltura-corporal-con-parafina.webp",
              "./assets/servicios_spa.jpg",
              "./assets/masaje_relax.jpg"
            ],
            description: "Tratamiento estético que utiliza calor controlado con fines terapéuticos y cosméticos. Estimula la circulación, relaja los músculos y favorece la eliminación de toxinas. La parafina corporal sella la humedad y suaviza la piel.",
            longDescription: [
              "La termoterapia con mantas térmicas es un tratamiento estético que utiliza calor controlado con fines terapéuticos y cosméticos. Este calor estimula la circulación sanguínea, relaja los músculos y favorece la eliminación de toxinas del cuerpo.",
              "La parafina corporal sella la humedad en la piel, alivia dolores articulares y aporta una extrema flexibilidad y suavidad a los tejidos corporales."
            ],
            benefits: [
              "Eliminación profunda de toxinas mediante sudoración controlada",
              "Alivio muscular y articular por calor terapéutico",
              "Hidratación intensiva y regeneración cutánea con parafina",
              "Sensación de ligereza corporal y descanso reconfortante"
            ],
            steps: [
              { step: "01", title: "Aplicación de Parafina", desc: "Extensión del bálsamo templado en las zonas deseadas." },
              { step: "02", title: "Envoltura en Manta Térmica", desc: "Sesión de calor controlado y relajación profunda." },
              { step: "03", title: "Retiro y Limpieza", desc: "Retiro de residuos y toallas templadas." },
              { step: "04", title: "Hidratación & Bebida", desc: "Té o infusión de cortesía al concluir." }
            ],
            includes: [
              "Manta térmica estética con regulación de temperatura",
              "Parafina corporal purificada",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Beber abundantes líquidos antes y después de la sesión.",
            slug: "envoltura-corporal-con-parafina"
          },
          {
            id: "srv_terapia_ventosas_75",
            name: "Terapia con ventosas (75 min)",
            duration: "75 min",
            price: 40,
            badge: "Alivio Ancestral",
            image: "./assets/catalog/terapia-con-ventosas.webp",
            gallery: [
              "./assets/catalog/terapia-con-ventosas.webp",
              "./assets/masaje_m01.jpg",
              "./assets/masaje_m02.jpg"
            ],
            description: "Método curativo ancestral que alivia el dolor de espalda, cuello y articulaciones. Utiliza la succión para aumentar el flujo sanguíneo, levantar el tejido muscular y reducir la tensión y rigidez muscular crónica.",
            longDescription: [
              "La ventosaterapia (cupping) es un método curativo ancestral que puede aliviar el dolor de espalda, cuello, dolores de cabeza y otros problemas. Utiliza la succión para jalar la piel y aumentar el flujo sanguíneo a la zona afectada.",
              "Hoy en día, los profesionales lo utilizan para aliviar el dolor y las lesiones musculoesqueléticas como torceduras, contracturas severas y sobrecargas de espalda. La succión ayuda a estirar el tejido muscular, reduciendo la rigidez de forma inmediata."
            ],
            benefits: [
              "Alivio inmediato de la rigidez muscular profunda",
              "Aumento sustancial del flujo sanguíneo a zonas afectadas",
              "Descompresión de adherencias en el tejido conectivo",
              "Eficaz contra dolores lumbares y cervicales crónicos"
            ],
            steps: [
              { step: "01", title: "Evaluación Muscular", desc: "Identificación de los puntos de mayor dolor y rigidez." },
              { step: "02", title: "Colocación de Ventosas", desc: "Succión precisa en zonas anatómicas diana." },
              { step: "03", title: "Técnica Fija y Móvil", desc: "Deslizamiento y estiramiento miofascial con succión controlada." },
              { step: "04", title: "Reposo y Bebida", desc: "Infusión o bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Ventosas terapéuticas profesionales",
              "Aceites lubricantes calmantes",
              "Cabina privada",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Pueden quedar marcas circulares temporales que desaparecen naturalmente en pocos días.",
            slug: "terapia-con-ventosas"
          },
          {
            id: "srv_auriculoterapia_20",
            name: "Auriculoterapia (20 min)",
            duration: "20 min",
            price: 20,
            badge: "Equilibrio",
            image: "./assets/catalog/auriculoterapia.webp",
            gallery: [
              "./assets/catalog/auriculoterapia.webp",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6325.jpg"
            ],
            description: "Terapia refleja en el pabellón auricular. Beneficios: control del dolor (cefaleas, migrañas, dolor muscular), apoyo ante estrés y ansiedad, equilibrio digestivo y mejora del bienestar general.",
            longDescription: [
              "La auriculoterapia es una técnica de la medicina tradicional que estimula puntos específicos en el pabellón auricular para regular funciones fisiológicas del organismo.",
              "Beneficios: Control del dolor (cefaleas, migrañas, dolor muscular), problemas emocionales (estrés, ansiedad), trastornos digestivos, respiratorios y metabólicos, y mejora general del bienestar."
            ],
            benefits: [
              "Alivio de dolores de cabeza, migrañas y tensión muscular",
              "Regulación del estrés, nerviosismo y ansiedad",
              "Apoyo para el control del apetito y descanso nocturno",
              "Procedimiento no invasivo, seguro y rápido (20 min)"
            ],
            steps: [
              { step: "01", title: "Inspección Auricular", desc: "Localización de los puntos reflejos a tratar." },
              { step: "02", title: "Desinfección y Estímulo", desc: "Presión y colocación de microesferas adhesivas." },
              { step: "03", title: "Instrucciones de Autoestímulo", desc: "Pautas sencillas para activar los puntos en casa." },
              { step: "04", title: "Cortesía", desc: "Bebida no alcohólica incluida al terminar." }
            ],
            includes: [
              "Microesferas y parches auriculares hipoalergénicos",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Los puntos colocados continúan actuando durante los días siguientes.",
            slug: "auriculoterapia"
          }
        ]
      }
    ]
  },
  {
    id: "paquetes-parejas",
    title: "Paquetes en Parejas",
    subtitle: "Experiencias sensoriales y románticas privadas para compartir momentos inolvidables",
    icon: "Heart",
    badge: "Para Dos",
    subcategories: [
      {
        id: "parejas",
        name: "Experiencias Compartidas",
        description: "Cabina suite privada para dos con hidromasaje, brindis y atenciones exclusivas",
        services: [
          {
            id: "srv_escapada_chicas",
            name: "Escapada de chicas (2 horas y 20 min aprox.)",
            duration: "2h 20 min",
            price: 90,
            badge: "Amigas & Relax",
            image: "./assets/catalog/escapada-de-chicas-2-horas-y-20-min.webp",
            gallery: [
              "./assets/catalog/escapada-de-chicas-2-horas-y-20-min.webp",
              "./assets/masaje_pareja.jpg",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            description: "Incluye: Aromaterapia, Masaje combinado a su elección por 90 min, Duchas climatizadas, Bañera de hidromasaje 45 min, Copa de vino y Aperitivo para acompañar.",
            longDescription: [
              "La experiencia perfecta para compartir entre amigas o familiares en un entorno de complicidad y desconexión absoluta.",
              "Incluye: 🪷 Aromaterapia personalizada, 💆🏻‍♀️ Masaje combinado a su elección por 90 min, 🚿 Duchas climatizadas, 🛀🏻 Bañera de hidromasaje 45 min, 🍷 Copa de vino y 🫒 Aperitivo para acompañar."
            ],
            benefits: [
              "Cabina y bañera de hidromasaje privadas para el grupo",
              "90 minutos de masaje combinado a elección de cada persona",
              "Aromaterapia ambiental y copas de vino con aperitivo",
              "Desconexión total y celebración compartida"
            ],
            steps: [
              { step: "01", title: "Bienvenida & Aromaterapia", desc: "Recepción con aromas seleccionados." },
              { step: "02", title: "Masaje Combinado de 90 min", desc: "Sesión corporal según preferencia individual." },
              { step: "03", title: "Hidromasaje en Bañera 45 min", desc: "Tiempo en jacuzzi con microburbujas y duchas." },
              { step: "04", title: "Brindis con Vino y Aperitivo", desc: "Copa de vino y picadera incluida para acompañar." }
            ],
            includes: [
              "Cabina suite privada",
              "Bañera de hidromasaje por 45 min",
              "Copa de vino y aperitivo para cada asistente",
              "Bebida no alcohólica incluida: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Reservar con anticipación para coordinar el horario del grupo.",
            slug: "escapada-de-chicas-2-horas-y-20-min"
          },
          {
            id: "srv_ritual_amor_pareja",
            name: "Ritual de Amor & Relax en Pareja (3 horas aprox.)",
            duration: "3h aprox.",
            price: 130,
            badge: "Experiencia Romántica",
            popular: true,
            image: "./assets/catalog/masaje-en-pareja-2-horas.webp",
            gallery: [
              "./assets/catalog/masaje-en-pareja-2-horas.webp",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/pareja_sauna.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            description: "La experiencia incluye: Ambiente romántico con decoración y velas aromáticas, Duchas dobles privadas, Exfoliante corporal 20 min, Masaje relajante en pareja con piedras volcánicas 30 min, Facial hidratante 60 min, Bañera de hidromasaje privada 45 min, Copa de vino y aperitivo.",
            longDescription: [
              "🌹 La experiencia incluye: 🕯️🪷 Ambiente romántico con decoración especial y velas aromáticas que envuelven el espacio; 🚿 Duchas dobles privadas; 🍀 Exfoliante corporal 20 min; 💆‍♂️💆‍♀️ Masaje relajante en pareja con piedras volcánicas por 30 min; ✨ Facial hidratante de 60 min para revitalizar la piel; 🛁 Bañera de hidromasaje privada 45 min; 🍷 Copa de vino y aperitivo para acompañar.",
              "Ideal para aniversarios, escapadas románticas, fechas especiales o simplemente para regalarse tiempo de calidad juntos. Porque el amor también se cuida… y se celebra."
            ],
            benefits: [
              "3 horas completas de spa exclusivo para dos",
              "Masaje con piedras volcánicas y facial hidratante incluidos",
              "Bañera de hidromasaje privada con ambientación a la luz de las velas",
              "Copa de vino y aperitivo de cortesía"
            ],
            steps: [
              { step: "01", title: "Bienvenida Romántica", desc: "Ambiente con velas aromáticas y duchas dobles privadas." },
              { step: "02", title: "Exfoliante Corporal (20 min)", desc: "Renovación cutánea y suavidad para ambos." },
              { step: "03", title: "Masaje Piedras Volcánicas & Facial", desc: "30 min de piedras volcánicas + 60 min de facial hidratante." },
              { step: "04", title: "Hidromasaje, Vino y Aperitivo", desc: "45 min en jacuzzi privado con copas de vino." }
            ],
            includes: [
              "Cabina doble privada decorada románticamente",
              "Duchas dobles y jacuzzi privado 45 min",
              "Copa de vino y aperitivo para dos",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "El paquete favorito para sorprender a tu pareja en ocasiones memorables.",
            slug: "masaje-en-pareja-2-horas"
          },
          {
            id: "srv_refugio_zen",
            name: "Refugio Zen (4 horas y 20 min aprox.)",
            duration: "4h 20 min",
            price: 160,
            badge: "Máxima Inmersión",
            popular: true,
            image: "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
            gallery: [
              "./assets/catalog/masaje-relajante-en-pareja-60min.webp",
              "./assets/masaje_pareja.jpg",
              "./assets/pareja_sauna.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            description: "Incluye: Aceites esenciales aromáticos a su elección, Masaje descontracturante combinado con piedras calientes 2 horas, Limpieza facial 60 min, Exfoliante corporal 20 min, Duchas climatizadas 15 min, Bañera de hidromasaje 45 min, Copa de vino al gusto y Aperitivo para acompañar.",
            longDescription: [
              "Nuestra experiencia de spa más completa y prolongada. Más de 4 horas dedicadas al bienestar holístico integral.",
              "Incluye: 🪷 Aceites esenciales a su elección; 🙏🏻 Masaje descontracturante combinado con piedras calientes por 2 horas completas; 💆🏻‍♀️ Limpieza facial de 60 min; 🌻 Exfoliante corporal 20 min; 🚿 Duchas climatizadas 15 min; 🛀🏻 Bañera de hidromasaje 45 min; 🍷 Copa de vino al gusto y 🫒 Aperitivo para acompañar."
            ],
            benefits: [
              "4 horas y 20 minutos de retiro y cuidado absoluto",
              "2 horas completas de masaje descontracturante con piedras calientes",
              "Limpieza facial profunda y exfoliación corporal",
              "Bañera de hidromasaje, brindis con vino y picadera de cortesía"
            ],
            steps: [
              { step: "01", title: "Apertura & Exfoliación", desc: "Exfoliante corporal 20 min y ducha climatizada." },
              { step: "02", title: "Masaje Descontracturante y Piedras (2h)", desc: "Dos horas de terapia profunda con calor geotermal." },
              { step: "03", title: "Limpieza Facial (60 min)", desc: "Tratamiento facial completo higienizante." },
              { step: "04", title: "Hidromasaje 45 min y Brindis", desc: "Tiempo en jacuzzi con copa de vino y aperitivo." }
            ],
            includes: [
              "Cabina VIP exclusiva por más de 4 horas",
              "Bañera de hidromasaje y duchas climatizadas",
              "Copa de vino y aperitivos gourmet",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Reservar con anticipación; acudir sin prisas para disfrutar de cada etapa.",
            slug: "masaje-relajante-en-pareja-60min"
          },
          {
            id: "srv_plan_romantico",
            name: "Plan Romántico (2 horas aprox.)",
            duration: "2h aprox.",
            price: 95,
            badge: "Intimidad & Vino",
            image: "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
            gallery: [
              "./assets/catalog/ritual-eternal-velvet-3-horas.webp",
              "./assets/masaje_pareja.jpg",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            description: "Celebren el amor con una experiencia privada y sensorial para parejas. Incluye: Masaje con velas aromáticas 30 min, Facial iluminador 30 min, Bañera de hidromasaje 45 min, Decoración romántica, Botella de vino a su elección y Aperitivo para acompañar al vino.",
            longDescription: [
              "Celebren el amor con una experiencia privada y sensorial para parejas.",
              "Incluye: 🕯️ Masaje con velas aromáticas 30 min; 💆🏻‍♀️ Facial iluminador 30 min; 🛁 Bañera de hidromasaje 45 min; 🌹 Decoración romántica con pétalos; 🍾 Botella de vino entera a su elección; 🫒 Aperitivo para acompañar al vino. Cupos limitados · Reservación anticipada."
            ],
            benefits: [
              "Botella completa de vino a elección incluida",
              "Masaje sensual con velas aromáticas tibias",
              "Facial iluminador para ambos",
              "Bañera de hidromasaje privada con ambientación romántica"
            ],
            steps: [
              { step: "01", title: "Bienvenida Romántica", desc: "Cabina ambientada con pétalos y velas." },
              { step: "02", title: "Masaje con Velas (30 min)", desc: "Aceite tibio y aromaterapia envolvente." },
              { step: "03", title: "Facial Iluminador (30 min)", desc: "Nutrición y frescura para el rostro de ambos." },
              { step: "04", title: "Jacuzzi 45 min con Botella de Vino", desc: "Inmersión privada brindando con la botella elegida y aperitivo." }
            ],
            includes: [
              "Botella de vino entera a elección",
              "Decoración romántica con pétalos de rosa",
              "Bañera de hidromasaje 45 min y aperitivo",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Indícanos si celebran aniversario o fecha especial al reservar.",
            slug: "ritual-eternal-velvet-3-horas"
          },
          {
            id: "srv_escape_romantico_spa",
            name: "Escape Romántico spa (1 hora y 45 min aprox.)",
            duration: "1h 45 min",
            price: 80,
            badge: "Desconexión",
            image: "./assets/catalog/tarde-de-spa-para-dos-3-horas-y-30-min.webp",
            gallery: [
              "./assets/catalog/tarde-de-spa-para-dos-3-horas-y-30-min.webp",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/masaje_pareja.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            description: "Incluye: Aromaterapia, Duchas climatizadas, Bañera de hidromasaje 45 min, Masaje relajante en cervical, espalda y piernas 30 min, Copa de vino y aperitivo para acompañar.",
            longDescription: [
              "Una pausa perfecta para desconectar de la rutina en pareja.",
              "Incluye: ❤️ Aromaterapia; 🚿 Duchas climatizadas; 🛁 Bañera de hidromasaje 45 min; 💆🏻 Masaje relajante en cervical, espalda y piernas 30 min; 🍷🫒 Copa de vino y aperitivo para acompañar."
            ],
            benefits: [
              "Combinación ideal de hidromasaje y masaje relajante",
              "Duchas climatizadas y aromaterapia envolvente",
              "Copa de vino y aperitivo incluidos para ambos",
              "Duración ágil y reconfortante de hora y 45 minutos"
            ],
            steps: [
              { step: "01", title: "Aromaterapia & Duchas", desc: "Acomodación y preparación térmica." },
              { step: "02", title: "Hidromasaje en Bañera 45 min", desc: "Baño en jacuzzi con microburbujas para dos." },
              { step: "03", title: "Masaje Relajante de 30 min", desc: "Fricciones en espalda, cuello y piernas." },
              { step: "04", title: "Brindis con Vino y Aperitivo", desc: "Momento íntimo con copas de vino y aperitivos." }
            ],
            includes: [
              "Bañera de hidromasaje privada 45 min",
              "Copa de vino y picadera para cada uno",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Excelente opción para regalarse un respiro entre semana.",
            slug: "tarde-de-spa-para-dos-3-horas-y-30-min"
          }
        ]
      }
    ]
  },
  {
    id: "salon-belleza",
    title: "Salón de Belleza",
    subtitle: "Peluquería profesional, tratamientos capilares, pedicura spa y depilación corporal",
    icon: "Sparkles",
    badge: "Estilo & Cuidado",
    subcategories: [
      {
        id: "cabello",
        name: "Peluquería y Cuidado Capilar",
        description: "Lavado, peinado, corte, color, mechas y tratamientos especializados para tu cabello",
        services: [
          {
            id: "srv_lavar_peinar_corto",
            name: "Lavar y peinar cabello corto",
            duration: "45 min",
            price: 15,
            badge: "Cabello Corto",
            image: "./assets/catalog/lavar-y-peinar-1-hora.webp",
            gallery: [
              "./assets/catalog/lavar-y-peinar-1-hora.webp",
              "./assets/peluqueria_orig.jpg",
              "./assets/peluqueria2_orig.jpg"
            ],
            description: "Incluye: Análisis del cuero cabelludo, shampoo específico, acondicionador, secado de estilo. Todos nuestros servicios incluyen una bebida no alcohólica.",
            longDescription: [
              "Servicio profesional para cabello corto que realza la forma y el volumen de tu corte.",
              "Incluye: Análisis del cuero cabelludo, lavado con shampoo específico a tu necesidad, acondicionador humectante y secado de estilo profesional con cepillado."
            ],
            benefits: [
              "Evaluación personalizada del estado del cuero cabelludo",
              "Uso de productos específicos profesionales",
              "Secado y acabado de estilo definido",
              "Bebida no alcohólica de cortesía incluida"
            ],
            steps: [
              { step: "01", title: "Análisis Capilar", desc: "Diagnóstico rápido del estado del cuero cabelludo." },
              { step: "02", title: "Lavado Profesional", desc: "Shampoo específico y masaje limpiador." },
              { step: "03", title: "Acondicionado y Enjuague", desc: "Nutrición para desenredo suave." },
              { step: "04", title: "Secado y Peinado", desc: "Modelado con secador profesional." }
            ],
            includes: [
              "Lavacabezas profesional ergonómico",
              "Shampoo y acondicionador de línea profesional",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Ideal antes de reuniones, salidas o para el cuidado semanal de tu cabello.",
            slug: "lavar-y-peinar-1-hora"
          },
          {
            id: "srv_lavar_peinar_medio",
            name: "Lavar y peinar cabello Medio",
            duration: "50 min",
            price: 18,
            badge: "Cabello Medio",
            image: "./assets/catalog/lavar-y-peinar-cabello-medio.webp",
            gallery: [
              "./assets/catalog/lavar-y-peinar-cabello-medio.webp",
              "./assets/peluqueria2_orig.jpg",
              "./assets/peluqueria_orig.jpg"
            ],
            description: "Incluye: Análisis del cuero cabelludo, shampoo específico, acondicionador, secado de estilo. Todos nuestros servicios incluyen una bebida no alcohólica.",
            longDescription: [
              "Cuidado y peinado para melenas de largo medio. Devolvemos el movimiento, el brillo y la soltura natural a tu cabello.",
              "Incluye: Diagnóstico capilar, lavado purificante, acondicionamiento y secado con cepillo para un acabado impecable."
            ],
            benefits: [
              "Brillo y control del frizz en melenas medianas",
              "Movimiento y volumen natural sin apelmazar",
              "Productos capilares de alta gama",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Evaluación Capilar", desc: "Selección del shampoo idóneo para tu textura." },
              { step: "02", title: "Lavado y Acondicionamiento", desc: "Masaje capilar en lavacabezas." },
              { step: "03", title: "Secado de Estilo", desc: "Cepillado y moldeado profesional." },
              { step: "04", title: "Cierre y Bebida", desc: "Toque final de brillo y bebida de cortesía." }
            ],
            includes: [
              "Productos profesionales de salón",
              "Bebida no alcohólica: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Recomendado para mantener las puntas sanas y el peinado perfecto.",
            slug: "lavar-y-peinar-cabello-medio"
          },
          {
            id: "srv_lavar_peinar_largo",
            name: "Lavar y peinar largo",
            duration: "60 min",
            price: 22,
            badge: "Cabello Largo",
            image: "./assets/catalog/lavar-y-peinar.webp",
            gallery: [
              "./assets/catalog/lavar-y-peinar.webp",
              "./assets/peluqueria3_orig.jpg",
              "./assets/peluqueria_orig.jpg"
            ],
            description: "Incluye: Análisis del cuero cabelludo, shampoo específico, acondicionador, secado de estilo. Todos nuestros servicios incluyen una bebida no alcohólica.",
            longDescription: [
              "Tratamiento de lavado y peinado para cabellos largos que requieren dedicación y destreza en el cepillado.",
              "Nutrimos de raíz a puntas para que luzcas una melena radiante, sedosa y protegida del calor del secador."
            ],
            benefits: [
              "Desenredo suave sin quebrar la fibra capilar",
              "Brillo deslumbrante y sellado de cutículas",
              "Estilo con movimiento y definición duradera",
              "Atención personalizada con bebida de cortesía"
            ],
            steps: [
              { step: "01", title: "Diagnóstico Capilar", desc: "Evaluación de puntas y raíces." },
              { step: "02", title: "Lavado Profundo", desc: "Doble champú y acondicionador rico en nutrientes." },
              { step: "03", title: "Secado por Secciones", desc: "Brushing profesional con cepillo térmico." },
              { step: "04", title: "Finalización", desc: "Sérum antifrizz y bebida no alcohólica." }
            ],
            includes: [
              "Gama completa de productos profesionales",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Ideal para ocasiones especiales o eventos.",
            slug: "lavar-y-peinar"
          },
          {
            id: "srv_lavar_peinar_extralargo",
            name: "Lavar y peinar cabello extra largo",
            duration: "75 min",
            price: 28,
            badge: "Extra Largo",
            image: "./assets/catalog/lavar-y-peinar-cabello-extra-largo.webp",
            gallery: [
              "./assets/catalog/lavar-y-peinar-cabello-extra-largo.webp",
              "./assets/peluqueria3_orig.jpg",
              "./assets/salon_belleza.jpg"
            ],
            description: "Incluye: Análisis del cuero cabelludo, shampoo específico, acondicionador, secado de estilo. Todos nuestros servicios incluyen una bebida no alcohólica.",
            longDescription: [
              "Cuidado experto para melenas extra largas que demandan productos concentrados y tiempo de secado técnico.",
              "Garantizamos suavidad extrema, desenredo completo y un secado pulido con movimiento fluido."
            ],
            benefits: [
              "Tratamiento meticuloso en toda la extensión del cabello",
              "Protección térmica de medios a puntas",
              "Melena ligera, desenredada y brillante",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Evaluación y Desenredo Previo", desc: "Preparación cuidadosa de la fibra capilar." },
              { step: "02", title: "Lavado y Acondicionamiento Intenso", desc: "Masaje de cuero cabelludo y nutrición profunda." },
              { step: "03", title: "Secado Técnico Completo", desc: "Moldeado con secador profesional por particiones." },
              { step: "04", title: "Cierre & Brillo", desc: "Gotas de brillo y bebida incluida." }
            ],
            includes: [
              "Productos profesionales de alta fijación y brillo",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Permite lucir tu melena extra larga con máximo esplendor.",
            slug: "lavar-y-peinar-cabello-extra-largo"
          },
          {
            id: "srv_corte_cabello",
            name: "Corte de cabello",
            duration: "45 min",
            price: 20,
            badge: "Renueva tu Estilo",
            popular: true,
            image: "./assets/catalog/lavado-corte-y-peinado-de-cabello-para-mujeres.webp",
            gallery: [
              "./assets/catalog/lavado-corte-y-peinado-de-cabello-para-mujeres.webp",
              "./assets/peluqueria2_orig.jpg",
              "./assets/salon_belleza.jpg"
            ],
            description: "✂️ ¡Renueva tu estilo hoy! ¿Lista para un cambio de look que te haga sentir increíble? Ven a Momentos Spa y deja que nuestros expertos transformen tu estilo con cortes modernos, precisos y personalizados.",
            longDescription: [
              "✂️ ¡Renueva tu estilo hoy! ✂️✨",
              "¿Lista para un cambio de look que te haga sentir increíble? Ven a Momentos Spa y deja que nuestros estilistas transformen tu estilo con cortes que favorecen la armonía de tus facciones y respetan la caída natural de tu cabello."
            ],
            benefits: [
              "Asesoría de imagen previa según tus rasgos faciales",
              "Técnicas de corte precisas y modernas",
              "Saneamiento de puntas abiertas y volumen equilibrado",
              "Bebida de cortesía incluida"
            ],
            steps: [
              { step: "01", title: "Asesoría de Estilo", desc: "Definición del largo y forma que deseas." },
              { step: "02", title: "Lavado Previo", desc: "Higiene y acondicionamiento capilar." },
              { step: "03", title: "Corte Técnico de Precisión", desc: "Realización del corte con tijeras profesionales." },
              { step: "04", title: "Secado y Retoque", desc: "Comprobación del acabado en seco y bebida de cortesía." }
            ],
            includes: [
              "Tijeras y herramientas profesionales de precisión",
              "Lavado previo de cortesía",
              "Bebida no alcohólica: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Trae fotos de referencia si buscas un cambio de look radical.",
            slug: "lavado-corte-y-peinado-de-cabello-para-mujeres"
          },
          {
            id: "srv_antifrizz_felps",
            name: "Tratamiento Anti- Frizz FELPS( 1oz )",
            duration: "60-90 min",
            price: 35,
            badge: "Control Frizz",
            image: "./assets/catalog/tratamiento-anti-frizz-felps.webp",
            gallery: [
              "./assets/catalog/tratamiento-anti-frizz-felps.webp",
              "./assets/peluqueria3_orig.jpg",
              "./assets/salon_belleza.jpg"
            ],
            description: "Incluye: Aplicación del producto, gorro térmico, lavado y peinado. El tratamiento FELPS profesional controla el frizz, reduce el volumen y alisa el cabello. El precio es por 1 onza.",
            longDescription: [
              "El tratamiento FELPS profesional es la solución definitiva para controlar el frizz rebelde, reducir el volumen excesivo y aportar un liso disciplinado con brillo espejo.",
              "Incluye: Aplicación técnica del producto, tiempo de pose con gorro térmico para fijar los activos, lavado y peinado final de secado. (Precio por 1 onza de producto)."
            ],
            benefits: [
              "Control drástico y duradero del encrespamiento",
              "Reducción del volumen capilar rebelde",
              "Cabello suave, disciplinado y fácil de peinar",
              "Brillo intenso y protección contra la humedad de La Habana"
            ],
            steps: [
              { step: "01", title: "Lavado Purificante", desc: "Apertura de cutículas capilares." },
              { step: "02", title: "Aplicación FELPS", desc: "Distribución mecha a mecha de la fórmula profesional." },
              { step: "03", title: "Gorro Térmico", desc: "Activación por calor controlado para penetración de activos." },
              { step: "04", title: "Lavado, Secado y Peinado", desc: "Sellado del tratamiento y bebida no alcohólica incluida." }
            ],
            includes: [
              "Producto FELPS original profesional (1 oz)",
              "Uso de gorro térmico profesional",
              "Lavado y peinado final",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "La cantidad de onzas requeridas depende del largo y volumen de tu cabello.",
            slug: "tratamiento-anti-frizz-felps"
          },
          {
            id: "srv_scalp_balance_detox",
            name: "Experiencia Capilar “Scalp Balance Detox”(60'-90')",
            duration: "60-90 min",
            price: 45,
            badge: "Detox Capilar",
            popular: true,
            image: "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
            gallery: [
              "./assets/catalog/experiencia-capilar-scalp-balance-detox-60-90.webp",
              "./assets/head_spa.jpg",
              "./assets/peluqueria_orig.jpg"
            ],
            description: "Ideal para combatir exceso de grasa, descamación y sensibilidad. Incluye: Análisis del cuero cabelludo, exfoliación craneal detox, lavado con shampoo bivalente, ampolletas de tratamiento, masaje craneal terapéutico y alta frecuencia capilar.",
            longDescription: [
              "Ideal para combatir exceso de grasa, descamación y sensibilidad mientras se brinda una experiencia relajante y restauradora.",
              "Incluye: 🔬 Análisis profesional del cuero cabelludo; ✨ Exfoliación craneal detox; 🧴 Lavado con shampoo específico bivalente; 💧 Ampolletas de tratamiento capilar; 💆‍♂️ Masaje craneal terapéutico; ⚡ Alta frecuencia capilar oxigenante.",
              "Beneficios: Disminuye la caspa y descamación, equilibra grasa y resequedad, purifica y calma, estimula la circulación y aporta una frescura inigualable."
            ],
            benefits: [
              "Diagnóstico y análisis visual del cuero cabelludo",
              "Exfoliación profunda que remueve impurezas y células muertas",
              "Tratamiento con ampolletas concentradas y masaje terapéutico",
              "Alta frecuencia que oxigena y estimula el crecimiento saludable"
            ],
            steps: [
              { step: "01", title: "Análisis con Micro-Cámara", desc: "Evaluación de descamación, sensibilidad y grasa." },
              { step: "02", title: "Exfoliación Detox Craneal", desc: "Limpieza profunda de folículos y cuero cabelludo." },
              { step: "03", title: "Lavado Bivalente & Ampolletas", desc: "Equilibrio de raíz y nutrición de puntas secas." },
              { step: "04", title: "Masaje & Alta Frecuencia", desc: "Estimulación bactericida y bebida de cortesía." }
            ],
            includes: [
              "Aparatología de alta frecuencia capilar",
              "Ampolletas y exfoliantes específicos detox",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Duración estimada de 60 a 90 minutos de puro alivio y oxigenación capilar.",
            slug: "experiencia-capilar-scalp-balance-detox-60-90"
          },
          {
            id: "srv_color_1oz",
            name: "Color (1 Oz )",
            duration: "60-90 min",
            price: 25,
            badge: "Coloración",
            image: "./assets/catalog/balayage-mechas-premium.webp",
            gallery: [
              "./assets/catalog/balayage-mechas-premium.webp",
              "./assets/salon_belleza.jpg",
              "./assets/peluqueria_orig.jpg"
            ],
            description: "Tu cabello merece atención exclusiva y personalizada. Transforma tu look con tonos que reflejen tu estilo y personalidad, con técnicas profesionales y productos de calidad.",
            longDescription: [
              "Tu cabello merece atención exclusiva y personalizada. Transforma tu look con tonos que reflejen tu estilo y personalidad, con técnicas profesionales.",
              "Trabajamos con tintes de alta cobertura de canas y fidelidad de reflejos, protegiendo la fibra capilar durante el proceso químico. (Precio por 1 onza de tinte)."
            ],
            benefits: [
              "Cobertura perfecta de canas y reflejos vibrantes",
              "Asesoría personalizada en colorimetría",
              "Fórmulas con acondicionadores protectores",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Prueba de Color y Asesoría", desc: "Selección del tono adecuado a tu tono de piel." },
              { step: "02", title: "Aplicación Meticulosa", desc: "Distribución uniforme del color en raíces o medios." },
              { step: "03", title: "Tiempo de Acción", desc: "Fijación del pigmento bajo control visual." },
              { step: "04", title: "Lavado Sellador y Peinado", desc: "Emulsión post-color y bebida de cortesía." }
            ],
            includes: [
              "Tinte profesional de salón (1 oz)",
              "Lavado y acondicionador post-color",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "El número de onzas dependerá del largo y densidad de tu cabello.",
            slug: "balayage-mechas-premium"
          },
          {
            id: "srv_decoloracion_1oz",
            name: "Decoloración ( 1oz )",
            duration: "60-90 min",
            price: 30,
            badge: "Aclarado Técnico",
            image: "./assets/catalog/decoloracion-o-mechas-30-g.webp",
            gallery: [
              "./assets/catalog/decoloracion-o-mechas-30-g.webp",
              "./assets/salon_belleza.jpg",
              "./assets/peluqueria2_orig.jpg"
            ],
            description: "Trabajamos con los mejores productos para que tu cabello se mantenga sano y con brillo. Transforma tu look con tonos que reflejen tu estilo.",
            longDescription: [
              "Trabajamos con los mejores productos para que tu cabello se mantenga sano y con brillo. Transforma tu look con tonos que reflejen tu estilo.",
              "Aclaración técnica controlada que respeta los puentes disulfuro del cabello para conseguir fondos de decoloración limpios sin quiebre. (Precio por 1 onza)."
            ],
            benefits: [
              "Decolorantes con protectores de fibra capilar",
              "Aclarado parejo y sin manchas",
              "Conservación del brillo y elasticidad del cabello",
              "Bebida de cortesía incluida"
            ],
            steps: [
              { step: "01", title: "Diagnóstico de Resistencia", desc: "Comprobación de la fuerza del cabello." },
              { step: "02", title: "Preparación de la Mezcla", desc: "Fórmula aclarante equilibrada." },
              { step: "03", title: "Monitoreo Técnico", desc: "Control minuto a minuto del aclarado." },
              { step: "04", title: "Enjuague Neutralizante", desc: "Lavado acondicionador y bebida incluida." }
            ],
            includes: [
              "Polvo decolorante profesional premium",
              "Tratamiento acondicionador",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Recomendado para mechas, balayage o fondos de color claros.",
            slug: "decoloracion-o-mechas-30-g"
          },
          {
            id: "srv_tratamientos_capilares",
            name: "Tratamientos capilares",
            duration: "45-60 min",
            price: 25,
            badge: "Reparación",
            image: "./assets/catalog/tratamientos-capilares-4t.webp",
            gallery: [
              "./assets/catalog/tratamientos-capilares-4t.webp",
              "./assets/peluqueria3_orig.jpg",
              "./assets/salon_belleza.jpg"
            ],
            description: "Un tratamiento capilar ayuda a frenar la caída del cabello, ya que favorece la regeneración capilar. Con él se puede fortalecer, dar más brillo y reparar el daño. (El precio varía según el largo del cabello).",
            longDescription: [
              "Un tratamiento capilar ayuda a frenar la caída del cabello, ya que favorece la regeneración capilar.",
              "Con él se puede fortalecer la cutícula, aportar elasticidad, recuperar el brillo y sellar las puntas dañadas por químicos o calor. El precio varía según el largo y cantidad de producto utilizado."
            ],
            benefits: [
              "Fortalecimiento de la fibra capilar debilitada",
              "Estimulación de la regeneración y control de caída",
              "Brillo deslumbrante y tacto sedoso inmediato",
              "Bebida de cortesía incluida"
            ],
            steps: [
              { step: "01", title: "Diagnóstico Capilar", desc: "Identificación de resequedad, daño químico o debilidad." },
              { step: "02", title: "Lavado Preparatorio", desc: "Shampoo que optimiza la penetración de la mascarilla." },
              { step: "03", title: "Aplicación y Pose Térmica", desc: "Mascarilla reconstructora con calor activo." },
              { step: "04", title: "Enjuague y Secado", desc: "Sellado de la hebra y bebida de cortesía." }
            ],
            includes: [
              "Mascarillas y cócteles capilares reconstructores",
              "Bebida no alcohólica: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Excelente para cabellos procesados con tintes o decoloraciones.",
            slug: "tratamientos-capilares-4t"
          }
        ]
      },
      {
        id: "manicura-pedicura",
        name: "Manicura y Pedicura",
        description: "Cuidado higiénico, estético e hidratación profunda para pies y manos",
        services: [
          {
            id: "srv_pedicura_spa_90",
            name: "Pedicura spa ( 1 hora y 30 min )",
            duration: "1h 30 min",
            price: 25,
            badge: "Pies Perfectos",
            popular: true,
            image: "./assets/catalog/pedicura-spa-1-hora.webp",
            gallery: [
              "./assets/catalog/pedicura-spa-1-hora.webp",
              "./assets/pedicura_orig.jpg",
              "./assets/pedicura2_orig.jpg"
            ],
            description: "Incluye: 👣 Pedicura regular, 🌻 Exfoliante para pies, 🕯️ Parafina para una hidratación más profunda. (No incluye esmalte).",
            longDescription: [
              "Una experiencia de descanso y embellecimiento total para tus pies.",
              "Incluye: 👣 Pedicura regular completa con limado y arreglo de cutículas; 🌻 Exfoliante para pies que retira impurezas y asperezas; 🕯️ Parafina térmica para una hidratación mucho más profunda y sedosidad duradera. (No incluye esmalte)."
            ],
            benefits: [
              "Arreglo higiénico completo de uñas y cutículas",
              "Exfoliación que remueve asperezas en talones y plantas",
              "Parafina tibia que nutre intensamente la piel seca",
              "Descanso y relajación profunda en piernas y pies"
            ],
            steps: [
              { step: "01", title: "Remojo y Pedicura Regular", desc: "Ablandamiento, corte anatómico y limado de uñas." },
              { step: "02", title: "Exfoliante para Pies", desc: "Masaje exfoliante que retira células muertas." },
              { step: "03", title: "Baño de Parafina", desc: "Inmersión en parafina caliente para sellar hidratación." },
              { step: "04", title: "Retiro y Masaje Final", desc: "Masaje relajante y bebida no alcohólica de cortesía." }
            ],
            includes: [
              "Kit higiénico desinfectado",
              "Parafina terapéutica",
              "Bebida no alcohólica de cortesía: Té, agua, Café, jugo y refresco"
            ],
            recommendations: "Tus pies quedarán descansados y completamente rejuvenecidos.",
            slug: "pedicura-spa-1-hora"
          },
          {
            id: "srv_anticallosidad_pies",
            name: "Tratamiento anti callosidad para los pies",
            duration: "45 min",
            price: 20,
            badge: "Suavidad Podal",
            image: "./assets/catalog/manicura-spa.webp",
            gallery: [
              "./assets/catalog/manicura-spa.webp",
              "./assets/pedicura2_orig.jpg",
              "./assets/pedicura_orig.jpg"
            ],
            description: "Los callos y callosidades son capas duras y gruesas de piel que aparecen cuando la piel intenta protegerse de la fricción o presión. Este tratamiento especializado ablanda y retira las durezas devolviendo la suavidad a la planta de tus pies.",
            longDescription: [
              "Los callos y las callosidades son capas duras y gruesas de piel que aparecen cuando la piel intenta protegerse de la fricción o la presión constante del calzado.",
              "Este tratamiento podológico cosmético utiliza fórmulas queratolíticas seguras y limado técnico para eliminar durezas sin cortar ni lastimar la piel sana, devolviendo una pisada cómoda y ligera."
            ],
            benefits: [
              "Eliminación segura de callosidades y durezas en talones",
              "Alivio del dolor y molestias al caminar",
              "Regeneración de la piel con cremas ricas en urea",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Reblandecimiento Específico", desc: "Aplicación de compresas con activos queratolíticos." },
              { step: "02", title: "Retiro Técnico de Callos", desc: "Desbaste suave de las capas engrosadas." },
              { step: "03", title: "Pulido y Exfoliación", desc: "Suavizado de la superficie podal." },
              { step: "04", title: "Bálsamo Reparador & Bebida", desc: "Crema ultra hidratante y bebida de cortesía." }
            ],
            includes: [
              "Productos especializados anti-callosidades",
              "Instrumental esterilizado",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Recomendado tanto para damas como para caballeros.",
            slug: "manicura-spa"
          }
        ]
      },
      {
        id: "depilacion",
        name: "Servicios de Depilación",
        description: "Depilación profesional con cera tibia en cabina privada higienizada",
        services: [
          {
            id: "srv_depilacion_axilas",
            name: "Depilación de axilas",
            duration: "20 min",
            price: 10,
            badge: "Cera Tibia",
            image: "./assets/catalog/depilacion-de-axilas-5my9n.webp",
            gallery: [
              "./assets/catalog/depilacion-de-axilas-5my9n.webp",
              "./assets/pestanas_orig.jpg",
              "./assets/ojos_orig.jpg"
            ],
            description: "Depilación con cera en axilas. Técnica rápida, higiénica y suave que retira el vello de raíz.",
            longDescription: [
              "Depilación con cera en axilas en cabina privada.",
              "Utilizamos ceras de baja temperatura enriquecidas con agentes calmantes para minimizar el enrojecimiento y dejar la piel suave durante semanas."
            ],
            benefits: [
              "Retiro del vello de raíz para mayor duración",
              "Piel suave sin cortes de afeitadora",
              "Debilitamiento progresivo del vello",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Limpieza Previa", desc: "Desinfección de la zona axilar." },
              { step: "02", title: "Aplicación de Cera Tibia", desc: "Técnica rápida y precisa." },
              { step: "03", title: "Gel Post-Depilatorio", desc: "Calmante de aloe vera para evitar rojeces." },
              { step: "04", title: "Bebida de Cortesía", desc: "Infusión o refresco al terminar." }
            ],
            includes: [
              "Cera desechable de un solo uso",
              "Gel calmante de aloe vera",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "No aplicar desodorante con alcohol inmediatamente después.",
            slug: "depilacion-de-axilas-5my9n"
          },
          {
            id: "srv_depilacion_piernas",
            name: "Depilación de piernas",
            duration: "45 min",
            price: 20,
            badge: "Pierna Completa",
            image: "./assets/catalog/depilacion-de-piernas-geakj.webp",
            gallery: [
              "./assets/catalog/depilacion-de-piernas-geakj.webp",
              "./assets/pestanas_orig.jpg",
              "./assets/ojos_orig.jpg"
            ],
            description: "Depilación con cera de pierna entera. Deja tus piernas impecables, suaves y libres de vello por semanas.",
            longDescription: [
              "Depilación con cera de pierna entera en cabina climatizada.",
              "Elimina el vello desde la raíz en muslos y pantorrillas, asegurando una piel tersa y suave hasta por 4 semanas."
            ],
            benefits: [
              "Pierna entera (muslos, rodillas y pantorrillas)",
              "Arrastre limpio desde la raíz",
              "Piel suave y sedosa al tacto",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Preparación", desc: "Higiene y talco mineral en la piel." },
              { step: "02", title: "Aplicación por Tramos", desc: "Cera tibia extendida de forma homogénea." },
              { step: "03", title: "Retirada Rápida", desc: "Tracción firme y limpia sin dañar la piel." },
              { step: "04", title: "Aceite Calmante & Bebida", desc: "Masaje post-depilatorio y bebida incluida." }
            ],
            includes: [
              "Cera profesional para áreas extensas",
              "Aceite hidratante post-cera",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Evitar exposición solar intensa las primeras 24 horas.",
            slug: "depilacion-de-piernas-geakj"
          },
          {
            id: "srv_depilacion_cejas",
            name: "Depilación Cejas",
            duration: "20 min",
            price: 10,
            badge: "Perfilado",
            image: "./assets/catalog/cejas-u.webp",
            gallery: [
              "./assets/catalog/cejas-u.webp",
              "./assets/ojos_orig.jpg",
              "./assets/pestanas_orig.jpg"
            ],
            description: "Depilación y diseño de cejas con cera y pinzas para realzar la armonía de tu mirada.",
            longDescription: [
              "Depilación y perfilado de cejas profesional.",
              "Definimos el arco y grosor óptimo para enmarcar tu mirada con naturalidad y limpieza impecable."
            ],
            benefits: [
              "Diseño adaptado a las facciones de tu rostro",
              "Retiro preciso con cera y pinza",
              "Mirada limpia, despejada y elegante",
              "Bebida de cortesía"
            ],
            steps: [
              { step: "01", title: "Diseño y Marcaje", desc: "Definición del contorno deseado." },
              { step: "02", title: "Cera Facial", desc: "Retiro del exceso de vello periocular." },
              { step: "03", title: "Retoque con Pinza", desc: "Precisión pelo a pelo." },
              { step: "04", title: "Gel Calmante & Bebida", desc: "Toque descongestivo y bebida de cortesía." }
            ],
            includes: [
              "Cera especial para piel sensible facial",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Ideal para mantener la forma cada 2 a 3 semanas.",
            slug: "cejas-u"
          },
          {
            id: "srv_depilacion_bozo_menton",
            name: "Depilación de Bozo y mentón",
            duration: "20 min",
            price: 10,
            badge: "Facial Delicado",
            image: "./assets/catalog/bozo-y-menton.webp",
            gallery: [
              "./assets/catalog/bozo-y-menton.webp",
              "./assets/ojos_orig.jpg",
              "./assets/pestanas_orig.jpg"
            ],
            description: "Depilación de bozo y mentón con cera suave para piel sensible. Resultados limpios y duraderos.",
            longDescription: [
              "Depilación facial localizada de labio superior (bozo) y mentón.",
              "Elimina la pelusa y vello oscuro de forma delicada, dejando el contorno de la boca limpio y uniforme para el maquillaje."
            ],
            benefits: [
              "Eliminación rápida y eficaz del vello facial",
              "Cera hipoalergénica para no irritar la piel",
              "Piel suave y uniforme al instante",
              "Bebida no alcohólica de cortesía"
            ],
            steps: [
              { step: "01", title: "Higiene Facial", desc: "Preparación de la piel del labio y mentón." },
              { step: "02", title: "Cera Facial Suave", desc: "Aplicación y retirada con técnica delicada." },
              { step: "03", title: "Calmante de Manzanilla", desc: "Descongestión inmediata de la zona." },
              { step: "04", title: "Bebida de Cortesía", desc: "Té o infusión fría incluida." }
            ],
            includes: [
              "Cera facial hipoalergénica de baja temperatura",
              "Bebida no alcohólica de cortesía"
            ],
            recommendations: "Aplicar protector solar al salir a la calle.",
            slug: "bozo-y-menton"
          }
        ]
      }
    ]
  }
];

// Helper aplanado con todos los servicios
export const allServices = categoriesData.flatMap(cat => 
  (cat.subcategories || []).flatMap(sub => 
    (sub.services || []).map(srv => ({
      ...srv,
      categoryId: cat.id,
      categoryTitle: cat.title,
      subcategoryId: sub.id,
      subcategoryName: sub.name
    }))
  )
);

export function getServiceById(idOrSlug) {
  if (!idOrSlug) return null;
  return allServices.find(s => s.id === idOrSlug || s.slug === idOrSlug) || null;
}
