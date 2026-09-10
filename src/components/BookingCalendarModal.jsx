import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare, AlertCircle } from 'lucide-react';
import { allServices, categoriesData } from '../data/servicesData';
import { useAuth } from '../context/AuthContext';

export default function BookingCalendarModal({ isOpen, onClose, preselectedService, initialCategoryId, onOpenAuth }) {
  const { user } = useAuth();

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedTherapist, setSelectedTherapist] = useState('Cualquier terapeuta disponible');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Month navigation for date picker
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date());

  useEffect(() => {
    if (preselectedService) {
      const found = allServices.find(s => s.name === preselectedService.name || s.id === preselectedService.id);
      setSelectedService(found || preselectedService);
      setStep(2); // Jump to date selection if service already chosen
    } else {
      setSelectedService(null);
      setStep(1);
    }
    setBookingSuccess(false);
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  // Calendar dates generation
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM"
  ];

  const therapists = [
    "Cualquier terapeuta disponible",
    "Elena Martínez (Especialista en Head Spa & Masajes)",
    "Sofía Navarro (Terapia de Piedras & Deep Tissue)",
    "Camila Valdés (Cosmiatría & Faciales)",
    "Dúo Sincronizado (Para Rituales en Pareja)"
  ];

  const handleDateClick = (day) => {
    const dateObj = new Date(year, month, day);
    const dayOfWeek = dateObj.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ...
    
    // Check if Monday or Tuesday (Closed)
    if (dayOfWeek === 1 || dayOfWeek === 2) {
      alert("Momentos Spa permanece cerrado los días Lunes y Martes. Por favor selecciona un día de Miércoles a Domingo.");
      return;
    }

    // Format YYYY-MM-DD
    const formatted = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formatted);
  };

  const handleConfirmBooking = async () => {
    if (!user) {
      alert("Por favor inicia sesión o crea tu cuenta de usuario para completar la reserva.");
      return;
    }

    if (!selectedService || !selectedDate || !selectedTimeSlot) {
      alert("Por favor selecciona servicio, fecha y horario.");
      return;
    }

    setIsSubmitting(true);
    try {
      // 1. Save booking in database
      const bookingPayload = {
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        userPhone: user.phone,
        serviceId: selectedService.id || 'custom',
        serviceName: selectedService.name,
        servicePrice: selectedService.price,
        bookingDate: selectedDate,
        timeSlot: selectedTimeSlot,
        therapist: selectedTherapist,
        notes
      };

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });

      // 2. Format structured WhatsApp message to +53 59710688
      const waText = 
