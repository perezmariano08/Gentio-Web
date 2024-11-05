/* ServiciosStyles.js */
import styled, { keyframes } from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

const slideInLeft = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideInRight = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const ServiciosContainer = styled(ContainerStyled)``;

export const ServiciosWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    overflow: hidden;
`;

export const ServicioContainer = styled.section`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 400px;

    &.animate {
        &:nth-child(odd) {
            animation: ${slideInLeft} 1s forwards; /* Aumentar la duración */
        }
        &:nth-child(even) {
            animation: ${slideInRight} 1s forwards; /* Aumentar la duración */
        }
    }

    @media (max-width: 768px) {
        height: 250px;
    }
`;

export const ServicioImg = styled.div`
    width: 70%;
    height: 100%;
    background-image: ${({ bgUrl }) => `url(${bgUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    opacity: 0; /* Inicia invisible */
    will-change: opacity, transform; /* Optimiza las animaciones */
    
    &.animate.left {
        animation: ${slideInLeft} 1s forwards;
    }

    &.animate.right {
        animation: ${slideInRight} 1s forwards;
    }

    @media (max-width: 968px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ServicioDescripcion = styled.div`
    width: 30%;
    text-align: center;
    background-color: var(--white);
    border-radius: 20px;
    color: var(--bg);
    min-height: 100%;
    opacity: 0; /* Inicia invisible */
    will-change: opacity, transform; /* Optimiza las animaciones */

    &.animate.left {
        animation: ${slideInRight} 1s forwards;
    }

    &.animate.right {
        animation: ${slideInLeft} 1s forwards;
    }

    @media (max-width: 968px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DescripcionContainer = styled.span`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 30px;
    padding: 20px;
    text-align: start;

    h3 {
        font-weight: 500;
        color: var(--bg);
        text-transform: uppercase;
    }

    &.right {
        text-align: end;
        align-items: end;
    }
`;

export const IconsContainer = styled.span`
    display: flex;
    gap: 10px;
    align-items: center;

    & i,
    svg {
        font-size: 20px;
    }
`;
