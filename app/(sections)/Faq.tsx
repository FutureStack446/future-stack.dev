"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { faqs } from "@/app/lib/data";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/app/lib/utils";

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen ? "bg-card border-primary/30 shadow-lg shadow-primary/5" : "bg-card/50 border-border"
                )}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                    )}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-bold md:text-lg">{faq.question}</span>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed pl-[3.5rem]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div className="absolute inset-0 rounded-2xl border border-transparent" whileHover={{ borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.2)" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}