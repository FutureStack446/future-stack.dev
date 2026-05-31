"use client";

import { motion } from "framer-motion";
import { Contact } from "@/app/(sections)/Contact";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";
import { Mail, MessageSquare, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection
          title="Let's Build Something Exceptional"
          subtitle="Ready to launch your next website or app? I’m here to help you turn bold ideas into polished online experiences."
          description="From fast MVPs to full-featured digital products, I create websites and apps that attract clients, build trust, and support your business goals."
          labels={["Response within 24 hours", "Available for new projects", "Flexible remote collaboration"]}
          variant="sparkle"
        />

        <Contact />
      </div>
    </PageTransition>
  );
}
