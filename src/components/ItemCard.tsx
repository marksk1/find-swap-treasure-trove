import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ItemCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: "new" | "like-new" | "good" | "fair";
  location: string;
  isLiked?: boolean;
  seller?: string;
  category?: string;
}

const ItemCard = ({ 
  title, 
  price, 
  image, 
  condition, 
  location, 
  isLiked = false,
  seller,
  category
}: ItemCardProps) => {
  const conditionColors = {
    "new": "bg-secondary text-secondary-foreground",
    "like-new": "bg-primary/10 text-primary",
    "good": "bg-accent/10 text-accent-foreground",
    "fair": "bg-muted text-muted-foreground"
  };

  return (
    <div className="bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card ${
            isLiked ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
        </Button>
        <Badge className={`absolute top-2 left-2 ${conditionColors[condition]}`}>
          {condition === "like-new" ? "Like New" : condition.charAt(0).toUpperCase() + condition.slice(1)}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="text-2xl font-bold text-primary mb-2">
          ${price.toLocaleString()}
        </div>
        <div className="space-y-1">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          {seller && (
            <div className="text-xs text-muted-foreground">
              Seller: {seller}
            </div>
          )}
          {category && (
            <div className="text-xs text-muted-foreground">
              {category}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;