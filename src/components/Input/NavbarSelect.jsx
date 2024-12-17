import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Estilos minimalistas para el Select
const SelectWrapper = styled.div`
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
`;

const Select = styled.select`
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    color: #f4e5d4;
    appearance: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        border-color: #f4e5d4;
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:focus {
        border-color: #f4e5d4;
        box-shadow: 0 0 5px rgba(244, 229, 212, 0.5);
    }
`;

const Option = styled.option`
    background-color: #333;
    color: #f4e5d4;
    padding: 5px;
`;

const NavbarSelect = () => {
    const [language, setLanguage] = useState('es');
    const [t, i18n] = useTranslation("global")

    const handleChange = (e) => {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    };

    return (
        <SelectWrapper>
            <Select value={language} onChange={handleChange}>
                <Option value="es">ES</Option>
                <Option value="en">EN</Option>
                <Option value="fr">FR</Option>
            </Select>
        </SelectWrapper>
    );
};

export default NavbarSelect;
