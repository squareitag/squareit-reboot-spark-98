import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Heart, 
  Banknote, 
  Scale, 
  Stethoscope,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const IndustriesPage = () => {
  const industries = [
    {
      id: "schools",
      title: "Schulen & Bildung",
      description: "Moderne IT-Infrastrukturen und digitale Lernlösungen für Bildungseinrichtungen",
      icon: GraduationCap,
      path: "/industries/schools",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      features: [
        "Microsoft 365 Education",
        "Digitale Klassenzimmer",
        "Sichere Lernplattformen",
        "BYOD-Konzepte"
      ]
    },
    {
      id: "ngo",
      title: "NGOs & Non-Profits",
      description: "Kosteneffiziente IT-Lösungen für gemeinnützige Organisationen und Vereine",
      icon: Heart,
      path: "/industries/ngo",
      color: "text-red-600",
      bgColor: "bg-red-50",
      features: [
        "Non-Profit Lizenzen",
        "Kostengünstige Cloud-Lösungen",
        "Freiwilligenmanagement",
        "Fundraising-Tools"
      ]
    },
    {
      id: "finance",
      title: "Finanzdienstleistungen",
      description: "Hochsichere und compliance-konforme IT-Infrastrukturen für Finanzunternehmen",
      icon: Banknote,
      path: "/industries/finance",
      color: "text-green-600",
      bgColor: "bg-green-50",
      features: [
        "FINMA-Compliance",
        "Hochsicherheitsarchitekturen",
        "Verschlüsselte Datenübertragung",
        "Audit-Trails"
      ]
    },
    {
      id: "trustees",
      title: "Treuhänder & Treuhand",
      description: "Vertrauensvolle und datenschutzkonforme IT-Partner für Treuhandgesellschaften",
      icon: Scale,
      path: "/industries/trustees",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      features: [
        "Datenschutz-Compliance",
        "Mandantentrennung",
        "Sichere Dokumentenverwaltung",
        "Backup & Recovery"
      ]
    },
    {
      id: "healthcare",
      title: "Gesundheitswesen & Medizin",
      description: "HIPAA-konforme und sichere IT-Lösungen für medizinische Einrichtungen",
      icon: Stethoscope,
      path: "/industries/healthcare",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      features: [
        "HIPAA-Compliance",
        "Patientendatenschutz",
        "Medizinische Systeme",
        "Telemedizin-Lösungen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Branchen &{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Fachbereiche
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Spezialisierte IT-Lösungen für verschiedene Branchen. Wir verstehen die einzigartigen 
              Anforderungen Ihres Fachbereichs und bieten maßgeschneiderte Technologielösungen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="/contact">
                  Beratung anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  Alle Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Fachbereiche
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von Bildungseinrichtungen bis zum Gesundheitswesen - wir haben die passende IT-Lösung für Ihre Branche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Card key={industry.id} className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl ${industry.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${industry.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {industry.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {industry.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Link to={industry.path}>
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bereit für Ihre branchen­spezifische IT-Lösung?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kontaktieren Sie uns für eine unverbindliche Beratung und erfahren Sie, 
              wie wir Ihre spezifischen Branchenanforderungen optimal erfüllen können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="/contact">
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/kalkulator">
                  IT-Kalkulator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;