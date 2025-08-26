import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Shield, Clock, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ManagedBackupPage = () => {
  const services = [
    {
      name: "Microsoft 365 Backup",
      description: "Professionelle Sicherung aller Microsoft 365 Daten und Services",
      features: ["Exchange Online", "SharePoint Online", "OneDrive for Business", "Microsoft Teams"],
      category: "Cloud Backup"
    },
    {
      name: "Server Backup",
      description: "Umfassende Sicherung von Server-Systemen und Anwendungen",
      features: ["Windows Server", "Linux Server", "SQL Databases", "File Servers"],
      category: "Infrastructure"
    },
    {
      name: "Endpoint Backup",
      description: "Sicherung von Arbeitsplatz-Computern und mobilen Geräten",
      features: ["Desktop Backup", "Laptop Backup", "Mobile Devices", "User Data Protection"],
      category: "Endpoint"
    },
    {
      name: "Backup Monitoring",
      description: "Kontinuierliche Überwachung und Reporting der Backup-Prozesse",
      features: ["24/7 Monitoring", "Backup Verification", "Failure Alerts", "Compliance Reports"],
      category: "Monitoring"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Datensicherheit",
      description: "Höchste Sicherheitsstandards für Ihre kritischen Geschäftsdaten"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Schnelle Recovery",
      description: "Minimale Ausfallzeiten durch optimierte Wiederherstellungsverfahren"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automatisierte Backups",
      description: "Vollautomatische Sicherung ohne manuellen Aufwand"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
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
              Professionelle Datensicherung und -wiederherstellung für maximalen Schutz Ihrer Geschäftsdaten. 
              Von Cloud-Services bis zur lokalen Infrastruktur - wir sichern alles ab.
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