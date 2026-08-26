const Review = ({ review }) => {
  const { name, role, avatar, rating, comment, product } = review;

  return (
    <div className="relative group bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between">
      
      {/* Background Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Top Header: Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="rating rating-xs gap-1">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                className={`mask mask-star-2 ${
                  i < rating ? 'bg-amber-400' : 'bg-slate-700'
                }`}
                readOnly
                checked={i < rating}
              />
            ))}
          </div>
          {/* Decorative Quote Icon */}
          <span className="text-3xl text-purple-500/30 font-serif leading-none select-none">
            “
          </span>
        </div>

        {/* Product Tag */}
        {product && (
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
            {product}
          </span>
        )}

        {/* Review Comment */}
        <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
          "{comment}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full ring-2 ring-purple-500/40 p-[1px]">
            <img 
              src={avatar} 
              alt={name} 
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-100 text-sm leading-tight">
            {name}
          </h4>
          <span className="text-[11px] text-purple-400/90 font-medium">
            {role}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Review;