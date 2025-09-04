import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Building2, Shield, Users, Zap, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const TenantManagerPage = () => {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Multi-Tenant Ready",
      description: "Verwalten Sie hunderte von Mandanten effizient aus einer zentralen Oberfläche"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Höchste Sicherheitsstandards mit Azure AD Integration und Zero-Trust-Architektur"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Massive Zeitersparnis",
      description: "Sparen Sie bis zu 20 Stunden pro Woche durch automatisierte Workflows"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "REST API Integration",
      description: "Nahtlose Integration in bestehende Systeme und Workflows"
    }
  ];

  const benefits = [
    "Zentrale Verwaltung aller M365-Mandanten",
    "Automatisierte Benutzer- und Gruppenverwaltung",
    "Vereinfachte Lizenz-Administration",
    "Einheitliche Sicherheitsrichtlinien",
    "Umfassendes Reporting und Monitoring",
    "Kostenfreie Demo verfügbar",
    "Schnelle Einrichtung",
    "Deutscher Support und Betreuung"
  ];

  const challenges = [
    "Unzählige Browser-Fenster für verschiedene Mandanten",
    "Zeitaufwändige manuelle Verwaltungsprozesse",
    "Inkonsistente Konfigurationen zwischen Mandanten",
    "Fehleranfällige manuelle Benutzeradministration",
    "Mangelnde Übersicht über alle Mandanten"
  ];

  return (
    <>
      <SEOHead 
        title="Tenant Manager - Multi-Tenant M365 Management für MSPs | Square IT"
        description="Vereinfachen Sie Ihr Multi-Tenant M365 Management mit Tenant Manager. Schluss mit manuellen Prozessen und unzähligen Browser-Fenstern. Professionelle MSP-Lösung."
        keywords="Tenant Manager, Multi-Tenant, M365 Management, MSP, Microsoft 365, Software Central, Square IT"
        canonical="https://www.squareit.ch/technologies/tenant-manager"
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
                  Tenant Manager
                </h1>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <Badge variant="outline">Multi-Tenant</Badge>
                  <Badge variant="outline">Sicher</Badge>
                  <Badge variant="outline">MSP-Ready</Badge>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Vereinfachen Sie Ihr Multi-Tenant M365 Management. Schluss mit manuellen 
                Prozessen und unzähligen Browser-Fenstern. Als zertifizierter Partner bieten 
                wir Ihnen professionelle <Link to="/services" className="text-primary hover:underline">Managed Services</Link> und umfassende <Link to="/services/consulting" className="text-primary hover:underline">Beratung</Link> für MSPs.
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
                  Die Herausforderung für MSPs
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Die Verwaltung mehrerer Microsoft 365-Mandanten ist komplex und zeitaufwändig. 
                    MSPs kämpfen täglich mit ineffizienten Prozessen und mangelnder Übersicht.
                  </p>
                  <ul className="space-y-2">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Die Lösung: Tenant Manager
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Tenant Manager revolutioniert das Multi-Tenant Management für MSPs. 
                    Eine zentrale Plattform für alle Ihre Microsoft 365-Mandanten.
                  </p>
                  <ul className="space-y-2">
                    {benefits.slice(0, 5).map((benefit, index) => (
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
                Leistungsstarke MSP-Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Modernste Technologien für effizientes Multi-Tenant M365 Management
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

        {/* MSP Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">
                  Perfekt für MSPs entwickelt
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Tenant Manager wurde speziell für die Bedürfnisse von Managed Service Providern 
                  entwickelt und bietet alle Funktionen für effizientes Multi-Tenant Management.
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
                      <Building2 className="w-16 h-16 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">
                        Bereit für effizientes MSP-Management?
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

        {/* Use Cases */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Typische Anwendungsfälle
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Wie MSPs Tenant Manager erfolgreich einsetzen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Benutzer-Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Verwalten Sie Benutzer und Gruppen über alle Mandanten hinweg 
                    mit einheitlichen Richtlinien und automatisierten Workflows.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Sicherheits-Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Implementieren Sie einheitliche Sicherheitsrichtlinien und 
                    überwachen Sie den Sicherheitsstatus aller Mandanten zentral.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Lizenz-Verwaltung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Optimieren Sie die Lizenznutzung über alle Mandanten und 
                    erhalten Sie detaillierte Reports für Kostenkontrolle.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ihr zertifizierter Implementierungspartner
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Als zertifizierter Partner von Software Central unterstützen wir Sie bei der 
                erfolgreichen Implementierung von Tenant Manager. Profitieren Sie von unserer 
                <Link to="/about" className="text-primary hover:underline"> langjährigen Erfahrung</Link> und unserem <Link to="/services/support" className="text-primary hover:underline">erstklassigen Support</Link>.
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
                      <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="font-bold mb-2">MSP-Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Spezialisiert auf Managed Service Provider Lösungen
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
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Revolutionieren Sie Ihr MSP-Management
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Starten Sie noch heute mit Tenant Manager und erleben Sie die Zukunft 
              des Multi-Tenant M365 Managements für MSPs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
                <Link to="/contact">
                  Kostenlose Demo anfragen
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/technologies/robopack">
                  Robopack entdecken
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TenantManagerPage;