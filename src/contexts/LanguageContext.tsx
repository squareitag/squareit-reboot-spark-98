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
    'nav.all_services': 'Alle Dienstleistungen',
    'nav.all_technologies': 'Alle Technologien',
    'nav.managed_services': 'Managed Services',
    'nav.managed_infrastructure': 'Managed Infrastructure',
    'nav.managed_workplace': 'Managed Workplace',
    'nav.managed_servers': 'Managed Servers',
    'nav.managed_network': 'Managed Network',
    'nav.managed_backup': 'Managed Backup',
    'nav.migration': 'Migration',
    'nav.m365_migration': 'M365 Migration',
    'nav.azure_migration': 'Azure Migration',
    'nav.sharepoint_teams_migration': 'SharePoint & Teams Migration',
    'nav.consulting': 'Consulting',
    'nav.modern_workplace': 'Modern Workplace',
    'nav.cloud_security': 'Cloud Security',
    'nav.collaboration': 'Collaboration',
    'nav.teams_telephone': 'Teams Telephone',
    'nav.workshop': 'Workshop',
    'nav.support': 'Support',
    
    // Common
    'common.contact': 'Kontakt',
    'common.more_info': 'Mehr Informationen',
    'common.learn_more': 'Mehr erfahren',
    'common.get_started': 'Jetzt starten',
    'common.request_consultation': 'Beratung anfragen',
    'common.all_services': 'Alle Services',
    'common.back_to_home': 'Zurück zur Startseite',
    'common.features': 'Features',
    'common.benefits': 'Vorteile',
    'common.solutions': 'Lösungen',
    'common.expertise': 'Expertise',
    'common.our_services': 'Unsere Services',
    'common.why_choose_us': 'Warum uns wählen',
    'common.get_quote': 'Angebot einholen',
    'common.free_consultation': 'Kostenlose Beratung',
    
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
    'button.free_consultation': 'Kostenlose Beratung',
    'button.infrastructure_consultation': 'Infrastructure Beratung',
    'button.security_consultation': 'Sicherheitsberatung',
    'button.collaboration_consultation': 'Kollaborations-Beratung',
    
    // Managed Infrastructure
    'infrastructure.title': 'Managed Infrastructure',
    'infrastructure.subtitle': 'Unsere Managed Infrastructure-Services bieten Ihnen zahlreiche Vorteile, darunter erhöhte Zuverlässigkeit, verbesserte Sicherheit, Kosteneinsparungen und Skalierbarkeit.',
    'infrastructure.server_management': 'Server Management',
    'infrastructure.server_description': 'Vollständige Verwaltung Ihrer Server-Infrastruktur',
    'infrastructure.cloud_infrastructure': 'Cloud Infrastructure',
    'infrastructure.cloud_description': 'Verwaltung und Optimierung Ihrer Cloud-Umgebung',
    'infrastructure.network_infrastructure': 'Network Infrastructure',
    'infrastructure.network_description': 'Professionelle Netzwerk-Administration und -Überwachung',
    'infrastructure.storage_management': 'Storage Management',
    'infrastructure.storage_description': 'Sichere und effiziente Speicherlösungen',
    'infrastructure.24_7_monitoring': '24/7 Überwachung',
    'infrastructure.proactive_maintenance': 'Proaktive Wartung',
    'infrastructure.scalability': 'Skalierbarkeit',
    'infrastructure.monitoring_description': 'Kontinuierliche Überwachung Ihrer gesamten IT-Infrastruktur',
    'infrastructure.maintenance_description': 'Vorbeugende Maßnahmen zur Vermeidung von Ausfällen',
    'infrastructure.scalability_description': 'Flexible Anpassung an Ihre wachsenden Anforderungen',
    'infrastructure.our_services': 'Unsere Infrastructure Services',
    'infrastructure.our_benefits': 'Unsere Vorteile',
    'infrastructure.focus_description': 'Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir Ihre IT-Infrastruktur optimieren',
    'infrastructure.process_title': 'Unser Managed Infrastructure Prozess',
    'infrastructure.process_description': 'Wir beginnen mit einer umfassenden Analyse Ihrer bestehenden Infrastruktur und entwickeln eine massgeschneiderte Strategie für optimales Management.',
    'infrastructure.continuous_monitoring': 'Durch kontinuierliche Überwachung und proaktive Wartung stellen wir sicher, dass Ihre IT-Systeme stets optimal funktionieren und sicher sind.',
    'infrastructure.sla_title': 'Service Level Agreement',
    'infrastructure.cta_title': 'Bereit für professionelles Infrastructure Management?',
    'infrastructure.cta_description': 'Lassen Sie uns Ihre IT-Infrastruktur optimieren und verwalten.',
    
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
    
    // Cloud Security
    'security.title': 'Cloud Security Consulting',
    'security.subtitle': 'Schützen Sie Ihre Cloud-Infrastruktur mit unseren umfassenden Sicherheitslösungen',
    'security.cta_title': 'Sichern Sie Ihre Cloud-Umgebung',
    'security.cta_description': 'Lassen Sie uns Ihre Cloud-Sicherheit bewerten und optimieren.',
    
    // Collaboration
    'collaboration.title': 'Collaboration',
    'collaboration.subtitle': 'Optimieren Sie die Zusammenarbeit in Ihrem Unternehmen mit modernen Collaboration-Lösungen',
    'collaboration.cta_title': 'Optimieren Sie Ihre Zusammenarbeit',
    'collaboration.cta_description': 'Lassen Sie uns Ihre Collaboration-Strategie entwickeln.',
    
    // General Service Features
    'features.24_7_monitoring': '24/7 Monitoring',
    'features.patch_management': 'Patch Management',
    'features.performance_optimization': 'Performance Optimization',
    'features.backup_recovery': 'Backup & Recovery',
    'features.azure_management': 'Azure Management',
    'features.cost_optimization': 'Cost Optimization',
    'features.security_compliance': 'Security Compliance',
    'features.disaster_recovery': 'Disaster Recovery',
    'features.network_monitoring': 'Network Monitoring',
    'features.firewall_management': 'Firewall Management',
    'features.vpn_setup': 'VPN Setup',
    'features.performance_analysis': 'Performance Analysis',
    'features.storage_optimization': 'Storage Optimization',
    'features.data_backup': 'Data Backup',
    'features.archive_solutions': 'Archive Solutions',
    'features.capacity_planning': 'Capacity Planning',
    
    // Categories
    'category.infrastructure': 'Infrastructure',
    'category.cloud': 'Cloud',
    'category.network': 'Network',
    'category.storage': 'Storage',
    'category.security': 'Security',
    'category.migration': 'Migration',
    'category.collaboration': 'Collaboration',
    'category.consulting': 'Consulting',
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
    'nav.all_services': 'All Services',
    'nav.all_technologies': 'All Technologies',
    'nav.managed_services': 'Managed Services',
    'nav.managed_infrastructure': 'Managed Infrastructure',
    'nav.managed_workplace': 'Managed Workplace',
    'nav.managed_servers': 'Managed Servers',
    'nav.managed_network': 'Managed Network',
    'nav.managed_backup': 'Managed Backup',
    'nav.migration': 'Migration',
    'nav.m365_migration': 'M365 Migration',
    'nav.azure_migration': 'Azure Migration',
    'nav.sharepoint_teams_migration': 'SharePoint & Teams Migration',
    'nav.consulting': 'Consulting',
    'nav.modern_workplace': 'Modern Workplace',
    'nav.cloud_security': 'Cloud Security',
    'nav.collaboration': 'Collaboration',
    'nav.teams_telephone': 'Teams Telephone',
    'nav.workshop': 'Workshop',
    'nav.support': 'Support',
    
    // Common
    'common.contact': 'Contact',
    'common.more_info': 'More Information',
    'common.learn_more': 'Learn More',
    'common.get_started': 'Get Started',
    'common.request_consultation': 'Request Consultation',
    'common.all_services': 'All Services',
    'common.back_to_home': 'Back to Home',
    'common.features': 'Features',
    'common.benefits': 'Benefits',
    'common.solutions': 'Solutions',
    'common.expertise': 'Expertise',
    'common.our_services': 'Our Services',
    'common.why_choose_us': 'Why Choose Us',
    'common.get_quote': 'Get Quote',
    'common.free_consultation': 'Free Consultation',
    
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
    'button.free_consultation': 'Free Consultation',
    'button.infrastructure_consultation': 'Infrastructure Consultation',
    'button.security_consultation': 'Security Consultation',
    'button.collaboration_consultation': 'Collaboration Consultation',
    
    // Managed Infrastructure
    'infrastructure.title': 'Managed Infrastructure',
    'infrastructure.subtitle': 'Our Managed Infrastructure services offer numerous benefits, including increased reliability, improved security, cost savings and scalability.',
    'infrastructure.server_management': 'Server Management',
    'infrastructure.server_description': 'Complete management of your server infrastructure',
    'infrastructure.cloud_infrastructure': 'Cloud Infrastructure',
    'infrastructure.cloud_description': 'Management and optimization of your cloud environment',
    'infrastructure.network_infrastructure': 'Network Infrastructure',
    'infrastructure.network_description': 'Professional network administration and monitoring',
    'infrastructure.storage_management': 'Storage Management',
    'infrastructure.storage_description': 'Secure and efficient storage solutions',
    'infrastructure.24_7_monitoring': '24/7 Monitoring',
    'infrastructure.proactive_maintenance': 'Proactive Maintenance',
    'infrastructure.scalability': 'Scalability',
    'infrastructure.monitoring_description': 'Continuous monitoring of your entire IT infrastructure',
    'infrastructure.maintenance_description': 'Preventive measures to avoid outages',
    'infrastructure.scalability_description': 'Flexible adaptation to your growing requirements',
    'infrastructure.our_services': 'Our Infrastructure Services',
    'infrastructure.our_benefits': 'Our Benefits',
    'infrastructure.focus_description': 'Focus on your core business while we optimize your IT infrastructure',
    'infrastructure.process_title': 'Our Managed Infrastructure Process',
    'infrastructure.process_description': 'We start with a comprehensive analysis of your existing infrastructure and develop a customized strategy for optimal management.',
    'infrastructure.continuous_monitoring': 'Through continuous monitoring and proactive maintenance, we ensure that your IT systems always function optimally and securely.',
    'infrastructure.sla_title': 'Service Level Agreement',
    'infrastructure.cta_title': 'Ready for Professional Infrastructure Management?',
    'infrastructure.cta_description': 'Let us optimize and manage your IT infrastructure.',
    
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
    
    // Cloud Security
    'security.title': 'Cloud Security Consulting',
    'security.subtitle': 'Protect your cloud infrastructure with our comprehensive security solutions',
    'security.cta_title': 'Secure Your Cloud Environment',
    'security.cta_description': 'Let us assess and optimize your cloud security.',
    
    // Collaboration
    'collaboration.title': 'Collaboration',
    'collaboration.subtitle': 'Optimize collaboration in your company with modern collaboration solutions',
    'collaboration.cta_title': 'Optimize Your Collaboration',
    'collaboration.cta_description': 'Let us develop your collaboration strategy.',
    
    // General Service Features
    'features.24_7_monitoring': '24/7 Monitoring',
    'features.patch_management': 'Patch Management',
    'features.performance_optimization': 'Performance Optimization',
    'features.backup_recovery': 'Backup & Recovery',
    'features.azure_management': 'Azure Management',
    'features.cost_optimization': 'Cost Optimization',
    'features.security_compliance': 'Security Compliance',
    'features.disaster_recovery': 'Disaster Recovery',
    'features.network_monitoring': 'Network Monitoring',
    'features.firewall_management': 'Firewall Management',
    'features.vpn_setup': 'VPN Setup',
    'features.performance_analysis': 'Performance Analysis',
    'features.storage_optimization': 'Storage Optimization',
    'features.data_backup': 'Data Backup',
    'features.archive_solutions': 'Archive Solutions',
    'features.capacity_planning': 'Capacity Planning',
    
    // Categories
    'category.infrastructure': 'Infrastructure',
    'category.cloud': 'Cloud',
    'category.network': 'Network',
    'category.storage': 'Storage',
    'category.security': 'Security',
    'category.migration': 'Migration',
    'category.collaboration': 'Collaboration',
    'category.consulting': 'Consulting',
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