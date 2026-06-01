# FutureStack Portfolio - Masroor Ibrahim

**FutureStack** is a premium, production-ready portfolio website engineered for high performance and sophisticated user experiences. Built with the **Next.js 14 App Router**, it integrates advanced **Framer Motion** animations, **TypeScript** type-safety, and a mobile-first design philosophy.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-blue)](https://www.framer.com/motion/) [![License-MIT](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Dark/Light Mode** toggle with next-themes
- ✨ **Extreme Framer Motion** animations throughout
- 🎯 **Custom Cursor** with magnetic button effects
- 🌟 **Particle Background** with mouse interaction
- 📱 **Fully Responsive** mobile-first design
- 🔍 **Extreme SEO Optimized** with meta tags, structured data, sitemap, robots.txt
- ♿ **Accessibility** best practices with WCAG compliance
- 🎭 **Glassmorphism & Neumorphism** effects
- 📊 **Animated Skill Bars** with scroll triggers
- 📝 **Functional Contact Form** with EmailJS integration
- 🚀 **Performance Optimized** with lazy loading and code splitting
- 🏠 **Landing Page** as entry point with theme-aware design
- 🔒 **Security Headers** and input validation
- 📱 **PWA Ready** with service worker and offline support
- 📊 **Google Analytics** integration
- 🛡️ **Error Boundaries** and comprehensive error handling
- 🎨 **Skeleton Loaders** for better UX
- 🔄 **Background Sync** for offline form submission

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Email**: EmailJS
- **Analytics**: Google Analytics
- **Deployment**: Vercel/Netlify ready

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FutureStack446/portfolio.git
cd futurestack-portfolio
```

2. Install dependencies:
```bash
npm install
```


5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the environment variables with your credentials

### Google Analytics
1. Create a Google Analytics property
2. Replace `GA_MEASUREMENT_ID` in `app/components/Analytics.tsx` with your measurement ID

### Running Performance Audits (Lighthouse)

This repo includes Lighthouse CI configuration and a GitHub Action to run automated audits.

Local quick run:
```bash
npm ci
npm run dev
npm run audit:local
```

Run full audit (build + temporary server):
```bash
npm ci
npm run audit:server
```

CI (GitHub): push to `main` or trigger the `Lighthouse CI` workflow in Actions. Reports are uploaded to temporary public storage by default.

### Deployment
The app is optimized for deployment on Vercel or Netlify:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
futurestack-portfolio/
├── app/
│   ├── (sections)/          # Page sections
│   ├── api/                 # API routes
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities and data
│   └── globals.css          # Global styles
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── sw.js               # Service worker
└── types/                  # TypeScript definitions
```

## 🎨 Customization

### Colors and Themes
Update the CSS variables in `app/globals.css` to customize colors.

### Content
Edit the data files in `app/lib/data.ts` to update:
- Personal information
- Projects
- Services
- Testimonials
- Blog posts

### Components
All components are modular and can be customized in the `app/components/` directory.

## 🚀 Performance & Quality

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Code-split and tree-shaken
- **Images**: Optimized with Next.js Image component
- **PWA**: Service worker with offline support
- **Security**: XSS protection and secure headers
- **Accessibility**: WCAG compliant with keyboard navigation

## 📱 PWA Features

- **Offline Support**: Service worker caches critical resources
- **Installable**: Add to home screen on mobile devices
- **Background Sync**: Contact form works offline
- **Push Notifications**: Ready for future implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**Masroor Ibrahim**
- Email: futurestack59@gmail.com
- Website: [future-stackdev.netlify.app](https://future-stackdev.netlify.app)
- LinkedIn: [Masroor Ibrahim](https://www.linkedin.com/in/masroor-ibrahim-861359375)

---

Built with ❤️ by Masroor Ibrahim
