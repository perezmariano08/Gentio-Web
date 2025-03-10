import styled, {keyframes} from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { fadeInRight, floating } from "../../styles/GlobalStyles";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const EquipoContainer = styled(ContainerStyled)`
    scroll-margin-top: 100px;

`

export const EquipoWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 80px;
    gap: 40px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    gap: 20px;
    z-index: 2;
    right: 0;
    opacity: 0; /* Inicialmente invisible */
    transition: opacity 0.5s ease-in-out; /* Transición suave para la opacidad */

    @media (max-width: 768px) {
        top: -200px;
    }

    @media (min-width: 769px) and (max-width: 1268px) {
        top: -130px; /* Ajuste intermedio */
    }

    h2 {
        font-size: 80px;
        line-height: 90%;
        color: var(--white);
        width: 100%;
        text-align: end;
        
        @media (max-width: 768px) {
            font-size: 40px;
            line-height: 40px;
            width: 100%;
        }
        @media (min-width: 769px) and (max-width: 1268px) {
            font-size: 70px; /* Tamaño intermedio */
        }
    }

    & span {
        color: var(--orange-500);
    }

    &.visible {
        opacity: 1; /* Aparece cuando está visible */
        h2, p {
            animation: ${fadeInRight} 1s ease-in-out; /* Aplica la animación de fade */
        }
    }

    p {
        width: 60%;
        @media (max-width: 768px) {
            width: 90%;
        }
    }
`

export const ServicioContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 20px;
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
    background-color: var(--violet);
    border-radius: 20px;
    padding: 40px 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0; /* Inicialmente invisible */
    /* transition: opacity 0.5s ease; Transición suave */

    &.visible {
        opacity: 1; /* Aparece cuando está visible */
        animation: ${fadeInRight} 1.5s ease-in-out; /* Aplica la animación de fade */
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
        @media (max-width: 768px) {
            font-size: 22px;
            line-height: 22px;
        }
    }
`
export const TeamContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    justify-content: center; /* Opcional: Centra el grid horizontalmente */
    border-radius: 20px;
`

export const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribuye espacio entre elementos */
    height: 100%; /* Asegura que todas las tarjetas tengan la misma altura */
    border-radius: 20px;
    padding: 15px 15px 20px 15px;
    background-color: var(--white);
    text-align: center;
    align-items: center;
    /* opacity: 0; */
    transform: translateX(0); /* Reseteo inicial */
    
    img {
        object-fit: cover;
        width: 120px;
        height: 120px;
        margin-bottom: 20px;
    }

    h5 {
        font-size: 22px;
        font-weight: 500;
        color: var(--violet);
    }

    p {
        font-size: 14px;
        /* margin-top: 4px; */
        /* height: 40px; */
        width: 90%;
    }

    span {
        margin-top: 10px;
        color: var(--orange-500);
        font-weight: 500;
    }

    div {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        svg {
            font-size: 30px;
            color: var(--violet);
        }
    }

    &.animate {
    opacity: 1;
    animation: ${({ index }) =>
      index % 2 === 0 ? slideInLeft : slideInRight} 0.8s forwards;
  }
`;

export const TeamCardImagen = styled.div`
    width: 100%;
    height: 320px;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
        object-fit: cover; /* Asegura que la imagen se ajuste al contenedor */
        object-position: top; /* Fija la posición de la imagen desde la parte superior */
    }
`

export const TeamCardTitlesContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 5px;
`