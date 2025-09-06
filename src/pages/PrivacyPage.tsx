import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, FileText } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const PrivacyPage = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Datenerhebung",
      content: `Wir erheben nur die Daten, die für die Erbringung unserer Dienstleistungen erforderlich sind. 
      Dazu gehören Kontaktdaten, technische Informationen zu Ihrer IT-Infrastruktur und Nutzungsdaten unserer Services.`
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Datensicherheit",
      content: `Ihre Daten werden mit modernsten Sicherheitsstandards geschützt. Wir verwenden Verschlüsselung, 
      sichere Übertragungsprotokolle und regelmäßige Sicherheitsaudits, um den Schutz Ihrer Informationen zu gewährleisten.`
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Datenverwendung",
      content: `Wir verwenden Ihre Daten ausschließlich zur Erbringung und Verbesserung unserer IT-Services. 
      Eine Weitergabe an Dritte erfolgt nur mit Ihrer Einwilligung oder wenn dies gesetzlich vorgeschrieben ist.`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ihre Rechte",
      content: `Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Portabilität Ihrer Daten. 
      Kontaktieren Sie uns jederzeit, um Ihre Rechte auszuüben oder Fragen zum Datenschutz zu stellen.`
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Datenschutz & Sicherheit | Square IT"
        description="Datenschutzerklärung von Square IT: Transparente Verfahren, DSGVO-konforme Datenverarbeitung und Schutz Ihrer persönlichen Informationen."
        keywords="Datenschutzerklärung, Datenschutz, DSGVO, Datensicherheit, Privacy Policy"
        canonical="https://www.squareit.ch/privacy"
      />
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Datenschutz
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Der Schutz Ihrer Daten ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren 
              persönlichen Informationen umgehen und welche Rechte Sie haben.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center text-white">
                      {section.icon}
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Policy */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Detaillierte Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-4">1. Verantwortlicher</h3>
                <p className="mb-6">
                  Square IT AG<br />
                  Alpenstrasse 12<br />
                  6300 Zug<br />
                  Schweiz<br />
                  E-Mail: hello@squareit.ch<br />
                  Telefon: +41 41 560 21 00
                </p>

                <h3 className="text-xl font-semibold mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
                <p className="mb-6">
                  Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die Erbringung 
                  unserer IT-Dienstleistungen erforderlich ist oder Sie uns Ihre Einwilligung erteilt haben. 
                  Zu den verarbeiteten Daten gehören insbesondere:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Kontaktdaten (Name, E-Mail, Telefon, Adresse)</li>
                  <li>Unternehmensdaten und IT-Infrastruktur-Informationen</li>
                  <li>Nutzungsdaten unserer Services und Support-Systeme</li>
                  <li>Kommunikationsdaten aus E-Mails und Support-Tickets</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">3. Zweck der Datenverarbeitung</h3>
                <p className="mb-6">
                  Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Erbringung und Abrechnung unserer IT-Services</li>
                  <li>Technischer Support und Kundenbetreuung</li>
                  <li>Verbesserung unserer Dienstleistungen</li>
                  <li>Einhaltung gesetzlicher Verpflichtungen</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">4. Datensicherheit</h3>
                <p className="mb-6">
                  Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz 
                  Ihrer Daten vor unberechtigtem Zugriff, Verlust oder Missbrauch. Dazu gehören:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Verschlüsselung sensibler Daten</li>
                  <li>Sichere Übertragungsprotokolle (HTTPS/TLS)</li>
                  <li>Regelmäßige Sicherheitsaudits und Updates</li>
                  <li>Zugriffsbeschränkungen und Benutzerrechte-Management</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">5. Ihre Rechte</h3>
                <p className="mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Recht auf Auskunft über die verarbeiteten Daten</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung Ihrer Daten</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Datenportabilität</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">6. Kontakt</h3>
                <p className="mb-6">
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:
                  <br />
                  E-Mail: hello@squareit.ch<br />
                  Telefon: +41 41 560 21 00
                </p>

                <h3 className="text-xl font-semibold mb-4">7. Änderungen</h3>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte 
                  Rechtslage oder bei Änderungen unserer Services anzupassen. Die aktuelle Version 
                  finden Sie stets auf unserer Website.
                </p>

                <p className="mt-8 text-sm text-muted-foreground">
                  Stand: Dezember 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
