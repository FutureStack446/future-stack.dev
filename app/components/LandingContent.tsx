"use client";

import React, { useState, useEffect } from 'react';
import { CustomCursor } from "@/app/components/CustomCursor";
import { ParticleBackground } from "@/app/components/ParticleBackground";
import { PageTransition } from "@/app/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "../context/LanguageContext";

export function LandingContent() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
      <motion.div className={`relative min-h-screen overflow-x-hidden flex flex-col items-center justify-start transition-colors duration-500 py-10 sm:py-16 ${
        !mounted 
          ? "bg-black" 
          : isDark
          ? "bg-black text-white" 
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}>
        {/* Global Effects */}
        <CustomCursor />
        <ParticleBackground />

        {mounted && (
          <>
        {/* Floating Stars */}
        <motion.div
          className={`absolute top-20 left-20 pointer-events-none ${isDark ? "text-yellow-400" : "text-blue-500"}`}
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Star className="w-8 h-8" />
        </motion.div>
        <motion.div
          className={`absolute top-32 right-32 pointer-events-none ${isDark ? "text-pink-400" : "text-purple-500"}`}
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          className={`absolute bottom-40 left-40 pointer-events-none ${isDark ? "text-purple-400" : "text-indigo-500"}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Star className="w-10 h-10" />
        </motion.div>


        {/* Landing Hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                y: [0, -15, 0] 
              }}
              transition={{ 
                scale: { duration: 1, type: "spring", stiffness: 100 },
                rotate: { duration: 1, type: "spring", stiffness: 100 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="flex-shrink-0"
            >
              <motion.div 
                animate={{ 
                  boxShadow: isDark 
                    ? ["0 0 20px rgba(168, 85, 247, 0.2)", "0 0 40px rgba(168, 85, 247, 0.4)", "0 0 20px rgba(168, 85, 247, 0.2)"]
                    : ["0 0 20px rgba(59, 130, 246, 0.2)", "0 0 40px rgba(59, 130, 246, 0.4)", "0 0 20px rgba(59, 130, 246, 0.2)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`relative w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden shadow-2xl ${
                isDark ? "ring-4 ring-purple-400/50" : "ring-4 ring-blue-400/50"
              }`}>
                <Image
                  src="/images/logo.jpg"
                  alt="FutureStack Logo"
                  fill
                  priority
                  sizes="(max-width: 1024px) 160px, 192px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <div className="text-center lg:text-left flex-1">
              {/* Main Welcome Message */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 break-words whitespace-normal max-w-full ${
                  isDark 
                    ? "bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
                }`}
              >
                {t('landing.title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-lg md:text-xl lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t('landing.description')}
              </motion.p>

              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full flex justify-center lg:justify-start"
              >
                <Link
                  href="/home"
                  prefetch={false}
                  className={`inline-flex w-full sm:w-auto items-center justify-center gap-4 px-6 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-base sm:text-xl hover:scale-105 transition-all duration-500 group shadow-2xl ${
                    isDark
                      ? "bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 hover:shadow-purple-500/25 border-2 border-purple-400/50"
                      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 hover:shadow-blue-500/25 border-2 border-blue-400/50"
                  }`}
                >
                  <Sparkles className="w-6 h-6 animate-pulse" />
                  {t('landing.talk')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Subtle hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className={`text-sm mt-6 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {t('landing.hint')}
              </motion.p>
            </div>
          </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mx-auto max-w-3xl mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              {t('landing.portfolio')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t('landing.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t('landing.description')}
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: t('landing.cards.services.title'),
                description: t('landing.cards.services.desc'),
              },
              {
                title: t('landing.cards.projects.title'),
                description: t('landing.cards.projects.desc'),
              },
              {
                title: t('landing.cards.insights.title'),
                description: t('landing.cards.insights.desc'),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="rounded-3xl border border-border bg-card p-8 shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects" prefetch={false} className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all">
              {t('landing.explore')}
            </Link>
            <Link href="/contact" prefetch={false} className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              {t('landing.talk')}
            </Link>
          </div>
        </div>
      </section>
      </>
      )}
    </motion.div>
  );
}