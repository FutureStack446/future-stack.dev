"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/app/types"; // Import BlogPost type
import Link from "next/link"; // Added this import
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "@/app/lib/data";
import Image from "next/image";

export function Blog() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="blog" className="relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            {t('blog.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t('blog.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t('blog.description')}
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPost, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
              data-cursor-hover
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Read time badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-secondary/80">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1" suppressHydrationWarning>
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <motion.div
                      initial={{ x: 0, opacity: 0.5 }}
                      whileHover={{ x: 5, opacity: 1 }}
                      className="text-primary"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <Button asChild className="gap-2">
              <Link href="/blog">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{t('blog.viewAll')}</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}