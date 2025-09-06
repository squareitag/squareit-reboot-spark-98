import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Banknote, 
  Shield, 
  TrendingUp, 
  Lock, 
  Database, 
  Zap,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const FinancePage = () => {
  return (
    <>
      <SEOHead 
        title="IT-Lösungen Finanzwesen Zürich | Square IT"
        description="Sichere IT-Lösungen für Banken, Treuhand und Finanzdienstleister. FINMA-konforme Systeme, Datenschutz und Compliance. Jetzt beraten lassen!"
        keywords="IT Finanzwesen, Banking IT, Treuhand IT, FINMA Compliance, Finanzsoftware"
        canonical="https://www.squareit.ch/industries/finance"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Banknote className="w-4 h-4 mr-2" />
              Financial Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IT-Lösungen Finanzwesen
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professionelle IT-Lösungen für Banken, Treuhandbüros, Versicherungen und Finanzberater. 
              Sichere, FINMA-konforme und skalierbare Systeme für den Finanzsektor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">IT-Beratung Finanzwesen</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kalkulator">IT-Kosten berechnen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Finance */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Solutions for Financial Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT infrastructure designed for the demanding requirements of modern financial services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Financial Grade Security</CardTitle>
                <CardDescription>
                  Multi-factor authentication, end-to-end encryption, and advanced threat protection for financial data.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Core Banking Systems</CardTitle>
                <CardDescription>
                  Modern cloud-based banking platforms with real-time processing and seamless integration capabilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Trading & Analytics Platforms</CardTitle>
                <CardDescription>
                  High-performance systems for algorithmic trading, risk management, and real-time market analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Regulatory Compliance</CardTitle>
                <CardDescription>
                  Automated compliance monitoring, reporting systems for FINMA, MiFID II, and international regulations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digital Payment Solutions</CardTitle>
                <CardDescription>
                  Secure payment processing, mobile banking applications, and blockchain integration services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Banknote className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Wealth Management Systems</CardTitle>
                <CardDescription>
                  Portfolio management platforms, client relationship management, and investment advisory tools.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Leading Financial Institutions</h2>
            <p className="text-xl text-muted-foreground">
              See how we've helped financial services firms enhance their technology infrastructure
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
                  "SquareIT's cybersecurity expertise helped us achieve SOC 2 compliance ahead of schedule. 
                  Their understanding of financial regulations is exceptional."
                </p>
                <div className="font-semibold">Thomas Schneider</div>
                <div className="text-sm text-muted-foreground">CTO, Alpine Private Bank</div>
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
                  "The trading platform migration was flawless. Zero downtime during market hours and 
                  improved performance that our traders immediately noticed."
                </p>
                <div className="font-semibold">Isabella Romano</div>
                <div className="text-sm text-muted-foreground">Head of Technology, SwissInvest AG</div>
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
                  "Their cloud infrastructure reduced our operational costs by 35% while improving our 
                  disaster recovery capabilities. Excellent ROI."
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">CFO, FinTech Innovations Ltd</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Technology Stack */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Financial Technology Stack</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Cutting-edge technologies specifically chosen for financial services requirements.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Core Banking</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Microsoft Dynamics 365 Finance</li>
                    <li>• Azure SQL Database</li>
                    <li>• Power Platform Integration</li>
                    <li>• Real-time Analytics</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Azure Security Center</li>
                    <li>• Microsoft Defender</li>
                    <li>• Azure Sentinel SIEM</li>
                    <li>• Compliance Manager</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Data & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Power BI Premium</li>
                    <li>• Azure Synapse Analytics</li>
                    <li>• Machine Learning Services</li>
                    <li>• Cognitive Services</li>
                  </ul>
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
            Transform Your Financial Services Technology
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how cutting-edge IT solutions can drive innovation and growth in your financial services organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Schedule Financial Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services/cloud-security">View Security Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FinancePage;