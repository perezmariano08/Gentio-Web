import { motion } from "framer-motion";
import Button from "../Button/Button";
import Flecha from "../Logos/Flecha";
import { useTranslation } from "react-i18next";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import { SectionCtaRow } from "./WebProjectsStyles";

const ease = [0.25, 0.1, 0.25, 1];

export function WebCategorySectionCta({ categoryKey }) {
  const [t] = useTranslation("global");
  const openWa = useWhatsApp();

  const label = t(`web.cta.afterSection.${categoryKey}Label`);
  const message = t(`web.cta.afterSection.${categoryKey}Message`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease }}
    >
      <SectionCtaRow>
        <Button type="button" onClick={() => openWa(message)}>
          <span>{label}</span>
          <Flecha />
        </Button>
      </SectionCtaRow>
    </motion.div>
  );
}
