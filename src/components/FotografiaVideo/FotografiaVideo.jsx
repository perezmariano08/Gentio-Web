import React from 'react'
import { FotoContenedorColumna, FotografiaVideoContainer, FotografiaVideoWrapper, FotoTitle, FotoVideoContainer, FotoVideoImg, TitleContainer } from './FotografiaVideo'
import SvgIcon from '../SvgIcon/SvgIcon'

const FotografiaVideo = () => {
  return (
    <FotografiaVideoContainer>
        <FotografiaVideoWrapper>
            <TitleContainer>
                <h2>LA <span>CALIDAD</span> NO SE NEGOCIA<span>.</span></h2>
                <p>Libere el potencial de su marca con nuestra probada experiencia en marketing. Desde la estrategia hasta la ejecución, impulsamos el crecimiento.</p>
            </TitleContainer>
            <FotoVideoContainer>
              <FotoContenedorColumna className='first-row'>
                <SvgIcon/>
                <FotoVideoImg/>
                <FotoTitle>Fotografia y Video</FotoTitle>
                <FotoVideoImg/>
              </FotoContenedorColumna>
              <FotoContenedorColumna className='two-row'>
                <FotoVideoImg/>
              </FotoContenedorColumna>
              <FotoContenedorColumna className='three-row'>
                <FotoVideoImg/>
                <FotoVideoImg/>
              </FotoContenedorColumna>
            </FotoVideoContainer>
        </FotografiaVideoWrapper>
    </FotografiaVideoContainer>
  )
}

export default FotografiaVideo