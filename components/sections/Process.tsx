import { processSteps } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="How I Work"
          title="A Simple, Proven"
          highlight="Process"
          sub="From first call to launch day — clear steps, no surprises"
        />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <span
            aria-hidden
            className="absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block"
          />
          {processSteps.map(({ step, title, desc, icon: Icon }, i) => (
            <Reveal key={step} delay={i * 0.12} className="h-full">
              <article className="group glass-card spotlight relative h-full overflow-hidden rounded-2xl p-7 hover:-translate-y-1.5">
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 right-5 bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text font-display text-[4.5rem] font-extrabold leading-none text-transparent transition-all duration-500 group-hover:from-cyan/30"
                >
                  {step}
                </span>
                <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/25 bg-[var(--bg-deep)] text-lg text-cyan shadow-[0_0_24px_rgba(0,245,212,0.15)] transition-transform duration-500 group-hover:rotate-[360deg]">
                  <Icon />
                </span>
                <p className="mb-1 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-cyan/70">Step {step}</p>
                <h3 className="mb-2 font-display text-[1.1rem] font-bold">{title}</h3>
                <p className="text-[0.82rem] leading-relaxed text-dim">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
