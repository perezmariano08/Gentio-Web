import React from 'react';
import { MarcasContainer, MarcasWrapper } from './MarcasStyles';
import LogoTijuca from '../Logos/LogoTijuca';
import LogoElectro from '../Logos/LogoElectro';
import LogoDonNunez from '../Logos/LogoDonNunez';
import LogoSecretos from '../Logos/LogoSecretos';
import LogoCanovas from '../Logos/LogoCanovas';
import LogoLuco from '../Logos/LogoLuco';
import LogoCR from '../Logos/LogoCR';
import LogoGioventi from '../Logos/LogoGioventi';
import LogoLaTeca from '../Logos/LogoLaTeca';
import LogoBlackSheep from '../Logos/LogoBlackSheep';
import LogoColono from '../Logos/LogoColono';
import LogoZCSeguridad from '../Logos/LogoZCSeguridad';
import LogoOdonto from '../Logos/LogoOdonto';
import LogoZCIng from '../Logos/LogoZCIng';
import LogoLaHilda from '../Logos/LogoLaHilda';

const Marcas = () => {
    return (
        <MarcasContainer>
            <MarcasWrapper>
                {/* Duplicar las marcas para el efecto de desplazamiento continuo */}
                <LogoZCSeguridad />
                <LogoLuco />
                <LogoTijuca />
                <LogoElectro />
                <LogoDonNunez />
                <LogoBlackSheep />
                <LogoCR />
                <LogoCanovas />
                <LogoSecretos />
                <LogoGioventi />
                <LogoLaHilda />
                <LogoColono />
                <LogoOdonto />
                <LogoLaTeca />

                {/* Duplicado para efecto de scroll continuo */}
                <LogoZCSeguridad />
                <LogoLuco />
                <LogoTijuca />
                <LogoElectro />
                <LogoDonNunez />
                <LogoBlackSheep />
                <LogoCR />
                <LogoCanovas />
                <LogoSecretos />
                <LogoGioventi />
                <LogoLaHilda />
                <LogoColono />
                <LogoOdonto />
                <LogoLaTeca />

                <LogoZCIng />
                <LogoLuco />
                <LogoTijuca />
                <LogoElectro />
                <LogoDonNunez />
                <LogoBlackSheep />
                <LogoCR />
                <LogoCanovas />
                <LogoSecretos />
                <LogoGioventi />
                <LogoLaHilda />
                <LogoColono />
                <LogoOdonto />
                <LogoLaTeca />
                
            </MarcasWrapper>
        </MarcasContainer>
    );
};

export default Marcas;
