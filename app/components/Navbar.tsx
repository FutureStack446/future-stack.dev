"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/app/lib/data";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { MagneticButton } from "@/app/components/MagneticButton";
import { Download, Menu, X, Circle } from "lucide-react";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on current pathname
  useEffect(() => {
    const currentLink = navLinks?.find(link => link.href === pathname);
    if (currentLink) {
      setActiveSection(currentLink.href);
    } else if (pathname === "/" || pathname === "/home") {
      setActiveSection("");
    }
  }, [pathname]);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between w-full relative">
        {/* Brand / Logo Section */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer z-10 flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              fill
              sizes="40px"
              priority
              className="object-cover rounded-full"
            />
          </div>
          <span className="font-bold text-xl hidden sm:block tracking-tight">FutureStack</span>
        </motion.div>

        {/* Navigation Links - Centered Pill */}
        <div className={cn(
          "hidden md:flex items-center gap-1 p-1 rounded-full border transition-all duration-500 mx-4",
          isScrolled 
            ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/10" 
            : "bg-background/20 backdrop-blur-md border-white/10"
        )}>
          {navLinks?.map((link) => {
            const isActive = activeSection === link.href;
            const IconComponent = link.icon || Circle;
            const label = link.translationKey ? t(link.translationKey) : link.name;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
                data-cursor-hover
              >
                {/* Premium sliding background effect */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <IconComponent className={cn(
                  "w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                
                <span className="relative z-10 hidden lg:block">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Section: Theme, Language, Resume (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-2 z-10 flex-shrink-0">
          <LanguageSwitcher />
          <ThemeToggle />

          <Link href={personalInfo?.resumeUrl || "#"} target="_blank" className="hidden md:inline-flex" prefetch={true}>
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm glow-primary hover:scale-105 transition-all">
              <Download className="w-4 h-4" />
              {t('nav.resume')}
            </div>
          </Link>

          {/* Hamburger Toggle Button */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden text-foreground hover:text-primary transition-colors focus:outline-none relative z-[110]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 mt-2 mx-6 md:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
              {navLinks?.map((link) => {
                const IconComponent = link.icon || Circle;
                const isActive = activeSection === link.href;
                const label = link.translationKey ? t(link.translationKey) : link.name;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-2xl text-base font-medium transition-all",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <IconComponent className="w-5 h-5" />
                    {label}
                  </Link>
                );
              })}
              
              {/* Language Switcher in Mobile Menu */}
              <div className="flex items-center justify-center py-2">
                <LanguageSwitcher />
              </div>
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center justify-center py-2">
                <ThemeToggle />
              </div>
              
              <div className="h-px bg-border/50 my-2" />
              
              <Link
                href={personalInfo?.resumeUrl || "#"}
                target="_blank"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20"
              >
                <Download className="w-5 h-5" />
                {t('nav.resume')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}