import React from 'react';
import { Carousel } from 'primereact/carousel';
import Button from '../Button/Button';
import { MarcasSliderDescripcion, MarcasSliderTitulo } from './SliderMarcas';
import Flecha from '../Logos/Flecha';

const marcas = [
    {
        img: './imgs/marcas/luco.png',
        nombre: 'Luco Gourmet',
        descripcion: 'Luco Gourmet logró su primera franquicia y experimentó un crecimiento del 62,41% en seguidores. Además tiene más de 1 millón de impresiones mensuales.',
        pdf: '/pdf/pdf-luco.pdf',
        bk: '/imgs/backgrounds/bk-luco.jpg'
    },
    {
        img: './imgs/marcas/electro.png',
        nombre: 'Electro Manantiales',
        descripcion: 'En solo dos meses, los seguidores crecieron un 72,68%, las visitas al perfil un +906,96% y los ingresos al sitio web para ver los productos un +755,56% Además, en este mismo periodo logramos más de 100K de impresiones.',
        pdf: '/pdf/pdf-electro.pdf',
        bk: '/imgs/backgrounds/bk-electro.jpg'
    },
    {
        img: './imgs/marcas/don-nunez.png',
        nombre: 'Don Nuñez',
        descripcion: 'Dun Nuñez superó los 7.400 seguidores y alcanzó 1 millón de impresiones en menos de dos meses',
        pdf: '/pdf/pdf-don-nunez.pdf',
        bk: '/imgs/backgrounds/bk-don-nunez.jpg'
    },
    {
        img: './imgs/marcas/tijuca.png',
        nombre: 'Tijuca',
        descripcion: 'Gracias a nuestras estrategias de comunicación, Tijuca ha logrado aumentar su base de seguidores y sus ventas a través de canales digitales y en su oficina de manera presencial.',
        pdf: '/pdf/pdf-tijuca.pdf',
        bk: '/imgs/backgrounds/bk-tijuca.jpg'
    },
    {
        img: './imgs/marcas/secretos.png',
        nombre: 'Secretos de Campo',
        descripcion: 'Secretos de Campo experimentó un crecimiento del 99.69% en seguidores en solo tres meses.',
        pdf: '/pdf/pdf-secretos.pdf',
        bk: '/imgs/backgrounds/bk-secretos.jpg'
    },
];

const SliderMarcas = () => {
    
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
                        <h2>Descubrí el</h2>
                        <h2><span>Impacto</span> que</h2>
                        <h2>generamos</h2>
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
                        <span>Ver analíticas</span>
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
