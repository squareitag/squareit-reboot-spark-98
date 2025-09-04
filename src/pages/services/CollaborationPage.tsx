import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Share2, Settings, CheckCircle, ArrowRight, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import collaborationHero from "@/assets/collaboration-hero.jpg";
import { SEOHead } from "@/components/SEOHead";

const CollaborationPage = () => {
  const services = [
    {
      name: "Kommunikation",
      description: "Verbesserte Kommunikationstools für nahtlose Teamarbeit",
      features: ["Microsoft Teams", "Chat & Messaging", "Video-Konferenzen", "Mobile Kommunikation"],
      category: "Kommunikation"
    },
    {
      name: "Teilen",
      description: "Effizientes Teilen und gemeinsame Bearbeitung von Dokumenten",
      features: ["SharePoint Online", "OneDrive", "Dokumentenbibliotheken", "Versionskontrolle"],
      category: "Dokumenten-Sharing"
    },
    {
      name: "Prozesse",
      description: "Optimierte Arbeitsabläufe und Automatisierung",
      features: ["Power Automate", "Workflow-Automatisierung", "Approval-Prozesse", "Integration"],
      category: "Prozessoptimierung"
    },
    {
      name: "Flexibilität",
      description: "Flexible Arbeitsmodelle und standortunabhängige Zusammenarbeit",
      features: ["Remote Work", "Hybrid Work", "Mobile Apps", "Cloud-Integration"],
      category: "Arbeitsflexibilität"
    }
  ];

  const benefits = [
    {
      icon: MessageSquare,
      title: "Verbesserte Kommunikation",
      description: "Moderne Tools für effektive Teamkommunikation und Koordination"
    },
    {
      icon: Share2,
      title: "Effizienter Dateiaustausch",
      description: "Sicheres Teilen und gemeinsame Bearbeitung von Dokumenten"
    },
    {
      icon: Video,
      title: "Virtuelle Meetings",
      description: "Professionelle Video-Konferenzen und virtuelle Besprechungen"
    },
    {
      icon: FileText,
      title: "Projektmanagement",
      description: "Effiziente Verwaltung und Koordination von Projekten"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Collaboration-Tools für Teamwork & Produktivität | Square IT"
        description="Square IT bietet moderne Collaboration-Lösungen für verbesserte Kommunikation, Zusammenarbeit und Produktivität. Nutzen Sie Tools für effizientes Teamwork, Dateiaustausch und digitale Meetings."
        keywords="Collaboration Tools, Teamwork, Microsoft Teams, SharePoint, Office 365, Zusammenarbeit"
        canonical="https://www.squareit.ch/collaboration"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Collaboration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unsere Zusammenarbeitsdienste sind darauf ausgelegt, Teamwork und Produktivität in Ihrer Organisation zu verbessern. 
              Wir bieten eine Reihe von Tools und Lösungen, die die Kommunikation, den Dateiaustausch und die Projektzusammenarbeit 
              erleichtern und es Ihren Teams ermöglichen, nahtlos zusammenzuarbeiten, unabhängig von ihrem Standort. Entdecken Sie unsere <Link to="/technologies/microsoft-365" className="text-primary hover:underline">Microsoft 365 Lösungen</Link> und erfahren Sie mehr über unser <Link to="/about" className="text-primary hover:underline">erfahrenes Team</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in">
                <img 
                  src={collaborationHero} 
                  alt="Collaboration Services" 
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold">Unsere Vorteile</h2>
                <p className="text-lg text-muted-foreground">
                  Unsere Zusammenarbeitsdienste bieten zahlreiche Vorteile, darunter verbesserte Kommunikation, gesteigerte Produktivität, 
                  Kosteneinsparungen und Flexibilität. Indem wir Ihre Zusammenarbeitstools und -prozesse zentralisieren, helfen wir Ihnen, 
                  Ihre Arbeitsabläufe zu optimieren und Ineffizienzen zu beseitigen. Unsere Lösungen sind skalierbar und anpassungsfähig, 
                  sodass Sie Ressourcen je nach Bedarf problemlos skalieren können.
                </p>
                <p className="text-lg text-muted-foreground">
                  Durch den Einsatz modernster Technologien helfen wir Ihnen, eine kooperative Arbeitsumgebung zu schaffen, die Innovationen 
                  fördert und das Unternehmenswachstum vorantreibt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Collaboration Services</h2>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Collaboration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Verbesserte Kommunikation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unsere Collaboration-Tools ermöglichen es Ihren Teams, effektiver zu kommunizieren und zusammenzuarbeiten. 
                Mit Microsoft Teams, Instant Messaging und integrierten Video-Konferenzen können Ihre Mitarbeiter in Echtzeit 
                kommunizieren, unabhängig von ihrem Standort. Diese Tools fördern eine offene Kommunikationskultur und verbessern 
                die Koordination zwischen verschiedenen Abteilungen und Projekten.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-6">Optimierte Arbeitsabläufe</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Durch die Integration verschiedener Collaboration-Tools in eine einheitliche Plattform können Sie Ihre Arbeitsabläufe 
                optimieren und die Produktivität steigern. Mit Power Automate können Sie wiederkehrende Aufgaben automatisieren und 
                Workflows erstellen, die Ihre Teams bei der effizienten Abwicklung von Projekten unterstützen.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl font-bold mb-6">Flexible Zusammenarbeit</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mit unseren Collaboration-Lösungen können Ihre Teams flexibel arbeiten, egal ob im Büro, im Homeoffice oder unterwegs. 
                Cloud-basierte Tools ermöglichen es Ihren Mitarbeitern, von jedem Gerät aus auf ihre Arbeit zuzugreifen und nahtlos 
                mit Kollegen zusammenzuarbeiten. Diese Flexibilität führt zu einer besseren Work-Life-Balance und erhöhter Mitarbeiterzufriedenheit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Verbessern Sie die Zusammenarbeit
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entdecken Sie, wie unsere Collaboration-Services Ihre Teams befähigen können, effektiver zusammenzuarbeiten 
            und bessere Ergebnisse zu erzielen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Collaboration-Beratung
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

export default CollaborationPage;
