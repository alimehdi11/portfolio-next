/**
 * All portfolio content lives here.
 * Edit this file to update text, projects, experience or links —
 * no component changes required.
 *
 * Sections with an empty list (testimonials, articles) are hidden
 * automatically — add real entries and they reappear.
 */
import type { IconType } from "react-icons";
import {
  FaArrowUpRightFromSquare,
  FaBootstrap,
  FaBug,
  FaChalkboardUser,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEarthAmericas,
  FaEnvelope,
  FaGaugeHigh,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaKey,
  FaLaptopCode,
  FaLeaf,
  FaLayerGroup,
  FaMagnifyingGlass,
  FaNodeJs,
  FaPenRuler,
  FaPhone,
  FaPlug,
  FaPython,
  FaReact,
  FaRocket,
  FaSeedling,
  FaServer,
  FaShieldHalved,
  FaSitemap,
  FaWind,
  FaWhatsapp,
} from "react-icons/fa6";

export const LiveIcon = FaArrowUpRightFromSquare;

export const profile = {
  name: "Muhammad Khizar",
  shortName: "KHIZAR",
  role: "Full-Stack Software Engineer",
  tagline: "React.js · Node.js · REST APIs",
  email: "ykhizar65@gmail.com",
  phone: "+92 317 0128852",
  location: "Hyderabad, Sindh, Pakistan",
  availability: "Open to full-time & freelance roles",
  timezone: "PKT (UTC+5)",
  siteUrl: "https://www.khizarportfolio.com",
  copyrightYear: 2026,
  resumeUrl: "#", // put your CV at public/resume.pdf and set this to "/resume.pdf"
  // Hero heading — three lines (middle one gets the gradient)
  headline: ["Full-Stack", "MERN & PERN", "Engineer"] as const,
  intro:
    "building responsive React.js front-ends and RESTful Node.js/Express back-ends — and shipping live, user-facing platforms used by real organizations.",
  seoDescription:
    "Muhammad Khizar — Full-Stack Software Engineer building React.js front-ends and Node.js/Express REST APIs with the MERN and PERN stacks.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export type Social = { label: string; handle: string; href: string; icon: IconType };

export const socials: Social[] = [
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: "Phone", handle: profile.phone, href: "tel:+923170128852", icon: FaPhone },
  { label: "WhatsApp", handle: "Chat on WhatsApp", href: "https://wa.me/923170128852", icon: FaWhatsapp },
  // Add your real profiles here (import FaLinkedin from "react-icons/fa6" for LinkedIn), e.g.:
  // { label: "GitHub", handle: "github.com/your-username", href: "https://github.com/your-username", icon: FaGithub },
  // { label: "LinkedIn", handle: "linkedin.com/in/your-profile", href: "https://linkedin.com/in/your-profile", icon: FaLinkedin },
];

export const heroStats = [
  { value: 1, suffix: "+", label: "Years Pro Exp" },
  { value: 2, suffix: "", label: "Live Platforms" },
  { value: 2, suffix: "+", label: "Years Teaching" },
];

export const heroBadges: { label: string; icon: IconType; color: string; position: string }[] = [
  { label: "Node.js", icon: FaNodeJs, color: "#68d391", position: "top-[5%] -left-[18%]" },
  { label: "PostgreSQL", icon: FaDatabase, color: "#60a5fa", position: "top-[30%] -right-[12%]" },
  { label: "Express", icon: FaServer, color: "#a78bfa", position: "bottom-[25%] -left-[20%]" },
  { label: "MongoDB", icon: FaLeaf, color: "#68d391", position: "bottom-[5%] -right-[8%]" },
];

export const about = {
  paragraphs: [
    "I'm Muhammad Khizar, a Full-Stack Developer with 1+ years of professional, production experience. I build responsive front-ends with React.js and RESTful back-ends with Node.js and Express, working across both the MERN and PERN stacks.",
    "I'm comfortable with relational and NoSQL databases (PostgreSQL, MongoDB), work daily with Git/GitHub workflows and code reviews in a fully remote team, and have a track record of shipping and maintaining live platforms. I'm also pursuing a Master's in Cyber Security to bring a security-conscious approach to everything I build.",
  ],
  checklist: [
    "Production experience with MERN & PERN stacks",
    "REST API design, development & integration",
    "Git/GitHub workflows & code reviews",
    "Remote collaboration & on-time delivery",
  ],
  philosophy: [
    { title: "End-to-end ownership", text: "From React UI to REST API to database — I build and connect every layer.", icon: FaSitemap, color: "#00f5d4" },
    { title: "Solid data layer", text: "Clean data models and queries across MongoDB and PostgreSQL.", icon: FaDatabase, color: "#7c3aed" },
    { title: "Performance & reliability", text: "Debugging production issues and making apps faster for real users.", icon: FaGaugeHigh, color: "#60a5fa" },
    { title: "Security mindset", text: "Authentication, authorization, and a Cyber Security background.", icon: FaShieldHalved, color: "#f472b6" },
  ],
  // Self-assessed — adjust these to what feels right to you
  proficiency: [
    { name: "React.js / JavaScript", value: 90, gradient: "linear-gradient(90deg,#00f5d4,#60a5fa)" },
    { name: "Node.js / Express", value: 85, gradient: "linear-gradient(90deg,#10b981,#06b6d4)" },
    { name: "PostgreSQL / MongoDB", value: 80, gradient: "linear-gradient(90deg,#7c3aed,#60a5fa)" },
    { name: "HTML / CSS / Tailwind", value: 90, gradient: "linear-gradient(90deg,#3b82f6,#7c3aed)" },
    { name: "TypeScript", value: 75, gradient: "linear-gradient(90deg,#f59e0b,#ef4444)" },
  ],
};

