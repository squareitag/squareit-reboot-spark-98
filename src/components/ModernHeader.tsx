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
  Calculator,
  GraduationCap,
  Heart,
  Scale,
  Banknote,
  Stethoscope,
  Factory,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Settings,
  Zap,
  RefreshCw
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
              <DropdownMenuContent className="w-[600px] bg-background border border-border shadow-xl z-50 p-0">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Unsere Services</h3>
                    <p className="text-sm text-muted-foreground">Umfassende IT-Lösungen für Ihr Unternehmen</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Managed Services Column */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3 px-2 text-left">Managed Services</h4>
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/managed-infrastructure" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-secondary-accent hover:bg-secondary-accent hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                             <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/30 transition-colors">
                               <Server className="w-3 h-3 text-primary group-hover:text-white" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Infrastructure</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/managed-workplace" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-secondary-accent hover:bg-secondary-accent hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/30 transition-colors">
                              <Laptop className="w-3 h-3 text-primary group-hover:text-white" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Workplace</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/managed-servers" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Database className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Servers</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/managed-network" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Network className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Network</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/managed-backup" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <HardDrive className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Backup</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Migration Column */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3 px-2 text-left">Migration</h4>
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/m365-migration" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Cloud className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">M365 Migration</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/azure-migration" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Cloud className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Azure Migration</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/sharepoint-teams-migration" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Users className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">SharePoint/Teams</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Consulting Column */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3 px-2 text-left">Consulting</h4>
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/modern-workplace" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Laptop className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Modern Workplace</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/cloud-security" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Shield className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Cloud Security</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/collaboration" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Users className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Collaboration</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/teams-telephone" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Phone className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Teams Telephone</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/services/workshop" className="group w-full cursor-pointer flex flex-col space-y-2 p-3 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Target className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-white transition-colors">Workshop</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </div>
                  
                  <div className="border-t border-border/30 pt-4 grid grid-cols-2 gap-4">
                    <DropdownMenuItem asChild className="p-0">
                      <Link to="/services" className="group w-full cursor-pointer flex items-center justify-center space-x-2 p-3 rounded-lg bg-primary/5 transition-all duration-200 hover:bg-primary/10 hover:shadow-md">
                        <Wrench className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Alle Services</span>
                        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0">
                      <Link to="/services/support" className="group w-full cursor-pointer flex items-center justify-center space-x-2 p-3 rounded-lg bg-secondary/50 transition-all duration-200 hover:bg-secondary hover:shadow-md">
                        <Headphones className="w-4 h-4 text-foreground" />
                        <span className="text-sm font-medium text-foreground">Support</span>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/industries") ? "text-primary" : "text-muted-foreground"
              }`}>
                <Factory className="w-4 h-4" />
                <span>Branchen</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[520px] bg-background border border-border shadow-xl z-50 p-0">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Branchen & Fachbereiche</h3>
                    <p className="text-sm text-muted-foreground">Spezialisierte IT-Lösungen für Ihre Branche</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/industries/schools" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <GraduationCap className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Schulen & Bildung</span>
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                            Moderne IT-Infrastrukturen für Bildungseinrichtungen
                          </p>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/industries/ngo" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Heart className="w-4 h-4 text-primary" />
                            </div>
                           <span className="font-medium text-foreground group-hover:text-white transition-colors">NGOs & Non-Profits</span>
                         </div>
                         <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                           Kosteneffiziente Lösungen für gemeinnützige Organisationen
                         </p>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/industries/finance" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Banknote className="w-4 h-4 text-primary" />
                            </div>
                           <span className="font-medium text-foreground group-hover:text-white transition-colors">Finanzdienstleistungen</span>
                         </div>
                         <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                           Hochsichere IT-Infrastrukturen für Finanzunternehmen
                         </p>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                    
                    <div className="space-y-3">
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/industries/trustees" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Scale className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Treuhänder & Fiduziär</span>
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                            Vertrauensvolle IT-Partner für Treuhandgesellschaften
                          </p>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/industries/healthcare" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Stethoscope className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Gesundheitswesen</span>
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                            HIPAA-konforme IT-Lösungen für medizinische Einrichtungen
                          </p>
                        </Link>
                      </DropdownMenuItem>
                      
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <DropdownMenuItem asChild className="p-0">
                          <Link to="/industries" className="group w-full cursor-pointer flex items-center justify-center space-x-2 p-3 rounded-lg bg-primary/5 transition-all duration-200 hover:bg-primary/10 hover:shadow-md">
                            <span className="text-sm font-medium text-primary">Alle Branchen ansehen</span>
                            <ChevronDown className="w-4 h-4 text-primary rotate-[-90deg] transition-transform group-hover:translate-x-1" />
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </div>
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
              <DropdownMenuContent className="w-[520px] bg-background border border-border shadow-xl z-50 p-0">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technologien</h3>
                    <p className="text-sm text-muted-foreground">Modernste Technologien für Ihr Unternehmen</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3 text-left">
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/microsoft-365" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Cloud className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Microsoft 365</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Produktivitäts- und Collaboration-Suite
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/microsoft-azure" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Cloud className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Microsoft Azure</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Enterprise Cloud Platform
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/avepoint-backup" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <HardDrive className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">AvePoint Backup</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Microsoft 365 Backup-Lösung
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/cato-networks" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Network className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Cato Networks</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Cloud-native Netzwerksicherheit
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                    
                    <div className="space-y-3 text-left">
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/printix" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Printix</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Cloud-basiertes Print Management
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/peoplefone" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Phone className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Peoplefone</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Cloud-Telefonie und VoIP
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/keeper" className="group w-full cursor-pointer flex items-center space-x-3 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Shield className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Keeper</span>
                            <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                              Enterprise Password Manager
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                         <Link to="/technologies/robopack" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                           <div className="flex items-center space-x-3">
                             <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                               <Zap className="w-4 h-4 text-primary" />
                             </div>
                             <span className="font-medium text-foreground group-hover:text-white transition-colors">Robopack</span>
                           </div>
                           <p className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                             Automatisiertes Intune App-Management
                           </p>
                        </Link>
                      </DropdownMenuItem>
                      
                      <DropdownMenuItem asChild className="p-0">
                        <Link to="/technologies/tenant-manager" className="group w-full cursor-pointer flex flex-col space-y-2 p-4 rounded-lg border border-border/50 transition-all duration-200 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <Building2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground group-hover:text-white transition-colors">Tenant Manager</span>
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                            Multi-Tenant M365 Management für IT-Teams
                          </p>
                        </Link>
                      </DropdownMenuItem>
                      
                      
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <DropdownMenuItem asChild className="p-0">
                          <Link to="/technologies" className="group w-full cursor-pointer flex items-center justify-center space-x-2 p-3 rounded-lg bg-primary/5 transition-all duration-200 hover:bg-primary/10 hover:shadow-md">
                            <span className="text-sm font-medium text-primary">Alle Technologien</span>
                            <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </div>
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
              
              {/* Mobile Industries */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-3">
                  <Factory className="w-4 h-4" />
                  <span>Branchen</span>
                </div>
                <div className="space-y-1">
                  <Link
                    to="/industries/schools"
                    className="flex items-center space-x-2 py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Schulen & Bildung</span>
                  </Link>
                  <Link
                    to="/industries/ngo"
                    className="flex items-center space-x-2 py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-4 h-4" />
                    <span>NGOs & Non-Profits</span>
                  </Link>
                  <Link
                    to="/industries/finance"
                    className="flex items-center space-x-2 py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Banknote className="w-4 h-4" />
                    <span>Finanzdienstleistungen</span>
                  </Link>
                  <Link
                    to="/industries/trustees"
                    className="flex items-center space-x-2 py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Scale className="w-4 h-4" />
                    <span>Treuhänder & Fiduziär</span>
                  </Link>
                  <Link
                    to="/industries/healthcare"
                    className="flex items-center space-x-2 py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>Gesundheitswesen & Medizin</span>
                  </Link>
                </div>
              </div>

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