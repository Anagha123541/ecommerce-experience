import React from "react";

const PromoBanner = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.banner}></div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "20px",
  },
  banner: {
    height: "80px",
    borderRadius: "16px",
    background: "linear-gradient(90deg, #1e3c72, #8e2de2)",
  },
};

export default PromoBanner;