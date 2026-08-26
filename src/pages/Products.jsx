import React, { useState } from "react";

const allProducts = [
  // Smartphones
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
    price: 154999,
    category: "Smartphones",
    tag: "Best Seller",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 142999,
    category: "Smartphones",
    tag: "Hot",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    price: 98500,
    category: "Smartphones",
    tag: "Top Rated",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Xiaomi 14 Ultra 5G",
    price: 119999,
    category: "Smartphones",
    tag: "New Arrival",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  },

  // Audio Equipment
  {
    id: 5,
    name: "Sony WH-1000XM5 ANC Wireless Headphones",
    price: 36500,
    category: "Audio Equipment",
    tag: "Best Seller",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Apple AirPods Pro (2nd Gen)",
    price: 26999,
    category: "Audio Equipment",
    tag: "Popular",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "JBL Charge 5 Portable Bluetooth Speaker",
    price: 16500,
    category: "Audio Equipment",
    tag: "Hot",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Sennheiser HD 560S Audiophile Headphones",
    price: 21500,
    category: "Audio Equipment",
    tag: "Studio Grade",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
  },

  // Wearables
  {
    id: 9,
    name: "Apple Watch Series 9 GPS",
    price: 49500,
    category: "Wearables",
    tag: "Best Seller",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 6 Classic",
    price: 34999,
    category: "Wearables",
    tag: "Popular",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
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

  // Power & Cables
  {
    id: 15,
    name: "Anker 737 Power Bank (PowerCore 24K)",
    price: 14500,
    category: "Power & Cables",
    tag: "Top Rated",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1609592424009-5407fa7422f6?auto=format&fit=crop&w=600&q=80",
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

const categories = [
  "All Products",
  "Smartphones",
  "Audio Equipment",
  "Wearables",
  "Accessories",
  "Power & Cables",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [maxPrice, setMaxPrice] = useState(160000);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  // Filter Logic
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 px-4 md:px-12">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-base-200">
        <div>
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
            AuraTech Store
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-1">
            Explore All Tech & Gadgets
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Authentic flagship phones, audiophile gear, and premium workspace setup accessories.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search gadgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-200 focus:outline-none transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setShowFilterMobile(!showFilterMobile)}
        className="lg:hidden w-full mb-6 flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 py-3 rounded-xl font-medium text-sm"
      >
        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        {showFilterMobile ? "Hide Filters" : "Filter & Categories"}
      </button>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`${showFilterMobile ? "block" : "hidden"
            } lg:block bg-slate-900/80 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl h-fit space-y-6 sticky top-24 z-10`}
        >
          <div>
            <h3 className="text-slate-100 font-bold text-sm tracking-wide uppercase mb-4 border-b border-slate-800 pb-2">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${selectedCategory === cat
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-slate-100 font-bold text-sm tracking-wide uppercase">
                Filter by Price
              </h3>
              <span className="text-xs text-indigo-400 font-mono font-bold">
                Up to ৳{maxPrice.toLocaleString("en-BD")}
              </span>
            </div>
            <input
              type="range"
              min="3000"
              max="160000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
              <span>৳3,000</span>
              <span>৳160,000</span>
            </div>
          </div>
        </aside>

        {/* Product Cards Grid */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-slate-300">No Gadgets Found</h3>
              <p className="text-slate-500 text-sm mt-2">
                Try adjusting your category filter or search terms.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 p-4 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative w-full h-52 bg-slate-950 rounded-xl overflow-hidden mb-4 border border-slate-800/50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-bold bg-indigo-600/90 text-white px-2.5 py-1 rounded-md backdrop-blur-md shadow-lg">
                        {product.tag}
                      </span>
                      <span className="absolute top-3 right-3 text-[11px] font-bold bg-slate-950/80 text-amber-400 px-2 py-0.5 rounded-md backdrop-blur-md border border-slate-800 flex items-center gap-1">
                        ★ {product.rating}
                      </span>
                    </div>

                    {/* Product Metadata */}
                    <span className="text-[11px] font-semibold text-indigo-400 tracking-wider uppercase">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-100 mt-1 line-clamp-2 leading-snug group-hover:text-indigo-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-slate-500 block font-mono">Price</span>
                      <span className="text-lg font-black text-slate-100 font-mono">
                        ৳{product.price.toLocaleString("en-BD")}
                      </span>
                    </div>
                    <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold rounded-xl text-xs transition-all shadow-md shadow-indigo-600/20">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;