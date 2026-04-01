import {
  SiAstro,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/** Mismo orden de valores que `TAGS` en data/projects.js */
const ICON_BY_LABEL = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  MySQL: SiMysql,
  Tailwind: SiTailwindcss,
  Astro: SiAstro,
  React: SiReact,
};

export function TechTagIcon({ label, size = 14 }) {
  const Icon = ICON_BY_LABEL[label];
  if (!Icon) return null;
  return <Icon size={size} aria-hidden title={label} />;
}

export function hasTechIcon(label) {
  return Boolean(ICON_BY_LABEL[label]);
}
