import React from 'react'
import { TrabajaContainer, TrabajaImagen, TrabajaItems, TrabajaTextContainer, TrabajaWrapper } from './TrabajaStyles'
import Button from '../Button/Button'
import Flecha from '../Logos/Flecha'

const LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSeV2N0Pb7-ZytuAsW5xQC64WRjrJWFxRqBUFcqAFSR8ravoaQ/viewform?usp=header'

const Trabaja = () => {
  return (
    <TrabajaContainer>
        <TrabajaWrapper>
                <TrabajaItems>
                    <TrabajaImagen src='/imgs/gentio-web-2.jpg' alt='Trabaja' />
                    <TrabajaTextContainer>
                        <h3>Tenes una <span>empresa</span> o una <span>pyme?</span></h3>
                        <p>Solicita un informe de marca <span>gratis</span></p>
                        <Button onClick={() => window.open(LINK, '_blank')}>
                            <span className='button'>Quiero un informe</span>
                            <Flecha />
                        </Button>
                    </TrabajaTextContainer>
                </TrabajaItems>
        </TrabajaWrapper>
    </TrabajaContainer>
  )
}

export default Trabaja