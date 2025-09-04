import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Monitor, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const VirtualizationPage = () => {
  const services = [
    {
      name: "Server Virtualization",
      description: "Konsolidierung physischer Server durch Virtualisierung",
      features: ["VMware vSphere", "Hyper-V", "KVM", "Ressourcen-Optimierung"],
      category: "Server"
    },
    {
      name: "Desktop Virtualization",
      description: "Virtual Desktop Infrastructure (VDI) Lösungen",
      features: ["Windows Virtual Desktop", "VMware Horizon", "Citrix Virtual Apps", "Remote Access"],
      category: "Desktop"
    },
    {
      name: "Application Virtualization",
      description: "Anwendungs-Virtualisierung und -Streaming",
      features: ["App-V", "VMware ThinApp", "Citrix XenApp", "Application Layering"],
      category: "Application"
    },
    {
      name: "Cloud Virtualization",
      description: "Cloud-basierte Virtualisierungslösungen",
      features: ["Azure Virtual Machines", "AWS EC2", "Hybrid Cloud", "Cloud Migration"],
      category: "Cloud"
    }
  ];

  const benefits = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Kosteneinsparung",
      description: "Reduzierung der Hardware-Kosten durch Konsolidierung"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Erhöhte Verfügbarkeit",
      description: "Verbesserte Ausfallsicherheit und Disaster Recovery"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Flexibilität",
      description: "Schnelle Skalierung und einfache Verwaltung"
    }
  ];

  const technologies = [
    "VMware vSphere",
    "Microsoft Hyper-V",
    "Azure Virtual Desktop",
    "Citrix Virtual Apps",
    "Docker Container",
    "Kubernetes"
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="IT-Virtualisierung & Cloud-Lösungen | Square IT"
        description="Square IT implementiert Virtualisierungslösungen für mehr Effizienz, Flexibilität und Kostenersparnis. Profitieren Sie von sicheren Cloud-Umgebungen und modernem IT-Infrastrukturmanagement."
        keywords="Virtualisierung, Server Virtualization, VDI, VMware, Hyper-V, Cloud Virtualization"
        canonical="https://www.squareit.ch/virtualisierung"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Server className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT-Virtualisierung
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Moderne Virtualisierungslösungen für maximale Effizienz und Flexibilität. 
              Optimieren Sie Ihre IT-Infrastruktur mit professioneller Virtualisierung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Virtualisierung Services
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

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Vorteile der Virtualisierung
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Warum Virtualisierung für Ihr Unternehmen sinnvoll ist
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Virtualisierungs-Technologien
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wir implementieren und verwalten führende Virtualisierungstechnologien 
                  für Server, Desktops und Anwendungen.
                </p>
                <p>
                  Von klassischer Server-Virtualisierung bis hin zu modernen 
                  Container-Technologien - wir finden die optimale Lösung für Ihre Anforderungen.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Virtualisierung planen
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Unterstützte Technologien
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-bold mb-2">Hybrid & Cloud</h4>
                    <p className="text-sm text-muted-foreground">
                      Kombinieren Sie On-Premises und Cloud-Virtualisierung für 
                      maximale Flexibilität und Kostenoptimierung.
                    </p>
                  </div>
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
            Optimieren Sie Ihre IT-Infrastruktur
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Virtualisierungsstrategie gemeinsam entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Beratung anfragen
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

export default VirtualizationPage;