import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello World");
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div className="user-card">
      <h2>Name:  {name} {count}</h2>
      <h3>Location: Karachi</h3>
      <h4>Contact: @faizikhan</h4>
    </div>
  );
};

export default User;
