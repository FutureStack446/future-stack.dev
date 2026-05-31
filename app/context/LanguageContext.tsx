"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'es' | 'fr' | 'ar';

interface Translation {
  [key: string]: string;
}

interface Translations {
  [locale: string]: Translation;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Clean, deduplicated translations per locale
const translations: Translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',

    'hero.welcome': 'Welcome to FutureStack',
    'hero.tagline': 'Expert Web Developer & Designer',
    'hero.description': 'Crafting digital experiences that convert.',
    'hero.cta': 'Explore My Work',
    'hero.secondary': 'Get in Touch',
    'hero.hire': 'Hire Me',
    'hero.projects': 'View Projects',

    'about.title': 'About Me',
    'about.subtitle': 'Passionate Web Designer & Developer',
    'about.description': 'I\'m Masroor Ibrahim, a web developer specializing in modern, responsive, high-performance websites.',
    'about.clients': 'Happy Clients',

    'services.title': 'My Services',
    'services.subtitle': 'What I Offer',
    'services.description': 'End-to-end solutions from idea to launch.',
    'services.cta': 'Ready to start your project?',
    'services.ctaLink': 'Let\'s talk!',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Custom websites with React, Next.js and TypeScript.',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Designs that enhance UX and drive conversions.',
    'services.ecommerce.title': 'E-commerce Solutions',
    'services.ecommerce.desc': 'Online stores with secure payments and inventory.',
    'services.seo.title': 'SEO Optimization',
    'services.seo.desc': 'Improve search rankings and organic traffic.',

    'projects.portfolio': 'Portfolio',
    'projects.featured': 'Featured Projects',
    'projects.viewDetails': 'View Details',
    'projects.featuredLabel': 'Featured',
    'projects.featuredProject': 'Featured Project',
    'projects.techUsed': 'Technologies Used',
    'projects.description': 'Projects showcasing design, development and problem-solving.',
    'projects.viewMore': 'View More on GitHub',
    'projects.title': 'My Projects',
    'projects.subtitle': 'Recent Work',
    'projects.view': 'View Project',
    'projects.live': 'Live Demo',
    'projects.code': 'View Code',

    'blog.title': 'Blog',
    'blog.subtitle': 'Latest Insights',
    'blog.description': 'Thoughts on design, development, and technology.',
    'blog.viewAll': 'View All Articles',

    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s Work Together',
    'contact.description': 'Have a project in mind? Send me a message.',
    'contact.available': 'Available for new projects',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Available for freelance, full-time, and consulting.',
    'contact.card.email': 'Email',
    'contact.card.phone': 'Phone',
    'contact.card.collaboration': 'Collaboration',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Message Sent!',
    'contact.thankYou': 'Thank you! I\'ll get back to you within 24 hours.',

    'footer.built': 'Built with',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.by': 'by',

    'skills.title': 'My Skills',
    'skills.subtitle': 'Technical Expertise',

    'landing.title': 'Welcome to FutureStack',
    'landing.description': 'Discover cutting-edge web solutions that transform your digital presence.',
    'landing.explore': 'Explore Projects',
    'landing.talk': 'Talk About Your Project',
    'landing.portfolio': 'Discover the Portfolio',
    'landing.cards.services.title': 'Services & Strategy',
    'landing.cards.services.desc': 'Custom digital products and growth-focused design services.',
    'landing.cards.projects.title': 'Projects & Case Studies',
    'landing.cards.projects.desc': 'Showcase work built for performance and clarity.',
    'landing.cards.insights.title': 'Insights & Growth',
    'landing.cards.insights.desc': 'Articles and ideas for modern web success.',
    'landing.hint': 'Scroll or click to explore',

