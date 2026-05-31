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
          title="Welcome to FutureStack"
          subtitle="Where bold ideas become polished digital experiences."
          description="I build scalable websites, intuitive interfaces, and unforgettable brand journeys that help businesses and founders win online."
          labels={["Mission-driven web development", "Design-led brand stories", "Growth-focused digital products"]}
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
