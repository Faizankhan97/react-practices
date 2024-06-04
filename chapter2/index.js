import React from 'react'
import ReactDOM  from 'react-dom/client';

const heading = React.createElement(
  "h1",
  {},
  React.createElement("h3", {}, "Hello World form React")
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading);
