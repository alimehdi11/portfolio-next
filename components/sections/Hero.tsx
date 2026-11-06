import { FaArrowDown, FaFolderOpen, FaPaperPlane } from "react-icons/fa6";
import { heroStats, profile } from "@/data/portfolio";
import HeroVisual from "@/components/motion/HeroVisual";
import Magnetic from "@/components/motion/Magnetic";
import Parallax from "@/components/motion/Parallax";
import { MaskText, SplitLetters } from "@/components/motion/SplitText";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative z-[2] flex min-h-svh items-center px-5 pb-12 pt-28 md:px-8 md:pb-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_380px]">
        <Parallax distance={-140} fade>
          <Reveal immediate direction="none" initial={{ opacity: 0, y: -16 }}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.06] px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.1em] text-cyan/80">
              <span className="ping-dot" />
              {profile.availability}
            </p>
          </Reveal>

          <h1 className="font-display text-[clamp(2.6rem,5.2vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <SplitLetters text={profile.headline[0]} className="block" />
            <MaskText className="text-gradient block w-fit pb-1" delay={0.35}>
              {profile.headline[1]}
            </MaskText>
            <SplitLetters text={profile.headline[2]} className="block text-white/[0.22]" delay={0.55} />
          </h1>

          <Reveal immediate delay={0.9}>
            <p className="mt-6 max-w-[560px] text-[1.05rem] leading-[1.75] text-mid">
              I&apos;m <strong className="font-semibold text-cyan">{profile.name}</strong> — {profile.intro}
            </p>
          </Reveal>

          <Reveal immediate delay={1.05} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Magnetic className="w-full sm:w-auto">
              <a href="#projects" className="btn-primary w-full">
                <FaFolderOpen /> View Projects
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a href="#contact" className="btn-ghost w-full">
                <FaPaperPlane /> Let&apos;s Connect
              </a>
            </Magnetic>
          </Reveal>

          <Reveal immediate delay={1.2}>
            <dl className="mt-11 grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.08]">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="spotlight bg-[rgba(7,9,15,0.85)] px-3 py-4 text-center backdrop-blur transition-colors hover:bg-cyan/[0.04]"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-[1.5rem] font-extrabold leading-none text-cyan sm:text-[1.9rem]">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dd aria-hidden className="mt-1 text-[0.72rem] tracking-[0.04em] text-dim">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Parallax>

        <div className="hidden justify-center lg:flex">
          <HeroVisual />
        </div>
      </div>

      <Reveal immediate delay={1.6} direction="none" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <a
          href="#about"
          aria-label="Scroll to About"
          className="flex flex-col items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-dim transition-colors hover:text-cyan"
        >
          Scroll
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
            <FaArrowDown className="animate-[scrollHint_1.6s_ease-in-out_infinite] text-[0.55rem] text-cyan" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
