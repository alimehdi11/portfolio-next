"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useIntro } from "@/components/motion/Intro";

type Direction = "up" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

type RevealProps = HTMLMotionProps<"div"> & {
  direction?: Direction;
  delay?: number;
  /** Animate on mount instead of when scrolled into view (used above the fold). */
  immediate?: boolean;
  /** Element to render — use "li" inside lists. */
  as?: "div" | "li";
};

/** Fades + slides its children in when they enter the viewport. */
export default function Reveal({
  direction = "up",
  delay = 0,
  immediate = false,
  as = "div",
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const { ready } = useIntro();
  const { x, y } = reduce ? offsets.none : offsets[direction];
  const target = { opacity: 1, x: 0, y: 0 };
  const Tag = (as === "li" ? motion.li : motion.div) as typeof motion.div;

  return (
    <Tag
      initial={{ opacity: 0, x, y }}
      {...(immediate
        ? { animate: ready ? target : undefined }
        : { whileInView: target, viewport: { once: true, amount: 0.15 } })}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
