import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const TrabajoContainer = styled(ContainerStyled)``;

export const TrabajoWrapper = styled(WrapperStyled)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const TrabajosContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: var(--blue);
    border-radius: 20px;
    align-items: center;
    justify-content: center;

    h2 {
        font-weight: 500;
        color: var(--white);
        text-transform: uppercase;
        font-size: 35px;
        word-wrap: break-word;
        margin: 0 15px;
    }

    p {
        font-weight: 400;
        color: var(--white);
        text-transform: uppercase;
        font-size: 28px;
        word-wrap: break-word;
        margin: 0 15px;
    }

    /* Responsive: Adjust font sizes for smaller screens */
    @media (max-width: 768px) {
        h2 {
            font-size: 30px;
        }

        p {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 23px;
            width: 100%;
        }

        p {
            font-size: 14px;
            width: 100%;
        }
    }

`;