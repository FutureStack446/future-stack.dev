"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative overflow-hidden w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
      data-cursor-hover
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: -20, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 20, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="w-5 h-5 text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -20, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 20, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="w-5 h-5 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark 
            ? "0 0 20px rgba(255,255,255,0.1)" 
            : "0 0 20px rgba(0,0,0,0.1)"
        }}
        transition={{ duration: 0.5 }}
      />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

// Extreme theme toggle with particles
export function ExtremeThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full bg-secondary overflow-hidden"
      whileTap={{ scale: 0.95 }}
      data-cursor-hover
    >
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 36 : 4,
          backgroundColor: theme === "dark" ? "#1a1a2e" : "#fbbf24",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="moon-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <Moon className="w-3 h-3 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <Sun className="w-3 h-3 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Stars for dark mode */}
      {theme === "dark" && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
}