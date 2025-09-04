import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, BarChart3, Lock, Zap, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const DatabasePage = () => {
  const databaseSolutions = [
    {
      name: "Microsoft SQL Server",
      icon: <Database className="w-8 h-8" />,
      description: "Enterprise-grade relationale Datenbank für mission-critical Anwendungen",
      features: ["Always On Availability Groups", "Advanced Security", "In-Memory OLTP", "Business Intelligence"],
      category: "Relational"
    },
    {
      name: "MySQL",
      icon: <Zap className="w-8 h-8" />,
      description: "Populäre Open-Source Datenbank für Web-Anwendungen",
      features: ["High Performance", "Replication", "Clustering", "JSON Support"],
      category: "Relational"
    },
    {
      name: "PostgreSQL",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Advanced Open-Source Datenbank mit erweiterten Features",
      features: ["ACID Compliance", "JSON/JSONB", "Full-text Search", "Extensions"],
      category: "Relational"
    },
    {
      name: "MongoDB",
      icon: <Lock className="w-8 h-8" />,
      description: "NoSQL Dokumenten-Datenbank für flexible Datenmodelle",
      features: ["Document-based", "Horizontal Scaling", "Aggregation Framework", "GridFS"],
      category: "NoSQL"
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimierte Abfrage-Performance und Indexierung"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security",
      description: "Erweiterte Sicherheitsfeatures und Verschlüsselung"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reliability",
      description: "Hochverfügbarkeit durch Clustering und Replikation"
    }
  ];

  const services = [
    {
      title: "Database Design",
      description: "Optimales Schema-Design für Ihre Anforderungen",
      features: ["Performance Optimization", "Normalization", "Index Strategy", "Partitioning"]
    },
    {
      title: "Migration Services",
      description: "Sichere Migration zwischen verschiedenen Datenbank-Systemen",
      features: ["Data Migration", "Schema Conversion", "Testing & Validation", "Zero-Downtime Migration"]
    },
    {
      title: "Performance Tuning",
      description: "Optimierung bestehender Datenbank-Installationen",
      features: ["Query Optimization", "Index Tuning", "Resource Monitoring", "Capacity Planning"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Database Systems - SQL Server, MySQL, PostgreSQL & MongoDB"
        description="Leistungsstarke Datenbanklösungen für Ihr Business. Von relationalen Datenbanken bis hin zu NoSQL-Systemen - wir implementieren die optimale Lösung für Ihre Daten."
        keywords="Database Systems, Microsoft SQL Server, MySQL, PostgreSQL, MongoDB, Database Design, Database Migration"
        canonical="https://sqsolutions.ch/technologies/database"
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Database className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Database Systems
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Leistungsstarke Datenbanklösungen für Ihr Business. Von relationalen Datenbanken 
              bis hin zu NoSQL-Systemen - wir implementieren die optimale Lösung für Ihre Daten.
            </p>
          </div>
        </div>
      </section>

      {/* Database Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Datenbank-Technologien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {databaseSolutions.map((solution, index) => (
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

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Database Features & Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Moderne Datenbanksysteme für maximale Performance und Zuverlässigkeit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
            Database Services
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

      {/* Database Architecture */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Database Architecture & Consulting
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unsere Datenbank-Experten helfen Ihnen bei der Auswahl der 
                  optimalen Datenbank-Lösung für Ihre spezifischen Anforderungen. 
                  Wir berücksichtigen Performance, Skalierbarkeit und Kosten.
                </p>
                <p>
                  Von der Architektur-Planung über die Implementierung bis hin 
                  zur Optimierung - wir begleiten Sie durch den gesamten 
                  Datenbank-Lifecycle.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/services/consulting">
                    Database Consulting
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Database Best Practices
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Performance Monitoring & Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Backup & Recovery Strategies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Security & Access Control</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>High Availability Setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Capacity Planning</span>
                    </li>
                  </ul>
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
            Optimieren Sie Ihre Datenbanken
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns die optimale Datenbank-Strategie für Ihr Unternehmen 
            entwickeln und implementieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Database Beratung
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/managed-services">
                Managed Databases
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default DatabasePage;