import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SquareITLogo from "./SquareITLogo";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <SquareITLogo className="h-8 w-8" />
              <span className="text-xl font-bold">Square IT</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Beste Service- und Lösungsangebote für Ihre IT-Infrastruktur.
              Vertrauen Sie auf unsere Expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/managed-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link to="/services/migration" className="text-muted-foreground hover:text-primary transition-colors">
                  Migration
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-muted-foreground hover:text-primary transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.technologies')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.careers')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('nav.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:hello@squareit.ch" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@squareit.ch
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="tel:+41415602100" className="text-muted-foreground hover:text-primary transition-colors">
                  +41 41 560 21 00
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  Alpenstrasse 12<br />6300 Zug
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Square IT AG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;