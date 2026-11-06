import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { IntroProvider } from "@/components/motion/Intro";
import SmoothScroll from "@/components/motion/SmoothScroll";
import SpotlightTracker from "@/components/motion/SpotlightTracker";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/sections/CtaBanner";
import Experience from "@/components/sections/Experience";
import Faq from "@/components/sections/Faq";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Background from "@/components/ui/Background";
import { articles, testimonials } from "@/data/portfolio";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollExtras from "@/components/ui/ScrollExtras";

export default function Home() {
  return (
    <IntroProvider>
      <SmoothScroll />
      <SpotlightTracker />
      <Background />
      <CustomCursor />
      <ScrollExtras />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Skills />
        <Process />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        {testimonials.length > 0 && <Testimonials />}
        <Services />
        <div className="divider" />
        {articles.length > 0 && <Blog />}
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </IntroProvider>
  );
}
