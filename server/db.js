import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbFilePath = path.join(__dirname, 'database.json');

const initialData = {
  users: [
    {
      id: "usr_001",
      name: "Camila Rodríguez",
      email: "camila.rodriguez@gmail.com",
      phone: "+53 52849102",
      passwordHash: "123456",
      createdAt: "2026-03-01T14:30:00.000Z",
      role: "client"
    },
    {
      id: "usr_002",
      name: "Alejandro Morales",
      email: "alejandro.m@yahoo.es",
      phone: "+53 53920194",
      passwordHash: "123456",
      createdAt: "2026-03-03T11:15:00.000Z",
      role: "client"
    },
    {
      id: "usr_003",
      name: "Beatriz Valdés",
      email: "bvaldes@outlook.com",
      phone: "+53 54728190",
      passwordHash: "123456",
      createdAt: "2026-03-05T16:45:00.000Z",
      role: "client"
    },
    {
      id: "usr_admin",
      name: "Administrador Momentos Spa",
      email: "admin@momentospahabana.com",
      phone: "+53 59710688",
      passwordHash: "admin123",
      createdAt: "2026-01-01T10:00:00.000Z",
      role: "admin"
    }
  ],
  bookings: [
    {
      id: "bk_1001",
      userId: "usr_001",
      userName: "Camila Rodríguez",
      userEmail: "camila.rodriguez@gmail.com",
      userPhone: "+53 52849102",
      serviceId: "srv_headspa",
      serviceName: "Japanese Head Spa Premium",
      servicePrice: 65,
      bookingDate: "2026-03-12",
      timeSlot: "11:30 AM",
      therapist: "Elena Martínez",
      notes: "Sesión relajante con aromaterapia",
      status: "Confirmada",
      createdAt: "2026-03-08T10:20:00.000Z"
    },
    {
      id: "bk_1002",
      userId: "usr_002",
      userName: "Alejandro Morales",
      userEmail: "alejandro.m@yahoo.es",
      userPhone: "+53 53920194",
      serviceId: "srv_masaje_pareja",
      serviceName: "Ritual Momentos en Pareja Deluxe",
      servicePrice: 110,
      bookingDate: "2026-03-13",
      timeSlot: "04:00 PM",
      therapist: "Dúo Sincronizado",
      notes: "Aniversario",
      status: "Pendiente",
      createdAt: "2026-03-09T18:05:00.000Z"
    },
    {
      id: "bk_1003",
      userId: "usr_003",
      userName: "Beatriz Valdés",
      userEmail: "bvaldes@outlook.com",
      userPhone: "+53 54728190",
      serviceId: "srv_piedras",
      serviceName: "Masaje con Piedras Volcánicas Calientes",
      servicePrice: 50,
      bookingDate: "2026-03-14",
      timeSlot: "01:00 PM",
      therapist: "Sofía Navarro",
      notes: "Alivio lumbar",
      status: "Confirmada",
      createdAt: "2026-03-10T09:40:00.000Z"
    }
  ],
  services: [
    {
      id: "srv_relajante",
      categoryId: "spa-masajes",
      categoryTitle: "Spa & Masajes Terapéuticos",
      subcategoryId: "masajes-terapeuticos",
      subcategoryName: "Masajes Terapéuticos & Relajantes",
      name: "Masaje Relajante con Aromaterapia",
      description: "Técnica suave con aceites botánicos para aliviar estrés.",
      duration: "60 min",
      price: 35,
      badge: "Esencial",
      image: "/assets/servicios_spa.jpg"
    },
    {
      id: "srv_descontracturante",
      categoryId: "spa-masajes",
      categoryTitle: "Spa & Masajes Terapéuticos",
      subcategoryId: "masajes-terapeuticos",
      subcategoryName: "Masajes Terapéuticos & Relajantes",
      name: "Masaje Descontracturante Profundo",
      description: "Elimina nudos musculares en espalda, cuello y hombros.",
      duration: "60 min",
      price: 40,
      badge: "Alivio Rápido",
      image: "/assets/servicios_spa.jpg"
    },
    {
      id: "srv_piedras",
      categoryId: "spa-masajes",
      categoryTitle: "Spa & Masajes Terapéuticos",
      subcategoryId: "masajes-terapeuticos",
      subcategoryName: "Masajes Terapéuticos & Relajantes",
      name: "Masaje con Piedras Volcánicas Calientes",
      description: "Piedras de basalto que inducen relajación muscular profunda.",
      duration: "75 min",
      price: 50,
      badge: "Exclusivo",
      image: "/assets/servicios_spa.jpg"
    },
    {
      id: "srv_masaje_pareja",
      categoryId: "spa-masajes",
      categoryTitle: "Spa & Masajes Terapéuticos",
      subcategoryId: "rituales-pareja",
      subcategoryName: "Rituales en Pareja",
      name: "Ritual Momentos en Pareja Deluxe",
      description: "Suite privada, masaje simultáneo, copas de bienvenida y batas.",
      duration: "100 min",
      price: 110,
      badge: "Más Solicitado",
      image: "/assets/masaje_pareja.jpg"
    },
    {
      id: "srv_circuito_completo",
      categoryId: "spa-masajes",
      categoryTitle: "Spa & Masajes Terapéuticos",
      subcategoryId: "circuito-termal",
      subcategoryName: "Circuito Termal & Hidroterapia",
      name: "Circuito Termal Completo",
      description: "Sauna seco de cedro, jacuzzi con sales y ducha de sensaciones.",
      duration: "90 min",
      price: 45,
      badge: "Purificante",
      image: "/assets/circuito_termal.jpg"
    },
    {
      id: "srv_headspa",
      categoryId: "head-spa",
      categoryTitle: "Japanese Head Spa (Exclusivo)",
      subcategoryId: "head-spa-japonés",
      subcategoryName: "Ritual Capilar y Craneofacial",
      name: "Japanese Head Spa Premium & Facial",
      description: "Ducha de cascada circular, masaje craneal shiatsu y peeling.",
      duration: "80 min",
      price: 65,
      badge: "Tendencia Mundial",
      image: "/assets/head_spa.jpg"
    },
    {
      id: "srv_limpieza_facial",
      categoryId: "faciales-corporales",
      categoryTitle: "Faciales & Envolturas Corporales",
      subcategoryId: "tratamientos-faciales",
      subcategoryName: "Cuidado & Limpieza Facial",
      name: "Limpieza Facial Ultrasónica Profunda",
      description: "Extracción suave de impurezas, peeling enzimático y máscara calmante.",
      duration: "75 min",
      price: 45,
      badge: "Recomendado",
      image: "/assets/pestanas.jpg"
    },
    {
      id: "srv_chocolaterapia",
      categoryId: "faciales-corporales",
      categoryTitle: "Faciales & Envolturas Corporales",
      subcategoryId: "envolturas-corporales",
      subcategoryName: "Envolturas & Exfoliación Corporal",
      name: "Chocolaterapia Nutritiva Antiestrés",
      description: "Envoltura de cacao puro que nutre la piel y genera endorfinas.",
      duration: "75 min",
      price: 55,
      badge: "Delicia Sensorial",
      image: "/assets/snack_bandeja.jpg"
    },
    {
      id: "srv_manicura_rusa",
      categoryId: "salon-belleza",
      categoryTitle: "Salón de Belleza & Estética",
      subcategoryId: "manicura-pedicura",
      subcategoryName: "Manicura & Pedicura Spa",
      name: "Manicura Rusa con Semipermanente",
      description: "Técnica con torno y esmaltado de alta precisión milimétrica.",
      duration: "75 min",
      price: 30,
      badge: "Alta Precisión",
      image: "/assets/salon_belleza.jpg"
    },
    {
      id: "srv_lifting_pestanas",
      categoryId: "salon-belleza",
      categoryTitle: "Salón de Belleza & Estética",
      subcategoryId: "cejas-pestanas",
      subcategoryName: "Mirada: Pestañas & Cejas",
      name: "Lifting de Pestañas con Keratina",
      description: "Curvatura natural duradera y tinte botánico que realza la mirada.",
      duration: "60 min",
      price: 35,
      badge: "Efecto Rímel",
      image: "/assets/pestanas.jpg"
    },
    {
      id: "srv_botox_capilar",
      categoryId: "salon-belleza",
      categoryTitle: "Salón de Belleza & Estética",
      subcategoryId: "peluqueria-estilismo",
      subcategoryName: "Peluquería & Terapia Capilar",
      name: "Botox Capilar Reparación Extrema",
      description: "Relleno de fibra capilar con colágeno para eliminar frizz.",
      duration: "90 min",
      price: 55,
      badge: "Brillo Espejo",
      image: "/assets/salon_belleza.jpg"
    }
  ]
};

