"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa6";
import { testimonials } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;
const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
const hues = ["#00f5d4", "#7c3aed", "#60a5fa", "#f472b6", "#f59e0b"];

export default function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const t = testimonials[index];

  const go = (next: number, d: number) =>
    setState([(next + testimonials.length) % testimonials.length, d]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setState(([i]) => [(i + 1) % testimonials.length, 1]), 6000);
    return () => clearTimeout(id);
  }, [index, paused]);

  return (
    <section id="testimonials" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="Testimonials"
          title="What Clients"
          highlight="Say"
          sub="Kind words from founders and teams I've worked with"
        />

        <Reveal
          className="mx-auto max-w-3xl"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          <div className="glass-card spotlight relative overflow-hidden rounded-3xl px-6 py-10 sm:px-12 sm:py-12">
            <FaQuoteLeft aria-hidden className="absolute right-8 top-8 text-[4.5rem] text-cyan/10" />

            <div className="relative min-h-[260px] sm:min-h-[220px]" aria-live="polite">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: dir * -60, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <div className="mb-5 flex gap-1 text-[0.85rem] text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <blockquote className="text-[1.05rem] leading-[1.8] text-bright sm:text-[1.2rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-[#03040a]"
                      style={{ background: hues[index % hues.length] }}
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-[0.8rem] text-dim">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {testimonials.map((x, i) => (
                  <button
                    key={x.name}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    className="relative h-1.5 w-8 overflow-hidden rounded-full bg-white/10"
                  >
                    {i === index && (
                      <motion.span
                        key={`${index}-${paused}`}
                        className="absolute inset-y-0 left-0 bg-cyan"
                        initial={{ width: paused ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: paused ? 0 : 6, ease: "linear" }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => go(index - 1, -1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mid transition hover:border-cyan/40 hover:text-cyan"
                >
                  <FaArrowLeft />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => go(index + 1, 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mid transition hover:border-cyan/40 hover:text-cyan"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
