import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";

const CloudSecurityPage = () => {
  const services = [
    {
      name: "Security Assessment",
      description: "Umfassende Bewertung Ihrer Cloud-Sicherheitslage",
      features: ["Security Posture Review", "Vulnerability Assessment", "Compliance Check", "Risk Analysis"],
      category: "Assessment"
    },
    {
      name: "Identity & Access Management",
      description: "Sichere Identitäts- und Zugriffsverwaltung",
      features: ["Azure AD Implementation", "Multi-Factor Authentication", "Conditional Access", "Privileged Access"],
      category: "Identity"
    },
    {
      name: "Data Protection",
      description: "Umfassender Schutz Ihrer sensiblen Daten",
      features: ["Data Classification", "Encryption", "DLP Policies", "Information Rights Management"],
      category: "Data"
    },
    {
      name: "Threat Protection",
      description: "Proaktiver Schutz vor Cyber-Bedrohungen",
      features: ["Microsoft Defender", "Threat Intelligence", "SIEM Integration", "Incident Response"],
      category: "Protection"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Cloud Security Services & Datenschutzlösungen | Square IT"
        description="Unsere Cloud-Sicherheitslösungen von Square IT schützen Ihre Daten, verbessern Compliance und erhöhen die Effizienz. Setzen Sie auf skalierbare Security-Strategien für maximale Unternehmenssicherheit."
        keywords="Cloud Security, Datenschutz, IT Sicherheit, Compliance, Cyber Security, Cloud Schutz"
        canonical="https://www.squareit.ch/cloud-security"
      />
      <div className="min-h-screen pt-16">
      <Breadcrumb items={[
        { label: "Services", href: "/services" },
        { label: "Cloud Security" }
      ]} />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Security Consulting
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Umfassende Sicherheitsberatung für Ihre Cloud-Umgebung. 
              Schützen Sie Ihre Daten und Systeme vor modernen Cyber-Bedrohungen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cloud Security Consulting Services
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
            Sichern Sie Ihre Cloud-Umgebung
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns Ihre Cloud-Sicherheitsstrategie entwickeln und umsetzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                Security Assessment
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
    </>
  );
};

export default CloudSecurityPage;
