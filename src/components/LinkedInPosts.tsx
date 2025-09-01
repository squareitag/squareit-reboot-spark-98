import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, MessageCircle, Share, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.png";

interface LinkedInPost {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  postUrl: string;
}

const STORAGE_KEY = 'linkedin-posts';

// Default posts with more realistic Square IT content
const defaultPosts: LinkedInPost[] = [
  {
    id: "1",
    author: "Square IT AG",
    authorImage: logoImage,
    content: "🎯 Successful Azure Migration completed! \n\nWir haben erfolgreich ein mittelständisches Unternehmen bei der vollständigen Migration ihrer lokalen Infrastruktur zu Microsoft Azure unterstützt. Das Ergebnis: 60% Kosteneinsparung und 99.9% Verfügbarkeit.\n\nUnser Team hat dabei folgende Services implementiert:\n✅ Azure Virtual Machines\n✅ Azure SQL Database\n✅ Azure Active Directory\n✅ Backup & Disaster Recovery\n\n#Azure #CloudMigration #DigitalTransformation #SquareIT",
    likes: 42,
    comments: 15,
    shares: 8,
    timestamp: "3 Tage",
    postUrl: "https://www.linkedin.com/company/square-it-ag"
  },
  {
    id: "2",
    author: "Square IT AG",
    authorImage: logoImage,
    content: "🔒 Cybersecurity Update: Zero Trust Architektur\n\nIn der heutigen Bedrohungslandschaft reicht der traditionelle Perimeterschutz nicht mehr aus. Zero Trust ist die Antwort!\n\nUnsere Sicherheitsexperten implementieren:\n🛡️ Multi-Faktor-Authentifizierung\n🛡️ Conditional Access Policies\n🛡️ Endpoint Detection & Response\n🛡️ Kontinuierliche Überwachung\n\nSchützen Sie Ihr Unternehmen vor modernen Cyberbedrohungen.\n\n#Cybersecurity #ZeroTrust #Microsoft365 #ITSecurity #SquareIT",
    likes: 38,
    comments: 22,
    shares: 11,
    timestamp: "1 Woche",
    postUrl: "https://www.linkedin.com/company/square-it-ag"
  },
  {
    id: "3",
    author: "Square IT AG",
    authorImage: logoImage,
    content: "📞 Microsoft Teams Telefonie - Der moderne Arbeitsplatz\n\nSie nutzen bereits Microsoft Teams für Meetings und Chat? Warum nicht auch für Ihre Telefonie?\n\nVorteile von Teams Phone:\n📱 Ein Tool für alle Kommunikationsbedürfnisse\n📱 Nahtlose Integration in bestehende Workflows\n📱 Kostenoptimierung durch unified communications\n📱 Flexibles Arbeiten von überall\n\nWir unterstützen Sie bei der Implementierung und Migration Ihrer bestehenden Telefonanlage zu Teams Phone.\n\n#TeamsPhone #Microsoft365 #UnifiedCommunications #ModernWorkplace #SquareIT",
    likes: 29,
    comments: 8,
    shares: 5,
    timestamp: "2 Wochen",
    postUrl: "https://www.linkedin.com/company/square-it-ag"
  }
];

export default function LinkedInPosts() {
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>(defaultPosts);

  // Load posts from localStorage with SSR safety
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedPosts = localStorage.getItem(STORAGE_KEY);
        if (savedPosts) {
          setLinkedInPosts(JSON.parse(savedPosts));
        } else {
          // Save default posts to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
        }
      } catch (error) {
        console.warn('Failed to load LinkedIn posts from localStorage:', error);
        setLinkedInPosts(defaultPosts);
      }
    }
  }, []);
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Linkedin className="w-8 h-8 text-[#0077B5]" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              LinkedIn Updates
            </p>
            {/* Admin link temporarily disabled for remix */}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Neueste Beiträge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bleiben Sie über unsere neuesten Projekte, Erkenntnisse und Branchennews auf dem Laufenden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {linkedInPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="hover:shadow-elegant transition-all duration-300 bg-background/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-contain bg-white p-1"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{post.author}</h3>
                    <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                  </div>
                  <Linkedin className="w-5 h-5 text-[#0077B5]" />
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                  {post.content}
                </p>
                
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full rounded-lg mb-4 object-cover"
                  />
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-[#0077B5] hover:text-[#0077B5]/80 hover:bg-[#0077B5]/10"
                    asChild
                  >
                    <a 
                      href={post.postUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-xs">Ansehen</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
            asChild
          >
            <a 
              href="https://www.linkedin.com/company/square-it-ag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Folgen Sie uns auf LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}