import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Shield, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import managedInfrastructureImage from "@/assets/managed-infrastructure-hero.jpg";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";

const ManagedInfrastructurePage = () => {
  const { t } = useLanguage();

  const services = [
    {
      name: t('infrastructure.server_management'),
      description: t('infrastructure.server_description'),
      features: [t('features.24_7_monitoring'), t('features.patch_management'), t('features.performance_optimization'), t('features.backup_recovery')],
      category: t('category.infrastructure')
    },
    {
      name: t('infrastructure.cloud_infrastructure'),
      description: t('infrastructure.cloud_description'),
      features: [t('features.azure_management'), t('features.cost_optimization'), t('features.security_compliance'), t('features.disaster_recovery')],
      category: t('category.cloud')
    },
    {
      name: t('infrastructure.network_infrastructure'),
      description: t('infrastructure.network_description'),
      features: [t('features.network_monitoring'), t('features.firewall_management'), t('features.vpn_setup'), t('features.performance_analysis')],
      category: t('category.network')
    },
    {
      name: t('infrastructure.storage_management'),
      description: t('infrastructure.storage_description'),
      features: [t('features.storage_optimization'), t('features.data_backup'), t('features.archive_solutions'), t('features.capacity_planning')],
      category: t('category.storage')
    }
  ];

  const benefits = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t('infrastructure.24_7_monitoring'),
      description: t('infrastructure.monitoring_description')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('infrastructure.proactive_maintenance'),
      description: t('infrastructure.maintenance_description')
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: t('infrastructure.scalability'),
      description: t('infrastructure.scalability_description')
    }
  ];

  return (
    <>
      <SEOHead 
        title="Managed Infrastructure Services - Erhöhte Zuverlässigkeit und Sicherheit"
        description="Unsere Managed Infrastructure-Services bieten Ihnen zahlreiche Vorteile, darunter erhöhte Zuverlässigkeit, verbesserte Sicherheit, Kosteneinsparungen und Skalierbarkeit."
        keywords="Managed Infrastructure, Server Management, Cloud Infrastructure, Network Infrastructure, IT Infrastructure, Kosteneinsparungen"
        canonical="https://sqsolutions.ch/managed-infrastructure"
      />
      <div className="min-h-screen pt-16">
      <Breadcrumb items={[
        { label: "Services", href: "/services" },
        { label: "Managed Infrastructure" }
      ]} />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              <Server className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('infrastructure.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('infrastructure.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('infrastructure.our_services')}
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
                src={managedInfrastructureImage} 
                alt="Managed Infrastructure Services" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                {t('infrastructure.scalability')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('infrastructure.process_description')}
                </p>
                <p>
                  {t('infrastructure.continuous_monitoring')}
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>{t('features.security_compliance')}</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>{t('infrastructure.scalability')}</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>{t('features.cost_optimization')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {t('infrastructure.our_benefits')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('infrastructure.focus_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                {t('infrastructure.process_title')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('infrastructure.process_description')}
                </p>
                <p>
                  {t('infrastructure.continuous_monitoring')}
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Infrastructure Assessment & Analysis</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Monitoring & Alerting Setup</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-3" />
                  <span>Proactive Maintenance & Optimization</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/contact">
                    {t('button.infrastructure_consultation')}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <Card className="gradient-hero text-white shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {t('infrastructure.sla_title')}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>99.9% Verfügbarkeitsgarantie</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Response Time &lt; 15 Minuten</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>24/7 Monitoring & Support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Monthly Performance Reports</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Quarterly Business Reviews</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      <span>Proactive Capacity Planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('infrastructure.cta_title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('infrastructure.cta_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white shadow-glow" asChild>
              <Link to="/contact">
                {t('button.free_consultation')}
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
    </>
  );
};

export default ManagedInfrastructurePage;