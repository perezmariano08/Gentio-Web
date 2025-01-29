import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const TrabajaContainer = styled(ContainerStyled)``;

export const TrabajaWrapper = styled(WrapperStyled)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const TrabajaItems = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--white);
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    /* Responsive: Reduce height for smaller screens */
    @media (max-width: 768px) {
        height: 200px;
    }

    @media (max-width: 480px) {
        height: 150px;
    }
`;

export const TrabajaImagen = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;

export const TrabajaTextContainer = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    text-align: center;

    h3 {
        font-weight: 500;
        color: var(--white);
        text-transform: uppercase;
        font-size: 40px;
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

    span {
        color: var(--orange-500);
        font-weight: 700;

        &.button {
            color: var(--bg);
            font-weight: 400;
        }
    }

    /* Responsive: Adjust font sizes for smaller screens */
    @media (max-width: 768px) {
        gap: 10px;
        h3 {
            font-size: 30px;
        }

        p {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        gap: 10px;
        h3 {
            font-size: 23px;
            width: 100%;
        }

        p {
            font-size: 14px;
            width: 100%;
        }
    }
`;
