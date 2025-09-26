import Button from '../Button/Button';
import Flecha from '../Logos/Flecha';
import { useTranslation } from 'react-i18next';
import { LoopinContainer, LoopinWrapper, TextContainer, ButtonContainer, MockupContainer, MockupImage, FloatingElements } from './LoopinStyles';

const LoopinSection = () => {
    const [t] = useTranslation("global");

    return (
        <LoopinContainer>
            <FloatingElements />
            <LoopinWrapper>
                <TextContainer>
                    <h2>
                        Creamos una <span>app</span> para comercios en Córdoba
                    </h2>

                    <h3>
                        En Gentío no solo gestionamos marketing digital: también desarrollamos soluciones tecnológicas.
                    </h3>

                    <p>
                        Diseñamos una app de fidelización para comercios que permite premiar a los clientes, generar recompensas y aumentar la lealtad de manera simple y efectiva.
                    </p>

                    <ButtonContainer>
                        <Button onClick={() => window.open('https://loopin.com.ar', '_blank')}>
                            Más info sobre la app
                            <Flecha />
                        </Button>
                    </ButtonContainer>
                </TextContainer>

                <MockupContainer>
                    <MockupImage
                        src="./imgs/Loopin-image.png"
                        alt="Loopin App Mockup"
                        onClick={() => window.open('https://loopin.com.ar', '_blank')}
                    />
                </MockupContainer>
            </LoopinWrapper>
        </LoopinContainer>
    );
};

export default LoopinSection;