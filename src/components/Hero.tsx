import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Buy & Sell Anything
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          Discover amazing deals on new and used items from people in your community
        </p>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="pl-12 pr-4 h-14 text-lg bg-card text-foreground shadow-hover"
            />
            <Button className="absolute right-2 top-2 h-10">
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="text-lg px-8">
            Start Shopping
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card">
            Start Selling
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;