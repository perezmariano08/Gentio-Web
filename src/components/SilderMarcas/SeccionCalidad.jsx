import { useTranslation } from 'react-i18next';
import { SeccionCalidadContainer, VideoBackground, Overlay, ContenidoContainer, Titulo, Descripcion } from './SliderMarcas';

const SeccionCalidad = () => {
    const [t] = useTranslation("global");

    return (
        <SeccionCalidadContainer>
            {/* Video de fondo */}
            <VideoBackground
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/zc.mp4" type="video/mp4" />
                {t('calidad.video_fallback')}
            </VideoBackground>

            {/* Capa de overlay */}
            <Overlay />

            {/* Contenido principal */}
            <ContenidoContainer>
                <Titulo>
                    {t('calidad.titulo').split('__')[0]}
                    <span>{t('calidad.titulo').split('__')[1]}</span>
                    {t('calidad.titulo').split('__')[2]}
                </Titulo>

                <Descripcion>
                    <p>
                        {t('calidad.parrafo1').split('__')[0]}
                        <span className="texto-destacado">{t('calidad.parrafo1').split('__')[1]}</span>
                        {t('calidad.parrafo1').split('__')[2]}
                    </p>

                    <p>
                        {t('calidad.parrafo2')}
                    </p>

                    <p>
                        {t('calidad.parrafo3').split('__')[0]}
                        <span className="texto-destacado">{t('calidad.parrafo3').split('__')[1]}</span>
                        {t('calidad.parrafo3').split('__')[2]}
                    </p>
                </Descripcion>
            </ContenidoContainer>
        </SeccionCalidadContainer>
    );
};

export default SeccionCalidad;