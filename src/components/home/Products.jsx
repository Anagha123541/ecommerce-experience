import { useState } from "react";
import ProductHero from "./products/ProductHero";
import ProductGrid from "./products/ProductGrid";
import FilterSidebar from "./products/FilterSidebar";

const dummyProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 299,
    oldPrice: 349,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Electronics",
    price: 199,
    oldPrice: 249,
    image: "https://via.placeholder.com/300",
  },
];

const Products = () => {
  const [products, setProducts] = useState(dummyProducts);

  return (
    <div>
      
      {/* HERO */}
      <ProductHero count={products.length} />

      {/* MAIN */}
      <div className="flex gap-6 px-6">
        
        <FilterSidebar />

        <div className="flex-1">
          <ProductGrid products={products} />
        </div>

      </div>

    </div>
  );
};

export default Products;