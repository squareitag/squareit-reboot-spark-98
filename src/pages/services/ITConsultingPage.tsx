import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const ITConsultingPage = () => {
  const consultingAreas = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "IT-Strategie",
      description: "Entwicklung einer zukunftssicheren IT-Strategie für Ihr Unternehmen."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digitale Transformation",
      description: "Begleitung bei der digitalen Transformation Ihres Unternehmens."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance-Optimierung", 
      description: "Analyse und Optimierung Ihrer IT-Performance und -Effizienz."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Consulting",
      description: "Umfassende Sicherheitsanalyse und Schutzmaßnahmen-Entwicklung."
    }
  ];

  const approach = [
    "Ist-Analyse Ihrer aktuellen IT-Landschaft",
    "Identifikation von Optimierungspotenzialen",
    "Entwicklung individueller Lösungskonzepte",
    "Roadmap-Erstellung mit klaren Meilensteinen",
    "Implementierungsbegleitung",
    "Erfolgsmessung und Nachjustierung"
  ];

  const benefits = [
    "Reduzierte IT-Kosten durch Optimierung",
    "Verbesserte Effizienz und Produktivität",
    "Erhöhte Sicherheit und Compliance",
    "Skalierbare und zukunftssichere Lösungen",
    "Fokus auf Ihr Kerngeschäft"
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="IT-Beratung & Strategieentwicklung | Square IT"
        description="Mit der IT-Beratung von Square IT entwickeln Sie Strategien für Digitalisierung, Cloud und Sicherheit. Wir analysieren Ihre Infrastruktur und entwerfen Lösungen, die Ihr Unternehmen voranbringen."
        keywords="IT Beratung, IT Consulting, IT Strategie, Digitalisierung, Digital Transformation"
        canonical="https://www.squareit.ch/beratung"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">IT Beratung</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Strategische <span className="text-primary">IT-Beratung</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Nutzen Sie das volle Potenzial Ihrer IT-Infrastruktur. Unsere Experten entwickeln 
              maßgeschneiderte Strategien für nachhaltigen Unternehmenserfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="/contact">
                  Beratungstermin vereinbaren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Über uns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unsere Beratungsfelder</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von der strategischen IT-Planung bis zur operativen Umsetzung - wir beraten Sie in allen IT-relevanten Bereichen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unser Beratungsansatz</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strukturiert, praxisorientiert und nachhaltig - so gestalten wir unsere Beratungsprojekte.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approach.map((step, index) => (
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
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Ihre Vorteile
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Erstberatung anfragen
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Beratungs-Pakete
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-white/20 pb-4">
                      <h4 className="font-semibold mb-2">Quick Assessment</h4>
                      <p className="text-sm text-white/90">Schnelle Analyse Ihrer IT-Landschaft</p>
                    </div>
                    <div className="border-b border-white/20 pb-4">
                      <h4 className="font-semibold mb-2">Strategy Workshop</h4>
                      <p className="text-sm text-white/90">Entwicklung einer IT-Strategie</p>
                    </div>
                    <div className="pb-4">
                      <h4 className="font-semibold mb-2">Full Consulting</h4>
                      <p className="text-sm text-white/90">Umfassende Beratung mit Umsetzung</p>
                    </div>
                  </div>
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 w-full mt-6" asChild>
                    <Link to="/contact">
                      Beratung anfragen
                    </Link>
                  </Button>
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
            Bereit für strategische IT-Beratung?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre IT-Strategie entwickeln und Ihr Unternehmen zukunftssicher aufstellen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Kostenlose Erstberatung
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

export default ITConsultingPage;