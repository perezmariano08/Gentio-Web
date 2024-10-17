import styled from "styled-components";

export const ButtonWrapper = styled.button`
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
    span {
        padding-left: 8px;
    }
`