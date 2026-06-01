"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/app/components/MagneticButton";
import { AnimatedText, TypewriterText } from "@/app/components/AnimatedText";
import { personalInfo } from "@/app/lib/data";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 glow-primary">
            <Image
              src="/images/logo.jpg"
              alt="FutureStack Logo"
              fill
              sizes="96px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-primary">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi, I&apos;m <span className="text-primary font-semibold">{personalInfo.name}</span>
          </motion.p>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <AnimatedText
              text={t('hero.tagline')}
              className="justify-center"
              delay={0.5}
            />
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            <TypewriterText 
              text={t('hero.description')}
              speed={30}
              delay={1.2}
            />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button
            size="xl"
            variant="gradient"
            className="gap-2 text-lg glow-primary w-full sm:w-auto"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            data-cursor-hover
          >
            {t('hero.hire')}
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            size="xl"
            variant="outline"
            className="gap-2 text-lg w-full sm:w-auto"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            data-cursor-hover
          >
            {t('hero.projects')}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-3 mb-12 max-w-3xl"
        >
          {[
            { label: "Modern Web Design" },
            { label: "Performance First" },
            { label: "Client-Focused Solutions" },
          ].map((item) => (
            <div key={item.label} className="rounded-full border border-border bg-background/80 px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-muted-foreground shadow-sm text-center">
              {item.label}
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6"
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
            { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
            { icon: Youtube, href: personalInfo.youtube, label: "YouTube" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9, borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.5)" }}
              className="text-muted-foreground hover:text-primary transition-colors relative group"
              data-cursor-hover
            >
              <social.icon className="w-5 h-5" />
              <span className="sr-only">{social.label}</span>
              
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            data-cursor-hover
          >
            <span className="text-xs text-muted-foreground">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}