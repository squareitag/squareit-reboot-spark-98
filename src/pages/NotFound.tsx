import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import InternalNavigation from "@/components/InternalNavigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Seite nicht gefunden - 404 Fehler"
        description="Die angeforderte Seite konnte nicht gefunden werden. Kehren Sie zur Homepage zurück oder verwenden Sie unsere Navigation."
        keywords="404 Fehler, Seite nicht gefunden, Square IT, IT Services"
      />
      <div className="min-h-screen flex items-center justify-center bg-secondary/10">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-4xl">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Seite nicht gefunden</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Entschuldigung, die angeforderte Seite konnte nicht gefunden werden. 
            Möglicherweise wurde sie verschoben oder gelöscht.
          </p>
          
          <div className="space-y-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/" className="flex items-center justify-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Zurück zur Startseite</span>
              </Link>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/services" className="flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span>Services durchsuchen</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Kontakt aufnehmen</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <InternalNavigation 
              showBackToHome={false}
              relatedPages={[
                {
                  url: "/services",
                  title: "Alle Services",
                  description: "Entdecken Sie unsere IT-Dienstleistungen"
                },
                {
                  url: "/about",
                  title: "Über uns",
                  description: "Lernen Sie Square IT AG kennen"
                },
                {
                  url: "/technologies",
                  title: "Technologien",
                  description: "Unsere Technologie-Partner"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
