import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Shield, 
  UserCheck, 
  Database, 
  Stethoscope, 
  Tablet,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";

const HealthcarePage = () => {
  return (
    <>
      <SEOHead 
        title="IT Solutions for Healthcare & Medical Practices - HIPAA Compliant Technology"
        description="Secure, HIPAA-compliant technology solutions for hospitals, clinics, and medical practices. Improve patient care while maintaining the highest data security standards."
        keywords="Healthcare IT, Medical Practice IT, HIPAA Compliance, Electronic Health Records, EHR Systems, Medical Technology"
        
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IT Solutions for Healthcare & Medical Practices
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Secure, HIPAA-compliant technology solutions for hospitals, clinics, and medical practices. 
              Improve patient care while maintaining the highest data security standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Healthcare IT Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kalkulator">Calculate Your IT Costs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Healthcare */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Solutions for Better Patient Care</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT infrastructure designed specifically for healthcare providers and medical institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Electronic Health Records</CardTitle>
                <CardDescription>
                  Secure, cloud-based EHR systems with seamless integration and real-time patient data access.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>HIPAA Compliance & Security</CardTitle>
                <CardDescription>
                  Advanced cybersecurity measures and compliance frameworks to protect sensitive patient information.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Tablet className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Telemedicine Platforms</CardTitle>
                <CardDescription>
                  Secure video conferencing and remote consultation systems for modern healthcare delivery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Patient Management Systems</CardTitle>
                <CardDescription>
                  Integrated scheduling, billing, and patient communication systems for efficient practice management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Medical Device Integration</CardTitle>
                <CardDescription>
                  Seamless connectivity between medical devices, monitoring systems, and hospital information systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Disaster Recovery for Healthcare</CardTitle>
                <CardDescription>
                  Business continuity planning ensuring critical patient care systems remain operational 24/7.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-muted-foreground">
              See how we've helped medical practices and healthcare institutions improve patient care through technology
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
                  "SquareIT's EHR implementation transformed our clinic operations. Patient data is now secure, 
                  accessible, and our staff productivity has increased significantly."
                </p>
                <div className="font-semibold">Dr. Anna Müller</div>
                <div className="text-sm text-muted-foreground">Medical Director, Zürich Medical Center</div>
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
                  "Their telemedicine platform helped us continue serving patients during the pandemic. 
                  The security features ensure full HIPAA compliance."
                </p>
                <div className="font-semibold">Dr. Robert Chen</div>
                <div className="text-sm text-muted-foreground">Chief of Cardiology, Swiss Heart Institute</div>
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
                  "The disaster recovery system saved us during a power outage. Critical patient monitoring 
                  systems remained operational throughout the incident."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">IT Manager, Geneva Hospital Network</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Healthcare Compliance & Certifications</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our solutions meet the highest healthcare standards and regulatory requirements.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">HIPAA</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Health Insurance Portability and Accountability Act compliance</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">GDPR</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">European data protection regulation for patient privacy</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">HL7 FHIR</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Healthcare data exchange standards compliance</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardHeader>
                  <Badge variant="outline" className="mx-auto mb-2">ISO 27001</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Information security management for healthcare</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Technology Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Advanced Healthcare Technology Features</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl">Clinical Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li>• Real-time patient monitoring dashboards</li>
                    <li>• Automated medication management</li>
                    <li>• Clinical decision support systems</li>
                    <li>• Laboratory information systems</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl">Administrative Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li>• Revenue cycle management</li>
                    <li>• Insurance claims processing</li>
                    <li>• Staff scheduling and management</li>
                    <li>• Quality reporting and analytics</li>
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
            Enhance Patient Care with Modern Technology
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how secure, compliant IT solutions can improve your healthcare delivery and patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Schedule Healthcare Consultation</Link>
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

export default HealthcarePage;