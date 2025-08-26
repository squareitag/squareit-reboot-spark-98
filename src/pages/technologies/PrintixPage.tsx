import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Printer, Cloud, Settings, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrintixPage = () => {
  const features = [
    {
      name: "Cloud Print Management",
      description: "Zentrale Verwaltung aller Drucker über die Cloud",
      features: ["Universal Print Driver", "Driver-freie Installation", "Auto-Discovery", "Queue Management"],
      category: "Management"
    },
    {
      name: "Mobile & Remote Printing",
      description: "Drucken von überall, auf jedem Gerät",
      features: ["Mobile Apps", "Email-to-Print", "Web-based Printing", "Pull Printing"],
      category: "Mobility"
    },
    {
      name: "Print Analytics",
      description: "Detaillierte Reporting- und Kostenkontrollfunktionen",
      features: ["Usage Reports", "Cost Tracking", "Carbon Footprint", "User Analytics"],
      category: "Analytics"
    },
    {
      name: "Security Features",
      description: "Sichere Druckumgebung mit modernen Sicherheitsfeatures",
      features: ["User Authentication", "Secure Print Release", "Document Encryption", "Audit Trails"],
      category: "Security"
    }
  ];

  const benefits = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-basiert",
      description: "Keine lokalen Print-Server mehr notwendig"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Einfache Verwaltung",
      description: "Zentrale Administration aller Druckressourcen"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Kostenkontrolle",
      description: "Transparente Druckkosten und automatische Budgetierung"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Printer className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Printix
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die moderne Cloud-Print-Management-Lösung für Unternehmen. 
              Vereinfachen Sie Ihre Druckinfrastruktur und drucken Sie von überall.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Printix Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                    <Badge variant="secondary">{feature.category}</Badge>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Warum Printix?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die Zukunft des Druckmanagements ist cloud-basiert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Print Infrastructure Modernisierung
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ersetzen Sie komplexe Print-Server-Infrastrukturen durch die moderne 
                  Printix Cloud-Lösung. Reduzieren Sie Verwaltungsaufwand und Kosten.
                </p>
                <p>
                  Unsere Experten migrieren Ihre bestehende Druckumgebung nahtlos in die Cloud 
                  und sorgen für eine reibungslose User Experience.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Print Environment Assessment</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Migration von Print-Servern</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>User Training & Support</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Print-Beratung
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Printix Vorteile
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Keine Print-Server mehr</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Driver-freie Installation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Mobile & Remote Printing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Automatische Druckererkennung</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Detailliertes Reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Sichere Druckfreigabe</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Return on Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Messbare Kosteneinsparungen durch moderne Print-Technologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-sm text-muted-foreground">weniger IT-Verwaltungsaufwand</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p className="text-sm text-muted-foreground">Reduktion der Druckkosten</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p className="text-sm text-muted-foreground">weniger Support-Tickets</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Remote Work ready</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Modernisieren Sie Ihr Druckmanagement
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit Printix in die Zukunft des cloud-basierten Druckens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Kostenlose Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/technologies">
                Alle Technologien
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintixPage;