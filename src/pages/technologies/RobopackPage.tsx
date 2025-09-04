import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Zap, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const RobopackPage = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Vollautomatisierung",
      description: "Reduzieren Sie manuelle Prozesse um bis zu 90% durch intelligente Automatisierung"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Massive Zeitersparnis",
      description: "Sparen Sie bis zu 20 Stunden pro Woche durch automatisierte Workflows"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Höchste Sicherheitsstandards mit Azure AD Integration und Zero-Trust-Architektur"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "REST API Integration",
      description: "Nahtlose Integration in bestehende Systeme und Workflows"
    }
  ];

  const benefits = [
    "Automatisierte Paketierung von Anwendungen",
    "Schnelle Bereitstellung über Microsoft Intune",
    "Kontinuierliche Updates ohne manuellen Aufwand",
    "Zentrale Verwaltung aller App-Pakete",
    "Kostenfreie Demo verfügbar",
    "Schnelle Einrichtung in wenigen Minuten",
    "Deutscher Support und Betreuung"
  ];

  return (
    <>
      <SEOHead 
        title="Robopack - Automatisiertes Microsoft Intune App-Management | Square IT"
        description="Revolutionieren Sie Ihr Microsoft Intune App-Management mit Robopack: Automatisierte Paketierung, Bereitstellung und Updates. Sparen Sie bis zu 20 Stunden pro Woche."
        keywords="Robopack, Microsoft Intune, App-Management, Automatisierung, Microsoft 365, Software Central, Square IT"
        canonical="https://www.squareit.ch/technologies/robopack"
      />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  Software Central Partner
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Robopack
                </h1>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <Badge variant="outline">Automatisiert</Badge>
                  <Badge variant="outline">Zeitsparend</Badge>
                  <Badge variant="outline">Enterprise-Ready</Badge>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Revolutionieren Sie Ihr Microsoft Intune App-Management mit automatisierter 
                Paketierung, Bereitstellung und Updates. Als zertifizierter Implementierungspartner 
                bieten wir Ihnen professionelle <Link to="/services" className="text-primary hover:underline">IT-Services</Link> und umfassende <Link to="/services/consulting" className="text-primary hover:underline">Beratung</Link> für eine erfolgreiche Umsetzung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
                  <Link to="/contact">
                    Kostenlose Demo anfragen
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/technologies">
                    Alle Technologien
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-destructive">
                  Das Problem
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Die manuelle Verwaltung von Anwendungen in Microsoft Intune ist zeitaufwändig 
                    und fehleranfällig. IT-Administratoren verbringen Stunden damit, Apps zu 
                    paketieren, zu testen und bereitzustellen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Manuelle Paketierung kostet wertvolle Zeit</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Updates müssen manuell verwaltet werden</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Fehlerhafte Pakete verursachen Ausfälle</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Die Lösung: Robopack
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Robopack automatisiert den gesamten App-Management-Prozess in Microsoft Intune. 
                    Von der Paketierung bis zur Bereitstellung – alles läuft vollautomatisch ab.
                  </p>
                  <ul className="space-y-2">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Leistungsstarke Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Modernste Technologien für effiziente IT-Automatisierung und Management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">
                  Ihre Vorteile mit Robopack
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Erleben Sie eine neue Dimension der IT-Automatisierung und konzentrieren 
                  Sie sich auf strategische Aufgaben statt auf repetitive Prozesse.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-slide-up">
                <Card className="gradient-hero text-white shadow-elegant">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Users className="w-16 h-16 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">
                        Bereit für die nächste Stufe?
                      </h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span>✨ Kostenlose Demo verfügbar</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span>🚀 Schnelle Einrichtung</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span>💬 Deutscher Support</span>
                        </div>
                      </div>
                      <Button size="lg" variant="secondary" className="w-full" asChild>
                        <Link to="/contact">
                          Demo vereinbaren
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Info */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Zertifizierter Implementierungspartner
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Als zertifizierter Partner von Software Central bieten wir Ihnen professionelle 
                Implementierung, <Link to="/services/support" className="text-primary hover:underline">Support</Link> und <Link to="/about" className="text-primary hover:underline">Expertise</Link> für Robopack.
              </p>
              
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Zertifiziert</h4>
                      <p className="text-sm text-muted-foreground">
                        Offizielle Zertifizierung als Software Central Partner
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Erfahren</h4>
                      <p className="text-sm text-muted-foreground">
                        Langjährige Erfahrung in Microsoft-Technologien
                      </p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="font-bold mb-2">Lokal</h4>
                      <p className="text-sm text-muted-foreground">
                        Deutscher Support und persönliche Betreuung
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Revolutionieren Sie Ihr App-Management
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Starten Sie noch heute mit Robopack und erleben Sie die Zukunft 
              des automatisierten Microsoft Intune App-Managements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
                <Link to="/contact">
                  Kostenlose Demo anfragen
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/technologies/tenant-manager">
                  Tenant Manager entdecken
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RobopackPage;