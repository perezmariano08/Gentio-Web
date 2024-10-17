import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const EquipoContainer = styled(ContainerStyled)`
    padding: 120px 0;
`

export const EquipoWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const TitleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    z-index: 2;
    top: -120px;
    right: 0;

    @media (max-width: 768px) {
        top: -200px;
    }

    @media (min-width: 769px) and (max-width: 1268px) {
        top: -130px; /* Ajuste intermedio */
    }

    h2 {
        font-size: 80px;
        line-height: 60px;
        color: var(--white);
        width: 100%;
        text-align: end;
        
        @media (max-width: 768px) {
            font-size: 60px;
        }

        @media (min-width: 769px) and (max-width: 1268px) {
            font-size: 70px; /* Tamaño intermedio */
        }
    }

    p {
        font-size: 16px;
        font-weight: 200;
        width: 50%;
        color: var(--gray-300);
        
        @media (min-width: 769px) and (max-width: 1268px) {
            width: 60%; /* Ajuste intermedio */
        }
    }

    & span {
        color: var(--orange-500);
    }
`

export const ServicioContainer = styled.section`
    position: absolute;
    display: flex;
    gap: 20px;
    width: 100%;
    height: 400px;
    width: 100%;
    max-width: 1230px;
    background-image: url(/imgs/bg_hero.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    /* Para tablet (entre 768px y 1260px) */
    @media (max-width: 1260px) and (min-width: 768px) {
        width: 100%;
        max-width: 95%; /* Ancho porcentual para tablet */
    }

    /* Para dispositivos móviles (menos de 768px) */
    @media (max-width: 768px) {
        max-width: 95%; /* Ancho porcentual para móvil */
    }
`;

export const CardEquipo = styled.div`
    position: relative; /* Colocamos la caja de manera absoluta para poder ajustar su posición */
    background-color: var(--violet);
    border-radius: 20px;
    padding: 20px;
    width: 400px;
    gap: 120px;
    display: flex;
    flex-direction: column;
    top: -60px; /* Ajusta la posición vertical */
    left: -380px; /* Ajusta la posición horizontal */
    z-index: 3; /* Asegura que esté por encima de ServicioContainer */

    /* Para tablet (entre 768px y 1260px) */
    @media (max-width: 1260px) and (min-width: 768px) {
        top: -60px; /* Ajusta la posición vertical */
        left: -300px; /* Ajusta la posición horizontal */
    }

    /* Para dispositivos móviles, centramos el CardEquipo */
    @media (max-width: 768px) {
        top: 0;
        left: 0;
        width: 100%; /* Ajustamos el ancho para que sea responsivo */
        margin: 0 auto; /* Centrado horizontalmente */
    }

    div {
        display: flex;
        width: 100%;
        justify-content: end;
    }

    svg {
        width: 100px;
    }
`;

export const CardText = styled.span`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
        font-size: 40px;
        color: var(--orange-500);
        width: 100%;
        font-weight: 500;
    }
    p {
        font-size: 18px;
        color: var(--white);
        width: 100%;
        font-weight: 300;
    }
`