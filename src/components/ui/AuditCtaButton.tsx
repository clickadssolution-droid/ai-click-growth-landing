"use client";

import type { ReactNode } from "react";
import { useAuditModal } from "@/context/AuditModalContext";
import type { CtaOrigin } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface AuditCtaButtonProps {
  origin: CtaOrigin;
  children: ReactNode;
  variant?: "primary" | "secondary-dark" | "secondary-light";
  className?: string;
  /** Se ejecuta antes de abrir el modal (ej. cerrar el menú móvil del header). */
  onBeforeOpen?: () => void;
}

/** CTA que abre el modal global de Auditoría, registrando su origen (brief: "TRACKING"). */
export function AuditCtaButton({
  origin,
  children,
  variant = "primary",
  className,
  onBeforeOpen,
}: AuditCtaButtonProps) {
  const { openModal } = useAuditModal();

  return (
    <Button variant={variant} className={className} onClick={() => {
        onBeforeOpen?.();
        openModal(origin);
      }}>
      {children}
    </Button>
  );
}
