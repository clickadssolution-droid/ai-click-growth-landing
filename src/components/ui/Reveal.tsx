"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
}

/**
 * Envoltorio de scroll-reveal reutilizable (fade + translateY, 400-600ms,
 * ver DESIGN-BRIEF.md sección 8). Respeta prefers-reduced-motion vía CSS global.
 */
export function Reveal({ children, className = "", delayMs = 0, as = "div" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`transition-[opacity,transform] duration-500 ease-[var(--ease-out-standard)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
