import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Mail, Users, FileText, CheckCircle, ArrowRight, Monitor, Smartphone, Shield, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import m365MigrationImage from "@/assets/m365-migration.jpg";
import { SEOHead } from "@/components/SEOHead";

const M365MigrationPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      name: t('m365.exchange.title'),
      description: t('m365.exchange.description'),
      features: ["IMAP Migration", "Hybrid Setup", "Cutover Migration", "PST Import"],
      category: "Email"
    },
    {
      name: t('m365.sharepoint.title'),
      description: t('m365.sharepoint.description'),
      features: ["File Share Migration", "Document Libraries", "Metadata Preservation", "Permission Mapping"],
      category: "Content"
    },
    {
      name: t('m365.teams.title'),
      description: t('m365.teams.description'),
      features: ["Team Structure", "Channel Setup", "App Integration", "Phone System"],
      category: "Collaboration"
    },
    {
      name: t('m365.identity.title'),
      description: t('m365.identity.description'),
      features: ["Azure AD Sync", "User Provisioning", "License Assignment", "Profile Migration"],
      category: "Identity"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('m365.collaboration'),
      description: "Microsoft Teams"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t('m365.productivity'),
      description: "Word, Excel, PowerPoint"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('m365.security'),
      description: "Compliance & Security"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t('m365.analytics'),
      description: "Business Intelligence"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('m365.automation'),
      description: "Power Automate"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Microsoft 365 Migration Zürich | Square IT"
        description="M365-Migration von Square IT: E-Mails, Kalender und Daten sicher migriert. Professionelle Begleitung bei der Einführung von Microsoft 365 für KMU."
        keywords="Microsoft 365 Migration, M365 Migration, Email Migration, SharePoint Migration, Teams Migration"
        canonical="https://www.squareit.ch/services/m365-migration"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Mail className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('m365.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('m365.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('m365.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              {t('m365.usage.title')}
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
              {t('m365.usage.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Microsoft 365 Services
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

      {/* Content Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={m365MigrationImage} 
                alt="Microsoft 365 Migration Process" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                {t('m365.benefits.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('m365.benefits.description')}
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Früher bekannt als Office 365, ist Microsoft 365 eine integrierte Suite von Produktivitätstools und Cloud-Diensten, die darauf ausgelegt sind, Unternehmen zu transformieren und ihnen zu ermöglichen, effizienter als je zuvor zu arbeiten.
                </p>
                <p>
                  Unser umfassendes Angebot an Microsoft 365-Diensten deckt verschiedene Aspekte ab, um sicherzustellen, dass Ihr Unternehmen das Beste aus dieser leistungsstarken Technologie herausholen kann.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Pre-Migration Assessment</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Phased Migration Approach</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Post-Migration Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('m365.cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('m365.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                {t('button.plan_migration')}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                {t('common.all_services')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default M365MigrationPage;