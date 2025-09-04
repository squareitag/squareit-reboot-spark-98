import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Shield, Clock, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import managedBackupImage from "@/assets/managed-backup-hero.jpg";
import { SEOHead } from "@/components/SEOHead";

const ManagedBackupPage = () => {
  const services = [
    {
      name: "Kundenspezifische Backup-Strategien",
      description: "Maßgeschneiderte Backup-Lösungen für Ihre spezifischen Anforderungen",
      features: ["IT-Infrastruktur Analyse", "Datenressourcen Bewertung", "Wiederherstellungsziele", "Maßgeschneiderte Lösung"],
      category: "Strategy"
    },
    {
      name: "Schnelle Wiederherstellung",
      description: "Effiziente Wiederherstellungsprozesse minimieren Ausfallzeiten",
      features: ["Minimale Ausfallzeiten", "Effizienter Prozess", "Reibungsloser Betrieb", "Sofortige Verfügbarkeit"],
      category: "Recovery"
    },
    {
      name: "Automatisierte Backups",
      description: "Regelmäßige automatisierte Backup-Pläne für kontinuierlichen Schutz",
      features: ["Automatisierte Pläne", "Regelmäßige Ausführung", "Kontinuierlicher Schutz", "Minimales Risiko"],
      category: "Automation"
    },
    {
      name: "Überwachung und Verwaltung",
      description: "Kontinuierliche Überwachung des Backup-Status und Tests",
      features: ["Status Monitoring", "Wiederherstellungstest", "Ordnungsgemäße Funktion", "Notfall-Bereitschaft"],
      category: "Monitoring"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verschlüsselt",
      description: "Moderne Verschlüsselungstechnologien schützen Ihre sensiblen Daten"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Schnelle Wiederherstellung", 
      description: "Effiziente Wiederherstellungsprozesse minimieren Ausfallzeiten"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "In der Schweiz",
      description: "Lokale Datenhaltung nach Schweizer Datenschutzstandards"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="IT-Backup Strategien & Datensicherung | Square IT"
        description="Mit Square IT sichern Sie Ihre Unternehmensdaten zuverlässig. Wir entwickeln Backup-Strategien für Microsoft 365, Server und Cloud-Lösungen, damit Ihre Daten jederzeit geschützt und wiederherstellbar sind."
        keywords="IT Backup, Datensicherung, Managed Backup, Backup Strategien, Data Recovery"
        canonical="https://www.squareit.ch/backup"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Database className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Managed Backup
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Erfahren Sie, wie unsere erstklassigen Managed Backup Services Ihre wertvollen Daten schützen 
              und Ihr Unternehmen vor Datenverlust bewahren können. Bei Square IT verstehen wir die wesentliche 
              Rolle zuverlässiger Backups für den Geschäftsbetrieb. Entdecken Sie unsere <Link to="/technologies/avepoint-backup" className="text-primary hover:underline">AvePoint Backup-Lösungen</Link> und weitere <Link to="/services" className="text-primary hover:underline">Managed Services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Backup Management Services
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
              Warum Managed Backup?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maximaler Schutz für Ihre wertvollsten Geschäftsdaten
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
            Sichern Sie Ihre Daten professionell
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Implementieren Sie eine umfassende Backup-Strategie mit unseren Managed Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Backup Assessment
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

export default ManagedBackupPage;