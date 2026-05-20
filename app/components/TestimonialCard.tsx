"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/app/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        borderColor: "var(--primary)",
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 rounded-2xl bg-card border border-border transition-all duration-500 overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
      
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-300" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            <Star
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-muted-foreground"
              }`}
            />
          </div>
        ))}
      </div>

      <p className="text-foreground/90 mb-6 leading-relaxed text-sm italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{testimonial.name}</h4>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}