import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, TrendingUp, Coffee, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CareersPage = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life-Balance",
      description: "Flexible Arbeitszeiten und Home-Office Möglichkeiten"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Weiterbildung",
      description: "Kontinuierliche Fortbildungen und Zertifizierungen"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teamgeist",
      description: "Kollegiales Arbeitsklima und offene Kommunikation"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Benefits",
      description: "Attraktive Sozialleistungen und moderne Arbeitsplätze"
    }
  ];

  const openPositions = [
    {
      title: "Senior System Administrator",
      location: "Zug, Schweiz",
      type: "Vollzeit",
      description: "Verwaltung und Wartung von Server-Infrastrukturen für unsere Kunden.",
      requirements: [
        "Mehrjährige Erfahrung mit Windows/Linux Servern",
        "Kenntnisse in Virtualisierung (VMware/Hyper-V)",
        "Erfahrung mit Cloud-Plattformen (Azure/AWS)",
        "Deutsch und Englisch fließend"
      ]
    },
    {
      title: "IT Security Specialist",
      location: "Zug, Schweiz", 
      type: "Vollzeit",
      description: "Entwicklung und Umsetzung von Sicherheitskonzepten für unsere Kunden.",
      requirements: [
        "Zertifizierungen im Bereich IT-Security erwünscht",
        "Erfahrung mit Penetration Testing",
        "Kenntnisse in Compliance und Governance",
        "Analytisches Denkvermögen"
      ]
    },
    {
      title: "Cloud Engineer",
      location: "Zug, Schweiz",
      type: "Vollzeit", 
      description: "Design und Implementation von Cloud-Lösungen für moderne IT-Infrastrukturen.",
      requirements: [
        "Erfahrung mit Azure/AWS/Google Cloud",
        "Kenntnisse in Infrastructure as Code",
        "Container-Technologien (Docker/Kubernetes)",
        "DevOps Mindset"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">Karriere</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Werde Teil von <span className="text-primary">Square IT</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Gestalte die Zukunft der IT mit uns. Wir suchen talentierte Menschen, 
              die gemeinsam mit uns innovative Lösungen entwickeln möchten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="#positions">
                  Offene Stellen ansehen
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

      {/* Why Square IT */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Warum Square IT?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bei uns erwartet dich mehr als nur ein Job - werde Teil eines innovativen Teams und gestalte deine Zukunft aktiv mit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Unsere Unternehmenskultur
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Wir glauben an die Kraft des Teams und schaffen ein Umfeld, 
                in dem sich jeder entfalten und wachsen kann.
              </p>
              <div className="space-y-4">
                {[
                  "Offene und transparente Kommunikation",
                  "Kontinuierliches Lernen und Entwicklung",
                  "Eigenverantwortung und Gestaltungsfreiheit",
                  "Respektvoller Umgang miteinander",
                  "Innovation und Kreativität fördern"
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="gradient-hero text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Initiativbewerbung
                </h3>
                <p className="text-white/90 mb-6">
                  Du findest keine passende Stelle, aber möchtest trotzdem bei uns arbeiten? 
                  Sende uns deine Initiativbewerbung!
                </p>
                <Button variant="outline" className="bg-white text-primary hover:bg-white/90 w-full" asChild>
                  <Link to="/contact">
                    Initiativbewerbung senden
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Offene Stellen</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entdecke spannende Karrieremöglichkeiten in unserem dynamischen IT-Unternehmen.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button className="gradient-primary text-white w-fit" asChild>
                      <Link to="/contact">
                        Jetzt bewerben
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {position.description}
                  </CardDescription>
                  <div>
                    <h4 className="font-semibold mb-3">Das bringst du mit:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Bereit für den nächsten Karriereschritt?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Werde Teil unseres Teams und gestalte gemeinsam mit uns die Zukunft der IT-Dienstleistungen.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Bewerbung senden
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;