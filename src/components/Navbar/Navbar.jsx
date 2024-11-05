import React, { useEffect, useState } from 'react'
import { NavbarContainer, NavbarItem, NavbarList, NavbarWrapper, SvgLogo } from './NavbarStyles'
import { RiMenu3Fill } from "react-icons/ri";
import ModalMenu from '../Modales/ModalMenu/ModalMenu';
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false);
    const [openModalMenu, setOpenModalMenu] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 1) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    const handleResize = () => {
        // Oculta el modal si el tamaño de la ventana es mayor o igual a 1024px (desktop)
        if (window.innerWidth >= 768) {
            setOpenModalMenu(false);
        }
    };

    // Definir la animación
    const logoVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                type: 'tween', 
                duration: 1, 
                ease: 'easeInOut' 
            } 
        },
    };

    const navVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                type: 'tween', 
                duration: 1, 
                ease: 'easeInOut' 
            } 
        },
    };
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        window.addEventListener('resize', handleResize);
        
        // Limpieza de eventos al desmontar el componente
        return () => {
            window.removeEventListener('scroll', changeNav);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Función para manejar el click en el ícono del menú
    const toggleModalMenu = () => {
        setOpenModalMenu(!openModalMenu);  // Alterna entre abrir y cerrar
    };

    return (
        <>
        <NavbarContainer className={scrollNav ? 'scrolled' : ''}>
            <NavbarWrapper>
                {/* <img src={logoGentio} alt="" /> */}
                <SvgLogo 
                initial="hidden"
                animate="visible"
                variants={logoVariants}
                height="50%" viewBox="0 0 343 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.07 91.81C33.19 88.46 28.55 83.89 25.13 78.08C21.71 72.28 20 65.81 20 58.69C20 51.57 21.71 45.1 25.13 39.3C28.55 33.5 33.2 28.92 39.07 25.57C44.95 22.22 51.52 20.55 58.78 20.55C64.55 20.55 69.96 21.64 75.02 23.81C80.08 25.98 84.35 29.01 87.84 32.89C91.33 36.77 93.75 41.21 95.11 46.19H82.29C80.29 41.77 77.2 38.25 72.99 35.61C68.79 32.98 64.05 31.66 58.78 31.66C53.51 31.66 49.14 32.85 45.05 35.24C40.95 37.63 37.75 40.87 35.43 44.96C33.11 49.06 31.96 53.63 31.96 58.69C31.96 63.75 33.12 68.32 35.43 72.42C37.74 76.52 40.95 79.76 45.05 82.14C49.15 84.53 53.72 85.72 58.78 85.72C63.48 85.72 67.77 84.69 71.66 82.62C75.54 80.56 78.69 77.72 81.12 74.13C83.54 70.53 84.89 66.49 85.18 62L87.1 65.95H59.96V55.48H96.93V95.55H86.78V75.67L89.66 76.95C88.16 81.08 85.99 84.64 83.14 87.64C80.29 90.63 76.8 92.91 72.67 94.48C68.54 96.05 63.91 96.83 58.78 96.83C51.51 96.83 44.94 95.16 39.07 91.81Z" fill="#F4E5D4" />
                    <path d="M113.33 93.09C108.88 90.6 105.39 87.18 102.86 82.83C100.33 78.49 99.0701 73.64 99.0701 68.3C99.0701 62.96 100.33 58.11 102.86 53.77C105.39 49.43 108.88 46.01 113.33 43.51C117.78 41.02 122.71 39.77 128.13 39.77C133.55 39.77 138.58 41.02 143.04 43.51C147.49 46 150.98 49.42 153.51 53.77C156.04 58.12 157.3 62.96 157.3 68.3C157.3 70.08 157.19 71.58 156.98 72.79H108.68V63.17H148.32L146.08 68.3V67.44C146.01 64.09 145.19 61.07 143.62 58.36C142.05 55.65 139.92 53.53 137.21 52C134.5 50.47 131.51 49.7 128.23 49.7C124.95 49.7 121.75 50.5 119.04 52.1C116.33 53.7 114.19 55.93 112.63 58.78C111.06 61.63 110.28 64.8 110.28 68.29C110.28 71.78 111.06 74.95 112.63 77.8C114.2 80.65 116.35 82.88 119.09 84.48C121.83 86.08 124.88 86.88 128.23 86.88C131.86 86.88 135.1 86.12 137.95 84.58C140.8 83.05 142.9 80.96 144.25 78.33H156.22C154.15 83.89 150.63 88.36 145.64 91.74C140.65 95.12 134.81 96.82 128.12 96.82C122.71 96.82 117.77 95.57 113.32 93.08L113.33 93.09Z" fill="#F4E5D4" />
                    <path d="M160.29 41.05H171.19V95.55H160.29V41.05ZM196.94 54.36C194.3 51.69 190.81 50.35 186.47 50.35C183.41 50.35 180.72 50.96 178.4 52.17C176.08 53.38 174.3 55.11 173.06 57.35C171.81 59.59 171.19 62.21 171.19 65.2L166.17 62.96C166.74 58.19 168.08 54.06 170.18 50.56C172.28 47.07 175.02 44.4 178.41 42.55C181.79 40.7 185.66 39.77 190 39.77C194.34 39.77 198.07 40.66 201.38 42.44C204.69 44.22 207.26 46.77 209.07 50.08C210.88 53.39 211.79 57.19 211.79 61.46V95.55H200.89V64.99C200.89 60.57 199.57 57.03 196.94 54.36Z" fill="#F4E5D4" />
                    <path d="M211.26 41.05H247.16V50.99H211.26V41.05ZM221.63 25.03H232.53V90.74L227.61 85.61H247.16V95.55H221.62V25.03H221.63Z" fill="#F4E5D4" />
                    <path d="M260.2 20H274.09L260.73 34.32H249.19L260.19 20H260.2ZM250.26 41.05H261.16V95.55H250.26V41.05Z" fill="#F4E5D4" />
                    <path d="M278.74 93.09C274.29 90.6 270.8 87.18 268.27 82.83C265.74 78.49 264.48 73.64 264.48 68.3C264.48 62.96 265.74 58.11 268.27 53.77C270.8 49.43 274.29 46.01 278.74 43.51C283.19 41.02 288.12 39.77 293.54 39.77C298.96 39.77 303.99 41.02 308.45 43.51C312.9 46 316.39 49.42 318.92 53.77C321.45 58.12 322.71 62.96 322.71 68.3C322.71 73.64 321.44 78.49 318.92 82.83C316.39 87.18 312.9 90.6 308.45 93.09C304 95.58 299.03 96.83 293.54 96.83C288.05 96.83 283.19 95.58 278.74 93.09ZM302.67 83.9C305.41 82.33 307.57 80.18 309.13 77.44C310.7 74.7 311.48 71.65 311.48 68.3C311.48 64.95 310.69 61.91 309.13 59.16C307.56 56.42 305.42 54.26 302.72 52.7C300.01 51.13 296.95 50.35 293.53 50.35C290.11 50.35 287.15 51.13 284.45 52.7C281.74 54.27 279.61 56.42 278.04 59.16C276.47 61.9 275.69 64.95 275.69 68.3C275.69 71.65 276.47 74.69 278.04 77.44C279.61 80.18 281.74 82.34 284.45 83.9C287.16 85.47 290.18 86.25 293.53 86.25C296.88 86.25 299.92 85.47 302.67 83.9Z" fill="#F4E5D4" />
                </SvgLogo>
                <NavbarList
                    initial="hidden"
                    animate="visible"
                    variants={navVariants}
                >
                    <NavbarItem><a href="#nosotros">nosotros</a></NavbarItem>
                    <NavbarItem><a href="#servicios">servicios</a></NavbarItem>
                    {/* <NavbarItem><a href="#staff">staff</a></NavbarItem> */}
                    <NavbarItem><a href="#footer">contacto</a></NavbarItem>
                </NavbarList>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={navVariants}
                    className='icon-menu'
                    onClick={toggleModalMenu}
                >
                    <RiMenu3Fill />
                </motion.div>

                
            </NavbarWrapper>
        </NavbarContainer>
        {/* Modal Menu, se muestra solo si openModalMenu es true */}
        {openModalMenu && <ModalMenu closeModal={toggleModalMenu} isOpen={openModalMenu} />}        
        </>
    )
}

export default Navbar