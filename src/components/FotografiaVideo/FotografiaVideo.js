import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { fadeInLeft, floating, fadeInDown, fadeInUp, fadeInRight, fadeIn } from "../../styles/GlobalStyles";

export const FotografiaVideoContainer = styled(ContainerStyled)`

`

export const FotografiaVideoWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    align-items: start;
    opacity: 0; /* Inicialmente invisible */
    transition: opacity 0.5s ease-in-out; /* Transición suave para la opacidad */

    &.servicios {
        margin: 40px 0 20px 0;
        h2 {
            width: 100%;
        }
    }

    h2 {
        text-transform: uppercase;
        font-size: 80px;
        line-height: 80px;
        color: var(--white);
        width: 60%;
        text-align: start;

        @media (max-width: 768px) {
            font-size: 40px;
            line-height: 40px;
            width: 100%;
        }
    }

    p {
        width: 50%;
        @media (max-width: 768px) {
            width: 90%;
        }
    }

    & span {
        color: var(--orange-500);
    }

    /* Cuando es visible, cambia la opacidad y aplica la animación */
    &.visible {
        opacity: 1; /* Ahora será visible */
        h2, p, button {
            animation: ${fadeInLeft} 1s ease-in-out;
        }
    }
`;

export const FotoVideoContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0; /* Sin gap para que se vean mejor en mobile */
    }
`

export const FotoContenedorColumna = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 33%;
    height: 800px;

    /* Estilos para las columnas de reels */
    &.reel-column {
        width: 33.333%;
        height: 800px;
        
        @media (max-width: 768px) {
            width: 100%;
            height: 600px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 768px) {
        &.first-row {
            flex-direction: row;
            width: 100%;
            height: 400px;
        }
    }

    @media (max-width: 768px) {
        &.two-row {
            width: 100%;
            height: 400px;
        }
    }

    @media (max-width: 768px) {
        &.three-row {
            display: none;
        }
    }
`

export const FotoVideoImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: ${({ bgUrl }) => `url(${bgUrl})`}; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(10, 3, 17, 0.3); /* Ajustamos la opacidad a 20% para hacerlo más suave */
        z-index: 1; /* Asegura que esté encima de la imagen */
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(10, 3, 17, 0.1) 0%, rgba(10, 3, 17, 0.4) 40%, var(--bg) 100%); 
        z-index: 2; /* Asegura que el degradado esté encima del color sólido */
    }
`;

export const Video = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    
    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        animation: ${fadeIn} 2s ease-in-out;
    }

    /* Estilos específicos para videos reel */
    &.video-reel {
        width: 100%;
        height: 100%;
        
        video {
            object-fit: cover;
            /* Para videos verticales, asegurar que se vean bien */
            object-position: center;
        }
        
        @media (max-width: 768px) {
            height: 100%;
            
            video {
                object-fit: cover;
            }
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(10, 3, 17, 0.3);
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba(10, 3, 17, 0.1) 0%, rgba(10, 3, 17, 0.4) 40%, var(--bg) 100%); 
        z-index: 2;
    }

    &.video-zc { 
        @media (max-width: 768px) {
            video {
                width: 120%;
                height: 120%;
            }
        }
    }

    &.video-luco-hamburgesa {
        display: none;
        @media (max-width: 768px) {
            display: flex;
        }
    }

    &.video-luco-gral {
        display: flex;
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export const FotoTitle = styled.span`
    position: absolute;
    top: 30px;
    left: 30px;
    color: var(--white);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 30px;
    width: 40%;
    z-index: 3;
    /* Agregar sombra para mejor legibilidad */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        top: 20px;
        left: 20px;
        font-size: 20px;
        width: 60%;
    }
`