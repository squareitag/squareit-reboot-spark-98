import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AzureMigrationPage = () => {
  const services = [
    {
      name: "Infrastructure Migration",
      description: "Migration von On-Premises Infrastruktur zu Azure",
      features: ["VM Migration", "Network Setup", "Storage Migration", "Hybrid Connectivity"],
      category: "Infrastructure"
    },
    {
      name: "Application Migration",
      description: "Modernisierung und Migration von Anwendungen zu Azure",
      features: ["App Service Migration", "Container Migration", "Database Migration", "API Management"],
      category: "Applications"
    },
    {
      name: "Data Migration",
      description: "Sichere Migration von Datenbanken und Daten zu Azure",
      features: ["SQL Server Migration", "Blob Storage", "Data Lake", "Backup & Archive"],
      category: "Data"
    },
    {
      name: "Azure Optimization",
      description: "Optimierung und Kostenkontrolle nach der Migration",
      features: ["Cost Optimization", "Performance Tuning", "Security Hardening", "Monitoring Setup"],
      category: "Optimization"
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
              Azure Migration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professionelle Migration Ihrer Infrastruktur und Anwendungen zu Microsoft Azure. 
              Sicher, effizient und kostenoptimiert in die Cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Azure Migration Services
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Starten Sie Ihre Azure Migration
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Migration zu Microsoft Azure professionell durchführen.
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

export default AzureMigrationPage;