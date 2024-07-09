import React, { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0)
  return (
    <div className="user-card">
      <h2>Name:  {name} {count}</h2>
      <h3>Location: Karachi</h3>
      <h4>Contact: @faizikhan</h4>
    </div>
  );
};

export default User;
