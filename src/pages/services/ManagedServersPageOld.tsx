import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Monitor, Shield, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import managedServersImage from "@/assets/managed-servers.jpg";

const ManagedServersPage = () => {
  const services = [
    {
      name: "24/7 Überwachung",
      description: "Kontinuierliche Serverüberwachung mit proaktiver Problemerkennung",
      features: ["Monitoring-Dashboards", "Automatische Alerts", "Performance-Tracking", "Kapazitätsplanung"],
      category: "Monitoring"
    },
    {
      name: "Sicherheitsupdates",
      description: "Regelmäßige Sicherheitsupdates und Patch-Management",
      features: ["Security Patches", "Vulnerability Scanning", "Compliance Updates", "Rollback-Strategien"],
      category: "Security"
    },
    {
      name: "Hochverfügbarkeit",
      description: "Failover-Systeme für nahtlose Geschäftskontinuität",
      features: ["Redundante Systeme", "Automatisches Failover", "Load Balancing", "Disaster Recovery"],
      category: "Availability"
    },
    {
      name: "Skalierbarkeit",
      description: "Maßgeschneiderte Konfigurationen für wachsende Anforderungen",
      features: ["Auto-Scaling", "Resource Management", "Kapazitätserweiterung", "Performance Optimization"],
      category: "Scalability"
    }
  ];

  const benefits = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Proactive Monitoring",
      description: "Kontinuierliche Überwachung aller Server-Systeme rund um die Uhr"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicher & up to date",
      description: "Regelmäßige Sicherheitsupdates und Patch-Management"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Premier Support",
      description: "Technisches Support-Team steht jederzeit zur Verfügung"
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
              Managed Servers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bei Square IT wissen wir, dass eine effektive Verwaltung und Wartung Ihrer IT-Systeme 
              entscheidend für den reibungslosen Ablauf Ihres Unternehmens ist. Deshalb haben wir unseren 
              Managed Server Service entwickelt, um Ihnen alle Sorgen abzunehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Server Management Services
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
                src={managedServersImage} 
                alt="Managed Server Infrastructure" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Umfassende Serverüberwachung
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unser Managed Server Service umfasst die rund um die Uhr Überwachung Ihrer Serverinfrastruktur. 
                  Dieser proaktive Ansatz hilft, potenzielle Probleme zu identifizieren, bevor sie kritisch werden, 
                  und stellt so einen unterbrechungsfreien Geschäftsbetrieb sicher.
                </p>
                <p>
                  Unser Team nutzt fortschrittliche Werkzeuge und Techniken, um Ihre Server aufmerksam im Auge 
                  zu behalten und Ihnen Stabilität und Sicherheit zu bieten.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>24/7 Monitoring und Alerting</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Proaktive Problemerkennung</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Automatisierte Failover-Systeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Professionelles Server Management
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Server optimal verwalten und warten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Server Assessment
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

export default ManagedServersPage;