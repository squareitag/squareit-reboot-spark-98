import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Cloud, Users, Headphones, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const PeoplefonePage = () => {
  const features = [
    {
      name: "Cloud Telefonie",
      description: "Professionelle VoIP-Lösung aus der Schweizer Cloud",
      features: ["HD Voice Qualität", "Unbegrenzte Gespräche", "Mobile Apps", "Web-Interface"],
      category: "Telefonie"
    },
    {
      name: "Unified Communications",
      description: "Integrierte Kommunikationslösung für moderne Unternehmen",
      features: ["Video Conferencing", "Instant Messaging", "Presence", "Screen Sharing"],
      category: "Collaboration"
    },
    {
      name: "Contact Center",
      description: "Professionelle Callcenter-Funktionen für den Kundendienst",
      features: ["ACD Routing", "IVR System", "Call Recording", "Real-time Monitoring"],
      category: "Service"
    },
    {
      name: "Microsoft Teams Integration",
      description: "Nahtlose Integration in Microsoft Teams Umgebungen",
      features: ["Direct Routing", "Teams Telefonie", "Calling Plans", "PSTN Gateway"],
      category: "Integration"
    }
  ];

  const benefits = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Swiss Cloud",
      description: "Gehostet in Schweizer Rechenzentren mit höchsten Datenschutzstandards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skalierbar",
      description: "Von 1 bis 10'000+ Benutzern, flexibel an Ihr Business anpassbar"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Premium Support",
      description: "Schweizer Support-Team mit lokalem Know-how"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Peoplefone - Business Voice Lösung & Microsoft Teams Integration"
        description="Die führende Business Voice Lösung aus der Schweiz. Cloud-Telefonie, Unified Communications und Contact Center in einer integrierten Plattform."
        keywords="Peoplefone, Business Voice, Cloud Telefonie, Microsoft Teams Telefonie, VoIP Schweiz, Unified Communications"
        
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Phone className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Peoplefone
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die führende Business Voice Lösung aus der Schweiz. Cloud-Telefonie, 
              Unified Communications und Contact Center in einer integrierten Plattform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Peoplefone Business Voice Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                    <Badge variant="secondary">{feature.category}</Badge>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{item}</span>
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
              Warum Peoplefone?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die vertrauenswürdigste Business Voice Lösung der Schweiz
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

      {/* Teams Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Microsoft Teams Integration
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nutzen Sie die volle Power von Microsoft Teams mit Peoplefone als Telefonie-Provider. 
                  Direct Routing ermöglicht es, bestehende Rufnummern zu behalten.
                </p>
                <p>
                  Unsere zertifizierten Teams-Experten implementieren eine nahtlose Integration, 
                  die Ihre Teams-Umgebung um professionelle Telefonie-Features erweitert.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Teams Direct Routing Setup</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Rufnummern-Portierung</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>User Training & Adoption</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Teams Telefonie
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Teams Telefonie Features
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Ein Interface für alles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Bestehende Nummern behalten</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>HD Voice Qualität</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Mobile & Desktop Apps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Call Recording & Analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Emergency Calling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Erfolgreich mit Peoplefone
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Über 30'000 zufriedene Business-Kunden in der Schweiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">30'000+</div>
                <p className="text-sm text-muted-foreground">Business Kunden</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Service Verfügbarkeit</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Schweizer Support</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">ISO 27001</div>
                <p className="text-sm text-muted-foreground">Security Zertifizierung</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für moderne Telefonie?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entdecken Sie die Möglichkeiten der Peoplefone Business Voice Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Demo vereinbaren
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/technologies">
                Alle Technologien
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PeoplefonePage;