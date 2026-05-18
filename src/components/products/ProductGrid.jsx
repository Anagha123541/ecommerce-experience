const ProductGrid = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>⭐ {item.rating}</p>
          <p>{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};