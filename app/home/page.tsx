import type { Metadata } from "next";
import { CustomCursor } from "@/app/components/CustomCursor";
import { ParticleBackground } from "@/app/components/ParticleBackground";
import Hero from "@/app/(sections)/Hero";
import { About } from "@/app/(sections)/About";
import { Skills } from "@/app/(sections)/Skills";
import { Projects } from "@/app/(sections)/Projects";
import { Services } from "@/app/(sections)/Services";
import { Process } from "@/app/(sections)/Process";
import { Testimonials } from "@/app/(sections)/Testimonials";
import { Blog } from "@/app/(sections)/Blog";
import { Faq } from "@/app/(sections)/Faq";
import { Contact } from "@/app/(sections)/Contact";
import { PageTransition } from "@/app/components/PageTransition";

export const metadata: Metadata = {
  title: "Home | Masroor Ibrahim | FutureStack - Web Designer & Developer",
  description: "Welcome to FutureStack - Premium web design and development services by Masroor Ibrahim. Crafting digital experiences that convert. Specializing in React, Next.js, UI/UX design, and e-commerce solutions.",
  openGraph: {
    title: "Home | Masroor Ibrahim | FutureStack - Web Designer & Developer",
    description: "Premium web design and development services. Crafting digital experiences that convert.",
    type: "website",
    url: "https://future-stackdev.netlify.app/home",
  },
};

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Global Effects */}
        <CustomCursor />
        <ParticleBackground />

        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>
    </PageTransition>
  );
}