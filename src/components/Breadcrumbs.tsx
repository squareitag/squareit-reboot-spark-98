import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  if (pathSegments.length === 0) return null;

  const getBreadcrumbLabel = (segment: string, index: number) => {
    const fullPath = '/' + pathSegments.slice(0, index + 1).join('/');
    
    // Map common paths to German labels
    const pathLabels: Record<string, string> = {
      '/about': 'Über uns',
      '/services': 'Dienstleistungen', 
      '/services/managed-services': 'Managed Services',
      '/services/managed-infrastructure': 'Managed Infrastructure',
      '/services/managed-workplace': 'Managed Workplace',
      '/services/managed-servers': 'Managed Servers',
      '/services/managed-network': 'Managed Network', 
      '/services/managed-backup': 'Managed Backup',
      '/services/migration': 'Migration',
      '/services/m365-migration': 'M365 Migration',
      '/services/azure-migration': 'Azure Migration',
      '/services/sharepoint-teams-migration': 'SharePoint & Teams Migration',
      '/services/consulting': 'Consulting',
      '/services/modern-workplace': 'Modern Workplace',
      '/services/cloud-security': 'Cloud Security',
      '/services/collaboration': 'Collaboration',
      '/services/teams-telephone': 'Teams Telephone',
      '/services/workshop': 'Workshop',
      '/services/support': 'Support',
      '/technologies': 'Technologien',
      '/industries': 'Branchen',
      '/contact': 'Kontakt',
      '/careers': 'Karriere',
      '/privacy': 'Datenschutz'
    };

    return pathLabels[fullPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center hover:text-primary transition-colors"
        title="Zurück zur Startseite"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Startseite</span>
      </Link>
      
      {pathSegments.map((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;
        
        return (
          <div key={path} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-foreground font-medium" aria-current="page">
                {getBreadcrumbLabel(segment, index)}
              </span>
            ) : (
              <Link 
                to={path} 
                className="hover:text-primary transition-colors"
                title={`Zurück zu ${getBreadcrumbLabel(segment, index)}`}
              >
                {getBreadcrumbLabel(segment, index)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;