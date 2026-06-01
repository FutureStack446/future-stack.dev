import type { Metadata } from "next";
import { LandingContent } from "@/app/components/LandingContent";

export const metadata: Metadata = {
  title: "Welcome to FutureStack | Masroor Ibrahim - Web Designer & Developer",
  description: "Experience the future of web design and development. Masroor Ibrahim crafts mesmerizing digital experiences that convert. Enter to explore premium services in React, Next.js, UI/UX design, and e-commerce solutions.",
  openGraph: {
    title: "Welcome to FutureStack | Masroor Ibrahim - Web Designer & Developer",
    description: "Crafting mesmerizing digital experiences that convert. Enter to explore our premium web design and development services.",
    type: "website",
    url: "https://future-stackdev.netlify.app/",
  },
};

export default function RootPage() {
  return <LandingContent />;
}