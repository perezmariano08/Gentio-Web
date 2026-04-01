import { useTranslation } from "react-i18next";
import { CATEGORY_ORDER } from "../../data/projects";
import { FilterBar, FilterChip } from "./WebProjectsStyles";

const FILTER_KEYS = ["all", ...CATEGORY_ORDER];

export function ProjectsFilter({ active, onChange, availableCategories }) {
  const [t] = useTranslation("global");
  const hasProjects = (key) =>
    key === "all" || availableCategories.includes(key);

  return (
    <FilterBar role="tablist" aria-label={t("web.filterAria")}>
      {FILTER_KEYS.filter(hasProjects).map((key) => {
        const selected = active === key;
        const label =
          key === "all"
            ? t("web.filterAll")
            : t(`web.categories.${key}`);
        return (
          <FilterChip
            key={key}
            type="button"
            role="tab"
            aria-selected={selected}
            $active={selected}
            onClick={() => onChange(key)}
          >
            {label}
          </FilterChip>
        );
      })}
    </FilterBar>
  );
}
