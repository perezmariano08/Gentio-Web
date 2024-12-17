import React, { useEffect, useRef, useState } from 'react'
import { NosotrosContainer, NosotrosText, NosotrosWrapper } from './NosotrosStyles'
import { useTranslation } from 'react-i18next';

const Nosotros = () => {
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

    const [t] = useTranslation("global");
    
    const highlightText = (text) => {
        // Regular expression to match the text between __ (for emphasis)
        const regex = /__(.*?)__/g;
        const parts = [];
        let lastIndex = 0;

        // Find all the occurrences of text to be highlighted
        let match;
        while ((match = regex.exec(text)) !== null) {
            // Push the normal text before the highlighted part
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }
            // Push the highlighted part wrapped in <span>
            parts.push(<span key={match.index}>{match[1]}</span>);
            lastIndex = regex.lastIndex;
        }

        // Add the remaining text after the last match
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts;
    };

    return (
        <NosotrosContainer id='nosotros'>
            <NosotrosWrapper>
                <NosotrosText ref={textRef} className={isVisible ? 'visible' : ''}>
                    <h3>{t('about.titulo')}</h3>
                    <p>
                        {highlightText(t('about.descripcion'))}
                    </p>
                    <svg viewBox="0 0 93 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.5208 77.5635C35.783 78.1958 29.3603 77.1172 23.2248 74.323C17.095 71.537 11.9808 67.2208 7.89367 61.3907C3.80654 55.5606 1.49274 49.2812 0.963745 42.5688C0.434749 35.8563 1.61324 29.4368 4.49677 23.3242C7.38848 17.2058 11.8096 12.0669 17.7543 7.89941C22.4789 4.58724 27.5345 2.37423 32.9234 1.24648C38.3124 0.118734 43.5481 0.148667 48.6331 1.32235C53.7181 2.49604 58.2484 4.74249 62.2207 8.03958L51.7232 15.3987C47.5483 12.9275 42.9976 11.819 38.0348 12.074C33.086 12.3314 28.447 13.9715 24.1318 16.9966C19.8166 20.0218 16.9214 23.5047 14.9443 27.8095C12.959 32.1201 12.1986 36.61 12.6467 41.2908C13.1006 45.9798 14.7823 50.3819 17.6869 54.5252C20.5915 58.6685 24.1647 61.7447 28.4097 63.7759C32.6548 65.8071 37.1431 66.6174 41.8665 66.2127C46.5956 65.8162 51.0208 64.1673 55.1641 61.2626C59.0126 58.5647 61.9341 55.2587 63.9311 51.3307C65.9257 47.4167 66.8747 43.283 66.8037 38.9485C66.7188 34.6115 65.5051 30.5285 63.1651 26.6855L67.0047 28.8177L44.7816 44.397L38.7715 35.8238L69.0437 14.6018L92.0453 47.4124L83.7341 53.2388L72.3223 36.9604L75.4153 36.3553C76.5578 40.5981 76.8245 44.7588 76.213 48.8513C75.5957 52.9356 74.0467 56.8059 71.5662 60.4623C69.0857 64.1186 65.7422 67.4151 61.5416 70.3599C55.5887 74.5331 49.2503 76.937 42.5208 77.5635Z" fill="#19082B"/>
                    </svg>
                </NosotrosText>
            </NosotrosWrapper>
        </NosotrosContainer>
    )
}

export default Nosotros;
