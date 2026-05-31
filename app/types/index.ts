import React from "react";
import { LucideProps } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<LucideProps>;
  level: number;
  category: string;
}

export interface Service {
  title: string;
  description: string; // Assuming description is a string
  icon: React.ComponentType<LucideProps>; // Changed from string to React.ComponentType<LucideProps>
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  author: string;
  featured?: boolean;
  fullContent?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface NavLink {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  translationKey?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}