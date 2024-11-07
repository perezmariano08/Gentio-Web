import styled from 'styled-components';
import { ContainerStyled, WrapperStyled } from '../Mockups/Mockups';

// Definición de la animación de scroll infinito
const slider = `
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-150px * 28)); /* 140px (ancho de la imagen + gap) * 42 logos */
        }
    }
`;

const sliderMobile = `
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-80px * 30)); /* Ajuste para pantallas pequeñas */
        }
    }
`;

export const MarcasContainer = styled(ContainerStyled)`
    padding-top: 80px;
    padding-bottom: 40px;
    max-width: 1180px;
    overflow: hidden;
    margin: 0 auto; /* Centramos el contenedor */

    @media (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 20px;
    }
`;

export const MarcasWrapper = styled(WrapperStyled)`
    display: flex;
    gap: 30px; /* Espacio entre los logos */
    width: calc(150px * 42); /* 42 porque se duplican los logos (14 logos x 3 veces) */
    animation: scroll 20s linear infinite;
    align-items: center;

    img {
        width: 120px; /* Ancho de cada imagen */
    }


    /* Inserta la animación en el archivo de estilos */
    ${slider}

    @media (max-width: 768px) {
        gap: 20px; /* Reducir el gap en pantallas pequeñas */
        width: calc(80px * 42); /* 42 porque se duplican los logos (14 logos x 3 veces) */
        animation: scroll 15s linear infinite;
        img {
            width: 60px;
        }
        ${sliderMobile}
    }

`;
