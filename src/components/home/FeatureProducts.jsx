import ProductCard from '../ProductCard';

const productsData = [
  {
    id: 11,
    name: "Amazfit GTR 4 Smart Fitness Watch",
    price: 18500,
    category: "Wearables",
    tag: "Value Choice",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
  },

  // Accessories
  {
    id: 12,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 11200,
    category: "Accessories",
    tag: "Pro Choice",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "Keychron K2 V2 Wireless Mechanical Keyboard",
    price: 9800,
    category: "Accessories",
    tag: "Best Seller",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Aluminum Ergonomic Laptop Stand",
    price: 3450,
    category: "Accessories",
    tag: "Popular",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
  },


];

const FeatureProducts = () => {
  return (
    <div className="w-full text-center my-10 max-w-[1440px] px-6 md:px-12 mx-auto">
      {/* Title */}
      <div className="my-10 px-4">
        <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
          Featured Products
        </h2>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;