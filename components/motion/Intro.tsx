"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { startScroll, stopScroll } from "@/lib/lenis";
import { profile } from "@/data/portfolio";

const IntroContext = createContext({ ready: false });

/** `ready` flips to true as the intro curtain lifts — hero animations wait for it. */
export const useIntro = () => useContext(IntroContext);

const EASE = [0.76, 0, 0.24, 1] as const;

export function IntroProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const finish = () => {
      setShow(false);
      setReady(true);
      html.style.overflow = "";
      startScroll();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    window.scrollTo(0, 0);
    html.style.overflow = "hidden";
    stopScroll();

    let timer: ReturnType<typeof setTimeout>;
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (countRef.current) countRef.current.textContent = String(Math.round(v)).padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${v / 100})`;
      },
      onComplete: () => {
        timer = setTimeout(finish, 250);
      },
    });
    return () => {
      controls.stop();
      clearTimeout(timer);
      html.style.overflow = "";
    };
  }, []);

  return (
    <IntroContext.Provider value={{ ready }}>
      <AnimatePresence>
        {show && (
          <motion.div
            key="preloader"
            className="preloader fixed inset-0 z-[10000] flex flex-col justify-between bg-[var(--bg-deep)] p-6 md:p-12"
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            initial={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1, ease: EASE }}
          >
            <motion.p
              className="font-mono text-xs uppercase tracking-[0.3em] text-dim"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {profile.role}
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(2.5rem,9vw,7rem)] font-extrabold leading-none tracking-tight"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <span className="text-cyan">{profile.shortName}</span>
                <span className="text-white/25">.dev</span>
              </motion.h2>
            </div>

            <div>
              <div className="mb-4 flex items-end justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-dim">Loading experience</span>
                <span ref={countRef} className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-none text-white/90 tabular-nums">
                  000
                </span>
              </div>
              <div className="h-px w-full bg-white/10">
                <div ref={barRef} className="h-full origin-left scale-x-0 bg-gradient-to-r from-cyan to-violet" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
