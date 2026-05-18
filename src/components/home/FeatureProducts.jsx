import React from "react";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: "$299",
    oldPrice: "$349",
    rating: "4.5",
    stock: "12 in stock",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    category: "Electronics",
    price: "$199",
    oldPrice: "$249",
    rating: "4.2",
    stock: "8 in stock",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    title: "Classic Cotton T-Shirt",
    category: "Clothing",
    price: "$29",
    oldPrice: "$39",
    rating: "4.8",
    stock: "25 in stock",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 4,
    title: "Minimal Table Lamp",
    category: "Home",
    price: "$59",
    oldPrice: "$79",
    rating: "4.4",
    stock: "18 in stock",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
];

function FeatureProducts() {
  return (
    <section className="feature-products">
      <div className="section-header">
        <div>
          <span className="badge">Best Picks</span>
          <h2>Featured Products</h2>
          <p>
            Browse top-rated products selected to give your storefront a premium
            and trustworthy feel.
          </p>
        </div>

        <button className="view-btn">View All Products</button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <div className="product-info">
              <p className="category">{product.category}</p>

              <h3>{product.title}</h3>

              <div className="rating">
                ⭐ {product.rating} • {product.stock}
              </div>

              <div className="price-box">
                <span className="price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>

              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureProducts;