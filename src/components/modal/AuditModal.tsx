"use client";

import { useEffect, useRef } from "react";
import { useAuditModal } from "@/context/AuditModalContext";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { AuditForm } from "@/components/modal/AuditForm";
import { AuditModalVisual } from "@/components/modal/AuditModalVisual";

/**
 * Modal global único (brief sección "MODAL GLOBAL"). Fondo blanco/marfil siempre,
 * overlay oscuro elegante, full-screen sheet en mobile. Focus trap, ESC, click fuera,
 * botón X, devolución de foco al CTA que lo abrió.
 *
 * V1.1 punto 7: en desktop, composición de dos columnas (visual ~38% + formulario
 * ~62%); en mobile, la visual se reduce a una franja compacta superior y el
 * formulario sigue siendo el protagonista.
 */
export function AuditModal() {
  const { isOpen, closeModal } = useAuditModal();
  const dialogRef = useRef<HTMLDivElement>(null);

  useFocusTrap(dialogRef, isOpen, closeModal);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-900/60 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
        className="relative flex max-h-[100dvh] w-full flex-col overflow-hidden rounded-t-[var(--radius-lg)] bg-white shadow-2xl sm:max-h-[90vh] sm:w-full sm:max-w-lg sm:rounded-[var(--radius-lg)] lg:max-w-4xl lg:flex-row"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Cerrar formulario de auditoría"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-navy-900/60 backdrop-blur-sm transition-colors hover:bg-ivory-50 hover:text-navy-900"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <AuditModalVisual />

        <div className="flex-1 overflow-y-auto px-6 pb-8 pt-8 sm:px-8 sm:pt-9">
          <AuditForm />
        </div>
      </div>
    </div>
  );
}
