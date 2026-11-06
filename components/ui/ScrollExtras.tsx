"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

/** Top scroll-progress bar + floating back-to-top button. */
export default function ScrollExtras() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[200] h-[2.5px] origin-left bg-gradient-to-r from-cyan to-violet shadow-[0_0_8px_var(--cyan)]"
      />
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 right-6 z-[100] flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-sm text-cyan backdrop-blur transition hover:-translate-y-1 hover:bg-cyan/20"
          >
            <FaArrowUp />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
