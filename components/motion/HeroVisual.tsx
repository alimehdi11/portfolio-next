"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa6";
import { heroBadges } from "@/data/portfolio";
import { useIntro } from "./Intro";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Spinning orb with floating tech badges — reacts to mouse (depth parallax) and scroll. */
export default function HeroVisual() {
  const { ready } = useIntro();
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const { scrollY } = useScroll();
  const scrollScale = useTransform(scrollY, [0, 700], [1, 0.75]);
  const scrollRotate = useTransform(scrollY, [0, 700], [0, 25]);
  const scrollOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Orb shifts a little, badges shift more → sense of depth
  const orbX = useTransform(sx, (v) => v * 18);
  const orbY = useTransform(sy, (v) => v * 18);
  const tiltX = useTransform(sy, (v) => v * -10);
  const tiltY = useTransform(sx, (v) => v * 10);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <motion.div
      aria-hidden
      className="relative [perspective:1000px]"
      style={reduce ? undefined : { scale: scrollScale, rotate: scrollRotate, opacity: scrollOpacity }}
      initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
      animate={ready ? { opacity: 1, scale: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
    >
      <motion.div style={reduce ? undefined : { x: orbX, y: orbY, rotateX: tiltX, rotateY: tiltY }}>
        {/* pulsing halo */}
        <div className="absolute inset-0 -z-10 animate-[halo_4s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.25),transparent_65%)] blur-2xl" />
        <div className="avatar-ring-outer">
          <div className="avatar-ring-inner">
            <div className="avatar-core">
              <FaReact className="relative drop-shadow-[0_0_25px_rgba(0,245,212,0.6)]" />
            </div>
          </div>
        </div>
        {/* orbiting dots */}
        <div className="pointer-events-none absolute inset-[-28px] animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-white/10">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_14px_var(--cyan)]" />
        </div>
        <div className="pointer-events-none absolute inset-[-60px] animate-[spin_20s_linear_infinite_reverse] rounded-full border border-white/[0.05]">
          <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet shadow-[0_0_14px_var(--violet)]" />
        </div>
      </motion.div>

      {heroBadges.map(({ label, icon: Icon, color, position }, i) => (
        <Badge key={label} index={i} sx={sx} sy={sy} ready={ready} reduce={!!reduce} className={position}>
          <Icon style={{ color }} /> {label}
        </Badge>
      ))}
    </motion.div>
  );
}

function Badge({
  children,
  index,
  sx,
  sy,
  ready,
  reduce,
  className,
}: {
  children: React.ReactNode;
  index: number;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  ready: boolean;
  reduce: boolean;
  className: string;
}) {
  const depth = 40 + index * 14;
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div className={`absolute ${className}`} style={reduce ? undefined : { x, y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.4, y: 20 }}
        animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.9 + index * 0.12 }}
      >
        <div
          className="flex animate-[float_4s_ease-in-out_infinite_alternate] items-center gap-1.5 whitespace-nowrap rounded-[10px] border border-white/[0.08] bg-[rgba(7,9,15,0.9)] px-3 py-1.5 font-mono text-[0.7rem] text-mid shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur"
          style={{ animationDelay: `${-index * 0.7}s` }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
