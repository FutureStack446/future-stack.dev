"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { SkillBar } from "@/app/components/SkillBar";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";
import { skills } from "@/app/lib/data";
import { useLanguage } from "@/app/context/LanguageContext";
import {
  Code2,
  Briefcase,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";

const categories = Array.from(new Set(skills.map((s) => s.category)));

const featuredSkills = [
  { name: "React.js", level: 90, projects: 12, color: "#61DAFB" },
  { name: "Next.js", level: 85, projects: 8, color: "#000000" },
  { name: "JavaScript", level: 95, projects: 15, color: "#F7DF1E" },
  { name: "Tailwind CSS", level: 92, projects: 10, color: "#06B6D4" },
  { name: "TypeScript", level: 80, projects: 6, color: "#3178C6" },
  { name: "Figma", level: 88, projects: 7, color: "#F24E1E" },
];

const tools = [
  { name: "VS Code", category: "Editor" },
  { name: "Figma", category: "Design" },
  { name: "Photoshop", category: "Design" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Collaboration" },
  { name: "Chrome DevTools", category: "Development" },
  { name: "npm", category: "Package Manager" },
  { name: "Postman", category: "API Testing" },
  { name: "Notion", category: "Productivity" },
  { name: "Slack", category: "Communication" },
];

const certifications = [
  { name: "Frontend Development", issuer: "FreeCodeCamp", year: "2023" },
  { name: "JavaScript Algorithms", issuer: "FreeCodeCamp", year: "2023" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2022" },
];

export default function SkillsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection
          title={t('skills.hero.title')}
          subtitle={t('skills.hero.subtitle')}
          description={t('skills.hero.description')}
          labels={[t('skills.hero.label1'), t('skills.hero.label2'), t('skills.hero.label3')]}
          variant="gradient"
        />

        {/* Featured Skills Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Top Skills
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Featured Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My most proficient technologies with real-world project
                experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${skill.color}20`,
                        color: skill.color,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full mb-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>{skill.projects} projects</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SectionWrapper id="skills" className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Skills by Category
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Explore my skills organized by category. Click on a category to
                see the specific technologies.
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
                  type="button"
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

            {/* Tech Stack Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-20 overflow-hidden"
            >
              <p className="text-center text-sm text-muted-foreground mb-8">
                Technologies I work with
              </p>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
                <motion.div
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-12 items-center"
                >
                  {[...Array(2)].map((_, setIndex) => (
                    <div
                      key={setIndex}
                      className="flex gap-12 items-center shrink-0"
                    >
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "JavaScript",
                        "Tailwind",
                        "Node.js",
                        "HTML5",
                        "CSS3",
                        "Figma",
                        "Git",
                      ].map((tech) => (
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

        {/* Tools & Software Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Arsenal
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Tools & Software
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The tools I use to bring ideas to life efficiently and
                professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 text-center"
                >
                  <h3 className="font-medium">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tool.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Achievements
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Continuous learning and professional certifications.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 mb-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Code2, value: "20+", label: "Technologies" },
                { icon: Briefcase, value: "15+", label: "Projects Completed" },
                { icon: TrendingUp, value: "4+", label: "Years Experience" },
                { icon: Star, value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-card border border-border"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}