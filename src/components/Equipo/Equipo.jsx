import React, { useEffect, useRef, useState } from 'react';
import {
    EquipoContainer,
    EquipoWrapper,
    TitleContainer,
    TeamContainer,
    TeamCard,
    TeamCardImagen,
    TeamCardTitlesContainer,
} from './EquipoStyles';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const Equipo = () => {
    const { t } = useTranslation('global');
    const [visibleRows, setVisibleRows] = useState([]);
    const containerRef = useRef(null);

    // Actualizado para tener linkedin e instagram como claves separadas
    const teamMembers = [
        { name: 'Agustín Sator', title: t('equipo.titulos.comunicacion_h'), role: t('equipo.puesto.director'), img: 'sator_agustin.jpg', linkedin: 'https://www.linkedin.com/in/agustinsator/' },
        { name: 'Giuliana Piantoni', title: t('equipo.titulos.comunicacion_m'), role: t('equipo.puesto.gentio_BIT'), img: 'piantoni_giuliana.JPG', linkedin: 'https://www.linkedin.com/in/giuliana-piantoni/' },
        { name: 'Carola Cinto', title: [t('equipo.titulos.magister_periodismo'), t('equipo.titulos.relaciones')], role: t('equipo.puesto.operaciones'), img: 'cinto_carola.jpg', linkedin: 'https://www.linkedin.com/in/carola-cinto/' },
        { name: 'Sophia Schaub', title: t('equipo.titulos.content_creator'), role: t('equipo.puesto.contenido'), img: 'schaub_sophia.JPG', instagram: 'https://www.instagram.com/sophi.schaub/' },
        { name: 'Joaquín Pozzo', title: [t('equipo.titulos.sistemas'), t('equipo.titulos.diseño')], role: t('equipo.puesto.desarrollo'), img: 'joaquin_pozzo.jpg', linkedin: 'https://www.linkedin.com/in/joaquin-pozzo-49b31a262/' },
        { name: 'Inés Accastello', title: t('equipo.titulos.diseñadora'), role: t('equipo.puesto.diseñadora'), img: 'ines_accastello.jpg', instagram: 'https://www.instagram.com/ineaccastello/' },
        { name: 'Romina Scavuzzo', title: t('equipo.titulos.adm_empresas'), role: t('equipo.puesto.social_media'), img: 'scavuzzo_romina.jpg', linkedin: 'https://www.linkedin.com/in/rominascavuzzo/' },
        { name: 'Francisco Vidal', title: t('equipo.titulos.comunicacion_h'), role: t('equipo.puesto.analista_marca'), img: 'vidal_francisco.jpg', linkedin: 'https://www.linkedin.com/in/francisco-vidal-9ab42b200/' },
        { name: 'Agostina Anna', title: t('equipo.titulos.abogada'), role: t('equipo.puesto.legal'), img: 'anna_agostina.jpg', linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-agostina-anna-/' },
        { name: 'Agustina Scolaro', title: t('equipo.titulos.contadora'), role: t('equipo.puesto.sdr'), img: 'scolaro_agustina.jpg'},
        { name: 'Gonzalo Scavuzzo', title: t('equipo.titulos.diseño'), role: t('equipo.puesto.diseño'), img: 'scavuzzo_gonzalo.jpg', linkedin: 'https://www.linkedin.com/in/gonzalo-scavuzzo-9762a0217/' },
        { name: 'Giuliana Musso', title: t('equipo.titulos.comunicacion_m'), role: t('equipo.puesto.fotografa'), img: 'musso_giuliana.jpg', instagram: 'https://www.instagram.com/giuli.musso/' },
        { name: 'Matías Conterno', title: t('equipo.titulos.filmmaker'), role: t('equipo.puesto.filmmaker'), img: 'matias_conterno.jpg', instagram: 'https://www.instagram.com/maticonterno/' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rows = Array.from(containerRef.current.children);
                rows.forEach((row, index) => {
                    const { top, bottom } = row.getBoundingClientRect();
                    const isInViewport = top < window.innerHeight && bottom >= 0;

                    if (isInViewport && !visibleRows.includes(index)) {
                        setVisibleRows((prev) => [...prev, index]);
                    }

                    if (!isInViewport && visibleRows.includes(index)) {
                        setVisibleRows((prev) => prev.filter((i) => i !== index));
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleRows]);

    return (
        <EquipoContainer id="staff">
            <EquipoWrapper>
                <TitleContainer className={visibleRows.length > 0 ? 'visible' : ''}>
                    <h2>
                        {t('equipo.titulo.tu')} <span>{t('equipo.titulo.exito')}</span>, {t('equipo.titulo.nuestra')}{' '}
                        {t('equipo.titulo.mision')}
                        <span>.</span>
                    </h2>
                    <p style={{ textAlign: 'end' }}>{t('equipo.descripcion')}</p>
                </TitleContainer>
                <TeamContainer ref={containerRef}>
                    {teamMembers.map(({ name, title, role, img, linkedin, instagram }, index) => (
                        <div
                            key={index}
                            className={visibleRows.includes(index) ? 'visible' : 'hidden'}
                            style={{
                                opacity: visibleRows.includes(index) ? 1 : 0,
                                transition: `opacity 1s ease`,
                            }}
                        >
                            <TeamCard>
                                <TeamCardImagen>
                                    <img src={`https://gentiomkt.com/imgs/team/${img}`} alt={name} />
                                </TeamCardImagen>
                                <h5>{name}</h5>
                                <TeamCardTitlesContainer>
                                    {Array.isArray(title)
                                        ? title.map((t, i) => <p key={i}>{t}</p>)
                                        : <p>{title}</p>}
                                </TeamCardTitlesContainer>
                                <span>{role}</span>
                                <div>
                                    {linkedin && (
                                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {instagram && (
                                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram />
                                        </a>
                                    )}
                                </div>
                            </TeamCard>
                        </div>
                    ))}
                </TeamContainer>
            </EquipoWrapper>
        </EquipoContainer>
    );
};

export default Equipo;
