import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Users, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TeamstelephonePage = () => {
  const services = [
    {
      name: "Teams Phone System",
      description: "Implementierung von Microsoft Teams als Telefonsystem",
      features: ["Direct Routing", "Calling Plans", "Phone Number Porting", "Auto Attendant"],
      category: "Phone System"
    },
    {
      name: "Voice Integration",
      description: "Integration bestehender Telefonanlagen mit Teams",
      features: ["SBC Configuration", "Gateway Setup", "Hybrid Connectivity", "Call Quality Optimization"],
      category: "Integration"
    },
    {
      name: "Call Center Solutions",
      description: "Moderne Call Center Lösungen mit Teams",
      features: ["Queue Management", "Agent Dashboards", "Call Analytics", "Workforce Management"],
      category: "Call Center"
    },
    {
      name: "User Training",
      description: "Umfassendes Training für Teams Telefonie",
      features: ["End-User Training", "Admin Training", "Best Practices", "Support Documentation"],
      category: "Training"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Phone className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Teams Telephone Consulting
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Moderne Telefonie-Lösungen mit Microsoft Teams. Vereinen Sie 
              Kommunikation und Collaboration in einer integrierten Plattform.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Teams Telephone Consulting Services
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
            Modernisieren Sie Ihre Telefonie
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Implementieren Sie Teams als moderne Telefonie-Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Telefonie-Beratung
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

export default TeamstelephonePage;