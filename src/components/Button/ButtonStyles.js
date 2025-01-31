import styled from "styled-components";

export const ButtonWrapper = styled.button`
    all: unset; /* Elimina todos los estilos por defecto */
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 20px;
    gap: 10px;
    width: fit-content;
    font-weight: 400;
    font-size: 16px;
    background-color: var(--orange-500);
    border: none;
    cursor: pointer;
    color: var(--bg);
    /* font-weight: 400; */
    
    span {
        padding-left: 8px;
        color: var(--bg);
        width: 100%;
    }

    &:hover {
        opacity: .5;
        transition: opacity 0.5s ease;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 4px;
    }
`