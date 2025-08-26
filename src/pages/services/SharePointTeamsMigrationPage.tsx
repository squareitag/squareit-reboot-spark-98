import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Share2, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sharePointTeamsImage from "@/assets/sharepoint-teams-hero.jpg";

const SharePointTeamsMigrationPage = () => {
  const services = [
    {
      name: "SharePoint Migration",
      description: "Migration zu SharePoint Online für modernes Dokumentenmanagement",
      features: ["File Share Migration", "Document Libraries", "Metadata Preservation", "Version History"],
      category: "Content"
    },
    {
      name: "Teams Migration",
      description: "Setup und Migration zu Microsoft Teams für Collaboration",
      features: ["Team Structure Setup", "Channel Migration", "Chat History", "App Integration"],
      category: "Collaboration"
    },
    {
      name: "Workflow Migration",
      description: "Migration von Workflows und Automatisierungen",
      features: ["Power Automate", "SharePoint Workflows", "Approval Processes", "Custom Solutions"],
      category: "Automation"
    },
    {
      name: "User Training",
      description: "Umfassendes Training für SharePoint und Teams",
      features: ["End-User Training", "Admin Training", "Best Practices", "Adoption Support"],
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
              <Share2 className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SharePoint &amp; Teams Migration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professionelle Migration zu SharePoint Online und Microsoft Teams. 
              Moderne Collaboration und Dokumentenmanagement für Ihr Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={sharePointTeamsImage} 
                alt="SharePoint and Teams Migration" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Moderne Collaboration Migration
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Migrieren Sie zu SharePoint Online und Microsoft Teams für optimale Zusammenarbeit. 
                  Wir sorgen für eine nahtlose Übertragung Ihrer Daten und Workflows.
                </p>
                <p>
                  Von der Dokumentenstruktur bis zu Team-Channels - wir migrieren Ihre gesamte 
                  Collaboration-Umgebung professionell und sicher.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Dokumentenstruktur-Analyse</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Teams-Architektur Design</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>User Adoption Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            SharePoint &amp; Teams Migration Services
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
            Moderne Collaboration einführen
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Migrieren Sie zu SharePoint Online und Microsoft Teams für optimale Zusammenarbeit.
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

export default SharePointTeamsMigrationPage;