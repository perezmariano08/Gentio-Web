import React, { useEffect, useRef, useState } from 'react';
import { CitaMarca, CrecimientoContainer, CrecimientoItem, CrecimientoItemColumn, CrecimientoItemsWrapper, CrecimientoText, CrecimientoWrapper, ServicioItem, Servicios } from './CrecimientoStyles';
import Button from '../Button/Button';
import { ImQuotesLeft } from "react-icons/im";
import Flecha from '../Logos/Flecha';

const Crecimiento = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasCounted, setHasCounted] = useState(false); // Nuevo estado para prevenir múltiples conteos
    const textRef = useRef(null);

    // Estados para los valores que se animarán
    const [count15, setCount15] = useState(0);
    const [count2_6M, setCount2_6M] = useState(0);
    const [count15M, setCount15M] = useState(0);

    // Función para verificar si el componente está en el viewport
    const checkVisibility = () => {
        if (textRef.current) {
            const { top, bottom } = textRef.current.getBoundingClientRect();
            const isInViewport = top < window.innerHeight && bottom >= 0;
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

    // Efecto de conteo cuando el componente es visible
    useEffect(() => {
        if (isVisible && !hasCounted) {
            setHasCounted(true); // Para evitar que se active de nuevo en scroll

            let count1 = 0, count2 = 0, count3 = 0;

            // Iniciar intervalos de conteo para cada número con un intervalo mayor
            const interval1 = setInterval(() => {
                count1 += 1;
                setCount15(count1);
                if (count1 >= 15) clearInterval(interval1);
            }, 100); // Ajuste de la velocidad para contar más lentamente (cada 100ms)

            const interval2 = setInterval(() => {
                count2 += 5000; // Aumento más lento en el conteo
                setCount2_6M(count2);
                if (count2 >= 2600000) clearInterval(interval2);
            }, 30); // Ajuste de velocidad para un conteo más lento

            const interval3 = setInterval(() => {
                count3 += 1;
                setCount15M(count3);
                if (count3 >= 15) clearInterval(interval3);
            }, 100);

            // Limpiar intervalos cuando el componente se desmonta
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            };
        }
    }, [isVisible, hasCounted]);

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
                        <Flecha />
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
                            <ServicioItem className='filled'>Video-fotografia</ServicioItem>
                            <ServicioItem>SDR: Sales Development Representative</ServicioItem>
                        </Servicios>
                    </CrecimientoItem>
                    <CrecimientoItemColumn>
                        <CrecimientoItem>
                            <h5>{count15}</h5>
                            <p>Marcas confían en nosotros.</p>
                        </CrecimientoItem>
                        <CrecimientoItem>
                            <h5>{(count2_6M / 1000000).toFixed(1)}M</h5>
                            <p>Impresiones mensuales entre todas nuestras marcas</p>
                        </CrecimientoItem>
                        <CrecimientoItem>
                            <h5>${count15M}M</h5>
                            <p>Invertidos en publicidad mensualmente.</p>
                        </CrecimientoItem>
                    </CrecimientoItemColumn>
                </CrecimientoItemsWrapper>
            </CrecimientoWrapper>
        </CrecimientoContainer>
    );
};

export default Crecimiento;
