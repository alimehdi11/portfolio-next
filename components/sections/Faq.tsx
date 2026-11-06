"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { faqs } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading label="FAQ" title="Questions," highlight="Answered" sub="Everything you might want to know before we start" />
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 0.06}>
                <div
                  className={`glass-card spotlight overflow-hidden rounded-2xl ${isOpen ? "!border-cyan/30" : ""}`}
                >
                  <h3>
                    <button
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[0.98rem] font-bold transition-colors hover:text-cyan"
                    >
                      {q}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs ${
                          isOpen ? "border-cyan/40 bg-cyan/10 text-cyan" : "border-white/10 text-mid"
                        }`}
                      >
                        <FaPlus />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <p className="px-6 pb-6 text-[0.88rem] leading-[1.8] text-dim">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
