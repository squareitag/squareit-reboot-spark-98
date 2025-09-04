import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SI</span>
            </div>
            <span className="text-xl font-bold text-foreground">Square IT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t('nav.about')}
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
              }`}>
                <span>{t('nav.services')}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">
                    {t('nav.all_services')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-services" className="w-full cursor-pointer">
                    {t('nav.managed_services')} →
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-infrastructure" className="w-full cursor-pointer pl-6">
                    {t('nav.managed_infrastructure')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-workplace" className="w-full cursor-pointer pl-6">
                    Managed Workplace
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-servers" className="w-full cursor-pointer pl-6">
                    Managed Servers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-network" className="w-full cursor-pointer pl-6">
                    Managed Network
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-backup" className="w-full cursor-pointer pl-6">
                    Managed Backup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/migration" className="w-full cursor-pointer">
                    Migration →
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/m365-migration" className="w-full cursor-pointer pl-6">
                    M365 Migration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/azure-migration" className="w-full cursor-pointer pl-6">
                    Azure Migration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/sharepoint-teams-migration" className="w-full cursor-pointer pl-6">
                    SharePoint & Teams Migration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/consulting" className="w-full cursor-pointer">
                    Consulting →
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/modern-workplace" className="w-full cursor-pointer pl-6">
                    Modern Workplace
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/cloud-security" className="w-full cursor-pointer pl-6">
                    Cloud Security
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/collaboration" className="w-full cursor-pointer pl-6">
                    Collaboration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/teams-telephone" className="w-full cursor-pointer pl-6">
                    Teams Telephone
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/workshop" className="w-full cursor-pointer pl-6">
                    Workshop
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/support" className="w-full cursor-pointer">
                    Support
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Technologies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/technologies") ? "text-primary" : "text-muted-foreground"
              }`}>
                <span>{t('nav.technologies')}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/technologies" className="w-full cursor-pointer">
                    Alle Technologien
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/microsoft-365" className="w-full cursor-pointer">
                    Microsoft 365
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/microsoft-azure" className="w-full cursor-pointer">
                    Microsoft Azure
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/avepoint-backup" className="w-full cursor-pointer">
                    AvePoint Backup
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/cato-networks" className="w-full cursor-pointer">
                    Cato Networks
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/printix" className="w-full cursor-pointer">
                    Printix
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/peoplefone" className="w-full cursor-pointer">
                    Peoplefone
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/keeper" className="w-full cursor-pointer">
                    Keeper
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/robopack" className="w-full cursor-pointer">
                    Robopack
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/tenant-manager" className="w-full cursor-pointer">
                    Tenant Manager
                  </Link>
                </DropdownMenuItem>
                {/* Force refresh */}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Support Button and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/support">
                <Phone className="w-4 h-4 mr-2" />
                Support
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Dienstleistungen</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/services"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Alle Dienstleistungen
                  </Link>
                  <div className="py-1">
                    <Link
                      to="/services/managed-services"
                      className="block py-1 text-sm text-muted-foreground hover:text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Managed Services
                    </Link>
                    <div className="pl-4 space-y-1">
                      <Link
                        to="/services/managed-infrastructure"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Managed Infrastructure
                      </Link>
                      <Link
                        to="/services/managed-workplace"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Managed Workplace
                      </Link>
                      <Link
                        to="/services/managed-servers"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Managed Servers
                      </Link>
                      <Link
                        to="/services/managed-network"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Managed Network
                      </Link>
                      <Link
                        to="/services/managed-backup"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Managed Backup
                      </Link>
                    </div>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/services/migration"
                      className="block py-1 text-sm text-muted-foreground hover:text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Migration
                    </Link>
                    <div className="pl-4 space-y-1">
                      <Link
                        to="/services/m365-migration"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        M365 Migration
                      </Link>
                      <Link
                        to="/services/azure-migration"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Azure Migration
                      </Link>
                      <Link
                        to="/services/sharepoint-teams-migration"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        SharePoint & Teams Migration
                      </Link>
                    </div>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/services/consulting"
                      className="block py-1 text-sm text-muted-foreground hover:text-primary font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                    <div className="pl-4 space-y-1">
                      <Link
                        to="/services/modern-workplace"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Modern Workplace
                      </Link>
                      <Link
                        to="/services/cloud-security"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Cloud Security
                      </Link>
                      <Link
                        to="/services/collaboration"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Collaboration
                      </Link>
                      <Link
                        to="/services/teams-telephone"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Teams Telephone
                      </Link>
                      <Link
                        to="/services/workshop"
                        className="block py-1 text-xs text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Workshop
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="/services/support"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </Link>
                </div>
              </div>
              
              {/* Mobile Technologies Menu */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Technologien</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/technologies"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Alle Technologien
                  </Link>
                  <Link
                    to="/technologies/microsoft-365"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Microsoft 365
                  </Link>
                  <Link
                    to="/technologies/microsoft-azure"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Microsoft Azure
                  </Link>
                  <Link
                    to="/technologies/avepoint-backup"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AvePoint Backup
                  </Link>
                  <Link
                    to="/technologies/cato-networks"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cato Networks
                  </Link>
                  <Link
                    to="/technologies/printix"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Printix
                  </Link>
                  <Link
                    to="/technologies/peoplefone"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Peoplefone
                  </Link>
                  <Link
                    to="/technologies/keeper"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Keeper
                  </Link>
                  <Link
                    to="/technologies/robopack"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Robopack
                  </Link>
                  <Link
                    to="/technologies/tenant-manager"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tenant Manager
                  </Link>
                </div>
              </div>
              
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/services/support">
                    <Phone className="w-4 h-4 mr-2" />
                    Support
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;