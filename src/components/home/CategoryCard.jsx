import React from "react";

const CategoryCard = ({ category }) => {
  if (!category) return null; // safety

  return (
    <div className="relative rounded-xl overflow-hidden">

      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold">{category.name}</h3>
        <p className="text-sm">{category.description}</p>
      </div>

    </div>
  );
};

export default CategoryCard;