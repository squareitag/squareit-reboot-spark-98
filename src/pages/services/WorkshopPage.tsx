import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Target, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const WorkshopPage = () => {
  const services = [
    {
      name: "Microsoft 365 Workshops",
      description: "Hands-on Workshops für Microsoft 365 Produktivität",
      features: ["Teams Training", "SharePoint Workshop", "Power Platform", "Security Awareness"],
      category: "Productivity"
    },
    {
      name: "Digital Transformation",
      description: "Strategische Workshops für digitale Transformation",
      features: ["Vision Development", "Roadmap Planning", "Change Management", "Success Metrics"],
      category: "Strategy"
    },
    {
      name: "Technical Deep Dives",
      description: "Technische Workshops für IT-Professionals",
      features: ["Azure Architecture", "Security Implementation", "DevOps Practices", "Best Practices"],
      category: "Technical"
    },
    {
      name: "Leadership Workshops",
      description: "Führungskräfte-Workshops für digitale Führung",
      features: ["Digital Leadership", "Remote Management", "Change Leadership", "Innovation Culture"],
      category: "Leadership"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Workshop Services - Interaktive IT-Schulungen und Trainings"
        description="Workshops sind eine effektive Möglichkeit, Teams zu stärken, Wissen zu erweitern und Fähigkeiten zu verbessern. Wir bieten Microsoft Teams, SharePoint, Endpoint Manager und verschiedene Microsoft-Tools Workshops."
        keywords="Workshop, IT Training, Microsoft Teams Workshop, SharePoint Workshop, Endpoint Manager, IT Schulungen, Digital Transformation"
        canonical="https://sqsolutions.ch/workshop"
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Workshop Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interaktive Workshops und Trainings für digitale Transformation und 
              moderne Arbeitsweisen. Lernen Sie von unseren Experten.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Workshop Services
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
            Buchen Sie Ihren Workshop
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Teams weiterbilden und transformieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Workshop anfragen
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
    </>
  );
};

export default WorkshopPage;