import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Cpu, Network, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const InfrastructurePage = () => {
  const infrastructureSolutions = [
    {
      name: "Windows Server",
      icon: <Server className="w-8 h-8" />,
      description: "Enterprise-grade Server-Betriebssystem für kritische Anwendungen",
      features: ["Active Directory", "Hyper-V Virtualization", "Failover Clustering", "Remote Desktop Services"],
      category: "Operating Systems"
    },
    {
      name: "Linux/Ubuntu Server",
      icon: <Cpu className="w-8 h-8" />,
      description: "Open-source Server-Lösungen für moderne Workloads",
      features: ["Container Support", "High Performance", "Security Hardening", "Automated Deployment"],
      category: "Operating Systems"
    },
    {
      name: "VMware vSphere",
      icon: <Network className="w-8 h-8" />,
      description: "Leading virtualization platform for enterprise environments",
      features: ["vCenter Management", "vMotion", "Distributed Resource Scheduler", "High Availability"],
      category: "Virtualization"
    },
    {
      name: "Docker & Kubernetes",
      icon: <HardDrive className="w-8 h-8" />,
      description: "Container-Orchestration für skalierbare Anwendungen",
      features: ["Container Management", "Auto-scaling", "Service Discovery", "Rolling Updates"],
      category: "Containerization"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimierung",
      description: "Maximale Leistung durch optimierte Server-Konfigurationen"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Hochverfügbarkeit",
      description: "99.9% Uptime durch redundante Systeme und Failover-Mechanismen"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Skalierbarkeit",
      description: "Flexible Erweiterung der Infrastruktur nach Bedarf"
    }
  ];

  const services = [
    {
      title: "Server Virtualization",
      description: "Konsolidierung physischer Server durch Virtualisierung",
      features: ["Reduced Hardware Costs", "Improved Resource Utilization", "Simplified Management", "Disaster Recovery"]
    },
    {
      title: "Load Balancing",
      description: "Intelligente Verteilung der Workloads für optimale Performance",
      features: ["Traffic Distribution", "Health Monitoring", "SSL Termination", "Auto-scaling"]
    },
    {
      title: "Backup & Recovery",
      description: "Comprehensive data protection and disaster recovery solutions",
      features: ["Automated Backups", "Point-in-time Recovery", "Offsite Storage", "Business Continuity"]
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
              Server & Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Moderne Server-Infrastrukturen für optimale Performance, Skalierbarkeit und 
              Zuverlässigkeit. Von physischen Servern bis hin zu Container-Orchestration.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Infrastruktur-Technologien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureSolutions.map((solution, index) => (
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
              Vorteile moderner Infrastrukturen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profitieren Sie von optimierten Server-Lösungen
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Infrastruktur Services
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

      {/* Architecture Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Modern Infrastructure Architecture
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unsere Infrastruktur-Architekturen sind darauf ausgelegt, 
                  maximale Performance bei minimalen Kosten zu bieten. 
                  Wir setzen auf bewährte Technologien und moderne Ansätze.
                </p>
                <p>
                  Von traditionellen Server-Setups bis hin zu modernen 
                  Container-Orchestration - wir finden die optimale Lösung 
                  für Ihre spezifischen Anforderungen.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/services/consulting">
                    Infrastructure Assessment
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Infrastructure Stack
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-white/20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Application Layer</h4>
                      <p className="text-sm opacity-90">Web Apps, APIs, Microservices</p>
                    </div>
                    <div className="border border-white/20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Container Layer</h4>
                      <p className="text-sm opacity-90">Docker, Kubernetes, Orchestration</p>
                    </div>
                    <div className="border border-white/20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Virtualization Layer</h4>
                      <p className="text-sm opacity-90">VMware, Hyper-V, KVM</p>
                    </div>
                    <div className="border border-white/20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">Physical Layer</h4>
                      <p className="text-sm opacity-90">Servers, Storage, Networking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Optimieren Sie Ihre Infrastruktur
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die optimale Server-Infrastruktur für 
            Ihr Unternehmen entwickeln und implementieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Infrastruktur Beratung
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/managed-services">
                Managed Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;