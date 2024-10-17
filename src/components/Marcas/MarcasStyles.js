import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const MarcasContainer = styled(ContainerStyled)`
    padding-top: 80px;
    padding-bottom: 40px;
`

export const MarcasWrapper = styled(WrapperStyled)`
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    img {
        height: 55px;

        &.tijuca {
            height: 30px;
        }
    }
`