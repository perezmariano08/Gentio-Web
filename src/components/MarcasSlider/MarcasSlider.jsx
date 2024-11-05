import React, { useState } from 'react';
import { 
    MarcasSliderBackground,
    MarcasSliderContainer, 
    MarcasSliderDescripcion, 
    MarcasSliderText, 
    MarcasSliderTitulo, 
    MarcasSliderWrapper 
} from './MarcasSliderStyles';
import Button from '../Button/Button';
import { Carousel } from 'primereact/carousel';
import LogoTijuca from '../Logos/LogoTijuca';
import LogoSecretos from '../Logos/LogoSecretos';
import LogoLuco from '../Logos/LogoLuco';
import LogoElectro from '../Logos/LogoElectro';
import Flecha from '../Logos/Flecha';
import LogoDonNunez from '../Logos/LogoDonNunez';

const MarcasSlider = () => {

    const marcas = [
        {
            img: LogoTijuca,
            nombre: 'Tijuca',
            descripcion: 'Gracias a nuestra estrategia, Tijuca aumentó su base de seguidores en un 8.85% y su alcance diario en redes creció un 75.55%.',
            pdf: '/pdf/pdf-tijuca.pdf',
            bk: '/imgs/backgrounds/bk-tijuca.jpg'
        },
        {
            img: LogoSecretos,
            nombre: 'Secretos de Campo',
            descripcion: 'Gracias a nuestra estrategia, Secretos de Campo experimentó un crecimiento del 99.69% en seguidores en solo tres meses.',
            pdf: '/pdf/pdf-secretos.pdf',
            bk: '/imgs/backgrounds/bk-secretos.jpg'
        },
        {
            img: LogoDonNunez,
            nombre: 'Don Nuñez',
            descripcion: 'Gracias a nuestra estrategia de comunicación, Don Nuñez superó los 6.000 seguidores en menos de 20 días de creada la cuenta de Instagram.',
            pdf: '/pdf/pdf-don-nunez.pdf',
            bk: '/imgs/backgrounds/bk-don-nunez.jpg'
        },
        {
            img: LogoLuco,
            nombre: 'Luco Gourmet',
            descripcion: 'Con nuestra estrategia, Luco Gourmet experimentó un crecimiento del 62.41% en seguidores.',
            pdf: '/pdf/pdf-luco.pdf',
            bk: '/imgs/backgrounds/bk-luco.jpg'
        },
        {
            img: LogoElectro,
            nombre: 'Electro Manantiales',
            descripcion: 'Gracias a nuestras estrategias de comunicación, Tijuca ha logrado aumentar su base de seguidores.',
            pdf: '/pdf/pdf-electro.pdf',
            bk: '/imgs/backgrounds/bk-electro.jpg'
        }
    ];
    
    const handleDownload = (pdf) => {

        // Usar un elemento <a> para descargar el PDF
        const link = document.createElement('a');
        link.href = pdf; // URL del PDF
        link.target = '_blank'; // Abrir en una nueva pestaña
        link.download = pdf.split('/').pop(); // Nombre del archivo
        document.body.appendChild(link); // Añadir a la página
        link.click(); // Hacer clic para descargar
        document.body.removeChild(link); // Remover el enlace después de la descarga
    };

    const marcaTemplate = (marca) => (
            <MarcasSliderDescripcion key={marca.nombre}>
                {React.createElement(marca.img)}
                <p>{marca.descripcion}.</p>
                <Button onClick={() => handleDownload(marca.pdf)}>
                    <span>Ver analíticas</span>
                    <Flecha />
                </Button>
            </MarcasSliderDescripcion>
    );

    return (
        <MarcasSliderContainer>
            <MarcasSliderWrapper>
                <MarcasSliderText>
                    <MarcasSliderTitulo>
                        <h2>Nuestras Marcas</h2>
                        <p>Descubrí el <span>impacto</span> que generamos</p>
                    </MarcasSliderTitulo>
                    <div className='card'>
                        <Carousel
                            value={marcas} 
                            numVisible={1} 
                            numScroll={1} 
                            itemTemplate={marcaTemplate} 
                            circular 
                            showNavigators 
                            showIndicators 
                        />
                    </div>
                </MarcasSliderText>
            </MarcasSliderWrapper>
        </MarcasSliderContainer>
    );
};

export default MarcasSlider;
