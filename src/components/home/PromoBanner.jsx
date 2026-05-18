import React from "react";

const PromoBanner = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.banner}>
        
        <div style={styles.left}>
          <p style={styles.tag}>Limited Time Offer</p>

          <h2 style={styles.heading}>
            Up to 40% off on selected bestsellers.
          </h2>

          <p style={styles.text}>
            Unlock exciting deals across electronics, home decor,
            and fashion.
          </p>

          <button style={styles.button}>Shop Deals</button>
        </div>

      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "40px 60px",
  },

  banner: {
    background: "linear-gradient(90deg,#1e3c72,#8e2de2)",
    borderRadius: "24px",
    padding: "40px",
    minHeight: "220px",
    display: "flex",
    alignItems: "center",
  },

  left: {
    maxWidth: "500px",
  },

  tag: {
    color: "#ddd",
    marginBottom: "10px",
  },

  heading: {
    fontSize: "42px",
    marginBottom: "20px",
    color: "white",
  },

  text: {
    color: "#ddd",
    marginBottom: "20px",
    lineHeight: "1.6",
  },

  button: {
    background: "#111827",
    color: "white",
    border: "none",
    padding: "14px 24px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default PromoBanner;