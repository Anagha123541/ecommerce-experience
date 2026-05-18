import React from "react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: "$299",
  },
  {
    id: 2,
    title: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: "$199",
  },
  {
    id: 3,
    title: "Classic T-Shirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    price: "$29",
  },
  {
    id: 4,
    title: "Minimal Lamp",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: "$59",
  },
];

function FeatureProducts() {
  return (
    <section className="feature-products">

      <p>Featured Products</p>

      <h2>Explore our latest products</h2>

      <p>
        Discover premium quality products curated
        for your modern lifestyle.
      </p>

      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>{product.price}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeatureProducts;