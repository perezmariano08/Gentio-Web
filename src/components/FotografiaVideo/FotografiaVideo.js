import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const FotografiaVideoContainer = styled(ContainerStyled)`
    padding: 120px 0;
`

export const FotografiaVideoWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    align-items: start;

    h2 {
        font-size: 80px;
        line-height: 80px;
        color: var(--white);
        width: 60%;
        text-align: start;

        @media (max-width: 768px) {
            font-size: 60px;
            line-height: 60px;
            width: 90%;
        }
    }

    p {
        font-size: 16px;
        font-weight: 200;
        width: 50%;
        color: var(--gray-300);
        @media (max-width: 768px) {
            width: 90%;
        }
    }

    & span {
        color: var(--orange-500);
    }
`
export const FotoVideoContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const FotoContenedorColumna = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 33%;
    height: 800px;

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
    background-image: url(/imgs/bg_hero.jpg);
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

export const FotoTitle = styled.span`
    position: absolute;
    top: 30px;
    left: 30px;
    color: var(--white);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    width: 40%;
    z-index: 3;

    @media (max-width: 768px) {
        top: 20px;
        left: 20px;
        font-size: 20px;
    }
`