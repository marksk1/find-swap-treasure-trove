import { 
  Smartphone, 
  Car, 
  Home, 
  Shirt, 
  Book, 
  Gamepad2, 
  Music, 
  Dumbbell 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: Smartphone, count: "2,341" },
  { name: "Vehicles", icon: Car, count: "856" },
  { name: "Home & Garden", icon: Home, count: "1,892" },
  { name: "Fashion", icon: Shirt, count: "3,247" },
  { name: "Books", icon: Book, count: "967" },
  { name: "Gaming", icon: Gamepad2, count: "1,234" },
  { name: "Music", icon: Music, count: "578" },
  { name: "Sports", icon: Dumbbell, count: "734" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:shadow-hover transition-all duration-300 bg-card"
              >
                <Icon className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <div className="font-medium text-foreground">{category.name}</div>
                  <div className="text-sm text-muted-foreground">{category.count} items</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;