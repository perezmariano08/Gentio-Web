import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { getProjectsByCategory } from "../../data/projects";
import { ProjectsCategorySection } from "./ProjectsCategorySection";
import { ProjectsFilter } from "./ProjectsFilter";
import {
  WebPageOuter,
  WebHero,
  WebHeroInner,
  WebTitle,
  WebSubtitle,
  FilterWrap,
} from "./WebProjectsStyles";

const heroTransition = { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] };

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
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={heroTransition}
          >
            <WebTitle>{t("web.title")}</WebTitle>
            <WebSubtitle>{t("web.subtitle")}</WebSubtitle>
          </motion.div>
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
