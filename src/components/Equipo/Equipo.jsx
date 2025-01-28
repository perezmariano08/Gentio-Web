import React, { useEffect, useRef, useState } from 'react'
import { CardEquipo, CardText, EquipoContainer, EquipoWrapper, ServicioContainer, TeamCard, TeamCardImagen, TeamCardTitlesContainer, TeamContainer, TitleContainer } from './EquipoStyles'
import { useTranslation } from 'react-i18next';

const Equipo = () => {
    const { t } = useTranslation("global");

    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    const checkVisibility = () => {
        if (textRef.current) {
            const { top, bottom } = textRef.current.getBoundingClientRect();
            const isInViewport = top < window.innerHeight && bottom >= 0;
            setIsVisible(isInViewport);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility();

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <EquipoContainer id='staff'>
            <EquipoWrapper>
                <TitleContainer ref={textRef} className={isVisible ? 'visible' : ''}>
                    <h2>{t('equipo.titulo.tu')} <span>{t('equipo.titulo.exito')}</span>, {t('equipo.titulo.nuestra')} {t('equipo.titulo.mision')}<span>.</span></h2>
                    <p style={{ textAlign: 'end' }}>{t('equipo.descripcion')}</p>
                </TitleContainer>
                <TeamContainer>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/sator_agustin.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Agustín Sator</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.comunicacion_h')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.director')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/piantoni_giuliana.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Giuliana Piantoni</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.comunicacion_m')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.gentio_BIT')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/cinto_carola.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Carola Cinto</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.magister_periodismo')}</p>
                            <p>{t('equipo.titulos.comunicacion_m')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.operaciones')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/scavuzzo_romina.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Romina Scavuzzo</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.adm_empresas')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.social_media')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/scavuzzo_gonzalo.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Gonzalo Scavuzzo</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.diseño')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.diseño')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/vidal_francisco.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Francisco Vidal</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.comunicacion_h')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.analista_marca')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/musso_giuliana.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Giuliana Musso</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.comunicacion_m')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.fotografa')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/schaub_sophia.JPG" alt="" />
                        </TeamCardImagen>
                        <h5>Sophia Schaub</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.content_creator')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.contenido')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/anna_agostina.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Agostina Anna</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.abogada')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.legal')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/scolaro_agustina.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Agustina Scolaro</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.contadora')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.sdr')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/joaquin_pozzo.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Joaquín Pozzo</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.sistemas')}</p>
                            <p>{t('equipo.titulos.diseño')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.desarrollo')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/ines_accastello.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Inés Accastello</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.diseñadora')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.diseñadora')}</span>
                    </TeamCard>
                    <TeamCard>
                        <TeamCardImagen>
                            <img src="https://gentiomkt.com/imgs/team/matias_conterno.jpg" alt="" />
                        </TeamCardImagen>
                        <h5>Matías Conterno</h5>
                        <TeamCardTitlesContainer>
                            <p>{t('equipo.titulos.filmmaker')}</p>
                        </TeamCardTitlesContainer>
                        <span>{t('equipo.puesto.filmmaker')}</span>
                    </TeamCard>
                </TeamContainer>
            </EquipoWrapper>
        </EquipoContainer>
    )
}

export default Equipo