export const categoriesData = [
  {
    "id": "spa-masajes",
    "title": "Spa & Masajes Terapéuticos",
    "subtitle": "Desconexión total, alivio de dolor muscular y reequilibrio de tu energía vital",
    "icon": "Sparkles",
    "badge": "Más Popular",
    "subcategories": [
      {
        "id": "masajes-terapeuticos",
        "name": "Masajes Terapéuticos & Relajantes",
        "description": "Técnicas manuales con aceites esenciales naturales para distender y revitalizar",
        "services": [
          {
            "id": "srv_relajante",
            "name": "Masaje Relajante con Aromaterapia",
            "description": "Masaje suave y continuo con aceites esenciales botánicos que liberan tensiones y calman el sistema nervioso.",
            "duration": "60 min",
            "price": 35,
            "badge": "Esencial",
            "image": "./assets/masaje_relax.jpg",
            "popular": true,
            "longDescription": [
              "El objetivo primordial de nuestro Masaje Relajante con Aromaterapia es desencadenar la secreción natural de endorfinas y serotonina, comúnmente conocidas como las hormonas del bienestar y la felicidad. Mediante maniobras rítmicas, suaves y continuas, se liberan las tensiones acumuladas en la musculatura superficial y el tejido miofascial, mejorando la circulación periférica y disminuyendo radicalmente los niveles de estrés y ansiedad.",
              "En Momentos Spa combinamos aceites botánicos puros extraídos de lavanda, jazmín y eucalipto silvestre, calentados a temperatura corporal. La atmósfera de nuestra cabina climatizada con luz tenue y melodías armónicas te sumerge en un estado de desconexión absoluta del ritmo vertiginoso de la ciudad."
            ],
            "benefits": [
              "Estimulación de la hormona de la felicidad (endorfinas)",
              "Alivio del estrés nervioso, fatiga mental e insomnio",
              "Mejora de la microcirculación y oxigenación tisular",
              "Relajación progresiva de músculos contraídos"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Bienvenida & Test Sensorial",
                "desc": "Selección personalizada del aceite esencial según tu estado anímico y necesidad."
              },
              {
                "step": "02",
                "title": "Compresas Térmicas",
                "desc": "Aplicación de toallas calientes en espalda y pies para inducir vasodilatación."
              },
              {
                "step": "03",
                "title": "Masaje Rítmico de Cuerpo Entero",
                "desc": "Maniobras de deslizamiento continuo desde espalda y cuello hasta extremidades."
              },
              {
                "step": "04",
                "title": "Cierre Aromático & Infusión",
                "desc": "Reposo en cabina con infusión relajante artesanal."
              }
            ],
            "gallery": [
              "./assets/masaje_relax.jpg",
              "./assets/servicios_spa.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Cabina privada climatizada",
              "Aceites botánicos puros",
              "Aromaterapia personalizada",
              "Infusión de bienvenida o copa de vino"
            ],
            "recommendations": "Recomendamos no ingerir comidas copiosas 1 hora antes y permanecer bien hidratado tras la sesión.",
            "slug": "relajante"
          },
          {
            "id": "srv_descontracturante",
            "name": "Masaje Descontracturante Profundo",
            "description": "Enfocado en nudos musculares en espalda, cuello y hombros para disolver contracturas crónicas.",
            "duration": "60 min",
            "price": 40,
            "badge": "Alivio Rápido",
            "image": "./assets/masaje_m01.jpg",
            "popular": true,
            "longDescription": [
              "El Masaje Descontracturante es una técnica de terapia manual avanzada que consiste en emplear maniobras profundas e intensas dirigidas específicamente a las zonas de dolor focalizado. Su objetivo es disolver las contracturas musculares crónicas, desactivar puntos gatillo y restablecer la movilidad y elasticidad de las fibras musculares.",
              "Ideal para personas con molestias posturales en cuello (cervicalgia), hombros y espalda baja (lumbalgia), provocadas por largas jornadas laborales o estrés muscular acumulado. Nuestros terapeutas aplican presión gradual y precisa para devolver el confort biomecánico a tu cuerpo."
            ],
            "benefits": [
              "Eliminación de contracturas musculares y nudos de tensión",
              "Recuperación del rango de movimiento y flexibilidad",
              "Disminución drástica del dolor de cuello, trapecios y lumbares",
              "Liberación de la compresión neuromuscular y mejora de postura"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Palpación y Diagnóstico Muscular",
                "desc": "Identificación de los puntos gatillo y zonas de mayor contractura."
              },
              {
                "step": "02",
                "title": "Calentamiento Miofascial",
                "desc": "Fricciones profundas y aceites analgésicos naturales de romero y alcanfor."
              },
              {
                "step": "03",
                "title": "Descompresión y Presión Focal",
                "desc": "Maniobras intensas de pulgar y codo para liberar las fibras adheridas."
              },
              {
                "step": "04",
                "title": "Estiramiento Pasivo y Relajación",
                "desc": "Elongación suave de la musculatura tratada para evitar rigidez posterior."
              }
            ],
            "gallery": [
              "./assets/masaje_m01.jpg",
              "./assets/servicios_spa.jpg",
              "./assets/masaje_m02.jpg"
            ],
            "includes": [
              "Cabina privada climatizada",
              "Bálsamo terapéutico muscular",
              "Toallas calientes descontracturantes",
              "Infusión revitalizante"
            ],
            "recommendations": "Es normal sentir una ligera sensibilidad muscular en las 24 horas posteriores, seguida de un alivio profundo y duradero.",
            "slug": "descontracturante"
          },
          {
            "id": "srv_deep_tissue",
            "name": "Masaje Tejido Profundo (Deep Tissue)",
            "description": "Presión firme y técnicas miofasciales diseñadas para deportistas y personas con tensión acumulada.",
            "duration": "75 min",
            "price": 45,
            "badge": "Intensivo",
            "image": "./assets/masaje_m02.jpg",
            "longDescription": [
              "El Masaje de Tejido Profundo (Deep Tissue) es una terapia neuromuscular de alta intensidad diseñada para penetrar en las capas más profundas de los músculos y el tejido conectivo fascial. Es la elección preferida por atletas, personas activas o quienes padecen dolores crónicos derivados de sobrecargas continuadas.",
              "A través de trazos lentos y presiones concentradas con nudillos, antebrazos y codos, se deshacen las adherencias fibrosas que limitan la circulación sanguínea y provocan inflamación dolorosa. Notarás una descompresión total en todo el aparato locomotor."
            ],
            "benefits": [
              "Desactivación de adherencias fasciales profundas",
              "Mejora del rendimiento muscular y recuperación post-esfuerzo",
              "Aumento significativo del flujo sanguíneo a tejidos profundos",
              "Alivio de sobrecargas causadas por el deporte o actividad exigente"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Evaluación Biomecánica",
                "desc": "Revisión de grupos musculares tensos y antecedentes de actividad física."
              },
              {
                "step": "02",
                "title": "Activación Tisular",
                "desc": "Preparación mediante fricción rápida para oxigenar las fibras."
              },
              {
                "step": "03",
                "title": "Trabajo Profundo Miofascial",
                "desc": "Técnicas intensas aplicadas a ritmo pausado pero con máxima firmeza."
              },
              {
                "step": "04",
                "title": "Drenaje de Toxinas & Cierre",
                "desc": "Maniobras de descarga y aplicación de gel frío tonificante."
              }
            ],
            "gallery": [
              "./assets/masaje_m02.jpg",
              "./assets/masaje_m01.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Cabina privada",
              "Geles desinflamatorios naturales",
              "Toallas térmicas",
              "Bebida isotónica o infusión botánica"
            ],
            "recommendations": "Bebe abundante agua después del tratamiento para favorecer la eliminación de las toxinas liberadas de los tejidos.",
            "slug": "deep_tissue"
          },
          {
            "id": "srv_piedras",
            "name": "Masaje con Piedras Volcánicas Calientes",
            "description": "Piedras de basalto a temperatura terapéutica que inducen hiperemia y relajan los músculos en profundidad.",
            "duration": "75 min",
            "price": 50,
            "badge": "Exclusivo",
            "image": "./assets/servicios_spa.jpg",
            "popular": true,
            "longDescription": [
              "Una milenaria terapia geotermal que combina el masaje terapéutico manual con el poder calorífico de las piedras volcánicas de basalto pulidas a mano. Las piedras se calientan cuidadosamente en un baño térmico y se colocan estratégicamente sobre los centros energéticos (chakras) a lo largo de la columna vertebral y extremidades.",
              "El calor continuo de las piedras penetra profundamente en la masa muscular, dilatando los vasos sanguíneos y provocando un alivio sedante inmediato que las manos solas tardarían mucho más en conseguir. Una experiencia holística insuperable."
            ],
            "benefits": [
              "Calor terapéutico que penetra hasta 4 cm en la masa muscular",
              "Sedación profunda del sistema nervioso autónomo",
              "Desintoxicación cutánea por efecto de la hiperemia térmica",
              "Reequilibrio energético integral cuerpo-mente"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Colocación Energética de Piedras",
                "desc": "Disposición de piedras calientes sobre los centros de energía clave."
              },
              {
                "step": "02",
                "title": "Unción con Aceites Esenciales",
                "desc": "Extensión de aceites aromáticos de sándalo y almendras dulces."
              },
              {
                "step": "03",
                "title": "Masaje Deslizante con Piedras Calientes",
                "desc": "Maniobras de presión fluida utilizando las piedras pulidas como extensión de las manos."
              },
              {
                "step": "04",
                "title": "Descanso Armónico & Infusión",
                "desc": "Momento de reposo para asimilar el calor residual con copa de vino o té."
              }
            ],
            "gallery": [
              "./assets/servicios_spa.jpg",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Piedras volcánicas de basalto natural",
              "Aceites botánicos templados",
              "Cabina climatizada zen",
              "Copa de vino o infusión artesanal"
            ],
            "recommendations": "Ideal para días de fatiga acumulada, temporadas frías o como regalo especial de relajación sublime.",
            "slug": "piedras"
          },
          {
            "id": "srv_cuatro_manos",
            "name": "Masaje a Cuatro Manos en Sincronía",
            "description": "Dos terapeutas trabajando al unísono en una coreografía relajante que duplica el estímulo placentero.",
            "duration": "60 min",
            "price": 70,
            "badge": "Experiencia VIP",
            "image": "./assets/masaje_m4.jpg",
            "longDescription": [
              "El Masaje a Cuatro Manos es la máxima expresión del lujo y la coordinación terapéutica. Dos masajistas profesionales expertas trabajan de manera simultánea en una coreografía perfectamente sincronizada sobre tu cuerpo, siguiendo ritmos idénticos y presiones armonizadas.",
              "Al recibir estímulos táctiles dobles simultáneamente en diferentes zonas del cuerpo, el cerebro no puede controlar ni anticipar los movimientos, lo que obliga a la mente a abandonar todo control y entrar en un estado de meditación y trance relajante imposible de alcanzar con un masaje convencional."
            ],
            "benefits": [
              "Desconexión cerebral total y superación del control consciente",
              "Efecto relajante multiplicado por dos en la mitad de tiempo",
              "Sensación de ligereza corporal y flotación absoluta",
              "Experiencia sensorial y exclusiva de máxima categoría spa"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Ritual de Bienvenida Dual",
                "desc": "Sincronización respiratoria guiada por ambas terapeutas."
              },
              {
                "step": "02",
                "title": "Apertura en Espejo",
                "desc": "Movimientos simultáneos en espalda y piernas con aceites tibios de jazmín."
              },
              {
                "step": "03",
                "title": "Coreografía Cuatro Manos",
                "desc": "Oleaje continuo de pases largos y presiones equilibradas en todo el cuerpo."
              },
              {
                "step": "04",
                "title": "Cierre Sensorial con Copa de Vino",
                "desc": "Tiempo de reposo asistido para volver al ritmo natural con total plenitud."
              }
            ],
            "gallery": [
              "./assets/masaje_m4.jpg",
              "./assets/masaje_relax.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Dos terapeutas especializadas",
              "Cabina suite privada",
              "Aceites aromáticos selectos",
              "Copa de vino de bienvenida"
            ],
            "recommendations": "Reserva con al menos 24 horas de antelación debido a la asignación simultánea de dos terapeutas.",
            "slug": "cuatro_manos"
          },
          {
            "id": "srv_drenaje",
            "name": "Drenaje Linfático Manual",
            "description": "Técnica suave que estimula la circulación de la linfa, reduce la retención de líquidos y desinflama.",
            "duration": "60 min",
            "price": 40,
            "badge": "Detox",
            "image": "./assets/masaje_m5.jpg",
            "longDescription": [
              "El Drenaje Linfático Manual (método Vodder) es una modalidad de masaje terapéutico que se caracteriza por maniobras extremadamente suaves, precisas, rítmicas e indoloras. Su propósito es estimular y activar el flujo de los vasos linfáticos, facilitando la evacuación del líquido intersticial y las moléculas de desecho.",
              "Es el tratamiento de referencia médica y estética para combatir la retención de líquidos, piernas pesadas, edemas, celulitis edematosa y como coadyuvante esencial en procesos postoperatorios."
            ],
            "benefits": [
              "Reducción visible de la hinchazón y retención de líquidos",
              "Sensación inmediata de ligereza y descanso en piernas",
              "Depuración del sistema inmunitario y drenaje de toxinas",
              "Ideal para tratamientos postquirúrgicos y prevención de edemas"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Apertura de Ganglios Linfáticos",
                "desc": "Bombeos suaves en cadenas ganglionares del cuello, axilas e ingles."
              },
              {
                "step": "02",
                "title": "Maniobras de Deslizamiento Suave",
                "desc": "Círculos fijos, pases en espiral y bombeos rítmicos muy superficiales."
              },
              {
                "step": "03",
                "title": "Reabsorción Tisular",
                "desc": "Canalización del líquido estancado hacia las vías principales de drenaje."
              },
              {
                "step": "04",
                "title": "Reposo y Rehidratación",
                "desc": "Ingesta de agua purificada e infusión diurética de cola de caballo."
              }
            ],
            "gallery": [
              "./assets/masaje_m5.jpg",
              "./assets/masaje_relax.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "includes": [
              "Cabina climatizada",
              "Aceites hipoalergénicos",
              "Infusión diurética drenante",
              "Atención especializada"
            ],
            "recommendations": "Se sugiere llevar ropa cómoda y no ajustada después del drenaje para facilitar la circulación.",
            "slug": "drenaje"
          }
        ]
      },
      {
        "id": "circuito-termal",
        "name": "Circuito Termal & Hidroterapia",
        "description": "El poder regenerador del calor, el vapor y el agua en Miramar",
        "services": [
          {
            "id": "srv_circuito_completo",
            "name": "Circuito Termal Completo",
            "description": "Acceso a sauna seco terapéutico, jacuzzi con hidrojets y sales minerales, más ducha de sensaciones.",
            "duration": "90 min",
            "price": 45,
            "badge": "Purificante",
            "image": "./assets/pareja_sauna.jpg",
            "popular": true,
            "longDescription": [
              "El Circuito Termal de Momentos Spa es un recorrido hidroterápico privado que combina las bondades milenarias del calor seco de la sauna finlandesa, el baño de vapor humidificado y la inmersión efervescente en nuestro jacuzzi de hidromasaje a temperatura regulada.",
              "Este contraste térmico e hídrico desintoxica los poros de la piel mediante sudoración controlada, estimula la circulación coronaria y periférica, relaja las articulaciones y prepara los tejidos musculares para cualquier tratamiento posterior en un ambiente de total privacidad y confort."
            ],
            "benefits": [
              "Eliminación profunda de toxinas mediante sudoración térmica",
              "Apertura de vías respiratorias y purificación cutánea",
              "Efecto de vasodilatación que oxigena todo el cuerpo",
              "Desconexión total en un entorno íntimo y silencioso"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Sauna Finlandesa",
                "desc": "Sesión de calor seco purificador para inducir la transpiración."
              },
              {
                "step": "02",
                "title": "Ducha de Contraste",
                "desc": "Regadera de contraste térmico para tonificar el sistema vascular."
              },
              {
                "step": "03",
                "title": "Baño de Hidromasaje en Jacuzzi",
                "desc": "Chorros subacuáticos de presión regulable para masajear espalda y piernas."
              },
              {
                "step": "04",
                "title": "Zona de Relax & Copa de Vino",
                "desc": "Descanso en tumbonas ergonómicas con copa de vino y frutos secos."
              }
            ],
            "gallery": [
              "./assets/pareja_sauna.jpg",
              "./assets/pareja_jacuzzi.jpg",
              "./assets/circuito_termal.jpg"
            ],
            "includes": [
              "Uso privado de sauna y jacuzzi",
              "Toallas, albornoces y zapatillas desechables",
              "Copa de vino o cóctel de bienvenida",
              "Bandeja de cortesía"
            ],
            "recommendations": "Traer traje de baño. Disponemos de vestuarios privados con duchas y secador.",
            "slug": "circuito_completo"
          },
          {
            "id": "srv_jacuzzi_sales",
            "name": "Baño de Hidromasaje en Jacuzzi",
            "description": "Inmersión privada en burbujas térmicas infusionadas con sales del Mar Muerto y flores aromáticas.",
            "duration": "45 min",
            "price": 30,
            "badge": "Relax",
            "image": "./assets/pareja_jacuzzi.jpg",
            "longDescription": [
              "Sumérgete en una experiencia de deleite puro con nuestro baño de hidromasaje en jacuzzi privado, enriquecido con sales minerales marinas del Caribe, oligoelementos naturales y esencias aromáticas florales de azahar y jazmín.",
              "Los múltiples jets de agua a presión y microburbujas realizan un masaje integral constante sobre piernas, glúteos y espalda, aliviando la fatiga de las articulaciones mientras el aroma envolvente sosiega la mente. Todo acompañado de una copa de vino frío de cortesía."
            ],
            "benefits": [
              "Alivio de la rigidez en articulaciones y columna",
              "Hidratación y remineralización cutánea con sales marinas",
              "Efecto descontracturante suave por hidrodinámica",
              "Ambiente romántico e íntimo perfecto para desconectar"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Preparación Hidrotermal",
                "desc": "Ajuste de temperatura a 37°C con adición de sales aromáticas."
              },
              {
                "step": "02",
                "title": "Inmersión y Activación de Jets",
                "desc": "Ciclos de hidroterapia con intensidad variable según tu preferencia."
              },
              {
                "step": "03",
                "title": "Aromaterapia Acuática",
                "desc": "Liberación de microesencias para relajar el sistema respiratorio."
              },
              {
                "step": "04",
                "title": "Salida y Brindis de Cortesía",
                "desc": "Secado con toallas precalentadas y copa de vino espumoso."
              }
            ],
            "gallery": [
              "./assets/pareja_jacuzzi.jpg",
              "./assets/pareja_sauna.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            "includes": [
              "Jacuzzi privado para 1 o 2 personas",
              "Sales de baño aromáticas",
              "Copa de vino o refresco",
              "Toallas de algodón afelpado"
            ],
            "recommendations": "Excelente como complemento previo a cualquier masaje corporal o tratamiento facial.",
            "slug": "jacuzzi_sales"
          }
        ]
      },
      {
        "id": "rituales-pareja",
        "name": "Rituales en Pareja",
        "description": "Momentos inolvidables compartidos con brindis de cortesía",
        "services": [
          {
            "id": "srv_masaje_pareja",
            "name": "Ritual Momentos en Pareja Deluxe",
            "description": "Masaje relajante en cabina suite privada para dos, copas de bienvenida, frutas de estación y circuito termal.",
            "duration": "100 min",
            "price": 110,
            "badge": "Más Solicitado",
            "image": "./assets/masaje_pareja.jpg",
            "popular": true,
            "longDescription": [
              "El Ritual Momentos en Pareja Deluxe es nuestra experiencia insignia diseñada para compartir momentos de complicidad, romance y sosiego. Ambos compartirán la misma cabina doble VIP ambientada con velas aromáticas, pétalos de rosa y música suave.",
              "Dos de nuestras terapeutas realizarán un masaje relajante y descontracturante coordinado de cuerpo completo con aceites esenciales nutritivos, seguido de tiempo libre en la zona de relajación con una copa de vino y bandeja de degustación para celebrar juntos."
            ],
            "benefits": [
              "Conexión y complicidad en un espacio íntimo y privado",
              "Relajación compartida para disipar el estrés de la rutina",
              "Tratamiento coordinado por terapeutas expertas",
              "Detalle ideal para aniversarios, cumpleaños o escapadas románticas"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Bienvenida Romántica",
                "desc": "Recepción con copa de vino y bienvenida en cabina doble VIP con pétalos."
              },
              {
                "step": "02",
                "title": "Aromaterapia Dual",
                "desc": "Selección del aroma de aceites para ambos."
              },
              {
                "step": "03",
                "title": "Masaje Simultáneo de 60 Minutos",
                "desc": "Sesión corporal completa coordinada para los dos acompañantes."
              },
              {
                "step": "04",
                "title": "Brindis & Degustación",
                "desc": "Tiempo exclusivo para saborear una copa de vino y bandeja de cortesía."
              }
            ],
            "gallery": [
              "./assets/masaje_pareja.jpg",
              "./assets/pareja_sauna.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Cabina Doble VIP ambientada",
              "Dos masajes corporales simultáneos",
              "Dos copas de vino",
              "Bandeja de frutas/chocolates de cortesía"
            ],
            "recommendations": "Puedes solicitar dedicatorias especiales o detalles sorpresa al momento de agendar la reserva.",
            "slug": "masaje_pareja"
          },
          {
            "id": "srv_escapada_romantica",
            "name": "Escapada Romántica & Spa",
            "description": "Exfoliación corporal compartida, masaje con piedras calientes, hidroterapia y snack gourmet.",
            "duration": "120 min",
            "price": 140,
            "badge": "Premium",
            "image": "./assets/dsc_6328.jpg",
            "longDescription": [
              "Nuestra Escapada Romántica & Spa es el paquete integral más solicitado por parejas que buscan un día completo de desconexión y celebración en Miramar. Incluye circuito termal privado con sauna y jacuzzi de hidromasaje, exfoliación corporal suave con sales aromáticas y un masaje relajante de cuerpo entero en cabina VIP.",
              "La sesión culmina con una botella de vino espumoso y bandeja de bocaditos en nuestro salón de descanso privado, creando un recuerdo imborrable de serenidad y amor."
            ],
            "benefits": [
              "Experiencia de lujo 100% privada de 2 horas y media",
              "Circuito de agua + exfoliación + masaje completo",
              "Ambiente exclusivo con iluminación tenue y aromas florales",
              "El regalo romántico definitivo en La Habana"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Recepción y Brindis Inicial",
                "desc": "Bienvenida personalizada y entrega de batas de lino."
              },
              {
                "step": "02",
                "title": "Circuito Termal Privado",
                "desc": "Sauna purificante y baño de hidromasaje en jacuzzi con sales."
              },
              {
                "step": "03",
                "title": "Exfoliación & Masaje en Pareja",
                "desc": "Exfoliación suave seguida del masaje relajante simultáneo."
              },
              {
                "step": "04",
                "title": "Celebración y Degustación",
                "desc": "Botella de vino y aperitivos gourmet en sala VIP."
              }
            ],
            "gallery": [
              "./assets/dsc_6328.jpg",
              "./assets/masaje_pareja.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            "includes": [
              "Sauna privada y Jacuzzi",
              "Exfoliación corporal con sales",
              "Masaje en pareja simultáneo",
              "Botella de vino espumoso y degustación"
            ],
            "recommendations": "Se aconseja reservar con al menos 48 horas de anticipación para garantizar la disponibilidad de la suite privada.",
            "slug": "escapada_romantica"
          }
        ]
      }
    ]
  },
  {
    "id": "head-spa",
    "title": "Japanese Head Spa (Exclusivo)",
    "subtitle": "El ritual japonés de micro-cascada y masaje craneal que transforma tu bienestar",
    "icon": "Crown",
    "badge": "Tendencia Mundial",
    "subcategories": [
      {
        "id": "head-spa-japonés",
        "name": "Ritual Capilar y Craneofacial",
        "description": "Ducha circular de cascada, diagnóstico con microcámara, exfoliación del cuero cabelludo y masaje cervical",
        "services": [
          {
            "id": "srv_headspa_tradicional",
            "name": "Japanese Head Spa Tradicional",
            "description": "Lavado profundo con masaje shiatsu craneal, ducha de lluvia circular de agua tibia y mascarilla purificante.",
            "duration": "60 min",
            "price": 50,
            "badge": "Novedad",
            "image": "./assets/head_spa.jpg",
            "popular": true,
            "longDescription": [
              "Inspirado en los prestigiosos salones de bienestar de Tokio, el Japanese Head Spa es un ritual holístico enfocado en la salud capilar y la relajación mental profunda. Mediante una cascada de agua tibia continua en aro dorado (halo fountain), se estimula la microcirculación del cuero cabelludo y se disuelve la tensión nerviosa acumulada en la cabeza y cuello.",
              "Incluye análisis capilar, exfoliación con champú botánico orgánico, masaje craneal con puntos de digitopuntura shiatsu y acondicionamiento profundo con mascarilla de queratina y extractos de té verde."
            ],
            "benefits": [
              "Alivio fulminante de migrañas, dolor tensional y estrés mental",
              "Limpieza profunda del cuero cabelludo, eliminando grasa y residuos",
              "Estimulación del crecimiento y vitalidad del cabello",
              "Sensación única de relajación y ligereza sensorial"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Diagnóstico y Peinado Sensorial",
                "desc": "Evaluación del estado del cuero cabelludo y cepillado relajante."
              },
              {
                "step": "02",
                "title": "Exfoliación y Champú Botánico",
                "desc": "Limpieza profunda con fórmula purificante de té verde y menta."
              },
              {
                "step": "03",
                "title": "Cascada Circular Halo & Shiatsu",
                "desc": "Agua tibia en circuito continuo combinada con masaje de digitopuntura."
              },
              {
                "step": "04",
                "title": "Mascarilla Nutritiva & Secado",
                "desc": "Sellado de cutícula con mascarilla intensiva y secado natural."
              }
            ],
            "gallery": [
              "./assets/head_spa.jpg",
              "./assets/salon_belleza.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Mobiliario ergonómico Head Spa",
              "Cascada de agua tibia Halo",
              "Champús y mascarillas botánicas",
              "Infusión japonesa"
            ],
            "recommendations": "Ven con el cabello libre de fijadores pesados o lacas para maximizar la absorción de los nutrientes.",
            "slug": "headspa_tradicional"
          },
          {
            "id": "srv_headspa",
            "name": "Japanese Head Spa Premium & Facial Express",
            "description": "Experiencia completa: diagnóstico capilar, arco de agua circular con vapor ozono, masaje de hombros y cuello, más hidratación facial.",
            "duration": "80 min",
            "price": 65,
            "badge": "Firma Momentos Spa",
            "image": "./assets/head_spa.jpg",
            "popular": true,
            "longDescription": [
              "Nuestra versión Premium del Japanese Head Spa eleva la experiencia tradicional al combinar el circuito de hidroterapia capilar con una limpieza facial express purificante y masaje relajante de cuello, hombros y escote.",
              "Mientras la cascada de agua tibia baña rítmicamente tu cabeza, recibirás una exfoliación facial ultrasónica suave, mascarilla hidratante de ácido hialurónico y masaje con rodillo de jade frío. Una verdadera metamorfosis de frescura y luminosidad de la cabeza al escote."
            ],
            "benefits": [
              "Tratamiento integral 2 en 1: bienestar capilar + luminosidad facial",
              "Descompresión neuromuscular de cuello, trapecios y mandíbula",
              "Piel hidratada y poros limpios con tecnología ultrasónica",
              "Experiencia sensorial inolvidable de 75 minutos"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Doble Limpieza Capilar & Facial",
                "desc": "Desmaquillado botánico y exfoliación capilar con té verde."
              },
              {
                "step": "02",
                "title": "Cascada Halo & Masaje Craneal",
                "desc": "Hidroterapia relajante con digitopuntura en cráneo y nuca."
              },
              {
                "step": "03",
                "title": "Facial Express de Hialurónico",
                "desc": "Mascarilla nutritiva y masaje con cuarzo de jade."
              },
              {
                "step": "04",
                "title": "Cierre Revitalizante",
                "desc": "Bruma termal fijadora, secado de cabello y copa de vino."
              }
            ],
            "gallery": [
              "./assets/head_spa.jpg",
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg"
            ],
            "includes": [
              "Circuito completo Head Spa",
              "Tratamiento facial hidratante",
              "Masaje de cuello y hombros",
              "Copa de vino de cortesía"
            ],
            "recommendations": "Excelente para antes de eventos especiales, sesiones fotográficas o para renovarse tras una semana agotadora.",
            "slug": "headspa"
          }
        ]
      }
    ]
  },
  {
    "id": "faciales-corporales",
    "title": "Faciales & Envolturas Corporales",
    "subtitle": "Nutrición celular, brillo radiante y desintoxicación dérmica",
    "icon": "Flower2",
    "badge": "Resultados Visibles",
    "subcategories": [
      {
        "id": "tratamientos-faciales",
        "name": "Cuidado & Limpieza Facial",
        "description": "Diagnóstico dérmico personalizado para un cutis fresco, limpio y rejuvenecido",
        "services": [
          {
            "id": "srv_limpieza_facial",
            "name": "Limpieza Facial Profunda Ultrasónica",
            "description": "Extracción suave de impurezas, vaporización, peeling enzimático, alta frecuencia y mascarilla calmante.",
            "duration": "75 min",
            "price": 45,
            "badge": "Recomendado",
            "image": "./assets/facial_original.jpg",
            "popular": true,
            "longDescription": [
              "La limpieza facial profunda es un procedimiento esencial de mantenimiento y salud dérmica que elimina todas las impurezas acumuladas en los poros provocadas por la polución ambiental, la transpiración y el maquillaje. Estas impurezas son el origen directo de comedones, pérdida de brillo y envejecimiento prematuro.",
              "En Momentos Spa utilizamos espátula ultrasónica de última generación para realizar una exfoliación suave pero sumamente eficaz sin irritar el tejido, seguida de vapor de ozono purificante, extracción profesional meticulosa, alta frecuencia antibacteriana y velo de colágeno hidratante."
            ],
            "benefits": [
              "Eliminación de puntos negros, células muertas e impurezas",
              "Oxigenación profunda y unificación del tono cutáneo",
              "Minimización visible del tamaño de los poros dilatados",
              "Potenciación de la absorción de cremas y sueros diarios"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Higiene y Desmaquillado Sensorial",
                "desc": "Emulsión limpiadora botánica y tónico equilibrante del pH."
              },
              {
                "step": "02",
                "title": "Vapor de Ozono y Espátula Ultrasónica",
                "desc": "Apertura de poros y peeling ultrasónico no invasivo."
              },
              {
                "step": "03",
                "title": "Extracción Delicada y Alta Frecuencia",
                "desc": "Limpieza manual higiénica y desinfección antibiótica con ozono."
              },
              {
                "step": "04",
                "title": "Mascarilla Calmante & Fotoprotección",
                "desc": "Velo de colágeno regenerador y protector solar fluido."
              }
            ],
            "gallery": [
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Diagnóstico dérmico personalizado",
              "Tecnología ultrasónica y vapor de ozono",
              "Mascarilla de colágeno puro",
              "Protección solar de amplio espectro"
            ],
            "recommendations": "Se recomienda evitar la exposición solar directa durante las 24 horas siguientes al tratamiento facial.",
            "slug": "limpieza_facial"
          },
          {
            "id": "srv_facial_antiedad",
            "name": "Facial Antiedad con Ácido Hialurónico",
            "description": "Nutrición intensa con sérum concentrado, masaje kobido estimulante y máscara de colágeno marino.",
            "duration": "60 min",
            "price": 55,
            "badge": "Efecto Glow",
            "image": "./assets/ojos_orig.jpg",
            "longDescription": [
              "Un tratamiento rejuvenecedor de alto impacto formulado para restaurar la densidad, elasticidad y firmeza de las pieles maduras o fatigadas. A través de la infusión de ácido hialurónico de bajo y alto peso molecular, se rellenan las microarrugas y líneas de expresión desde las capas subepidérmicas.",
              "Se complementa con un masaje remodelador Kobido (lifting facial japonés tradicional) que tonifica los músculos faciales caídos, eleva los pómulos y redefine el óvalo facial de forma completamente natural y no invasiva."
            ],
            "benefits": [
              "Efecto tensor y lifting inmediato visible tras la primera sesión",
              "Relleno biológico de líneas de expresión con ácido hialurónico",
              "Estimulación de la síntesis endógena de colágeno y elastina",
              "Piel luminosa, tersa, nutrida y rejuvenecida"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Limpieza Antiedad con Ácidos Suaves",
                "desc": "Peeling enzimático para acelerar la renovación celular."
              },
              {
                "step": "02",
                "title": "Infusión de Suero Hialurónico Concentrado",
                "desc": "Aplicación de activo puro mediante electroporación o masaje de penetración."
              },
              {
                "step": "03",
                "title": "Masaje Lifting Kobido",
                "desc": "Maniobras rápidas y percusiones que reactivan la musculatura facial."
              },
              {
                "step": "04",
                "title": "Mascarilla Tensora de Alginatos",
                "desc": "Enfriamiento oclusivo que sella los principios activos en la dermis."
              }
            ],
            "gallery": [
              "./assets/ojos_orig.jpg",
              "./assets/facial_original.jpg",
              "./assets/salon_belleza.jpg"
            ],
            "includes": [
              "Ácido hialurónico concentrado",
              "Masaje japonés Kobido",
              "Mascarilla de alginatos marinos",
              "Infusión de colágeno hidrolizado"
            ],
            "recommendations": "Para resultados duraderos y acumulativos, recomendamos un ciclo de 3 a 4 sesiones espaciadas cada dos semanas.",
            "slug": "facial_antiedad"
          },
          {
            "id": "srv_spa_labial",
            "name": "Tratamiento Spa Labial Regenerador",
            "description": "Exfoliación suave de labios, micropolimerización hidratante y bálsamo voluminizador.",
            "duration": "30 min",
            "price": 20,
            "badge": "Suavidad Total",
            "image": "./assets/facial_original.jpg",
            "longDescription": [
              "El área de los labios y su contorno es una de las más sensibles a la deshidratación, el sol y las agresiones climáticas. Nuestro Tratamiento Spa Labial Regenerador devuelve la suavidad aterciopelada y el volumen juvenil a los labios agrietados o con falta de hidratación.",
              "Consta de una exfoliación con microcristales de azúcar moreno y miel pura, micropunción suave de ácido hialurónico y bálsamo nutritivo con manteca de karité sellado con parches de hidrogel y fototerapia LED."
            ],
            "benefits": [
              "Eliminación de pieles secas y escamas labiales",
              "Labios carnosos, jugosos y profundamente hidratados",
              "Definición mejorada del contorno y arco de cupido",
              "Base perfecta y uniforme para cualquier labial"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Exfoliación Azucarada",
                "desc": "Masaje circular con cristales de miel y azúcar orgánico."
              },
              {
                "step": "02",
                "title": "Infusión Labial Hidratante",
                "desc": "Penetración de ácido hialurónico micronizado."
              },
              {
                "step": "03",
                "title": "Parche de Hidrogel & LED",
                "desc": "Reposo oclusivo que calma y voluminiza la mucosa labial."
              },
              {
                "step": "04",
                "title": "Bálsamo Sellador con Karité",
                "desc": "Nutrición extrema de larga duración con brillo sedoso."
              }
            ],
            "gallery": [
              "./assets/facial_original.jpg",
              "./assets/ojos_orig.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Exfoliante artesanal de miel",
              "Parche de hidrogel colágeno",
              "Bálsamo regenerador de karité"
            ],
            "recommendations": "Excelente adición rápida a cualquier servicio facial o antes de ocasiones memorables.",
            "slug": "spa_labial"
          }
        ]
      },
      {
        "id": "envolturas-corporales",
        "name": "Envolturas & Exfoliación Corporal",
        "description": "Renovación celular de todo el cuerpo con activos botánicos",
        "services": [
          {
            "id": "srv_chocolaterapia",
            "name": "Chocolaterapia Nutritiva y Antiestrés",
            "description": "Envoltura tibia de cacao 100% puro que estimula endorfinas y deja la piel aterciopelada.",
            "duration": "75 min",
            "price": 55,
            "badge": "Delicia Sensorial",
            "image": "./assets/maderoterapia.jpg",
            "popular": true,
            "longDescription": [
              "La Chocolaterapia es una experiencia multisensorial sublime que une las propiedades antioxidantes del cacao puro con el deleite aromático más placentero. El cacao es rico en polifenoles, magnesio y teobromina, elementos capaces de combatir los radicales libres causantes del envejecimiento y de inducir una profunda sensación de confort emocional.",
              "El ritual comienza con una exfoliación corporal para preparar la piel, seguida de una envoltura caliente en chocolate fundido al 100% que nutre, remineraliza e ilumina la epidermis mientras descansas en cabina aromática."
            ],
            "benefits": [
              "Poderoso efecto antioxidante y neutralizador de radicales libres",
              "Nutrición extrema que deja la piel suave como la seda",
              "Estimulación de la producción de endorfinas por aromaterapia",
              "Sensación reconfortante de placer, calma y felicidad"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Exfoliación con Cáscara de Cacao",
                "desc": "Eliminación de células muertas para facilitar la penetración."
              },
              {
                "step": "02",
                "title": "Envoltura Caliente de Chocolate Puro",
                "desc": "Pincelado corporal de cacao templado y cobertura térmica."
              },
              {
                "step": "03",
                "title": "Ducha Hidrotermal Aclaradora",
                "desc": "Retirada con agua tibia aromática de los restos de chocolate."
              },
              {
                "step": "04",
                "title": "Masaje Hidratante Final",
                "desc": "Aplicación de emulsión hidratante con toques de vainilla y degustación de bombón."
              }
            ],
            "gallery": [
              "./assets/maderoterapia.jpg",
              "./assets/masaje_m7.jpg",
              "./assets/snack_bandeja.jpg"
            ],
            "includes": [
              "Cacao puro cosmético de alta pureza",
              "Envoltura térmica oclusiva",
              "Ducha privada con sales",
              "Degustación de chocolate artesanal"
            ],
            "recommendations": "No requiere ninguna preparación previa. Tu piel quedará deliciosamente perfumada durante todo el día.",
            "slug": "chocolaterapia"
          },
          {
            "id": "srv_fangoterapia",
            "name": "Fangoterapia Desintoxicante Marina",
            "description": "Aplicación de barros térmicos ricos en oligoelementos que eliminan toxinas y reafirman tejidos.",
            "duration": "70 min",
            "price": 50,
            "badge": "Remineralizante",
            "image": "./assets/masaje_m7.jpg",
            "longDescription": [
              "Un tratamiento milenario que aprovecha la riqueza en azufre, magnesio, calcio y oligoelementos de los fangos marinos termales. La fangoterapia desintoxica profundamente los tejidos cutáneos gracias a su capacidad de absorción osmótica de impurezas y líquidos retenidos.",
              "Al secarse suavemente sobre el cuerpo bajo calor controlado, el barro mineral estimula la circulación periférica, descongestiona los ganglios y produce un notable efecto tonificante y antiinflamatorio en articulaciones y masa muscular."
            ],
            "benefits": [
              "Depuración profunda de impurezas y toxinas a nivel dérmico",
              "Acción antiinflamatoria sobre músculos y articulaciones doloridas",
              "Tonificación y reafirmación del tejido cutáneo flácido",
              "Remineralización total de la piel"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Preparación de la Piel",
                "desc": "Fricción con guante de luffa para activar la microcirculación."
              },
              {
                "step": "02",
                "title": "Aplicación del Fango Marino Caliente",
                "desc": "Extensión homogénea de arcillas termales enriquecidas."
              },
              {
                "step": "03",
                "title": "Tiempo de Oclusión Osmótica",
                "desc": "Manta térmica durante 25 minutos para potenciar la absorción de minerales."
              },
              {
                "step": "04",
                "title": "Ducha y Masaje Nutritivo",
                "desc": "Enjuague hidroterápico y masaje suave con emulsión marina."
              }
            ],
            "gallery": [
              "./assets/masaje_m7.jpg",
              "./assets/maderoterapia.jpg",
              "./assets/servicios_spa.jpg"
            ],
            "includes": [
              "Lodos marinos ricos en oligoelementos",
              "Manta térmica de sudoración",
              "Ducha privada",
              "Emulsión calmante marina"
            ],
            "recommendations": "Ideal para deportistas con tensión articular, o personas que deseen un tratamiento corporal depurativo completo.",
            "slug": "fangoterapia"
          },
          {
            "id": "srv_exfoliacion_marina",
            "name": "Exfoliación con Sales Marinas y Cítricos",
            "description": "Retira células muertas, activa la microcirculación y deja la piel luminosa y sedosa.",
            "duration": "45 min",
            "price": 35,
            "badge": "Piel Nueva",
            "image": "./assets/snack_bandeja.jpg",
            "longDescription": [
              "Elimina de forma eficaz y placentera la capa de células muertas y queratina engrosada que apaga la vitalidad de la epidermis. Formulada con cristales finos de sal marina caribeña combinados con aceites vegetales nutritivos y aceites esenciales de pomelo, naranja dulce y limón.",
              "La fricción controlada renueva instantáneamente la superficie cutánea, desobstruye los folículos pilosos y estimula la regeneración de nuevas células, logrando una piel increíblemente suave, satinada, tersa y lista para absorber cualquier tratamiento hidratante posterior."
            ],
            "benefits": [
              "Piel suave al tacto de manera inmediata e innegable",
              "Activación de la circulación y drenaje superficial",
              "Unificación de la textura corporal y luminosidad natural",
              "Aroma cítrico energizante que revitaliza el estado de ánimo"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Aplicación de Cristales Marinos",
                "desc": "Fricción rítmica ascendente adaptada a la sensibilidad de tu piel."
              },
              {
                "step": "02",
                "title": "Masaje Exfoliante Focalizado",
                "desc": "Énfasis especial en zonas rugosas como codos, rodillas y talones."
              },
              {
                "step": "03",
                "title": "Ducha Termal Sensorial",
                "desc": "Eliminación de la sal con chorros de agua templada perfumada."
              },
              {
                "step": "04",
                "title": "Nutrición con Aceites de Argán",
                "desc": "Masaje de absorción rápida para sellar la suavidad y el brillo."
              }
            ],
            "gallery": [
              "./assets/snack_bandeja.jpg",
              "./assets/servicios_spa.jpg",
              "./assets/maderoterapia.jpg"
            ],
            "includes": [
              "Sales marinas micronizadas",
              "Aceites esenciales cítricos orgánicos",
              "Ducha privada con geles aromáticos",
              "Loción sedosa de argán"
            ],
            "recommendations": "Excelente antes de exponerse al sol o antes de una boda o evento especial para lucir una piel resplandeciente.",
            "slug": "exfoliacion_marina"
          }
        ]
      }
    ]
  },
  {
    "id": "salon-belleza",
    "title": "Salón de Belleza & Estética",
    "subtitle": "Uñas perfectas, mirada cautivadora y estilismo capilar de alta gama",
    "icon": "Heart",
    "badge": "Cuidado Integral",
    "subcategories": [
      {
        "id": "manicura-pedicura",
        "name": "Manicura & Pedicura Spa",
        "description": "Higiene meticulosa, pulido perfecto y esmaltados de máxima duración",
        "services": [
          {
            "id": "srv_manicura_rusa",
            "name": "Manicura Rusa con Semipermanente",
            "description": "Técnica con torno para limpieza profunda de cutícula y esmaltado de precisión milimétrica.",
            "duration": "75 min",
            "price": 30,
            "badge": "Alta Precisión",
            "image": "./assets/manicura_orig.jpg",
            "popular": true,
            "longDescription": [
              "La Manicura Rusa (o manicura combinada con torno de precisión) es la técnica más avanzada y perfeccionista del cuidado de uñas a nivel mundial. A través de diferentes fresas diamantadas de micraje micrométrico, se retira de forma minuciosa y segura toda la cutícula y piel muerta alrededor del lecho ungueal sin cortar ni agredir la piel viva.",
              "Esto permite aplicar el esmaltado semipermanente bajo cutícula, logrando un acabado absolutamente limpio, pulido y milimétrico cuyo crecimiento resulta imperceptible durante más de 3 a 4 semanas."
            ],
            "benefits": [
              "Esmaltado impecable que dura entre 3 y 4 semanas sin desprendimientos",
              "Crecimiento de cutícula retardado y libre de pellejos molestos",
              "Aspecto elegante, limpio y pulcro de alta gama",
              "Nivelación de la placa de la uña para un brillo de espejo"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Desinfección & Limado Estilizado",
                "desc": "Modelado de la uña (almendra, cuadrada, ovalada) según tu gusto."
              },
              {
                "step": "02",
                "title": "Limpieza con Fresas Diamantadas",
                "desc": "Retiro exhaustivo de cutícula con micro-torno de precisión profesional."
              },
              {
                "step": "03",
                "title": "Nivelación con Base Rubber",
                "desc": "Corrección de imperfecciones de la lámina ungueal para una arquitectura perfecta."
              },
              {
                "step": "04",
                "title": "Esmaltado Bajo Cutícula & Aceite",
                "desc": "Dos capas de color gel curado en lámpara LED y gotas de aceite de mirra."
              }
            ],
            "gallery": [
              "./assets/manicura_orig.jpg",
              "./assets/pedicura_orig.jpg",
              "./assets/salon_belleza.jpg"
            ],
            "includes": [
              "Fresas esterilizadas en autoclave",
              "Esmaltes semipermanentes de marcas líderes",
              "Base de refuerzo Rubber",
              "Masaje hidratante de manos"
            ],
            "recommendations": "Aplica crema de manos y aceite para cutículas diariamente para conservar el brillo y la hidratación de la piel.",
            "slug": "manicura_rusa"
          },
          {
            "id": "srv_pedicura_spa",
            "name": "Pedicura Spa Completa con Exfoliación",
            "description": "Tratamiento de talones, remoción de asperezas, baño de parafina hidratante y esmaltado.",
            "duration": "60 min",
            "price": 35,
            "badge": "Máximo Confort",
            "image": "./assets/pedicura_orig.jpg",
            "popular": true,
            "longDescription": [
              "Nuestros pies soportan el peso de todo el día y merecen un cuidado terapéutico profundo y reparador. La Pedicura Spa Completa va mucho más allá de un simple arreglo estético: es un ritual hidroterápico desinfectante, exfoliante y nutritivo.",
              "Incluye baño de pies en hidromasaje con sales antisépticas, eliminación de durezas y callosidades con torno y limas especiales, corte anatómico correcto de uñas, exfoliación con azúcar y mentol, mascarilla oclusiva de parafina y masaje podológico relajante."
            ],
            "benefits": [
              "Alivio instantáneo de pies cansados, pesados y adoloridos",
              "Eliminación total de talones agrietados y durezas plantares",
              "Prevención de uñas encarnadas mediante corte técnico profesional",
              "Esmaltado semipermanente de larga duración con brillo resistente"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Baño Hidromasaje Efervescente",
                "desc": "Inmersión en agua tibia con sales de árbol de té y menta fresca."
              },
              {
                "step": "02",
                "title": "Tratamiento de Durezas & Uñas",
                "desc": "Eliminación de hiperqueratosis y arreglo técnico de cutículas y uñas."
              },
              {
                "step": "03",
                "title": "Exfoliación & Mascarilla Nutritiva",
                "desc": "Peeling de mentol seguido de mascarilla regeneradora."
              },
              {
                "step": "04",
                "title": "Masaje Podal & Esmaltado",
                "desc": "Masaje en pies y pantorrillas culminando con el color de tu elección."
              }
            ],
            "gallery": [
              "./assets/pedicura_orig.jpg",
              "./assets/pedicura2_orig.jpg",
              "./assets/manicura_orig.jpg"
            ],
            "includes": [
              "Sillón ergonómico de pedicura",
              "Sales antibacterianas de árbol de té",
              "Exfoliante refrescante de mentol",
              "Esmaltado profesional"
            ],
            "recommendations": "Ven con calzado abierto si eliges esmalte tradicional para no estropear el secado.",
            "slug": "pedicura_spa"
          },
          {
            "id": "srv_unas_acrilicas",
            "name": "Esculpido de Uñas en Acrílico / Gel",
            "description": "Extensión con moldes, estructura perfecta y diseño personalizado de larga duración.",
            "duration": "90 min",
            "price": 45,
            "badge": "Durabilidad",
            "image": "./assets/pedicura2_orig.jpg",
            "longDescription": [
              "Para quienes desean longitud, resistencia inquebrantable y formas esculturales personalizadas, nuestro servicio de esculpido en acrílico o poligel con moldes profesionales es la solución idónea. Realizamos estructuras anatómicas balanceadas que no dañan tu uña natural y garantizan una adherencia perfecta sin desprendimientos.",
              "Disponemos de una amplia gama de tonos nude, baby boomer, francesas perfectas y decoraciones en nail art contemporáneo ejecutadas por artistas manicuristas de amplia trayectoria."
            ],
            "benefits": [
              "Uñas con la longitud y forma que siempre soñaste (coffin, stiletto, almendra)",
              "Máxima resistencia frente a golpes, roturas o actividades cotidianas",
              "Estructura esculpida sobre molde para una adaptación anatómica perfecta",
              "Diseños artísticos personalizados y acabados de revista"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Preparación Quirúrgica de la Placa",
                "desc": "Deshidratación suave y primer de adherencia sin ácidos agresivos."
              },
              {
                "step": "02",
                "title": "Colocación de Moldes Esculturales",
                "desc": "Alineación de precisión milimétrica sin uso de tips plásticos."
              },
              {
                "step": "03",
                "title": "Esculpido y Estructuración",
                "desc": "Construcción del ápice y curva C con polímeros de alta resistencia."
              },
              {
                "step": "04",
                "title": "Limado Técnico & Esmaltado Final",
                "desc": "Perfilado de bordes, color de gel y sellador Top Coat ultrabrillante."
              }
            ],
            "gallery": [
              "./assets/pedicura2_orig.jpg",
              "./assets/manicura_orig.jpg",
              "./assets/salon_belleza.jpg"
            ],
            "includes": [
              "Polímeros y monómeros de primera línea",
              "Diseño personalizado de longitud y forma",
              "Garantía de retoque de 7 días",
              "Aceite de cutícula con vitaminas"
            ],
            "recommendations": "Recomendamos realizar el mantenimiento o relleno cada 21 a 28 días para mantener el equilibrio del ápice.",
            "slug": "unas_acrilicas"
          }
        ]
      },
      {
        "id": "cejas-pestanas",
        "name": "Mirada: Pestañas & Cejas",
        "description": "Realce natural de tu mirada sin necesidad de maquillaje diario",
        "services": [
          {
            "id": "srv_lifting_pestanas",
            "name": "Lifting de Pestañas con Queratina",
            "description": "Curvatura natural desde la raíz, oscurecimiento con tinte y baño nutritivo de larga duración.",
            "duration": "60 min",
            "price": 35,
            "badge": "Efecto Rímel",
            "image": "./assets/pestanas_orig.jpg",
            "popular": true,
            "longDescription": [
              "El Lifting de Pestañas es el tratamiento estético por excelencia para quienes desean una mirada despierta, intensa y atractiva sin necesidad de recurrir a extensiones artificiales ni al rizador mecánico diario.",
              "A través de moldes de silicona anatómicos y fórmulas enriquecidas con queratina pura y pantenol, se elevan las pestañas naturales desde su misma raíz. Se complementa con un tinte negro carbón intenso que aporta un efecto de máscara de pestañas permanente que no se corre con el agua ni el sudor."
            ],
            "benefits": [
              "Efecto de pestañas visiblemente más largas y curvadas las 24 horas",
              "Nutrición profunda con queratina que fortalece el pelo natural",
              "Totalmente resistente al agua, piscina, playa y ejercicio físico",
              "Duración impecable de entre 6 y 8 semanas"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Limpieza Desengrasante de Ojos",
                "desc": "Preparación de la fibra capilar con champú neutro especial."
              },
              {
                "step": "02",
                "title": "Adherencia al Molde Anatómico",
                "desc": "Fijación cuidadosa pelo por pelo sobre el pad de silicona."
              },
              {
                "step": "03",
                "title": "Loción Moldeadora & Fijadora",
                "desc": "Aplicación de agentes activos con tiempos cronometrados exactos."
              },
              {
                "step": "04",
                "title": "Tinte Negro & Baño de Queratina",
                "desc": "Intensificación del color y sellado con sérum botánico nutritivo."
              }
            ],
            "gallery": [
              "./assets/pestanas_orig.jpg",
              "./assets/ojos_orig.jpg",
              "./assets/pestanas.jpg"
            ],
            "includes": [
              "Moldes de silicona hipoalergénicos",
              "Tinte vegano negro carbón",
              "Queratina reparadora pura",
              "Cepillo de pestañas de regalo"
            ],
            "recommendations": "Evitar mojar los ojos o aplicar vapor durante las primeras 24 horas posteriores al tratamiento.",
            "slug": "lifting_pestanas"
          },
          {
            "id": "srv_pestanas_pelo_a_pelo",
            "name": "Extensiones de Pestañas Pelo a Pelo",
            "description": "Aplicación minuciosa de fibras ultra ligeras para una mirada voluminosa y elegante.",
            "duration": "90 min",
            "price": 50,
            "badge": "Mirada Impacto",
            "image": "./assets/ojos_orig.jpg",
            "longDescription": [
              "Consigue la mirada seductora y glamorosa de tus sueños con nuestras extensiones de pestañas pelo a pelo. Cada extensión de fibra sintética ultraligera de seda o visón faux se adhiere de forma individual a una de tus pestañas naturales con adhesivo de grado médico certificado.",
              "Diseñamos el mapa de tu mirada a medida (efecto natural, efecto ojo de gato, muñeca o ardilla), adaptando longitudes, grosores y curvaturas para realzar la forma de tus ojos sin apelmazar ni perjudicar el crecimiento de tus pestañas originales."
            ],
            "benefits": [
              "Volumen, densidad y longitud a medida de tus rasgos faciales",
              "Olvídate por completo del rímel y del desmaquillador de ojos",
              "Fibras tan ligeras que no se sienten sobre el párpado",
              "Resultados elegantes que abren y rejuvenecen la mirada"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Diseño de Mapping Visual",
                "desc": "Selección del estilo, grosor (0.07 a 0.15 mm) y curvatura idónea (C o D)."
              },
              {
                "step": "02",
                "title": "Aislamiento con Parches de Colágeno",
                "desc": "Protección de las pestañas inferiores mientras nutrimos la ojera."
              },
              {
                "step": "03",
                "title": "Colocación Individual Meticulosa",
                "desc": "Adhesión artesanal de entre 80 y 120 pestañas por ojo."
              },
              {
                "step": "04",
                "title": "Secado y Cepillado de Acabado",
                "desc": "Polimerización del adhesivo con nanomister y cepillado final."
              }
            ],
            "gallery": [
              "./assets/ojos_orig.jpg",
              "./assets/pestanas_orig.jpg",
              "./assets/pestanas.jpg"
            ],
            "includes": [
              "Extensiones de seda premium",
              "Adhesivo médico hipoalergénico",
              "Parches de colágeno para ojeras",
              "Kit de cepillo de mantenimiento"
            ],
            "recommendations": "No frotar los ojos y no utilizar productos desmaquillantes con base de aceite sobre las extensiones.",
            "slug": "pestanas_pelo_a_pelo"
          },
          {
            "id": "srv_laminado_cejas",
            "name": "Laminado y Diseño de Cejas con Henna",
            "description": "Alisado y fijación del vello rebelde, perfilado según visagismo y tinte botánico.",
            "duration": "50 min",
            "price": 30,
            "badge": "Definición",
            "image": "./assets/pestanas.jpg",
            "longDescription": [
              "El Laminado de Cejas (o brow lift) es la técnica vanguardista que transforma cejas rebeldes, finas, rizadas o con calvas en cejas peinadas, simétricas, densas y con volumen orgánico envidiable.",
              "Mediante una fórmula reestructurante suave, se ablanda la cutícula del vello para fijarlo en la dirección deseada (hacia arriba y peinadas), rellenando huecos vacíos. Culminamos con depilación de diseño personalizado y un sombreado delicado con henna vegetal que deja un sombreado perfecto durante semanas."
            ],
            "benefits": [
              "Cejas visiblemente más gruesas, pobladas y disciplinadas",
              "Diseño que enmarca y resalta la armonía de tus facciones",
              "Ahorra tiempo diario de peinado y maquillaje de cejas",
              "Color natural con henna vegetal que disimula calvas"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Visagismo y Diseño de Cejas",
                "desc": "Medición con compás áureo para definir las proporciones ideales de tu rostro."
              },
              {
                "step": "02",
                "title": "Fijación y Peinado Laminado",
                "desc": "Direccionamiento del vello hacia el ángulo perfecto."
              },
              {
                "step": "03",
                "title": "Depilación y Perfilado con Pinzas",
                "desc": "Limpieza precisa de pelitos excedentes para una línea nítida."
              },
              {
                "step": "04",
                "title": "Tinte con Henna & Sérum de Argán",
                "desc": "Pigmentación sutil y nutrición con aceite para fijar el brillo."
              }
            ],
            "gallery": [
              "./assets/pestanas.jpg",
              "./assets/pestanas_orig.jpg",
              "./assets/ojos_orig.jpg"
            ],
            "includes": [
              "Estudio de visagismo facial",
              "Henna orgánica libre de amoníaco",
              "Aceite nutritivo de argán",
              "Cepillo aplicador"
            ],
            "recommendations": "Mantener secas las cejas durante las primeras 24 horas y cepillarlas hacia arriba cada mañana.",
            "slug": "laminado_cejas"
          }
        ]
      },
      {
        "id": "peluqueria-estilismo",
        "name": "Peluquería & Terapia Capilar",
        "description": "Salud capilar, brillo espejo y estilismo en nuestro salón",
        "services": [
          {
            "id": "srv_botox_capilar",
            "name": "Tratamiento Botox Capilar Reparación",
            "description": "Relleno de la fibra capilar dañada con aminoácidos y colágeno para eliminar el frizz.",
            "duration": "90 min",
            "price": 55,
            "badge": "Brillo Espejo",
            "image": "./assets/salon_belleza.jpg",
            "popular": true,
            "longDescription": [
              "El Botox Capilar es un tratamiento intensivo de bio-reparación termoactiva diseñado para cabellos castigados por tintes, decoloraciones, planchas o el clima tropical de La Habana. No contiene toxina botulínica: se llama así por su impresionante efecto de relleno y rejuvenecimiento sobre la hebra capilar.",
              "Su fórmula contiene un concentrado de queratina hidrolizada, ácido hialurónico, colágeno y vitaminas B5 y E que penetran en el cortex capilar, sellando las puntas abiertas, eliminando el frizz y devolviendo una sedosidad, cuerpo y brillo cristalino deslumbrante."
            ],
            "benefits": [
              "Eliminación total del encrespamiento (frizz) por humedad",
              "Reparación de la fibra dañada y sellado de puntas abiertas",
              "Brillo espejo radiante y movimiento sedoso natural",
              "Compatible con cualquier tipo de cabello teñido o tratado"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Lavado Antirresiduos",
                "desc": "Apertura de la cutícula con champú clarificante purificante."
              },
              {
                "step": "02",
                "title": "Aplicación Mechón a Mechón",
                "desc": "Impregnación de la mascarilla de botox capilar con masaje de absorción."
              },
              {
                "step": "03",
                "title": "Tiempo de Exposición con Calor",
                "desc": "Activación bajo gorro térmico durante 25 minutos."
              },
              {
                "step": "04",
                "title": "Sellado Térmico con Plancha",
                "desc": "Brushing profesional y sellado a temperatura controlada."
              }
            ],
            "gallery": [
              "./assets/salon_belleza.jpg",
              "./assets/peluqueria_orig.jpg",
              "./assets/head_spa.jpg"
            ],
            "includes": [
              "Diagnóstico capilar personalizado",
              "Fórmula concentrada de queratina y ácido hialurónico",
              "Sellado térmico profesional",
              "Secado y peinado con movimiento"
            ],
            "recommendations": "Usa champús libres de sulfatos tras el tratamiento para prolongar los resultados hasta por 3 meses.",
            "slug": "botox_capilar"
          },
          {
            "id": "srv_corte_secado",
            "name": "Corte Estilizado + Brushing Profesional",
            "description": "Asesoría de imagen, corte personalizado y acabado pulido con brushing.",
            "duration": "60 min",
            "price": 30,
            "badge": "Look Fresco",
            "image": "./assets/peluqueria_orig.jpg",
            "longDescription": [
              "Un cambio de look o mantenimiento perfecto a manos de nuestros estilistas profesionales. Comienza con una asesoría de visagismo personalizada según la forma de tu rostro, textura de tu cabello y estilo de vida.",
              "Continuamos en la zona de lavado con un masaje capilar relajante con champú nutritivo de salón, corte de precisión y secado profesional (brushing) con cepillo térmico que aporta volumen, pulido y movimiento sin maltratar tu pelo."
            ],
            "benefits": [
              "Corte adaptado a la morfología de tu rostro que realza tus mejores rasgos",
              "Eliminación de puntas resecas y saneamiento de la melena",
              "Peinado con secador profesional con fijación flexible y brillo",
              "Asesoramiento para el cuidado capilar en casa"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Asesoría de Estilo",
                "desc": "Diálogo para definir el corte y largo deseado."
              },
              {
                "step": "02",
                "title": "Lavado Terapéutico con Masaje",
                "desc": "Champú profesional y acondicionador desenredante en pileta ergonómica."
              },
              {
                "step": "03",
                "title": "Corte de Precisión Geométrica",
                "desc": "Técnica tijera sobre peine o desfilado según el efecto buscado."
              },
              {
                "step": "04",
                "title": "Brushing y Acabado con Sérum",
                "desc": "Secado modelador y gotas de sérum iluminador para un acabado impecable."
              }
            ],
            "gallery": [
              "./assets/peluqueria_orig.jpg",
              "./assets/salon_belleza.jpg",
              "./assets/head_spa.jpg"
            ],
            "includes": [
              "Lavado relajante con champú de salón",
              "Corte con tijeras profesionales japonesas",
              "Secado y peinado brushing",
              "Gotas de aceite de argán"
            ],
            "recommendations": "Puedes traer fotos de referencia de cortes que te gusten para orientar la propuesta con el estilista.",
            "slug": "corte_secado"
          },
          {
            "id": "srv_depilacion",
            "name": "Depilación Profesional con Cera Suave",
            "description": "Cera hipoalergénica con efecto calmante para cejas, bozo, axilas o piernas completas.",
            "duration": "40 min",
            "price": 25,
            "badge": "Piel Suave",
            "image": "./assets/depilacion_orig.jpg",
            "longDescription": [
              "Disfruta de una piel suave y libre de vello con nuestro servicio de depilación profesional con cera tibia suave de miel y resinas naturales hipoalergénicas. Apta incluso para pieles delicadas, nuestra cera se funde a una temperatura agradable que abre el poro sin provocar quemaduras ni rojeces prolongadas.",
              "Nuestras esteticistas emplean técnicas rápidas y precisas que reducen al mínimo la molestia, garantizando una extracción limpia de raíz que debilita el crecimiento futuro del vello y mantiene tu piel tersa y sedosa durante semanas."
            ],
            "benefits": [
              "Extracción del vello desde la raíz sin cortarlo",
              "Crecimiento progresivamente más débil, fino y espaciado",
              "Cera enriquecida con caléndula que calma y protege la piel sensible",
              "Sensación duradera de frescura y limpieza durante 3 a 4 semanas"
            ],
            "steps": [
              {
                "step": "01",
                "title": "Higienización y Talco Protector",
                "desc": "Desinfección de la zona y aplicación de talco para proteger la epidermis."
              },
              {
                "step": "02",
                "title": "Aplicación de Cera Tibia Natural",
                "desc": "Extensión fina con espátula desechable en el sentido del vello."
              },
              {
                "step": "03",
                "title": "Extracción Rápida y Firme",
                "desc": "Retiro con bandas higiénicas con técnica analgésica de contrapresión."
              },
              {
                "step": "04",
                "title": "Gel Post-Depilatorio de Aloe Vera",
                "desc": "Aplicación de gel frío descongestionante que neutraliza cualquier rojez."
              }
            ],
            "gallery": [
              "./assets/depilacion_orig.jpg",
              "./assets/servicios_spa.jpg",
              "./assets/dsc_6328.jpg"
            ],
            "includes": [
              "Cera natural hipoalergénica de resina y miel",
              "Materiales 100% desechables y esterilizados",
              "Gel calmante de aloe vera puro",
              "Cabina climatizada con total privacidad"
            ],
            "recommendations": "Evitar la exposición solar y saunas en las primeras 24 horas después de la depilación.",
            "slug": "depilacion"
          }
        ]
      }
    ]
  }
];

export const allServices = categoriesData.flatMap(cat => 
  cat.subcategories.flatMap(sub => 
    sub.services.map(srv => ({
      ...srv,
      categoryId: cat.id,
      categoryTitle: cat.title,
      subcategoryId: sub.id,
      subcategoryName: sub.name
    }))
  )
);

export function getServiceById(id) {
  return allServices.find(s => s.id === id || s.slug === id) || null;
}
