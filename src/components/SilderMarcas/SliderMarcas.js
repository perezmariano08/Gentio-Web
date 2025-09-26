import styled from "styled-components";

export const MarcasSliderTitulo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  z-index: 2;

  h2 {
    text-transform: uppercase;
    font-weight: 500;
    color: var(--white);
  }

  span {
    color: var(--orange-500);
    font-weight: 500;
  }
`;

export const MarcasSliderDescripcion = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 50%;

  p {
    text-align: start;
  }

  img {
    width: 100px;

    @media (max-width: 768px) {
      width: 80px;
    }
  }

  .secretos {
    width: 80px;

    @media (max-width: 768px) {
      width: 60px;
    }
  }

  .tijuca {
    width: 120px;

    @media (max-width: 768px) {
      width: 80px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SeccionCalidadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const ContenidoContainer = styled.div`
  position: relative;
  z-index: 3;
  text-align: start;
  width: 100%;
  max-width: 1260px;
  padding: 0 30px;
  color: white;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Titulo = styled.h2`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.2;
  max-width: 80%;

  span {
    color: #fb773c;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Descripcion = styled.div`
  /* font-size: 3.5rem; */
  line-height: 1.6;
  max-width: 900px;

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 200;
    color: white;
  }

  .texto-destacado {
    font-weight: 600;
    color: #f4e5d4;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
