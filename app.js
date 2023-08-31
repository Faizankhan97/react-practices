const heading = React.createElement("div", { className: "head" }, [
  React.createElement("h1", {}, "Hello World"),
  React.createElement("h2", {}, "Hello World"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
