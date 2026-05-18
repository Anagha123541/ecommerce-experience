import React, { memo } from "react";

const ChildA = ({ Learning }) => {
  console.log("Child A rendered");
  return <div>Child Component</div>;
};

export default memo(ChildA);