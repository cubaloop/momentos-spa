import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Users, Calendar, Search, Download, ShieldCheck, RefreshCw, 
  MessageSquare, Check, Clock, Plus, Edit2, Trash2, Tag, DollarSign, 
  Layers, Upload, Image as ImageIcon, Star, Eye, ImagePlus, AlertCircle,
  Megaphone, BellRing, Save, FileText
} from 'lucide-react';
import { categoriesData, allServices } from '../data/servicesData';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboardModal({ isOpen, onClose }) {
  const { user } = useAuth();
  // Tab states: 'services' | 'announcements' | 'clients' | 'bookings'
  const [activeTab, setActiveTab] = useState('services');
  
  // Synchronous state initialization so it NEVER renders a blank screen
  const [services, setServices] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_custom_services');
      return saved ? JSON.parse(saved) : allServices;
    } catch (e) {
      return allServices;
    }
  });

  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_registered_users');
      return saved ? JSON.parse(saved) : [
        { id: 'usr_admin', name: 'Administrador Momentos', email: 'admin@momentospahabana.com', phone: '+53 59710688', role: 'admin', createdAt: '2026-09-01T10:00:00Z' }
      ];
    } catch (e) {
      return [];
    }
  });

  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Announcements state
  const [announcement, setAnnouncement] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_announcement');
      return saved ? JSON.parse(saved) : {
        enabled: true,
        text: '✨ Reserva tu momento de relajación en Miramar. Consulta disponibilidad y agenda tu cita por WhatsApp.',
        badge: 'AVISO IMPORTANTE'
      };
    } catch (e) {
      return { enabled: true, text: 'Bienvenido a Momentos Spa', badge: 'AVISO' };
    }
  });
  const [announcementSaved, setAnnouncementSaved] = useState(false);

  // Official Spa Schedule State
  const defaultSchedule = {
    openDays: 'Miércoles a Domingo',
    closedDays: 'Lunes y Martes',
    openTime: '10:00 AM',
    closeTime: '06:00 PM',
    openMin: 600,
    closeMin: 1080,
    blockMonTue: true,
    notes: 'Lunes y martes cerrado por mantenimiento e higienización.'
  };

  const [schedule, setSchedule] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_schedule');
      return saved ? JSON.parse(saved) : defaultSchedule;
    } catch (e) {
      return defaultSchedule;
    }
  });
  const [scheduleSaved, setScheduleSaved] = useState(false);

  // Editable Texts & Headlines State
  const defaultSiteContent = {
    heroSlogan: "Siempre pensando en ti",
    heroTitle: "El Arte del Bienestar & Relajación Absoluta",
    heroSubtitle: "Sumérgete en un oasis sensorial privado en el corazón de Miramar. Masajes terapéuticos, tratamientos faciales, maderoterapia corporal, salón de belleza y paquetes para parejas diseñados para renovar tu cuerpo y espíritu.",
    catalogTitle: "Tratamientos & Tarifas",
    catalogSubtitle: "Haz clic en cualquier servicio para abrir su página propia con fotos reales y explicación detallada.",
    packagesTitle: "Nuestros Paquetes Signature Más Solicitados",
    packagesSubtitle: "Selección de experiencias sensoriales y combinadas diseñadas para brindar la máxima desconexión, privacidad y bienestar.",
    aboutQuote: "Cuidar de tu salud y serenidad debe ser tan constante como tu respiración. Por eso en Momentos Spa nuestro lema es Siempre pensando en ti."
  };

  const [siteContent, setSiteContent] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_site_content');
      return saved ? { ...defaultSiteContent, ...JSON.parse(saved) } : defaultSiteContent;
    } catch (e) {
      return defaultSiteContent;
    }
  });
  const [siteContentSaved, setSiteContentSaved] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Service Edit / Create Modal State
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    categoryId: 'spa-masajes',
    categoryTitle: 'Servicios de Spa y Masajes',
    subcategoryId: 'masajes',
    subcategoryName: 'Masajes Terapéuticos y Relajantes',
    name: '',
    duration: '60 min',
    price: 35,
    description: '',
    badge: 'Popular',
    image: './assets/catalog/masaje-relajante-u.webp',
    gallery: ['./assets/catalog/masaje-relajante-u.webp']
  });

  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef(null);

  // Sync latest data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [uRes, bRes, sRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/bookings'),
        fetch('/api/services')
      ]);
      if (uRes.ok) {
        const u = await uRes.json();
        if (Array.isArray(u)) setUsers(u);
      }
      if (bRes.ok) {
        const b = await bRes.json();
        if (Array.isArray(b)) setBookings(b);
      }
      if (sRes.ok) {
        const s = await sRes.json();
        if (Array.isArray(s) && s.length > 0) setServices(s);
      }
    } catch (e) {
      console.log('Modo local / GitHub Pages activo');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && user && user.role === 'admin') {
      fetchData();
    }
  }, [isOpen, user]);

  if (!isOpen || !user || user.role !== 'admin') return null;

  // Safe search filters
  const cleanSearch = (searchTerm || '').toLowerCase().trim();

  const filteredServices = (services || []).filter(s => {
    if (!s) return false;
    return (s.name || '').toLowerCase().includes(cleanSearch) ||
           (s.categoryTitle || '').toLowerCase().includes(cleanSearch) ||
           (s.subcategoryName || '').toLowerCase().includes(cleanSearch) ||
           (s.badge || '').toLowerCase().includes(cleanSearch);
  });

  const filteredUsers = (users || []).filter(u => {
    if (!u) return false;
    return (u.name || '').toLowerCase().includes(cleanSearch) ||
           (u.email || '').toLowerCase().includes(cleanSearch) ||
           (u.phone || '').toLowerCase().includes(cleanSearch);
  });

  const filteredBookings = (bookings || []).filter(b => {
    if (!b) return false;
    return (b.userName || '').toLowerCase().includes(cleanSearch) ||
           (b.serviceName || '').toLowerCase().includes(cleanSearch) ||
           (b.userPhone || '').toLowerCase().includes(cleanSearch);
  });

  // Handle image upload from device
  const handleDeviceUpload = (e, target = 'main') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert('La imagen seleccionada supera los 15 MB. Por favor sube una imagen de menor tamaño.');
      return;
    }

    setUploadingImage(true);
    const reader = new FileReader();
    reader.onload = async () => {
      let finalUrl = reader.result;

      // Try backend upload if available
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: reader.result, filename: file.name })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.url) {
            finalUrl = data.url;
          }
        }
      } catch (err) {}

      if (target === 'main') {
        const currentGal = Array.isArray(serviceForm.gallery) ? [...serviceForm.gallery] : [];
        if (!currentGal.includes(finalUrl)) currentGal.unshift(finalUrl);
        setServiceForm(prev => ({
          ...prev,
          image: finalUrl,
          gallery: currentGal
        }));
      } else if (target === 'gallery') {
        const currentGal = Array.isArray(serviceForm.gallery) ? [...serviceForm.gallery] : [];
        setServiceForm(prev => ({
          ...prev,
          gallery: [...currentGal, finalUrl]
        }));
      }
      setUploadingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleOpenCreateService = () => {
    setEditingService(null);
    setServiceForm({
      categoryId: 'spa-masajes',
      categoryTitle: 'Servicios de Spa y Masajes',
      subcategoryId: 'masajes',
      subcategoryName: 'Masajes Terapéuticos y Relajantes',
      name: '',
      duration: '60 min',
      price: 35,
      description: '',
      badge: 'Nuevo',
      image: './assets/catalog/masaje-relajante-u.webp',
      gallery: ['./assets/catalog/masaje-relajante-u.webp']
    });
    setServiceModalOpen(true);
  };

  const handleOpenEditService = (srv) => {
    setEditingService(srv);
    setServiceForm({
      categoryId: srv.categoryId || 'spa-masajes',
      categoryTitle: srv.categoryTitle || 'Servicios de Spa y Masajes',
      subcategoryId: srv.subcategoryId || 'masajes',
      subcategoryName: srv.subcategoryName || 'Masajes Terapéuticos y Relajantes',
      name: srv.name || '',
      duration: srv.duration || '60 min',
      price: srv.price || 0,
      description: srv.description || '',
      badge: srv.badge || 'Popular',
      image: srv.image || './assets/catalog/masaje-relajante-u.webp',
      gallery: Array.isArray(srv.gallery) && srv.gallery.length > 0 ? [...srv.gallery] : [srv.image || './assets/catalog/masaje-relajante-u.webp']
    });
    setServiceModalOpen(true);
  };

  const handleSaveService = async (e) => {
    e.preventDefault();
    const updatedSrv = editingService 
      ? { ...editingService, ...serviceForm }
      : { 
          id: 'srv_' + Date.now(), 
          ...serviceForm, 
          slug: (serviceForm.name || 'servicio').toLowerCase().replace(/\s+/g, '-') 
        };

    try {
      if (editingService) {
        await fetch(`/api/services/${editingService.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(serviceForm)
        });
      } else {
        await fetch('/api/services', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(serviceForm)
        });
      }
    } catch (err) {}

    setServices(prev => {
      const next = editingService 
        ? prev.map(s => s.id === updatedSrv.id ? updatedSrv : s)
        : [updatedSrv, ...prev];
      try {
        localStorage.setItem('momentos_custom_services', JSON.stringify(next));
      } catch (e) {}
      window.dispatchEvent(new Event('momentos_services_updated'));
      return next;
    });

    setServiceModalOpen(false);
  };

  const handleDeleteService = async (srvId) => {
    if (!confirm("¿Deseas eliminar este servicio del catálogo?")) return;
    try {
      await fetch(`/api/services/${srvId}`, { method: 'DELETE' });
    } catch (err) {}

    setServices(prev => {
      const next = prev.filter(s => s.id !== srvId);
      try {
        localStorage.setItem('momentos_custom_services', JSON.stringify(next));
      } catch (e) {}
      window.dispatchEvent(new Event('momentos_services_updated'));
      return next;
    });
  };

  const handleSaveAnnouncement = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('momentos_announcement', JSON.stringify(announcement));
      setAnnouncementSaved(true);
      setTimeout(() => setAnnouncementSaved(false), 3000);
    } catch (e) {}
  };

  const handleSaveSchedule = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('momentos_schedule', JSON.stringify(schedule));
      setScheduleSaved(true);
      setTimeout(() => setScheduleSaved(false), 3000);
      window.dispatchEvent(new Event('momentos_schedule_updated'));
    } catch (e) {}
  };

  const handleSaveSiteContent = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('momentos_site_content', JSON.stringify(siteContent));
      setSiteContentSaved(true);
      setTimeout(() => setSiteContentSaved(false), 3000);
      window.dispatchEvent(new Event('momentos_content_updated'));
    } catch (e) {}
  };

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (activeTab === 'services') {
      csvContent += "ID,Categoria,Subcategoria,Nombre,Duracion,Precio,Etiqueta\n";
      filteredServices.forEach(s => {
        csvContent += `"${s.id}","${s.categoryTitle}","${s.subcategoryName}","${s.name}","${s.duration}","${s.price}","${s.badge}"\n`;
      });
    } else if (activeTab === 'clients') {
      csvContent += "ID,Nombre,Correo,Celular,Fecha Registro,Rol\n";
      filteredUsers.forEach(u => {
        csvContent += `"${u.id}","${u.name}","${u.email}","${u.phone}","${u.createdAt}","${u.role}"\n`;
      });
    } else {
      csvContent += "ID,Cliente,Telefono,Correo,Servicio,Precio,Fecha,Hora,Estado\n";
      filteredBookings.forEach(b => {
        csvContent += `"${b.id}","${b.userName}","${b.userPhone}","${b.userEmail}","${b.serviceName}","${b.servicePrice}","${b.bookingDate}","${b.timeSlot}","${b.status}"\n`;
      });
    }
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `momentos_spa_${activeTab}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-100 flex flex-col overflow-hidden animate-fade-in text-stone-900">
      
      {/* Top Header */}
      <div className="bg-mahogany-950 text-white px-6 py-4 flex items-center justify-between shadow-lg border-b border-mahogany-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-title text-xl font-bold text-white">Momentos Spa</span>
              <span className="px-2 py-0.5 bg-gold text-mahogany-950 font-bold text-[10px] rounded uppercase tracking-wider">
                Panel Administrador
              </span>
            </div>
            <span className="text-xs text-cream-300">
              Gestión de Servicios, Fotos desde Dispositivo, Anuncios y Clientes
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchData}
            title="Refrescar Datos"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Actualizar</span>
          </button>
          
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-mahogany-950 hover:bg-cream-100 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
          >
            <X className="w-4 h-4" />
            <span>Cerrar Panel</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation Bar */}
      <div className="bg-white border-b border-stone-200 px-6 py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-sm">
        
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'services'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4 text-gold" />
            <span>Catálogo & Servicios ({services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('announcements')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'announcements'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Megaphone className="w-4 h-4 text-amber-600" />
            <span>Anuncios</span>
          </button>

          <button
            onClick={() => setActiveTab('texts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'texts'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <FileText className="w-4 h-4 text-gold-dark" />
            <span>Textos & Encabezados</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'schedule'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Horarios del Spa</span>
          </button>

          <button
            onClick={() => setActiveTab('clients')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'clients'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Clientes ({users.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'bookings'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Citas Registradas ({bookings.length})</span>
          </button>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          {activeTab !== 'announcements' && (
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, categoría..."
                className="w-full text-xs pl-8 pr-3 py-2 bg-stone-50 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
              />
            </div>
          )}

          {activeTab === 'services' && (
            <button
              onClick={handleOpenCreateService}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nuevo Servicio</span>
            </button>
          )}

          {activeTab !== 'announcements' && (
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 transition-colors shadow-sm whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-stone-500" />
              <span>Exportar</span>
            </button>
          )}
        </div>

      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-6 bg-cream-50/50">
        
        {/* TAB 1: SERVICIOS & PRECIOS & FOTOS */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
              <div className="text-xs text-stone-600">
                Mostrando <strong className="text-stone-900">{filteredServices.length}</strong> servicios en el catálogo. Puedes cambiar títulos, precios, duraciones, fotos individuales y subirlas desde tu dispositivo móvil o computadora.
              </div>
              <button
                onClick={handleOpenCreateService}
                className="px-4 py-2 bg-mahogany-950 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shrink-0 shadow"
              >
                <Plus className="w-4 h-4 text-gold" />
                <span>Agregar Servicio</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-stone-100 text-stone-600 uppercase text-[10px] tracking-wider font-bold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">Foto</th>
                    <th className="py-3 px-4">Nombre del Servicio</th>
                    <th className="py-3 px-4">Categoría</th>
                    <th className="py-3 px-4">Duración</th>
                    <th className="py-3 px-4">Precio (USD)</th>
                    <th className="py-3 px-4">Etiqueta</th>
                    <th className="py-3 px-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredServices.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-12 text-stone-400">
                        No se encontraron servicios que coincidan con la búsqueda.
                      </td>
                    </tr>
                  ) : (
                    filteredServices.map((srv) => (
                      <tr key={srv.id} className="hover:bg-cream-100/60 transition-colors">
                        <td className="py-3 px-4">
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-stone-200 bg-stone-900 shrink-0">
                            <img 
                              src={srv.image || './assets/catalog/masaje-relajante-u.webp'} 
                              alt={srv.name} 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                e.currentTarget.src = './assets/catalog/masaje-relajante-u.webp';
                              }}
                            />
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-stone-900 text-sm">{srv.name}</div>
                          <div className="text-[11px] text-stone-500 line-clamp-1 max-w-md">{srv.description}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-stone-800">{srv.categoryTitle}</div>
                          <div className="text-[10px] text-stone-400">{srv.subcategoryName}</div>
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-stone-700">{srv.duration}</td>
                        <td className="py-3 px-4 font-bold text-mahogany-950 font-mono text-sm">
                          ${srv.price} USD
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200 rounded-full font-bold text-[10px]">
                            {srv.badge || 'Catálogo'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            onClick={() => handleOpenEditService(srv)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-mahogany-950 bg-cream-200 hover:bg-cream-300 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            <span>Editar</span>
                          </button>
                          <button
                            onClick={() => handleDeleteService(srv.id)}
                            className="inline-flex items-center p-1.5 text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors"
                            title="Eliminar servicio"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: ANUNCIOS & BANNERS */}
        {activeTab === 'announcements' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-title font-bold text-xl text-mahogany-950">
                    Gestión de Anuncios y Avisos
                  </h3>
                  <p className="text-xs text-stone-500">
                    Modifica el anuncio o aviso que verán los clientes en la parte superior y en las páginas del sitio.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveAnnouncement} className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-2xl border border-stone-200">
                  <input
                    type="checkbox"
                    id="ann_enabled"
                    checked={announcement.enabled}
                    onChange={(e) => setAnnouncement({ ...announcement, enabled: e.target.checked })}
                    className="w-4 h-4 rounded text-mahogany-950 focus:ring-mahogany-900"
                  />
                  <label htmlFor="ann_enabled" className="text-xs font-bold text-stone-800 cursor-pointer">
                    Mostrar anuncio activo a los visitantes
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Etiqueta del Anuncio
                  </label>
                  <input
                    type="text"
                    value={announcement.badge}
                    onChange={(e) => setAnnouncement({ ...announcement, badge: e.target.value })}
                    placeholder="Ej. AVISO ESPECIAL o PROMOCIÓN"
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Texto del Anuncio
                  </label>
                  <textarea
                    rows={3}
                    value={announcement.text}
                    onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })}
                    placeholder="Escribe el mensaje o anuncio..."
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 leading-relaxed"
                  />
                </div>

                {/* Live Preview of Announcement */}
                <div className="p-4 bg-mahogany-950 text-white rounded-2xl space-y-1">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider block">Vista previa:</span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-gold text-mahogany-950 font-bold text-[10px]">
                      {announcement.badge}
                    </span>
                    <span className="text-cream-100">{announcement.text}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2 transition-all"
                  >
                    <Save className="w-4 h-4 text-gold" />
                    <span>Guardar y Publicar Anuncio</span>
                  </button>

                  {announcementSaved && (
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 animate-fade-in">
                      <Check className="w-4 h-4" />
                      ¡Anuncio guardado con éxito!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: TEXTOS & ENCABEZADOS DEL SITIO */}
        {activeTab === 'texts' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-gold-dark flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif-title font-bold text-xl text-mahogany-950">
                    Editor de Textos & Encabezados
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Modifica en vivo los lemas, titulares de bienvenida, subtítulos de catálogo y textos principales de la página.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveSiteContent} className="space-y-5">
                
                {/* Lema Oficial */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Lema Oficial del Spa:
                  </label>
                  <input
                    type="text"
                    value={siteContent.heroSlogan}
                    onChange={(e) => setSiteContent({ ...siteContent, heroSlogan: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Siempre pensando en ti"
                  />
                  <span className="text-[11px] text-stone-400">Aparece en la cabecera, pie de página y cintillo de presentación.</span>
                </div>

                {/* Titular Principal Hero */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Título Principal de Portada (Hero):
                  </label>
                  <input
                    type="text"
                    value={siteContent.heroTitle}
                    onChange={(e) => setSiteContent({ ...siteContent, heroTitle: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                    placeholder="El Arte del Bienestar & Relajación Absoluta"
                  />
                </div>

                {/* Subtítulo Hero */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Subtítulo Descriptivo de Bienvenida:
                  </label>
                  <textarea
                    rows={3}
                    value={siteContent.heroSubtitle}
                    onChange={(e) => setSiteContent({ ...siteContent, heroSubtitle: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {/* Título de Catálogo */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 block">
                      Título Sección Catálogo:
                    </label>
                    <input
                      type="text"
                      value={siteContent.catalogTitle}
                      onChange={(e) => setSiteContent({ ...siteContent, catalogTitle: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                    />
                  </div>

                  {/* Título de Paquetes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 block">
                      Título Sección Paquetes Signature:
                    </label>
                    <input
                      type="text"
                      value={siteContent.packagesTitle}
                      onChange={(e) => setSiteContent({ ...siteContent, packagesTitle: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                    />
                  </div>
                </div>

                {/* Subtítulo Catálogo */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Subtítulo Sección Catálogo:
                  </label>
                  <input
                    type="text"
                    value={siteContent.catalogSubtitle}
                    onChange={(e) => setSiteContent({ ...siteContent, catalogSubtitle: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                  />
                </div>

                {/* Cita Sobre Nosotros */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Cita Destacada (Filosofía Momentos):
                  </label>
                  <textarea
                    rows={2}
                    value={siteContent.aboutQuote}
                    onChange={(e) => setSiteContent({ ...siteContent, aboutQuote: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none leading-relaxed"
                  />
                </div>

                {/* Botón Guardar */}
                <div className="pt-3 flex items-center gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Save className="w-4 h-4 text-gold" />
                    <span>Guardar Cambios de Texto</span>
                  </button>

                  {siteContentSaved && (
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 animate-fade-in">
                      <Check className="w-4 h-4" />
                      ¡Textos actualizados al instante en todo el sitio web!
                    </span>
                  )}
                </div>

              </form>
            </div>
          </div>
        )}

                {/* TAB HORARIOS DE ATENCIÓN */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>Configuración del Horario Oficial de Momentos Spa</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Administra los días de apertura, horas oficiales y bloqueo de días no laborables para el calendario de reservas y toda la página web.
                </p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Horario Oficial Activo: <strong>Miércoles a Domingo (10:00 AM – 6:00 PM)</strong></span>
              </div>
            </div>

            <form onSubmit={handleSaveSchedule} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Días Abiertos */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Días Laborables Oficiales:
                  </label>
                  <input
                    type="text"
                    value={schedule.openDays}
                    onChange={(e) => setSchedule({ ...schedule, openDays: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Miércoles a Domingo"
                  />
                  <span className="text-[11px] text-stone-400">Días que el spa recibe clientes en cabinas.</span>
                </div>

                {/* Días Cerrados */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Días Cerrados por Mantenimiento:
                  </label>
                  <input
                    type="text"
                    value={schedule.closedDays}
                    onChange={(e) => setSchedule({ ...schedule, closedDays: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                    placeholder="Lunes y Martes"
                  />
                  <span className="text-[11px] text-stone-400">Días bloqueados automáticamente en el calendario web.</span>
                </div>

                {/* Hora de Apertura */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Hora Oficial de Apertura:
                  </label>
                  <select
                    value={schedule.openTime}
                    onChange={(e) => setSchedule({ ...schedule, openTime: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none bg-white"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM (Oficial)</option>
                    <option value="11:00 AM">11:00 AM</option>
                  </select>
                </div>

                {/* Hora de Cierre */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    Hora Oficial de Cierre:
                  </label>
                  <select
                    value={schedule.closeTime}
                    onChange={(e) => setSchedule({ ...schedule, closeTime: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none bg-white"
                  >
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM (Oficial)</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                  </select>
                </div>

              </div>

              {/* Bloqueo automático Lunes y Martes */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-xs text-stone-900 block">
                    Bloqueo Estricto de Lunes y Martes en el Sistema de Citas
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Evita que los clientes seleccionen citas en lunes o martes en el calendario interactivo.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={schedule.blockMonTue}
                  onChange={(e) => setSchedule({ ...schedule, blockMonTue: e.target.checked })}
                  className="w-5 h-5 rounded text-mahogany-900 focus:ring-gold cursor-pointer"
                />
              </div>

              {/* Notas de Atención */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  Nota o Política de Horarios para Clientes:
                </label>
                <textarea
                  rows={2}
                  value={schedule.notes}
                  onChange={(e) => setSchedule({ ...schedule, notes: e.target.value })}
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-gold outline-none"
                  placeholder="Lunes y martes cerrado por mantenimiento e higienización."
                />
              </div>

              {/* Botón Guardar */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Save className="w-4 h-4 text-gold" />
                  <span>Guardar Horario Oficial</span>
                </button>

                {scheduleSaved && (
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 animate-fade-in">
                    <Check className="w-4 h-4" />
                    ¡Horario oficial actualizado en todo el sitio web!
                  </span>
                )}
              </div>

            </form>
          </div>
        )}

        {/* TAB 3: CLIENTES REGISTRADOS */}
        {activeTab === 'clients' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-100 text-stone-600 uppercase text-[10px] tracking-wider font-bold border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">Usuario / Cliente</th>
                  <th className="py-3 px-4">Correo Electrónico</th>
                  <th className="py-3 px-4">Celular / WhatsApp</th>
                  <th className="py-3 px-4">Rol</th>
                  <th className="py-3 px-4 text-right">Contacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-12 text-stone-400">
                      No hay clientes registrados en este momento.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => {
                    const cleanPhone = (u.phone || '').replace(/[^0-9]/g, '');
                    return (
                      <tr key={u.id || u.email} className="hover:bg-cream-100/60 transition-colors">
                        <td className="py-3 px-4 font-semibold text-stone-900 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-mahogany-950 text-gold flex items-center justify-center font-bold text-xs shrink-0">
                            {(u.name || 'U').charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div>{u.name || 'Usuario'}</div>
                            <span className="text-[10px] text-stone-400 font-mono">ID: {u.id || 'usr_client'}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono text-[11px] text-stone-600">{u.email}</td>
                        <td className="py-3 px-4 font-mono font-bold text-mahogany-950 text-[11px]">{u.phone}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            u.role === 'admin' ? 'bg-gold/20 text-gold-dark border border-gold/30' : 'bg-stone-100 text-stone-700'
                          }`}>
                            {u.role || 'cliente'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={`https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(u.name || '')},%20te%20contactamos%20de%20Momentos%20Spa%20Habana.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#25D366] hover:text-emerald-700 font-bold text-xs bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 transition-colors"
                          >
                            <MessageSquare className="w-3 h-3 fill-current" />
                            <span>WhatsApp</span>
                          </a>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: RESERVAS & CITAS */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-100 text-stone-600 uppercase text-[10px] tracking-wider font-bold border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">ID Cita</th>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Servicio</th>
                  <th className="py-3 px-4">Fecha & Hora</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4 text-right">WhatsApp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-stone-400">
                      No hay citas agendadas registradas aún.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((b) => {
                    const cleanPhone = (b.userPhone || '').replace(/[^0-9]/g, '');
                    return (
                      <tr key={b.id} className="hover:bg-cream-100/60 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-stone-500 text-[11px]">{b.id}</td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-stone-900">{b.userName}</div>
                          <div className="text-[10px] text-stone-500 font-mono">{b.userPhone}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-stone-900">{b.serviceName}</div>
                          <div className="text-xs font-bold text-mahogany-900">${b.servicePrice} USD</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-stone-900">{b.bookingDate}</div>
                          <div className="text-xs text-mahogany-800 font-medium">{b.timeSlot}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {b.status || 'Confirmada'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={`https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(b.userName || '')},%20te%20contactamos%20de%20Momentos%20Spa.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* MODAL EDITAR / CREAR SERVICIO CON SUBIDA DE FOTOS DESDE EL DISPOSITIVO */}
      {serviceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in text-stone-900">
          <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            
            <div className="bg-mahogany-950 text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-gold" />
                <h4 className="font-serif-title text-xl font-bold">
                  {editingService ? 'Editar Servicio y Fotos' : 'Nuevo Servicio'}
                </h4>
              </div>
              <button
                onClick={() => setServiceModalOpen(false)}
                className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="p-6 space-y-5 overflow-y-auto flex-1">
              
              {/* Foto Principal y Subida desde Dispositivo */}
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-mahogany-950">
                  Foto Principal del Servicio
                </label>
                
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-stone-300 bg-stone-900 shrink-0 shadow-md">
                    <img
                      src={serviceForm.image || './assets/catalog/masaje-relajante-u.webp'}
                      alt="Foto Principal"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={(e) => handleDeviceUpload(e, 'main')}
                      className="hidden"
                    />
                    
                    <button
                      type="button"
                      disabled={uploadingImage}
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2.5 bg-mahogany-950 hover:bg-mahogany-900 text-white rounded-xl text-xs font-bold transition-all shadow flex items-center gap-2 cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-gold" />
                      <span>{uploadingImage ? 'Subiendo...' : 'Subir foto desde dispositivo'}</span>
                    </button>

                    <div className="text-[11px] text-stone-500">
                      Sube fotos en formato JPG, PNG o WebP desde tu celular o computadora.
                    </div>
                  </div>
                </div>

                {/* Galería adicional del servicio */}
                <div className="pt-2 border-t border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-700">Fotos en el carrusel de este servicio ({serviceForm.gallery?.length || 0}):</span>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {(serviceForm.gallery || []).map((imgUrl, idx) => (
                      <div key={idx} className="relative w-14 h-14 rounded-xl overflow-hidden border border-stone-300 shrink-0 group">
                        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => {
                            const newGal = serviceForm.gallery.filter((_, i) => i !== idx);
                            setServiceForm({ ...serviceForm, gallery: newGal });
                          }}
                          className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}

                    <label className="w-14 h-14 rounded-xl border-2 border-dashed border-stone-300 hover:border-mahogany-900 flex flex-col items-center justify-center text-stone-400 hover:text-mahogany-950 cursor-pointer shrink-0 transition-colors">
                      <ImagePlus className="w-4 h-4" />
                      <span className="text-[9px] mt-0.5">+ Foto</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleDeviceUpload(e, 'gallery')}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Nombre del Servicio */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Nombre del Servicio</label>
                <input
                  type="text"
                  required
                  value={serviceForm.name}
                  onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                  placeholder="Ej. Masaje Relajante de 60 min"
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-stone-50"
                />
              </div>

              {/* Categoría y Subcategoría */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Categoría</label>
                  <select
                    value={serviceForm.categoryId}
                    onChange={(e) => {
                      const selectedCat = categoriesData.find(c => c.id === e.target.value);
                      setServiceForm({
                        ...serviceForm,
                        categoryId: e.target.value,
                        categoryTitle: selectedCat?.title || e.target.value,
                        subcategoryId: selectedCat?.subcategories?.[0]?.id || '',
                        subcategoryName: selectedCat?.subcategories?.[0]?.name || ''
                      });
                    }}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-white"
                  >
                    {categoriesData.map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Subcategoría</label>
                  <select
                    value={serviceForm.subcategoryId}
                    onChange={(e) => {
                      const cat = categoriesData.find(c => c.id === serviceForm.categoryId);
                      const sub = cat?.subcategories?.find(s => s.id === e.target.value);
                      setServiceForm({
                        ...serviceForm,
                        subcategoryId: e.target.value,
                        subcategoryName: sub?.name || e.target.value
                      });
                    }}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-white"
                  >
                    {(categoriesData.find(c => c.id === serviceForm.categoryId)?.subcategories || []).map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Precio, Duración y Badge */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Precio (USD)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={serviceForm.price}
                    onChange={(e) => setServiceForm({ ...serviceForm, price: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-stone-50 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Duración</label>
                  <input
                    type="text"
                    required
                    value={serviceForm.duration}
                    onChange={(e) => setServiceForm({ ...serviceForm, duration: e.target.value })}
                    placeholder="60 min"
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Etiqueta (Badge)</label>
                  <input
                    type="text"
                    value={serviceForm.badge}
                    onChange={(e) => setServiceForm({ ...serviceForm, badge: e.target.value })}
                    placeholder="Popular, Express..."
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-stone-50"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Descripción del Servicio</label>
                <textarea
                  rows={3}
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  placeholder="Detalles sobre las técnicas aplicadas y beneficios..."
                  className="w-full text-xs p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-stone-50 leading-relaxed"
                />
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setServiceModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-mahogany-950 hover:bg-mahogany-900 text-white rounded-xl text-xs font-bold shadow transition-all flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4 text-gold" />
                  <span>Guardar Servicio</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