export const marquee: { label: string; icon: IconType; color: string }[] = [
  { label: "React.js", icon: FaReact, color: "#61dafb" },
  { label: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { label: "TypeScript", icon: FaCode, color: "#3178c6" },
  { label: "Node.js", icon: FaNodeJs, color: "#68d391" },
  { label: "Express.js", icon: FaServer, color: "#a78bfa" },
  { label: "PostgreSQL", icon: FaDatabase, color: "#60a5fa" },
  { label: "MongoDB", icon: FaLeaf, color: "#68d391" },
  { label: "REST APIs", icon: FaPlug, color: "#00f5d4" },
  { label: "Tailwind CSS", icon: FaWind, color: "#38bdf8" },
  { label: "Bootstrap", icon: FaBootstrap, color: "#a78bfa" },
  { label: "HTML5", icon: FaHtml5, color: "#f97316" },
  { label: "CSS3", icon: FaCss3Alt, color: "#3b82f6" },
  { label: "Git", icon: FaGitAlt, color: "#f05032" },
  { label: "GitHub", icon: FaGithub, color: "#e2e8f0" },
  { label: "Python", icon: FaPython, color: "#facc15" },
  { label: "Auth & JWT", icon: FaKey, color: "#f472b6" },
];

export const skillGroups: {
  title: string; subtitle: string; icon: IconType; color: string; tags: string[]; desc: string;
}[] = [
  {
    title: "Frontend", subtitle: "UI & Client-side", icon: FaReact, color: "#61dafb",
    tags: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    desc: "Responsive, component-based interfaces with reusable React components and smooth UX.",
  },
  {
    title: "Backend", subtitle: "Server & APIs", icon: FaNodeJs, color: "#68d391",
    tags: ["Node.js", "Express.js", "REST APIs", "API Integration", "Authentication", "Authorization"],
    desc: "RESTful services that connect cleanly to the front-end, with secure auth built in.",
  },
  {
    title: "Data & Tools", subtitle: "Databases & Workflow", icon: FaDatabase, color: "#a78bfa",
    tags: ["PostgreSQL", "MongoDB", "MySQL (adaptable)", "Git", "GitHub", "Debugging", "Performance", "Python (basic)"],
    desc: "Relational and NoSQL data modeling, version control, and production troubleshooting.",
  },
];

export const projectFilters = ["All", "Live", "In Development"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  title: string;
  category: string;
  status: Exclude<ProjectFilter, "All">;
  desc: string;
  tags: string[];
  icon: IconType;
  gradient: string;
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Carbon Accounting Platform", category: "Climate-Tech", status: "Live", icon: FaEarthAmericas,
    gradient: "linear-gradient(135deg,#065f46,#0c4a6e)",
    desc: "Full-stack platform that helps organizations calculate and monitor their carbon emissions. I built the UI, the emission calculations, and the API integrations.",
    tags: ["React.js", "Node.js", "REST APIs", "Full-Stack"],
    liveUrl: "https://carbonv2.tealclimate.com",
  },
  {
    title: "Qanat — Crop Monitoring", category: "Agri-Tech", status: "Live", icon: FaSeedling,
    gradient: "linear-gradient(135deg,#3f6212,#134e4a)",
    desc: "Agriculture platform for farmers to manage their crops and fields. I built the frontend, the backend APIs, and the data-handling features.",
    tags: ["React.js", "Node.js", "REST APIs", "Full-Stack"],
    liveUrl: "https://platform.qanat.ca",
  },
  {
    title: "MERN & PERN Applications", category: "Full-Stack", status: "In Development", icon: FaLayerGroup,
    gradient: "linear-gradient(135deg,#312e81,#1e293b)",
    desc: "Multiple full-stack applications in progress, covering frontend development, backend APIs, database integration, and authentication.",
    tags: ["MongoDB", "PostgreSQL", "Express", "Auth"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer", company: "Teal Climate · Remote", period: "Sep 2024 — Present",
    points: [
      "Built and maintained full-stack web applications using the MERN and PERN stacks",
      "Developed React.js user interfaces and integrated REST APIs end-to-end",
      "Managed data models and queries across MongoDB and PostgreSQL",
      "Collaborated with a fully remote team on deployment, code reviews, and delivery",
      "Debugged production issues and improved application performance",
    ],
  },
  {
    role: "React.js Intern (Frontend Developer)", company: "Bitspro", period: "Jan 2024 — May 2024",
    points: [
      "Built responsive user interfaces and reusable components in React.js",
      "Integrated APIs for dynamic, real-time data rendering",
      "Improved UI performance and user experience; fixed bugs and shipped feature enhancements",
      "Collaborated with the engineering team on frontend development tasks",
    ],
  },
  {
    role: "Web Development Instructor", company: "Master G Multimedia", period: "Oct 2022 — Jan 2025",
    points: [
      "Taught web development fundamentals and the MERN stack to students",
      "Guided learners through real project builds and hands-on coding practice",
      "Delivered structured training and mentoring sessions",
    ],
  },
  {
    role: "Computer Science Teacher", company: "Tabs School", period: "Sep 2024 — Oct 2024",
    points: [
      "Taught foundational computer science and programming concepts",
      "Coached students on problem-solving and logical thinking",
    ],
  },
];

/** Three highlight cards shown under the career timeline. */
export const certifications = [
  { title: "2 Live Platforms", sub: "Shipped to production", icon: FaRocket, color: "#f59e0b" },
  { title: "MERN + PERN", sub: "Both stacks in production", icon: FaLayerGroup, color: "#60a5fa" },
  { title: "Teaching & Mentoring", sub: "2+ years teaching MERN", icon: FaChalkboardUser, color: "#a78bfa" },
];

export const education = [
  {
    degree: "Master's in Cyber Security", school: "University of Mehran", period: "Expected Jan 2026",
    note: "Bringing a security-conscious approach to application development.",
  },
  {
    degree: "BS, Information Technology", school: "University of Sindh", period: "2021 — 2024",
    note: "Foundations in software development, databases, and networking.",
  },
];

export const services = [
  { title: "Full-Stack Web Apps", desc: "End-to-end web applications with React.js, Node.js/Express, and MongoDB or PostgreSQL.", icon: FaLaptopCode, color: "#00f5d4" },
  { title: "REST API Development", desc: "Clean, secure REST APIs with authentication — and smooth integration with your front-end.", icon: FaPlug, color: "#60a5fa" },
  { title: "React Front-ends", desc: "Responsive, reusable React interfaces built with Tailwind CSS or Bootstrap.", icon: FaReact, color: "#a78bfa" },
  { title: "Bug Fixing & Performance", desc: "Tracking down production issues and making slow pages and queries faster.", icon: FaBug, color: "#f472b6" },
];

export const processSteps = [
  { step: "01", title: "Understand", icon: FaMagnifyingGlass, desc: "We talk through your goals, users, and requirements, and agree on a clear scope and timeline." },
  { step: "02", title: "Plan", icon: FaPenRuler, desc: "I map out the screens, data models, and API endpoints before writing code." },
  { step: "03", title: "Build", icon: FaCode, desc: "Regular progress updates, clean code in Git, and working features you can review early." },
  { step: "04", title: "Ship & Support", icon: FaRocket, desc: "Deployment, testing in production, bug fixes, and clear handover notes." },
];

export const contactStatus = [
  ["status", "Open to new opportunities"],
  ["location", profile.location],
  ["timezone", profile.timezone],
  ["response", "Within 24 hours"],
] as const;

export const inquiryTypes = ["Full-time Opportunity", "Freelance Project", "Internship / Contract", "Other"];
export const budgetRanges = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+", "Not sure yet"];

/**
 * Add real client / manager / student testimonials here.
 * The Testimonials section stays hidden while this list is empty.
 * Example:
 * { quote: "…", name: "Jane Doe", role: "Engineering Lead", company: "Teal Climate", rating: 5 },
 */
export const testimonials: { quote: string; name: string; role: string; company: string; rating: number }[] = [];

/**
 * Add articles you've written here (with real links).
 * The Blog section stays hidden while this list is empty.
 */
export const articles: {
  title: string; excerpt: string; tag: string; date: string; readTime: string; href: string; gradient: string;
}[] = [];

export const faqs = [
  { q: "What do you work with?", a: "Mainly React.js on the front-end and Node.js/Express on the back-end, with PostgreSQL or MongoDB for data — the MERN and PERN stacks. I also use TypeScript, Tailwind CSS, Bootstrap, and Git/GitHub every day." },
  { q: "Are you open to full-time roles?", a: "Yes. I'm open to full-time positions (remote or on-site) as well as freelance and contract work." },
  { q: "Do you work remotely?", a: "Yes — I currently work with a fully remote team, collaborating on code reviews, deployments, and delivery across time zones." },
  { q: "Can you work on an existing codebase?", a: "Absolutely. A lot of my work is maintaining live platforms — fixing production bugs, improving performance, and adding features to existing apps." },
  { q: "How does your security background help?", a: "I'm pursuing a Master's in Cyber Security, so I pay close attention to authentication, authorization, input validation, and keeping user data safe." },
  { q: "How do we get started?", a: "Send a message through the form below or email me with a short description of what you need. I usually reply within 24 hours." },
];

export const footerLinks = {
  services: services.map((s) => s.title),
};
