"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Sparkles, Link as LinkIcon, Circle } from "lucide-react";
import { personalInfo, socialLinks } from "@/app/lib/data";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 1, y: 0 }} // Ensure visible
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left flex items-center gap-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image
                src="/images/logo.jpg"
                alt="FutureStack Logo"
                fill
                sizes="48px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                FutureStack
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {personalInfo.title}
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon || Circle;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 relative group"
                  data-cursor-hover
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="sr-only">{link.name}</span>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors glow-primary"
            data-cursor-hover
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p className="flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> {t('footer.by')} {personalInfo.name}
          </p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <p>© {new Date().getFullYear()} FutureStack. {t('footer.rights')}</p>
          </div>
          {personalInfo.phone && (
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              {personalInfo.phone}
            </a>
          )}
        </motion.div>
      </div>
    </footer>
  );
}