import React, { useEffect, useRef, useState } from 'react';
import { ServiciosContainer, ServiciosWrapper, ServicioContainer, ServicioImg, ServicioDescripcion, DescripcionContainer, IconsContainer } from './ServiciosStyles';
import { FaGoogle, FaInstagram, FaFacebook, FaCode } from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { TitleContainer } from '../FotografiaVideo/FotografiaVideo';
import { SiGoogleads } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import LogoMetricool from '../Logos/LogoMetricool';
import { FaLinkedin } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

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

    const [t] = useTranslation("global")

    return (
        <ServiciosContainer id='servicios'>
            <ServiciosWrapper>
                <TitleContainer ref={textRef} className={isVisible ? 'visible servicios' : 'servicios'}>
                <h2>{t('servicios.titulo')} <span>{t('servicios.span')}</span></h2>
                <p>{t('servicios.descripcion')}</p>
                </TitleContainer>
                
                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[0] = el} 
                        className={animateIndices.has(0) ? 'animate left' : ''} 
                        bgUrl="/imgs/bg_services_1.jpg"
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[1] = el} 
                        className={animateIndices.has(1) ? 'animate right' : ''}
                        >
                        <DescripcionContainer>
                            <h3>{t('servicios.comunicacion.titulo')}</h3>
                            <p>{t('servicios.comunicacion.descripcion')}</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[2] = el} 
                        className={animateIndices.has(2) ? 'animate left' : ''}
                        >
                        <DescripcionContainer className='right'>
                            <h3>{t('servicios.marketing.titulo')}</h3>
                            <p>{t('servicios.marketing.descripcion')}</p>
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
                        bgUrl="/imgs/bg_services_2.jpg"
                    />
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[4] = el} 
                        className={animateIndices.has(4) ? 'animate left' : ''} 
                        bgUrl="/imgs/bg_services_3.jpg"
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[5] = el} 
                        className={animateIndices.has(5) ? 'animate right' : ''}>
                        <DescripcionContainer>
                            <h3>{t('servicios.grafico.titulo')}</h3>
                            <p>{t('servicios.grafico.descripcion')}</p>
                            <IconsContainer>
                                <SiAdobeillustrator />
                                <SiAdobephotoshop />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>
                
                <ServicioContainer>
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[6] = el} 
                        className={animateIndices.has(6) ? 'animate left' : ''}>
                        <DescripcionContainer className='right'>
                            <h3>{t('servicios.social.titulo')}</h3>
                            <p>{t('servicios.social.descripcion')}</p>
                            <IconsContainer>
                                <LogoMetricool/>
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg 
                        ref={el => serviciosRef.current[7] = el} 
                        className={animateIndices.has(7) ? 'animate right' : ''} 
                        bgUrl="/imgs/bg_services_4.jpg"
                    />
                </ServicioContainer>
                
                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[8] = el} 
                        className={animateIndices.has(8) ? 'animate left' : ''}
                        bgUrl="/imgs/bg_services_5.jpg" 
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[9] = el} 
                        className={animateIndices.has(9) ? 'animate right' : ''}>
                        <DescripcionContainer>
                        <h3>{t('servicios.paid.titulo')}</h3>
                        <p>{t('servicios.paid.descripcion')}</p>
                            <IconsContainer>
                                <FaMeta />
                                <SiGoogleads />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[10] = el} 
                        className={animateIndices.has(10) ? 'animate left' : ''}>
                        <DescripcionContainer className='right'>
                        <h3>{t('servicios.web.titulo')}</h3>
                        <p>{t('servicios.web.descripcion')}</p>
                            <IconsContainer>
                                <FaCode />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg 
                        ref={el => serviciosRef.current[11] = el} 
                        className={animateIndices.has(11) ? 'animate right' : ''} 
                        bgUrl="/imgs/bg_services_6.jpg"
                    />
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioImg 
                        ref={el => serviciosRef.current[12] = el} 
                        className={animateIndices.has(12) ? 'animate left' : ''} 
                        bgUrl="/imgs/bg_services_7.jpg"
                    />
                    <ServicioDescripcion 
                        ref={el => serviciosRef.current[13] = el} 
                        className={animateIndices.has(13) ? 'animate right' : ''}>
                        <DescripcionContainer>
                        <h3>{t('servicios.sdr.titulo')}</h3>
                        <p>{t('servicios.sdr.descripcion')}</p>
                            <IconsContainer>
                                <FaSalesforce />
                                <FaLinkedin />
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

            </ServiciosWrapper>
        </ServiciosContainer>
    );
};

export default Servicios;
