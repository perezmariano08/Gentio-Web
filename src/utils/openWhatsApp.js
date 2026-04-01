import { WHATSAPP_PHONE } from "../constants/whatsapp";

/**
 * Abre WhatsApp Web/App con un mensaje prellenado.
 * @param {string} message - Texto UTF-8 (se codifica con encodeURIComponent)
 */
export function openWhatsApp(message) {
  if (typeof message !== "string" || !message.trim()) return;
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message.trim())}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
