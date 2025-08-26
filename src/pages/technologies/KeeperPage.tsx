import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Users, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const KeeperPage = () => {
  const features = [
    {
      name: "Password Management",
      description: "Sichere Speicherung und Verwaltung aller Passwörter",
      features: ["Zero-Trust Security", "AES 256-bit Encryption", "Password Generator", "Secure Sharing"],
      category: "Security"
    },
    {
      name: "Privileged Access Management",
      description: "Schutz privilegierter Accounts und kritischer Infrastruktur",
      features: ["PAM Gateway", "Session Recording", "Just-in-Time Access", "Privileged Passwords"],
      category: "PAM"
    },
    {
      name: "Secrets Management",
      description: "Zentrale Verwaltung von API-Keys, Zertifikaten und Secrets",
      features: ["API Key Rotation", "Certificate Management", "Infrastructure Secrets", "DevOps Integration"],
      category: "DevSecOps"
    },
    {
      name: "Dark Web Monitoring",
      description: "Überwachung und Schutz vor Cyber-Bedrohungen",
      features: ["Breach Monitoring", "Dark Web Scanning", "Identity Theft Protection", "Security Alerts"],
      category: "Threat Intelligence"
    }
  ];

  const benefits = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Trust Architecture",
      description: "Höchste Sicherheitsstandards mit Zero-Knowledge-Prinzip"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enterprise Ready",
      description: "Skalierbar für Unternehmen jeder Grösse mit Admin-Tools"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Multi-Platform",
      description: "Verfügbar auf allen Geräten und Betriebssystemen"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Lock className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Keeper Security
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die führende Cybersecurity-Plattform für Passwort-Management, 
              Privileged Access Management und Schutz vor Cyber-Bedrohungen.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Keeper Security Platform
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
              Warum Keeper Security?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die vertrauenswürdigste Cybersecurity-Plattform für Unternehmen
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
                Enterprise Security Implementation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Implementieren Sie eine umfassende Cybersecurity-Strategie mit Keeper Security. 
                  Von Passwort-Management bis hin zu privilegiertem Zugriff.
                </p>
                <p>
                  Unsere zertifizierten Security-Experten begleiten Sie bei der Einführung 
                  und sorgen für maximale Sicherheit ohne Produktivitätsverlust.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Security Assessment & Gap Analysis</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Enterprise Rollout & Migration</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>User Training & Adoption</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Security Beratung
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Security Checklist
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Password Policy Definition</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Multi-Factor Authentication</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Privileged Account Security</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Dark Web Monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Security Awareness Training</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Compliance Reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Cyber-Bedrohung Statistiken
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Warum Enterprise Password Management kritisch ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">81%</div>
                <p className="text-sm text-muted-foreground">der Breaches durch schwache Passwörter</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">$4.45M</div>
                <p className="text-sm text-muted-foreground">Durchschnittliche Kosten eines Data Breach</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <p className="text-sm text-muted-foreground">Anstieg der Cyberattacken seit 2020</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">der erfolgreichen Angriffe durch menschliche Fehler</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Schützen Sie Ihr Unternehmen
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Implementieren Sie noch heute eine umfassende Cybersecurity-Strategie mit Keeper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Security Assessment
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

export default KeeperPage;