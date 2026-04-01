import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar";
import { MenuProvider } from "../Context/MenuContext.jsx";

/**
 * Shell común: menú + contenido por ruta + footer.
 */
export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MenuProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </MenuProvider>
  );
}
