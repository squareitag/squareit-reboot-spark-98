import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Laptop, Shield, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import managedWorkplaceImage from "@/assets/managed-workplace.jpg";

const ManagedWorkplacePage = () => {
  const services = [
    {
      name: "Device Management",
      description: "Vollständige Verwaltung aller Endgeräte und Mobile Devices",
      features: ["Microsoft Intune", "Windows Autopilot", "Mobile Device Management", "App Deployment"],
      category: "Endpoint"
    },
    {
      name: "User Provisioning",
      description: "Automatisierte Benutzer- und Berechtigungsverwaltung",
      features: ["Azure AD Management", "Group Policies", "Role-based Access", "Self-Service Portal"],
      category: "Identity"
    },
    {
      name: "Modern Workplace Security",
      description: "Umfassende Sicherheitslösungen für den modernen Arbeitsplatz",
      features: ["Endpoint Protection", "Conditional Access", "Multi-Factor Auth", "Data Loss Prevention"],
      category: "Security"
    },
    {
      name: "Collaboration Tools",
      description: "Optimierung und Verwaltung der Zusammenarbeitswerkzeuge",
      features: ["Microsoft Teams", "SharePoint Online", "OneDrive Sync", "Office 365 Apps"],
      category: "Productivity"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Moderne Arbeitsumgebung",
      description: "Flexibles Arbeiten von überall mit optimaler Produktivität"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrierte Sicherheit",
      description: "Zero Trust Security für alle Endgeräte und Anwendungen"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      description: "Nahtlose Integration von mobilen Geräten und BYOD"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Laptop className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Managed Workplace
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Der moderne Arbeitsplatz erfordert flexible, sichere und produktive Lösungen. 
              Wir verwalten Ihre komplette Workplace-Umgebung für optimale User Experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Managed Workplace Services
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
              Der moderne Arbeitsplatz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ermöglichen Sie Ihren Mitarbeitern produktives Arbeiten von überall
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

      {/* Content Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={managedWorkplaceImage} 
                alt="Modern Workplace Environment" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Microsoft 365 Modern Workplace
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wir transformieren Ihren Arbeitsplatz mit Microsoft 365 und modernen 
                  Cloud-Technologien für maximale Flexibilität und Produktivität.
                </p>
                <p>
                  Von der Geräte-Bereitstellung bis zur Anwenderverwaltung - wir sorgen 
                  für eine nahtlose und sichere Modern Workplace Erfahrung.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Windows Autopilot Deployment</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Microsoft Intune Management</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Azure AD Identity Management</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Modern Workplace Beratung
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Services Card */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="gradient-hero text-white shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Workplace Services
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Device Provisioning &amp; Setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>User Onboarding &amp; Training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Application Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Security Policy Enforcement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>24/7 End-User Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Performance Monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Modern Workplace Erfolg
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Messbare Verbesserungen durch moderne Arbeitsplatz-Lösungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">höhere Produktivität</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p className="text-sm text-muted-foreground">weniger IT-Support Tickets</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p className="text-sm text-muted-foreground">User Satisfaction Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Mobile Device Coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für den Modern Workplace?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformieren Sie Ihren Arbeitsplatz mit unseren Modern Workplace Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Workplace Assessment
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

export default ManagedWorkplacePage;