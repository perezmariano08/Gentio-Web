import Button from "../Button/Button";
import Flecha from "../Logos/Flecha";
import { useTranslation } from "react-i18next";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import { WebHeroCtaRow } from "./WebProjectsStyles";

export default function WebHeroCtas() {
  const [t] = useTranslation("global");
  const openWa = useWhatsApp();

  return (
    <WebHeroCtaRow>
      <Button
        type="button"
        onClick={() => openWa(t("web.cta.cotizarMessage"))}
      >
        <span>{t("web.cta.cotizarLabel")}</span>
        <Flecha />
      </Button>
    </WebHeroCtaRow>
  );
}
