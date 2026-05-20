import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { CustomCursor } from "@/app/components/CustomCursor";
import { ParticleBackground } from "@/app/components/ParticleBackground";
import Hero from "@/app/(sections)/Hero";
import { About } from "@/app/(sections)/About";
import { Skills } from "@/app/(sections)/Skills";
import { Projects } from "@/app/(sections)/Projects";
import { Services } from "@/app/(sections)/Services";
import { Testimonials } from "@/app/(sections)/Testimonials";
import { Blog } from "@/app/(sections)/Blog";
import { Contact } from "@/app/(sections)/Contact";

export const metadata: Metadata = {
  title: "Masroor Ibrahim | FutureStack - Web Designer & Developer",
  description: "Premium web design and development services by Masroor Ibrahim. Crafting digital experiences that convert. Specializing in React, Next.js, UI/UX design, and e-commerce solutions.",
  openGraph: {
    title: "Masroor Ibrahim | FutureStack - Web Designer & Developer",
    description: "Premium web design and development services. Crafting digital experiences that convert.",
    type: "website",
    url: "https://futurestack.dev/landing",
  },
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Effects */}
      <CustomCursor />
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}