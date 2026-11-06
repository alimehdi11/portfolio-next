"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useIntro } from "@/components/motion/Intro";

/** Counts up from 0 to `value` once it scrolls into view. */
export default function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const { ready } = useIntro();

  useEffect(() => {
    if (!inView || !ready || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => (node.textContent = `${Math.floor(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, ready, value, suffix]);

  // Server-render the final value so it's correct without JS / for SEO
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
