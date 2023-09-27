Episode 01 Inception

Theory

Q. What is Emmet?
A.	Emmet is used for HTML and CSS faster by using simple abbreviations that are converted into block code.

Q. difference between a Library and a Framework?
A.	A library is a group of pre-written codes and a framework’s code does not contain completed functions.

Q. What is CDN? Why do we use it?
A.	CDN is used for setting the access control.

Q. Why is React Known as React?
A.	React is a Javascript Library and it’s used for Frontend to make Websites.

Q. What is cross-origin in the script tag?
A.	The cross-origin is an attribute that provides the element to handle the request for the data.

Q. What is the difference between React and ReactDOM?
A.	React is used for creating views and ReactDOM is to render UI in the browser.

Q. What is the difference between react.development.js and react.production.js files via CDN?
A.	React.development.js is used to utilize React developer tools, utilize various functionalities such as Hot Module Replacement (HMR), and react.production.js is used for compression and minification of Javascript.








Coding

const heading = React.createElement("div", { className: "head" }, [
  React.createElement("h1", {}, "Hello World"),
  React.createElement("h2", {}, "Hello World"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

<script crossoriginsrc="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script crossoriginsrc="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>


