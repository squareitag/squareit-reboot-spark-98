import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Server, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MigrationPage = () => {
  const migrationTypes = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Sichere Migration Ihrer Systeme in die Cloud (AWS, Azure, Google Cloud)."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Datenbank Migration",
      description: "Professionelle Migration Ihrer Datenbanken ohne Datenverlust."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Server Migration", 
      description: "Umzug Ihrer Server-Infrastruktur mit minimalen Ausfallzeiten."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legacy System Migration",
      description: "Modernisierung veralteter Systeme und Anwendungen."
    }
  ];

  const process = [
    "Analyse der bestehenden Infrastruktur",
    "Entwicklung einer Migrationsstrategie", 
    "Risikoanalyse und Backup-Planung",
    "Testmigration in Entwicklungsumgebung",
    "Schrittweise Produktivmigration",
    "Nachbetreuung und Optimierung"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">Migration Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sichere <span className="text-primary">IT-Migration</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Wir bringen Ihre IT-Systeme sicher und effizient an ihr neues Ziel. 
              Mit minimalen Ausfallzeiten und maximaler Datensicherheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="/contact">
                  Migration planen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Alle Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unsere Migrations-Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von der Cloud-Migration bis zur Modernisierung legacy Systeme - wir begleiten Sie sicher durch jeden Migrationsprozess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationTypes.map((type, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unser Migrationsprozess</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strukturiert, sicher und transparent - so führen wir Ihre Migration durch.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 gradient-hero rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium leading-relaxed">{step}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Warum Square IT für Ihre Migration?
              </h2>
              <div className="space-y-4">
                {[
                  "Über 15 Jahre Erfahrung in IT-Migrationen",
                  "Minimale Ausfallzeiten durch präzise Planung",
                  "Umfassende Backup- und Rollback-Strategien", 
                  "Transparente Kommunikation während des gesamten Prozesses",
                  "Nachbetreuung und Support nach der Migration"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="gradient-hero text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Kostenlose Migrations-Analyse
                </h3>
                <p className="text-white/90 mb-6">
                  Lassen Sie uns Ihre aktuelle IT-Infrastruktur analysieren und einen 
                  maßgeschneiderten Migrationsplan erstellen.
                </p>
                <Button variant="outline" className="bg-white text-primary hover:bg-white/90 w-full" asChild>
                  <Link to="/contact">
                    Analyse anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MigrationPage;