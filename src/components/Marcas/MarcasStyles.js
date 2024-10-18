import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { floating } from "../../styles/GlobalStyles";

export const MarcasContainer = styled(ContainerStyled)`
    padding-top: 80px;
    padding-bottom: 40px;
`

export const MarcasWrapper = styled(WrapperStyled)`
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    transition: all 2s ease-in-out;
    img {
        height: 55px;
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
        &.tijuca {
            height: 30px;
        }
    }
`