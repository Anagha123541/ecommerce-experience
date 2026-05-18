import React from "react";

const DumbComponent = ({ user }) => {
  if (!user) return null; 

  return (
    <div
      style={{
        color: "red",
        padding: "10px",
      }}
    >
      From dumb component: {user.name}
    </div>
  );
};

export default DumbComponent;