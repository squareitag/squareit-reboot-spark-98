import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations object
const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.technologies': 'Technologien',
    'nav.contact': 'Kontakt',
    'nav.careers': 'Karriere',
    'nav.privacy': 'Datenschutz',
    
    // Common
    'common.contact': 'Kontakt',
    'common.more_info': 'Mehr Informationen',
    'common.learn_more': 'Mehr erfahren',
    'common.get_started': 'Jetzt starten',
    'common.request_consultation': 'Beratung anfragen',
    'common.all_services': 'Alle Services',
    'common.back_to_home': 'Zurück zur Startseite',
    
    // Hero sections
    'hero.welcome': 'Willkommen bei Square IT AG',
    'hero.subtitle': 'Ihr Partner für professionelle IT-Lösungen',
    
    // Buttons
    'button.contact_us': 'Kontaktieren Sie uns',
    'button.schedule_consultation': 'Beratungstermin vereinbaren',
    'button.view_services': 'Services ansehen',
    'button.learn_more': 'Mehr erfahren',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    'nav.careers': 'Careers',
    'nav.privacy': 'Privacy',
    
    // Common
    'common.contact': 'Contact',
    'common.more_info': 'More Information',
    'common.learn_more': 'Learn More',
    'common.get_started': 'Get Started',
    'common.request_consultation': 'Request Consultation',
    'common.all_services': 'All Services',
    'common.back_to_home': 'Back to Home',
    
    // Hero sections
    'hero.welcome': 'Welcome to Square IT AG',
    'hero.subtitle': 'Your partner for professional IT solutions',
    
    // Buttons
    'button.contact_us': 'Contact Us',
    'button.schedule_consultation': 'Schedule Consultation',
    'button.view_services': 'View Services',
    'button.learn_more': 'Learn More',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de'); // German as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};