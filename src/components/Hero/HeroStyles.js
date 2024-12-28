import styled, { keyframes } from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { fadeIn } from "../../styles/GlobalStyles";

// Define la animación de desenfoque
const glowAnimation = keyframes`
    0% {
        opacity: 0; /* Disminuir la opacidad inicial */
        filter: blur(0);
    }
    25% {
        opacity: 0.5; /* Sutileza en el cambio de opacidad */
        filter: blur(8px); /* Reducir el desenfoque */
    }


    100% {
        opacity: 0; /* Mantener la opacidad baja al final */
        filter: blur(0);
    }
`;


export const HeroContainer = styled(ContainerStyled)`
    padding: 160px 0 80px 0; 
    /* background-image: url(/videos/bg_hero.mov); */
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    overflow: hidden;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        animation: ${fadeIn} 2s ease-in-out; /* Aplica la animación de fade */
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(10, 3, 17, 0.5); /* Color sólido con 50% de opacidad */
        z-index: 1; /* Asegura que esté encima de la imagen */
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(10, 3, 17, 0) 0%, rgba(10, 3, 17, 1) 100%);
        z-index: 2; /* Asegura que el degradado esté encima del color sólido */
    }

    // Añade un nuevo div para la animación
    .glow {
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(249, 114, 24, 0.6), rgba(249, 165, 81, 0.3));
        z-index: 1; // Asegúrate de que esté por encima de otros elementos
        animation: ${glowAnimation} 5s infinite; // Aplica la animación
    }
`

export const HeroWrapper = styled(WrapperStyled)`
    z-index: 3;
    flex-direction: column;
    gap: 50px;
    align-items: end;
    justify-content: center;
    height: 100%;
`

export const HeroText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    text-transform: uppercase;
    gap: 25px;

    a {
        color: var(--orange-500);
        text-transform: uppercase;
        font-size: 20px;
        display: flex;
        gap: 5px;
        svg {
            height: inherit;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    h1 {
        text-align: end;
        width: 90%;
        span {
            font-weight: 700;
        }
        @media (max-width: 1100px) {
            width: 100%;
            font-size: 110px;
        }

        @media (max-width: 778px) {
            width: 100%;
            font-size: 80px;
        }
    }
`

export const HeroEstadisticasWrapper = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 768px) {
        gap: 25px;
    }
`

export const HeroEstadistica = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: end;
    max-width: 120px;
    
    span {
        text-transform: uppercase;
        text-align: end;
        font-size: 12px;
    }

    @media (max-width: 768px) {
        max-width: 100px;
        span {
            font-size: 10px;
        }
    }
`

export const HeroEstadisticaNumero = styled.div`
    display: flex;
    gap: 5px;
    font-weight: 600;
    line-height: 40px;
    font-size: 40px;
    align-items: start;
    justify-content: end;
    color: white;

    span {
        display: inline-block;
        font-size: 30px;
        line-height: 30px;
        background: linear-gradient(304deg, #F97218 8.23%, #F9A551 83.12%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        font-size: 30px;
        line-height: 30px;
    }
`