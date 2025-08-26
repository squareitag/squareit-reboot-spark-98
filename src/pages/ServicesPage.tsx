import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Users, Headphones, Shield, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import managedServicesImage from "@/assets/managed-services.jpg";
import migrationImage from "@/assets/migration.jpg";
import consultingImage from "@/assets/consulting.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "Managed Services",
      description: "Umfassende Verwaltung und Überwachung Ihrer IT-Infrastruktur. Von der proaktiven Wartung bis zur 24/7-Überwachung - wir sorgen für optimale Performance und minimale Ausfallzeiten.",
      image: managedServicesImage,
      href: "/services/managed-services",
      icon: <Server className="w-5 h-5" />
    },
    {
      title: "Cloud Migration",
      description: "Sichere und effiziente Migration Ihrer Systeme in die Cloud. Wir begleiten Sie durch den gesamten Prozess - von der Planung bis zur erfolgreichen Implementierung.",
      image: migrationImage,
      href: "/services/migration",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "IT Consulting",
      description: "Strategische Beratung für Ihre IT-Landschaft. Wir analysieren Ihre Anforderungen und entwickeln maßgeschneiderte Lösungen für maximale Effizienz und Sicherheit.",
      image: consultingImage,
      href: "/services/consulting",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maximale Sicherheit",
      description: "Höchste Sicherheitsstandards und Compliance-Einhaltung"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimierte Systeme für maximale Leistung"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Rund um die Uhr verfügbare Unterstützung"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Zuverlässigkeit",
      description: "99.9% Uptime Garantie für Ihre Systeme"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analyse",
      description: "Umfassende Bewertung Ihrer aktuellen IT-Infrastruktur"
    },
    {
      step: "02", 
      title: "Planung",
      description: "Entwicklung einer maßgeschneiderten Lösungsstrategie"
    },
    {
      step: "03",
      title: "Umsetzung",
      description: "Professionelle Implementierung mit minimalen Ausfallzeiten"
    },
    {
      step: "04",
      title: "Optimierung",
      description: "Kontinuierliche Überwachung und Verbesserung"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unsere Dienstleistungen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professionelle IT-Services für moderne Unternehmen. Von Managed Services 
              bis hin zu strategischem Consulting - wir haben die Lösung für Ihre Anforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Warum Square IT?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ihre Vorteile bei der Zusammenarbeit mit uns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unser Vorgehen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strukturierter Ansatz für erfolgreiche IT-Projekte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-white shadow-elegant">
            <CardContent className="text-center py-16">
              <h2 className="text-4xl font-bold mb-6">
                Lassen Sie uns Ihr IT-Partner werden
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, 
                wie wir Ihre IT-Infrastruktur optimieren können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/contact">
                    Kostenlose Beratung
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/about">
                    Mehr über uns
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;