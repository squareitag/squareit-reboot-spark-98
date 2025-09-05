import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  Users, 
  Globe, 
  Laptop, 
  Cloud,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const NGOPage = () => {
  return (
    <>
      <SEOHead 
        title="IT Solutions for NGOs & Non-Profit Organizations - Cost-Effective Technology"
        description="Maximize your impact with cost-effective, secure IT solutions designed specifically for non-profit organizations. Focus on your mission while we handle your technology needs."
        keywords="NGO IT Services, Non-Profit Technology, Charity IT Solutions, Microsoft 365 Non-Profit, Volunteer Management, Donor Management"
        
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Non-Profit Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IT Solutions for NGOs & Non-Profit Organizations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Maximize your impact with cost-effective, secure IT solutions designed specifically for non-profit organizations. 
              Focus on your mission while we handle your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Non-Profit Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kalkulator">Calculate Your IT Costs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for NGOs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Solutions for Social Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cost-effective IT solutions that help NGOs operate efficiently and securely while maximizing their social impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cloud-First Infrastructure</CardTitle>
                <CardDescription>
                  Microsoft 365 Non-Profit licenses and Azure cloud services to reduce costs and improve collaboration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Data Protection & Compliance</CardTitle>
                <CardDescription>
                  Secure donor data and beneficiary information with GDPR-compliant systems and advanced security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Volunteer Management Systems</CardTitle>
                <CardDescription>
                  Digital tools to coordinate volunteers, track hours, and manage community engagement effectively.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Remote Work Solutions</CardTitle>
                <CardDescription>
                  Enable distributed teams and volunteers to collaborate seamlessly from anywhere in the world.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Laptop className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Donor Management & CRM</CardTitle>
                <CardDescription>
                  Integrated systems to manage donor relationships, fundraising campaigns, and financial reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Non-Profit Discounts</CardTitle>
                <CardDescription>
                  Access to Microsoft Non-Profit programs and other cost-saving technology solutions.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">NGOs We've Empowered</h2>
            <p className="text-xl text-muted-foreground">
              Helping non-profits focus on their mission, not their technology
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
                  "SquareIT helped us migrate to Microsoft 365 Non-Profit, saving us thousands annually. 
                  Our team can now collaborate efficiently across multiple countries."
                </p>
                <div className="font-semibold">Emma Thompson</div>
                <div className="text-sm text-muted-foreground">Executive Director, EcoAction Switzerland</div>
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
                  "Their cybersecurity expertise protected our sensitive beneficiary data. We finally have 
                  peace of mind knowing our systems are secure and compliant."
                </p>
                <div className="font-semibold">Dr. Jean-Pierre Dubois</div>
                <div className="text-sm text-muted-foreground">IT Manager, Médecins Sans Frontières Geneva</div>
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
                  "The donor management system they implemented transformed our fundraising. 
                  We've increased our efficiency by 40% and doubled our online donations."
                </p>
                <div className="font-semibold">Maria Gonzalez</div>
                <div className="text-sm text-muted-foreground">Development Director, Children's Hope Foundation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Special Non-Profit Programs</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl">Microsoft Non-Profit Licenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li>• Free Microsoft 365 Business Basic (up to 300 users)</li>
                    <li>• 75% discount on Microsoft 365 Business Premium</li>
                    <li>• $3,500 annual Azure credits</li>
                    <li>• Free Power Platform licenses</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl">SquareIT Non-Profit Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li>• 20% discount on all consulting services</li>
                    <li>• Free initial IT assessment</li>
                    <li>• Priority support for critical issues</li>
                    <li>• Flexible payment terms</li>
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
            Amplify Your Social Impact with Technology
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how cost-effective IT solutions can help your NGO achieve greater impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default NGOPage;