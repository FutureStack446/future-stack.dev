"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "chars" | "lines";
}

export function AnimatedText({ text, className = "", delay = 0, type = "words" }: AnimatedTextProps) {
  const items = useMemo(() => {
    if (type === "chars") return text.split("");
    if (type === "words") return text.split(" ");
    return [text];
  }, [text, type]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-[0.25em] perspective-1000"
          style={{ transformStyle: "preserve-3d" }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Extreme typing effect component
export function TypewriterText({ 
  text, 
  className = "", 
  speed = 50,
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  speed?: number;
  delay?: number;
}) {
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed / 1000,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1"
      />
    </motion.span>
  );
}

// Glitch text effect
export function GlitchText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string; 
}) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        className="relative z-10"
        variants={{
          initial: { x: 0 },
          hover: { 
            x: [0, -2, 2, -1, 1, 0],
            transition: { duration: 0.3 }
          }
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-red-500 opacity-0 z-0"
        variants={{
          initial: { opacity: 0, x: 0 },
          hover: { 
            opacity: [0, 0.8, 0, 0.8, 0],
            x: [0, 2, -2, 1, -1, 0],
            transition: { duration: 0.3 }
          }
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-500 opacity-0 z-0"
        variants={{
          initial: { opacity: 0, x: 0 },
          hover: { 
            opacity: [0, 0.8, 0, 0.8, 0],
            x: [0, -2, 2, -1, 1, 0],
            transition: { duration: 0.3, delay: 0.05 }
          }
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
}