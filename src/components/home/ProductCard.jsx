const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
      
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt=""
          className="h-52 w-full object-cover rounded-lg"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
          20% OFF
        </span>
      </div>

      {/* Info */}
      <div className="mt-3">
        <p className="text-gray-400 text-sm">{product.category}</p>

        <h2 className="font-semibold">{product.title}</h2>

        <p className="text-yellow-500 text-sm">⭐ 4.5 • 12 in stock</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-lg">₹{product.price}</span>
          <span className="line-through text-gray-400 text-sm">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Button */}
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;