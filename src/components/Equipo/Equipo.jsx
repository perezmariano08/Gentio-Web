import React, { useEffect, useRef, useState } from 'react'
import { CardEquipo, CardText, EquipoContainer, EquipoWrapper, ServicioContainer, TeamCard, TeamCardImagen, TeamContainer, TitleContainer } from './EquipoStyles'
import { useTranslation } from 'react-i18next';

const Equipo = () => {
    const { t } = useTranslation("global");

    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    const checkVisibility = () => {
        if (textRef.current) {
            const { top, bottom } = textRef.current.getBoundingClientRect();
            const isInViewport = top < window.innerHeight && bottom >= 0; // Comprueba si el elemento está en el viewport
            setIsVisible(isInViewport);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Verifica la visibilidad al cargar el componente

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

  return (
    <EquipoContainer id='staff'>
        <EquipoWrapper>
            <TitleContainer ref={textRef} className={isVisible ? 'visible' : ''}>
                <h2>{t('equipo.titulo.tu')} <span>{t('equipo.titulo.exito')}</span>, {t('equipo.titulo.nuestra')} {t('equipo.titulo.mision')}<span>.</span></h2>
                <p style={{textAlign: 'end'}}>{t('equipo.descripcion')}</p>
            </TitleContainer>
            <TeamContainer>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/sator_agustin.jpg" alt="" srcset="" />
                    </TeamCardImagen>
                    
                    <h5>Agustín Sator</h5>
                    <p>{t('equipo.titulos.comunicacion_h')}</p>
                    <span>{t('equipo.puesto.director')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/piantoni_giuliana.JPG" alt="" srcset="" />
                    </TeamCardImagen>
                    <h5>Giuliana Piantoni</h5>
                    <p>{t('equipo.titulos.comunicacion_m')}</p>
                    <span>{t('equipo.puesto.gentio_BIT')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/cinto_carola.jpeg" alt="" srcset="" />
                    </TeamCardImagen>
                    <h5>Carola Cinto</h5>
                    <p>{t('equipo.titulos.magister_periodismo')} - {t('equipo.titulos.comunicacion_m')}</p>
                    <span>{t('equipo.puesto.operaciones')}</span>

                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/scavuzzo_romina.jpg" alt="" srcset="" />
                    </TeamCardImagen>
                    <h5>Romina Scavuzzo</h5>
                    <p>{t('equipo.titulos.adm_empresas')}</p>
                    <span>{t('equipo.puesto.social_media')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/scavuzzo_gonzalo.jpg" alt="" srcset="" />
                    </TeamCardImagen>
                    <h5>Gonzalo Scavuzzo</h5>
                    <p>{t('equipo.titulos.diseño')}</p>
                    <span>{t('equipo.puesto.diseño')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/vidal_francisco.PNG" alt="" srcset="" />
                    </TeamCardImagen>
                    <h5>Francisco Vidal</h5>
                    <p>{t('equipo.titulos.comunicacion_h')}</p>
                    <span>{t('equipo.puesto.analista_marca')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                    <img src="https://gentiomkt.com/imgs/team/musso_giuliana.jpg" alt="" srcset="" />

                    </TeamCardImagen>
                    <h5>Giuliana Musso</h5>
                    <p>{t('equipo.titulos.comunicacion_m')}</p>
                    <span>{t('equipo.puesto.fotografa')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/schaub_sophia.JPG" alt="" srcset="" />

                    </TeamCardImagen>
                    <h5>Sophia Schaub</h5>
                    <p>{t('equipo.titulos.content_creator')}</p>
                    <span>{t('equipo.puesto.contenido')}</span>

                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/anna_agostina.PNG" alt="" srcset="" />

                    </TeamCardImagen>
                    <h5>Agostina Anna</h5>
                    <p>{t('equipo.titulos.abogada')}</p>
                    <span>{t('equipo.puesto.legal')}</span>
                </TeamCard>
                <TeamCard>
                    <TeamCardImagen>
                        <img src="https://gentiomkt.com/imgs/team/scolaro_agustina.jpg" alt="" srcset="" />
                    </TeamCardImagen>
                    <h5>Agustina Scolaro</h5>
                    <p>{t('equipo.titulos.contadora')}</p>
                    <span>{t('equipo.puesto.sdr')}</span>
                </TeamCard>
            </TeamContainer>            
        </EquipoWrapper>
    </EquipoContainer>
)
}

export default Equipo