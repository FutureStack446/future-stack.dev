import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/app/lib/utils";
import { personalInfo } from "@/app/lib/data";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import WhatsAppFloating from "@/app/components/WhatsAppFloating";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://future-stackdev.netlify.app"),
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    default: "Masroor Ibrahim | FutureStack - Web Designer & Developer",
    template: "%s | FutureStack",
  },
  description: "FutureStack is a portfolio and web development studio building high-performance websites, modern applications, and polished digital experiences using Next.js, React, and Tailwind CSS.",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  keywords: [
    "Masroor Ibrahim",
    "FutureStack",
    "Web Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Web Design Portfolio",
    "UI/UX Designer",
    "E-commerce Developer",
  ],
  authors: [{ name: "Masroor Ibrahim" }],
  creator: "Masroor Ibrahim",
  publisher: "FutureStack",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://future-stackdev.netlify.app",
    title: "Masroor Ibrahim | FutureStack - Web Designer & Developer",
    description: "FutureStack is a portfolio and web development studio building high-performance digital experiences that help businesses grow.",
    siteName: "FutureStack",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "FutureStack - Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masroor Ibrahim | FutureStack - Web Designer & Developer",
    description: "FutureStack is a portfolio and web development studio building high-performance websites and digital experiences.",
    images: ["/images/logo.jpg"],
    creator: "@masrooribr81901",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // FIX 1: Remove placeholder verification until you have the real code
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.tagline,
    url: "https://future-stackdev.netlify.app",
    // FIX 3: Filter out undefined/empty social links
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
      personalInfo.twitter,
      personalInfo.instagram,
      personalInfo.youtube,
      personalInfo.facebook,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: personalInfo.phone,
      email: personalInfo.email,
      contactType: "Customer Service",
    },
    knowsAbout: [
      "Web Development",
      "React.js",
      "Next.js",
      "UI/UX Design",
      "E-commerce",
      "TypeScript",
      "Tailwind CSS",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Developer",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={cn("antialiased", inter.variable)}>
        <LanguageProvider>
          <ErrorBoundary>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content" className="relative min-h-screen w-full flex flex-col items-center">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
              <WhatsAppFloating />
              <Footer />
            </ThemeProvider>
          </ErrorBoundary>
        </LanguageProvider>
      </body>
    </html>
  );
}
