import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const MarcasSliderContainer = styled(ContainerStyled)`
    height: 600px;
    background-image: ${({ bgUrl }) => `url(${bgUrl})`}; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--bg);
        opacity: .8;
    }
`

export const MarcasSliderWrapper = styled(WrapperStyled)`
    z-index: 3;
    justify-content: center;
`

export const MarcasSliderText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 100%;

    .p-carousel-content {
        flex-direction: column;
        gap: 60px;
    }

    .p-carousel-container {
        display: flex;
        gap: 50px;

        @media (max-width: 768px) {
            gap: 20px
        }
    }

    .p-carousel-indicators {
        gap: 10px;

        .p-carousel-indicator {
            border-radius:20px;
            overflow: hidden;
            
            button {
                background-color: var(--white);
                height: 5px;
                width: 45px;
            }

            &.p-highlight {
                button {
                    background-color: var(--orange-500);
                }
            }
        }
    }

    .p-carousel-prev, .p-carousel-next {
        color: var(--white);

        &:hover {
            color: var(--bg)
        }
    }
`

export const MarcasSliderTitulo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 10px;
    
    h2 {
        text-transform: uppercase;
        font-weight: 500;
    }

    p {
        color: var(--white);
        span {
            color: var(--orange-500);
            font-weight: 500;
        }
    }
`

export const MarcasSliderBackground = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: ${({ bkUrl }) => `url(${bkUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
`;

export const MarcasSliderDescripcion = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;

    img {
        width: 200px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const MarcasSliderNavegadorWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`

export const MarcasSliderNavegadorItem = styled.div`
    background-color: var(--white);
    height: 5px;
    width: 45px;
    border-radius: 20px;
    &.active {
        background-color: var(--orange-500);
    }
`