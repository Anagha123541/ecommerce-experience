import React from "react";

const NewsletterSection = () => {
  return (
    <div style={styles.container}>
      <h2>Subscribe to our Newsletter</h2>
      <p>Get latest updates and offers</p>

      <div>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
        />
        <button style={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    background: "#111",
    color: "white",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    background: "blue",
    color: "white",
    border: "none",
  },
};

export default NewsletterSection;