import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
              Über uns
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
              }`}>
                <span>Dienstleistungen</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">
                    Alle Dienstleistungen
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/managed-services" className="w-full cursor-pointer">
                    Managed Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/migration" className="w-full cursor-pointer">
                    Migration
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/consulting" className="w-full cursor-pointer">
                    Consulting
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
                <span>Technologien</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/technologies" className="w-full cursor-pointer">
                    Alle Technologien
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/cloud" className="w-full cursor-pointer">
                    Cloud Plattformen
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/security" className="w-full cursor-pointer">
                    Security Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/infrastructure" className="w-full cursor-pointer">
                    Server & Infrastructure
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/database" className="w-full cursor-pointer">
                    Database Systems
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technologies/networking" className="w-full cursor-pointer">
                    Networking
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Support Button */}
          <div className="hidden md:flex items-center space-x-4">
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
                  <Link
                    to="/services/managed-services"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Managed Services
                  </Link>
                  <Link
                    to="/services/migration"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Migration
                  </Link>
                  <Link
                    to="/services/consulting"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Consulting
                  </Link>
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
                    to="/technologies/cloud"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cloud Plattformen
                  </Link>
                  <Link
                    to="/technologies/security"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Security Solutions
                  </Link>
                  <Link
                    to="/technologies/infrastructure"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Server & Infrastructure
                  </Link>
                  <Link
                    to="/technologies/database"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Database Systems
                  </Link>
                  <Link
                    to="/technologies/networking"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Networking
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