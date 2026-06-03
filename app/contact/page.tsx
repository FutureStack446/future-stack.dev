"use client";

import { motion } from "framer-motion";
import { Contact } from "@/app/(sections)/Contact";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";
import { Mail, MessageSquare, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection
          title={t('contact.hero.title')}
          subtitle={t('contact.hero.subtitle')}
          description={t('contact.hero.description')}
          labels={[t('contact.hero.label1'), t('contact.hero.label2'), t('contact.hero.label3')]}
          variant="sparkle"
        />

        <Contact />
      </div>
    </PageTransition>
  );
}
