const ProductCard = ({ product }) => {

  const {
    id,
    name,
    title, 
    category = 'Tech',
    price = 0,
    image = 'https://via.placeholder.com/300',
    rating = '5.0',
    tag,
  } = product || {};

  const displayTitle = name || title || 'Gadget Item';

  return (
    <div className="group bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between">

      {/* Image Container */}
      <div className="relative overflow-hidden bg-slate-950/60 h-56 flex items-center justify-center p-4 border-b border-slate-800/50">
        <img
          src={image}
          alt={displayTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="bg-slate-900/80 backdrop-blur-md text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-700/60 shadow-sm">
            {category}
          </span>
          {tag && (
            <span className="bg-indigo-500/20 text-indigo-300 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded-md border border-indigo-500/30">
              {tag}
            </span>
          )}
        </div>

        {/* Rating Tag */}
        <span className="absolute top-3 right-3 bg-slate-900/90 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-slate-800">
          ★ {rating}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-base text-slate-100 line-clamp-1 group-hover:text-indigo-400 transition-colors text-left" title={displayTitle}>
            {displayTitle}
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 text-left leading-relaxed">
            High quality audio & tech experience with active performance.
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-slate-800">
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Price</span>
            <span className="text-lg font-black text-indigo-400">
              ৳{price.toLocaleString()}
            </span>
          </div>

          <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold rounded-xl text-xs transition-all shadow-md shadow-indigo-600/20">
            Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;