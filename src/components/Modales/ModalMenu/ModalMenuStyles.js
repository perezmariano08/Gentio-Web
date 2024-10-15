import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalMenuContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    flex-direction: column;
    gap: 30px;
    z-index: 1001;
    display: flex;
    color: var(--white);
    width: 100%;
    background-color: rgba(10, 3, 17, .7); /* Fondo semi-transparente */
    backdrop-filter: blur(20px); /* Efecto de desenfoque */
    -webkit-backdrop-filter: blur(8px); /* Soporte para Safari */
`

export const ModalMenuHeader = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .icon-close {
        font-size: 30px;
    }
`