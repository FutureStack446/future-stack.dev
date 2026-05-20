"use client";

import { motion } from "framer-motion";
import { Contact } from "@/app/(sections)/Contact";
import { PageTransition } from "@/app/components/PageTransition";
import { Mail, MessageSquare, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Let's Connect
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Get in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                  Touch
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Ready to start your next project? Have a question? 
                I'd love to hear from you. Let's create something amazing together.
              </p>

              {/* Quick contact info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 md:gap-8"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base">Available for new projects</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Contact />
      </div>
    </PageTransition>
  );
}
