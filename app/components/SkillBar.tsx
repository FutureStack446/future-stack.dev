"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  icon: any;
  delay?: number;
}

export function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const Icon = icon;

  return (
    <div className="group w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
          {name}
        </span>
        <motion.span
          className="text-sm font-bold text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        >
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.8 }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}