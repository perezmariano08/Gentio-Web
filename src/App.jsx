import Crecimiento from "./components/Crecimiento/Crecimiento"
import Hero from "./components/Hero/Hero"
import Marcas from "./components/Marcas/Marcas"
import MarcasSlider from "./components/MarcasSlider/MarcasSlider"
import Navbar from "./components/Navbar/Navbar"
import Nosotros from "./components/Nosotros/Nosotros"
import 'primereact/resources/themes/saga-blue/theme.css'; // o el tema que estés usando
import 'primereact/resources/primereact.min.css';

function App() {
   return (
      <>
         <Navbar/>
         <Hero/>
         <Nosotros/>
         <Marcas/>
         <Crecimiento/>
         <MarcasSlider/>
      </>
   )
}

export default App
