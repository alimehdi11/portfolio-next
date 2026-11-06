"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";

const item: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

/** A <ul> whose <StaggerItem> children pop in one after another. */
export function Stagger({
  children,
  gap = 0.05,
  delay = 0,
  ...rest
}: HTMLMotionProps<"ul"> & { gap?: number; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: gap, delayChildren: delay }}
      {...rest}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<"li">) {
  return (
    <motion.li variants={item} {...rest}>
      {children}
    </motion.li>
  );
}
