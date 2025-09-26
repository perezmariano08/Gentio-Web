import React, { useEffect, useRef, useState } from 'react';
import { CitaMarca, CrecimientoContainer, CrecimientoItem, CrecimientoItemColumn, CrecimientoItemsWrapper, CrecimientoText, CrecimientoWrapper, ServicioItem, Servicios } from './CrecimientoStyles';
import Button from '../Button/Button';
import { ImQuotesLeft } from "react-icons/im";
import Flecha from '../Logos/Flecha';
import { useTranslation } from 'react-i18next';

const Crecimiento = () => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    // Estados para los valores que se animarán
    const [count15, setCount15] = useState(0);
    const [countUGC, setCountUGC] = useState(0);
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

    useEffect(() => {
        if (isVisible) {
            let count1 = 0, count2 = 0, count3 = 0;

            const interval1 = setInterval(() => {
                count1 += 1;
                if (count1 >= 24) clearInterval(interval1);
                setCount15(count1);
            }, 90);

            const interval2 = setInterval(() => {
                count2 += 1;
                if (count2 >= 50) clearInterval(interval2);
                setCountUGC(count2);
            }, 80);

            const interval3 = setInterval(() => {
                count3 += 1;
                if (count3 >= 15) clearInterval(interval3);
                setCount15M(count3);
            }, 170);

            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            };
        }
    }, [isVisible]);

    const [t] = useTranslation("global");

    const handleWhatsAppClick = () => {
        const phoneNumber = "+5493512390278";
        const message = t('mensaje-whp.mensaje');
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <CrecimientoContainer>
            <CrecimientoWrapper>
                <CrecimientoText className={'visible'}>
                    <h2>{t('crecimiento.titulo')}</h2>
                    <p>{t('crecimiento.descripcion')}</p>
                    <Button onClick={handleWhatsAppClick}>
                        <span>{t('crecimiento.boton')}</span>
                        <Flecha />
                    </Button>
                </CrecimientoText>
                <CrecimientoItemsWrapper>
                    <CrecimientoItem wrapEnabled={true}>
                        <h5>{t('crecimiento.servicios.titulo')}</h5>
                        <Servicios>
                            <ServicioItem>{t('crecimiento.servicios.lista.0')}</ServicioItem>
                            <ServicioItem className='filled'>{t('crecimiento.servicios.lista.1')}</ServicioItem>
                            <ServicioItem>{t('crecimiento.servicios.lista.2')}</ServicioItem>
                            <ServicioItem>{t('crecimiento.servicios.lista.3')}</ServicioItem>
                            <ServicioItem className='filled'>{t('crecimiento.servicios.lista.4')}</ServicioItem>
                            <ServicioItem className='filled'>{t('crecimiento.servicios.lista.5')}</ServicioItem>
                            <ServicioItem>{t('crecimiento.servicios.lista.6')}</ServicioItem>
                        </Servicios>
                    </CrecimientoItem>
                    <CrecimientoItemColumn ref={textRef} className={isVisible ? 'visible' : ''}>
                        <CrecimientoItem wrapEnabled={false}>
                            <h5>{count15}</h5>
                            <p>{t('crecimiento.estadisticas.marcas')}</p>
                        </CrecimientoItem>
                        <CrecimientoItem wrapEnabled={false}>
                            <h5>+{countUGC}</h5>
                            <p>Creadores de contenido UGC</p>
                        </CrecimientoItem>
                        <CrecimientoItem wrapEnabled={false}>
                            <h5>{count15M}</h5>
                            <p>{t('crecimiento.estadisticas.profesionales')}</p>
                        </CrecimientoItem>
                    </CrecimientoItemColumn>
                </CrecimientoItemsWrapper>
            </CrecimientoWrapper>
        </CrecimientoContainer>
    );
};

export default Crecimiento;
