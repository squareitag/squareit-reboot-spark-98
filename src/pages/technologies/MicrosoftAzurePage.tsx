import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Shield, Database, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const MicrosoftAzurePage = () => {
  const azureServices = [
    {
      name: "Azure Virtual Machines",
      description: "Skalierbare Computing-Ressourcen in der Cloud",
      features: ["Windows & Linux VMs", "Auto-Scaling", "Load Balancing", "Backup & Recovery"],
      category: "Compute"
    },
    {
      name: "Azure Active Directory",
      description: "Identitäts- und Zugriffsverwaltung für die Cloud",
      features: ["Single Sign-On", "Multi-Factor Auth", "Conditional Access", "Identity Protection"],
      category: "Security"
    },
    {
      name: "Azure SQL Database",
      description: "Vollständig verwaltete relationale Datenbank",
      features: ["Automatische Skalierung", "Built-in Intelligence", "Advanced Security", "99.99% Uptime"],
      category: "Database"
    },
    {
      name: "Azure Storage",
      description: "Hochverfügbare und sichere Cloud-Speicherlösungen",
      features: ["Blob Storage", "File Shares", "Disk Storage", "Archive Storage"],
      category: "Storage"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Integrierte Sicherheitsfeatures und Compliance-Zertifizierungen"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Hybrid Integration",
      description: "Nahtlose Integration mit bestehenden On-Premises Systemen"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Pay-as-you-go",
      description: "Flexible Kostenmodelle ohne Vorabinvestitionen"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Microsoft Azure Lösungen für Unternehmen | Square IT"
        description="Nutzen Sie Microsoft Azure mit Square IT für Skalierbarkeit, Flexibilität und Sicherheit. Wir begleiten Ihre digitale Transformation mit Cloud-Architektur, Migration und Managed Services."
        keywords="Microsoft Azure, Cloud Computing, Azure Migration, Managed Cloud Services, Digitale Transformation"
        canonical="https://www.squareit.ch/azure"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Cloud className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Microsoft Azure
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die führende Enterprise-Cloud-Plattform für Ihre digitale Transformation. 
              Skalierbare, sichere und intelligente Cloud-Services von Microsoft.
            </p>
          </div>
        </div>
      </section>

      {/* Azure Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Azure Cloud Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {azureServices.map((service, index) => (
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
              Warum Microsoft Azure?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die bevorzugte Cloud-Plattform für Unternehmen weltweit
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

      {/* Azure Migration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Azure Cloud Migration
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Als Microsoft Gold Partner begleiten wir Sie bei der Migration Ihrer Infrastruktur 
                  in die Azure Cloud. Von der Bestandsaufnahme bis zum Go-Live.
                </p>
                <p>
                  Wir sorgen für eine sichere und kostenoptimierte Migration ohne Betriebsunterbrechungen. 
                  Profitieren Sie von unserer langjährigen Azure-Erfahrung.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Azure Readiness Assessment</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Hybrid Cloud Architekturen</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Cost Optimization & Monitoring</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/services/migration">
                    Azure Migration Services
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Azure Migration Roadmap
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Assessment & Discovery</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Azure Architecture Design</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Pilot Migration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Production Migration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Optimization & Monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Ongoing Management</span>
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
            Bereit für Azure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Starten Sie Ihre Cloud Journey mit Microsoft Azure und unserem Expertenteam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Azure Beratung
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

export default MicrosoftAzurePage;
