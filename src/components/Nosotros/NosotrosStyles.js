import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const NosotrosContainer = styled(ContainerStyled)`
    
`

export const NosotrosWrapper = styled(WrapperStyled)`
    
`

export const NosotrosText = styled(WrapperStyled)`
    background-color: var(--blue);
    border-radius: 20px;
    flex-direction: column;
    gap: 20px;
    padding: 35px 30px;
    overflow: hidden;
    position: relative;
    
    svg {
        position: absolute;
        top: 60px;
        right: -20px;
        height: 200px;
        @media (max-width: 968px) {
            display: none;
        }
    }

    h3 {
        text-transform: uppercase;
    }

    p {
        color: #898178;
        width: 70%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 30px 25px;
    }
`