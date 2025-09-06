import { Link } from "react-router-dom";
import { ArrowLeft, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InternalNavigationProps {
  showBackToHome?: boolean;
  previousPage?: {
    url: string;
    title: string;
  };
  nextPage?: {
    url: string;
    title: string;
  };
  relatedPages?: Array<{
    url: string;
    title: string;
    description?: string;
  }>;
}

const InternalNavigation = ({ 
  showBackToHome = true, 
  previousPage, 
  nextPage, 
  relatedPages 
}: InternalNavigationProps) => {
  return (
    <div className="border-t border-border pt-8 mt-12">
      {/* Back to Home */}
      {showBackToHome && (
        <div className="mb-6">
          <Button variant="outline" asChild className="group">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Zurück zur Startseite</span>
            </Link>
          </Button>
        </div>
      )}

      {/* Previous/Next Navigation */}
      {(previousPage || nextPage) && (
        <div className="flex justify-between items-center mb-8">
          {previousPage ? (
            <Button variant="ghost" asChild className="group">
              <Link to={previousPage.url} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Vorherige Seite</div>
                  <div className="font-medium">{previousPage.title}</div>
                </div>
              </Link>
            </Button>
          ) : <div />}
          
          {nextPage && (
            <Button variant="ghost" asChild className="group">
              <Link to={nextPage.url} className="flex items-center space-x-2">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Nächste Seite</div>
                  <div className="font-medium">{nextPage.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      )}

      {/* Related Pages */}
      {relatedPages && relatedPages.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Verwandte Seiten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.url}
                to={page.url}
                className="group p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {page.title}
                    </h4>
                    {page.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {page.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InternalNavigation;