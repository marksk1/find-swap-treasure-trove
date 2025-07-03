import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Item {
  id: string;
  title: string;
  price: number;
  location: string;
  condition: string;
  profiles: {
    display_name: string;
  };
  categories: {
    name: string;
  };
}

const FeaturedItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedItems();
  }, []);

  const fetchFeaturedItems = async () => {
    try {
      const { data, error } = await supabase
        .from('items')
        .select(`
          *,
          profiles!items_seller_id_fkey(display_name),
          categories(name)
        `)
        .eq('is_available', true)
        .order('created_at', { ascending: false })
        .limit(8);

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching featured items:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading featured items...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover amazing deals from our community
          </p>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center">
            <p className="text-muted-foreground mb-4">No items available yet.</p>
            <p className="text-sm text-muted-foreground">Be the first to list an item!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
                  condition={item.condition as "new" | "like-new" | "good" | "fair"}
                  location={item.location}
                  seller={item.profiles?.display_name}
                  category={item.categories?.name}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/items">
                <Button variant="default" size="lg">
                  View All Items
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedItems;