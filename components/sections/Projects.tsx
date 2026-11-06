import SectionHeading from "@/components/ui/SectionHeading";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section id="projects" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="Work"
          title="Featured"
          highlight="Projects"
          sub="Live platforms I've built and shipped, plus what I'm working on now"
        />
        <ProjectsGrid />
      </div>
    </section>
  );
}
