"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { ServiceCard } from "@/app/components/ServiceCard";
import { services } from "@/app/lib/data";
import { Zap } from "lucide-react";

export function Services() {
  return (
    <SectionWrapper id="services" className="relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            What I Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Services I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to deployment, I provide end-to-end solutions that
            help businesses grow and succeed online.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 hover:border-primary/60 transition-colors"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              Ready to start your project?{" "}
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-primary hover:underline"
              >
                Let&apos;s talk!
              </button>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}