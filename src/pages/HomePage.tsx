import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Shield, Zap, Users, CheckCircle, Server, Cloud, Headphones, Search, BarChart3 } from "lucide-react";
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
      description: "Wenn Sie nach einer umfassenden Lösung suchen, um die technologische Infrastruktur Ihres Unternehmens zu stärken und zu optimieren, sind die Managed Services von Square IT AG genau das Richtige für Sie. Wir sind hier, um bei täglichen Betriebsabläufen sowie bei der Fehlerbehebung zu unterstützen.",
      image: managedServicesImage,
      href: "/services/managed-services",
      icon: <Server className="w-5 h-5" />
    },
    {
      title: "Migration",
      description: "Wir sind hier, um Ihr Unternehmen im technologischen Transformationsprozess zu unterstützen. Mit unseren Expertenteams können wir Ihnen helfen, Ihre Daten, Anwendungen und andere IT-Ressourcen nahtlos auf neue Plattformen oder Infrastrukturen zu migrieren.",
      image: migrationImage,
      href: "/services/migration",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "Consulting",
      description: "Wir können einen massgeschneiderten Plan erstellen, um die Technologiestrategie Ihres Unternehmens zu entwickeln und die besten Praktiken zu übernehmen. Durch die Analyse der Bedürfnisse Ihres Unternehmens werden unsere Experten die geeignetsten Technologielösungen identifizieren.",
      image: consultingImage,
      href: "/services/consulting",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Sicherheitsanalyse",
      description: "Wir führen eine umfassende Analyse durch, um Sicherheitslücken zu identifizieren und Risiken zu mindern."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Integration",
      description: "Wir integrieren cloudbasierte Lösungen, um Ihre bestehende Infrastruktur zu verbessern und die Flexibilität zu erhöhen."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Technischer Support",
      description: "Unser Team bietet engagierten technischen Support, um reibungslose Abläufe zu gewährleisten und Probleme schnell zu lösen."
    }
  ];

  const stats = [
    { number: "80%", label: "Erhöhung des Secure Scores", description: "Wir verbessern kontinuierlich die Sicherheit von Microsoft 365, Intune und anderen Plattformen" },
    { number: "30%", label: "Effizienzsteigerung", description: "Unsere Lösungen haben zu einer 30% Verbesserung der betrieblichen Effizienz geführt" },
    { number: "60%", label: "Kostenreduktion", description: "Durch Optimierung haben wir eine Reduzierung der IT-Gesamtkosten um 60% erreicht" },
    { number: "24/7", label: "Support Verfügbarkeit", description: "Rund um die Uhr verfügbarer technischer Support" }
  ];

  const faqData = [
    {
      category: "Managed Services",
      questions: [
        {
          question: "Was sind Managed Services und wie können sie meinem Unternehmen helfen?",
          answer: "Managed Services beinhalten das Outsourcing von Verantwortung für die Wartung und Vorhersage von IT-Prozessen, um die Effizienz zu steigern und Kosten zu senken. Sie ermöglichen es Unternehmen, sich auf ihre Kernaktivitäten zu konzentrieren, während Experten die IT-Infrastruktur verwalten."
        },
        {
          question: "Wie stellt Square IT die Sicherheit unserer Daten bei Managed Services sicher?",
          answer: "Square IT setzt robuste Sicherheitsmassnahmen ein, einschließlich regelmäßiger Sicherheitsanalysen, Cloud-Integration mit erweiterten Sicherheitsprotokollen und technischem Support, um Ihre Daten jederzeit zu schützen."
        },
        {
          question: "Können Managed Services an die spezifischen Bedürfnisse meines Unternehmens angepasst werden?",
          answer: "Ja, Square IT bietet massgeschneiderte Managed Services, die auf die individuellen Anforderungen Ihres Unternehmens zugeschnitten sind, um Ihre Geschäftsziele effektiv zu unterstützen."
        }
      ]
    },
    {
      category: "Migration",
      questions: [
        {
          question: "Wie verläuft der typische Prozess für die Migration auf eine neue IT-Plattform mit Square IT?",
          answer: "Der Migrationsprozess umfasst eine umfassende Bewertung Ihrer aktuellen Systeme, die Planung der Migrationsstrategie, die Ausführung der Daten- und Anwendungsübertragung und die Bereitstellung von Unterstützung nach der Migration, um einen reibungslosen Übergang sicherzustellen."
        },
        {
          question: "Wie minimiert Square IT Ausfallzeiten während des Migrationsprozesses?",
          answer: "Square IT plant Migrationen sorgfältig und führt sie in Nebenzeiten durch, um Unterbrechungen der Geschäftsabläufe zu minimieren."
        },
        {
          question: "Auf welche Migrationen ist Square IT spezialisiert?",
          answer: "Square IT ist auf verschiedene Migrationen spezialisiert, darunter M365-Migration, Azure-Migration sowie SharePoint- und Teams-Migration, um erfolgreiche Übergänge sicherzustellen."
        }
      ]
    },
    {
      category: "Technologien",
      questions: [
        {
          question: "Welche Technologien unterstützt und implementiert Square IT?",
          answer: "Square IT unterstützt und implementiert eine Reihe von Technologien, darunter Microsoft 365, Microsoft Azure, AvePoint Backup, Jamf Software, Printix, Peoplefone und Keeper, um umfassende IT-Lösungen anzubieten."
        },
        {
          question: "Wie bleibt Square IT auf dem neuesten Stand der technologischen Entwicklungen?",
          answer: "Unser Team beteiligt sich kontinuierlich an beruflicher Weiterbildung und arbeitet mit Branchenführern zusammen, um über neue Technologien informiert zu bleiben und modernste Lösungen bereitzustellen."
        },
        {
          question: "Kann Square IT neue Technologien in unsere bestehende IT-Infrastruktur integrieren?",
          answer: "Ja, Square IT ist auf die nahtlose Integration neuer Technologien in Ihre bestehende IT-Umgebung spezialisiert, um die Funktionalität zu verbessern und Störungen zu minimieren."
        }
      ]
    },
    {
      category: "Consulting",
      questions: [
        {
          question: "Wie können die Beratungsdienste von Square IT die IT-Strategie meines Unternehmens verbessern?",
          answer: "Die Beratungsdienste von Square IT analysieren Ihre Geschäftsanforderungen und entwickeln einen massgeschneiderten Plan, um Ihre IT-Strategie zu verbessern, bewährte Verfahren zu übernehmen und geeignete technologische Lösungen umzusetzen."
        },
        {
          question: "Welche Bereiche deckt die Beratung von Square IT ab?",
          answer: "Unsere Beratung umfasst Modern Workplace, Cloud-Sicherheit, Zusammenarbeit, Teams-Telefonie und Workshops, um verschiedene Aspekte Ihrer IT-Infrastruktur zu unterstützen."
        },
        {
          question: "Wie funktioniert der Beratungsprozess mit Square IT?",
          answer: "Der Prozess beginnt mit einer eingehenden Analyse Ihrer aktuellen IT-Umgebung, gefolgt von der Identifikation von Verbesserungsmöglichkeiten, der Entwicklung eines strategischen Plans und der Unterstützung bei der Implementierung empfohlener Lösungen."
        }
      ]
    },
    {
      category: "Support und Kontakt",
      questions: [
        {
          question: "Wie kann ich Square IT für Unterstützung oder Anfragen kontaktieren?",
          answer: "Sie können uns über die Kontaktseite auf unserer Website erreichen, wo Sie Optionen für die Kontaktaufnahme per E-Mail oder Telefon finden."
        },
        {
          question: "Welche Art von Support bietet Square IT seinen Kunden?",
          answer: "Wir bieten umfassenden Support, einschließlich technischer Unterstützung, Fehlersuche und Beratung zu IT-Lösungen, um einen reibungslosen Geschäftsbetrieb zu gewährleisten."
        },
        {
          question: "Bietet Square IT auch Remote-Support an?",
          answer: "Ja, wir bieten Remote-Support, um Ihre IT-Probleme schnell zu lösen, Ausfallzeiten zu minimieren und eine effiziente Problemlösung sicherzustellen."
        }
      ]
    }
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

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              IT Lösungen aus einer Hand
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Willkommen bei Square IT AG! Wir sind ein führender Anbieter von umfassenden IT-Lösungen und unterstützen Unternehmen dabei, ihre technologische Landschaft zu optimieren und in die Zukunft zu führen.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Unser erfahrenes Team von Experten verfügt über umfangreiches Fachwissen in verschiedenen Bereichen, darunter Managed Workplace, Managed Server, Managed Infrastructure und vieles mehr.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-shadow animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2 text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
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

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              WIE ES FUNKTIONIERT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Schritte in unseren IT-Lösungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir verfügen über einen robusten Prozess und eine technologische Infrastruktur in unseren Dienstleistungen. Hier sind die Schritte, die wir befolgen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="IT Solutions Process" 
                className="rounded-lg shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              FAQ & ANTWORT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Willkommen in unserem FAQ-Bereich. Hier finden Sie Antworten auf die häufigsten Fragen zu den Dienstleistungen, Richtlinien und Verfahren von Square IT AG.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border rounded-lg px-4 bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
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