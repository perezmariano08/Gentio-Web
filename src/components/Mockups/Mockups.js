import styled from "styled-components";

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const WrapperStyled = styled.div`
    display: flex;
    width: 100%;
    max-width: 1260px;
    padding: 0 30px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`