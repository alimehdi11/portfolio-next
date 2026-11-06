import type { CSSProperties } from "react";
import { skillGroups } from "@/data/portfolio";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="Technical Arsenal"
          title="My Tech"
          highlight="Stack"
          sub="Modern frameworks and tools I use to build production-grade applications"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, subtitle, icon: Icon, color, tags, desc }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <article
                className="group glass-card spotlight accent-top h-full rounded-[18px] p-8 hover:-translate-y-1.5"
                style={{ "--accent": `${color}66` } as CSSProperties}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-[1.4rem] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                    style={{ color, background: `${color}1a` }}
                  >
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.1rem] font-bold">{title}</h3>
                    <p className="text-[0.72rem] text-dim">{subtitle}</p>
                  </div>
                </div>
                <Stagger className="mb-4 flex flex-wrap gap-1.5" gap={0.04} delay={0.2}>
                  {tags.map((t) => (
                    <StaggerItem key={t} className="chip rounded-md px-2.5 py-1 text-[0.72rem] font-medium">
                      {t}
                    </StaggerItem>
                  ))}
                </Stagger>
                <p className="text-[0.8rem] leading-relaxed text-dim">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
