import { useTranslation } from "react-i18next";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  Card,
  CardImage,
  CardImageWrap,
  CardBody,
  CardTitle,
  CardDesc,
  TagRow,
  Tag,
  CardLink,
} from "./WebProjectsStyles";
import { ScrollReveal } from "./ScrollReveal";
import { hasTechIcon, TechTagIcon } from "./techTagIcons";

export function ProjectCard({ project, revealDelay = 0 }) {
  const [t] = useTranslation("global");

  return (
    <ScrollReveal delay={revealDelay} y={24}>
      <Card>
        <CardImageWrap>
          <CardImage src={project.image} alt={project.title} loading="lazy" />
        </CardImageWrap>
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardDesc>{project.description}</CardDesc>
          {project.tags?.length > 0 && (
            <TagRow>
              {project.tags.map((tag) => (
                <Tag key={tag}>
                  {hasTechIcon(tag) && <TechTagIcon label={tag} size={13} />}
                  {tag}
                </Tag>
              ))}
            </TagRow>
          )}
          <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
            {t("web.visit")}
            <HiOutlineExternalLink size={18} aria-hidden />
          </CardLink>
        </CardBody>
      </Card>
    </ScrollReveal>
  );
}
