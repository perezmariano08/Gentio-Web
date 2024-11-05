import React from 'react'
import { MarcasContainer, MarcasWrapper } from './MarcasStyles'
import LogoTijuca from '../Logos/LogoTijuca'
import LogoElectro from '../Logos/LogoElectro'
import LogoDonNunez from '../Logos/LogoDonNunez'
import LogoSecretos from '../Logos/LogoSecretos'

const Marcas = () => {
    return (
        <MarcasContainer>
            <MarcasWrapper>
                <img src="/imgs/marcas/canovas.png" alt="" srcset="" />
                <img src="/imgs/marcas/electro.png" alt="" srcset="" />
                <img src="/imgs/marcas/luco.png" alt="" srcset="" />
                <img src="/imgs/marcas/secretos.png" alt="" srcset="" />
                <img src="/imgs/marcas/odonto.png" alt="" srcset="" />
                <img src="/imgs/marcas/tijuca.png" alt="" srcset="" className='tijuca' />
                {/* <LogoTijuca/>
                <LogoElectro/>
                <LogoDonNunez/>
                <LogoSecretos/> */}
            </MarcasWrapper>
        </MarcasContainer>
    )
}

export default Marcas