import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Shield, Monitor, Clock, CheckCircle, ArrowRight, Activity, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import managedServersImage from "@/assets/managed-servers.jpg";
import { SEOHead } from "@/components/SEOHead";

const ManagedServersPage = () => {
  const services = [
    {
      name: "24/7 Serverüberwachung",
      description: "Proaktive Überwachung Ihrer gesamten Serverinfrastruktur",
      features: ["Kontinuierliche Überwachung", "Proaktive Problemerkennung", "Automatische Benachrichtigungen", "Performance-Monitoring"],
      category: "Monitoring"
    },
    {
      name: "Sicherheitsupdates & Patches",
      description: "Regelmäßige Sicherheitsupdates und Patch-Management",
      features: ["Automatische Updates", "Sicherheits-Patches", "Vulnerability Management", "Compliance-Monitoring"],
      category: "Sicherheit"
    },
    {
      name: "Hochverfügbarkeit & Failover",
      description: "Systeme für nahtlose Geschäftskontinuität",
      features: ["Failover-Strategien", "Redundante Systeme", "Disaster Recovery", "Business Continuity"],
      category: "Verfügbarkeit"
    },
    {
      name: "Skalierbarkeit & Konfiguration",
      description: "Massgeschneiderte und skalierbare Server-Lösungen",
      features: ["Maßgeschneiderte Konfigurationen", "Automatische Skalierung", "Kapazitätsplanung", "Performance-Optimierung"],
      category: "Optimierung"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Sicher & up to date",
      description: "Regelmäßige Sicherheitsupdates und Patches zum Schutz vor Bedrohungen"
    },
    {
      icon: Clock,
      title: "Schnelle Bereitstellung",
      description: "Effiziente Implementierung und schnelle Deployment-Prozesse"
    },
    {
      icon: Activity,
      title: "Backup & Restore",
      description: "Umfassende Backup-Strategien und schnelle Wiederherstellung"
    },
    {
      icon: Lock,
      title: "Premier Support",
      description: "24/7 technischer Support von unseren Server-Experten"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Managed Servers - 24/7 Serverüberwachung und Management"
        description="Bei Square IT wissen wir, dass eine effektive Verwaltung und Wartung Ihrer IT-Systeme entscheidend für den reibungslosen Ablauf Ihres Unternehmens ist."
        keywords="Managed Servers, Server Management, 24/7 Überwachung, Server Monitoring, IT Infrastruktur, Server Wartung"
        
      />
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
              Bei Square IT wissen wir, dass eine effektive Verwaltung und Wartung Ihrer IT-Systeme entscheidend 
              für den reibungslosen Ablauf Ihres Unternehmens ist. Deshalb haben wir unseren Managed Server Service 
              entwickelt, um Ihnen alle Sorgen abzunehmen und Ihnen die Freiheit zu geben, sich auf Ihr Kerngeschäft 
              zu konzentrieren. Erfahren Sie mehr über unsere <Link to="/technologies/infrastructure" className="text-primary hover:underline">Server-Infrastrukturen</Link> und entdecken Sie weitere <Link to="/services" className="text-primary hover:underline">Managed Services</Link>.
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
                  src={managedServersImage} 
                  alt="Managed Server Services" 
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold">Unsere Vorteile</h2>
                <p className="text-lg text-muted-foreground">
                  Unser Managed Server Service bietet umfassende Lösungen, um sicherzustellen, dass Ihre IT-Infrastruktur 
                  reibungslos und sicher läuft. Mit 24/7-Überwachung, fortschrittlicher Datenverschlüsselung und 
                  Hochverfügbarkeitssystemen bieten wir ein robustes und zuverlässiges Servermanagement, das auf Ihre 
                  spezifischen Bedürfnisse zugeschnitten ist.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <benefit.icon className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm font-medium">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Managed Server Services</h2>
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

      {/* Detailed Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Umfassende Serverüberwachung</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser Managed Server Service umfasst die rund um die Uhr Überwachung Ihrer Serverinfrastruktur. 
                Dieser proaktive Ansatz hilft, potenzielle Probleme zu identifizieren, bevor sie kritisch werden, 
                und stellt so einen unterbrechungsfreien Geschäftsbetrieb sicher. Unser Team nutzt fortschrittliche 
                Werkzeuge und Techniken, um Ihre Server aufmerksam im Auge zu behalten und Ihnen Stabilität und 
                Sicherheit zu bieten.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-6">Sicherheitsupdates und Patch-Management</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Die Sicherheit Ihrer Server hat für uns oberste Priorität. Wir spielen regelmäßig Sicherheitsupdates 
                und Patches auf das Serverbetriebssystem auf, um Ihre Daten vor potenziellen Bedrohungen zu schützen. 
                Unser systematischer Ansatz im Patch-Management stellt sicher, dass Ihre Server stets mit den neuesten 
                Sicherheitserweiterungen geschützt sind, wodurch das Risiko von Schwachstellen minimiert wird.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl font-bold mb-6">Hochverfügbarkeits- und Failover-Systeme</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Um eine nahtlose Geschäftskontinuität zu gewährleisten, umfasst unser Managed Server Service 
                Hochverfügbarkeits- und Failover-Systeme. Diese Maßnahmen stellen sicher, dass Ihre kritischen 
                Anwendungen und Dienste auch bei Hardwareausfällen oder anderen Störungen zugänglich bleiben. 
                Wir entwickeln und implementieren robuste Failover-Strategien, um Ihre Betriebsabläufe reibungslos 
                aufrechtzuerhalten.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-3xl font-bold mb-6">Massgeschneiderte Konfigurationen und Skalierbarkeit</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jedes Unternehmen hat einzigartige Anforderungen, und unser Managed Server Service ist darauf ausgelegt, 
                flexibel und skalierbar zu sein. Wir passen unsere Dienstleistungen an Ihre spezifischen Bedürfnisse an 
                und bieten maßgeschneiderte Konfigurationen und automatisierte Skalierbarkeit. Egal, ob Sie Ressourcen 
                für Spitzenzeiten anpassen oder Ihre Serverkapazitäten erweitern müssen, während Ihr Unternehmen wächst – 
                wir bieten die Lösungen, um Ihre sich entwickelnden Anforderungen zu unterstützen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Optimieren Sie Ihre Server-Infrastruktur
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie unsere Experten Ihre Server verwalten, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Server-Assessment anfordern
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

export default ManagedServersPage;