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

whenever a state variable is updates react re-render the component

Reconciliation algorithm (React Fiber)

virtual dom is a representation of actual dom

Diff algorithm

