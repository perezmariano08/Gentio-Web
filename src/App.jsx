import Equipo from "./components/Equipo/Equipo.jsx"
import Footer from "./components/Footer/Footer.jsx"
import FotografiaVideo from "./components/FotografiaVideo/FotografiaVideo.jsx"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Servicios from "./components/Servicios/Servicios"

function App() {
   return (
      <>
         <Navbar/>
         <Hero/>
         <Servicios/>
         <FotografiaVideo/>
         <Equipo/>
         <Footer/>
      </>
   )
}

export default App
