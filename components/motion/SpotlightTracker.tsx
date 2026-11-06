"use client";

import { useEffect } from "react";

/**
 * One global listener that feeds the cursor position into any `.spotlight`
 * element as --mx / --my, so CSS can paint a glow that follows the mouse.
 */
export default function SpotlightTracker() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let current: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>(".spotlight") ?? null;
      if (current && current !== el) {
        current.style.removeProperty("--mx");
        current.style.removeProperty("--my");
      }
      current = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
