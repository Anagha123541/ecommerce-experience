const ProductHero = ({ count }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      
      <div>
        <h2 className="text-xl font-semibold">All Products</h2>
        <p className="text-gray-500 text-sm">
          Showing {count} products
        </p>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 rounded w-60"
        />

        <select className="border px-3 py-2 rounded">
          <option>Sort: Default</option>
        </select>
      </div>

    </div>
  );
};

export default ProductHero;