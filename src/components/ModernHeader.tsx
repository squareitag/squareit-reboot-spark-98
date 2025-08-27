import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import squareItLogo from "@/assets/logo.png";

const ModernHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Sidebar trigger and Logo */}
          <div className="flex items-center space-x-4">
            <SidebarTrigger className="h-6 w-6" />
            
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={squareItLogo} 
                alt="Square IT" 
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Square IT</span>
                <span className="text-xs text-muted-foreground hidden sm:block">AG</span>
              </div>
            </Link>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <Link to="/services/support">
                <Phone className="w-4 h-4 mr-2" />
                {t('nav.support')}
              </Link>
            </Button>

            <Button size="sm" className="gradient-primary text-white" asChild>
              <Link to="/contact">
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;