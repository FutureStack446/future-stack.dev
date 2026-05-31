"use client";

import { motion } from "framer-motion";
import { Award, Users, Briefcase, Coffee, MapPin, Phone, Mail, LucideIcon } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { personalInfo, skills } from "@/app/lib/data";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Briefcase, value: "4+", label: "about.stats.experience" },
  { icon: Users, value: "15+", label: "about.stats.clients" },
  { icon: Award, value: "4", label: "about.stats.projects" },
  { icon: Coffee, value: "∞", label: "about.stats.coffee" },
];

export function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                {t('about.title')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t('about.description')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Hi, I&apos;m <strong className="text-foreground">{personalInfo.name}</strong>, the creative mind behind FutureStack. 
                I specialize in building modern, high-performing websites and web applications that help businesses 
                stand out in the digital landscape.
              </p>
              <p>
                From luxury e-commerce platforms like <strong>Masib Collection</strong> to futuristic tech stores 
                like <strong>ElectroGadget</strong>, I bring ideas to life with clean code and stunning design. 
                My approach combines technical excellence with strategic thinking to deliver results.
              </p>
              <p>
                I work with clients worldwide to create digital experiences that convert visitors into customers. When I&apos;m not coding, you&apos;ll find me exploring new design trends, learning emerging technologies, or mentoring aspiring developers.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 space-y-3"
            >
              <motion.div className="flex items-center gap-3 text-sm p-4 rounded-xl bg-card border border-border" whileHover={{ x: 5, borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.2)" }}>
                <MapPin className="w-4 h-4 text-primary" />
                <span>{personalInfo.location || "Remote-first • Worldwide"}</span>
              </motion.div>
              <motion.div className="flex items-center gap-3 text-sm p-4 rounded-xl bg-card border border-border" whileHover={{ x: 5, borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.2)" }}>
                <Phone className="w-4 h-4 text-primary" />
                <span>{personalInfo.phone}</span>
              </motion.div>
              <motion.div className="flex items-center gap-3 text-sm p-4 rounded-xl bg-card border border-border" whileHover={{ x: 5, borderColor: "hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness), 0.2)" }}>
                <Mail className="w-4 h-4 text-primary" />
                <span>{personalInfo.email}</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, borderColor: { duration: 0.3 } }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="text-center p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  </motion.div>

                  <motion.div 
                    className="text-2xl font-bold text-foreground"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">{t(stat.label)}</div>
                </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl rotate-6"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -rotate-3"
                animate={{ rotate: [-3, -5, -3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Main Card */}
              <div className="relative bg-card border border-border rounded-3xl p-8 h-full flex flex-col justify-between glass-strong">
                <div>
                  <motion.div 
                    className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                      <Image
                        src="/images/logo.jpg"
                        alt="FutureStack Logo"
                        fill
                        sizes="80px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                  <p className="text-primary font-medium mb-4">{personalInfo.title}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {personalInfo.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm">Available for freelance</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 5).map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}