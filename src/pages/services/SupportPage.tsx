import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageSquare, Clock, Users, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefon-Support",
      description: "Direkter Kontakt zu unseren Experten für dringende Probleme.",
      availability: "Mo-Fr: 08:00-17:00"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "E-Mail Support",
      description: "Detaillierte Problemanalyse und Lösungen per E-Mail.",
      availability: "24/7 Annahme"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Remote Support",
      description: "Fernwartung für schnelle und effiziente Problemlösung.",
      availability: "Nach Terminvereinbarung"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vor-Ort Service",
      description: "Persönlicher Service direkt bei Ihnen im Unternehmen.",
      availability: "Nach Terminvereinbarung"
    }
  ];

  const supportLevels = [
    {
      title: "Basic Support",
      description: "Grundlegender Support für Standard-Probleme",
      features: [
        "E-Mail Support (Werktags)",
        "Wissensdatenbank-Zugang",
        "Standard-Response-Zeit: 24h",
        "Community-Forum"
      ],
      price: "ab CHF 50/Monat"
    },
    {
      title: "Professional Support", 
      description: "Erweiterte Unterstützung für Geschäftskunden",
      features: [
        "Telefon + E-Mail Support",
        "Prioritätssupport",
        "Response-Zeit: 4h",
        "Remote-Assistance",
        "Dedicated Support-Manager"
      ],
      price: "ab CHF 150/Monat",
      popular: true
    },
    {
      title: "Enterprise Support",
      description: "Premium-Support für kritische Systeme",
      features: [
        "24/7 Hotline-Support",
        "1h Response-Zeit",
        "Vor-Ort Service inklusive",
        "Proaktives Monitoring",
        "Dedicated Account Manager",
        "SLA-Garantien"
      ],
      price: "Individuell"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">IT Support</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Zuverlässiger</span> IT-Support
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Wenn Sie uns brauchen, sind wir da. Professioneller IT-Support für alle Ihre 
              technischen Herausforderungen - schnell, kompetent und zuverlässig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to="/contact">
                  Support anfragen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                +41 41 560 21 00
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Support-Kanäle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Verschiedene Wege zu uns - wählen Sie den Kanal, der am besten zu Ihrem Problem passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center text-white mb-4">
                    {channel.icon}
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">{channel.availability}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {channel.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Support-Pakete</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wählen Sie das Support-Level, das zu Ihren Anforderungen passt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <Card key={index} className={`shadow-card hover:shadow-lg transition-all hover:-translate-y-1 ${level.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  {level.popular && (
                    <Badge className="w-fit mb-2">Beliebteste Wahl</Badge>
                  )}
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                  <CardDescription>{level.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{level.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${level.popular ? 'gradient-primary text-white' : ''}`}
                    variant={level.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link to="/contact">
                      Paket anfragen
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sofort-Kontakt
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Bei dringenden Problemen erreichen Sie uns direkt über diese Kanäle:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Hotline</p>
                    <p className="text-muted-foreground">+41 41 560 21 00</p>
                    <p className="text-sm text-muted-foreground">Mo-Fr: 08:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <p className="text-muted-foreground">hello@squareit.ch</p>
                    <p className="text-sm text-muted-foreground">24/7 Annahme</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="gradient-hero text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Notfall-Support
                </h3>
                <p className="text-white/90 mb-6">
                  Für kritische Systeme außerhalb der Geschäftszeiten steht unser 
                  Notfall-Support zur Verfügung.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span>24/7 Verfügbarkeit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-5 h-5" />
                    <span>Kritische System-Reparaturen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span>Dedicated Notfall-Team</span>
                  </div>
                </div>
                <Button variant="outline" className="bg-white text-primary hover:bg-white/90 w-full mt-6" asChild>
                  <Link to="/contact">
                    Notfall-Support anfragen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;