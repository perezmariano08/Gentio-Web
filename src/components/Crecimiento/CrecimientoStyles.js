import styled, { keyframes } from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

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
    min-height: 400px;
    background-color: var(--white);
    width: 100%;
    padding: 35px 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;

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


    @media (max-width: 900px) {
        flex-wrap: wrap;
    }

`

export const CrecimientoItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    div {
        min-height: calc(50% - 10px);
        H5 {
            font-size: 55px;
            line-height: 55px;
            font-weight: 600;
        }
        &:nth-child(1) {
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
    overflow: hidden;
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
