import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Server, Database, Network, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const TechnologiesPage = () => {
  const technologies = [
    {
      category: "Cloud Platforms",
      id: "cloud",
      icon: <Cloud className="w-8 h-8" />,
      description: "Führende Cloud-Infrastrukturen für maximale Skalierbarkeit",
      items: ["Microsoft Azure", "Amazon AWS", "Google Cloud Platform", "VMware vSphere", "Hyper-V"]
    },
    {
      category: "Security Solutions",
      id: "security", 
      icon: <Shield className="w-8 h-8" />,
      description: "Umfassende Sicherheitslösungen für Ihren Schutz",
      items: ["Endpoint Protection", "Firewall Management", "VPN Solutions", "Identity Management", "Backup & Recovery"]
    },
    {
      category: "Server Technologies",
      id: "infrastructure",
      icon: <Server className="w-8 h-8" />,
      description: "Moderne Server-Infrastrukturen für optimale Performance",
      items: ["Windows Server", "Linux/Ubuntu", "Docker", "Kubernetes", "Load Balancing"]
    },
    {
      category: "Database Systems",
      id: "database",
      icon: <Database className="w-8 h-8" />,
      description: "Leistungsstarke Datenbanklösungen für Ihr Business",
      items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
    },
    {
      category: "Networking",
      id: "networking",
      icon: <Network className="w-8 h-8" />,
      description: "Zuverlässige Netzwerk-Infrastrukturen",
      items: ["Cisco Systems", "Juniper Networks", "Fortinet", "SD-WAN", "Network Monitoring"]
    },
    {
      category: "Monitoring & Analytics",
      id: "monitoring",
      icon: <Monitor className="w-8 h-8" />,
      description: "Proaktive Überwachung und Business Intelligence",
      items: ["SCOM", "Nagios", "Zabbix", "Power BI", "Grafana"]
    }
  ];

  const certifications = [
    "Microsoft Partner",
    "AWS Advanced Partner",
    "VMware Partner",
    "Cisco Partner",
    "ISO 27001 Certified"
  ];

  return (
    <>
      <SEOHead 
        title="IT-Technologien & Plattformen | Square IT"
        description="Moderne IT-Technologien von Square IT: Microsoft Azure, AWS, Security-Lösungen, Server-Infrastrukturen und Netzwerk-Technologien für optimale Performance und Sicherheit."
        keywords="IT Technologien, Microsoft Azure, AWS, Security, Server, Netzwerk, Cloud Platforms, Square IT"
        canonical="https://www.squareit.ch/technologies"
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technologien
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wir arbeiten mit den neuesten und bewährtesten Technologien, um Ihnen 
              optimale Lösungen zu bieten. Unser Technologie-Stack ist darauf ausgelegt, 
              maximale Performance, Sicherheit und Skalierbarkeit zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} id={tech.id} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl">{tech.category}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Zertifizierungen & Partnerschaften
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unsere Zertifizierungen und Partnerschaften gewährleisten höchste Qualitätsstandards
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto shadow-card">
            <CardContent className="text-center py-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Höchste Qualitätsstandards
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Durch unsere Zertifizierungen und Partnerschaften mit führenden Technologieanbietern 
                gewährleisten wir Ihnen stets den Zugang zu den neuesten Innovationen und 
                bewährten Best Practices in der IT-Branche.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Innovation & Zukunftssicherheit
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In der schnelllebigen IT-Welt ist es entscheidend, immer einen Schritt voraus zu sein. 
                  Deshalb investieren wir kontinuierlich in die Weiterbildung unserer Mitarbeiter und 
                  die Evaluation neuer Technologien.
                </p>
                <p>
                  Unser Technologie-Radar hilft uns dabei, frühzeitig relevante Trends zu identifizieren 
                  und diese für unsere Kunden nutzbar zu machen. So stellen wir sicher, dass Ihre 
                  IT-Infrastruktur nicht nur heute optimal funktioniert, sondern auch für die 
                  Herausforderungen von morgen gerüstet ist.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Beratung anfragen
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Technologie-Trends 2024
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Künstliche Intelligenz & Automation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Edge Computing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Zero Trust Security</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Hybrid Cloud Architectures</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Sustainable IT</span>
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
            Bereit für moderne IT-Lösungen?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die optimale Technologie-Strategie für 
            Ihr Unternehmen entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Kostenlose Beratung
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                Unsere Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default TechnologiesPage;