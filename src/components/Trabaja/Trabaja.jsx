import React from 'react'
import { TrabajaContainer, TrabajaImagen, TrabajaItems, TrabajaTextContainer, TrabajaWrapper } from './TrabajaStyles'
import Button from '../Button/Button'
import Flecha from '../Logos/Flecha'
import { useTranslation } from 'react-i18next'

const LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSeV2N0Pb7-ZytuAsW5xQC64WRjrJWFxRqBUFcqAFSR8ravoaQ/viewform?usp=header'

const Trabaja = () => {
    const [t] = useTranslation("global");

    return (
        <TrabajaContainer>
            <TrabajaWrapper>
                <TrabajaItems>
                    <TrabajaImagen src='/imgs/gentio-web-2.jpg' alt='Trabaja' />
                    <TrabajaTextContainer>
                        <h3>
                            {t('trabaja.title')
                                .split(/__(.*?)__/)
                                .map((part, index) =>
                                    part === 'empresa' || part === 'pyme' ? (
                                        <span key={index}>{part}</span>
                                    ) : (
                                        <React.Fragment key={index}>{part}</React.Fragment>
                                    )
                                )}
                        </h3>
                        <p>
                            {t('trabaja.description')
                                .split(/__(.*?)__/)
                                .map((part, index) =>
                                    part === 'gratis' ? (
                                        <span key={index}>{part}</span>
                                    ) : (
                                        <React.Fragment key={index}>{part}</React.Fragment>
                                    )
                                )}
                        </p>
                        <Button onClick={() => window.open(LINK, '_blank')}>
                            {t('trabaja.button')}
                            <Flecha />
                        </Button>
                    </TrabajaTextContainer>
                </TrabajaItems>
            </TrabajaWrapper>
        </TrabajaContainer>
    )
}

export default Trabaja