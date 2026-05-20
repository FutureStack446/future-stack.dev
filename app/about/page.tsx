"use client";

import { About } from "@/app/(sections)/About";
import { Process } from "@/app/(sections)/Process";
import { Testimonials } from "@/app/(sections)/Testimonials";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen">
        {/* Mesmerizing Hero Section */}
        <HeroSection 
          title="About FutureStack"
          subtitle="Discover the story, mission, and the person behind the digital craft."
          description="Passionate about creating exceptional digital experiences that drive results and exceed expectations."
          variant="sparkle"
        />

        {/* Section Components */}
        <About />
        <Process />
        <Testimonials />
      </main>
    </PageTransition>
  );
}
