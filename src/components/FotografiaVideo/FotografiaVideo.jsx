import React, { useEffect, useRef, useState } from 'react'
import { FotoContenedorColumna, FotografiaVideoContainer, FotografiaVideoWrapper, FotoTitle, FotoVideoContainer, FotoVideoImg, TitleContainer, Video } from './FotografiaVideo'
import SvgIcon from '../SvgIcon/SvgIcon'
import bgHero from '/videos/bg_fotovideo_3.mp4';
import bgHero2 from '/videos/bg_fotovideo_2.mp4';
import bgHero3 from '/videos/bg_fotovideo_4.mp4';

const FotografiaVideo = () => {

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
    <FotografiaVideoContainer>
        <FotografiaVideoWrapper>
            <TitleContainer ref={textRef} className={isVisible ? 'visible' : ''}>
                <h2>LA <span>CALIDAD</span> NO SE NEGOCIA<span>.</span></h2>
                <p>Libere el potencial de su marca con nuestra probada experiencia en marketing. Desde la estrategia hasta la ejecución, impulsamos el crecimiento.</p>
            </TitleContainer>
            <FotoVideoContainer>
              <FotoContenedorColumna className='first-row'>
                <SvgIcon/>
                <FotoVideoImg/>
                <FotoTitle>Fotografia y Video</FotoTitle>
                <Video>
                  <video src={bgHero3} autoPlay muted loop playsInline />
                </Video>
              </FotoContenedorColumna>
              <FotoContenedorColumna className='two-row'>
                <Video>
                  <video src={bgHero} autoPlay muted loop playsInline />
                </Video>
              </FotoContenedorColumna>
              <FotoContenedorColumna className='three-row'>
                <Video>
                  <video src={bgHero2} autoPlay muted loop playsInline />
                </Video>
                <FotoVideoImg/>
              </FotoContenedorColumna>
            </FotoVideoContainer>
        </FotografiaVideoWrapper>
    </FotografiaVideoContainer>
  )
}

export default FotografiaVideo