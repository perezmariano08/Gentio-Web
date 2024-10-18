import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
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
        // Oculta el modal si el tamaño de la ventana es mayor o igual a 768px (desktop)
        if (window.innerWidth >= 768) {
            setOpenModalMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', changeNav);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModalMenu = () => {
        setOpenModalMenu(!openModalMenu); // Alterna entre abrir y cerrar
    };

    return (
        <MenuContext.Provider value={{ scrollNav, openModalMenu, toggleModalMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
