import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-Mail",
      info: "hello@squareit.ch",
      link: "mailto:hello@squareit.ch"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      info: "+41 41 560 21 00",
      link: "tel:+41415602100"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      info: "Alpenstrasse 12, 6300 Zug",
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Öffnungszeiten",
      info: "Mo-Fr: 08:00-12:00 / 13:00-17:00",
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Haben Sie Fragen oder benötigen Sie Unterstützung? Unser Expertenteam 
              steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns noch heute!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Senden Sie uns eine Nachricht</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Interessiert an</Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Service auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="managed-services">Managed Services</SelectItem>
                          <SelectItem value="migration">Cloud Migration</SelectItem>
                          <SelectItem value="consulting">IT Consulting</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="other">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Beschreiben Sie Ihre Anforderungen..."
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-primary text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="gradient-hero text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Kostenlose Erstberatung
                  </h3>
                  <p className="text-white/90 mb-4">
                    Vereinbaren Sie einen Termin für eine unverbindliche 
                    Analyse Ihrer IT-Infrastruktur.
                  </p>
                  <Button variant="outline" className="bg-white text-primary hover:bg-white/90 w-full">
                    Termin vereinbaren
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Unser Standort
            </h2>
            <p className="text-xl text-muted-foreground">
              Besuchen Sie uns in unserem Büro in Zug
            </p>
          </div>

          <Card className="overflow-hidden shadow-card">
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Square IT AG</h3>
                <p className="text-muted-foreground">Alpenstrasse 12, 6300 Zug</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;