"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

/** Registra thank_you_view al montar /gracias (brief: "TRACKING"). Sin salida visual. */
export function ThankYouViewTracker() {
  useEffect(() => {
    track("thank_you_view");
  }, []);

  return null;
}
