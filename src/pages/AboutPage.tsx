import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb, Shield, Cloud, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/SEOHead";
import teamImage from "@/assets/team.jpg";

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('about.customer_approach'),
      description: t('about.customer_description')
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('about.innovation_focus'),
      description: t('about.innovation_description')
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('about.reliability'),
      description: t('about.reliability_description')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('about.strategic_consulting'),
      description: t('about.consulting_description')
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: t('about.continuous_support'),
      description: t('about.support_description')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('about.proven_track'),
      description: t('about.track_description')
    }
  ];

  const processSteps = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('about.security_analysis'),
      description: t('about.security_description')
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t('about.cloud_integration'),
      description: t('about.cloud_integration_description')
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: t('about.technical_support'),
      description: t('about.technical_description')
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Über Square IT - Führender IT-Dienstleister in der Schweiz"
        description="Erfahren Sie mehr über Square IT AG - Ihr zuverlässiger Partner für Managed Services, Cloud Migration, IT Consulting und 24/7 Support. Über 80 Jahre Erfahrung im IT-Bereich."
        keywords="Square IT AG, Über uns, IT Dienstleister Schweiz, Managed Services, Cloud Migration, IT Consulting, IT Support Zug"
      />
      
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="text-6xl font-bold text-primary mb-4">80+</div>
            <p className="text-lg text-muted-foreground mb-8">{t('about.years_experience')}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Über Square IT AG - Führender IT-Dienstleister mit 80+ Jahren Erfahrung
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg inline-block text-lg font-semibold">
              IT Lösungen aus einer Hand
            </div>
          </div>
        </div>
      </section>

      {/* Welcome and Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                {t('about.welcome_title')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.main_description')}</p>
                <p>{t('about.cloud_solutions')}</p>
                <p>{t('about.our_goal')}</p>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <p className="font-semibold text-primary">{t('about.tagline')}</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="Square IT Team" 
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {t('about.choose_us_title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('about.excellence_commitment')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Warum Square IT AG wählen?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {t('about.steps_title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.steps_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {step.description}
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('about.partnership_ready')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('about.partnership_description')}
          </p>
          <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
            <Link to="/contact">
              {t('about.contact_us')}
            </Link>
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;