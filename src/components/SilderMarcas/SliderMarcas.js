import styled from "styled-components";

export const MarcasSliderTitulo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 10px;
    z-index: 2;

    h2 {
        text-transform: uppercase;
        font-weight: 500;
        color: var(--white);
    }

    p {
        color: var(--white);
        span {
            color: var(--orange-500);
            font-weight: 500;
        }
    }
`

export const MarcasSliderDescripcion = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;

    p {
        text-align: start;
    }

    img {
        width: 200px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    
`