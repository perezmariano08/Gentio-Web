import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./Layout/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import WebProjectsPage from "../pages/WebProjectsPage.jsx";
import FormPage from "../pages/FormPage";
import CreadoresPage from "../pages/CreadoresPage";

const AppRouter = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const supportedLanguages = ["es", "en", "fr"];
    const lang = location.pathname.split("/")[1];

    if (!supportedLanguages.includes(lang)) {
      window.location.pathname = "/es";
    } else {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    }
  }, [location, i18n]);

  return (
    <Routes>
      <Route path="/:lang" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="web" element={<WebProjectsPage />} />
        <Route path="sorteos" element={<FormPage />} />
        <Route path="creadores" element={<CreadoresPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/es" replace />} />
    </Routes>
  );
};

export default AppRouter;