`✨ *SOLICITUD DE RESERVA - MOMENTOS SPA* ✨
👤 *Cliente:* ${user.name}
📱 *Teléfono:* ${user.phone}
📧 *Correo:* ${user.email}
💆 *Servicio:* ${selectedService.name}
⏱️ *Duración:* ${selectedService.duration}
💰 *Tarifa:* $${selectedService.price} USD
📅 *Fecha:* ${selectedDate}
⏰ *Hora:* ${selectedTimeSlot}
👩‍⚕️ *Terapeuta:* ${selectedTherapist}
📝 *Notas:* ${notes || 'Ninguna'}
📍 *Sede:* Calle 44 #111 e/ 3ra y 1ra A, Miramar, La Habana`;

      const waUrl = `https://wa.me/5359710688?text=${encodeURIComponent(waText)}`;

      // 3. Mark success and open WhatsApp
      setBookingSuccess(true);
      window.open(waUrl, '_blank');

    } catch (err) {
      console.error("Error al guardar reserva:", err);
      alert("Error al procesar reserva. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-mahogany-950 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold block">
              Sistema Oficial de Citas
            </span>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold">
              Reservar tu Experiencia
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!bookingSuccess && (
          <div className="bg-cream-100 px-6 py-3 border-b border-stone-200/80 flex items-center justify-between text-xs font-semibold text-stone-600">
            <span className={step === 1 ? 'text-mahogany-950 font-bold' : ''}>1. Tratamiento</span>
            <span>•</span>
            <span className={step === 2 ? 'text-mahogany-950 font-bold' : ''}>2. Fecha & Hora</span>
            <span>•</span>
            <span className={step === 3 ? 'text-mahogany-950 font-bold' : ''}>3. Usuario</span>
            <span>•</span>
            <span className={step === 4 ? 'text-mahogany-950 font-bold' : ''}>4. Confirmación</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* Success Dialog */}
          {bookingSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-title text-2xl font-bold text-mahogany-950">
                ¡Solicitud de Reserva Registrada!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Tu cita para <strong>{selectedService?.name}</strong> el <strong>{selectedDate}</strong> a las <strong>{selectedTimeSlot}</strong> ha sido guardada en nuestro sistema y enviada a nuestro WhatsApp (<strong>+53 59710688</strong>).
              </p>
              <div className="p-4 bg-cream-100 rounded-2xl border border-stone-200 text-left text-xs text-stone-700 max-w-md mx-auto space-y-1">
                <div><strong>Cliente:</strong> {user?.name}</div>
                <div><strong>Teléfono:</strong> {user?.phone}</div>
                <div><strong>Ubicación:</strong> Calle 44 #111 e/ 3ra y 1ra A, Miramar</div>
              </div>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-mahogany-950 hover:bg-mahogany-900 text-white text-xs font-bold px-8 py-3 rounded-full transition-all"
                >
                  Finalizar y Cerrar
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Selecciona el tratamiento deseado:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                    {allServices.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          setSelectedService(srv);
                          setStep(2);
                        }}
                        className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                          selectedService?.id === srv.id
                            ? 'bg-mahogany-950 text-white border-mahogany-950 shadow-md'
                            : 'bg-cream-50 hover:bg-cream-100 border-stone-200 text-stone-800'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold">{srv.name}</div>
                          <div className={`text-[11px] mt-1 line-clamp-2 ${selectedService?.id === srv.id ? 'text-cream-200' : 'text-stone-500'}`}>
                            {srv.description}
                          </div>
                        </div>
                        <div className="mt-3 pt-2 border-t border-stone-200/50 flex items-center justify-between text-xs">
                          <span>{srv.duration}</span>
                          <span className="font-bold">${srv.price} USD</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Select Date & Time Slot */}
              {step === 2 && (
                <div className="space-y-6">
                  
                  {/* Selected service pill */}
                  <div className="p-3.5 bg-cream-100 rounded-2xl border border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Tratamiento elegido</span>
                      <div className="font-bold text-sm text-stone-900">{selectedService?.name}</div>
                      <div className="text-xs text-stone-500">{selectedService?.duration} • ${selectedService?.price} USD</div>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-mahogany-800 font-semibold underline"
                    >
                      Cambiar
                    </button>
                  </div>

                  {/* Calendar Widget */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm text-stone-900">
                        {monthNames[month]} {year}
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setCurrentMonthDate(new Date(year, month - 1, 1))}
                          className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setCurrentMonthDate(new Date(year, month + 1, 1))}
                          className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Day Names (Mon-Sun) */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-stone-400">
                      <span>Lun</span>
                      <span>Mar</span>
                      <span>Mié</span>
                      <span>Jue</span>
                      <span>Vie</span>
                      <span>Sáb</span>
                      <span>Dom</span>
                    </div>

                    {/* Day Numbers Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {/* Empty padding days */}
                      {[...Array(startingDayOfWeek)].map((_, i) => (
                        <div key={`empty-${i}`} className="h-9" />
                      ))}

                      {/* Month Days */}
                      {[...Array(daysInMonth)].map((_, i) => {
                        const dayNum = i + 1;
                        const dateObj = new Date(year, month, dayNum);
                        const dayOfWeek = dateObj.getDay();
                        const isClosed = dayOfWeek === 1 || dayOfWeek === 2; // Mon or Tue
                        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                        const isSelected = selectedDate === dateString;

                        return (
                          <button
                            key={dayNum}
                            disabled={isClosed}
                            onClick={() => handleDateClick(dayNum)}
                            className={`h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-all ${
                              isClosed
                                ? 'text-stone-300 bg-stone-50 cursor-not-allowed line-through'
                                : isSelected
                                ? 'bg-mahogany-950 text-white font-bold shadow-md'
                                : 'hover:bg-cream-200 text-stone-800 bg-white border border-stone-100'
                            }`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-4 text-[11px] text-stone-500 pt-1">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-mahogany-950" /> Disponible (Mié-Dom)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-stone-200" /> Cerrado (Lun-Mar)
                      </span>
                    </div>
                  </div>

                  {/* Time Slot Picker */}
                  {selectedDate && (
                    <div className="space-y-2 pt-2 animate-fade-in">
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600">
                        Selecciona Horario Disponible para el {selectedDate}:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${
                              selectedTimeSlot === slot
                                ? 'bg-mahogany-950 text-white border-mahogany-950 shadow-md'
                                : 'bg-white hover:bg-cream-100 border-stone-200 text-stone-700'
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 text-stone-400" />
                            <span>{slot}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Therapist & Notes */}
                  {selectedDate && selectedTimeSlot && (
                    <div className="space-y-4 pt-2 border-t border-stone-200 animate-fade-in">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Terapeuta preferida (opcional):
                        </label>
                        <select
                          value={selectedTherapist}
                          onChange={(e) => setSelectedTherapist(e.target.value)}
                          className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:border-mahogany-900"
                        >
                          {therapists.map((t, idx) => (
                            <option key={idx} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Comentarios o notas especiales:
                        </label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Ej. Alergias, ocasión especial, zona con más tensión..."
                          className="w-full text-xs p-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:border-mahogany-900"
                        />
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* STEP 3: User Authentication Check */}
              {step === 3 && (
                <div className="space-y-6">
                  {user ? (
                    <div className="p-6 bg-cream-100 rounded-2xl border border-stone-200 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-mahogany-950 text-white flex items-center justify-center font-bold text-lg">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-stone-900">{user.name}</div>
                          <div className="text-xs text-stone-500">{user.email}</div>
                          <div className="text-xs text-mahogany-800 font-semibold">{user.phone}</div>
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 border-t border-stone-200/60 pt-2">
                        Estás conectado como cliente verificado. Tus datos se asociarán a la reserva y a nuestro WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <div className="p-6 bg-cream-100 rounded-3xl border border-stone-200 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                        <User className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif-title text-xl font-bold text-stone-900">
                        Registro de Usuario Requerido
                      </h4>
                      <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                        Para garantizar la seriedad de las citas y la seguridad de nuestras instalaciones en Miramar, es necesario crear tu usuario con tu nombre, correo y celular.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                        <button
                          onClick={() => onOpenAuth('register')}
                          className="bg-mahogany-950 hover:bg-mahogany-900 text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
                        >
                          Crear Cuenta Nueva
                        </button>
                        <button
                          onClick={() => onOpenAuth('login')}
                          className="bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold px-6 py-3 rounded-full border border-stone-300 transition-all"
                        >
                          Ya tengo cuenta (Ingresar)
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Final Summary & WhatsApp Submission */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="p-5 bg-cream-100 rounded-2xl border border-stone-200 space-y-3">
                    <h4 className="font-serif-title font-bold text-lg text-mahogany-950">
                      Resumen de tu Solicitud
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs text-stone-700">
                      <div>
                        <span className="text-stone-400 block text-[11px]">Tratamiento</span>
                        <strong>{selectedService?.name}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px]">Tarifa</span>
                        <strong className="text-mahogany-900">${selectedService?.price} USD</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px]">Fecha</span>
                        <strong>{selectedDate}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px]">Horario</span>
                        <strong>{selectedTimeSlot}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px]">Cliente</span>
                        <strong>{user?.name}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px]">Celular de Contacto</span>
                        <strong>{user?.phone}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Al confirmar, se guardará tu cita en nuestra base de datos y se abrirá automáticamente WhatsApp con el número oficial <strong>+53 59710688</strong> para confirmación inmediata.
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        {!bookingSuccess && (
          <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-xs font-bold text-stone-600 hover:text-stone-900 px-4 py-2"
              >
                Volver
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && (!selectedDate || !selectedTimeSlot)) ||
                  (step === 3 && !user)
                }
                onClick={() => setStep(step + 1)}
                className="bg-mahogany-950 hover:bg-mahogany-900 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
              >
                Continuar
              </button>
            ) : (
              <button
                disabled={isSubmitting}
                onClick={handleConfirmBooking}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{isSubmitting ? 'Procesando...' : 'Confirmar y Enviar a WhatsApp'}</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
