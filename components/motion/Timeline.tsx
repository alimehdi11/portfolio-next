"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Timeline whose glowing line draws itself as you scroll through it. */
export default function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative pl-8">
      <span aria-hidden className="absolute bottom-0 left-[6px] top-0 w-px bg-white/[0.06]" />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-0 left-[6px] top-0 w-px origin-top bg-gradient-to-b from-cyan via-violet to-transparent shadow-[0_0_10px_var(--cyan)]"
      />
      {children}
    </ol>
  );
}
