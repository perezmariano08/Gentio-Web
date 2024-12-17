import React from 'react';
import { Carousel } from 'primereact/carousel';
import Button from '../Button/Button';
import { MarcasSliderDescripcion, MarcasSliderTitulo } from './SliderMarcas';
import Flecha from '../Logos/Flecha';
import { useTranslation } from 'react-i18next';

const SliderMarcas = () => {
    const [t] = useTranslation("global")
    
    const marcas = [
        {
            img: './imgs/marcas/luco.png',
            nombre: 'Luco Gourmet',
            descripcion: t('slider.luco.descripcion'),
            pdf: '/pdf/pdf-luco.pdf',
            bk: '/imgs/backgrounds/bk-luco.jpg'
        },
        {
            img: './imgs/marcas/electro.png',
            nombre: 'Electro Manantiales',
            descripcion: t('slider.electro.descripcion'),
            pdf: '/pdf/pdf-electro.pdf',
            bk: '/imgs/backgrounds/bk-electro.jpg'
        },
        {
            img: './imgs/marcas/don-nunez.png',
            nombre: 'Don Nuñez',
            descripcion: t('slider.don-nunez.descripcion'),
            pdf: '/pdf/pdf-don-nunez.pdf',
            bk: '/imgs/backgrounds/bk-don-nunez.jpg'
        },
        {
            img: './imgs/marcas/tijuca.png',
            nombre: 'Tijuca',
            descripcion: t('slider.tijuca.descripcion'),
            pdf: '/pdf/pdf-tijuca.pdf',
            bk: '/imgs/backgrounds/bk-tijuca.jpg'
        },
        {
            img: './imgs/marcas/secretos.png',
            nombre: 'Secretos de Campo',
            descripcion: t('slider.secretos.descripcion'),
            pdf: '/pdf/pdf-secretos.pdf',
            bk: '/imgs/backgrounds/bk-secretos.jpg'
        },
    ];
    
    // Template para el carousel
    const itemTemplate = (marca) => {
        const isSecretosDeCampo = marca.nombre === 'Secretos de Campo';
        const isTijuca = marca.nombre === 'Tijuca'

        return (
            <div className="carousel-item" style={{
                backgroundImage: `url(${marca.bk})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px', // Ajustar la altura del slide a 600px
                display: 'flex',
                flexDirection: 'column',
                gap: '50px',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Capa negra con opacidad */}
                <div style={{
                    position: 'absolute', // Asegura que cubra toda la imagen
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo negro con 50% de opacidad
                    zIndex: 1
                }}></div>
                <MarcasSliderTitulo>
                        <h2>{t('slider.titulo')}</h2>
                        <h2><span>{t('slider.impacto')}</span> {t('slider.marca')}</h2>
                        <h2>{t('slider.generamos')}</h2>
                </MarcasSliderTitulo>

                {/* Contenido dentro del slider */}
                <MarcasSliderDescripcion style={{
                    zIndex: 2, // Asegura que el contenido esté por encima de la capa negra
                    textAlign: 'center',
                    maxWidth: '80%', // Limitar el ancho para mejor presentación
                    margin: '0 auto', // Centrar horizontalmente
                    padding: '20px', // Añadir un poco de espacio alrededor
                }}>
                    <img 
                    src={marca.img} 
                    className={`${isSecretosDeCampo ? 'secretos' : ''} ${isTijuca ? 'tijuca' : ''}`} 
                    alt={marca.nombre} 
                    />

                    <p>{marca.descripcion}</p>
                    <Button onClick={() => window.open(marca.pdf, '_blank')} >
                        <span>{t('slider.boton')}</span>
                        <Flecha />
                    </Button>
                </MarcasSliderDescripcion>
            </div>
        );
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <Carousel
                value={marcas}
                numVisible={1}
                numScroll={1}
                itemTemplate={itemTemplate}
                className="custom-carousel" circular
                autoplayInterval={3000}
                showIndicators
                showNavigators
                style={{ width: '100%', height: '600px' }} // Ajusta el carousel a 600px de altura
            />
            {/* Ajustar las flechas para que estén más centradas en el medio */}
            <style>
                {`
                    .p-carousel .p-carousel-prev,
                    .p-carousel .p-carousel-next {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        color: white;
                        background-color: rgba(0, 0, 0, 0.5);
                        border-radius: 50%;
                        padding: 10px;
                        z-index: 1000;
                    }

                    .p-carousel .p-carousel-prev {
                        left: 20px;
                    }

                    .p-carousel .p-carousel-next {
                        right: 20px;
                    }

                    .p-carousel .p-carousel-prev:hover,
                    .p-carousel .p-carousel-next:hover {
                        background-color: rgba(0, 0, 0, 0.7);
                    }

                    /* Estilos para los indicadores (paginador) */
                    .p-carousel .p-carousel-indicators {
                        position: absolute;
                        gap: 10px;
                        bottom: 20px; /* Posiciona el paginador en la parte inferior */
                        left: 50%;
                        width: 100%;
                        transform: translateX(-50%); /* Centra el paginador */
                        z-index: 5;
                    }

                    .p-carousel .p-carousel-indicator {
                        border-radius: 20px;
                        overflow: hidden;
                    }

                    .p-carousel .p-carousel-indicator button {
                        background-color: #F4E5D4;
                        height: 5px;
                        width: 45px;
                    }

                    .p-carousel .p-carousel-indicator.p-highlight button {
                        background-color: #FB773C;
                    }

                    .p-carousel .p-carousel-indicators .p-carousel-indicator {
                        transition: background-color 0.3s;
                    }

                    .p-carousel .p-carousel-indicators .p-carousel-indicator:hover {
                        background-color: rgba(255, 255, 255, 1);
                    }
                `}
            </style>
        </div>
    );
};

export default SliderMarcas;
