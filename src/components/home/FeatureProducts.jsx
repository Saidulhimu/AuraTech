import ProductCard from '../ProductCard';

const productsData = [
  {
    id: 1,
    title: 'Wireless Noise Canceling Headphones',
    category: 'Accessories',
    price: '$299',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Smart Watch Series 8', // support both title/name if needed
    title: 'Smart Watch Series 8 Ultra',
    category: 'Wearables',
    price: '$399',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Mechanical RGB Gaming Keyboard',
    category: 'Accessories',
    price: '$149',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Ergonomic Wireless Gaming Mouse',
    category: 'Peripherals',
    price: '$89',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop',
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