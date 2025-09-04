import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mail, Calendar, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const Microsoft365Page = () => {
  const services = [
    {
      name: "Microsoft Teams",
      description: "Kollaboration und Kommunikation in der Cloud",
      features: ["Video-Konferenzen", "Chat & Messaging", "Dateifreigabe", "App-Integration"],
      category: "Kommunikation"
    },
    {
      name: "Exchange Online",
      description: "Professionelle E-Mail-Lösung mit erweiterten Features",
      features: ["50GB Postfach", "Anti-Spam/Malware", "Mobile Sync", "Shared Mailboxes"],
      category: "E-Mail"
    },
    {
      name: "SharePoint Online",
      description: "Dokumentenmanagement und Intranet-Plattform",
      features: ["Dokumentenbibliotheken", "Workflows", "Team Sites", "Business Intelligence"],
      category: "Zusammenarbeit"
    },
    {
      name: "OneDrive for Business",
      description: "Sichere Cloud-Speicherlösung für Unternehmen",
      features: ["1TB Speicher", "Offline-Sync", "Versionskontrolle", "Externe Freigabe"],
      category: "Speicher"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Zentrale Verwaltung",
      description: "Einheitliche Administration aller Microsoft 365 Services"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Immer aktuell",
      description: "Automatische Updates und neue Features ohne zusätzliche Kosten"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Überall verfügbar",
      description: "Zugriff von jedem Gerät und Standort aus"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Microsoft 365 Lösungen & Beratung für Firmen | Square IT"
        description="Nutzen Sie Microsoft 365 mit Square IT für moderne Zusammenarbeit, Produktivität und Sicherheit. Wir begleiten Unternehmen bei Einführung, Migration und Optimierung von M365 für den Geschäftserfolg."
        keywords="Microsoft 365, Office 365, Teams, SharePoint, Exchange Online, Modern Workplace"
        canonical="https://www.squareit.ch/m365"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Microsoft 365
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die komplette Produktivitätssuite für moderne Unternehmen. Office-Anwendungen, 
              E-Mail, Zusammenarbeit und Cloud-Speicher in einer integrierten Lösung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Microsoft 365 Services
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

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Warum Microsoft 365?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Steigern Sie die Produktivität Ihres Teams mit der bewährtesten Büro-Suite der Welt
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

      {/* Implementation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Microsoft 365 Einführung
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wir begleiten Sie bei der kompletten Einführung von Microsoft 365 in Ihrem Unternehmen. 
                  Von der Planung über die Migration bis hin zur Schulung Ihrer Mitarbeiter.
                </p>
                <p>
                  Als Microsoft Partner sorgen wir für eine reibungslose Implementierung und maximale 
                  Akzeptanz bei Ihren Anwendern.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Bedarfsanalyse und Lizenzplanung</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Migration von bestehenden Systemen</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Anwenderschulungen und Support</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Microsoft 365 Beratung
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Implementierungs-Roadmap
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Tenant Setup & Konfiguration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Benutzer- & Gruppenverwaltung</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>E-Mail Migration & DNS Setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Teams & SharePoint Struktur</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Security & Compliance Setup</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Go-Live & User Training</span>
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
            Bereit für Microsoft 365?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Microsoft 365 Umgebung gemeinsam planen und umsetzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Kostenlose Beratung
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
  );
};

export default Microsoft365Page;