"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal ligero basado en IntersectionObserver (brief sección 8: fade +
 * translateY, patrón observado en mae y koldconvert). Sin librerías de motion.
 *
 * El estado inicial es SIEMPRE `false`, igual en servidor y cliente — antes se
 * inicializaba con `typeof IntersectionObserver === "undefined"`, que es `true`
 * en Node (SSR) y `false` en el navegador, causando un hydration mismatch en
 * cada instancia de <Reveal /> del sitio (esa era la causa del "1 Issue" del
 * Next.js Dev Tools). El fallback para entornos sin soporte se resuelve dentro
 * del efecto (cliente only), nunca de forma síncrona en su cuerpo.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
