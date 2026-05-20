"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { processSteps } from "@/app/lib/data";
import { cn } from "@/app/lib/utils";

export function Process() {
  return (
    <SectionWrapper id="process" className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How I Bring Your Ideas To Life
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
          
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center group"
              >
                <motion.div className="mb-6 mx-auto w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center relative z-10 group-hover:border-primary/50 transition-colors duration-500 shadow-xl shadow-primary/5" whileHover={{ borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.5)" }}>
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <Icon className="w-8 h-8 text-primary relative z-10" />
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center border-4 border-background">
                    0{index + 1}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}