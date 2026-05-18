import React from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 2,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
  {
    id: 3,
    name: "Home",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 4,
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

function FeatureCategories() {
  return (
    <div style={styles.wrapper}>
      <p style={styles.badge}>Top Categories</p>

      <h1 style={styles.heading}>
        Shop by category
      </h1>

      <p style={styles.text}>
        Explore handpicked collections across the most popular categories.
      </p>

      <div style={styles.grid}>
        {categories.map((item) => (
          <div key={item.id} style={styles.card}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.image}
            />

            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "60px 30px",
    background: "#081120",
    color: "white",
  },

  badge: {
    background: "#dff6ea",
    color: "#1f7a4f",
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "20px",
    marginBottom: "20px",
  },

  heading: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  text: {
    color: "#b8c0cc",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
  },

  card: {
    background: "#101b2d",
    borderRadius: "20px",
    overflow: "hidden",
    paddingBottom: "20px",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
  },
};

export default FeatureCategories;