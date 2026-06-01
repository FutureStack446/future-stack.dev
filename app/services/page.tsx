"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Services } from "@/app/(sections)/Services";
import { Process } from "@/app/(sections)/Process";
import { Faq } from "@/app/(sections)/Faq";
import { Contact } from "@/app/(sections)/Contact";
import { PageTransition } from "@/app/components/PageTransition";
import HeroSection from "@/app/components/HeroSection";
import Link from "next/link";

import { 
  Check, 
  Zap, 
  Shield, 
  Trophy, 
  Headphones, 
  ArrowRight,
  Sparkles,
  BarChart,
  Code,
  Layout,
  X, 
  LucideIcon, // Keep LucideIcon type import for other potential uses if needed
  Star 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { testimonials } from "@/app/lib/data";


// Constants for better readability and maintainability
const TESTIMONIAL_INTERVAL_MS = 7000;
const NUMBER_OF_STARS = 5;

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: any;
  popular: boolean;
}

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

const packages: Package[] = [
  {
    name: "Starter",
    price: "From $499",
    description: "Perfect for small businesses and personal brands.",
    features: [
      "Custom 5-Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Linking",
      "1 Month Support"
    ],
    icon: Code,
    popular: false
  },
  {
    name: "Professional",
    price: "From $999",
    description: "Ideal for growing businesses needing more power.",
    features: [
      "Up to 10 Pages",
      "Advanced UI/UX Design",
      "E-commerce Functionality",
      "SEO Optimization",
      "CMS Integration",
      "3 Months Support",
      "Performance Optimization"
    ],
    icon: Zap,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for complex requirements.",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "Full API Integration",
      "Dedicated Database",
      "Premium Security",
      "Priority Support",
      "Monthly Maintenance"
    ],
    icon: Trophy,
    popular: false
  }
];

const benefits: Benefit[] = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security-first mindset using the latest industry standards and robust architecture."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal assistance throughout the development cycle and comprehensive post-launch care."
  },
  {
    icon: BarChart,
    title: "Performance Driven",
    description: "Highly optimized for speed and high scores on Core Web Vitals to boost your search rankings."
  },
  {
    icon: Layout,
    title: "Modern UI/UX",
    description: "Clean, intuitive, and high-converting designs that build trust and engage your target audience."
  }
];

// Testimonial Slider Component
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { 
      setCurrentIndex((prevIndex) => 
        testimonials.length > 0 ? (prevIndex + 1) % testimonials.length : 0
      );
    }, TESTIMONIAL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex]; 

  if (!currentTestimonial) return null;

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }} // Ensure visible by default
          animate={{ opacity: 1, y: 0 }} // Ensure visible by default
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from businesses that have partnered with FutureStack to achieve their digital goals.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-lg"
          >
            <div className="flex justify-center mb-4"> 
              {[...Array(NUMBER_OF_STARS)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg italic text-muted-foreground mb-6">
              "{currentTestimonial.content}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                <span className="text-primary font-bold text-lg">
                  {currentTestimonial.name?.[0] ?? "?"}
                </span>
              </div>
              <div>
                <h4 className="font-bold">{currentTestimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Package Comparison Table Component
const PackageComparisonTable = () => {
  // useMemo ensures this only runs once, or when the 'packages' array changes
  const allUniqueFeatures = useMemo(() => 
    Array.from(new Set(packages.flatMap(pkg => pkg.features))), 
  []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }} // Ensure visible by default
          animate={{ opacity: 1, y: 0 }} // Ensure visible by default
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Compare
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A detailed breakdown of features across our service tiers to help you make an informed decision.
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
          <table className="min-w-full w-full text-left text-xs sm:text-sm text-muted-foreground">
            <thead className="bg-card/50 uppercase">
              <tr>
                <th scope="col" className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-foreground text-xs sm:text-sm">Feature</th>
                {packages.map((pkg) => (
                  <th 
                    key={pkg.name} 
                    scope="col" 
                    className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-foreground text-center text-xs sm:text-sm"
                  >
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allUniqueFeatures.map((featureName, index) => (
                <motion.tr
                  key={featureName}
                  initial={{ opacity: 1, y: 0 }} // Ensure visible by default
                  animate={{ opacity: 1, y: 0 }} // Ensure visible by default
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-background"}`}
                >
                  <th scope="row" className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-foreground break-words text-left text-xs sm:text-sm">
                    {featureName}
                  </th>
                  {packages.map((pkg) => (
                    <td 
                      key={`${pkg.name}-${featureName}`} 
                      className="px-3 sm:px-6 py-3 sm:py-4 text-center"
                    >
                      {pkg.features.includes(featureName) ? (
                        <div className="flex justify-center">
                          <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" aria-hidden="true" />
                          <span className="sr-only">Included in {pkg.name}</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <X className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground/30" aria-hidden="true" />
                          <span className="sr-only">Not included in {pkg.name}</span>
                        </div>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Bespoke Development, Designed to Convert"
        subtitle="Solutions crafted for brands that need a polished digital presence and measurable growth."
        description="From launch-ready websites to high-performance web applications, every project is built to impress visitors and drive business value."
        labels={["Custom web products", "E-commerce growth", "Conversion-focused design"]}
        variant="sparkle"
      />

      {/* Main Services Grid */}
      <Services />

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }} // Ensure visible by default
            animate={{ opacity: 1, y: 0 }} // Ensure visible by default
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Partner With FutureStack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 1, y: 0 }} // Ensure visible by default
                  animate={{ opacity: 1, y: 0 }} // Ensure visible by default
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment/Packages Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }} // Ensure visible by default
            animate={{ opacity: 1, y: 0 }} // Ensure visible by default
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Service Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent investment models designed to suit businesses at different stages of growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 1, y: 0 }} // Ensure visible by default
                  animate={{ opacity: 1, y: 0 }} // Ensure visible by default
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 sm:p-8 rounded-3xl bg-card border flex flex-col h-full ${
                    pkg.popular 
                      ? "border-primary shadow-2xl shadow-primary/10 lg:scale-[1.05] z-10" 
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full mt-auto" 
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Package Comparison Table */}
      <div className="overflow-x-auto">
        <PackageComparisonTable />
      </div>

      {/* Workflow Process */}
      <Process />

      {/* Questions */}
      <Faq />

      {/* Contact Form */}
      <Contact />
    </main>
  );
}