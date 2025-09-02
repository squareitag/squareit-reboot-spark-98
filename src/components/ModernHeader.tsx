import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown,
  Home,
  Building2,
  Wrench,
  Monitor,
  Mail,
  Users,
  Server,
  Database,
  Laptop,
  Network,
  HardDrive,
  Cloud,
  Shield,
  Target,
  Headphones,
  FileText,
  Calculator
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import squareItLogo from "@/assets/square-it-logo.png";

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png" 
              alt="Square IT AG" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/about"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{t('nav.about')}</span>
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
              }`}>
                <Wrench className="w-4 h-4" />
                <span>{t('nav.services')}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer flex items-center space-x-2">
                    <Wrench className="w-4 h-4" />
                    <span>{t('nav.all_services')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                
                {/* Managed Services */}
                <div className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{t('nav.managed_services')}</div>
                  <DropdownMenuItem asChild>
                    <Link to="/services/managed-infrastructure" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Server className="w-3 h-3" />
                      <span>{t('nav.managed_infrastructure')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/managed-workplace" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Laptop className="w-3 h-3" />
                      <span>{t('nav.managed_workplace')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/managed-servers" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Database className="w-3 h-3" />
                      <span>{t('nav.managed_servers')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/managed-network" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Network className="w-3 h-3" />
                      <span>{t('nav.managed_network')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/managed-backup" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <HardDrive className="w-3 h-3" />
                      <span>{t('nav.managed_backup')}</span>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />

                {/* Migration */}
                <div className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{t('nav.migration')}</div>
                  <DropdownMenuItem asChild>
                    <Link to="/services/m365-migration" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Cloud className="w-3 h-3" />
                      <span>{t('nav.m365_migration')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/azure-migration" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Cloud className="w-3 h-3" />
                      <span>{t('nav.azure_migration')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/sharepoint-teams-migration" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Users className="w-3 h-3" />
                      <span>{t('nav.sharepoint_teams_migration')}</span>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />

                {/* Consulting */}
                <div className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{t('nav.consulting')}</div>
                  <DropdownMenuItem asChild>
                    <Link to="/services/modern-workplace" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Laptop className="w-3 h-3" />
                      <span>{t('nav.modern_workplace')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/cloud-security" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Shield className="w-3 h-3" />
                      <span>{t('nav.cloud_security')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/collaboration" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Users className="w-3 h-3" />
                      <span>{t('nav.collaboration')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/teams-telephone" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Phone className="w-3 h-3" />
                      <span>{t('nav.teams_telephone')}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/workshop" className="w-full cursor-pointer flex items-center space-x-2 text-xs">
                      <Target className="w-3 h-3" />
                      <span>{t('nav.workshop')}</span>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <Link to="/services/support" className="w-full cursor-pointer flex items-center space-x-2">
                    <Headphones className="w-4 h-4" />
                    <span>{t('nav.support')}</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Technologies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/technologies") ? "text-primary" : "text-muted-foreground"
              }`}>
                <Monitor className="w-4 h-4" />
                <span>{t('nav.technologies')}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/technologies" className="w-full cursor-pointer flex items-center space-x-2">
                    <Monitor className="w-4 h-4" />
                    <span>{t('nav.all_technologies')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/technologies/microsoft-365" className="w-full cursor-pointer flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>Microsoft 365</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/microsoft-azure" className="w-full cursor-pointer flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>Microsoft Azure</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/avepoint-backup" className="w-full cursor-pointer flex items-center space-x-2">
                    <HardDrive className="w-4 h-4" />
                    <span>AvePoint Backup</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/cato-networks" className="w-full cursor-pointer flex items-center space-x-2">
                    <Network className="w-4 h-4" />
                    <span>Cato Networks</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/printix" className="w-full cursor-pointer flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Printix</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/peoplefone" className="w-full cursor-pointer flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Peoplefone</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/keeper" className="w-full cursor-pointer flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Keeper</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/kalkulator"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/kalkulator") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Kalkulator</span>
            </Link>
            
            <Link
              to="/contact"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>{t('nav.contact')}</span>
            </Link>
          </nav>

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

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background">
            <nav className="flex flex-col space-y-2 max-h-96 overflow-y-auto">
              <Link
                to="/about"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Building2 className="w-4 h-4" />
                <span>{t('nav.about')}</span>
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-3">
                  <Wrench className="w-4 h-4" />
                  <span>{t('nav.services')}</span>
                </div>
                <div className="space-y-1">
                  <Link
                    to="/services"
                    className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.all_services')}
                  </Link>
                  
                  {/* Managed Services */}
                  <div className="pl-4">
                    <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">{t('nav.managed_services')}</div>
                    <Link
                      to="/services/managed-infrastructure"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Server className="w-3 h-3" />
                      <span>{t('nav.managed_infrastructure')}</span>
                    </Link>
                    <Link
                      to="/services/managed-workplace"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Laptop className="w-3 h-3" />
                      <span>{t('nav.managed_workplace')}</span>
                    </Link>
                    <Link
                      to="/services/managed-servers"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Database className="w-3 h-3" />
                      <span>{t('nav.managed_servers')}</span>
                    </Link>
                    <Link
                      to="/services/managed-network"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Network className="w-3 h-3" />
                      <span>{t('nav.managed_network')}</span>
                    </Link>
                    <Link
                      to="/services/managed-backup"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HardDrive className="w-3 h-3" />
                      <span>{t('nav.managed_backup')}</span>
                    </Link>
                  </div>

                  {/* Migration Services */}
                  <div className="pl-4 mt-2">
                    <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">{t('nav.migration')}</div>
                    <Link
                      to="/services/m365-migration"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Cloud className="w-3 h-3" />
                      <span>{t('nav.m365_migration')}</span>
                    </Link>
                    <Link
                      to="/services/azure-migration"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Cloud className="w-3 h-3" />
                      <span>{t('nav.azure_migration')}</span>
                    </Link>
                    <Link
                      to="/services/sharepoint-teams-migration"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Users className="w-3 h-3" />
                      <span>{t('nav.sharepoint_teams_migration')}</span>
                    </Link>
                  </div>

                  {/* Consulting Services */}
                  <div className="pl-4 mt-2">
                    <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">{t('nav.consulting')}</div>
                    <Link
                      to="/services/modern-workplace"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Laptop className="w-3 h-3" />
                      <span>{t('nav.modern_workplace')}</span>
                    </Link>
                    <Link
                      to="/services/cloud-security"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Shield className="w-3 h-3" />
                      <span>{t('nav.cloud_security')}</span>
                    </Link>
                    <Link
                      to="/services/collaboration"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Users className="w-3 h-3" />
                      <span>{t('nav.collaboration')}</span>
                    </Link>
                    <Link
                      to="/services/teams-telephone"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-3 h-3" />
                      <span>{t('nav.teams_telephone')}</span>
                    </Link>
                    <Link
                      to="/services/workshop"
                      className="flex items-center space-x-2 py-1 px-2 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Target className="w-3 h-3" />
                      <span>{t('nav.workshop')}</span>
                    </Link>
                  </div>

                  <Link
                    to="/services/support"
                    className="flex items-center space-x-2 py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Headphones className="w-4 h-4" />
                    <span>{t('nav.support')}</span>
                  </Link>
                </div>
              </div>
              
              {/* Mobile Technologies */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-3">
                  <Monitor className="w-4 h-4" />
                  <span>{t('nav.technologies')}</span>
                </div>
                <div className="space-y-1">
                  <Link
                    to="/technologies"
                    className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.all_technologies')}
                  </Link>
                  <Link
                    to="/technologies/microsoft-365"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Cloud className="w-3 h-3" />
                    <span>Microsoft 365</span>
                  </Link>
                  <Link
                    to="/technologies/microsoft-azure"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Cloud className="w-3 h-3" />
                    <span>Microsoft Azure</span>
                  </Link>
                  <Link
                    to="/technologies/avepoint-backup"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HardDrive className="w-3 h-3" />
                    <span>AvePoint Backup</span>
                  </Link>
                  <Link
                    to="/technologies/cato-networks"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Network className="w-3 h-3" />
                    <span>Cato Networks</span>
                  </Link>
                  <Link
                    to="/technologies/printix"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="w-3 h-3" />
                    <span>Printix</span>
                  </Link>
                  <Link
                    to="/technologies/peoplefone"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-3 h-3" />
                    <span>Peoplefone</span>
                  </Link>
                  <Link
                    to="/technologies/keeper"
                    className="flex items-center space-x-2 py-1 px-4 text-xs text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Shield className="w-3 h-3" />
                    <span>Keeper</span>
                  </Link>
                </div>
              </div>
              
              <Link
                to="/kalkulator"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/kalkulator")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Calculator className="w-4 h-4" />
                <span>Kalkulator</span>
              </Link>
              
              <Link
                to="/contact"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-4 h-4" />
                <span>{t('nav.contact')}</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ModernHeader;