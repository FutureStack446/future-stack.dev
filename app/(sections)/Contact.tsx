"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2, Sparkles, AlertCircle, ExternalLink, Clock } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo, socialLinks } from "@/app/lib/data";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [botField, setBotField] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website: botField, // Send honeypot to server for verification
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please check your inputs.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    }

    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I&apos;m currently available for freelance projects, full-time positions, and consulting.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400 uppercase tracking-wider">
                Available for new projects
              </span>
            </div>

            <div className="flex items-center gap-2 mb-8 p-3 rounded-lg bg-secondary/50 border border-border w-fit">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (GMT+1)
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              {[
                { title: "Fast Response", description: "Typically replies within 24 hours." },
                { title: "Free Discovery", description: "Book a free project review call." },
                { title: "Secure Messaging", description: "Your details stay private and protected." },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-5 rounded-2xl bg-card border border-border"
                >
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 mb-10">
              <motion.div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary transition-colors">{personalInfo.email}</a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="font-medium hover:text-primary transition-colors">{personalInfo.phone}</a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon || ExternalLink;
                  return (
                    <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 * index, type: "spring" }} whileHover={{ scale: 1.2, y: -3, rotate: 5 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-primary/5 border border-primary/10">
              <h4 className="text-xl font-bold mb-3">Need help preparing your brief?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Use the form below to tell me about your goals, budget range, and timeline. The more detail you share, the faster I can send a tailored proposal.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Project goal or business challenge</li>
                <li>Target audience or customer profile</li>
                <li>Preferred launch timeline</li>
                <li>Any existing branding or website links</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative p-8 rounded-2xl bg-card border border-border glass-strong">
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Honeypot field - Hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="bg-background/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} required className="bg-background/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required rows={6} className="bg-background/50" />
                </div>

                <Button type="submit" size="lg" variant="gradient" className="w-full gap-2" disabled={isSubmitting || isSubmitted}>
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : isSubmitted ? (
                    <><CheckCircle className="w-4 h-4" /> Message Sent!</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </Button>

                {error && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </motion.div>
                )}

                {isSubmitted && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-sm">
                    <Sparkles className="w-4 h-4" />
                    Thank you! I&apos;ll get back to you within 24 hours.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}