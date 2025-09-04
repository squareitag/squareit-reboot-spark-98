import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Shield, 
  FileCheck, 
  Lock, 
  Building, 
  Clock,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const TrusteesPage = () => {
  return (
    <>
      <SEOHead 
        title="IT-Lösungen für Treuhänder & Treuhand-Services - FINMA Compliant"
        description="Sichere, konforme und effiziente Technologielösungen für Treuhänder, Treuhand-Dienstleister und Vermögensverwaltungsfachleute. Schützen Sie sensible Finanzdaten mit Sicherheit auf Unternehmensniveau."
        keywords="Treuhand IT, Fiduciary IT Services, FINMA Compliance, Trust Management Systems, Financial Data Security, Trustee Technology"
        canonical="https://sqsolutions.ch/industries/trustees"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Scale className="w-4 h-4 mr-2" />
              Treuhand-Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IT-Lösungen für Treuhänder & Treuhand-Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sichere, konforme und effiziente Technologielösungen für Treuhänder, Treuhand-Dienstleister 
              und Vermögensverwaltungsfachleute. Schützen Sie sensible Finanzdaten mit Sicherheit auf Unternehmensniveau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Treuhand-IT-Beratung erhalten</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kalkulator">IT-Kosten berechnen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Trustees */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Specialized IT for Fiduciary Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed for the unique requirements of trustees and fiduciary service providers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Advanced Cybersecurity</CardTitle>
                <CardDescription>
                  Multi-layered security protocols to protect sensitive client financial data and maintain fiduciary trust.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Compliance Management</CardTitle>
                <CardDescription>
                  Automated compliance reporting and audit trails for FINMA, GDPR, and international regulatory requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Client Data Protection</CardTitle>
                <CardDescription>
                  End-to-end encryption and secure document management for confidential client information.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Trust Management Systems</CardTitle>
                <CardDescription>
                  Specialized software for trust administration, beneficiary management, and asset tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digital Workflow Automation</CardTitle>
                <CardDescription>
                  Streamlined processes for client onboarding, KYC/AML procedures, and regulatory reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Disaster Recovery</CardTitle>
                <CardDescription>
                  Business continuity planning with secure backup and rapid recovery capabilities for critical systems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Leading Fiduciary Firms</h2>
            <p className="text-xl text-muted-foreground">
              See how we've helped trustees enhance their operations while maintaining the highest security standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">
                  "SquareIT's security-first approach gave us confidence to digitize our trust operations. 
                  Our clients' sensitive data is now better protected than ever before."
                </p>
                <div className="font-semibold">Dr. Heinrich Zimmermann</div>
                <div className="text-sm text-muted-foreground">Managing Partner, Zürich Trust Services AG</div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">
                  "The compliance automation they implemented saved us hundreds of hours annually. 
                  FINMA audits are now seamless with their audit trail systems."
                </p>
                <div className="font-semibold">Catherine Dupont</div>
                <div className="text-sm text-muted-foreground">Compliance Officer, Geneva Fiduciary SA</div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">
                  "Their disaster recovery solution ensured business continuity during a critical system failure. 
                  We were back online within minutes, not hours."
                </p>
                <div className="font-semibold">Marcus Weber</div>
                <div className="text-sm text-muted-foreground">IT Director, Basel Trust Company</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Regulatory Compliance & Standards</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our solutions are designed to meet the strictest regulatory requirements in Switzerland and internationally.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">FINMA</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Swiss Financial Market Supervisory Authority compliance</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">GDPR</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">European data protection regulation compliance</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">ISO 27001</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Information security management systems</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">SOC 2</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Service organization control compliance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Secure Your Fiduciary Operations Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our specialized IT solutions can enhance your fiduciary services while maintaining the highest security standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Schedule Secure Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services/cloud-security">View Security Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TrusteesPage;