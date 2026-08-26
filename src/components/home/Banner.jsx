
const Banner = () => {
  return (
    <div
      className="relative w-full min-h-[85vh] flex items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('/heroBanner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

      <div className="relative z-10 max-w-2xl px-6 sm:px-12 md:px-16 text-right text-white">
        
        <div className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-purple-300 bg-purple-950/60 border border-purple-500/40 rounded-full uppercase shadow-lg backdrop-blur-md">
          ⚡ Next-Gen Tech & Accessories
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
          Upgrade Your Tech Life with{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            AuraTech
          </span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed mb-8">
          Discover cutting-edge gadgets, premium smart accessories, and essential gear designed to elevate your daily workflow and lifestyle.
        </p>


        <div className="flex flex-wrap items-center justify-end gap-4">
          <button className="px-7 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/40 cursor-pointer">
            Explore Products
          </button>
          <button className="px-7 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 active:scale-95 transition-all backdrop-blur-md cursor-pointer">
            Special Offers
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;