    'about.stats.experience': 'Years Experience',
    'about.stats.clients': 'Happy Clients',
    'about.stats.projects': 'Major Projects',
    'about.stats.coffee': 'Cups of Coffee',

    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What People Say',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common Questions',

    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.tryAgain': 'Try Again',
  },

  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',

    'hero.welcome': 'Bienvenido a FutureStack',
    'hero.tagline': 'Desarrollador Web Experto',
    'hero.description': 'Creando experiencias digitales que convierten.',
    'hero.cta': 'Explorar Mi Trabajo',
    'hero.secondary': 'Contactar',
    'hero.hire': 'Contrátame',
    'hero.projects': 'Ver Proyectos',

    'about.title': 'Sobre Mí',
    'about.subtitle': 'Diseñador y Desarrollador Web Apasionado',
    'about.description': 'Soy Masroor Ibrahim, desarrollador web con experiencia en sitios modernos y de alto rendimiento.',
    'about.clients': 'Clientes Satisfechos',

    'services.title': 'Mis Servicios',
    'services.subtitle': 'Lo Que Ofrezco',
    'services.description': 'Soluciones completas desde la idea hasta el lanzamiento.',
    'services.cta': '¿Listo para empezar tu proyecto?',
    'services.ctaLink': '¡Hablemos!',
    'services.webdev.title': 'Desarrollo Web',
    'services.webdev.desc': 'Sitios web personalizados con React, Next.js y TypeScript.',
    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Diseños que mejoran la experiencia y aumentan conversiones.',
    'services.ecommerce.title': 'Soluciones de Comercio Electrónico',
    'services.ecommerce.desc': 'Tiendas online con pagos seguros e inventario.',
    'services.seo.title': 'Optimización SEO',
    'services.seo.desc': 'Mejora el posicionamiento y el tráfico orgánico.',

    'projects.portfolio': 'Portafolio',
    'projects.featured': 'Proyectos Destacados',
    'projects.viewDetails': 'Ver Detalles',
    'projects.featuredLabel': 'Destacado',
    'projects.featuredProject': 'Proyecto Destacado',
    'projects.techUsed': 'Tecnologías Usadas',
    'projects.description': 'Proyectos que muestran mi experiencia en diseño y desarrollo.',
    'projects.viewMore': 'Ver más en GitHub',
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Trabajo Reciente',
    'projects.view': 'Ver Proyecto',
    'projects.live': 'Demostración',
    'projects.code': 'Ver Código',

    'blog.title': 'Blog',
    'blog.subtitle': 'Últimas Ideas',
    'blog.description': 'Reflexiones sobre diseño y desarrollo.',
    'blog.viewAll': 'Ver todos los artículos',

    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': 'Trabajemos Juntos',
    'contact.description': '¿Tienes un proyecto en mente? Envíame un mensaje.',
    'contact.available': 'Disponible para nuevos proyectos',
    'contact.info.title': 'Información de Contacto',
    'contact.info.description': 'Disponible para freelance, tiempo completo y consultoría.',
    'contact.card.email': 'Correo',
    'contact.card.phone': 'Teléfono',
    'contact.card.collaboration': 'Colaboración',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.sent': '¡Mensaje Enviado!',
    'contact.thankYou': 'Gracias! Te responderé pronto.',

    'footer.built': 'Construido con',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con',
    'footer.by': 'por',

    'skills.title': 'Mis Habilidades',
    'skills.subtitle': 'Experiencia Técnica',

    'landing.title': 'Bienvenido a FutureStack',
    'landing.description': 'Descubre soluciones web que transforman tu presencia digital.',
    'landing.explore': 'Explorar Proyectos',
    'landing.talk': 'Hablar sobre tu proyecto',
    'landing.portfolio': 'Descubre el Portafolio',
    'landing.cards.services.title': 'Servicios y Estrategia',
    'landing.cards.services.desc': 'Productos digitales personalizados y servicios de diseño.',
    'landing.cards.projects.title': 'Proyectos y Casos de Estudio',
    'landing.cards.projects.desc': 'Trabajo enfocado en rendimiento y claridad.',
    'landing.cards.insights.title': 'Ideas y Crecimiento',
    'landing.cards.insights.desc': 'Artículos e ideas para el éxito web moderno.',
    'landing.hint': 'Desplázate o haz clic para explorar',

    'testimonials.title': 'Testimonios de Clientes',
    'testimonials.subtitle': 'Lo Que Dicen',
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Preguntas Comunes',

    'common.readMore': 'Leer Más',
    'common.learnMore': 'Saber Más',
    'common.viewAll': 'Ver Todo',
    'common.back': 'Atrás',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
    'common.loading': 'Cargando...',
    'common.error': 'Ocurrió un error',
    'common.tryAgain': 'Intentar de Nuevo',
  },

  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.resume': 'CV',

    'hero.welcome': 'Bienvenue sur FutureStack',
    'hero.tagline': 'Développeur Web Expert',
    'hero.description': 'Création d\'expériences numériques qui convertissent.',
    'hero.cta': 'Explorer Mon Travail',
    'hero.secondary': 'Me Contacter',
    'hero.hire': 'Engagez-moi',
    'hero.projects': 'Voir les Projets',

    'about.title': 'À Propos',
    'about.subtitle': 'Designer et Développeur Web Passionné',
    'about.description': 'Je suis Masroor Ibrahim, développeur web spécialisé dans des sites modernes et performants.',
    'about.clients': 'Clients Satisfaits',

    'services.title': 'Mes Services',
    'services.subtitle': 'Ce Que Je Propose',
    'services.webdev.title': 'Développement Web',
    'services.webdev.desc': 'Sites web personnalisés avec React, Next.js et TypeScript.',
    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Des designs qui améliorent l\'expérience utilisateur.',
    'services.ecommerce.title': 'Solutions E-commerce',
    'services.ecommerce.desc': 'Boutiques en ligne avec paiements sécurisés.',
    'services.seo.title': 'Optimisation SEO',
    'services.seo.desc': 'Améliorez votre classement et trafic organique.',

    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Travaux Récents',
    'projects.viewDetails': 'Voir les Détails',
    'projects.featuredLabel': 'En Vedette',
    'projects.featuredProject': 'Projet En Vedette',
    'projects.techUsed': 'Technologies Utilisées',
    'projects.view': 'Voir le Projet',
    'projects.live': 'Démo en Ligne',
    'projects.code': 'Voir le Code',

    'blog.title': 'Blog',
    'blog.subtitle': 'Dernières Idées',
    'blog.description': 'Réflexions sur le design et le développement.',
    'blog.viewAll': 'Voir tous les articles',

    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Travaillons Ensemble',
    'contact.description': 'Vous avez un projet ? Envoyez-moi un message.',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi...',
    'contact.sent': 'Message envoyé avec succès !',

    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Construit avec',
    'footer.by': 'par',

    'skills.title': 'Mes Compétences',
    'skills.subtitle': 'Expertise Technique',

    'landing.title': 'Bienvenue sur FutureStack',
    'landing.description': 'Découvrez des solutions web qui transforment votre présence digitale.',
    'landing.explore': 'Explorer les Projets',
    'landing.hint': 'Faites défiler ou cliquez pour explorer',

    'testimonials.title': 'Témoignages Clients',
    'testimonials.subtitle': 'Ce Qu\'ils Disent',
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Questions Courantes',

    'common.readMore': 'Lire Plus',
    'common.learnMore': 'En Savoir Plus',
    'common.viewAll': 'Tout Voir',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur s\'est produite',
    'common.tryAgain': 'Réessayer',
  },

  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.services': 'الخدمات',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بي',
    'nav.resume': 'السيرة الذاتية',

    'hero.welcome': 'مرحبًا بكم في FutureStack',
    'hero.tagline': 'مطور ويب خبير',
    'hero.description': 'صياغة تجارب رقمية تحقق التحويلات.',
    'hero.cta': 'استكشف أعمالي',
    'hero.secondary': 'تواصل معي',
    'hero.hire': 'وظفني',
    'hero.projects': 'عرض المشاريع',

    'about.title': 'عني',
    'about.subtitle': 'مصمم ومطور ويب شغوف',
    'about.description': 'أنا مسرور إبراهيم، مطور ويب متخصص في مواقع حديثة وسريعة الاستجابة.',
    'about.clients': 'عملاء سعداء',

    'services.title': 'خدماتي',
    'services.subtitle': 'ماذا أقدم',
    'services.webdev.title': 'تطوير الويب',
    'services.webdev.desc': 'مواقع ويب مخصصة مع React و Next.js و TypeScript.',
    'services.uiux.title': 'تصميم واجهة المستخدم/تجربة المستخدم',
    'services.uiux.desc': 'تصميمات تعزز تجربة المستخدم.',

    'projects.title': 'مشاريعي',
    'projects.subtitle': 'أعمال حديثة',
    'projects.viewDetails': 'عرض التفاصيل',
    'projects.featuredLabel': 'مميز',
    'projects.featuredProject': 'مشروع مميز',
    'projects.techUsed': 'التقنيات المستخدمة',
    'projects.view': 'عرض المشروع',
    'projects.live': 'عرض تجريبي',
    'projects.code': 'عرض الكود',

    'blog.title': 'المدونة',
    'blog.subtitle': 'أحدث المقالات',
    'blog.description': 'أفكار حول التصميم والتطوير.',

    'contact.title': 'اتصل بي',
    'contact.subtitle': 'لنعمل معًا',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جارٍ الإرسال...',
    'contact.sent': 'تم الإرسال بنجاح!',

    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.built': 'بني بـ',
    'footer.by': 'بواسطة',

    'skills.title': 'مهاراتي',
    'skills.subtitle': 'الخبرة التقنية',

    'landing.title': 'مرحبًا بك في FutureStack',
    'landing.description': 'اكتشف حلول الويب التي تحول حضورك الرقمي.',
    'landing.hint': 'قم بالتمرير أو النقر لاستكشاف',

    'testimonials.title': 'شهادات العملاء',
    'testimonials.subtitle': 'ماذا يقولون',
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'أسئلة شائعة',

    'common.readMore': 'اقرأ المزيد',
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.loading': 'جار التحميل...',
    'common.error': 'حدث خطأ',
    'common.tryAgain': 'حاول مرة أخرى',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    const initialLocale = savedLocale && ['en', 'es', 'fr', 'ar'].includes(savedLocale) ? savedLocale : 'en';
    setLocaleState(initialLocale);
    document.documentElement.lang = initialLocale;
    document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr';
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    if (!mounted) return '';
    const localeTranslations = translations[locale];
    if (!localeTranslations) {
      console.warn(`Translations for locale "${locale}" not found.`);
      return key;
    }
    return localeTranslations[key] ?? key;
  };

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

export { translations };
