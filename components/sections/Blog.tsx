import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { articles } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="Writing"
          title="Latest"
          highlight="Articles"
          sub="Notes on building, scaling and shipping modern web apps"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map(({ title, excerpt, tag, date, readTime, href, gradient }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <a
                href={href}
                className="group glass-card spotlight flex h-full flex-col overflow-hidden rounded-[18px] hover:-translate-y-1.5"
              >
                <div className="relative h-36 overflow-hidden" style={{ background: gradient }}>
                  <span aria-hidden className="project-grid absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-white/80 backdrop-blur">
                    {tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 flex items-center gap-3 font-mono text-[0.68rem] text-dim">
                    <span>{date}</span>
                    <span className="h-1 w-1 rounded-full bg-dim" />
                    <span className="flex items-center gap-1">
                      <FaRegClock /> {readTime}
                    </span>
                  </p>
                  <h3 className="mb-2 font-display text-[1.02rem] font-bold leading-snug transition-colors group-hover:text-cyan">
                    {title}
                  </h3>
                  <p className="flex-1 text-[0.82rem] leading-relaxed text-dim">{excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.8rem] font-semibold text-cyan">
                    Read article
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
