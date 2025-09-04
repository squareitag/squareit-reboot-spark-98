import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Wifi, Router, Shield, CheckCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const NetworkingPage = () => {
  const networkingSolutions = [
    {
      name: "Cisco Systems",
      icon: <Network className="w-8 h-8" />,
      description: "Enterprise-grade Netzwerk-Hardware und Software-Lösungen",
      features: ["Catalyst Switches", "ISR Routers", "ASA Firewalls", "Wireless Controllers"],
      category: "Hardware"
    },
    {
      name: "Juniper Networks",
      icon: <Router className="w-8 h-8" />,
      description: "High-Performance Netzwerk-Infrastruktur für Carrier und Enterprise",
      features: ["MX Series Routers", "EX Series Switches", "SRX Firewalls", "Junos OS"],
      category: "Hardware"
    },
    {
      name: "SD-WAN",
      icon: <Wifi className="w-8 h-8" />,
      description: "Software-Defined Wide Area Network für moderne Unternehmen",
      features: ["Centralized Management", "Traffic Optimization", "Security Integration", "Cloud Connectivity"],
      category: "Software-Defined"
    },
    {
      name: "Network Monitoring",
      icon: <Shield className="w-8 h-8" />,
      description: "Proaktive Überwachung und Management von Netzwerk-Infrastrukturen",
      features: ["Real-time Monitoring", "Performance Analytics", "Alerting", "Capacity Planning"],
      category: "Management"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimierte Netzwerk-Performance für kritische Anwendungen"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Integrierte Sicherheitsfeatures auf allen Netzwerk-Ebenen"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reliability",
      description: "Hochverfügbare Netzwerke mit redundanten Verbindungen"
    }
  ];

  const services = [
    {
      title: "Network Design",
      description: "Maßgeschneiderte Netzwerk-Architekturen für Ihre Anforderungen",
      features: ["Topology Planning", "Capacity Design", "Security Architecture", "Performance Optimization"]
    },
    {
      title: "Implementation",
      description: "Professionelle Installation und Konfiguration von Netzwerk-Hardware",
      features: ["Hardware Installation", "Configuration Management", "Testing & Validation", "Documentation"]
    },
    {
      title: "Monitoring & Support",
      description: "24/7 Überwachung und Support für Ihre Netzwerk-Infrastruktur",
      features: ["Proactive Monitoring", "Incident Response", "Performance Tuning", "Preventive Maintenance"]
    }
  ];

  const technologies = [
    { name: "LAN/WAN", description: "Local & Wide Area Networks" },
    { name: "WLAN", description: "Wireless Network Solutions" },
    { name: "VPN", description: "Virtual Private Networks" },
    { name: "VLAN", description: "Virtual LAN Segmentation" },
    { name: "QoS", description: "Quality of Service" },
    { name: "MPLS", description: "Multiprotocol Label Switching" }
  ];

  return (
    <>
      <SEOHead 
        title="Networking Solutions - Cisco, Juniper, SD-WAN & Network Monitoring"
        description="Zuverlässige Netzwerk-Infrastrukturen für moderne Unternehmen. Von LAN/WAN bis hin zu Software-Defined Networks - wir verbinden Ihr Business."
        keywords="Networking Solutions, Cisco Systems, Juniper Networks, SD-WAN, Network Monitoring, LAN/WAN, WLAN, VPN"
        canonical="https://sqsolutions.ch/technologies/networking"
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
              Networking Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Zuverlässige Netzwerk-Infrastrukturen für moderne Unternehmen. 
              Von LAN/WAN bis hin zu Software-Defined Networks - wir verbinden Ihr Business.
            </p>
          </div>
        </div>
      </section>

      {/* Networking Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Networking-Technologien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {networkingSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white">
                      {solution.icon}
                    </div>
                    <Badge variant="secondary">{solution.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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
              Vorteile moderner Netzwerke
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profitieren Sie von optimierten Netzwerk-Lösungen
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

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unterstützte Netzwerk-Technologien
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 pb-4">
                  <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Networking Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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

      {/* Network Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Moderne Netzwerk-Architekturen
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unsere Netzwerk-Experten entwickeln maßgeschneiderte Architekturen, 
                  die auf Ihre spezifischen Business-Anforderungen zugeschnitten sind. 
                  Wir berücksichtigen Performance, Sicherheit und Skalierbarkeit.
                </p>
                <p>
                  Von traditionellen LAN/WAN-Setups bis hin zu modernen 
                  Software-Defined Networks - wir implementieren die optimale 
                  Lösung für Ihre Konnektivitätsanforderungen.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/services/consulting">
                    Network Assessment
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Network Design Principles
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Hierarchical Network Design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Redundancy & High Availability</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Security by Design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Scalable Architecture</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Performance Optimization</span>
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
            Optimieren Sie Ihr Netzwerk
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die optimale Netzwerk-Infrastruktur für 
            Ihr Unternehmen planen und implementieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Netzwerk Beratung
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/managed-services">
                Managed Networks
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default NetworkingPage;