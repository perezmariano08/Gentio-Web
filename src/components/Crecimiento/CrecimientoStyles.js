import styled, { keyframes } from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { fadeInLeft, floating, fadeInDown, fadeInUp, fadeInRight, fadeIn } from "../../styles/GlobalStyles";

// Animación de caída libre
const drop = keyframes`
    0% {
        transform: translateY(-200px) rotate(0deg);
        opacity: 0;
    }
    70% {
        opacity: 1;
        transform: translateY(30px) rotate(45deg); /* Ajuste intermedio para simular rebote */
    }
    100% {
        transform: translateY(0) rotate(0deg); /* Posición final */
    }
`;

export const CrecimientoContainer = styled(ContainerStyled)`
    padding: 40px 0;
`

export const CrecimientoWrapper = styled(WrapperStyled)`
    flex-direction: column;
    gap: 60px;
`

export const CrecimientoText = styled.div`
    flex-direction: column;
    display: flex;
    gap: 30px;
    width: 75%;
    opacity: 0; /* Inicialmente invisible */
    transition: opacity 0.5s ease-in-out; /* Transición suave para la opacidad */
    
    p {
        width: 65%;
        color: #898178;
    }

    @media (max-width: 768px) {
        width: 100%;
        p {
            width: 100%;
        }
    }

    &.visible {
        opacity: 1; /* Aparece cuando está visible */
        h2, p, button {
            animation: ${fadeInLeft} 1s ease-in-out; /* Aplica la animación de fade */
        }
    }
`

export const CrecimientoItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`

export const CrecimientoItem = styled.div`
    max-height: 400px;
    background-color: var(--white);
    width: 100%;
    padding: 20px 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 10px; */

    h5 {
        font-size: 40px;
        font-weight: 500;
        color: var(--bg);
        text-transform: uppercase;
    }

    svg {
        color: var(--bg);
        font-size: 50px;
    }

    h6 {
        font-weight: 500;
        line-height: 28px;
        font-size: 28px;
        color: var(--bg);
    }

    /* Animaciones de entrada */
    &.fadeInLeft {
        animation: ${fadeInLeft} 1s ease-in-out;
    }

    &.fadeInRight {
        animation: ${fadeInRight} 1s ease-in-out;
    }

    &.fadeInUp {
        animation: ${fadeInUp} 1s ease-in-out;
    }

    &.fadeInDown {
        animation: ${fadeInDown} 1s ease-in-out;
    }

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`;

export const CrecimientoItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    div {
        min-height: calc(30% - 10px);
        H5 {
            font-size: 40px;
            line-height: 55px;
            font-weight: 600;
        }
        &:nth-child(2) {
            background-color: var(--blue);
            h5 {
                color: var(--orange-500);
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: row;
    }
    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const Servicios = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: end;
    /* overflow: hidden; */
`

export const ServicioItem = styled.div`
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    color: var(--bg);
    width: fit-content;
    height: fit-content;
    border: 1px solid var(--bg);

    &.filled {
        background-color: var(--bg);
        color: var(--white);
    }

    animation: ${floating} 2s ease-in-out infinite; // Aplica la animación
    &:nth-child(1) {
        animation-delay: 0s; // Sin retraso
    }
    &:nth-child(2) {
        animation-delay: 0.2s; // 200 ms de retraso
    }
    &:nth-child(3) {
        animation-delay: 0.4s; // 400 ms de retraso
    }
    &:nth-child(4) {
        animation-delay: 0.6s; // 600 ms de retraso
    }
    &:nth-child(5) {
        animation-delay: 0.8s; // 800 ms de retraso
    }
    &:nth-child(6) {
        animation-delay: 1s; // 1 segundo de retraso
    }
`;

export const CitaMarca = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    img {
        width: 10%;
    }

    
    div {
        display: flex;
        flex-direction: column;
        p {
            font-weight: 500;
        }
        span {
            color: var(--bg);
            text-transform: uppercase;
            font-weight: 500;
        }
    }
`
