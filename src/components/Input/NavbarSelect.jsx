import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LiaAngleDownSolid } from "react-icons/lia";

// Imágenes de banderas
const flagImages = {
  es: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png",
  en: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  fr: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
};

// Contenedor principal del select
const SelectWrapper = styled.div`
    
    position: relative;
    display: inline-block;
    cursor: pointer;
`;

// Estilo del botón que simula el select actual
const SelectButton = styled.div`
    display: flex;
    gap: 10px;
    background-color: transparent;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #f4e5d4;
    cursor: pointer;
    transition: all 0.3s ease-in-out;


  &:focus {
    border-color: #f4e5d4;
    box-shadow: 0 0 5px rgba(244, 229, 212, 0.5);
  }
`;

// Flecha decorativa
const ArrowIcon = styled(LiaAngleDownSolid)`
  font-size: 18px;
  color: #f4e5d4;
`;

// Lista desplegable
const Dropdown = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    border-radius: 5px;
    list-style: none;
    padding: 0;
    margin: 5px 0 0;
    z-index: 1000;
`;

// Elemento de la lista (opción)
const DropdownItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f4e5d4;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Bandera pequeña
const FlagIcon = styled.img`
  width: 20px;
  height: 15px;
  border-radius: 2px;
`;

const NavbarSelect = () => {
  const [language, setLanguage] = useState("es");
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      {/* Botón principal */}
      <SelectButton onClick={toggleDropdown}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FlagIcon src={flagImages[language]} alt={`${language} flag`} />
          {language.toUpperCase()}
        </div>
        <ArrowIcon />
      </SelectButton>

      {/* Opciones desplegables */}
      {isOpen && (
        <Dropdown>
          {Object.keys(flagImages).map((lang) => (
            <DropdownItem key={lang} onClick={() => handleChange(lang)}>
              <FlagIcon src={flagImages[lang]} alt={`${lang} flag`} />
              {lang.toUpperCase()}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SelectWrapper>
  );
};

export default NavbarSelect;
