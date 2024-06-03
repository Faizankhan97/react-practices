const heading = React.createElement(
  "h1",
  {},
  React.createElement("h3", {}, [
    React.createElement("h6", {}, "Hello World form React"),
    React.createElement("h6", {}, "Hello World form React")
  ])
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading);
