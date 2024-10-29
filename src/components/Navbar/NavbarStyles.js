import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { motion } from "framer-motion";

export const NavbarContainer = styled(ContainerStyled)`
    height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    transition: background-color 0.3s ease, height 0.3s ease, backdrop-filter 0.3s ease;

    &.scrolled {
        background-color: rgba(10, 3, 17, 0.5); /* Fondo semi-transparente */
        backdrop-filter: blur(10px); /* Efecto de desenfoque */
        -webkit-backdrop-filter: blur(8px); /* Soporte para Safari */
        height: 60px;
    }
`;

export const NavbarWrapper = styled(WrapperStyled)`
    height: 100%;
    align-items: center;
    justify-content: space-between;
    img {
        height: 50%;
    }

    .icon-menu {
        display: none;
        cursor: pointer;
        @media (max-width: 768px) {
            display: block;
            font-size: 25px;
        }
    }
`

export const NavbarList = styled(motion.ul)`
    display: flex;
    gap: 30px;
    li a {
        color: antiquewhite;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const SvgLogo = styled(motion.svg)`

`

export const NavbarItem = styled.li`
    position: relative;
    cursor: pointer;
    transition: color 0.4s ease, transform 0.4s ease;
    font-weight: 500; /* Peso de fuente más ligero para un look más elegante */
    font-size: 1.1rem; /* Tamaño de fuente ajustado para mejor legibilidad */
    color: #333; /* Color base más suave */

    /* Sombra suave en el texto */
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    &:hover {
        color: #3498db; /* Cambia a tu color deseado */
        transform: translateY(-2px); /* Eleva ligeramente el elemento */
        transition: transform 0.4s ease; /* Suaviza la elevación */
    }

    &:hover::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px; /* Grosor de la línea más delgada */
        background: var(--orange-500); /* Color de la línea */
        bottom: -5px; /* Posiciona la línea debajo del texto */
        left: 0;
        opacity: 0; /* Comienza invisible */
        transition: opacity 0.3s ease, transform 0.3s ease; /* Suaviza la transición */
        transform: translateY(10px); /* Se desplaza hacia arriba al aparecer */
    }

    &:hover::after {
        opacity: 1; /* Vuelve visible al hacer hover */
        transform: translateY(0); /* Desplazamiento suave */
    }
`;