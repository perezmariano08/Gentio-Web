import React from 'react'
import { HeroContainer, HeroEstadistica, HeroEstadisticaNumero, HeroEstadisticasWrapper, HeroText, HeroWrapper } from './HeroStyles'
import { RiArrowRightUpLine } from "react-icons/ri";
import bgHero from '/videos/bg_hero_1.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <video src={bgHero} autoPlay muted loop playsInline />
            <HeroWrapper>
                <HeroEstadisticasWrapper>
                    <HeroEstadistica>
                        <HeroEstadisticaNumero>
                            <span>+</span>
                            300
                        </HeroEstadisticaNumero>
                        <span>descripcion estadistica</span>
                    </HeroEstadistica>
                    <HeroEstadistica>
                        <HeroEstadisticaNumero>
                            <span>+</span>
                            300
                        </HeroEstadisticaNumero>
                        <span>descripcion estadistica</span>
                    </HeroEstadistica>
                    <HeroEstadistica>
                        <HeroEstadisticaNumero>
                            98
                            <span>%</span>
                        </HeroEstadisticaNumero>
                        <span>descripcion estadistica</span>
                    </HeroEstadistica>
                </HeroEstadisticasWrapper>
                <HeroText>
                    <a href="">
                        sé tendencia
                        <RiArrowRightUpLine/>
                    </a>
                    <h1>tu <span>marca</span> en boca de todos</h1>
                </HeroText>
            </HeroWrapper>
            {/* <div className='glow'></div> */}
        </HeroContainer>
    )
}

export default Hero