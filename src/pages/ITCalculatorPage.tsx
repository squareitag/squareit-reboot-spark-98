import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calculator, ChevronLeft, ChevronRight, Users, Building, Shield, Cloud, Server, Monitor, Database, Wifi } from "lucide-react";

interface CalculatorData {
  employees: string;
  workstations: string;
  industry: string;
  currentServices: string[];
  neededServices: string[];
  budget: string;
  timeline: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
}

const ITCalculatorPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<CalculatorData>({
    employees: "",
    workstations: "",
    industry: "",
    currentServices: [],
    neededServices: [],
    budget: "",
    timeline: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: ""
  });

  const totalSteps = 6;

  const industries = [
    "Finanzen & Versicherung",
    "Gesundheitswesen",
    "Bildung",
    "Einzelhandel",
    "Fertigung",
    "Technologie",
    "Beratung",
    "Immobilien",
    "Andere"
  ];

  const services = [
    { id: "managed-infrastructure", label: "Managed Infrastructure", icon: Server },
    { id: "managed-workplace", label: "Managed Workplace", icon: Monitor },
    { id: "cloud-services", label: "Cloud Services", icon: Cloud },
    { id: "security", label: "IT-Sicherheit", icon: Shield },
    { id: "backup", label: "Backup & Recovery", icon: Database },
    { id: "network", label: "Netzwerk-Management", icon: Wifi }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceToggle = (serviceId: string, type: 'current' | 'needed') => {
    const field = type === 'current' ? 'currentServices' : 'neededServices';
    const currentServices = data[field];
    const updated = currentServices.includes(serviceId)
      ? currentServices.filter(id => id !== serviceId)
      : [...currentServices, serviceId];
    
    setData({ ...data, [field]: updated });
  };

  const handleSubmit = () => {
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank für Ihre Angaben. Wir erstellen Ihnen ein individuelles Angebot und melden uns binnen 24 Stunden bei Ihnen.",
    });
    
    // Reset form
    setData({
      employees: "",
      workstations: "",
      industry: "",
      currentServices: [],
      neededServices: [],
      budget: "",
      timeline: "",
      companyName: "",
      contactName: "",
      email: "",
      phone: ""
    });
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Unternehmensinformationen</h2>
              <p className="text-muted-foreground">Geben Sie uns einige grundlegende Informationen über Ihr Unternehmen</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Anzahl Mitarbeiter</label>
                <Input
                  type="number"
                  placeholder="z.B. 25"
                  value={data.employees}
                  onChange={(e) => setData({ ...data, employees: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Anzahl Arbeitsplätze</label>
                <Input
                  type="number"
                  placeholder="z.B. 30"
                  value={data.workstations}
                  onChange={(e) => setData({ ...data, workstations: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Branche</label>
              <Select onValueChange={(value) => setData({ ...data, industry: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Bitte wählen Sie Ihre Branche" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Aktuelle IT-Services</h2>
              <p className="text-muted-foreground">Welche IT-Services nutzen Sie bereits?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-secondary/50">
                    <Checkbox
                      id={`current-${service.id}`}
                      checked={data.currentServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id, 'current')}
                    />
                    <Icon className="w-5 h-5 text-primary" />
                    <label
                      htmlFor={`current-${service.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {service.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Benötigte IT-Services</h2>
              <p className="text-muted-foreground">Welche IT-Services benötigen Sie?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-secondary/50">
                    <Checkbox
                      id={`needed-${service.id}`}
                      checked={data.neededServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id, 'needed')}
                    />
                    <Icon className="w-5 h-5 text-primary" />
                    <label
                      htmlFor={`needed-${service.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {service.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Budget & Zeitplan</h2>
              <p className="text-muted-foreground">Geben Sie uns Ihr Budget und Ihren gewünschten Zeitplan an</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Monatliches IT-Budget</label>
                <Select onValueChange={(value) => setData({ ...data, budget: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1000">Unter CHF 1'000</SelectItem>
                    <SelectItem value="1000-5000">CHF 1'000 - 5'000</SelectItem>
                    <SelectItem value="5000-10000">CHF 5'000 - 10'000</SelectItem>
                    <SelectItem value="10000-25000">CHF 10'000 - 25'000</SelectItem>
                    <SelectItem value="over-25000">Über CHF 25'000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Gewünschter Startzeitpunkt</label>
                <Select onValueChange={(value) => setData({ ...data, timeline: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Zeitplan auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">So schnell wie möglich</SelectItem>
                    <SelectItem value="1-month">Innerhalb 1 Monat</SelectItem>
                    <SelectItem value="3-months">Innerhalb 3 Monate</SelectItem>
                    <SelectItem value="6-months">Innerhalb 6 Monate</SelectItem>
                    <SelectItem value="planning">Nur Planung</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Kontaktinformationen</h2>
              <p className="text-muted-foreground">Damit wir Ihnen ein individuelles Angebot erstellen können</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Firmenname *</label>
                <Input
                  placeholder="Ihr Firmenname"
                  value={data.companyName}
                  onChange={(e) => setData({ ...data, companyName: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Ansprechperson *</label>
                <Input
                  placeholder="Ihr Name"
                  value={data.contactName}
                  onChange={(e) => setData({ ...data, contactName: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail *</label>
                  <Input
                    type="email"
                    placeholder="ihre.email@firma.ch"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <Input
                    type="tel"
                    placeholder="+41 XX XXX XX XX"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Zusammenfassung</h2>
              <p className="text-muted-foreground">Überprüfen Sie Ihre Angaben vor dem Absenden</p>
            </div>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Unternehmen</h4>
                    <p className="text-sm text-muted-foreground">{data.companyName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Branche</h4>
                    <p className="text-sm text-muted-foreground">{data.industry}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Mitarbeiter</h4>
                    <p className="text-sm text-muted-foreground">{data.employees}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Arbeitsplätze</h4>
                    <p className="text-sm text-muted-foreground">{data.workstations}</p>
                  </div>
                </div>
                
                {data.neededServices.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Benötigte Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.neededServices.map((serviceId) => {
                        const service = services.find(s => s.id === serviceId);
                        return service ? (
                          <span key={serviceId} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            {service.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Budget</h4>
                    <p className="text-sm text-muted-foreground">{data.budget}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Zeitplan</h4>
                    <p className="text-sm text-muted-foreground">{data.timeline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT Kostenrechner
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Definieren Sie Ihre IT-Anforderungen für ein massgeschneidertes Angebot.
              Digitale Transformation für Schweizer Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-2">
                  {Array.from({ length: totalSteps }, (_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        i + 1 <= currentStep
                          ? 'gradient-hero text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="gradient-hero h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Calculator Form */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Schritt {currentStep} von {totalSteps}</CardTitle>
              </CardHeader>
              <CardContent className="min-h-96">
                {renderStep()}
              </CardContent>
              
              {/* Navigation */}
              <div className="p-6 border-t flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Zurück
                </Button>
                
                {currentStep === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    className="gradient-primary text-white shadow-glow flex items-center"
                    disabled={!data.companyName || !data.contactName || !data.email}
                  >
                    Angebot anfordern
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="gradient-primary text-white shadow-glow flex items-center"
                  >
                    Weiter
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Warum unseren Kostenrechner nutzen?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center animate-scale-in">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Individuell</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Massgeschneiderte Lösungen basierend auf Ihren spezifischen Anforderungen
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Keine versteckten Kosten - transparente Preisgestaltung für alle Services
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Kompetent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Über 15 Jahre Erfahrung in der IT-Beratung für Schweizer Unternehmen
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITCalculatorPage;