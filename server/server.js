import fs from 'fs';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Ensure upload directory exists
const uploadsDir = path.join(__dirname, '../public/assets/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve public static assets
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// API: Upload image from device
app.post('/api/upload', (req, res) => {
  try {
    const { image, filename } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'No se envió ninguna imagen' });
    }

    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Formato de imagen inválido' });
    }

    const extRaw = matches[1].split('/')[1] || 'jpg';
    const ext = extRaw.replace('jpeg', 'jpg').replace('svg+xml', 'svg');
    const safeName = (filename || 'foto').replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 30);
    const uniqueName = `${Date.now()}_${safeName}.${ext}`;
    
    const buffer = Buffer.from(matches[2], 'base64');
    fs.writeFileSync(path.join(uploadsDir, uniqueName), buffer);

    // Also copy to dist/assets/uploads if dist exists
    const distUploadsDir = path.join(__dirname, '../dist/assets/uploads');
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      if (!fs.existsSync(distUploadsDir)) fs.mkdirSync(distUploadsDir, { recursive: true });
      fs.writeFileSync(path.join(distUploadsDir, uniqueName), buffer);
    }

    const publicUrl = `/assets/uploads/${uniqueName}`;
    res.json({ success: true, url: publicUrl, filename: uniqueName });
  } catch (err) {
    console.error('Error in /api/upload:', err);
    res.status(500).json({ error: 'Error al procesar la imagen' });
  }
});

// API: Users
app.get('/api/users', (req, res) => {
  const users = db.getUsers().map(u => ({
    id: u.id,
    name: u.name,
    email: u.email,
    phone: u.phone,
    role: u.role,
    createdAt: u.createdAt
  }));
  res.json(users);
});

// API: Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const existing = db.getUserByEmail(email);
  if (existing) {
    return res.status(400).json({ error: 'Ya existe un usuario registrado con este correo' });
  }

  const user = db.createUser({ name, email, phone, password });
  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role
  });
});

// API: Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Ingresa correo y contraseña' });
  }

  const user = db.getUserByEmail(email);
  if (!user || user.passwordHash !== password) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role
  });
});

// API: Bookings
app.get('/api/bookings', (req, res) => {
  res.json(db.getBookings());
});

app.post('/api/bookings', (req, res) => {
  const {
    userId,
    userName,
    userEmail,
    userPhone,
    serviceId,
    serviceName,
    servicePrice,
    bookingDate,
    timeSlot,
    therapist,
    notes
  } = req.body;

  if (!userName || !userPhone || !serviceName || !bookingDate || !timeSlot) {
    return res.status(400).json({ error: 'Faltan datos requeridos para la reserva' });
  }

  const newBooking = db.createBooking({
    userId: userId || 'guest',
    userName,
    userEmail: userEmail || '',
    userPhone,
    serviceId: serviceId || '',
    serviceName,
    servicePrice: servicePrice || 0,
    bookingDate,
    timeSlot,
    therapist: therapist || 'Cualquier terapeuta disponible',
    notes: notes || ''
  });

  res.status(201).json(newBooking);
});

app.patch('/api/bookings/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = db.updateBookingStatus(id, status);
  if (!updated) {
    return res.status(404).json({ error: 'Reserva no encontrada' });
  }
  res.json(updated);
});

// API: Services CRUD
app.get('/api/services', (req, res) => {
  res.json(db.getServices());
});

app.post('/api/services', (req, res) => {
  const { categoryId, categoryTitle, subcategoryId, subcategoryName, name, description, duration, price, badge, image } = req.body;
  if (!name || !price || !duration) {
    return res.status(400).json({ error: 'Nombre, precio y duración son requeridos' });
  }
  const created = db.createService({
    categoryId: categoryId || 'spa-masajes',
    categoryTitle: categoryTitle || 'Spa & Masajes Terapéuticos',
    subcategoryId: subcategoryId || 'masajes-terapeuticos',
    subcategoryName: subcategoryName || 'Masajes Terapéuticos & Relajantes',
    name,
    description: description || '',
    duration,
    price: Number(price),
    badge: badge || 'Nuevo',
    image: image || '/assets/servicios_spa.jpg'
  });
  res.status(201).json(created);
});

app.put('/api/services/:id', (req, res) => {
  const { id } = req.params;
  const updated = db.updateService(id, req.body);
  if (!updated) {
    return res.status(404).json({ error: 'Servicio no encontrado' });
  }
  res.json(updated);
});

app.delete('/api/services/:id', (req, res) => {
  const { id } = req.params;
  const deleted = db.deleteService(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Servicio no encontrado' });
  }
  res.json({ success: true, id });
});

// Serve frontend in production build if dist exists
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[Momentos Spa Server] API corriendo en http://localhost:${PORT}`);
});
