"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  showParticles?: boolean;
  variant?: 'default' | 'gradient' | 'sparkle';
}

// Particle component for background
const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([]);
  
  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 / particle.speed,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Sparkle effect component
const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Array<{ x: number; y: number; delay: number }>>([]);
  
  useEffect(() => {
    const sparkleCount = 20;
    const newSparkles = Array.from({ length: sparkleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z"
              fill="hsl(var(--primary))"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Animated text with character-by-character reveal
const AnimatedTitle = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split('');
  
  return (
    <div className="inline-flex overflow-hidden">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};

// Gradient text with animation
const GradientText = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-[length:200%_auto]"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
};

export default function HeroSection({ 
  title, 
  subtitle, 
  description, 
  showParticles = true, 
  variant = 'default' 
}: HeroSectionProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          variant === 'gradient' 
            ? 'from-primary/20 via-primary/10 to-background' 
            : 'from-primary/5 via-background to-background'
        }`} />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Particles */}
        {showParticles && <ParticleField />}
        
        {/* Sparkles for sparkle variant */}
        {variant === 'sparkle' && <SparkleEffect />}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity, scale, rotateX, rotateY, perspective: 1000 }}
      >
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute inset-0 w-20 h-20 rounded-full border border-primary/30"
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            {variant === 'sparkle' ? (
              <GradientText>{title}</GradientText>
            ) : (
              <AnimatedTitle text={title} delay={0.5} />
            )}
          </h1>
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* Description */}
        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="w-24 md:w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
        />

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-8 md:gap-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary">4+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}