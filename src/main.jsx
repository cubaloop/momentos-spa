import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { EditableTextProvider } from './context/EditableTextContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <EditableTextProvider>
          <App />
        </EditableTextProvider>
      </LanguageProvider>
    </AuthProvider>
  </React.StrictMode>
);
