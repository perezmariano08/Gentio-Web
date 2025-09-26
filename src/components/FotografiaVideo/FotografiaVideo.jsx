import React, { useEffect, useRef, useState } from 'react'
import { FotoContenedorColumna, FotografiaVideoContainer, FotografiaVideoWrapper, FotoTitle, FotoVideoContainer, FotoVideoImg, TitleContainer, Video } from './FotografiaVideo'
import SvgIcon from '../SvgIcon/SvgIcon'
// Importamos los 3 videos reel del 1 al 3
import reelVideo1 from '/videos/1.mp4';
import reelVideo2 from '/videos/2.mp4';
import reelVideo3 from '/videos/3.mp4';
import { useTranslation } from 'react-i18next';

const FotografiaVideo = () => {

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

  const [t] = useTranslation("global")

  return (
    <FotografiaVideoContainer>
        <FotografiaVideoWrapper>
            <TitleContainer ref={textRef} className={isVisible ? 'visible' : ''}>
                <h2>
                    {t('fotografia-video.titulo')
                        .split(/__(.*?)__/)
                        .map((part, index) =>
                            part ? (
                                <React.Fragment key={index}>
                                    {index % 2 === 1 ? <span>{part}</span> : part}
                                </React.Fragment>
                            ) : null
                        )}
                </h2>
                <p>{t('fotografia-video.descripcion')}</p>
            </TitleContainer>
            
            <FotoVideoContainer>
              {/* Primera columna - Reel 1 */}
              <FotoContenedorColumna className='reel-column'>
                <Video className='video-reel'>
                    <video src={reelVideo1} autoPlay muted loop playsInline />
                    {/* <FotoTitle>Reel 1</FotoTitle> */}
                </Video>
              </FotoContenedorColumna>
              
              {/* Segunda columna - Reel 2 */}
              <FotoContenedorColumna className='reel-column'>
                <Video className='video-reel'>
                    <video src={reelVideo2} autoPlay muted loop playsInline />
                    {/* <FotoTitle>Reel 2</FotoTitle> */}
                </Video>
              </FotoContenedorColumna>
              
              {/* Tercera columna - Reel 3 */}
              <FotoContenedorColumna className='reel-column'>
                <Video className='video-reel'>
                    <video src={reelVideo3} autoPlay muted loop playsInline />
                    {/* <FotoTitle>Reel 3</FotoTitle> */}
                </Video>
              </FotoContenedorColumna>
            </FotoVideoContainer>
        </FotografiaVideoWrapper>
    </FotografiaVideoContainer>
  )
}

export default FotografiaVideo