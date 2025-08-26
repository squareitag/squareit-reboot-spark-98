import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Shield, Zap, Users, CheckCircle, Server, Cloud, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import teamImage from "@/assets/team.jpg";
import managedServicesImage from "@/assets/managed-services.jpg";
import migrationImage from "@/assets/migration.jpg";
import consultingImage from "@/assets/consulting.jpg";

const HomePage = () => {
  const services = [
    {
      title: "Managed Services",
      description: "Umfassende Lösung für die technologische Infrastruktur Ihres Unternehmens. Wir optimieren Ihre IT-Systeme und sorgen für reibungslose Betriebsabläufe.",
      image: managedServicesImage,
      href: "/services/managed-services",
      icon: <Server className="w-5 h-5" />
    },
    {
      title: "Migration",
      description: "Experten-Support für Ihren technologischen Transformationsprozess. Nahtlose Migration Ihrer Daten und Anwendungen auf neue Plattformen.",
      image: migrationImage,
      href: "/services/migration",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "Consulting",
      description: "Strategische IT-Beratung für Ihr Unternehmen. Wir analysieren Ihre Anforderungen und entwickeln maßgeschneiderte Lösungen für optimale Effizienz.",
      image: consultingImage,
      href: "/services/consulting",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicherheit & Compliance",
      description: "Höchste Sicherheitsstandards und Einhaltung aller relevanten Compliance-Anforderungen."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimierung",
      description: "Maximale Leistung Ihrer IT-Infrastruktur durch kontinuierliche Überwachung und Optimierung."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Rund um die Uhr verfügbarer Support für alle Ihre IT-Anfragen und Probleme."
    }
  ];

  const stats = [
    { number: "500+", label: "Zufriedene Kunden" },
    { number: "99.9%", label: "Uptime Garantie" },
    { number: "24/7", label: "Support Verfügbarkeit" },
    { number: "15+", label: "Jahre Erfahrung" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
            Beste Service- und Lösungsangebote
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Wir bieten erstklassige Dienstleistungen und Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind. 
            Unser Team ist darauf spezialisiert, in jedem Bereich unserer Arbeit Exzellenz zu liefern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow hover:shadow-elegant transition-all" asChild>
              <Link to="/contact">
                Kontaktieren Sie uns
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                Entdecke Mehr
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Unsere Dienstleistungen
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Square IT Lösungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professionelle IT-Services für moderne Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Simple & Secure
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unsere IT-Services sorgen dafür, dass Ihre IT-Infrastruktur stets 
                sicher, leistungsstark und stabil ist, und das rund um die Uhr. Wir bieten 
                proaktive und intelligente Lösungen für optimale Geschäftskontinuität.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="Professional IT Team" 
                className="rounded-lg shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero text-white shadow-elegant">
            <CardContent className="text-center py-16">
              <h2 className="text-4xl font-bold mb-6">
                Bereit für die digitale Transformation?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre IT-Infrastruktur auf das nächste Level bringen. 
                Kontaktieren Sie unsere Experten noch heute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/contact">
                    Kostenlose Beratung
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/services">
                    Unsere Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;