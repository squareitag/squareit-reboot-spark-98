import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Shield, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import managedInfrastructureImage from "@/assets/managed-infrastructure-hero.jpg";

const ManagedInfrastructurePage = () => {
  const services = [
    {
      name: "Server Management",
      description: "Vollständige Verwaltung Ihrer Server-Infrastruktur",
      features: ["24/7 Monitoring", "Patch Management", "Performance Optimization", "Backup & Recovery"],
      category: "Infrastructure"
    },
    {
      name: "Cloud Infrastructure",
      description: "Verwaltung und Optimierung Ihrer Cloud-Umgebung",
      features: ["Azure Management", "Cost Optimization", "Security Compliance", "Disaster Recovery"],
      category: "Cloud"
    },
    {
      name: "Network Infrastructure",
      description: "Professionelle Netzwerk-Administration und -Überwachung",
      features: ["Network Monitoring", "Firewall Management", "VPN Setup", "Performance Analysis"],
      category: "Network"
    },
    {
      name: "Storage Management",
      description: "Sichere und effiziente Speicherlösungen",
      features: ["Storage Optimization", "Data Backup", "Archive Solutions", "Capacity Planning"],
      category: "Storage"
    }
  ];

  const benefits = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "24/7 Überwachung",
      description: "Kontinuierliche Überwachung Ihrer gesamten IT-Infrastruktur"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proaktive Wartung",
      description: "Vorbeugende Maßnahmen zur Vermeidung von Ausfällen"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Skalierbarkeit",
      description: "Flexible Anpassung an Ihre wachsenden Anforderungen"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Server className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Managed Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unsere Managed Infrastructure-Services bieten Ihnen zahlreiche Vorteile, darunter erhöhte Zuverlässigkeit, 
              verbesserte Sicherheit, Kosteneinsparungen und Skalierbarkeit. Indem Sie uns die Verwaltung Ihrer 
              IT-Infrastruktur anvertrauen, profitieren Sie von einem Expertenteam.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Infrastructure Services
          </h2>
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

      {/* Content Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={managedInfrastructureImage} 
                alt="Managed Infrastructure Services" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Erhöhte Zuverlässigkeit
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unsere Managed Infrastructure Services bieten zahlreiche Vorteile, darunter erhöhte Zuverlässigkeit, 
                  verbesserte Sicherheit, Kosteneinsparungen und Skalierbarkeit.
                </p>
                <p>
                  Wenn Sie uns Ihre IT-Infrastruktur anvertrauen, erhalten Sie Zugang zu einem Expertenteam, 
                  das Ihre Systeme proaktiv verwaltet und wartet.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Sicherheit &amp; Compliance</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Skalierbarkeit &amp; Flexibilität</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Kosteneffizienz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unsere Vorteile
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir Ihre IT-Infrastruktur optimieren
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

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Unser Managed Infrastructure Prozess
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wir beginnen mit einer umfassenden Analyse Ihrer bestehenden Infrastruktur 
                  und entwickeln eine massgeschneiderte Strategie für optimales Management.
                </p>
                <p>
                  Durch kontinuierliche Überwachung und proaktive Wartung stellen wir sicher, 
                  dass Ihre IT-Systeme stets optimal funktionieren und sicher sind.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Infrastructure Assessment & Analysis</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Monitoring & Alerting Setup</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Proactive Maintenance & Optimization</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Infrastructure Beratung
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Service Level Agreement
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>99.9% Verfügbarkeitsgarantie</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Response Time &lt; 15 Minuten</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>24/7 Monitoring & Support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Monthly Performance Reports</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Quarterly Business Reviews</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Proactive Capacity Planning</span>
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
            Bereit für professionelles Infrastructure Management?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre IT-Infrastruktur optimieren und verwalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Kostenlose Beratung
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
  );
};

export default ManagedInfrastructurePage;