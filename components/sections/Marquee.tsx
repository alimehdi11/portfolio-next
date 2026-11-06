"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { marquee } from "@/data/portfolio";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** A row that drifts on its own and speeds up / flips direction with scroll velocity. */
function VelocityRow({ items, baseVelocity }: { items: typeof marquee; baseVelocity: number }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);
  const paused = useRef(false);

  useAnimationFrame((_, delta) => {
    if (reduce || paused.current) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) dir.current = -1;
    else if (factor.get() > 0) dir.current = 1;
    move += dir.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });

  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => (paused.current = false)}
    >
      <motion.ul className="flex w-max gap-6 pr-6" style={{ x }}>
        {doubled.map(({ label, icon: Icon, color }, i) => (
          <li
            key={`${label}-${i}`}
            aria-hidden={i >= items.length}
            className="group flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2 font-mono text-[0.8rem] text-mid transition-colors hover:border-white/20 hover:text-bright"
          >
            <Icon className="text-base transition-transform duration-300 group-hover:scale-125" style={{ color }} /> {label}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default function Marquee() {
  const reversed = [...marquee].reverse();
  return (
    <div
      className="marquee-mask relative z-[2] my-8 flex -rotate-1 flex-col gap-4 border-y border-white/[0.08] bg-black/20 py-6"
      aria-label="Technologies I work with"
    >
      <VelocityRow items={marquee} baseVelocity={-2} />
      <VelocityRow items={reversed} baseVelocity={2} />
    </div>
  );
}
