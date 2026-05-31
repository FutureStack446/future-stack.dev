"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Check, ArrowRight } from "lucide-react";
import { Service } from "@/app/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark"  // Define explicit HSLA values for animation based on app/globals.css
  const primaryHslaLight = "hsla(240, 5.9%, 10%, 1)"; // From :root --primary
  const primaryHslaDark = "hsla(0, 0%, 98%, 1)"; // From .dark --primary

  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      // Use explicit HSLA for borderColor to allow Framer Motion to animate it
      whileHover={{
        y: -10,
        scale: 1.02,
        borderColor: isDark ? primaryHslaDark : primaryHslaLight, // Use explicit HSLA values
        transition: { duration: 0.3 }
      }}
      className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Floating particles on hover */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        >
          <IconComponent className="w-7 h-7 text-primary" />
        </motion.div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors"
            >
              <motion.div 
                className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Check className="w-3 h-3 text-primary" />
              </motion.div>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}