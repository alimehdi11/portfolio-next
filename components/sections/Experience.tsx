import { FaCaretRight, FaGraduationCap } from "react-icons/fa6";
import { certifications, education, experience } from "@/data/portfolio";
import Timeline from "@/components/motion/Timeline";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="Career"
          title="Professional"
          highlight="Journey"
          sub="Where I've built, shipped, and taught"
        />
        <div className="mx-auto max-w-[780px]">
          <Timeline>
            {experience.map((job, i) => (
              <Reveal as="li" key={job.role} direction="right" delay={i * 0.1} className="group relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="timeline-dot absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-cyan bg-[var(--bg-deep)] shadow-[0_0_12px_rgba(0,245,212,0.4)] transition group-hover:bg-cyan group-hover:shadow-[0_0_20px_rgba(0,245,212,0.7)]"
                />
                <article className="glass-card spotlight rounded-2xl p-6 group-hover:translate-x-1 md:p-7">
                  <header className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="mb-0.5 font-display text-[1.1rem] font-bold">{job.role}</h3>
                      <p className="text-[0.85rem] text-cyan">{job.company}</p>
                    </div>
                    <span className="rounded-full border border-cyan/20 bg-cyan/[0.06] px-3 py-0.5 font-mono text-[0.72rem] tracking-[0.08em] text-cyan">
                      {job.period}
                    </span>
                  </header>
                  <Stagger className="flex flex-col gap-1.5" gap={0.07} delay={0.25}>
                    {job.points.map((p) => (
                      <StaggerItem key={p} className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-mid">
                        <FaCaretRight className="mt-1 shrink-0 text-[0.7rem] text-cyan" />
                        {p}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </article>
              </Reveal>
            ))}
          </Timeline>

          <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
            {certifications.map(({ title, sub, icon: Icon, color }) => (
              <div key={title} className="group glass-card spotlight rounded-[14px] px-4 py-5 text-center hover:-translate-y-1">
                <Icon className="mx-auto mb-2 text-[1.6rem] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-125" style={{ color }} />
                <p className="mb-0.5 text-[0.82rem] font-semibold">{title}</p>
                <p className="font-mono text-[0.7rem] text-dim">{sub}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-14">
            <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet/15 text-violet">
                <FaGraduationCap />
              </span>
              Education
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {education.map((e) => (
                <article key={e.degree} className="group glass-card spotlight rounded-2xl p-6 hover:-translate-y-1">
                  <p className="mb-2 font-mono text-[0.7rem] tracking-[0.08em] text-violet">{e.period}</p>
                  <h4 className="font-display text-[1rem] font-bold transition-colors group-hover:text-cyan">{e.degree}</h4>
                  <p className="mt-0.5 text-[0.85rem] text-cyan">{e.school}</p>
                  <p className="mt-3 text-[0.8rem] leading-relaxed text-dim">{e.note}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
