"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/** Moves (and optionally fades) its content as the page scrolls past the hero. */
export default function Parallax({
  children,
  distance = -120,
  fade = false,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  fade?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, distance]);
  const opacity = useTransform(scrollY, [0, 650], [1, fade ? 0 : 1]);

  return (
    <motion.div className={className} style={reduce ? undefined : { y, opacity }}>
      {children}
    </motion.div>
  );
}
