import React, { useEffect, useRef, useState } from 'react';
import { ServiciosContainer, ServiciosWrapper, ServicioContainer, ServicioImg, ServicioDescripcion, DescripcionContainer, IconsContainer } from './ServiciosStyles';
import { FaGoogle, FaInstagram, FaFacebook, FaCode } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { TitleContainer } from '../FotografiaVideo/FotografiaVideo';

const Servicios = () => {
    const serviciosRef = useRef([]);
    const [animateIndices, setAnimateIndices] = useState(new Set());

    useEffect(() => {
        const handleScroll = () => {
            const newAnimateIndices = new Set();
            serviciosRef.current.forEach((el, index) => {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        newAnimateIndices.add(index);
                    }
                }
            });
            setAnimateIndices(newAnimateIndices);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Sin dependencias para que solo se ejecute al montar y desmontar

    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);
  
    const checkVisibility = () => {
        if (textRef.current) {
            const { top, bottom } = textRef.current.getBoundingClientRect();
            const isInViewport = top < window.innerHeight && bottom >= 0; // Comprueba si el elemento está en el viewport
            setIsVisible(isInViewport);
        }
    };
  
    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Verifica la visibilidad al cargar el componente
  
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <ServiciosContainer id='servicios'>
            <ServiciosWrapper>
                <TitleContainer ref={textRef} className={isVisible ? 'visible servicios' : 'servicios'}>
                <h2>NUESTROS <span>SERVICIOS.</span></h2>
                <p>¡Hagamos magia juntos!</p>
                </TitleContainer>
                
                {/* Primer Servicio: Analíticas */}
                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[0] = el} 
                        className={animateIndices.has(0) ? 'animate left' : ''} 
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[1] = el} 
                        className={animateIndices.has(1) ? 'animate right' : ''}>
                        <DescripcionContainer>
                            <h3>Estrategías de Marketing y analítica</h3>
                            <p>Convertimos datos en acción. Diseñamos estrategias basadas en analíticas precisas que optimizan tus campañas y maximizan resultados reales y medibles.</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

                {/* Segundo Servicio: Paid Ads */}
                <ServicioContainer>
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[2] = el} 
                        className={animateIndices.has(2) ? 'animate left' : ''}>
                        <DescripcionContainer className='right'>
                            <h3>Paid Ads</h3>
                            <p>Maximizamos cada inversión en Ads. Creamos campañas optimizadas para llegar a la audiencia correcta y generar el mayor impacto con cada clic.</p>
                            <IconsContainer>
                                <FaGoogle />
                                <FaInstagram />
                                <FaFacebook />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg 
                        ref={el => serviciosRef.current[3] = el} 
                        className={animateIndices.has(3) ? 'animate right' : ''} 
                    />
                </ServicioContainer>

                {/* Tercer Servicio: Diseño Gráfico */}
                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[4] = el} 
                        className={animateIndices.has(4) ? 'animate left' : ''} 
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[5] = el} 
                        className={animateIndices.has(5) ? 'animate right' : ''}>
                        <DescripcionContainer>
                            <h3>Diseño Gráfico</h3>
                            <p>Diseñamos para impactar. Piezas visuales que comunican y dejan huella.</p>
                            <IconsContainer>
                                <SiAdobeillustrator />
                                <SiAdobephotoshop />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>
                
                {/* Cuarto Servicio: Desarrollo Web */}
                <ServicioContainer>
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[6] = el} 
                        className={animateIndices.has(6) ? 'animate left' : ''}>
                        <DescripcionContainer className='right'>
                            <h3>Desarrollo Web</h3>
                            <p>Diseñamos experiencias web a medida. Sitios dinámicos, funcionales y visualmente atractivos que convierten visitantes en clientes.</p>
                            <IconsContainer>
                                <FaCode />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg 
                        ref={el => serviciosRef.current[7] = el} 
                        className={animateIndices.has(7) ? 'animate right' : ''} 
                    />
                </ServicioContainer>
                
                {/* Quinto Servicio: SDR */}
                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[8] = el} 
                        className={animateIndices.has(8) ? 'animate left' : ''} 
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[9] = el} 
                        className={animateIndices.has(9) ? 'animate right' : ''}>
                        <DescripcionContainer>
                            <h3>SDR: Sales Development Representative</h3>
                            <p>Prospectos calificados para tu crecimiento. Conectamos tu negocio con los clientes ideales</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

                {/* Sexto Servicio: Comunicación Institucional */}
                <ServicioContainer>
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[10] = el} 
                        className={animateIndices.has(10) ? 'animate left' : ''}>
                        <DescripcionContainer className='right'>
                            <h3>Comunicación Institucional</h3>
                            <p>Construimos relaciones sólidas. Comunicamos tus valores y fortalecemos la conexión entre tu marca y su audiencia.</p>
                            <IconsContainer>
                                <FaCode />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg 
                        ref={el => serviciosRef.current[10] = el} 
                        className={animateIndices.has(10) ? 'animate right' : ''} 
                    />
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[11] = el} 
                        className={animateIndices.has(11) ? 'animate left' : ''} 
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[11] = el} 
                        className={animateIndices.has(11) ? 'animate right' : ''}>
                        <DescripcionContainer>
                            <h3>Manejo de redes sociales</h3>
                            <p>Estrategias que convierten. Nos encargamos de todo, desde la planificación hasta la publicación, para potenciar tu marca en redes sociales.</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

            </ServiciosWrapper>
        </ServiciosContainer>
    );
};

export default Servicios;
