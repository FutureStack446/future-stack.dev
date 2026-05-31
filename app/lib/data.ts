import { Project, Skill, Service, Testimonial, BlogPost, SocialLink, NavLink, ProcessStep, FaqItem } from "@/app/types";
import { User, Terminal, Briefcase, Zap, BookOpen, Mail, Github, Linkedin, Twitter, Instagram, Youtube, Facebook, Search, PenTool, Code2, Rocket, Circle, Award, Heart, Calendar, GraduationCap, Globe, FileType, Code, FileCode, Palette, Paintbrush, Server, Figma, Smartphone, Layers, Image, Layout, BarChart3, Database, Bot, Workflow, ShoppingCart, TrendingUp } from "lucide-react";
export const personalInfo = {
  name: "Masroor Ibrahim",
  title: "Web Designer & Developer",
  tagline: "Crafting Digital Experiences That Convert",
  email: "futurestack59@gmail.com",
  phone: "+234 9121870209",
  location: "",
  availability: "Open for opportunities",
  resumeUrl: "/resume",
  github: "https://github.com/FutureStack446",
  linkedin: "https://www.linkedin.com/in/masroor-ibrahim-861359375",
  twitter: "https://x.com/masrooribr81901",
  instagram: "https://www.instagram.com/futurestack59",
  facebook: "https://www.facebook.com/share/1CbJewA4BH/",
  youtube: "https://youtube.com/@futurestackdev",
  threads: "https://www.threads.com/@futurestack59",
  telegram: "https://t.me/Futurestack345",
  reddit: "https://www.reddit.com/u/Future_Stack59/s/GSZbFaNFcN",
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/home", icon: Circle, translationKey: 'nav.home' },
  { name: "About", href: "/about", icon: User, translationKey: 'nav.about' },
  { name: "Skills", href: "/skills", icon: Terminal, translationKey: 'nav.skills' },
  { name: "Projects", href: "/projects", icon: Briefcase, translationKey: 'nav.projects' },
  { name: "Services", href: "/services", icon: Zap, translationKey: 'nav.services' },
  { name: "Blog", href: "/blog", icon: BookOpen, translationKey: 'nav.blog' },
  { name: "Contact", href: "/contact", icon: Mail, translationKey: 'nav.contact' },
];

export const timeline = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Started my journey into web development, learning HTML, CSS, and JavaScript fundamentals.",
  },
  {
    year: "2023",
    title: "First Projects",
    description: "Built my first client websites and discovered my passion for creating digital experiences.",
  },
  {
    year: "2024",
    title: "Professional Growth",
    description: "Expanded into React and Next.js, working with more complex projects and clients.",
  },
  {
    year: "2025",
    title: "FutureStack Born",
    description: "Established FutureStack as a professional web development brand serving global clients.",
  },
  {
    year: "2026",
    title: "Continuing Evolution",
    description: "Focusing on cutting-edge technologies and delivering premium web solutions.",
  },
];

export const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every project receives my full attention to ensure the highest quality deliverables.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is my success. I work closely with you to understand and exceed your goals.",
  },
  {
    icon: Calendar,
    title: "Reliability",
    description: "Consistent communication and on-time delivery. I treat your project as my own.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always staying updated with the latest technologies and best practices in web development.",
  },
];

