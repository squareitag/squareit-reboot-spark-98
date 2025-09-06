import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Wifi, Shield, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import managedNetworkImage from "@/assets/managed-network-hero.jpg";
import { SEOHead } from "@/components/SEOHead";

const ManagedNetworkPage = () => {
  const services = [
    {
      name: "Network Infrastructure",
      description: "Verwaltung und Optimierung der Netzwerk-Infrastruktur",
      features: ["Switch Management", "Router Configuration", "VLAN Setup", "Network Segmentation"],
      category: "Infrastructure"
    },
    {
      name: "Wireless Network Management",
      description: "Professionelle WLAN-Verwaltung für optimale Konnektivität",
      features: ["Access Point Management", "Coverage Optimization", "Guest Networks", "Mobile Device Support"],
      category: "Wireless"
    },
    {
      name: "Network Security",
      description: "Umfassende Sicherheitslösungen für Ihr Netzwerk",
      features: ["Firewall Management", "Intrusion Detection", "VPN Setup", "Access Control"],
      category: "Security"
    },
    {
      name: "Network Monitoring",
      description: "Kontinuierliche Überwachung der Netzwerk-Performance",
      features: ["Traffic Analysis", "Performance Monitoring", "Alerting", "Capacity Planning"],
      category: "Monitoring"
    }
  ];

  const benefits = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Optimale Performance",
      description: "Maximale Netzwerk-Performance durch professionelle Verwaltung"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sichere Verbindungen",
      description: "Umfassende Sicherheit für alle Netzwerkverbindungen"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Proaktive Wartung",
      description: "Vorbeugende Maßnahmen für stabile Netzwerk-Performance"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Managed Network Services Zürich | Square IT"
        description="Managed Network Services von Square IT: WLAN-Management, Netzwerksicherheit und Performance-Optimierung für Ihr Unternehmen. Professionelle Netzwerk-Infrastruktur."
        keywords="Managed Network, Netzwerk-Management, WLAN-Management, Netzwerksicherheit, Network Infrastructure"
        canonical="https://www.squareit.ch/services/managed-network"
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Network className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Managed Network
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Erfahren Sie, wie unsere führenden Managed Network Services Ihre Unternehmenskommunikation optimieren, 
              die Netzwerksicherheit erhöhen und eine reibungslose digitale Infrastruktur gewährleisten.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Network Management Services
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
              Warum Managed Network?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stabile und sichere Netzwerkverbindungen für Ihr Unternehmen
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Optimales Netzwerk-Management
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihr Netzwerk professionell verwalten und optimieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Network Assessment
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

export default ManagedNetworkPage;