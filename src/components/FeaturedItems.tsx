import ItemCard from "./ItemCard";

// Mock data for featured items
const featuredItems = [
  {
    id: "1",
    title: "iPhone 15 Pro Max - Unlocked, Excellent Condition",
    price: 899,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    condition: "like-new" as const,
    location: "San Francisco, CA",
    isLiked: false,
  },
  {
    id: "2",
    title: "Vintage Leather Sofa - Mid Century Modern",
    price: 1200,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    condition: "good" as const,
    location: "Austin, TX",
    isLiked: true,
  },
  {
    id: "3",
    title: "MacBook Air M2 - 13 inch, Space Gray",
    price: 950,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    condition: "like-new" as const,
    location: "Seattle, WA",
    isLiked: false,
  },
  {
    id: "4",
    title: "Canon EOS R5 Camera with 24-70mm Lens",
    price: 2800,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    condition: "new" as const,
    location: "New York, NY",
    isLiked: false,
  },
  {
    id: "5",
    title: "Designer Road Bike - Carbon Frame, Shimano",
    price: 1650,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    condition: "good" as const,
    location: "Portland, OR",
    isLiked: true,
  },
  {
    id: "6",
    title: "KitchenAid Stand Mixer - Professional Series",
    price: 425,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    condition: "like-new" as const,
    location: "Chicago, IL",
    isLiked: false,
  },
  {
    id: "7",
    title: "Gaming Chair - Ergonomic, RGB Lighting",
    price: 350,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop",
    condition: "new" as const,
    location: "Denver, CO",
    isLiked: false,
  },
  {
    id: "8",
    title: "Vintage Vinyl Record Collection - 200+ Albums",
    price: 850,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    condition: "good" as const,
    location: "Nashville, TN",
    isLiked: true,
  },
];

const FeaturedItems = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-muted-foreground text-lg">
            Handpicked deals from our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;