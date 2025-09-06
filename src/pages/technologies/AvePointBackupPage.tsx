import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Database, RefreshCw, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const AvePointBackupPage = () => {
  const features = [
    {
      name: "Microsoft 365 Backup",
      description: "Komplette Sicherung aller Microsoft 365 Daten",
      features: ["Exchange Online", "SharePoint Online", "OneDrive for Business", "Microsoft Teams"],
      category: "Backup"
    },
    {
      name: "Point-in-Time Recovery",
      description: "Wiederherstellung zu jedem beliebigen Zeitpunkt",
      features: ["Granulare Recovery", "Item-Level Restore", "Cross-Tenant Migration", "Legal Hold"],
      category: "Recovery"
    },
    {
      name: "Automated Backup",
      description: "Automatisierte und kontinuierliche Datensicherung",
      features: ["Scheduled Backups", "Real-time Protection", "Incremental Backups", "Data Deduplication"],
      category: "Automation"
    },
    {
      name: "Compliance & Security",
      description: "Rechtssichere Archivierung und Compliance",
      features: ["GDPR Compliance", "Legal Discovery", "Audit Logs", "Encryption at Rest"],
      category: "Compliance"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Microsoft 365 Schutz",
      description: "Vollständige Sicherung aller Microsoft 365 Workloads und Daten"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Unbegrenzte Aufbewahrung",
      description: "Langzeit-Archivierung ohne zeitliche Begrenzung"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Schnelle Wiederherstellung",
      description: "Blitzschnelle Recovery einzelner Items oder kompletter Tenants"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="AvePoint Backup Microsoft 365 | Square IT"
        description="AvePoint Backup für Microsoft 365: Zuverlässige Datensicherung, schnelle Wiederherstellung und sicherer Schutz Ihrer Cloud-Daten mit Square IT."
        keywords="AvePoint Backup, Microsoft 365 Backup, Cloud Backup, Datenschutz, Datenwiederherstellung"
        canonical="https://www.squareit.ch/technologies/avepoint-backup"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Database className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AvePoint Backup
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die führende Backup-Lösung für Microsoft 365. Schützen Sie Ihre kritischen Geschäftsdaten 
              vor Datenverlust, versehentlicher Löschung und Cyber-Bedrohungen.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            AvePoint Cloud Backup Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                    <Badge variant="secondary">{feature.category}</Badge>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{item}</span>
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
              Warum AvePoint Cloud Backup?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Der umfassendste Schutz für Ihre Microsoft 365 Umgebung
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

      {/* Implementation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Backup-Strategie für Microsoft 365
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Microsoft 365 bietet zwar integrierte Funktionen für die Datenwiederherstellung, 
                  aber diese sind zeitlich begrenzt und decken nicht alle Szenarien ab.
                </p>
                <p>
                  AvePoint Cloud Backup schliesst diese Lücken und bietet umfassenden Schutz vor 
                  Datenverlust durch versehentliche Löschung, Ransomware oder Compliance-Anforderungen.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>3-2-1 Backup-Regel Implementierung</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Automatisierte Backup-Policies</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>24/7 Monitoring und Alerting</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Backup-Beratung
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Backup-Checklist
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Backup-Policies definieren</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Automatisierte Backups konfigurieren</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Recovery-Tests durchführen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Monitoring & Alerting einrichten</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Compliance-Reports erstellen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Disaster Recovery Plan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Datenverlust-Statistiken
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Warum professionelles Backup unverzichtbar ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">46%</div>
                <p className="text-sm text-muted-foreground">der Datenverluste durch menschliche Fehler</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">93 Tage</div>
                <p className="text-sm text-muted-foreground">Standard-Aufbewahrung in Microsoft 365</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">67%</div>
                <p className="text-sm text-muted-foreground">der Unternehmen haben unvollständige Backups</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">$8.2M</div>
                <p className="text-sm text-muted-foreground">Durchschnittliche Kosten eines Data Breach</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Schützen Sie Ihre Microsoft 365 Daten
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Implementieren Sie noch heute eine professionelle Backup-Strategie mit AvePoint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Backup-Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/technologies">
                Alle Technologien
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvePointBackupPage;
