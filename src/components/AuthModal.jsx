import React, { useState } from 'react';
import { X, User, Mail, Lock, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const { login, register } = useAuth();
  const { t } = useLanguage();
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
          setError(res.error || 'Error al iniciar sesión');
          setLoading(false);
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
      setError('Error inesperado de autenticación');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-md overflow-hidden animate-scale-up">
        
        <div className="bg-mahogany-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Momentos Spa Club</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold">
            {mode === 'login' ? t('loginTitle', 'Iniciar Sesión') : t('registerTitle', 'Crear Cuenta de Cliente')}
          </h3>
          <p className="text-xs text-cream-200/80 mt-1">
            {t('authSubtitle', 'Accede a tu historial de reservas y gestiona tus citas.')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
              {error}
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">{t('nameLabel', 'Nombre Completo')}</label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Carmen Rodríguez"
                  className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">{t('emailLabel', 'Correo Electrónico')}</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-mahogany-900"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">{t('phoneLabel', 'Celular / WhatsApp')}</label>
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
            <label className="block text-xs font-bold text-stone-700 mb-1">{t('passwordLabel', 'Contraseña')}</label>
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
            {loading ? 'Procesando...' : mode === 'login' ? t('loginSubmit', 'Entrar a mi Cuenta') : t('registerSubmit', 'Crear mi Cuenta')}
          </button>

          <div className="pt-2 text-center text-xs text-stone-500">
            {mode === 'login' ? (
              <p>
                {t('noAccountPrompt', '¿No tienes cuenta aún? ')}
                <button
                  type="button"
                  onClick={() => { setMode('register'); setError(''); }}
                  className="text-mahogany-950 font-bold hover:underline"
                >
                  {t('createOneHere', 'Regístrate aquí')}
                </button>
              </p>
            ) : (
              <p>
                {t('haveAccountPrompt', '¿Ya tienes una cuenta registrada? ')}
                <button
                  type="button"
                  onClick={() => { setMode('login'); setError(''); }}
                  className="text-mahogany-950 font-bold hover:underline"
                >
                  {t('loginHere', 'Inicia sesión aquí')}
                </button>
              </p>
            )}
          </div>
        </form>

      </div>
    </div>
  );
}
