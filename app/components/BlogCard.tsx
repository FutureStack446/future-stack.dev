"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/app/types";
import { CalendarDays, Clock, Tag, User as UserIcon } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -5, 
        borderColor: "var(--primary)" 
      }}
      className="p-6 rounded-2xl bg-card border border-border transition-all duration-300 flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {post.image && (
          <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <h3 className="text-xl font-bold mb-2 leading-snug">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-xs mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <UserIcon className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};