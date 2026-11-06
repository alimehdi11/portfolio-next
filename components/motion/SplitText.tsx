"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useIntro } from "./Intro";

const EASE = [0.22, 1, 0.36, 1] as const;

const letter: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -90, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: i * 0.035, ease: EASE },
  }),
};

/**
 * Hero line: every letter flips up in 3D, staggered.
 * Plays once the intro curtain lifts.
 */
export function SplitLetters({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const { ready } = useIntro();
  const reduce = useReducedMotion();
  let index = 0;

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className="inline-block [perspective:800px]"
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        transition={{ delayChildren: delay }}
      >
        {text.split(" ").map((word, w) => (
          <span key={w} className="inline-block whitespace-nowrap">
            {word.split("").map((ch) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  custom={reduce ? 0 : i + delay / 0.035}
                  variants={reduce ? undefined : letter}
                  className="inline-block origin-bottom will-change-transform"
                >
                  {ch}
                </motion.span>
              );
            })}
            {w < text.split(" ").length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/** Gradient line revealed by a left-to-right wipe (keeps background-clip:text intact). */
export function MaskText({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  const { ready } = useIntro();
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)", x: -24, opacity: 0 }}
      animate={ready ? { clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 } : undefined}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  );
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

/** Section title: words blur-and-rise into place when scrolled into view. */
export function WordsReveal({
  text,
  highlight,
  className = "",
  as = "h2",
}: {
  text: string;
  highlight?: string;
  className?: string;
  as?: "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const Tag = as === "h3" ? motion.h3 : motion.h2;
  const words = [
    ...text.split(" ").map((w) => ({ w, hl: false })),
    ...(highlight ? highlight.split(" ").map((w) => ({ w, hl: true })) : []),
  ];

  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.08 }}
    >
      {words.map(({ w, hl }, i) => (
        <span key={i}>
          <motion.span variants={wordVariants} className={`inline-block ${hl ? "text-gradient" : ""}`}>
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
