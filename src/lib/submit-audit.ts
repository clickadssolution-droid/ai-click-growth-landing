/**
 * Handler de envío del formulario de auditoría — capa desacoplada (brief: "Implementar
 * una capa desacoplada para que posteriormente sea sencillo sustituir el handler del
 * formulario por una integración CRM").
 *
 * V1: valida y simula un envío exitoso (latencia artificial + resuelve). No hay
 * integración real con GoHighLevel ni ningún CRM todavía.
 *
 * Para conectar GoHighLevel (o cualquier CRM) en el futuro: reemplazar el cuerpo de
 * `submitAuditRequest` por un `fetch()` al endpoint real, manteniendo la misma firma
 * (recibe `AuditFormData`, devuelve `Promise<SubmitAuditResult>`) para no tocar
 * `AuditForm.tsx`.
 */

import type { AuditFormData } from "@/lib/audit-form";

export interface SubmitAuditResult {
  ok: boolean;
  error?: string;
}

export async function submitAuditRequest(data: AuditFormData): Promise<SubmitAuditResult> {
  // TODO: sustituir por integración real, ej.:
  // const response = await fetch("/api/leads/gohighlevel", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) return { ok: false, error: "No se pudo enviar tu solicitud." };
  // return { ok: true };

  if (process.env.NODE_ENV !== "production") {
    console.log("[submit-audit] simulando envío", data);
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  return { ok: true };
}
