import React from 'react'
import { FaGoogle, FaFacebook, FaInstagram, FaCode    } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobephotoshop  } from "react-icons/si";

import { DescripcionContainer, IconsContainer, ServicioContainer, ServicioDescripcion, ServicioImg, ServiciosContainer, ServiciosWrapper } from './ServiciosStyles'

const Servicios = () => {
    return (
        <ServiciosContainer>
            <ServiciosWrapper>
                <ServicioContainer>
                    <ServicioImg/>
                    <ServicioDescripcion>
                        <DescripcionContainer>
                            <h3>Analiticas</h3>
                            <p>Transformamos datos en decisiones. Con analíticas precisas, optimizamos tus campañas para obtener resultados reales y medibles.</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>
                <ServicioContainer>
                    <ServicioDescripcion>
                        <DescripcionContainer className='right'>
                            <h3>Paid Ads</h3>
                            <p>Maximizamos cada inversión en Ads. Creamos campañas optimizadas para llegar a la audiencia correcta y generar el mayor impacto con cada clic.</p>
                            <IconsContainer>
                                <FaGoogle/>
                                <FaInstagram/>
                                <FaFacebook/>
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg/>
                </ServicioContainer>
                <ServicioContainer>
                    <ServicioImg/>
                    <ServicioDescripcion>
                        <DescripcionContainer>
                            <h3>Diseño Gráfico</h3>
                            <p>Diseñamos con propósito. Creamos piezas gráficas de alta calidad que reflejan la identidad de tu marca y dejan una impresión duradera.</p>
                            <IconsContainer>
                                <SiAdobeillustrator/>
                                <SiAdobephotoshop/>
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioDescripcion>
                        <DescripcionContainer className='right'>
                            <h3>Desarrollo Web</h3>
                            <p>Diseñamos experiencias web a medida. Sitios dinámicos, funcionales y visualmente atractivos que convierten visitantes en clientes.</p>
                            <IconsContainer>
                                <FaCode/>
                            </IconsContainer>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                    <ServicioImg/>
                </ServicioContainer>

                <ServicioContainer>
                    <ServicioImg/>
                    <ServicioDescripcion>
                        <DescripcionContainer>
                            <h3>SDR: Sales Development Representative</h3>
                            <p>Impulsamos tu crecimiento. Nuestros SDRs califican prospectos y generan oportunidades de venta, conectando tu negocio con los clientes ideales</p>
                        </DescripcionContainer>
                    </ServicioDescripcion>
                </ServicioContainer>
                
            </ServiciosWrapper>
        </ServiciosContainer>
    )
}

export default Servicios