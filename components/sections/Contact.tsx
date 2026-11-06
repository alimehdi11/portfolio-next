import { contactStatus, socials } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative z-[2] scroll-mt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          label="Contact"
          title="Let's"
          highlight="Build Together"
          sub="Got a project in mind? Let's make it happen."
        />
        <Reveal className="glass-card spotlight border-spin grid gap-12 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr] lg:p-12">
          <div>
            <h3 className="mb-3 font-display text-[1.8rem] font-extrabold">Start a Conversation</h3>
            <p className="mb-8 text-[0.9rem] leading-[1.7] text-dim">
              Open for freelance projects, full-time opportunities, and technical consultations. I respond within 24
              hours.
            </p>
            <ul className="flex flex-col gap-3">
              {socials.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-3 rounded-[10px] border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-[0.85rem] text-mid transition hover:translate-x-1 hover:border-cyan/30 hover:bg-cyan/[0.04] hover:text-cyan"
                  >
                    <Icon className="w-5 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-125" aria-hidden />
                    <span className="sr-only">{label}: </span>
                    <span className="break-all">{handle}</span>
                  </a>
                </li>
              ))}
            </ul>
            <dl className="mt-8 rounded-xl border border-cyan/15 bg-cyan/[0.04] p-5 font-mono text-[0.78rem] leading-[1.8] text-dim">
              {contactStatus.map(([k, v]) => (
                <div key={k}>
                  <dt className="inline text-cyan">{k}:</dt> <dd className="inline">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
