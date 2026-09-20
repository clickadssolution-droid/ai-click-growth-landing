/**
 * Capa de tracking desacoplada (brief: "TRACKING").
 *
 * V1: solo hace console.log en desarrollo (no hay pixels/CRM real integrados todavía).
 * Para conectar un proveedor real (GA4, Meta Pixel, GoHighLevel, etc.), reemplazar
 * el cuerpo de `track()` sin tocar los call-sites — todos los componentes solo
 * importan y llaman `track(event, payload)`.
 */

import type { CtaOrigin } from "@/lib/constants";

export type TrackingEvent =
  | "cta_click"
  | "modal_open"
  | "form_start"
  | "form_submit"
  | "thank_you_view"
  | "whatsapp_click";

export interface TrackingPayload {
  origin?: CtaOrigin | string;
  step?: number;
  [key: string]: unknown;
}

export function track(event: TrackingEvent, payload: TrackingPayload = {}): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[tracking] ${event}`, payload);
  }

  // TODO: sustituir por integración real cuando exista (GA4 / Meta Pixel / GoHighLevel).
  // Ejemplo futuro:
  // window.gtag?.("event", event, payload);
  // window.fbq?.("trackCustom", event, payload);
}
