"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import { testimonials } from "@/app/lib/data";
import { MessageSquare } from "lucide-react";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Don&apos;t just take my word for it. Here&apos;s what industry
            leaders and business owners say about working with me.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">100%</span> of
              clients would recommend working with FutureStack
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}