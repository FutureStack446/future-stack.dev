"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app/lib/data";
import { BlogCard } from "@/app/components/BlogCard";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";
import { useLanguage } from "@/app/context/LanguageContext";
import { CalendarDays, Clock, ArrowRight, Search, Mail, Tag as TagIcon, X, SortAsc, SortDesc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/app/types"; // Import BlogPost type

export default function BlogPage() {
  const { t } = useLanguage();
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [isNewestFirst, setIsNewestFirst] = useState(true);

  const allTags = useMemo(() => {
    const tags = new Set(["All"]);
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPosts: BlogPost[] = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
        return matchesSearch && matchesTag && post.id !== featuredPost.id;
      })
      .sort((a, b) => isNewestFirst 
        ? new Date(b.date).getTime() - new Date(a.date).getTime() 
        : new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [searchQuery, activeTag, isNewestFirst, featuredPost.id]);

  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <HeroSection
          title={t('blog.hero.title')}
          subtitle={t('blog.hero.subtitle')}
          description={t('blog.hero.description')}
          labels={[t('blog.hero.label1'), t('blog.hero.label2'), t('blog.hero.label3')]}
          variant="gradient"
        />

        {/* Filters & Search */}
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:max-w-md relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 rounded-full h-12 bg-card border-border focus:border-primary shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <TagIcon className="w-4 h-4 text-muted-foreground mr-2 hidden sm:block" />
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      activeTag === tag
                        ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNewestFirst(!isNewestFirst)}
                className="text-muted-foreground"
              >
                {isNewestFirst ? <SortDesc className="w-4 h-4 mr-2" /> : <SortAsc className="w-4 h-4 mr-2" />}
                {isNewestFirst ? "Newest" : "Oldest"}
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Post Highlight */}
        {!searchQuery && activeTag === "All" && (
          <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden border border-border bg-card shadow-2xl"
            >
              <div className="grid lg:grid-cols-2 items-center">
                <div className="relative h-[300px] lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.image || ""}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
                      Featured Post
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Read Full Article <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-20">
          <motion.div 
            layout
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-20">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => { setActiveTag("All"); setSearchQuery(""); }}
                  className="mt-4 text-primary"
                >
                  Show all posts
                </Button>
              </div>
            )}
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-border text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Mail className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Stay Updated</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Subscribe to my newsletter</h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Get the latest insights on web development, design trends, and technical tutorials delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="h-14 rounded-full px-6 bg-background border-border text-lg"
                  />
                  <Button size="lg" className="h-14 rounded-full px-10 text-lg font-bold glow-primary">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-6">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}