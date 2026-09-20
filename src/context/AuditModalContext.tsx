"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { CtaOrigin } from "@/lib/constants";
import { track } from "@/lib/tracking";

interface AuditModalContextValue {
  isOpen: boolean;
  origin: CtaOrigin | string | null;
  openModal: (origin: CtaOrigin | string) => void;
  closeModal: () => void;
  /** Elemento que abrió el modal, para devolver el foco al cerrar (brief sección 11/14). */
  triggerRef: React.MutableRefObject<HTMLElement | null>;
}

const AuditModalContext = createContext<AuditModalContextValue | null>(null);

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState<CtaOrigin | string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openModal = useCallback((ctaOrigin: CtaOrigin | string) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setOrigin(ctaOrigin);
    setIsOpen(true);
    track("cta_click", { origin: ctaOrigin });
    track("modal_open", { origin: ctaOrigin });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Devuelve el foco al CTA que abrió el modal.
    triggerRef.current?.focus?.();
  }, []);

  const value = useMemo(
    () => ({ isOpen, origin, openModal, closeModal, triggerRef }),
    [isOpen, origin, openModal, closeModal],
  );

  return <AuditModalContext.Provider value={value}>{children}</AuditModalContext.Provider>;
}

export function useAuditModal() {
  const ctx = useContext(AuditModalContext);
  if (!ctx) {
    throw new Error("useAuditModal debe usarse dentro de <AuditModalProvider>");
  }
  return ctx;
}
