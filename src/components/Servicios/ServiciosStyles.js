import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const ServiciosContainer = styled(ContainerStyled)`
    padding: 120px 0;
`

export const ServiciosWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const ServicioContainer = styled.section`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 400px;
    max-width: 1260px;
    padding: 0 30px;

    @media (max-width: 768px) {
        padding: 0 20px;
        gap: 10px;
    }
`
export const ServicioImg = styled.div`
    width: 70%;
    height: 100%;
    background-image: url(/imgs/bg_hero.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`
export const ServicioDescripcion = styled.div`
    width: 30%;
    text-align: center;
    background-color: var(--white);
    border-radius: 20px;
    color: var(--bg);

    @media (max-width: 768px) {
        width: 100%;
        height: 350px;
    }
`
export const DescripcionContainer = styled.span`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 15px;
    padding: 20px;
    text-align: start;

    h2 {
        font-size: 40px;
        line-height: 40px;
    }

    p {
        font-size: 18px;
    }
`
export const IconsContainer = styled.span`
    display: flex;
    gap: 10px;
    align-items: center;

    & i,svg {
        font-size: 20px;
    }
`