export const skills: Skill[] = [
  // Web Development
  { name: "React.js", icon: Code2, level: 90, category: "Web Development" },
  { name: "Next.js", icon: Globe, level: 85, category: "Web Development" },
  { name: "TypeScript", icon: FileType, level: 80, category: "Web Development" },
  { name: "JavaScript", icon: Code, level: 95, category: "Web Development" },
  { name: "HTML5", icon: FileCode, level: 95, category: "Web Development" },
  { name: "CSS3", icon: Palette, level: 90, category: "Web Development" },
  { name: "Tailwind CSS", icon: Paintbrush, level: 92, category: "Web Development" },
  { name: "Node.js", icon: Server, level: 75, category: "Web Development" },
  
  // UI/UX Design
  { name: "Figma", icon: Figma, level: 88, category: "UI/UX Design" },
  { name: "Responsive Design", icon: Smartphone, level: 95, category: "UI/UX Design" },
  { name: "Prototyping", icon: Layers, level: 85, category: "UI/UX Design" },
  
  // Graphic Design
  { name: "Photoshop", icon: Image, level: 80, category: "Graphic Design" },
  { name: "Illustrator", icon: PenTool, level: 75, category: "Graphic Design" },
  { name: "Canva", icon: Layout, level: 90, category: "Graphic Design" },
  
  // Data & SEO
  { name: "SEO Optimization", icon: Search, level: 85, category: "Data & SEO" },
  { name: "Google Analytics", icon: BarChart3, level: 80, category: "Data & SEO" },
  { name: "Data Entry", icon: Database, level: 90, category: "Data & SEO" },
  
  // AI & Automation
  { name: "AI Tools", icon: Bot, level: 80, category: "AI & Automation" },
  { name: "Automation", icon: Zap, level: 85, category: "AI & Automation" },
  { name: "Workflow Optimization", icon: Workflow, level: 82, category: "AI & Automation" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "UltraWebCraft",
    description: "Premium SaaS Dashboard with glassmorphism UI, real-time metrics visualization, and modern analytics interface. Built for tech companies to track performance and growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Dashboard", "Analytics"],
    githubUrl: "https://github.com/FutureStack446",
    liveUrl: "https://ultrawebcraft.netlify.app/",
    featured: true,
  },
  {
    id: "2",
    title: "Masib Collection",
    description: "Luxury artisanal footwear e-commerce platform. Heritage leather craftsmanship meets modern aesthetics with global shipping and premium UX.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Responsive", "UI/UX", "Fashion"],
    githubUrl: "https://github.com/FutureStack446",
    liveUrl: "https://masibcollection.netlify.app/",
    featured: true,
  },
  {
    id: "3",
    title: "Timarh's Cuisines",
    description: "Artisanal bakery and pastry shop website featuring custom cakes, gourmet donuts, and savory meat pies. Online ordering with fast local delivery and premium menu experience.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
    tags: ["Food Service", "Ordering", "Responsive", "Local Business"],
    githubUrl: "https://github.com/FutureStack446",
    liveUrl: "https://timarhs-cuisines.netlify.app/",
    featured: true,
  },
  {
    id: "4",
    title: "ElectroGadget",
    description: "Futuristic smart electronics store featuring neural-link wearables, AI-driven hardware, and VR devices. Premium tech e-commerce with modern dark UI.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Tech", "Dark UI", "Modern"],
    githubUrl: "https://github.com/FutureStack446",
    liveUrl: "https://electro-gadgets.netlify.app/",
    featured: true,
  },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Building blazing-fast, responsive websites and web applications with modern technologies. From landing pages to full-stack solutions.",
    icon: Code2,
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks", "Clean Code"],
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces that users love. Research-driven design that converts visitors into customers.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Mobile-First"],
  },
  {
    title: "E-Commerce Solutions",
    description: "End-to-end online store development with payment integration, inventory management, and conversion optimization.",
    icon: ShoppingCart,
    features: ["Payment Integration", "Product Management", "Cart & Checkout", "Order Tracking", "Analytics"],
  },
  {
    title: "SEO & Growth",
    description: "Data-driven strategies to increase organic traffic, improve search rankings, and grow your digital presence.",
    icon: TrendingUp,
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Tracking", "Local SEO"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Musa",
    role: "Business Owner",
    company: "Masib Collection",
    content: "Masroor transformed our traditional footwear business into a modern online brand. The website design is stunning and sales increased by 200% within the first month.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "2",
    name: "Timarh Bello",
    role: "Founder",
    company: "Timarh's Cuisines",
    content: "The bakery website Masroor built exceeded our expectations. Customers can now order cakes online and the delivery system works perfectly. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: "3",
    name: "James Okafor",
    role: "CEO",
    company: "ElectroGadget",
    content: "Working with Masroor was a game-changer. The futuristic design of our electronics store attracts tech enthusiasts daily. Incredible attention to detail.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern E-Commerce Sites in 2024",
    excerpt: "A deep dive into creating high-converting online stores with Next.js, responsive design, and payment integration for modern businesses.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["E-Commerce", "Next.js", "Business", "Growth"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format&q=75",
    slug: "modern-ecommerce-2024",
    author: "Masroor Ibrahim",
    featured: true,
    fullContent: `
      In 2024, building a successful e-commerce site requires more than just a product catalog. It demands a seamless user experience, lightning-fast performance, and robust backend infrastructure. Next.js, with its hybrid rendering capabilities, has emerged as a front-runner for crafting high-converting online stores.

      This article explores the essential strategies for developing modern e-commerce platforms, focusing on responsive design principles that ensure your store looks great and functions flawlessly on any device. We'll delve into the importance of performance optimization, not just for user satisfaction but also for SEO rankings.

      Payment integration is another critical aspect. We'll discuss various secure payment gateways and how to implement them effectively. Furthermore, we'll touch upon inventory management systems, customer relationship management (CRM) tools, and analytics integration to provide a holistic view of your e-commerce operations.

      By combining cutting-edge technologies with a deep understanding of user behavior, you can create an e-commerce experience that not only attracts customers but also fosters loyalty and drives sales.
    `,
  },
  {
    id: "2",
    title: "The Power of Glassmorphism in Web Design",
    excerpt: "How frosted glass effects and modern transparency trends can elevate your website's visual appeal and user experience.",
    date: "2024-02-28",
    readTime: "7 min read",
    tags: ["Design", "UI/UX", "Trends"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&auto=format&q=75",
    slug: "glassmorphism-design",
    author: "Masroor Ibrahim",
    featured: false,
    fullContent: `
      Glassmorphism, a design trend characterized by frosted glass effects, translucent backgrounds, and vibrant colors, has taken the web design world by storm. This aesthetic creates a sense of depth and hierarchy, making interfaces feel modern and sophisticated.

      This article explores the principles behind glassmorphism, including how to effectively use blur, transparency, and subtle shadows to achieve the desired effect. We'll discuss its benefits for user experience, such as improved visual hierarchy and a clean, uncluttered look.

      However, it's crucial to implement glassmorphism thoughtfully to avoid accessibility issues. We'll provide tips on maintaining readability and contrast, ensuring that your beautiful designs are also inclusive. Learn how to integrate this trend into your projects to create visually stunning and engaging web experiences.
    `,
  },
  {
    id: "3",
    title: "SEO Strategies for Local Businesses",
    excerpt: "Practical tips to improve your Google rankings and attract more local customers.",
    date: "2024-02-10",
    readTime: "9 min read",
    tags: ["SEO", "Local Business", "Growth"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=800&fit=crop&auto=format&q=75",
    slug: "seo-local-business",
    author: "Masroor Ibrahim",
    featured: true,
    fullContent: `
      For local businesses, a strong online presence is paramount. Search Engine Optimization (SEO) is the key to ensuring your business appears prominently in local search results, driving more foot traffic and online inquiries.
      
      This article outlines effective SEO strategies tailored for the local market. We'll cover optimizing your Google My Business profile, a crucial step for local visibility. Understanding local keywords and integrating them into your website content is also vital.

      Furthermore, we'll discuss building local citations, acquiring reviews, and leveraging social media to boost your local SEO efforts. By implementing these practical tips, businesses can significantly improve their online discoverability and attract a larger customer base.
    `,
  },
  {
    id: "4",
    title: "Mastering Responsive Design with Tailwind CSS",
    excerpt: "A guide to building flexible and adaptive user interfaces using the utility-first framework, Tailwind CSS.",
    date: "2024-01-20",
    readTime: "6 min read",
    tags: ["Design", "Web Development", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&h=800&fit=crop&q=80",
    slug: "responsive-design-tailwind",
    author: "Masroor Ibrahim",
    featured: false,
    fullContent: `
      Responsive design is no longer an option but a necessity in today's multi-device world. Tailwind CSS, a utility-first CSS framework, simplifies the process of creating adaptive user interfaces that look great on desktops, tablets, and mobile phones.

      This guide provides a comprehensive overview of mastering responsive design with Tailwind CSS. We'll explore its intuitive breakpoint system, allowing you to apply styles conditionally based on screen size. Learn how to use utility classes to build complex layouts with minimal custom CSS.

      We'll also cover best practices for responsive images, typography, and navigation patterns. By leveraging Tailwind's powerful utilities, developers can significantly speed up their workflow and build highly performant and maintainable responsive websites.
    `,
  },
  {
    id: "5",
    title: "The Future of Web Development: AI and Automation",
    excerpt: "Exploring how artificial intelligence and automation are reshaping the web development landscape, from code generation to deployment.",
    date: "2024-01-05",
    readTime: "11 min read",
    tags: ["AI", "Web Development", "Trends"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop&q=80",
    slug: "ai-automation-webdev",
    author: "Masroor Ibrahim",
    featured: true,
    fullContent: `
      Artificial Intelligence (AI) and automation are rapidly transforming various industries, and web development is no exception. From intelligent code completion tools to automated testing and deployment pipelines, AI is streamlining workflows and enhancing developer productivity.

      This article delves into the exciting future of web development, exploring how AI-powered tools are assisting in code generation, design prototyping, and even identifying and fixing bugs. We'll discuss the rise of low-code/no-code platforms augmented by AI, empowering non-developers to create functional websites.

      Furthermore, we'll examine the impact of automation on continuous integration and continuous delivery (CI/CD), enabling faster and more reliable software releases. Understanding these advancements is crucial for developers looking to stay ahead in an evolving technological landscape.
    `,
  },
  {
    id: "6",
    title: "Accessibility in Modern Web Design",
    excerpt: "Why building inclusive digital products is not just a trend but a necessity for every successful business.",
    date: "2024-04-10",
    readTime: "10 min read",
    tags: ["Design", "Accessibility", "UX"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop&auto=format&q=75",
    slug: "web-accessibility-2024",
    author: "Masroor Ibrahim",
    featured: false,
    fullContent: `
      Accessibility in web design is about ensuring that your website can be used by everyone, regardless of their abilities or impairments. In 2024, it's a critical component of a professional online presence.

      Designing for accessibility doesn't mean sacrificing aesthetics; it means creating a more robust and user-friendly experience for all visitors. This includes focusing on color contrast, keyboard navigation, and screen reader compatibility.

      By building inclusive products, you not only comply with international standards but also open your business to a much wider audience, ultimately improving your overall reach and impact in the digital landscape.
    `,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We start by discussing your goals, target audience, and project requirements to create a solid roadmap.",
    icon: Search,
  },
  {
    title: "Design",
    description: "I craft high-fidelity wireframes and interactive prototypes that align with your brand identity.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "Using modern technologies like Next.js and Tailwind CSS, I build your high-performance web solution.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "After thorough testing and optimization, your project goes live. I also provide post-launch support.",
    icon: Rocket,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A standard landing page takes 1-2 weeks, while a full e-commerce solution can take 4-6 weeks.",
  },
  {
    question: "Do you offer post-launch maintenance?",
    answer: "Yes, I offer various maintenance packages to ensure your website stays secure, updated, and performs optimally at all times.",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: personalInfo.github, icon: Github },
  { name: "LinkedIn", url: personalInfo.linkedin, icon: Linkedin },
  { name: "Twitter", url: personalInfo.twitter, icon: Twitter },
  { name: "Instagram", url: personalInfo.instagram, icon: Instagram },
  { name: "YouTube", url: personalInfo.youtube, icon: Youtube },
  { name: "Facebook", url: personalInfo.facebook, icon: Facebook },
];