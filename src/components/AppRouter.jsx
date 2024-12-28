import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import App from '../App';

const AppRouter = () => {
  const location = useLocation(); // Detecta la URL actual
  const { i18n } = useTranslation();

  useEffect(() => {
    // Idiomas soportados
    const supportedLanguages = ['es', 'en', 'fr'];

    // Extrae el idioma desde la URL
    const lang = location.pathname.split('/')[1];

    // Validar si el idioma es soportado
    if (!supportedLanguages.includes(lang)) {
      // Redirige automáticamente a /es si el idioma no es válido
      window.location.pathname = '/es';
    } else {
      // Cambia el idioma si es compatible
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, [location, i18n]);

  return (
    <Routes>
      {/* Ruta para idiomas específicos */}
      <Route path="/:lang/*" element={<App />} />
      {/* Redirección para cualquier ruta desconocida */}
      <Route path="*" element={<Navigate to="/es" replace />} />
    </Routes>
  );
};

export default AppRouter;
