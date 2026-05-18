import { Link } from "react-router-dom";
import products from "../data/products.json";

const Products = () => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />

          <h2>{product.title}</h2>
          <p>₹{product.price}</p>

          <Link to={`/products/${product.id} `}>
            <button style={styles.btn}>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
  btn: {
    marginTop: "10px",
    padding: "8px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Products;