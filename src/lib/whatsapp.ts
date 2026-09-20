/**
 * Configuración centralizada de WhatsApp (brief: "El número real de WhatsApp debe estar
 * centralizado en configuración y puede dejarse claramente marcado para reemplazo").
 *
 * Reemplazar WHATSAPP_CONFIG.phoneNumber en src/lib/constants.ts por el número real
 * (formato E.164 sin "+", ej. "521234567890") antes de salir a producción.
 */

import { WHATSAPP_CONFIG } from "@/lib/constants";

export function buildWhatsappLink(message: string = WHATSAPP_CONFIG.defaultMessage): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}
