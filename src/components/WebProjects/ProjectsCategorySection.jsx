import { useTranslation } from "react-i18next";
import {
  CategoryBlock,
  CategoryHeading,
  ProjectsGrid,
  WebSectionWrap,
} from "./WebProjectsStyles";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";
import { WebCategorySectionCta } from "./WebCategorySectionCta";

export function ProjectsCategorySection({ categoryKey, items, staggerBase = 0 }) {
  const [t] = useTranslation("global");
  const label = t(`web.categories.${categoryKey}`, { defaultValue: categoryKey });

  return (
    <CategoryBlock id={`category-${categoryKey}`}>
      <WebSectionWrap>
        <ScrollReveal delay={0.04} y={20}>
          <CategoryHeading>{label}</CategoryHeading>
        </ScrollReveal>
        <ProjectsGrid>
          {items.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${project.link}`}
              project={project}
              revealDelay={staggerBase + i * 0.07}
            />
          ))}
        </ProjectsGrid>
        <WebCategorySectionCta categoryKey={categoryKey} />
      </WebSectionWrap>
    </CategoryBlock>
  );
}
