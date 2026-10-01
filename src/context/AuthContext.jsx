import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('momentos_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('momentos_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('momentos_user');
    }
  }, [user]);

  const login = async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    // 1. Direct check for Admin credentials
    if (
      (cleanEmail === 'admin@momentospahabana.com' || cleanEmail === 'admin') &&
      (cleanPass === 'admin123' || cleanPass === 'admin')
    ) {
      const adminUser = {
        id: 'usr_admin',
        name: 'Administrador Momentos Spa',
        email: 'admin@momentospahabana.com',
        phone: '+53 59710688',
        role: 'admin'
      };
      setUser(adminUser);
      return { success: true, user: adminUser };
    }

    // 2. Try backend API if available
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password: cleanPass })
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        return { success: true, user: data };
      }
    } catch (err) {
      // Backend unavailable, fallback to local storage
    }

    // 3. Fallback: check registered client accounts in localStorage
    try {
      const savedUsers = JSON.parse(localStorage.getItem('momentos_registered_users') || '[]');
      const found = savedUsers.find(
        u => u.email.toLowerCase() === cleanEmail && u.password === cleanPass
      );
      if (found) {
        setUser(found);
        return { success: true, user: found };
      }
    } catch (e) {}

    return { success: false, error: 'Correo o contraseña incorrectos. Para administrador: admin@momentospahabana.com / admin123' };
  };

  const register = async (nameOrObj, emailParam, phoneParam, passParam) => {
    let name, email, phone, password;
    if (typeof nameOrObj === 'object' && nameOrObj !== null) {
      name = nameOrObj.name;
      email = nameOrObj.email;
      phone = nameOrObj.phone;
      password = nameOrObj.password;
    } else {
      name = nameOrObj;
      email = emailParam;
      phone = phoneParam;
      password = passParam;
    }

    const cleanEmail = (email || '').trim().toLowerCase();

    // Try backend API
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: cleanEmail, phone, password })
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        return { success: true, user: data };
      }
    } catch (err) {
      // Backend not running, use local register
    }

    const newUser = {
      id: 'usr_' + Date.now(),
      name,
      email: cleanEmail,
      phone,
      password,
      role: 'client',
      createdAt: new Date().toISOString()
    };

    try {
      const savedUsers = JSON.parse(localStorage.getItem('momentos_registered_users') || '[]');
      savedUsers.push(newUser);
      localStorage.setItem('momentos_registered_users', JSON.stringify(savedUsers));
    } catch (e) {}

    setUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser, 
      login, 
      register, 
      logout, 
      isAdmin: user?.role === 'admin' 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
