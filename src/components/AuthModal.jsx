import React, { useState } from 'react';
import { X, User, Mail, Lock, Phone, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onOpenAdmin }) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState(initialMode);
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
      if (mode === 'login') {
        const res = await login(email, password);
        if (!res.success) {
          setError(res.error || 'Credenciales inválidas');
          setLoading(false);
          return;
        }
        if (res.user?.role === 'admin' && onOpenAdmin) {
          onClose();
          onOpenAdmin();
          return;
        }
      } else {
        if (!name || !email || !phone) {
          setError('Por favor completa todos los campos requeridos');
          setLoading(false);
          return;
        }
        const res = await register(name, email, phone, password);
        if (!res.success) {
          setError(res.error || 'Error al registrar usuario');
          setLoading(false);
          return;
        }
      }
      onClose();
    } catch (err) {
      setError('Error en el proceso de autenticación');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAdminLogin = async () => {
    setEmail('admin@momentospahabana.com');
    setPassword('admin123');
    setLoading(true);
    const res = await login('admin@momentospahabana.com', 'admin123');
    setLoading(false);
    if (res.success) {
      onClose();
      if (onOpenAdmin) onOpenAdmin();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-md overflow-hidden animate-scale-up">
        
        {/* Header */}
        <div className="bg-mahogany-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Momentos Spa Miramar</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold">
            {mode === 'login' ? 'Acceso de Usuario' : 'Crear Cuenta de Cliente'}
          </h3>
          <p className="text-xs text-cream-200/80 mt-1">
            {mode === 'login' 
              ? 'Inicia sesión con tu cuenta de cliente o credenciales de administrador.'
              : 'Regístrate para agendar citas rápidamente y acceder a promociones exclusivas.'}
          </p>

          {/* Mode Switch Tabs */}
          <div className="flex bg-white/10 rounded-xl p-1 mt-4 text-xs font-semibold">
            <button
              type="button"
              onClick={() => { setMode('login'); setError(''); }}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                mode === 'login' ? 'bg-gold text-mahogany-950 shadow-sm font-bold' : 'text-cream-200 hover:text-white'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => { setMode('register'); setError(''); }}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                mode === 'register' ? 'bg-gold text-mahogany-950 shadow-sm font-bold' : 'text-cream-200 hover:text-white'
              }`}
            >
              Registrarse
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-rose-50 text-rose-800 text-xs rounded-xl border border-rose-200">
              {error}
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
                  placeholder="Ej. Ana Pérez"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
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
                placeholder="cliente@correo.com o admin@momentospahabana.com"
                className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Teléfono / WhatsApp</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+53 51234567"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
                />
              </div>
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
                className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-mahogany-950 hover:bg-mahogany-900 text-white text-xs font-bold rounded-xl shadow-md transition-all mt-2"
          >
            {loading ? 'Validando...' : mode === 'login' ? 'Entrar a mi Cuenta' : 'Crear mi Cuenta'}
          </button>

          {/* Quick 1-click Admin Access */}
          {mode === 'login' && (
            <div className="pt-2 border-t border-stone-100">
              <button
                type="button"
                onClick={handleQuickAdminLogin}
                className="w-full py-2.5 px-3 bg-cream-50 hover:bg-cream-100 border border-stone-200 rounded-xl text-stone-800 text-xs font-semibold flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  <span>Acceso Rápido Administrador</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}
