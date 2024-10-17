import Crecimiento from "./components/Crecimiento/Crecimiento"
import Hero from "./components/Hero/Hero"
import Marcas from "./components/Marcas/Marcas"
import Navbar from "./components/Navbar/Navbar"
import Nosotros from "./components/Nosotros/Nosotros"

function App() {
   return (
      <>
         <Navbar/>
         <Hero/>
         <Nosotros/>
         <Marcas/>
         <Crecimiento/>
      </>
   )
}

export default App
