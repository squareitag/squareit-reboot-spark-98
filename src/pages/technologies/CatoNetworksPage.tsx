import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Network, Globe, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CatoNetworksPage = () => {
  const features = [
    {
      name: "SASE Platform",
      description: "Secure Access Service Edge - SD-WAN und Security in einer Lösung",
      features: ["SD-WAN", "CASB", "FWaaS", "ZTNA"],
      category: "Network Security"
    },
    {
      name: "Cloud-Native Architecture",
      description: "Vollständig cloud-basierte Netzwerk- und Sicherheitsinfrastruktur",
      features: ["Global Backbone", "PoPs weltweit", "Optimierte Latenz", "Auto-Scaling"],
      category: "Cloud"
    },
    {
      name: "Zero Trust Network Access",
      description: "Sichere Anbindung von Remote-Arbeitsplätzen und Filialen",
      features: ["Identity-based Access", "Application Microsegmentation", "Device Trust", "Conditional Access"],
      category: "Security"
    },
    {
      name: "Unified Management",
      description: "Zentrale Verwaltung aller Netzwerk- und Sicherheitsfunktionen",
      features: ["Single Pane of Glass", "Policy Management", "Analytics & Reporting", "API Integration"],
      category: "Management"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrierte Sicherheit",
      description: "Netzwerk und Security aus einer Hand ohne separate Appliances"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "SD-WAN Performance",
      description: "Optimierte Konnektivität und Application Performance"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global verfügbar",
      description: "Weltweites Backbone mit lokalen PoPs für beste Performance"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Network className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cato Networks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die weltweit erste SASE-Plattform, die SD-WAN und Network Security 
              in einer cloud-nativen Lösung vereint. Sicher, einfach, skalierbar.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cato SASE Platform Features
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
              Warum Cato Networks?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die Zukunft der Netzwerk- und Sicherheitsarchitektur
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
                SASE Transformation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vereinfachen Sie Ihre Netzwerk- und Sicherheitsarchitektur mit Cato Networks. 
                  Ersetzen Sie komplexe MPLS-Netzwerke und separate Security-Appliances.
                </p>
                <p>
                  Unsere Experten begleiten Sie bei der Transformation zu einer modernen, 
                  cloud-nativen SASE-Architektur mit verbesserter Performance und Security.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Network Assessment & Design</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Pilot-Implementierung</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Managed Service & Support</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    SASE Beratung
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    SASE Vorteile
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Reduzierte Komplexität</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Verbesserte Performance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Einheitliche Security Policy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Kosteneinsparungen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Cloud-first Architektur</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Zero Trust Security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für SASE?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformieren Sie Ihr Netzwerk mit der führenden SASE-Plattform von Cato Networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Demo anfordern
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

export default CatoNetworksPage;