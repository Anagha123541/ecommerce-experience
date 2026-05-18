import React, { useEffect, useState } from "react";
import DumbComponent from "./DumbComponent";

const SmartComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users
        .filter((user) => user) 
        .map((user) => (
          <DumbComponent key={user.id} user={user} />
        ))}
    </div>
  );
};

export default SmartComponent;