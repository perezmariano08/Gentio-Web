import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Equipo from "../components/Equipo/Equipo.jsx";
import FotografiaVideo from "../components/FotografiaVideo/FotografiaVideo.jsx";
import Crecimiento from "../components/Crecimiento/Crecimiento";
import Hero from "../components/Hero/Hero";
import Marcas from "../components/Marcas/Marcas";
import Nosotros from "../components/Nosotros/Nosotros";
import Servicios from "../components/Servicios/Servicios";
import Trabaja from "../components/Trabaja/Trabaja.jsx";
import Trabajos from "../components/Trabajos/Trabajos.jsx";
import SeccionCalidad from "../components/SilderMarcas/SeccionCalidad.jsx";
import LoopinSection from "../components/Loopin/LoopinSection.jsx";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

/**
 * Contenido one-page de la home (sin Navbar/Footer: van en MainLayout).
 */
export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <Nosotros />
      <Marcas />
      <Crecimiento />
      <SeccionCalidad />
      <Trabajos />
      <Servicios />
      <Trabaja />
      <LoopinSection />
      <FotografiaVideo />
      <Equipo />
    </>
  );
}
