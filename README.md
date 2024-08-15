npm means calling a command and npx means execution a package

when build the file it will throw an erro of main: "index.js"

If interviewer ask why react application is fast below the list is answered.

JSX is not HTML in javascript

JSX is HTML-Like or XML-like syntax

React.createElement => Object => HTMLElment(render)

use map --- {name.map((parameter)=>(JXS tags key={id}))}

git push -f origin master

Why we use key?
key is use for unqiue id for cards

React it's self say that never use index as the key (anti-pattern)

Two types of Export/Import

Default export is import component from path

Name export is import {comonent} from path

Reconailiation Algorith(React Fiber - v16 of react)

Virtul DOM is representation of an actual DOM
It's nothing but javascript object

Why is React is fast?
react is efficient in DOM manipulation because it have virtual dom

Conditional Rendering is rendering on the bases of condition is know as conditional rendering

Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

# 2 Types of Routing in the web apps

- Client Side Routing: When the hole page is not render in known as client side routing.
- Server Side Routing: When the hole page will render in known as server side routing.

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoritm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# React Hook

What is Hook?
Nomral JS utility Function
useState() - const [] = useState() superpowerful state variables in react
useEffect() - useEffect(()=>{})
if no dependency array => useEffect is called on every render
if dependency array is empty = [] => useEffect is called on initial render (just once)
if dependency array is [anything] => called everything anything is updated

whenever a state variable is updates react re-render the component

Reconciliation algorithm (React Fiber)

virtual dom is a representation of actual dom

Diff algorithm

Rendering is base on condition is known as conditional rendering

whenever state variables update, react triggers a reconciliation cycle (re-render the component)

ComponentDidMount is use for API call

componentWillUnmount when we are leaving the page

single responsibility principle that even component sholud have one clear responsibility or role.

Higher Order Component is a function that takes a component and return a new components at the end normal javascript function

uncontrolled component is to control the from useState and controlled component is to control from the parent component

# Redux Tookit
- when click on add button it dispatch the action which call a reducer function which updates the slices the redux store
- Install @reduxjs/tookit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch (action)
- Selector

// Wrong: handleClick is called immediately when the component is rendered
<button onClick={handleClick()}>Click me</button>

// Correct: handleClick is called with item when the button is clicked
<button onClick={() => handleClick(item)}>Click me</button>

// Correct: handleClick returns a function that is called when the button is clicked
<button onClick={handleClick(item)}>Click me</button>

# Type of testing (developer)
- Unit testing
- Integrstion Testing
- End to End Testing - e2e testing

# Setting up testing in our app
- Install React Testing Library
- Installed jest
- Install Babel dependencies
- Configure Babel
- Configure parcel file to disable default babel transpilation
- Jsest configuration
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work i test cases
- Include @babel/prest-react inside my babel configure
- Install @testing-library/jest-dom