function readDb() {
  if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2), 'utf8');
    return initialData;
  }
  try {
    const raw = fs.readFileSync(dbFilePath, 'utf8');
    const data = JSON.parse(raw);
    if (!data.services || data.services.length === 0) {
      data.services = initialData.services;
      fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
    }
    return data;
  } catch (err) {
    fs.writeFileSync(dbFilePath, JSON.stringify(initialData, null, 2), 'utf8');
    return initialData;
  }
}

function writeDb(data) {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export const db = {
  getUsers: () => readDb().users,
  getUserById: (id) => readDb().users.find(u => u.id === id),
  getUserByEmail: (email) => readDb().users.find(u => u.email.toLowerCase() === email.toLowerCase()),
  createUser: (userData) => {
    const current = readDb();
    const newUser = {
      id: "usr_" + Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      passwordHash: userData.password,
      createdAt: new Date().toISOString(),
      role: "client"
    };
    current.users.push(newUser);
    writeDb(current);
    return newUser;
  },
  getBookings: () => readDb().bookings,
  createBooking: (bookingData) => {
    const current = readDb();
    const newBooking = {
      id: "bk_" + Date.now(),
      ...bookingData,
      status: "Pendiente",
      createdAt: new Date().toISOString()
    };
    current.bookings.unshift(newBooking);
    writeDb(current);
    return newBooking;
  },
  updateBookingStatus: (id, status) => {
    const current = readDb();
    const idx = current.bookings.findIndex(b => b.id === id);
    if (idx !== -1) {
      current.bookings[idx].status = status;
      writeDb(current);
      return current.bookings[idx];
    }
    return null;
  },
  // Services CRUD
  getServices: () => readDb().services || initialData.services,
  createService: (serviceData) => {
    const current = readDb();
    if (!current.services) current.services = [];
    const newService = {
      id: "srv_" + Date.now(),
      ...serviceData
    };
    current.services.push(newService);
    writeDb(current);
    return newService;
  },
  updateService: (id, serviceData) => {
    const current = readDb();
    const idx = (current.services || []).findIndex(s => s.id === id);
    if (idx !== -1) {
      current.services[idx] = { ...current.services[idx], ...serviceData, id };
      writeDb(current);
      return current.services[idx];
    }
    return null;
  },
  deleteService: (id) => {
    const current = readDb();
    if (!current.services) return false;
    const initialLen = current.services.length;
    current.services = current.services.filter(s => s.id !== id);
    if (current.services.length !== initialLen) {
      writeDb(current);
      return true;
    }
    return false;
  }
};
