"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { LiveIcon, projectFilters, projects, type ProjectFilter } from "@/data/portfolio";
import TiltCard from "@/components/ui/TiltCard";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => {
          const active = f === filter;
          const count = f === "All" ? projects.length : projects.filter((p) => p.status === f).length;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`relative rounded-full border px-4 py-2 text-[0.8rem] font-medium transition-colors ${
                active
                  ? "border-cyan/40 text-cyan"
                  : "border-white/[0.08] text-mid hover:border-white/20 hover:text-bright"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-cyan/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">
                {f} <span className="ml-1 font-mono text-[0.7rem] opacity-60">{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map(({ title, category, desc, tags, icon: Icon, gradient, codeUrl, liveUrl, status }, i) => (
            <motion.div
              key={title}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              className="h-full"
            >
              <TiltCard className="group glass-card spotlight flex h-full flex-col overflow-hidden rounded-[18px]">
                <div
                  data-cursor-label="View"
                  className="relative flex h-[200px] items-center justify-center overflow-hidden text-[3.5rem] text-white/15 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-50% after:to-[rgba(7,9,15,0.9)]"
                  style={{ background: gradient }}
                >
                  <span
                    aria-hidden
                    className="project-grid absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                  />
                  <span
                    className={`absolute right-3 top-3 z-[2] flex items-center gap-1.5 rounded-full border bg-black/30 px-2.5 py-0.5 font-mono text-[0.65rem] backdrop-blur ${
                      status === "Live"
                        ? "border-emerald-400/30 text-emerald-300"
                        : "border-amber-400/30 text-amber-300"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${status === "Live" ? "animate-pulse bg-emerald-400" : "bg-amber-400"}`}
                    />
                    {status}
                  </span>
                  <Icon className="relative z-[1] transition duration-500 group-hover:-rotate-6 group-hover:scale-125 group-hover:text-white/40 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-dim">{category}</p>
                  <h3 className="mb-2 font-display text-[1.15rem] font-bold transition-colors group-hover:text-cyan">
                    {title}
                  </h3>
                  <p className="flex-1 text-[0.82rem] leading-[1.65] text-dim">{desc}</p>
                  <ul className="my-4 flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <li key={t} className="chip rounded-[5px] px-2.5 py-0.5 text-[0.68rem] text-dim">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-2">
                    {!codeUrl && !liveUrl && (
                      <span className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-white/10 py-2 font-mono text-[0.72rem] text-dim">
                        Coming soon
                      </span>
                    )}
                    {codeUrl && (
                      <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${title} source code`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] py-2 text-[0.78rem] font-semibold text-mid transition hover:border-cyan/40 hover:bg-cyan/5 hover:text-cyan"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${title} live demo`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-cyan/25 bg-cyan/[0.07] py-2 text-[0.78rem] font-semibold text-cyan transition hover:bg-cyan/15"
                      >
                        <LiveIcon /> Visit Live Site
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
