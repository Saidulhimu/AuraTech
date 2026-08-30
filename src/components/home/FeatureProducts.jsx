import ProductCard from '../ProductCard';

const productsData = [
    {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 142999,
    category: "Smartphones",
    tag: "Hot",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Amazfit GTR 4 Smart Fitness Watch",
    price: 18500,
    category: "Wearables",
    tag: "Value Choice",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Logitech Master 3S Wireless Mouse",
    price: 3200,
    category: "Accessories",
    tag: "Pro Choice",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 13,
    name: "Keychron K2 Mechanical Keyboard",
    price: 12500,
    category: "Accessories",
    tag: "Best Seller",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Generic 2.4G Wireless Optical Mouse",
    price: 3450,
    category: "Accessories",
    tag: "Popular",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 16,
    name: "Baseus 100W GaN Fast Wall Charger",
    price: 4200,
    category: "Power & Cables",
    tag: "Hot",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
  },

];

const FeatureProducts = () => {
  return (
    <section className="w-full my-16 max-w-[1440px] px-6 md:px-12 mx-auto">
      {/* Header Section */}

      <div className="text-center max-w-2xl mx-auto mb-12">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-3">
          Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Products</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
          Explore our top-tier devices curated for seamless productivity and premium build quality.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;