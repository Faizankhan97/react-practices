import React from "react";
import ReactDOM from "react-dom/client";

// React
const heading = React.createElement("div", { className: "head" }, [
  React.createElement("h1", {}, "Hello World"),
  React.createElement("h2", {}, "Hello World"),
]);

// React Element
const jsxHeading = <h1>Hello JSX Element Heading</h1>;

// React Functional Compoenet
const JsxTitle = () => <h2 className="heading">Hello JSX Title Component</h2>;

const JsxHeading = () => {
  return (
    <div>
      {jsxHeading}
      {JsxTitle()}
      <h3 className="heading">Hello JSX Heading Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);
