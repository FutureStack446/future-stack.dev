"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/lib/data";
import { ProjectCard } from "@/app/components/ProjectCard";
import { PageTransition } from "@/app/components/PageTransition";
import { Search, X, Code2, Briefcase, TrendingUp, Star, ArrowRight, ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "newest">("featured");

  const categories = useMemo(() => {
    const tags = new Set(["All"]);
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => {
        const matchesTab = activeTab === "All" || p.tags.includes(activeTab);
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "featured") {
          return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
        }
        return parseInt(b.id) - parseInt(a.id); // Assuming higher ID is newer
      });
  }, [activeTab, searchQuery, sortBy]);

  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                My Recent{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore a collection of my latest work, featuring web applications, 
                e-commerce platforms, and creative digital solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="pb-10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Search projects by name or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 rounded-full bg-card border-border hover:border-primary/50 focus:border-primary transition-all shadow-lg"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
            </div>
            <div className="flex items-center gap-2 border-l border-border pl-4 ml-2">
              <ListFilter className="w-4 h-4 text-muted-foreground" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-sm font-medium outline-none cursor-pointer text-muted-foreground hover:text-primary transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Recently Added</option>
              </select>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <motion.div 
            layout
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => { setActiveTab("All"); setSearchQuery(""); }}
                  className="mt-4 text-primary"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Code2, value: "50+", label: "Projects Completed" },
                { icon: Briefcase, value: "4+", label: "Years Experience" },
                { icon: TrendingUp, value: "100%", label: "Satisfaction Rate" },
                { icon: Star, value: "24/7", label: "Dedicated Support" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-8 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-300 shadow-xl"
                  >
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to start your project?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s collaborate to build something exceptional that drives results for your business.
            </p>
            <Button size="lg" className="rounded-full px-10 py-6 text-lg glow-primary" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}