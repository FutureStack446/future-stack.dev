"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowLeft, Download, FileText, Award, Briefcase } from "lucide-react";
import Link from "next/link";
import { personalInfo, skills, projects } from "@/app/lib/data";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Professional Resume
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {personalInfo.name}
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              {personalInfo.title}
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Crafting digital experiences with 4+ years of expertise in modern web technologies,
              UI/UX design, and e-commerce solutions.
            </p>

            {/* Quick stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm">4+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm">50+ Projects Completed</span>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button onClick={handlePrint} className="gap-2" size="lg">
                <Download className="w-4 h-4" /> 
                Download PDF
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4" /> 
                  Back to Portfolio
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 print:p-0">
        <div className="max-w-4xl mx-auto w-full">
        {/* Navigation - Hidden when printing */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 md:mb-8 print:hidden">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-sm md:text-base">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Button>
          </Link>
          <Button onClick={handlePrint} className="gap-2 text-sm md:text-base">
            <Download className="w-4 h-4" /> Print / Save PDF
          </Button>
        </div>

        {/* Resume Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl space-y-6 md:space-y-10 print:shadow-none print:border-none print:p-0"
        >
          {/* Header */}
          <header className="text-center space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{personalInfo.name}</h1>
            <p className="text-lg md:text-xl text-primary font-medium">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Mail className="w-3 h-3 md:w-4 md:h-4" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3 h-3 md:w-4 md:h-4" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1">{personalInfo.location}</span>
            </div>
            <div className="flex justify-center gap-4 pt-2 print:hidden">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold border-b border-border pb-2">Professional Summary</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Highly skilled and passionate Web Designer & Developer with 4+ years of experience in crafting digital experiences that convert. 
              Specializing in modern frontend technologies, UI/UX design, and e-commerce solutions, I am dedicated to building 
              blazing-fast, responsive, and SEO-ready web applications.
            </p>
          </section>

          {/* Skills */}
          <section className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold border-b border-border pb-2">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {Array.from(new Set(skills.map(s => s.category))).map(category => (
                <div key={category} className="space-y-2">
                  <h3 className="font-semibold text-primary text-sm md:text-base">{category}</h3>
                  <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                    {skills.filter(s => s.category === category).map(skill => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold border-b border-border pb-2">Key Projects</h2>
            <div className="space-y-4 md:space-y-6">
              {projects.map(project => (
                <div key={project.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                    <div className="flex gap-2 print:hidden">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-primary hover:underline">
                        Live <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <footer className="text-center text-xs text-muted-foreground pt-10 border-t border-border">
            <p>© {personalInfo.name}</p>
          </footer>
        </motion.div>
      </div>
      </section>
    </div>
  );
}
