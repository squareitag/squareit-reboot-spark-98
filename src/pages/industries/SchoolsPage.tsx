import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Shield, 
  Users, 
  BookOpen, 
  Wifi, 
  Monitor,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

const SchoolsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              IT Solutions for Schools & Educational Institutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering education through secure, scalable, and innovative technology solutions. 
              From digital classrooms to administrative systems, we help schools thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Educational Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kalkulator">Calculate Your IT Costs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Schools */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive School IT Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From classroom technology to administrative systems, we provide complete IT infrastructure for modern education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Digital Classroom Solutions</CardTitle>
                <CardDescription>
                  Interactive whiteboards, tablets, and learning management systems for engaging education.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Student Data Protection</CardTitle>
                <CardDescription>
                  GDPR-compliant systems to protect sensitive student and staff information with advanced security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wifi className="w-12 h-12 text-primary mb-4" />
                <CardTitle>School-Wide WiFi Networks</CardTitle>
                <CardDescription>
                  Reliable, secure wireless networks designed for high-density educational environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Learning Management Systems</CardTitle>
                <CardDescription>
                  Modern LMS platforms for online learning, assignments, and student progress tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Administrative Systems</CardTitle>
                <CardDescription>
                  Student information systems, grade books, and communication platforms for efficient administration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Remote Learning Support</CardTitle>
                <CardDescription>
                  Complete infrastructure for hybrid and distance learning with Microsoft Teams for Education.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Schools Say About Us</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by educational institutions across Switzerland
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
                  "SquareIT transformed our school's technology infrastructure. Our teachers now have reliable tools, 
                  and our students are more engaged with learning. The support team is exceptional."
                </p>
                <div className="font-semibold">Sarah Weber</div>
                <div className="text-sm text-muted-foreground">IT Director, Gymnasium Zürich Nord</div>
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
                  "The migration to Microsoft 365 for Education was seamless. Students and teachers can now 
                  collaborate effectively from anywhere. Best investment we've made in years."
                </p>
                <div className="font-semibold">Dr. Andreas Müller</div>
                <div className="text-sm text-muted-foreground">Principal, Kantonsschule Basel</div>
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
                  "Their cybersecurity solutions gave us peace of mind. With sensitive student data, 
                  we needed experts who understand educational compliance requirements."
                </p>
                <div className="font-semibold">Maria Rossi</div>
                <div className="text-sm text-muted-foreground">ICT Manager, International School Geneva</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your School's Technology?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can enhance your educational environment with modern, secure IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolsPage;