import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, BookOpen, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const SecurityAwarenessPage = () => {
  const trainings = [
    {
      name: "Phishing Awareness",
      description: "Erkennung und Vermeidung von Phishing-Angriffen",
      features: ["E-Mail Phishing", "Social Engineering", "Simulierte Angriffe", "Praktische Übungen"],
      category: "Phishing"
    },
    {
      name: "Password Security",
      description: "Sichere Passwort-Praktiken und -Management",
      features: ["Starke Passwörter", "Password Manager", "Multi-Factor Auth", "Best Practices"],
      category: "Passwords"
    },
    {
      name: "Data Protection",
      description: "Schutz sensibler Unternehmensdaten",
      features: ["Data Classification", "Secure Sharing", "GDPR Compliance", "Data Handling"],
      category: "Data"
    },
    {
      name: "Incident Response",
      description: "Richtiges Verhalten bei Sicherheitsvorfällen",
      features: ["Incident Reporting", "Response Procedures", "Escalation Paths", "Recovery Plans"],
      category: "Response"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reduziertes Risiko",
      description: "Signifikante Reduktion von Sicherheitsvorfällen durch menschliche Fehler"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Bewusste Mitarbeiter",
      description: "Geschulte Mitarbeiter als erste Verteidigungslinie"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Kontinuierliche Bildung",
      description: "Regelmäßige Updates zu neuen Bedrohungen und Techniken"
    }
  ];

  const threats = [
    "95% der Angriffe durch menschliche Fehler",
    "Phishing-Angriffe steigen um 65% jährlich",
    "Durchschnittlich CHF 4.45M Kosten pro Data Breach",
    "82% der Breaches involvieren menschlichen Faktor"
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Security Awareness Trainings für Firmen | Square IT"
        description="Erhöhen Sie die IT-Sicherheit mit Security Awareness Trainings von Square IT. Wir schulen Mitarbeiter im Umgang mit Cybergefahren und stärken die Sicherheitskultur in Ihrem Unternehmen."
        keywords="Security Awareness, Cyber Security Training, Phishing Training, Mitarbeiterschulung, IT Security"
        canonical="https://www.squareit.ch/security-awareness"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Security Awareness Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stärken Sie Ihre erste Verteidigungslinie: Ihre Mitarbeiter. 
              Professionelle Schulungen für mehr Cyber-Sicherheit im Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Die Bedrohungslage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Warum Security Awareness Training kritisch ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8 pb-6">
                  <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground font-medium">{threat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Security Awareness Training Module
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{training.name}</CardTitle>
                    <Badge variant="secondary">{training.category}</Badge>
                  </div>
                  <CardDescription>{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {training.features.map((feature, featureIndex) => (
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Vorteile von Security Awareness Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Investition in die Sicherheitskultur Ihres Unternehmens
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stärken Sie Ihre Cyber-Abwehr
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Beginnen Sie noch heute mit Security Awareness Training für Ihr Team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Training planen
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/technologies/security">
                Security Lösungen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityAwarenessPage;