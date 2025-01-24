import Equipo from "./components/Equipo/Equipo.jsx"
import Footer from "./components/Footer/Footer.jsx"
import FotografiaVideo from "./components/FotografiaVideo/FotografiaVideo.jsx"
import Crecimiento from "./components/Crecimiento/Crecimiento"
import Hero from "./components/Hero/Hero"
import Marcas from "./components/Marcas/Marcas"
import MarcasSlider from "./components/MarcasSlider/MarcasSlider"
import Navbar from "./components/Navbar/Navbar"
import Servicios from "./components/Servicios/Servicios"
import Nosotros from "./components/Nosotros/Nosotros"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { MenuProvider } from "./components/Context/MenuContext.jsx"
import SliderMarcas from "./components/SilderMarcas/SliderMarcas.jsx"

function App() {
   return (
      <>
      <MenuProvider>
         <Navbar/>
         <Hero/>
         <Nosotros/>
         <Marcas/>
         <Crecimiento/>
         {/* <MarcasSlider/> */}
         <SliderMarcas/>
         <Servicios/>
         <FotografiaVideo/>
         <Equipo/> 
         <Footer/>
      </MenuProvider>
      </>
   )
}

export default App
