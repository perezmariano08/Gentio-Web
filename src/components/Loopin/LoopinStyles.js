import styled, { keyframes } from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
`;

export const pulse = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
`;

export const gradientShift = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const LoopinContainer = styled(ContainerStyled)`
  background: linear-gradient(135deg, #ff6b81 0%, #7b61ff 100%);
  padding: 20px 0;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  margin: 60px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    pointer-events: none;
  }
`;

export const LoopinWrapper = styled(WrapperStyled)`
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  color: white;
  animation: ${fadeInUp} 0.8s ease-out;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;

    span {
      background: linear-gradient(45deg, #f4e5d4, #ffe4b5, #f4e5d4);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: ${gradientShift} 3s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 25px;
    font-weight: 500;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: white;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }

  button {
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const MockupContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const MockupImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 500px;
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3));
  animation: ${float} 6s ease-in-out infinite;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    animation: ${pulse} 0.6s ease-in-out;
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4));
  }

  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

export const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  &::before {
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    animation: ${float} 8s ease-in-out infinite;
  }

  &::after {
    width: 150px;
    height: 150px;
    bottom: -75px;
    left: -75px;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`;
