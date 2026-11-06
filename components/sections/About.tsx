import { FaCircleCheck, FaTerminal } from "react-icons/fa6";
import { about } from "@/data/portfolio";
import ScrambleText from "@/components/motion/ScrambleText";
import { WordsReveal } from "@/components/motion/SplitText";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/ui/Reveal";
import SkillBar from "@/components/ui/SkillBar";

export default function About() {
  return (
    <section id="about" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <Reveal direction="left">
          <p className="section-label">
            <ScrambleText text="About Me" />
          </p>
          <WordsReveal text="Building Future-Ready" highlight="Web Solutions" className="section-title" />
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 text-[0.92rem] leading-[1.8] text-dim">
              {p}
            </p>
          ))}
          <Stagger className="mt-6 flex flex-col gap-3" gap={0.08}>
            {about.checklist.map((item) => (
              <StaggerItem key={item} className="flex items-center gap-2.5 text-[0.9rem] text-mid">
                <FaCircleCheck className="shrink-0 text-[0.8rem] text-cyan" />
                {item}
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal direction="right" className="flex flex-col gap-5">
          <div className="glass-card spotlight rounded-[20px] p-7 hover:-translate-y-1 md:p-10">
            <h3 className="mb-6 flex items-center gap-2.5 font-display text-[1.05rem] font-bold">
              <FaTerminal className="text-cyan" /> Core Philosophy
            </h3>
            <Stagger className="flex flex-col gap-4" gap={0.1}>
              {about.philosophy.map(({ title, text, icon: Icon, color }) => (
                <StaggerItem key={title} className="group flex items-start gap-3">
                  <span
                    className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg text-[0.8rem] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                    style={{ color, background: `${color}1a` }}
                  >
                    <Icon />
                  </span>
                  <p className="text-[0.88rem] leading-relaxed text-mid">
                    <strong className="font-semibold text-bright">{title}</strong> — {text}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="glass-card spotlight rounded-[20px] px-7 py-7 md:px-8">
            <h3 className="mb-5 font-display text-[0.95rem] font-bold">Proficiency Levels</h3>
            {about.proficiency.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
