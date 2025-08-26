import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: "Wir befähigen Unternehmen durch innovative IT-Lösungen, ihre Ziele zu erreichen und nachhaltiges Wachstum zu erzielen."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Vision",
      description: "Führender Partner für digitale Transformation in der Schweiz und Europa zu sein."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualität",
      description: "Höchste Standards in Service und Technologie sind unser Anspruch an uns selbst."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnerschaft",
      description: "Langfristige Partnerschaften basierend auf Vertrauen und gegenseitigem Erfolg."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Über Square IT
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Seit über 15 Jahren entwickeln wir innovative IT-Lösungen für Unternehmen 
              jeder Größe. Unser Fokus liegt auf nachhaltiger Technologie und 
              partnerschaftlicher Zusammenarbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Square IT wurde 2009 mit der Vision gegründet, Schweizer Unternehmen 
                  dabei zu helfen, das volle Potenzial ihrer IT-Infrastruktur auszuschöpfen. 
                  Was als kleines Team von IT-Enthusiasten begann, ist heute ein 
                  führender Anbieter von Managed Services und IT-Consulting.
                </p>
                <p>
                  Unsere Reise war geprägt von kontinuierlicher Innovation und dem 
                  unermüdlichen Streben nach Exzellenz. Wir haben Hunderte von 
                  erfolgreichen Projekten durchgeführt und dabei stets die 
                  individuellen Bedürfnisse unserer Kunden in den Mittelpunkt gestellt.
                </p>
                <p>
                  Heute sind wir stolz darauf, mit über 500 zufriedenen Kunden 
                  zusammenzuarbeiten und ihnen dabei zu helfen, ihre digitalen 
                  Ziele zu erreichen.
                </p>
              </div>
            </div>

            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="Square IT Team" 
                className="rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unsere Werte
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unser Expertenteam
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hochqualifizierte IT-Spezialisten mit langjähriger Erfahrung
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="gradient-hero text-white shadow-elegant">
              <CardContent className="text-center py-16">
                <Users className="w-16 h-16 mx-auto mb-6 text-white" />
                <h3 className="text-3xl font-bold mb-6">
                  50+ IT-Experten
                </h3>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Unser Team besteht aus zertifizierten IT-Spezialisten, Systemadministratoren, 
                  Cloud-Architekten und Sicherheitsexperten, die Ihr Unternehmen optimal unterstützen.
                </p>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/careers">
                    Karriere bei Square IT
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für eine Partnerschaft?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre IT-Herausforderungen lösen und 
            Ihr Unternehmen für die Zukunft rüsten.
          </p>
          <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
            <Link to="/contact">
              Kontakt aufnehmen
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;