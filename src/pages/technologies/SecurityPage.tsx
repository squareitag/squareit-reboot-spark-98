import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, UserCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const SecurityPage = () => {
  const securitySolutions = [
    {
      name: "Endpoint Protection",
      icon: <Shield className="w-8 h-8" />,
      description: "Umfassender Schutz für alle Endgeräte in Ihrem Netzwerk",
      features: ["Antivirus & Anti-Malware", "Behavioral Analysis", "Device Control", "Patch Management"],
      category: "Endpoint Security"
    },
    {
      name: "Firewall Management",
      icon: <Lock className="w-8 h-8" />,
      description: "Next-Generation Firewalls für erweiterten Netzwerkschutz",
      features: ["Deep Packet Inspection", "Application Control", "Intrusion Prevention", "VPN Integration"],
      category: "Network Security"
    },
    {
      name: "Identity Management",
      icon: <UserCheck className="w-8 h-8" />,
      description: "Sichere Verwaltung von Benutzeridentitäten und Zugriffsrechten",
      features: ["Single Sign-On", "Multi-Factor Authentication", "Role-Based Access", "Identity Governance"],
      category: "Identity & Access"
    },
    {
      name: "Security Monitoring",
      icon: <Eye className="w-8 h-8" />,
      description: "24/7 Überwachung und Threat Detection",
      features: ["SIEM Integration", "Real-time Monitoring", "Incident Response", "Threat Intelligence"],
      category: "Security Operations"
    }
  ];

  const threats = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      title: "Ransomware Angriffe",
      description: "Schutz vor Verschlüsselungstrojanern und Erpressersoftware"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      title: "Phishing Attacken",
      description: "Erkennung und Abwehr von betrügerischen E-Mails und Websites"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      title: "Insider Threats",
      description: "Überwachung und Prävention von internen Sicherheitsrisiken"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      title: "Zero-Day Exploits",
      description: "Schutz vor unbekannten Sicherheitslücken und Angriffen"
    }
  ];

  const compliance = [
    "ISO 27001", "GDPR/DSGVO", "SOX Compliance", "HIPAA", "PCI DSS", "NIST Framework"
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="IT-Security & Datenschutzlösungen für Firmen | Square IT"
        description="Mit Square IT schützen Sie Ihre IT-Infrastruktur vor Cyberangriffen. Unsere IT-Security-Lösungen umfassen Firewalls, Cloud-Security und Awareness-Trainings für maximale Unternehmenssicherheit."
        keywords="IT Security, Cybersecurity, Firewall, Endpoint Protection, Security Monitoring, SIEM"
        canonical="https://www.squareit.ch/security"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Security Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Umfassende Sicherheitslösungen zum Schutz Ihrer IT-Infrastruktur vor modernen 
              Cyberbedrohungen. Von Endpoint Protection bis hin zu Security Operations Centers.
            </p>
          </div>
        </div>
      </section>

      {/* Security Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Security-Technologien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white">
                      {solution.icon}
                    </div>
                    <Badge variant="secondary">{solution.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
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

      {/* Threat Landscape */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Moderne Bedrohungslandschaft
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schützen Sie sich vor den häufigsten Cyberbedrohungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 pb-4">
                  <div className="mb-4">
                    {threat.icon}
                  </div>
                  <h3 className="font-bold mb-2">{threat.title}</h3>
                  <p className="text-sm text-muted-foreground">{threat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Compliance & Standards
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unsere Sicherheitslösungen helfen Ihnen dabei, die strengsten 
                  Compliance-Anforderungen zu erfüllen und gleichzeitig die höchsten 
                  Sicherheitsstandards zu gewährleisten.
                </p>
                <p>
                  Von der DSGVO-Compliance bis hin zu branchenspezifischen Vorschriften - 
                  wir unterstützen Sie bei der Umsetzung aller relevanten Standards.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    Security Assessment
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Unterstützte Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {compliance.map((standard, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm font-medium">{standard}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-bold mb-2">24/7 Security Operations Center</h4>
                    <p className="text-sm text-muted-foreground">
                      Unsere Sicherheitsexperten überwachen Ihre Infrastruktur rund um die Uhr 
                      und reagieren sofort auf potenzielle Bedrohungen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Unsere Security Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in">
              <CardContent className="pt-8 pb-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Security Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Umfassende Analyse Ihrer aktuellen Sicherheitslage
                </p>
                <Button variant="outline" asChild>
                  <Link to="/services/consulting">
                    Mehr erfahren
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8 pb-6">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Managed Security</h3>
                <p className="text-muted-foreground mb-4">
                  Vollständig verwaltete Sicherheitslösungen
                </p>
                <Button variant="outline" asChild>
                  <Link to="/services/managed-services">
                    Mehr erfahren
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8 pb-6">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Security Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 Überwachung und Incident Response
                </p>
                <Button variant="outline" asChild>
                  <Link to="/services/support">
                    Mehr erfahren
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sichern Sie Ihr Unternehmen
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Sicherheitsstrategie gemeinsam entwickeln und 
            Ihr Unternehmen vor Cyberbedrohungen schützen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Security Beratung
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

export default SecurityPage;