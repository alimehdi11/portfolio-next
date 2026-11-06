import type { CSSProperties } from "react";
import { services } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading label="Services" title="What I" highlight="Deliver" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon, color }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full" initial={{ opacity: 0, y: 50, rotateX: -25, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} style={{ transformPerspective: 900 }}>
              <article
                className="group glass-card spotlight glow-bottom h-full rounded-2xl px-6 py-8 text-center hover:-translate-y-1.5"
                style={{ "--glow": `${color}14` } as CSSProperties}
              >
                <Icon
                  className="mx-auto mb-4 text-[2rem] transition-transform duration-350 group-hover:-rotate-6 group-hover:scale-120"
                  style={{ color }}
                />
                <h3 className="mb-1.5 font-display text-[0.95rem] font-bold">{title}</h3>
                <p className="text-[0.78rem] leading-relaxed text-dim">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
