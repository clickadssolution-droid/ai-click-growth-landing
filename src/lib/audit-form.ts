/**
 * Tipos y validación del formulario de Auditoría Growth 360° (modal en 2 pasos).
 * Validación manual y ligera — se evita sumar una dependencia (ej. zod) para un
 * formulario de 6 campos (brief: "evitar dependencias innecesarias").
 */

export interface AuditFormStep1 {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
}

export interface AuditFormStep2 {
  improvements: string[];
  website: string;
}

export type AuditFormData = AuditFormStep1 & AuditFormStep2;

export type Step1Errors = Partial<Record<keyof AuditFormStep1, string>>;
export type Step2Errors = Partial<Record<"improvements", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Acepta dígitos, espacios, +, -, paréntesis — mínimo 7 dígitos reales.
const PHONE_DIGITS_RE = /\d/g;

export function validateStep1(data: AuditFormStep1): Step1Errors {
  const errors: Step1Errors = {};

  if (!data.name.trim()) {
    errors.name = "Ingresa tu nombre.";
  }

  if (!data.company.trim()) {
    errors.company = "Ingresa el nombre de tu empresa.";
  }

  const digitCount = (data.whatsapp.match(PHONE_DIGITS_RE) ?? []).length;
  if (!data.whatsapp.trim()) {
    errors.whatsapp = "Ingresa tu número de WhatsApp.";
  } else if (digitCount < 7) {
    errors.whatsapp = "Ingresa un número de WhatsApp válido.";
  }

  if (!data.email.trim()) {
    errors.email = "Ingresa tu email.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Ingresa un email válido.";
  }

  return errors;
}

export function validateStep2(data: AuditFormStep2): Step2Errors {
  const errors: Step2Errors = {};

  if (data.improvements.length === 0) {
    errors.improvements = "Selecciona al menos una opción.";
  }

  return errors;
}

export function isStep1Valid(data: AuditFormStep1): boolean {
  return Object.keys(validateStep1(data)).length === 0;
}

export function isStep2Valid(data: AuditFormStep2): boolean {
  return Object.keys(validateStep2(data)).length === 0;
}

export const EMPTY_AUDIT_FORM: AuditFormData = {
  name: "",
  company: "",
  whatsapp: "",
  email: "",
  improvements: [],
  website: "",
};
