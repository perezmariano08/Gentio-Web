import React from 'react';
import { TrabajaContainer, TrabajaVideo, TrabajaItems, TrabajaTextContainer, TrabajaWrapper, ButtonContainer } from './TrabajaStyles';
import Button from '../Button/Button';
import Flecha from '../Logos/Flecha';
import { useTranslation } from 'react-i18next';

const LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSeV2N0Pb7-ZytuAsW5xQC64WRjrJWFxRqBUFcqAFSR8ravoaQ/viewform';
const LINK2 = 'https://docs.google.com/forms/d/1mb75vAWhxiTdPPL1hv0tRrnvMDCmqvYRGm-J3mb1490/viewform?edit_requested=true'
const Trabaja = () => {
    const [t] = useTranslation("global");

    return (
        <TrabajaContainer>
            <TrabajaWrapper>
                <TrabajaItems>
                    <TrabajaVideo autoPlay loop muted playsInline>
                        <source src='/videos/bg-video-informe-2.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </TrabajaVideo>
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
                        <ButtonContainer>
                            <Button onClick={() => window.open(LINK2, '_blank')}>
                                {t('trabaja.button')}
                                <Flecha />
                            </Button>
                        </ButtonContainer>
                    </TrabajaTextContainer>
                </TrabajaItems>
                <TrabajaItems className='informe'>
                    <TrabajaVideo autoPlay loop muted playsInline>
                        <source src='/videos/bg-video-informe.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </TrabajaVideo>
                    <TrabajaTextContainer className='informe'>
                        <img src="./imgs/logo-gentioteam.png" alt="gentio-team" />
                        <h3 className='informe'>
                            {t('gentioteam.title')
                                .split(/__(.*?)__/)
                                .map((part, index) =>
                                    part === '__Súmate__' ? (
                                        <span key={index}>{part}</span>
                                    ) : (
                                        <React.Fragment key={index}>{part}</React.Fragment>
                                    )
                                )}
                        </h3>
                        <ButtonContainer className='informe'>
                            <Button onClick={() => window.open(LINK, '_blank')}>
                                {t('gentioteam.button')}
                                <Flecha />
                            </Button>
                        </ButtonContainer>
                    </TrabajaTextContainer>
                </TrabajaItems>
            </TrabajaWrapper>
        </TrabajaContainer>
    );
};

export default Trabaja;
