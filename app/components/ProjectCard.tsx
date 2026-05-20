"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/app/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          y: -12, 
          borderColor: "var(--primary)",
          transition: { duration: 0.3 } 
        }}
        className="group relative perspective-1000"
      >
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 preserve-3d">
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Featured Badge */}
            {project.featured && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground glow-primary">
                  Featured
                </Badge>
              </motion.div>
            )}
            
            {/* Hover Actions */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center gap-3 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="gap-2 backdrop-blur-sm bg-background/80"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                  }}
                >
                  <Maximize2 className="w-4 h-4" />
                  View Details
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                whileHover={{ opacity: 1, rotate: 0 }}
                className="text-primary"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative aspect-video md:aspect-auto h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col">
                  <div className="mb-6">
                    {project.featured && (
                      <Badge className="bg-primary text-primary-foreground mb-4">
                        Featured Project
                      </Badge>
                    )}
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="lg"
                        className="gap-2 glow-primary"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="gap-2"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}