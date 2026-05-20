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

// Translations for all supported languages
const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    
    // Hero Section
    'hero.welcome': 'Welcome to FutureStack',
    'hero.tagline': 'Expert Web Developer in Nigeria',
    'hero.description': 'Crafting digital experiences that convert. Specializing in modern frontend technologies, UI/UX design, and e-commerce solutions.',
    'hero.cta': 'Explore My Work',
    'hero.secondary': 'Get in Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate Web Designer & Developer',
    'about.description': 'I\'m Masroor Ibrahim, a highly skilled web developer with 4+ years of experience in creating stunning digital experiences. Based in Nigeria, I specialize in building modern, responsive, and high-performance websites.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    
    // Services Section
    'services.title': 'My Services',
    'services.subtitle': 'What I Offer',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc': 'Custom websites built with modern technologies like React, Next.js, and TypeScript.',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Beautiful, intuitive designs that enhance user experience and drive conversions.',
    'services.ecommerce.title': 'E-commerce Solutions',
    'services.ecommerce.desc': 'Full-featured online stores with secure payment integration and inventory management.',
    'services.seo.title': 'SEO Optimization',
    'services.seo.desc': 'Boost your search rankings and drive organic traffic to your website.',
    
    // Skills Section
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technical Expertise',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'Recent Work',
    'projects.view': 'View Project',
    'projects.live': 'Live Demo',
    'projects.code': 'View Code',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s Work Together',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What People Say',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common Questions',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with',
    'footer.by': 'by',
    
    // Common
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
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.resume': 'Currículum',
    
    // Hero Section
    'hero.welcome': 'Bienvenido a FutureStack',
    'hero.tagline': 'Desarrollador Web Experto en Nigeria',
    'hero.description': 'Creando experiencias digitales que convierten. Especializado en tecnologías frontend modernas, diseño UI/UX y soluciones de comercio electrónico.',
    'hero.cta': 'Explorar Mi Trabajo',
    'hero.secondary': 'Contactar',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Diseñador y Desarrollador Web Apasionado',
    'about.description': 'Soy Masroor Ibrahim, un desarrollador web altamente calificado con más de 4 años de experiencia en la creación de experiencias digitales impresionantes. Basado en Nigeria, me especializo en crear sitios web modernos, responsivos y de alto rendimiento.',
    'about.experience': 'Años de Experiencia',
    'about.projects': 'Proyectos Completados',
    'about.clients': 'Clientes Satisfechos',
    
    // Services Section
    'services.title': 'Mis Servicios',
    'services.subtitle': 'Lo Que Ofrezco',
    'services.webdev.title': 'Desarrollo Web',
    'services.webdev.desc': 'Sitios web personalizados construidos con tecnologías modernas como React, Next.js y TypeScript.',
    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Diseños hermosos e intuitivos que mejoran la experiencia del usuario y aumentan las conversiones.',
    'services.ecommerce.title': 'Soluciones de Comercio Electrónico',
    'services.ecommerce.desc': 'Tiendas en línea completas con integración de pagos seguros y gestión de inventario.',
    'services.seo.title': 'Optimización SEO',
    'services.seo.desc': 'Mejora tu posicionamiento en buscadores y aumenta el tráfico orgánico a tu sitio web.',
    
    // Skills Section
    'skills.title': 'Mis Habilidades',
    'skills.subtitle': 'Experiencia Técnica',
    
    // Projects Section
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Trabajo Reciente',
    'projects.view': 'Ver Proyecto',
    'projects.live': 'Demostración',
    'projects.code': 'Ver Código',
    
    // Contact Section
    'contact.title': 'Contactar',
    'contact.subtitle': 'Trabajemos Juntos',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Tu Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar. Por favor, inténtalo de nuevo.',
    
    // Testimonials
    'testimonials.title': 'Testimonios de Clientes',
    'testimonials.subtitle': 'Lo Que Dicen',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Preguntas Comunes',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con',
    'footer.by': 'por',
    
    // Common
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
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.resume': 'CV',
    
    // Hero Section
    'hero.welcome': 'Bienvenue sur FutureStack',
    'hero.tagline': 'Développeur Web Expert au Nigeria',
    'hero.description': 'Création d\'expériences numériques qui convertissent. Spécialisé dans les technologies frontend modernes, le design UI/UX et les solutions e-commerce.',
    'hero.cta': 'Explorer Mon Travail',
    'hero.secondary': 'Me Contacter',
    
    // About Section
    'about.title': 'À Propos',
    'about.subtitle': 'Designer et Développeur Web Passionné',
    'about.description': 'Je suis Masroor Ibrahim, un développeur web hautement qualifié avec plus de 4 ans d\'expérience dans la création d\'expériences numériques époustouflantes. Basé au Nigeria, je me spécialise dans la création de sites web modernes, responsives et performants.',
    'about.experience': 'Années d\'Expérience',
    'about.projects': 'Projets Réalisés',
    'about.clients': 'Clients Satisfaits',
    
    // Services Section
    'services.title': 'Mes Services',
    'services.subtitle': 'Ce Que Je Propose',
    'services.webdev.title': 'Développement Web',
    'services.webdev.desc': 'Sites web personnalisés construits avec des technologies modernes comme React, Next.js et TypeScript.',
    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Des designs beaux et intuitifs qui améliorent l\'expérience utilisateur et augmentent les conversions.',
    'services.ecommerce.title': 'Solutions E-commerce',
    'services.ecommerce.desc': 'Boutiques en ligne complètes avec intégration de paiements sécurisés et gestion des stocks.',
    'services.seo.title': 'Optimisation SEO',
    'services.seo.desc': 'Améliorez votre classement dans les moteurs de recherche et augmentez le trafic organique.',
    
    // Skills Section
    'skills.title': 'Mes Compétences',
    'skills.subtitle': 'Expertise Technique',
    
    // Projects Section
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Travaux Récents',
    'projects.view': 'Voir le Projet',
    'projects.live': 'Démo en Ligne',
    'projects.code': 'Voir le Code',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Travaillons Ensemble',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Échec de l\'envoi. Veuillez réessayer.',
    
    // Testimonials
    'testimonials.title': 'Témoignages Clients',
    'testimonials.subtitle': 'Ce Qu\'ils Disent',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Questions Courantes',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Construit avec',
    'footer.by': 'par',
    
    // Common
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
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.services': 'الخدمات',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بي',
    'nav.resume': 'السيرة الذاتية',
    
    // Hero Section
    'hero.welcome': 'مرحبًا بكم في FutureStack',
    'hero.tagline': 'مطور ويب خبير في نيجيريا',
    'hero.description': 'صياغة تجارب رقمية تحقق التحويلات. متخصص في تقنيات الواجهة الأمامية الحديثة، وتصميم واجهة المستخدم/تجربة المستخدم، وحلول التجارة الإلكترونية.',
    'hero.cta': 'استكشف أعمالي',
    'hero.secondary': 'تواصل معي',
    
    // About Section
    'about.title': 'عني',
    'about.subtitle': 'مصمم ومطور ويب شغوف',
    'about.description': 'أنا مسرور إبراهيم، مطور ويب عالي المهارة مع أكثر من 4 سنوات من الخبرة في إنشاء تجارب رقمية مذهلة. مقره في نيجيريا، متخصص في بناء مواقع ويب حديثة وسريعة الاستجابة وعالية الأداء.',
    'about.experience': 'سنوات الخبرة',
    'about.projects': 'المشاريع المكتملة',
    'about.clients': 'عملاء سعداء',
    
    // Services Section
    'services.title': 'خدماتي',
    'services.subtitle': 'ماذا أقدم',
    'services.webdev.title': 'تطوير الويب',
    'services.webdev.desc': 'مواقع ويب مخصصة مبنية بتقنيات حديثة مثل React و Next.js و TypeScript.',
    'services.uiux.title': 'تصميم واجهة المستخدم/تجربة المستخدم',
    'services.uiux.desc': 'تصميمات جميلة وبديهية تعزز تجربة المستخدم وتدفع التحويلات.',
    'services.ecommerce.title': 'حلول التجارة الإلكترونية',
    'services.ecommerce.desc': 'متاجر إلكترونية كاملة الميزات مع تكامل دفع آمن وإدارة المخزون.',
    'services.seo.title': 'تحسين محركات البحث',
    'services.seo.desc': 'حسن ترتيبك في محركات البحث وزد الحركة العضوية إلى موقعك.',
    
    // Skills Section
    'skills.title': 'مهاراتي',
    'skills.subtitle': 'الخبرة التقنية',
    
    // Projects Section
    'projects.title': 'مشاريعي',
    'projects.subtitle': 'أعمال حديثة',
    'projects.view': 'عرض المشروع',
    'projects.live': 'عرض تجريبي',
    'projects.code': 'عرض الكود',
    
    // Contact Section
    'contact.title': 'اتصل بي',
    'contact.subtitle': 'لنعمل معًا',
    'contact.name': 'اسمك',
    'contact.email': 'بريدك الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.error': 'فشل الإرسال. يرجى المحاولة مرة أخرى.',
    
    // Testimonials
    'testimonials.title': 'شهادات العملاء',
    'testimonials.subtitle': 'ماذا يقولون',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'أسئلة شائعة',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.built': 'بني بـ',
    'footer.by': 'بواسطة',
    
    // Common
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
    // Check localStorage for saved language preference
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'es', 'fr', 'ar'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    
    // Update document direction for RTL languages
    if (newLocale === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const t = (key: string): string => {
    if (!mounted) return '';
    
    const localeTranslations = translations[locale];
    if (!localeTranslations) {
      console.warn(`Translations for locale "${locale}" not found.`);
      return key;
    }
    
    const translation = localeTranslations[key];
    return translation ?? key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { translations };