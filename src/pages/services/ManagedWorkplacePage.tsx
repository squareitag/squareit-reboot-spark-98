import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Shield, Users, Settings, CheckCircle, ArrowRight, Monitor, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import managedWorkplaceHero from "@/assets/managed-workplace.jpg";
import { SEOHead } from "@/components/SEOHead";

const ManagedWorkplacePage = () => {
  const services = [
    {
      name: "Device Management",
      description: "Zentrale Verwaltung aller Geräte und Anwendungen",
      features: ["Mobile Device Management", "Desktop-Support", "App-Installation", "Konfigurationsmanagement"],
      category: "Geräte"
    },
    {
      name: "User Provisioning", 
      description: "Benutzer-Bereitstellung und Zugriffsverwaltung",
      features: ["Benutzerkonten-Management", "Zugriffskontrolle", "Gruppenrichtlinien", "Identity Management"],
      category: "Benutzer"
    },
    {
      name: "Security Management",
      description: "Umfassende Sicherheitsmaßnahmen für alle Endpunkte",
      features: ["Endpoint Security", "Antivirus-Management", "Firewall-Konfiguration", "Sicherheitsaudits"],
      category: "Sicherheit"
    },
    {
      name: "Collaboration Tools",
      description: "Tools für nahtlose Zusammenarbeit",
      features: ["Microsoft Teams", "SharePoint", "Office 365", "Kollaborationsplattformen"],
      category: "Zusammenarbeit"
    }
  ];

  const benefits = [
    {
      icon: Monitor,
      title: "Verbesserte Produktivität",
      description: "Tools und Ressourcen für effizienteres Arbeiten von überall aus"
    },
    {
      icon: Shield,
      title: "Erhöhte Sicherheit", 
      description: "Robuste Sicherheitsmaßnahmen zum Schutz vor Cyberbedrohungen"
    },
    {
      icon: Smartphone,
      title: "Mobile Flexibilität",
      description: "Nahtloses Arbeiten auf allen Geräten und Standorten"
    },
    {
      icon: Cloud,
      title: "Skalierbarkeit",
      description: "Flexible Lösungen, die mit Ihrem Unternehmen wachsen"
    }
  ];

  const packages = [
    {
      name: "Basic",
      subtitle: "Geeignet für Startups",
      features: [
        "Wesentliche Dienste für kleine Projekte",
        "Grundlegende Berichterstattung und Überwachung", 
        "Verwaltung & Installation von bis zu 3 Apps",
        "Standard-Sicherheitsmaßnahmen"
      ],
      popular: false
    },
    {
      name: "Standard",
      subtitle: "Geeignet für KMUs",
      features: [
        "Alle Basic-Dienste enthalten",
        "Erweiterte Berichterstattung & Überwachung",
        "Verwaltung & Installation von bis zu 5 Apps", 
        "Erweiterte Endpunkt-Sicherheit"
      ],
      popular: true
    },
    {
      name: "Premium",
      subtitle: "Völlig sorgenfrei",
      features: [
        "Alle Standard-Dienste enthalten",
        "Unternehmens-App Installation (z.B. AbaClient) für bis zu 5 Apps",
        "Standard-Apps Installation für bis zu 10 Apps",
        "24/7 Premier Support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead 
        title="Managed Workplace Services - Umfassende IT-Lösung für Produktivität"
        description="Unsere Managed Workplace-Services sind darauf ausgelegt, Ihnen eine umfassende IT-Lösung zu bieten, die die Produktivität steigert, die Sicherheit verbessert und die betrieblichen Kosten reduziert."
        keywords="Managed Workplace, Device Management, User Provisioning, Security Management, Collaboration Tools, Microsoft Teams, Mobile Device Management"
        canonical="https://sqsolutions.ch/managed-workplace"
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Laptop className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Managed Workplace
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unsere Managed Workplace-Services sind darauf ausgelegt, Ihnen eine umfassende IT-Lösung zu bieten, 
              die die Produktivität steigert, die Sicherheit verbessert und die betrieblichen Kosten reduziert. 
              Wir kümmern uns um alle Aspekte Ihrer IT-Umgebung, von der Verwaltung von Geräten und Anwendungen 
              bis hin zur Bereitstellung von 24/7-Support, um sicherzustellen, dass Ihr Unternehmen reibungslos 
              und effizient funktioniert.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in">
                <img 
                  src={managedWorkplaceHero} 
                  alt="Managed Workplace Services" 
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold">Unsere Vorteile</h2>
                <p className="text-lg text-muted-foreground">
                  Unsere Managed Workplace-Services bieten eine Vielzahl von Vorteilen, darunter verbesserte Produktivität, 
                  erhöhte Sicherheit, Kosteneinsparungen und Skalierbarkeit. Durch die Auslagerung Ihres IT-Managements 
                  an uns erhalten Sie Zugang zu einem Expertenteam, das sich darauf konzentriert, Ihre Systeme reibungslos 
                  am Laufen zu halten.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Sicher & up to date</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Schnelle Implementation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Anpassbar</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Premier Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Managed Workplace Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Unsere Service-Modelle</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`hover:shadow-elegant transition-all duration-300 animate-scale-in ${pkg.popular ? 'border-primary shadow-elegant' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    {pkg.popular && (
                      <Badge className="mb-4 mx-auto w-fit">Beliebt</Badge>
                    )}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-lg">{pkg.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                      <Link to="/contact">
                        Angebot anfordern
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Modernisieren Sie Ihren Arbeitsplatz
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entdecken Sie, wie unsere Managed Workplace-Services Ihre Produktivität steigern und 
            Ihre IT-Umgebung optimieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Assessment anfordern
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                Alle Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ManagedWorkplacePage;