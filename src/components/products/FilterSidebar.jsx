const FilterSidebar = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl w-[250px]">
      
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold">Filters</h3>
        <button className="text-blue-600 text-sm">Clear All</button>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Category</p>
        <div className="space-y-1 text-sm">
          <p>All Categories</p>
          <p>Electronics</p>
          <p>Clothing</p>
          <p>Home & Living</p>
          <p>Beauty</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Max Price: $400</p>
        <input type="range" className="w-full" />
      </div>

      <div>
        <p className="font-medium mb-2">Minimum Rating</p>
        <select className="w-full border p-1 rounded">
          <option>All Ratings</option>
        </select>
      </div>

    </div>
  );
};

export default FilterSidebar;