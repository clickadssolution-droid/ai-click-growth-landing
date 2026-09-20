"use client";

import { buildWhatsappLink } from "@/lib/whatsapp";
import { track } from "@/lib/tracking";
import { GRACIAS_CONTENT } from "@/lib/constants";

/** CTA de WhatsApp en /gracias — registra whatsapp_click (brief: "PÁGINA /GRACIAS"). */
export function WhatsappCta() {
  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { origin: "gracias" })}
      className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-orange-500 px-7 py-3.5 font-display text-[15px] font-semibold text-navy-900 transition-colors hover:bg-orange-600"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.6 6.3A8.4 8.4 0 0 0 3.7 16.4L2.5 21l4.7-1.2A8.4 8.4 0 1 0 17.6 6.3Zm-5.6 14a7 7 0 0 1-3.6-1l-.3-.2-2.7.7.7-2.6-.2-.3a7 7 0 1 1 6.1 3.4Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1l-.6.7c-.1.1-.2.2-.4.1a5.7 5.7 0 0 1-2.8-2.4c-.2-.3.2-.3.5-.9.1-.1 0-.3 0-.4l-.6-1.4c-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.4 0-.6.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.6 2.5 4 3.4.5.2.9.3 1.3.4.5.2 1 .1 1.3-.1.4-.2 1.2-.5 1.3-1 .2-.5.2-.9.1-1Z" />
      </svg>
      {GRACIAS_CONTENT.whatsappCta}
    </a>
  );
}
