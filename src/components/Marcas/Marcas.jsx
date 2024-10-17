import React from 'react'
import { MarcasContainer, MarcasWrapper } from './MarcasStyles'

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
            </MarcasWrapper>
        </MarcasContainer>
    )
}

export default Marcas