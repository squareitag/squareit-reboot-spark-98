import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Server, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const ManagedServicesPage = () => {
  const benefits = [
    "24/7 Monitoring und Support",
    "Proaktive Wartung und Updates", 
    "Sicherheitsmanagement",
    "Backup und Disaster Recovery",
    "Performance-Optimierung",
    "Compliance-Unterstützung"
  ];

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Server Management",
      description: "Vollständige Verwaltung Ihrer Server-Infrastruktur mit 24/7 Überwachung."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Management", 
      description: "Umfassender Schutz vor Cyber-Bedrohungen und Sicherheitslücken."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Rund um die Uhr verfügbare Experten für alle IT-Probleme."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Help Desk",
      description: "Professioneller Support für Ihre Mitarbeiter bei IT-Fragen."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Managed IT Services für Unternehmen in Zürich | Square IT"
        description="Vertrauen Sie auf Square IT für Managed Services. Wir übernehmen IT-Betrieb, Support und Monitoring, damit Sie sich auf Ihr Business konzentrieren. Effiziente, sichere und skalierbare IT-Lösungen für KMU."
        keywords="Managed IT Services, IT Outsourcing, Server Management, 24/7 Support, IT Monitoring"
        canonical="https://www.squareit.ch/managed-services"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">Managed Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ihre IT in <span className="text-primary">besten Händen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir uns um Ihre gesamte IT-Infrastruktur kümmern. 
              Proaktiv, zuverlässig und kostengünstig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="/contact">
                  Beratung anfragen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/technologies">Unsere Technologien</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ihre Vorteile</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mit unseren Managed Services reduzieren Sie Kosten, erhöhen die Sicherheit und können sich auf Ihr Kerngeschäft konzentrieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unsere Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Umfassende IT-Services aus einer Hand für maximale Effizienz und Sicherheit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam analysieren, wie unsere Managed Services Ihr Unternehmen voranbringen können.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Kostenlose Beratung vereinbaren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ManagedServicesPage;