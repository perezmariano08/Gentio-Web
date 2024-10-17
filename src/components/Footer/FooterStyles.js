import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const FooterContainer = styled(ContainerStyled)`
    padding: 120px 0;
`

export const FooterWrapper = styled(WrapperStyled)`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--violet);
    padding: 50px;
    border-radius: 20px;
`
export const FooterTop = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 25px;

    h3 {
        font-size: 50px;
        color: var(--white);
        width: 90%;
        line-height: 50px;

        @media (max-width: 768px) {
            font-size: 30px;
            line-height: 30px;
            width: 100%;
        }
    }

    p {
        font-size: 16px;
        font-weight: 300;
        width: 60%;
        color: var(--gray-300);
        @media (max-width: 768px) {
            font-size: 14px;
            width: 100%;
        }
    }

    & span {
        color: var(--orange-500);
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

    @media (max-width: 768px) {
            flex-direction: column;
            gap: 30px;
        }

    p {
        font-size: 16px;
        color: var(--gray-300);
        @media (max-width: 768px) {
            font-size: 14px;
            
        }
    }
    `

export const FooterLeft = styled.span`
    display: flex;
    flex-direction: column;

    svg {
        width: 200px;

        @media (max-width: 768px) {
            width: 200px;
        }
    }

`
export const FooterRight = styled.span`
    display: flex;
    align-items: end;
    gap: 30px;
`