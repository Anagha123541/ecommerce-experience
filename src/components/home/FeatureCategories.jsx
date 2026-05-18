import React from "react";
import categories from "../../data/categories.json";
import CategoryCard from "./CategoryCard";

const FeatureCategories = () => {
  return (
    <div className="py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCategories;