import styled from "styled-components";
import { motion } from "framer-motion";
import {
  ContainerStyled,
  WrapperStyled,
} from "../Mockups/Mockups";

const layoutCentered = `
  width: 100%;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
`;

export const WebPageOuter = styled.div`
  min-height: 100vh;
  background-color: var(--bg);
  padding-top: 80px;
`;

export const WebHero = styled(ContainerStyled)`
  padding: 48px 0 32px;
  flex-direction: column;
  align-items: stretch;
`;

export const WebHeroInner = styled(WrapperStyled)`
  ${layoutCentered}
  flex-direction: column;
  gap: 28px;
`;

/** Misma separación vertical entre título, subtítulo y CTA (simetría). */
export const WebHeroMotionStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  width: 100%;
`;

export const WebTitle = styled.h1`
  && {
    font-family: "Dunbar Tall", sans-serif;
    font-weight: 300;
    font-size: clamp(2rem, 5vw, 3.25rem);
    line-height: 1.12;
    color: var(--white);
    letter-spacing: 0.02em;
    text-transform: none;
    margin: 0;
  }
`;

export const WebSubtitle = styled.p`
  && {
    font-family: "Dunbar Tall", sans-serif;
    font-size: 1rem;
    color: var(--gray-300);
    max-width: 560px;
    line-height: 1.6;
    margin: 0;
  }
`;

/** CTA hero: alineado a la izquierda con título y bajada. */
export const WebHeroCtaRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

/** CTA bajo cada categoría — mismo comportamiento en mobile y desktop. */
export const SectionCtaRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 22px;
  width: 100%;
`;

export const FilterWrap = styled.div`
  ${layoutCentered}
  width: 100%;
  padding-bottom: 8px;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const FilterChip = styled.button`
  font-family: "Dunbar Tall", sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: none;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid
    ${(p) =>
      p.$active ? "var(--orange-500)" : "rgba(244, 229, 212, 0.2)"};
  background: ${(p) =>
    p.$active ? "rgba(251, 119, 60, 0.18)" : "transparent"};
  color: ${(p) => (p.$active ? "var(--white)" : "var(--gray-300)")};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: rgba(251, 119, 60, 0.55);
    color: var(--white);
  }
`;

export const CategoryBlock = styled.section`
  padding: 28px 0 40px;
  display: flex;
  justify-content: center;
`;

export const CategoryHeading = styled.h2`
  && {
    font-family: "Dunbar Tall", sans-serif;
    font-weight: 400;
    font-size: clamp(1.35rem, 2.8vw, 1.75rem);
    line-height: 1.2;
    color: var(--orange-500);
    text-transform: none;
    margin: 0 0 22px;
    letter-spacing: 0.03em;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
  width: 100%;
  align-items: stretch;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  background: rgba(20, 6, 34, 0.6);
  border: 1px solid rgba(244, 229, 212, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(251, 119, 60, 0.35);
    transform: translateY(-3px);
  }
`;

export const CardImageWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 16 / 10;
  background: var(--violet);
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-height: 0;
`;

export const CardTitle = styled.h3`
  && {
    font-family: "Dunbar Tall", sans-serif;
    font-weight: 500;
    font-size: 1.15rem;
    line-height: 1.25;
    color: var(--white);
    margin: 0;
    text-transform: none;
  }
`;

export const CardDesc = styled.p`
  && {
    font-family: "Dunbar Tall", sans-serif;
    font-size: 0.9rem;
    color: var(--gray-300);
    line-height: 1.45;
    margin: 0;
    flex: 1;
    min-height: 4.35em;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  font-family: "Dunbar Tall", sans-serif;
  font-size: 0.65rem;
  text-transform: none;
  letter-spacing: 0.04em;
  color: var(--white);
  opacity: 0.9;
  padding: 5px 9px 5px 7px;
  border-radius: 8px;
  background: rgba(251, 119, 60, 0.12);
  border: 1px solid rgba(251, 119, 60, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 6px;

  svg {
    flex-shrink: 0;
    opacity: 0.95;
  }
`;

export const CardLink = styled.a`
  font-family: "Dunbar Tall", sans-serif;
  margin-top: auto;
  padding-top: 10px;
  font-size: 0.85rem;
  color: var(--orange-500);
  text-decoration: none;
  text-transform: none;
  letter-spacing: 0.02em;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const WebSectionWrap = styled(WrapperStyled)`
  ${layoutCentered}
  flex-direction: column;
`;
