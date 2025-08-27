import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "+41 41 560 21 00",
      link: "tel:+41415602100"
    },
    {
      icon: Mail,
      title: "E-Mail",
      info: "hello@squareit.ch",
      link: "mailto:hello@squareit.ch"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "Square IT AG, Alpenstrasse 12, 6300 Zug",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Meeting",
      info: "Termin vereinbaren",
      link: "https://outlook.office365.com/owa/calendar/TerminBuchung@squareit.ch/bookings/"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kontaktiere uns
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vielen Dank für Ihren Besuch auf unserer Website! Wir freuen uns über Ihr Interesse 
              an unseren IT-Dienstleistungen. Bei Fragen, Informationsbedarf oder individuellen 
              Angeboten sind wir gerne für Sie da.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktformular</CardTitle>
                  <CardDescription>
                    Kontaktieren Sie uns einfach über das Formular. Wir freuen uns auf Ihre Nachricht.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-Mail *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Firma
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Interessanter Service
                      </label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Service auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="managed-services">Managed Services</SelectItem>
                          <SelectItem value="migration">Migration</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="other">Andere</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Nachricht *
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-primary text-white shadow-glow">
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center text-white mr-4">
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{contact.title}</h3>
                        {contact.link ? (
                          <a 
                            href={contact.link} 
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.info}
                            {contact.link.startsWith('http') && <ExternalLink className="w-4 h-4 ml-1" />}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{contact.info}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Additional Support Options */}
                <Card className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                      Weitere Support-Optionen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Remote-Unterstützung</h4>
                      <a 
                        href="https://custom.teamviewer.com/squareitsupport" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Portal Link <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Support-Portal</h4>
                      <a 
                        href="https://sqit.atlassian.net/servicedesk/customer/portals" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        Portal Link <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Free Consultation */}
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-scale-in" style={{ animationDelay: "0.5s" }}>
                  <CardHeader>
                    <CardTitle className="text-primary">Kostenlose Erstberatung</CardTitle>
                    <CardDescription>
                      Nutzen Sie unsere kostenlose Erstberatung und lassen Sie sich 
                      unverbindlich über unsere IT-Services informieren.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://outlook.office365.com/owa/calendar/TerminBuchung@squareit.ch/bookings/" target="_blank" rel="noopener noreferrer">
                        Beratungstermin buchen
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Unser Standort</h2>
            <Card className="animate-scale-in">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Square IT AG</h3>
                    <p className="text-muted-foreground">Alpenstrasse 12, 6300 Zug</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;