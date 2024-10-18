import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HeroContainer, HeroEstadistica, HeroEstadisticaNumero, HeroEstadisticasWrapper, HeroText, HeroWrapper } from './HeroStyles';
import { RiArrowRightUpLine } from "react-icons/ri";
import bgHero from '/videos/bg_hero_2.mp4';

const Counter = ({ end }) => {
    const controls = useAnimation();
    const [count, setCount] = useState(0);

    useEffect(() => {
        controls.start({ count: end, transition: { duration: 3, ease: "easeOut" } });
    }, [controls, end]);

    return (
        <motion.span
            animate={controls}
            initial={{ count: 0 }}
            onUpdate={(latest) => setCount(latest.count.toFixed(0))}
            style={{
                fontWeight: 600,
                lineHeight: '40px',
                fontSize: '40px',
                display: 'inline-block',
                color: '#FAFAFA',
            }}
        >
            {count}
        </motion.span>
    );
};

const Hero = () => {
    return (
        <HeroContainer>
            <video src={bgHero} autoPlay muted loop playsInline />
            <HeroWrapper>
                <HeroEstadisticasWrapper>
                    <HeroEstadistica>
                        <HeroEstadisticaNumero>
                            <span>+</span>
                            <Counter end={300} />
                        </HeroEstadisticaNumero>
                        <span>descripcion estadistica</span>
                    </HeroEstadistica>
                    <HeroEstadistica>
                        <HeroEstadisticaNumero>
                            <span>+</span>
                            <Counter end={300} />
                        </HeroEstadisticaNumero>
                        <span>descripcion estadistica</span>
                    </HeroEstadistica>
                    <HeroEstadistica>
                        <HeroEstadisticaNumero>
                            <Counter end={98} />
                            <span>%</span>
                        </HeroEstadisticaNumero>
                        <span>descripcion estadistica</span>
                    </HeroEstadistica>
                </HeroEstadisticasWrapper>
                <HeroText>
                    <a href="">
                        sé tendencia
                        <RiArrowRightUpLine />
                    </a>
                    <h1>tu <span>marca</span> en boca de todos.</h1>
                </HeroText>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default Hero;
