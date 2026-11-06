"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import Magnetic from "@/components/motion/Magnetic";
import { useIntro } from "@/components/motion/Intro";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const { ready } = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollY } = useScroll();

  // Navbar stays pinned; it just turns solid after 40px of scroll
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    // Track every section; the pill only shows when the current one has a nav link
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: "-110%" }}
      animate={{ y: ready ? "0%" : "-110%" }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,box-shadow] duration-400 ${
        solid
          ? "border-b border-white/[0.08] bg-[rgba(3,4,10,0.85)] shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="group font-display text-[1.35rem] font-extrabold tracking-tight">
          <span className="inline-block text-cyan transition-transform duration-300 group-hover:-translate-y-0.5">
            {profile.shortName}
          </span>
          <span className="text-white/35 transition-colors group-hover:text-white/60">.dev</span>
        </a>

        <ul className="hidden gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 backdrop-blur md:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-cyan/25 bg-cyan/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-full px-4 py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.06em] transition-colors ${
                    isActive ? "text-cyan" : "text-mid hover:text-bright"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Magnetic>
            <a
            href="#contact"
            className="rounded-lg border border-cyan/25 bg-cyan/[0.07] px-5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-cyan transition hover:border-cyan hover:bg-cyan/15 hover:shadow-[0_0_20px_rgba(0,245,212,0.25)]"
          >
              Hire Me
            </a>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span className={`block h-0.5 w-6 rounded bg-bright transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-bright transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-bright transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <motion.div
              className="flex flex-col px-6 pb-6"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
              {[...navLinks, { href: "#contact", label: "Hire Me" }].map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                  className={`border-b border-white/[0.08] py-3 font-display text-lg font-bold transition-colors last:border-none hover:text-cyan ${
                    i === navLinks.length ? "text-cyan" : active === l.href ? "text-bright" : "text-mid"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
