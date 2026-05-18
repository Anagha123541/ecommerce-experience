import ProductCard from "./ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "Headphones",
    price: 299,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Watch",
    price: 199,
    image: "https://via.placeholder.com/200",
    category: "Electronics",
    rating: 4.2,
  },
];

const FeatureProducts = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {dummyProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default FeatureProducts;