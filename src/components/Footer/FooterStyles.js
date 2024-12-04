import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { floating } from "../../styles/GlobalStyles";

export const FooterContainer = styled(ContainerStyled)`
`

export const FooterWrapper = styled(WrapperStyled)`
    padding-bottom: 80px;
`

export const FooterWrapperText = styled.footer`
    z-index: 3;
    display: flex;
    flex-direction: column;
    background-color: var(--violet);
    border-radius: 20px;
    padding: 0 80px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`
export const FooterTop = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 40px 0;

    h3 {
        animation: ${floating} 2s ease-in-out infinite; // Aplica la animación
        font-size: 50px;
        color: var(--white);
        line-height: 50px;
        text-transform: uppercase;
        
        @media (max-width: 768px) {
            font-size: 30px;
            line-height: 30px;
            width: 100%;
            
        }
    }

    p {
        font-size: 16px;
        width: 40%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    & span {
        color: var(--orange-500);
    }

    @media (max-width: 768px) {
        padding: 50px 0;
    }
`

export const Divider = styled.span`
    width: 100%;
    height: 1px;
    background-color: var(--gray-300);
    opacity: .5;
`

export const SocialContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 50px 0;
    align-items: end;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }   
`

export const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    
    svg {
        width: 20%;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`
export const SocialMediaContainer = styled.a`
    display: flex;
    align-items: center;
    a {
        color: var(--white);
        opacity: .5;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 5px;
        transition: opacity 0.2s ease-in-out;
    }

    :hover {
        opacity: 1;
    }
`;

export const FooterRight = styled.span`
    display: flex;
    justify-content: end;
    gap: 30px;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: space-between;
    }   
`