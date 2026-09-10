import React, { useState, useEffect } from 'react';
import { X, Users, Calendar, Search, Download, ExternalLink, ShieldCheck, RefreshCw, MessageSquare, Check, Clock, Plus, Edit2, Trash2, Tag, DollarSign, Layers, Upload, Image as ImageIcon, Star, Eye, ImagePlus, AlertCircle } from 'lucide-react';
import { categoriesData } from '../data/servicesData';

export default function AdminDashboardModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('clients'); // 'clients', 'bookings', 'services'
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Service Edit / Create Modal State
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null); // null = create new
  const [serviceForm, setServiceForm] = useState({
    categoryId: 'spa-masajes',
    categoryTitle: 'Spa & Masajes Terapéuticos',
    subcategoryId: 'masajes-terapeuticos',
    subcategoryName: 'Masajes Terapéuticos & Relajantes',
    name: '',
    duration: '60 min',
    price: 35,
    description: '',
    badge: 'Popular',
    image: '/assets/servicios_spa.jpg'
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [uRes, bRes, sRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/bookings'),
        fetch('/api/services')
      ]);
      const [uData, bData, sData] = await Promise.all([uRes.json(), bRes.json(), sRes.json()]);
      setUsers(uData);
      setBookings(bData);
      setServices(sData);
    } catch (e) {
      console.error("Error fetching dashboard data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) fetchData();
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter clients
  const filteredUsers = users.filter(u => 
    u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.phone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter bookings
  const filteredBookings = bookings.filter(b =>
    b.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.serviceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.userPhone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter services
  const filteredServices = services.filter(s =>
    s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.categoryTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.subcategoryName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (activeTab === 'clients') {
      csvContent += "ID,Nombre,Correo,Celular,Fecha Registro,Rol\n";
      filteredUsers.forEach(u => {
        csvContent += `"${u.id}","${u.name}","${u.email}","${u.phone}","${u.createdAt}","${u.role}"\n`;
      });
    } else if (activeTab === 'bookings') {
      csvContent += "ID,Cliente,Telefono,Correo,Servicio,Precio,Fecha,Hora,Terapeuta,Estado\n";
      filteredBookings.forEach(b => {
        csvContent += `"${b.id}","${b.userName}","${b.userPhone}","${b.userEmail}","${b.serviceName}","${b.servicePrice}","${b.bookingDate}","${b.timeSlot}","${b.therapist}","${b.status}"\n`;
      });
    } else {
      csvContent += "ID,Categoria,Subcategoria,Nombre,Duracion,Precio,Badge\n";
      filteredServices.forEach(s => {
        csvContent += `"${s.id}","${s.categoryTitle}","${s.subcategoryName}","${s.name}","${s.duration}","${s.price}","${s.badge}"\n`;
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

  const handleUpdateStatus = async (bookingId, newStatus) => {
    try {
      const res = await fetch(`/api/bookings/${bookingId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
      }
    } catch (e) {
      console.error(e);
    }
  };

  
  const [uploadingImage, setUploadingImage] = useState(false);

  const availableSpaPhotos = [
    { label: 'Masaje Relajante Aromático', url: '/assets/masaje_relax.jpg' },
    { label: 'Masaje Descontracturante M01', url: '/assets/masaje_m01.jpg' },
    { label: 'Masaje Tejido Profundo M02', url: '/assets/masaje_m02.jpg' },
    { label: 'Masaje a Cuatro Manos M4', url: '/assets/masaje_m4.jpg' },
    { label: 'Drenaje Linfático M5', url: '/assets/masaje_m5.jpg' },
    { label: 'Fangoterapia Marina M7', url: '/assets/masaje_m7.jpg' },
    { label: 'Piedras Volcánicas Calientes', url: '/assets/servicios_spa.jpg' },
    { label: 'Sauna Pareja', url: '/assets/pareja_sauna.jpg' },
    { label: 'Jacuzzi Pareja con Hidromasaje', url: '/assets/pareja_jacuzzi.jpg' },
    { label: 'Masaje Pareja Romántico', url: '/assets/masaje_pareja.jpg' },
    { label: 'Escapada Romántica & Spa (DSLR)', url: '/assets/dsc_6328.jpg' },
    { label: 'Japanese Head Spa Cascada', url: '/assets/head_spa.jpg' },
    { label: 'Circuito Termal Completo', url: '/assets/circuito_termal.jpg' },
    { label: 'Limpieza Facial Profunda', url: '/assets/facial_original.jpg' },
    { label: 'Facial Antiedad & Ojos', url: '/assets/ojos_orig.jpg' },
    { label: 'Chocolaterapia & Maderoterapia', url: '/assets/maderoterapia.jpg' },
    { label: 'Bandeja de Bienvenida & Aperitivos', url: '/assets/snack_bandeja.jpg' },
    { label: 'Manicura Rusa', url: '/assets/manicura_orig.jpg' },
    { label: 'Pedicura Spa Completa', url: '/assets/pedicura_orig.jpg' },
    { label: 'Esculpido de Uñas en Acrílico', url: '/assets/pedicura2_orig.jpg' },
    { label: 'Lifting de Pestañas', url: '/assets/pestanas_orig.jpg' },
    { label: 'Diseño de Cejas & Henna', url: '/assets/pestanas.jpg' },
    { label: 'Salón & Botox Capilar', url: '/assets/salon_belleza.jpg' },
    { label: 'Peluquería, Corte & Brushing', url: '/assets/peluqueria_orig.jpg' },
    { label: 'Depilación Profesional con Cera', url: '/assets/depilacion_orig.jpg' }
  ];

  // Upload handler from device
  const handleDeviceUpload = async (e, target = 'main') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 12 * 1024 * 1024) {
      alert('La imagen seleccionada supera los 12 MB. Por favor sube una imagen de menor tamaño.');
      return;
    }

    setUploadingImage(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64 = reader.result;
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64,
            filename: file.name
          })
        });
        const data = await res.json();
        if (data.success && data.url) {
          if (target === 'main') {
            const currentGal = serviceForm.gallery && Array.isArray(serviceForm.gallery) ? [...serviceForm.gallery] : [];
            if (!currentGal.includes(data.url)) currentGal.unshift(data.url);
            setServiceForm(prev => ({
              ...prev,
              image: data.url,
              gallery: currentGal
            }));
          } else if (target === 'gallery') {
            const currentGal = serviceForm.gallery && Array.isArray(serviceForm.gallery) ? [...serviceForm.gallery] : [];
            setServiceForm(prev => ({
              ...prev,
              gallery: [...currentGal, data.url]
            }));
          }
        } else {
          alert('Error al subir la imagen: ' + (data.error || 'Desconocido'));
        }
      } catch (err) {
        console.error(err);
        alert('Error al conectar con el servidor de subida de imágenes');
      } finally {
        setUploadingImage(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSetMainImage = (url) => {
    setServiceForm(prev => ({
      ...prev,
      image: url
    }));
  };

  const handleRemoveImageFromGallery = (urlToRemove) => {
    setServiceForm(prev => {
      const updatedGallery = (prev.gallery || []).filter(u => u !== urlToRemove);
      let updatedMain = prev.image;
      if (updatedMain === urlToRemove) {
        updatedMain = updatedGallery.length > 0 ? updatedGallery[0] : '/assets/servicios_spa.jpg';
      }
      return {
        ...prev,
        gallery: updatedGallery,
        image: updatedMain
      };
    });
  };

  // Service Management Handlers
  const handleOpenCreateService = () => {
    setEditingService(null);
    setServiceForm({
      categoryId: 'spa-masajes',
      categoryTitle: 'Spa & Masajes Terapéuticos',
      subcategoryId: 'masajes-terapeuticos',
      subcategoryName: 'Masajes Terapéuticos & Relajantes',
      name: '',
      duration: '60 min',
      price: 40,
      description: '',
      badge: 'Nuevo',
      image: '/assets/servicios_spa.jpg',
      gallery: ['/assets/servicios_spa.jpg']
    });
    setServiceModalOpen(true);
  };

  const handleOpenEditService = (srv) => {
    setEditingService(srv);
    setServiceForm({
      categoryId: srv.categoryId || 'spa-masajes',
      categoryTitle: srv.categoryTitle || 'Spa & Masajes Terapéuticos',
      subcategoryId: srv.subcategoryId || 'masajes-terapeuticos',
      subcategoryName: srv.subcategoryName || 'Masajes Terapéuticos & Relajantes',
      name: srv.name || '',
      duration: srv.duration || '60 min',
      price: srv.price || 0,
      description: srv.description || '',
      badge: srv.badge || 'Popular',
      image: srv.image || '/assets/servicios_spa.jpg',
      gallery: srv.gallery && srv.gallery.length > 0 ? [...srv.gallery] : [srv.image || '/assets/servicios_spa.jpg']
    });
    setServiceModalOpen(true);
  };

  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      if (editingService) {
        // Update
        const res = await fetch(`/api/services/${editingService.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(serviceForm)
        });
        if (res.ok) {
          const updated = await res.json();
          setServices(prev => prev.map(s => s.id === updated.id ? updated : s));
          setServiceModalOpen(false);
        }
      } else {
        // Create
        const res = await fetch('/api/services', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(serviceForm)
        });
        if (res.ok) {
          const created = await res.json();
          setServices(prev => [created, ...prev]);
          setServiceModalOpen(false);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Error al guardar el servicio");
    }
  };

  const handleDeleteService = async (srvId) => {
    if (!confirm("¿Seguro que deseas eliminar este servicio?")) return;
    try {
      const res = await fetch(`/api/services/${srvId}`, { method: 'DELETE' });
      if (res.ok) {
        setServices(prev => prev.filter(s => s.id !== srvId));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-100 flex flex-col overflow-hidden animate-fade-in">
      
      {/* Full-Page Top Header */}
      <div className="bg-mahogany-950 text-white px-6 py-4 flex items-center justify-between shadow-lg border-b border-mahogany-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-title text-xl font-bold text-white">Momentos Spa</span>
              <span className="px-2 py-0.5 bg-gold text-mahogany-950 font-bold text-[10px] rounded uppercase tracking-wider">Admin</span>
            </div>
            <span className="text-xs text-cream-300">Base de Datos de Clientes, Citas y Gestión de Precios</span>
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

      {/* GitHub Primer Styled Tab Navigation Bar */}
      <div className="bg-white border-b border-stone-200 px-6 py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-sm">
        
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveTab('clients')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'clients'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Clientes Registrados ({users.length})</span>
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
            <span>Reservas Activas ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'services'
                ? 'bg-mahogany-950 text-white shadow'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Catálogo & Precios ({services.length})</span>
          </button>
        </div>

        {/* Search, Action Buttons & Export */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar..."
              className="w-full text-xs pl-8 pr-3 py-2 bg-stone-50 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
            />
          </div>

          {activeTab === 'services' && (
            <button
              onClick={handleOpenCreateService}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nuevo Servicio</span>
            </button>
          )}

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 transition-colors shadow-sm whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-stone-500" />
            <span>Exportar CSV</span>
          </button>
        </div>

      </div>

      {/* Main Tables / Content Area */}
      <div className="flex-1 overflow-auto p-6 bg-cream-50/50">
        
        {/* TAB 1: CLIENTES */}
        {activeTab === 'clients' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-100/80 text-stone-500 uppercase text-[10px] tracking-wider font-bold border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">Usuario / Cliente</th>
                  <th className="py-3 px-4">Correo Electrónico</th>
                  <th className="py-3 px-4">Celular / WhatsApp</th>
                  <th className="py-3 px-4">Fecha de Registro</th>
                  <th className="py-3 px-4">Historial Citas</th>
                  <th className="py-3 px-4 text-right">Contacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-stone-400">
                      No se encontraron clientes registrados.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => {
                    const userBookingsCount = bookings.filter(b => b.userId === u.id || b.userEmail === u.email).length;
                    const cleanPhone = u.phone?.replace(/[^0-9]/g, '') || '';

                    return (
                      <tr key={u.id} className="hover:bg-cream-100/60 transition-colors">
                        <td className="py-3 px-4 font-semibold text-stone-900 flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-mahogany-950 text-gold flex items-center justify-center font-bold text-xs">
                            {u.name?.charAt(0) || 'U'}
                          </div>
                          <div>
                            <div>{u.name}</div>
                            <span className="text-[10px] text-stone-400 font-mono">ID: {u.id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-stone-600 font-mono text-[11px]">{u.email}</td>
                        <td className="py-3 px-4 text-mahogany-950 font-bold font-mono text-[11px]">{u.phone}</td>
                        <td className="py-3 px-4 text-stone-500 text-[11px]">
                          {u.createdAt ? new Date(u.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Reciente'}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 bg-cream-200 text-mahogany-900 font-bold rounded-full text-[10px]">
                            {userBookingsCount} citas
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={`https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(u.name)},%20te%20contactamos%20de%20Momentos%20Spa%20Habana.`}
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

        {/* TAB 2: RESERVAS */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-100/80 text-stone-500 uppercase text-[10px] tracking-wider font-bold border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">ID Cita</th>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Servicio & Tarifa</th>
                  <th className="py-3 px-4">Fecha & Horario</th>
                  <th className="py-3 px-4">Terapeuta / Notas</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-8 text-stone-400">
                      No se encontraron reservas registradas.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((b) => {
                    const cleanPhone = b.userPhone?.replace(/[^0-9]/g, '') || '';
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
                        <td className="py-3 px-4 text-[11px] text-stone-600">
                          <div className="font-medium text-stone-800">{b.therapist}</div>
                          {b.notes && <div className="text-stone-400 italic">"{b.notes}"</div>}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-block ${
                            b.status === 'Confirmada' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-1.5">
                          {b.status !== 'Confirmada' && (
                            <button
                              onClick={() => handleUpdateStatus(b.id, 'Confirmada')}
                              className="p-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                              title="Marcar Confirmada"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <a
                            href={`https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(b.userName)},%20te%20escribimos%20de%20Momentos%20Spa%20respecto%20a%20tu%20reserva.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center p-1 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                            title="Chat WhatsApp"
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
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

        {/* TAB 3: GESTIÓN DE SERVICIOS & PRECIOS */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-100/80 text-stone-500 uppercase text-[10px] tracking-wider font-bold border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">Servicio</th>
                  <th className="py-3 px-4">Categoría & Subcategoría</th>
                  <th className="py-3 px-4">Duración</th>
                  <th className="py-3 px-4">Precio (USD)</th>
                  <th className="py-3 px-4">Etiqueta</th>
                  <th className="py-3 px-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredServices.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-stone-400">
                      No hay servicios que coincidan con la búsqueda.
                    </td>
                  </tr>
                ) : (
                  filteredServices.map((srv) => (
                    <tr key={srv.id} className="hover:bg-cream-100/60 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          {srv.image && (
                            <img src={srv.image} alt={srv.name} className="w-10 h-10 rounded-lg object-cover border border-stone-200" />
                          )}
                          <div>
                            <div className="font-bold text-stone-900">{srv.name}</div>
                            <div className="text-[11px] text-stone-500 line-clamp-1">{srv.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-stone-800">{srv.categoryTitle}</div>
                        <div className="text-[10px] text-stone-400">{srv.subcategoryName}</div>
                      </td>
                      <td className="py-3 px-4 font-mono text-stone-600">{srv.duration}</td>
                      <td className="py-3 px-4 font-bold text-mahogany-950 font-mono text-sm">
                        ${srv.price} USD
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded-full font-bold text-[10px]">
                          {srv.badge}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEditService(srv)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-mahogany-900 hover:text-mahogany-700 bg-cream-200 hover:bg-cream-300 px-3 py-1 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>Editar</span>
                        </button>
                        <button
                          onClick={() => handleDeleteService(srv.id)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-2 py-1 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* CREATE / EDIT SERVICE MODAL */}
      {serviceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-lg overflow-hidden">
            
            <div className="bg-mahogany-950 text-white p-5 flex items-center justify-between">
              <h4 className="font-serif-title text-xl font-bold">
                {editingService ? 'Editar Servicio y Precio' : 'Agregar Nuevo Servicio'}
              </h4>
              <button
                onClick={() => setServiceModalOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Nombre del Servicio</label>
                <input
                  type="text"
                  required
                  value={serviceForm.name}
                  onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                  placeholder="Ej. Masaje Descontracturante con Ventosas"
                  className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-cream-50/50"
                />
              </div>

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
                        subcategoryId: selectedCat?.subcategories[0]?.id || '',
                        subcategoryName: selectedCat?.subcategories[0]?.name || ''
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
                      const sub = cat?.subcategories.find(s => s.id === e.target.value);
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

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Precio (USD)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={serviceForm.price}
                    onChange={(e) => setServiceForm({ ...serviceForm, price: Number(e.target.value) })}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-cream-50/50 font-bold"
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
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-cream-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Etiqueta / Badge</label>
                  <input
                    type="text"
                    value={serviceForm.badge}
                    onChange={(e) => setServiceForm({ ...serviceForm, badge: e.target.value })}
                    placeholder="Popular"
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-cream-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Descripción corta</label>
                <textarea
                  rows="2"
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  placeholder="Beneficios y técnicas del tratamiento..."
                  className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-cream-50/50"
                />
              </div>

              {/* GESTIÓN AVANZADA DE IMÁGENES & SUBIDA DESDE DISPOSITIVO */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-mahogany-800" />
                    <span>Fotografías del Servicio (Principal y Galería)</span>
                  </label>
                  <span className="text-[10px] text-stone-500 font-medium">PNG, JPG, WebP hasta 12MB</span>
                </div>

                {/* Main Image Preview & Controls */}
                <div className="rounded-2xl border border-stone-200 bg-cream-50/50 p-4 space-y-3">
                  <div className="text-[11px] font-bold text-stone-600 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span>Imagen Principal Activa:</span>
                    </span>
                    {serviceForm.image && (
                      <button
                        type="button"
                        onClick={() => setServiceForm({ ...serviceForm, image: '' })}
                        className="text-red-600 hover:underline text-[10px] font-bold"
                      >
                        Eliminar foto
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Thumbnail Preview */}
                    <div className="w-full sm:w-40 h-28 rounded-xl overflow-hidden border border-stone-300 bg-stone-100 relative group shrink-0 shadow-sm">
                      {serviceForm.image ? (
                        <img 
                          src={serviceForm.image} 
                          alt="Vista previa" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 text-xs">
                          <ImageIcon className="w-8 h-8 mb-1 opacity-50" />
                          <span>Sin imagen</span>
                        </div>
                      )}
                      {serviceForm.image && (
                        <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                          Principal
                        </span>
                      )}
                    </div>

                    {/* Action buttons for main image */}
                    <div className="flex-1 w-full space-y-2">
                      {/* Device Upload Button */}
                      <label className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-mahogany-950 hover:bg-mahogany-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm hover:shadow">
                        <Upload className="w-4 h-4 text-gold" />
                        <span>{uploadingImage ? 'Subiendo archivo...' : '📁 Subir foto desde este dispositivo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          disabled={uploadingImage}
                          onChange={(e) => handleDeviceUpload(e, 'main')}
                        />
                      </label>

                      {/* Select from existing gallery */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-stone-500 font-semibold block">O selecciona una de la galería del spa:</span>
                        <select
                          value={serviceForm.image}
                          onChange={(e) => {
                            const val = e.target.value;
                            const curGal = serviceForm.gallery ? [...serviceForm.gallery] : [];
                            if (!curGal.includes(val)) curGal.unshift(val);
                            setServiceForm({ ...serviceForm, image: val, gallery: curGal });
                          }}
                          className="w-full text-xs p-2 rounded-xl border border-stone-300 bg-white"
                        >
                          <option value="">-- Seleccionar foto --</option>
                          {availableSpaPhotos.map((p, idx) => (
                            <option key={idx} value={p.url}>{p.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Gallery Photos Manager */}
                <div className="rounded-2xl border border-stone-200 bg-white p-3 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-stone-700">
                    <span>Fotos en la Galería de este Servicio ({(serviceForm.gallery || []).length}):</span>
                    <label className="text-mahogany-900 hover:text-mahogany-700 cursor-pointer flex items-center gap-1 text-[11px] font-bold">
                      <ImagePlus className="w-3.5 h-3.5" />
                      <span>Añadir otra foto desde dispositivo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingImage}
                        onChange={(e) => handleDeviceUpload(e, 'gallery')}
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-1">
                    {(serviceForm.gallery || []).map((imgUrl, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100 group">
                        <img src={imgUrl} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                        
                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-1">
                          <button
                            type="button"
                            onClick={() => handleSetMainImage(imgUrl)}
                            className={`p-1.5 rounded-lg text-xs font-bold ${
                              serviceForm.image === imgUrl 
                                ? 'bg-gold text-mahogany-950' 
                                : 'bg-white/90 text-stone-900 hover:bg-gold'
                            }`}
                            title="Establecer como foto principal"
                          >
                            <Star className="w-3 h-3 fill-current" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveImageFromGallery(imgUrl)}
                            className="p-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 text-xs"
                            title="Eliminar esta foto"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>

                        {serviceForm.image === imgUrl && (
                          <span className="absolute top-1 left-1 bg-gold text-mahogany-950 font-bold text-[8px] px-1.5 py-0.2 rounded shadow">
                            ★ Principal
                          </span>
                        )}
                      </div>
                    ))}

                    {/* Quick Add Placeholder */}
                    <label className="rounded-xl border-2 border-dashed border-stone-300 hover:border-mahogany-900 bg-cream-50/50 flex flex-col items-center justify-center aspect-[4/3] cursor-pointer text-stone-400 hover:text-mahogany-900 transition-colors">
                      <Plus className="w-5 h-5 mb-0.5" />
                      <span className="text-[9px] font-bold">Subir foto</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingImage}
                        onChange={(e) => handleDeviceUpload(e, 'gallery')}
                      />
                    </label>
                  </div>
                </div>

              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setServiceModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-mahogany-950 hover:bg-mahogany-900 text-white rounded-xl text-xs font-bold shadow transition-all"
                >
                  Guardar Servicio
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
