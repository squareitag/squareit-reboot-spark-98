import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, image, href, icon }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden bg-card border-border hover:border-primary/20">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-2">
          {icon && <div className="text-primary">{icon}</div>}
          <CardTitle className="group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="mb-6 line-clamp-3">
          {description}
        </CardDescription>
        <Button variant="outline" className="group/btn" asChild>
          <Link to={href}>
            Mehr erfahren
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;