import React, { useEffect, useRef, useState } from 'react'
import { CitaMarca, CrecimientoContainer, CrecimientoItem, CrecimientoItemColumn, CrecimientoItemsWrapper, CrecimientoText, CrecimientoWrapper, ServicioItem, Servicios } from './CrecimientoStyles'
import Button from '../Button/Button'
import { ImQuotesLeft } from "react-icons/im";
import Flecha from '../Logos/Flecha';

const Crecimiento = () => {

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

    const handleWhatsAppClick = () => {
        const phoneNumber = "+5493516528777";
        const message = "Hola 👋🏻, estoy interesado en agendar una reunión para conocer más sobre sus servicios.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <CrecimientoContainer>
            <CrecimientoWrapper>
                <CrecimientoText ref={textRef} className={isVisible ? 'visible' : ''}>
                    <h2>Impulsamos el crecimiento de tu negocio</h2>
                    <p>Desatá el potencial de tu marca con nuestra experiencia comprobada en marketing. Desde la estrategia hasta la ejecución, transformamos cada acción en crecimiento real.</p>
                    <Button onClick={handleWhatsAppClick}>
                        <span>Agendá una reunion</span>
                        <Flecha/>
                    </Button>
                </CrecimientoText>
                <CrecimientoItemsWrapper>
                    <CrecimientoItem>
                        <h5>Servicios</h5>
                        <Servicios>
                            <ServicioItem>Comunicación institucional</ServicioItem>
                            <ServicioItem className='filled'>Estrategias de marketing y analítica</ServicioItem>
                            <ServicioItem>Diseño gráfico</ServicioItem>
                            <ServicioItem>Manejo de redes sociales</ServicioItem>
                            <ServicioItem className='filled'>Paid Ads</ServicioItem>
                            {/* <ServicioItem className='filled'>Analíticas</ServicioItem> */}
                            <ServicioItem className='filled'>Video-fotografia</ServicioItem>
                            <ServicioItem>SDR: Sales Development Representative</ServicioItem>
                        </Servicios>
                    </CrecimientoItem>
                    <CrecimientoItemColumn>
                        <CrecimientoItem>
                            <h5>15</h5>
                            <p>Marcas confían en nosotros.</p>
                        </CrecimientoItem>
                        <CrecimientoItem>
                            <h5>2.6M</h5>
                            <p>Impresiones mensuales entre todas nuestras marcas</p>
                        </CrecimientoItem>
                        <CrecimientoItem>
                            <h5>$15M</h5>
                            <p>Invertidos en publicidad mensualmente.</p>
                        </CrecimientoItem>
                    </CrecimientoItemColumn>
                    {/* <CrecimientoItem>
                        <ImQuotesLeft/>
                        <h6>Trabajar con Gentío fue una experiencia increíble. Nos ayudaron a redefinir nuestra presencia digital.
                            <br />
                            <br />
                            Impresionante resultado!
                        </h6>
                        <CitaMarca>
                            <img src="/imgs/marcas/secretos_dark.png" alt="" />
                            <div>
                                <span>lionel messi</span>
                                <p>Dueño empresa "Secretos de Campo"</p>
                            </div>
                        </CitaMarca>
                        
                    </CrecimientoItem> */}
                </CrecimientoItemsWrapper>
                
            </CrecimientoWrapper>
        </CrecimientoContainer>
    )
}

export default Crecimiento