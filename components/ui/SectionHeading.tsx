import ScrambleText from "@/components/motion/ScrambleText";
import { WordsReveal } from "@/components/motion/SplitText";
import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
  highlight,
  sub,
}: {
  label: string;
  title: string;
  highlight: string;
  sub?: string;
}) {
  return (
    <div className="mb-14 text-center">
      <p className="section-label justify-center">
        <ScrambleText text={label} />
      </p>
      <WordsReveal text={title} highlight={highlight} className="section-title" />
      {sub && (
        <Reveal delay={0.3}>
          <p className="mt-2.5 text-[0.95rem] text-dim">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
