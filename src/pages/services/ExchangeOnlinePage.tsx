import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Users, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const ExchangeOnlinePage = () => {
  const services = [
    {
      name: "E-Mail Migration",
      description: "Nahtlose Migration zu Exchange Online",
      features: ["IMAP Migration", "PST Import", "Cutover Migration", "Hybrid Setup"],
      category: "Migration"
    },
    {
      name: "Exchange Setup",
      description: "Professionelle Einrichtung und Konfiguration",
      features: ["Tenant Konfiguration", "DNS Setup", "Mail Flow", "Security Policies"],
      category: "Setup"
    },
    {
      name: "Advanced Features",
      description: "Erweiterte Exchange Online Funktionen",
      features: ["Shared Mailboxes", "Distribution Lists", "Public Folders", "In-Place Archive"],
      category: "Features"
    },
    {
      name: "Security & Compliance",
      description: "Sicherheit und Compliance-Features",
      features: ["ATP Protection", "DLP Policies", "eDiscovery", "Retention Policies"],
      category: "Security"
    }
  ];

  const benefits = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Enterprise E-Mail",
      description: "Professionelle E-Mail-Lösung mit 50GB Speicher pro Postfach"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Integrierter Schutz vor Malware, Spam und Phishing"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Überall verfügbar",
      description: "Zugriff von jedem Gerät und Standort aus"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Exchange Online Lösungen & Migration | Square IT"
        description="Square IT unterstützt Sie bei Exchange Online. Wir übernehmen Migration, Einrichtung und Verwaltung, damit Ihr Unternehmen von einer sicheren, leistungsfähigen und flexiblen E-Mail-Lösung profitiert."
        keywords="Exchange Online, E-Mail Migration, Microsoft Exchange, Mail Server, Cloud Email"
        canonical="https://www.squareit.ch/exchange-online"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Mail className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Exchange Online
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professionelle E-Mail-Lösung in der Cloud. Sichere, skalierbare und 
              zuverlässige E-Mail-Services für Ihr Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Exchange Online Services
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
              Warum Exchange Online?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die führende Cloud-E-Mail-Lösung für Unternehmen
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
            Migrieren Sie zu Exchange Online
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professionelle Migration und Setup durch unsere Exchange-Experten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Migration planen
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

export default ExchangeOnlinePage;