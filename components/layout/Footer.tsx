import { FaArrowUp, FaLocationDot } from "react-icons/fa6";
import { footerLinks, navLinks, profile, socials } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-[2] overflow-hidden border-t border-white/[0.08] bg-black/40">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="font-display text-2xl font-extrabold tracking-tight">
              <span className="text-cyan">{profile.shortName}</span>
              <span className="text-white/35">.dev</span>
            </a>
            <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed text-dim">
              {profile.role} building fast, scalable and beautiful web applications for startups and growing teams.
            </p>
            <p className="mt-4 flex items-center gap-2 text-[0.82rem] text-mid">
              <FaLocationDot className="text-cyan" /> {profile.location} · {profile.timezone}
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] text-[0.95rem] text-dim transition hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-cyan/5 hover:text-cyan"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-cyan">Navigate</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.88rem] text-mid transition hover:pl-1 hover:text-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-cyan">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[0.88rem] text-mid transition hover:pl-1 hover:text-cyan">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-cyan">Let&apos;s talk</h3>
            <p className="mb-4 text-[0.85rem] leading-relaxed text-dim">
              Have a project or role in mind? My inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-gradient break-all font-display text-lg font-bold hover:opacity-80"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* giant outlined wordmark */}
        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-display text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-none tracking-tighter text-transparent"
        >
          {profile.shortName}
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="font-mono text-[0.75rem] text-dim">
            © {profile.copyrightYear} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group flex items-center gap-2 font-mono text-[0.75rem] text-dim transition hover:text-cyan"
          >
            Back to top
            <FaArrowUp className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
