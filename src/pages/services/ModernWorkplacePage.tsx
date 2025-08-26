import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Laptop, Users, Shield, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ModernWorkplacePage = () => {
  const services = [
    {
      name: "Workplace Strategy",
      description: "Entwicklung einer modernen Arbeitsplatz-Strategie",
      features: ["Digital Workplace Assessment", "User Experience Design", "Change Management", "ROI Analysis"],
      category: "Strategy"
    },
    {
      name: "Technology Implementation",
      description: "Umsetzung moderner Workplace-Technologien",
      features: ["Microsoft 365 Deployment", "Device Management", "Security Implementation", "Integration Services"],
      category: "Technology"
    },
    {
      name: "User Adoption",
      description: "Erfolgreiche Einführung und Adoption neuer Technologien",
      features: ["Training Programs", "Support Services", "Communication Plans", "Success Metrics"],
      category: "Adoption"
    },
    {
      name: "Continuous Innovation",
      description: "Kontinuierliche Verbesserung des Modern Workplace",
      features: ["Technology Updates", "Process Optimization", "Feedback Integration", "Future Planning"],
      category: "Innovation"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Laptop className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Modern Workplace Consulting
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Strategische Beratung für den modernen Arbeitsplatz. Wir helfen Ihnen dabei, 
              eine zukunftsfähige und produktive Arbeitsumgebung zu schaffen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Modern Workplace Consulting Services
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
            Gestalten Sie den Arbeitsplatz der Zukunft
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihren Modern Workplace entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Beratung anfordern
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

export default ModernWorkplacePage;