"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormField } from "@/components/modal/FormField";
import { ChipSelect } from "@/components/modal/ChipSelect";
import { useAuditModal } from "@/context/AuditModalContext";
import { track } from "@/lib/tracking";
import { submitAuditRequest } from "@/lib/submit-audit";
import {
  EMPTY_AUDIT_FORM,
  validateStep1,
  validateStep2,
  type AuditFormData,
  type Step1Errors,
  type Step2Errors,
} from "@/lib/audit-form";
import { AUDIT_MODAL_CONTENT, IMPROVEMENT_CHIPS } from "@/lib/constants";

type Step = 1 | 2;

/** Formulario de Auditoría Growth 360° — 2 pasos (brief sección "MODAL GLOBAL"). */
export function AuditForm() {
  const router = useRouter();
  const { origin, closeModal } = useAuditModal();

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<AuditFormData>(EMPTY_AUDIT_FORM);
  const [step1Errors, setStep1Errors] = useState<Step1Errors>({});
  const [step2Errors, setStep2Errors] = useState<Step2Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField<K extends keyof AuditFormData>(key: K, value: AuditFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function handleStep1Continue() {
    const errors = validateStep1(formData);
    setStep1Errors(errors);
    if (Object.keys(errors).length > 0) return;

    track("form_start", { origin: origin ?? undefined, step: 1 });
    setStep(2);
  }

  function toggleImprovement(option: string) {
    setFormData((prev) => ({
      ...prev,
      improvements: prev.improvements.includes(option)
        ? prev.improvements.filter((item) => item !== option)
        : [...prev.improvements, option],
    }));
  }

  async function handleSubmit() {
    const errors = validateStep2({ improvements: formData.improvements, website: formData.website });
    setStep2Errors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitAuditRequest(formData);

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.error ?? "No pudimos enviar tu solicitud. Intenta de nuevo.");
      return;
    }

    track("form_submit", { origin: origin ?? undefined, step: 2, improvements: formData.improvements });
    closeModal();
    router.push("/gracias");
  }

  if (step === 1) {
    return (
      <div>
        <p className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.06em] text-blue-700">
          Paso 1 de 2
        </p>
        <h2 id="audit-modal-title" className="font-display text-2xl font-bold text-navy-900">
          {AUDIT_MODAL_CONTENT.step1.title}
        </h2>

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleStep1Continue();
          }}
          noValidate
        >
          <FormField
            id="audit-name"
            label="Nombre"
            autoComplete="name"
            value={formData.name}
            onChange={(value) => updateField("name", value)}
            error={step1Errors.name}
          />
          <FormField
            id="audit-company"
            label="Empresa"
            autoComplete="organization"
            value={formData.company}
            onChange={(value) => updateField("company", value)}
            error={step1Errors.company}
          />
          <FormField
            id="audit-whatsapp"
            label="WhatsApp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.whatsapp}
            onChange={(value) => updateField("whatsapp", value)}
            error={step1Errors.whatsapp}
          />
          <FormField
            id="audit-email"
            label="Email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(value) => updateField("email", value)}
            error={step1Errors.email}
          />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-orange-500 px-7 py-3.5 font-display text-[15px] font-semibold text-navy-900 transition-colors hover:bg-orange-600"
          >
            {AUDIT_MODAL_CONTENT.step1.cta}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.06em] text-blue-700">
          Paso 2 de 2
        </p>
        <button
          type="button"
          onClick={() => setStep(1)}
          className="font-body text-xs font-semibold text-text-muted-light hover:text-navy-900"
        >
          ← Atrás
        </button>
      </div>
      <h2 id="audit-modal-title" className="font-display text-2xl font-bold text-navy-900">
        {AUDIT_MODAL_CONTENT.step2.title}
      </h2>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit();
        }}
        noValidate
      >
        <div>
          <p id="improvements-legend" className="sr-only">
            {AUDIT_MODAL_CONTENT.step2.title}
          </p>
          <ChipSelect
            options={IMPROVEMENT_CHIPS}
            selected={formData.improvements}
            onToggle={toggleImprovement}
            legendId="improvements-legend"
          />
          {step2Errors.improvements ? (
            <p role="alert" className="mt-2 text-xs font-medium text-danger">
              {step2Errors.improvements}
            </p>
          ) : null}
        </div>

        <FormField
          id="audit-website"
          label="Página web o redes sociales"
          placeholder="Opcional"
          autoComplete="url"
          value={formData.website}
          onChange={(value) => updateField("website", value)}
        />

        {submitError ? (
          <p role="alert" className="text-sm font-medium text-danger">
            {submitError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-orange-500 px-7 py-3.5 font-display text-[15px] font-semibold text-navy-900 transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Enviando…" : AUDIT_MODAL_CONTENT.step2.ctaFinal}
        </button>
      </form>
    </div>
  );
}
