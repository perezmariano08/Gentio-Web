import { useCallback } from "react";
import { openWhatsApp } from "../utils/openWhatsApp";

/** Hook que centraliza abrir WhatsApp con mensajes personalizables (i18n → string). */
export function useWhatsApp() {
  return useCallback((message) => {
    openWhatsApp(message);
  }, []);
}
