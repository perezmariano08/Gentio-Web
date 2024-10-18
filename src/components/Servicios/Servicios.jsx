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
                            <h3>Analíticas</h3>
                            <p>Transformamos datos en decisiones. Con analíticas precisas, optimizamos tus campañas para obtener resultados reales y medibles.</p>
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
                            <p>Diseñamos con propósito. Creamos piezas gráficas de alta calidad que reflejan la identidad de tu marca y dejan una impresión duradera.</p>
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
                            <p>Impulsamos tu crecimiento. Nuestros SDRs califican prospectos y generan oportunidades de venta, conectando tu negocio con los clientes ideales</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>
            </ServiciosWrapper>
        </ServiciosContainer>
    );
};

export default Servicios;
