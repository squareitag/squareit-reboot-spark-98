import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Zap, Shield, Users, ArrowRight, Target, Download, RefreshCw, Settings, FileText, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const RobopackPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatisierte App-Paketierung",
      description: "Konvertieren Sie Anwendungen automatisch in Intune-kompatible Formate",
      details: ["MSI zu Intunewin Konvertierung", "Komplexe App-Unterstützung", "Abhängigkeitserkennung", "Silent Install Validierung"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Schnelle Bereitstellung",
      description: "Stellen Sie Anwendungen gleichzeitig in mehreren Tenants bereit",
      details: ["Multi-Tenant Bereitstellung", "Automatisierte Tests", "Rollback-Funktionen", "Bereitstellungsplanung"]
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Sofortiges Patch-Management",
      description: "Automatisierte Anwendungsupdates ohne manuelle Eingriffe",
      details: ["Automatische Updates", "Patch-Validierung", "Update-Planung", "Versionskontrolle"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicherheit & Compliance",
      description: "Integrierte Sicherheitsprüfungen und Compliance-Checks",
      details: ["Sicherheitsscanning", "Compliance-Validierung", "Zertifikatsverwaltung", "Hash-Verifizierung"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Anwendungskatalog",
      description: "Umfassender Katalog vorpaketierter Anwendungen",
      details: ["5000+ verfügbare Apps", "Regelmäßige Updates", "Benutzerdefinierte Kataloge", "Enterprise Software"]
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Multi-Tenant Support",
      description: "Verwalten Sie Apps über mehrere Intune-Tenants von einer Oberfläche",
      details: ["Zentralisierte Verwaltung", "Tenant-Isolation", "Bulk-Operationen", "Tenant-übergreifende Berichte"]
    }
  ];

  const stats = [
    { number: "5000+", label: "Apps Paketiert" },
    { number: "24/7", label: "Automatische Updates" },
    { number: "99.9%", label: "Erfolgsrate" },
    { number: "1000+", label: "Betreute IT-Teams" }
  ];

  const benefits = [
    "Mühelose Konvertierung von Anwendungen",
    "Beschleunigte Bereitstellung in Multiple Tenants",
    "Sofortige Patch-Updates ohne manuellen Aufwand",
    "Umfassender Anwendungskatalog mit 5000+ Apps",
    "Integrierte Sicherheitsprüfungen",
    "Automatisierte Tests und Validierung",
    "Rollback-Funktionen für sichere Updates",
    "24/7 Support verfügbar"
  ];

  return (
    <>
      <SEOHead 
        title="Robopack - Die Zukunft des Intune Packaging | Square IT"
        description="Mühelose Konvertierung, beschleunigte Bereitstellung und sofortige Patch-Updates. Software Central transformiert Ihr Microsoft Intune App-Management mit Robopack."
        keywords="Robopack, Microsoft Intune, App-Management, Automatisierung, Software Central, MSI zu Intunewin, Square IT"
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
                  Die Zukunft des Intune Packaging
                </h1>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <Badge variant="outline">Automatisiert</Badge>
                  <Badge variant="outline">Zeitsparend</Badge>
                  <Badge variant="outline">Enterprise-Ready</Badge>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Mühelose Konvertierung, beschleunigte Bereitstellung und sofortige Patch-Updates. 
                Software Central transformiert Ihr Microsoft Intune App-Management mit automatisierter 
                Paketierung, Bereitstellung und Updates. Square IT AG als Implementierungspartner 
                vereinfacht komplexes Anwendungsmanagement für IT-Profis und MSPs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
                  <Link to="/contact">
                    Demo buchen
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    Kostenlose Testversion
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Robopack Features & Funktionen
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Software Central bietet umfassendes Microsoft Intune Anwendungspaketierung und 
                Bereitstellungsautomatisierung für IT-Profis und MSPs. Square IT AG als 
                Implementierungspartner unterstützt bei der erfolgreichen <Link to="/services" className="text-primary hover:underline">Umsetzung</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Square IT as Implementation Partner */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ihr Implementierungspartner für Software Central Robopack
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Square IT AG ist der erfahrene Implementierungspartner für Software Central's Robopack - 
                die führende automatisierte Lösung für Microsoft Intune Anwendungspaketierung und -bereitstellung. 
                Wir unterstützen IT-Profis und MSPs bei der erfolgreichen Einführung und Optimierung ihrer App-Management-Prozesse.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Erfolgreiche Implementierung</h4>
                    <p className="text-sm text-muted-foreground">
                      Reibungslose Einführung von Robopack in Ihrer IT-Umgebung
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Kundenerfolg</h4>
                    <p className="text-sm text-muted-foreground">
                      Erfolgreiche Implementierung und reibungsloser Betrieb bei unseren Kunden
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Expertise & Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Umfassende Beratung, Schulung und Support für optimale Nutzung
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Partnerschaft</h4>
                    <p className="text-sm text-muted-foreground">
                      Zertifizierter Partner mit Fachwissen und lokaler Präsenz
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">
                  Unsere Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Als zertifizierter Implementierungspartner von Software Central haben wir es uns zur 
                  Mission gemacht, Unternehmen bei der erfolgreichen Einführung von Robopack zu begleiten 
                  und dabei die Komplexität des Microsoft Intune App-Managements zu eliminieren.
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
                      <Zap className="w-16 h-16 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-4">
                        Bereit für automatisiertes Intune Management?
                      </h3>
                      <p className="mb-8">
                        Kontaktieren Sie uns für eine Demo und erfahren Sie, wie Robopack 
                        Ihr Microsoft Intune App-Management revolutionieren kann.
                      </p>
                      <div className="space-y-4">
                        <Button size="lg" variant="secondary" className="w-full" asChild>
                          <Link to="/contact">
                            Demo buchen
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary" asChild>
                          <Link to="/contact">
                            Kostenlose Testversion
                            <Download className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Unser Einfluss
              </h2>
              <p className="text-xl text-muted-foreground">
                Zahlen, die für sich sprechen - Ihre Erfolgsgeschichte beginnt hier
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">5000+</div>
                <div className="text-lg font-medium text-muted-foreground">Paketierte Anwendungen</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">1000+</div>
                <div className="text-lg font-medium text-muted-foreground">Betreute IT-Teams</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">99.9%</div>
                <div className="text-lg font-medium text-muted-foreground">Verfügbarkeitsgarantie</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">24/7</div>
                <div className="text-lg font-medium text-muted-foreground">Support verfügbar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Vertrauen Sie auf bewährte Lösungen
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Erleben Sie die Möglichkeiten unserer Plattform in einer persönlichen Demo oder 
              starten Sie direkt mit einer kostenlosen Testversion. Unsere <Link to="/about" className="text-primary hover:underline">Experten</Link> stehen 
              Ihnen zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
                <Link to="/contact">
                  Demo buchen
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Kostenlose Testversion
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