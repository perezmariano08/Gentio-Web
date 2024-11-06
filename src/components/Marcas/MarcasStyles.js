import styled from 'styled-components';
import { ContainerStyled, WrapperStyled } from '../Mockups/Mockups';

// Definición de la animación de scroll infinito
const slider = `
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`;

export const MarcasContainer = styled(ContainerStyled)`
    padding-top: 80px;
    padding-bottom: 40px;
    overflow: hidden;
`;

export const MarcasWrapper = styled(WrapperStyled)`
    justify-content: center;
    align-items: center;
    gap: 30px;
    min-width: 180%;
    animation: scroll 40s linear infinite;

    @media (max-width: 768px) {
        gap: 10px;
        min-width: 200%;

        svg, img {
        width: 150px;
        }
    }

    /* Inserta la animación en el archivo de estilos */
    ${slider}

    svg, img {
        width: 130px;
    }
`;
