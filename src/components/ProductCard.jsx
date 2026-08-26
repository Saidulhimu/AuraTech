import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Destructure product data with fallback values
  const {
    title = 'Gadget Item',
    category = 'Tech',
    price = '$0',
    image = 'https://via.placeholder.com/300',
    rating = '5.0',
  } = product || {};

  return (
    <div className="group bg-base-100 border border-base-200 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative overflow-hidden bg-base-200 h-52 flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-base-300/80 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
          {category}
        </span>

        {/* Rating Tag */}
        <span className="absolute top-3 right-3 bg-indigo-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
          ★ {rating}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-lg text-base-content line-clamp-1 group-hover:text-indigo-400 transition-colors text-left">
            {title}
          </h3>
          <p className="text-xs text-base-content/60 mt-1 text-left">
            High quality audio & tech experience with active performance.
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between mt-5 pt-3 border-t border-base-200">
          <div className="text-left">
            <span className="text-xs text-base-content/50 block">Price</span>
            <span className="text-xl font-extrabold text-indigo-400">{price}</span>
          </div>

          <button className="btn btn-primary btn-sm rounded-lg px-4 font-semibold hover:scale-105 transition-transform ">
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;