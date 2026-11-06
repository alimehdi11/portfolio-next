"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/** Subtle 3D tilt that follows the mouse. */
export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), spring);

  return (
    <motion.div
      data-cursor="hover"
      className={className}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
