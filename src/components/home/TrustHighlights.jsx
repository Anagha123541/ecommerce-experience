import React from "react";

const data = [
  { title: "Free Shipping", desc: "On orders above ₹999" },
  { title: "Secure Payment", desc: "100% safe & secure" },
  { title: "Easy Returns", desc: "7 days return policy" },
  { title: "24/7 Support", desc: "Dedicated support" },
];

const TrustHighlights = () => {
  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <div key={index} style={styles.card}>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    background: "#f8f8f8",
  },
  card: {
    textAlign: "center",
  },
};

export default TrustHighlights;