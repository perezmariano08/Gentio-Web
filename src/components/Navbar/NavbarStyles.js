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