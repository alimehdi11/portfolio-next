"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, input, textarea, select, label, [data-cursor='hover']";

/**
 * Dot + trailing ring cursor. The ring grows over interactive elements and
 * shows a label (e.g. "View") over elements with data-cursor-label.
 * Only runs on devices with a fine pointer (mouse).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduce.matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    document.body.classList.add("has-custom-cursor");
    dot.style.opacity = ring.style.opacity = "1";

    let mx = -100, my = -100, rx = -100, ry = -100, raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const labelled = target?.closest?.<HTMLElement>("[data-cursor-label]");
      if (labelled) {
        label.textContent = labelled.dataset.cursorLabel ?? "";
        ring.dataset.state = "label";
      } else {
        ring.dataset.state = target?.closest?.(INTERACTIVE) ? "hover" : "idle";
      }
      dot.style.opacity = labelled ? "0" : "1";
    };
    const onDown = () => (ring.dataset.down = "true");
    const onUp = () => (ring.dataset.down = "false");
    const onLeave = () => (dot.style.opacity = ring.style.opacity = "0");
    const onEnter = () => (dot.style.opacity = ring.style.opacity = "1");

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-cyan opacity-0 mix-blend-difference transition-opacity duration-200"
      />
      <div ref={ringRef} aria-hidden data-state="idle" className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] opacity-0">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
}
