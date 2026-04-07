import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getProjectsByCategory } from "../data/projects";
import { ProjectsCategorySection } from "../components/WebProjects/ProjectsCategorySection";
import { ProjectsFilter } from "../components/WebProjects/ProjectsFilter";
import WebHeroCtas from "../components/WebProjects/WebHeroCtas";
import {
  WebPageOuter,
  WebHero,
  WebHeroInner,
  WebHeroMotionStack,
  WebTitle,
  WebSubtitle,
  FilterWrap,
} from "../components/WebProjects/WebProjectsStyles";

const ease = [0.25, 0.1, 0.25, 1];

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease },
  },
};

function buildSectionList(sections) {
  let acc = 0.12;
  return sections.map(({ category, items }, sectionIndex) => {
    const staggerBase = acc;
    acc += 0.08 + items.length * 0.02;
    return {
      category,
      items,
      staggerBase: staggerBase + sectionIndex * 0.05,
    };
  });
}

export default function WebProjectsPage() {
  const [t] = useTranslation("global");
  const sections = useMemo(() => getProjectsByCategory(), []);
  const availableCategories = useMemo(
    () => sections.map((s) => s.category),
    [sections]
  );
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSections = useMemo(() => {
    if (activeFilter === "all") return sections;
    return sections.filter((s) => s.category === activeFilter);
  }, [sections, activeFilter]);

  const sectionRows = useMemo(
    () => buildSectionList(filteredSections),
    [filteredSections]
  );

  return (
    <WebPageOuter>
      <WebHero>
        <WebHeroInner>
          <WebHeroMotionStack
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItem}>
              <WebTitle>{t("web.title")}</WebTitle>
            </motion.div>
            <motion.div variants={heroItem}>
              <WebSubtitle>{t("web.subtitle")}</WebSubtitle>
            </motion.div>
            <motion.div variants={heroItem}>
              <WebHeroCtas />
            </motion.div>
          </WebHeroMotionStack>
          <FilterWrap>
            <ProjectsFilter
              active={activeFilter}
              onChange={setActiveFilter}
              availableCategories={availableCategories}
            />
          </FilterWrap>
        </WebHeroInner>
      </WebHero>

      {sectionRows.map(({ category, items, staggerBase }) => (
        <ProjectsCategorySection
          key={category}
          categoryKey={category}
          items={items}
          staggerBase={staggerBase}
        />
      ))}
    </WebPageOuter>
  );
}
