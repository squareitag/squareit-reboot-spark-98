import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, MessageCircle, Share, Linkedin } from "lucide-react";

// Mock LinkedIn posts data - replace with actual LinkedIn API integration
const linkedInPosts = [
  {
    id: 1,
    author: "Square IT AG",
    authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
    content: "🚀 Excited to announce our latest Microsoft 365 migration project! We've successfully helped another client transition to the cloud, improving their productivity by 40%. #Microsoft365 #DigitalTransformation #SquareIT",
    image: null,
    likes: 24,
    comments: 8,
    shares: 3,
    timestamp: "2 Tage",
    postUrl: "#"
  },
  {
    id: 2,
    author: "Square IT AG",
    authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
    content: "💡 Cybersecurity Tip: Regular security audits are crucial for maintaining a robust defense against evolving threats. Our team conducts comprehensive security analyses to identify vulnerabilities before they become problems. Stay safe! 🛡️ #Cybersecurity #ITSecurity",
    image: null,
    likes: 31,
    comments: 12,
    shares: 7,
    timestamp: "1 Woche",
    postUrl: "#"
  },
  {
    id: 3,
    author: "Square IT AG", 
    authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
    content: "🌟 Proud to be Microsoft Partner! Our Azure migration services are helping businesses scale efficiently while reducing costs. Cloud adoption is not just a trend - it's the future of business operations. #Azure #CloudMigration #Microsoft",
    image: null,
    likes: 45,
    comments: 15,
    shares: 12,
    timestamp: "2 Wochen",
    postUrl: "#"
  }
];

export default function LinkedInPosts() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Linkedin className="w-8 h-8 text-[#0077B5]" />
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              LinkedIn Updates
            </p>
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
                <p className="text-muted-foreground leading-relaxed mb-4">
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