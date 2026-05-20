"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { SkillBar } from "@/app/components/SkillBar";
import { skills } from "@/app/lib/data";

const categories = Array.from(new Set(skills.map((s) => s.category)));

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit built over years of hands-on experience across multiple disciplines.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 glow-primary"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              data-cursor-hover
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
          >
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech Stack Icons Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 overflow-hidden"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">Technologies I work with</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center"
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 items-center shrink-0">
                  {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Node.js", "HTML5", "CSS3", "Figma", "Git"].map((tech, i) => (
                    <motion.span
                      key={`${setIndex}-${tech}`}
                      className="text-2xl font-bold text-muted-foreground/30 whitespace-nowrap hover:text-primary/50 transition-colors cursor-default"
                      whileHover={{ scale: 1.2, y: -5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}