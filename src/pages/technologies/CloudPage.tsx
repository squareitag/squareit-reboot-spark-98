import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Shield, Database, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CloudPage = () => {
  const cloudPlatforms = [
    {
      name: "Microsoft Azure",
      description: "Enterprise-Cloud-Plattform mit umfassenden Services",
      features: ["Virtual Machines", "Azure Active Directory", "Storage Solutions", "Database Services"],
      category: "Enterprise Cloud"
    },
    {
      name: "Amazon AWS",
      description: "Marktführende Cloud-Infrastruktur mit globaler Reichweite",
      features: ["EC2 Instances", "S3 Storage", "Lambda Functions", "RDS Database"],
      category: "Public Cloud"
    },
    {
      name: "Google Cloud Platform",
      description: "Innovative Cloud-Services mit KI und Machine Learning",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine"],
      category: "Hybrid Cloud"
    },
    {
      name: "VMware vSphere",
      description: "Führende Virtualisierungsplattform für Private Clouds",
      features: ["vCenter Server", "ESXi Hypervisor", "vMotion", "High Availability"],
      category: "Private Cloud"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Höchste Sicherheit",
      description: "Enterprise-Grade Sicherheitsfeatures und Compliance-Standards"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Skalierbarkeit",
      description: "Flexible Ressourcen, die mit Ihrem Business wachsen"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Kosteneffizienz",
      description: "Pay-as-you-use Modell reduziert IT-Infrastrukturkosten"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Cloud className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Plattformen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Moderne Cloud-Infrastrukturen für maximale Skalierbarkeit, Sicherheit und Performance. 
              Wir helfen Ihnen dabei, die optimale Cloud-Strategie für Ihr Unternehmen zu entwickeln.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Platforms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Cloud-Technologien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <Badge variant="secondary">{platform.category}</Badge>
                  </div>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
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
              Vorteile unserer Cloud-Lösungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profitieren Sie von den Vorteilen moderner Cloud-Technologien
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

      {/* Migration Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Cloud Migration Services
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unsere Experten begleiten Sie bei der sicheren Migration Ihrer Infrastruktur 
                  in die Cloud. Wir analysieren Ihre bestehenden Systeme und entwickeln eine 
                  massgeschneiderte Migrationsstrategie.
                </p>
                <p>
                  Von der Planung über die Implementierung bis hin zum Support nach der Migration - 
                  wir sorgen für einen reibungslosen Übergang ohne Betriebsunterbrechungen.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Detaillierte Analyse bestehender Infrastruktur</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Entwicklung einer maßgeschneiderten Migrationsstrategie</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>24/7 Support während und nach der Migration</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/services/migration">
                    Migration Services
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Cloud Migration Checklist
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Inventory & Assessment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Security & Compliance Review</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Architecture Design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Testing & Validation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Go-Live Support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für die Cloud?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die optimale Cloud-Strategie für 
            Ihr Unternehmen entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Kostenlose Beratung
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

export default CloudPage;