import React, { useState } from 'react';
import { X, User, Mail, Phone, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const { login, register } = useAuth();

  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'register') {
        if (!name || !email || !phone || !password) {
          throw new Error('Todos los campos son obligatorios.');
        }
        await register({ name, email, phone, password });
      } else {
        if (!email || !password) {
          throw new Error('Ingresa tu correo y contraseña.');
        }
        await login(email, password);
      }
      onClose();
    } catch (err) {
      setError(err.message || 'Ocurrió un error al procesar la solicitud');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-mahogany-950 text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold block">
              Acceso a Momentos Spa
            </span>
            <h3 className="font-serif-title text-2xl font-bold">
              {mode === 'register' ? 'Crear Cuenta de Cliente' : 'Iniciar Sesión'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-stone-200 bg-cream-100 text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 py-3 text-center transition-colors ${
              mode === 'login' ? 'bg-white text-mahogany-950 font-bold border-b-2 border-mahogany-950' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-3 text-center transition-colors ${
              mode === 'register' ? 'bg-white text-mahogany-950 font-bold border-b-2 border-mahogany-950' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Registrarme (Nuevo Cliente)
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Nombre Completo</label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Ana Lucía Fernández"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-cream-50/50"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-cream-50/50"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Teléfono Móvil / Celular</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+53 5..."
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-cream-50/50"
                />
              </div>
              <span className="text-[10px] text-stone-400 mt-0.5 block">Usado para la confirmación de citas por WhatsApp</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900 bg-cream-50/50"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-mahogany-950 hover:bg-mahogany-900 text-white font-bold text-xs sm:text-sm py-3 rounded-full shadow-lg transition-all"
            >
              {loading ? 'Procesando...' : mode === 'register' ? 'Crear Cuenta y Continuar' : 'Entrar a mi Cuenta'}
            </button>
          </div>

          <div className="text-center pt-1 text-[11px] text-stone-500">
            {mode === 'login' ? (
              <span>¿Eres nuevo? <button type="button" onClick={() => setMode('register')} className="text-mahogany-900 font-bold underline">Crea tu cuenta aquí</button></span>
            ) : (
              <span>¿Ya estás registrado? <button type="button" onClick={() => setMode('login')} className="text-mahogany-900 font-bold underline">Inicia sesión</button></span>
            )}
          </div>

        </form>

      </div>
    </div>
  );
}
