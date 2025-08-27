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
    'button.plan_migration': 'Migration planen',
    'button.request_assessment': 'Assessment anfragen',
    
    // M365 Migration Page
    'm365.title': 'Microsoft 365',
    'm365.subtitle': 'Transformieren Sie Ihr Unternehmen mit Microsoft 365 - der integrierten Suite von Produktivitätstools und Cloud-Diensten für moderne Zusammenarbeit.',
    'm365.hero.description': 'Bei Square IT sind wir stolz darauf, unsere jahrelange Erfahrung und Expertise in der Bereitstellung massgeschneiderter IT-Lösungen auf Basis von Microsoft 365 zu präsentieren.',
    'm365.usage.title': 'Verwendungsgebiet',
    'm365.usage.description': 'Die Square IT AG setzt Microsoft 365 branchenübergreifend ein – von KMU über Schulen bis hin zu gemeinnützigen Organisationen. Unsere Lösungen sind flexibel und passen sich den individuellen Anforderungen jeder Branche an.',
    'm365.collaboration': 'Zusammenarbeit & Kommunikation: Optimieren Sie Teamarbeit mit Microsoft Teams',
    'm365.productivity': 'Produktivität & Effizienz: Arbeiten Sie ortsunabhängig mit Office-Apps wie Word, Excel & PowerPoint, integriert in sichere Cloud-Dienste',
    'm365.security': 'Datensicherheit & Compliance: Schützen Sie Daten mit integrierten Sicherheits- und Compliance-Tools, erfüllen Sie regulatorische Anforderungen und verhindern Sie Cyber-Bedrohungen',
    'm365.analytics': 'Geschäftsintelligenz & Analysen: Nutzen Sie Analysen und Berichte für fundierte Entscheidungen und datengesteuertes Unternehmenswachstum',
    'm365.automation': 'Workflow-Automatisierung: Automatisieren Sie wiederkehrende Aufgaben mit Power Automate und steigern Sie die Effizienz',
    'm365.exchange.title': 'Exchange Migration',
    'm365.exchange.description': 'Sichere Migration von E-Mail-Systemen zu Exchange Online',
    'm365.sharepoint.title': 'SharePoint Migration',
    'm365.sharepoint.description': 'Vollständige Migration von Dateisystemen zu SharePoint Online',
    'm365.teams.title': 'Teams Setup',
    'm365.teams.description': 'Migration und Setup von Microsoft Teams für moderne Collaboration',
    'm365.identity.title': 'Identity Management',
    'm365.identity.description': 'Azure AD Setup und Benutzerverwaltung',
    'm365.benefits.title': 'Warum Microsoft 365?',
    'm365.benefits.description': 'Moderne Produktivität durch professionelle Cloud-Migration',
    'm365.cta.title': 'Starten Sie Ihre Microsoft 365 Transformation',
    'm365.cta.description': 'Lassen Sie uns gemeinsam den Arbeitsplatz der Zukunft gestalten.',
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
    'button.plan_migration': 'Plan Migration',
    'button.request_assessment': 'Request Assessment',
    
    // M365 Migration Page
    'm365.title': 'Microsoft 365',
    'm365.subtitle': 'Transform your business with Microsoft 365 - the integrated suite of productivity tools and cloud services for modern collaboration.',
    'm365.hero.description': 'At Square IT, we are proud to present our years of experience and expertise in providing customized IT solutions based on Microsoft 365.',
    'm365.usage.title': 'Areas of Application',
    'm365.usage.description': 'Square IT AG implements Microsoft 365 across industries - from SMEs to schools and non-profit organizations. Our solutions are flexible and adapt to the individual requirements of each industry.',
    'm365.collaboration': 'Collaboration & Communication: Optimize teamwork with Microsoft Teams',
    'm365.productivity': 'Productivity & Efficiency: Work location-independent with Office apps like Word, Excel & PowerPoint, integrated into secure cloud services',
    'm365.security': 'Data Security & Compliance: Protect data with integrated security and compliance tools, meet regulatory requirements and prevent cyber threats',
    'm365.analytics': 'Business Intelligence & Analytics: Use analytics and reports for informed decisions and data-driven business growth',
    'm365.automation': 'Workflow Automation: Automate recurring tasks with Power Automate and increase efficiency',
    'm365.exchange.title': 'Exchange Migration',
    'm365.exchange.description': 'Secure migration of email systems to Exchange Online',
    'm365.sharepoint.title': 'SharePoint Migration',
    'm365.sharepoint.description': 'Complete migration of file systems to SharePoint Online',
    'm365.teams.title': 'Teams Setup',
    'm365.teams.description': 'Migration and setup of Microsoft Teams for modern collaboration',
    'm365.identity.title': 'Identity Management',
    'm365.identity.description': 'Azure AD setup and user management',
    'm365.benefits.title': 'Why Microsoft 365?',
    'm365.benefits.description': 'Modern productivity through professional cloud migration',
    'm365.cta.title': 'Start Your Microsoft 365 Transformation',
    'm365.cta.description': 'Let us shape the workplace of the future together.',
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