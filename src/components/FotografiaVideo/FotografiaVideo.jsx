import React, { useEffect, useRef, useState } from 'react'
import { FotoContenedorColumna, FotografiaVideoContainer, FotografiaVideoWrapper, FotoTitle, FotoVideoContainer, FotoVideoImg, TitleContainer, Video } from './FotografiaVideo'
import SvgIcon from '../SvgIcon/SvgIcon'
import bgHero from '/videos/bg_fotovideo_8.mp4';
import bgHero2 from '/videos/bg_fotovideo_2.mp4';
import bgHero3 from '/videos/bg_fotovideo_7.mp4';
import bgHero4 from '/videos/bg_fotovideo_4.mp4';

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
                <p>Impulsá tu marca con una calidad inigualable. Desde la estrategia hasta la ejecución, ponemos nuestra experiencia en marketing y comunicación al servicio de tu crecimiento, asegurando resultados de primer nivel.</p>
            </TitleContainer>
            <FotoVideoContainer>
              <FotoContenedorColumna className='first-row'>
                <SvgIcon/>
                <FotoVideoImg
                bgUrl={'/imgs/bk_foto_1.jpg'}
                />
                <FotoTitle>Fotografia y Video</FotoTitle>
                <Video className='video-luco-hamburgesa'>
                    <video src={bgHero3} autoPlay muted loop playsInline />
                </Video>
                <Video className='video-luco-gral'>
                    <video src={bgHero4} autoPlay muted loop playsInline />
                </Video>
              </FotoContenedorColumna>
              <FotoContenedorColumna className='two-row'>
                <Video className='video-zc'>
                  <video src={bgHero} autoPlay muted loop playsInline />
                </Video>
              </FotoContenedorColumna>
              <FotoContenedorColumna className='three-row'>
                <Video>
                  <video src={bgHero2} autoPlay muted loop playsInline />
                </Video>
                <FotoVideoImg
                bgUrl={'/imgs/bk_foto_2.jpg'}
                />
              </FotoContenedorColumna>
            </FotoVideoContainer>
        </FotografiaVideoWrapper>
    </FotografiaVideoContainer>
  )
}

export default FotografiaVideo