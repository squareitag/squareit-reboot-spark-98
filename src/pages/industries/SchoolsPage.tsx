import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Shield, 
  Users, 
  BookOpen, 
  Wifi, 
  Monitor,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const SchoolsPage = () => {
  return (
    <>
      <SEOHead 
        title="IT-Lösungen Schulen Zürich | Square IT"
        description="Digitale Bildung mit sicheren IT-Lösungen für Schulen. Digitale Klassenzimmer, WLAN-Infrastruktur und Lernmanagement für moderne Bildungseinrichtungen."
        keywords="Schul-IT, Bildungstechnologie, Digitale Klassenzimmer, WLAN Schulen, Schülerdatenschutz, LMS"
        canonical="https://www.squareit.ch/industries/schools"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Bildungslösungen
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IT-Lösungen für Schulen & Bildungseinrichtungen
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Bildung durch sichere, skalierbare und innovative Technologielösungen stärken. 
              Von digitalen Klassenzimmern bis zu Verwaltungssystemen – wir helfen Schulen im digitalen Zeitalter zu gedeihen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Bildungsberatung erhalten</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kalkulator">IT-Kosten berechnen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Schools */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Umfassende IT-Lösungen für Schulen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von Klassenzimmertechnik bis zu Verwaltungssystemen bieten wir komplette IT-Infrastruktur für moderne Bildung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digitale Klassenzimmerlösungen</CardTitle>
                <CardDescription>
                  Interaktive Whiteboards, Tablets und Lernmanagementsysteme für ansprechende Bildung.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Schülerdatenschutz</CardTitle>
                <CardDescription>
                  DSGVO-konforme Systeme zum Schutz sensibler Schüler- und Mitarbeiterdaten mit fortschrittlicher Sicherheit.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wifi className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Schulweite WLAN-Netzwerke</CardTitle>
                <CardDescription>
                  Zuverlässige, sichere drahtlose Netzwerke für dichte Bildungsumgebungen konzipiert.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Lernmanagementsysteme</CardTitle>
                <CardDescription>
                  Moderne LMS-Plattformen für Online-Lernen, Aufgaben und Verfolgung des Schülerfortschritts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Verwaltungssysteme</CardTitle>
                <CardDescription>
                  Schülerinformationssysteme, Notenbücher und Kommunikationsplattformen für effiziente Verwaltung.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Fernunterricht-Support</CardTitle>
                <CardDescription>
                  Komplette Infrastruktur für hybrides und Fernlernen mit Microsoft Teams für Bildungseinrichtungen.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Was Schulen über uns sagen</h2>
            <p className="text-xl text-muted-foreground">
              Vertraut von Bildungseinrichtungen in der ganzen Schweiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">
                  "SquareIT hat die Technologie-Infrastruktur unserer Schule transformiert. Unsere Lehrer haben jetzt zuverlässige Tools, 
                  und unsere Schüler sind mehr mit dem Lernen beschäftigt. Das Support-Team ist außergewöhnlich."
                </p>
                <div className="font-semibold">Sarah Weber</div>
                <div className="text-sm text-muted-foreground">IT-Direktorin, Gymnasium Zürich Nord</div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">
                  "Die Migration zu Microsoft 365 für Bildungseinrichtungen war nahtlos. Schüler und Lehrer können jetzt 
                  effektiv von überall aus zusammenarbeiten. Die beste Investition, die wir seit Jahren gemacht haben."
                </p>
                <div className="font-semibold">Dr. Andreas Müller</div>
                <div className="text-sm text-muted-foreground">Schulleiter, Kantonsschule Basel</div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">
                  "Ihre Cybersicherheitslösungen gaben uns Seelenfrieden. Mit sensiblen Schülerdaten 
                  brauchten wir Experten, die die Compliance-Anforderungen im Bildungswesen verstehen."
                </p>
                <div className="font-semibold">Maria Rossi</div>
                <div className="text-sm text-muted-foreground">ICT-Managerin, International School Geneva</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Bereit, die Technologie Ihrer Schule zu transformieren?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Lassen Sie uns besprechen, wie wir Ihre Bildungsumgebung mit modernen, sicheren IT-Lösungen verbessern können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Beratung vereinbaren</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">Unsere Services ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SchoolsPage;