import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { profile } from "@/data/portfolio";
import Magnetic from "@/components/motion/Magnetic";
import { WordsReveal } from "@/components/motion/SplitText";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section aria-label="Start a project" className="relative z-[2]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <Reveal className="spotlight relative overflow-hidden rounded-[28px] border border-cyan/20 bg-gradient-to-br from-cyan/10 via-[rgba(10,14,24,0.85)] to-violet/15 px-6 py-14 text-center sm:px-12 md:py-20">
          {/* animated blobs */}
          <span
            aria-hidden
            className="absolute -left-20 -top-20 h-72 w-72 animate-[orbFloat_9s_ease-in-out_infinite_alternate] rounded-full bg-cyan/20 blur-3xl"
          />
          <span
            aria-hidden
            className="absolute -bottom-24 -right-16 h-80 w-80 animate-[orbFloat_11s_ease-in-out_infinite_alternate-reverse] rounded-full bg-violet/25 blur-3xl"
          />
          <span aria-hidden className="project-grid absolute inset-0 opacity-40" />

          <div className="relative">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-black/30 px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.1em] text-cyan">
              <span className="ping-dot" /> Open to new opportunities
            </p>
            <WordsReveal
              text="Hiring, or have an idea? Let's build"
              highlight="something great together."
              className="mx-auto max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.02em]"
            />
            <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-mid">
              Whether you&apos;re hiring for your team or need a full-stack app built — I&apos;d love to hear about it.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <a href="#contact" className="btn-primary">
                  Get in Touch <FaArrowRight />
                </a>
              </Magnetic>
              {profile.resumeUrl !== "#" && (
                <Magnetic>
                  <a href={profile.resumeUrl} className="btn-ghost" download>
                    <FaDownload /> Download CV
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
