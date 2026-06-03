"use client";

import { About } from "@/app/(sections)/About";
import { Process } from "@/app/(sections)/Process";
import { Testimonials } from "@/app/(sections)/Testimonials";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <main className="w-full min-h-screen">
        {/* Mesmerizing Hero Section */}
        <HeroSection 
          title={t('about.hero.title')}
          subtitle={t('about.hero.subtitle')}
          description={t('about.hero.description')}
          labels={[t('about.hero.label1'), t('about.hero.label2'), t('about.hero.label3')]}
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
