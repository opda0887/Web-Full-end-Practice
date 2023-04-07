// ES6
// * import react packages
import React from "react";
import ReactDOM from "react-dom";

// * build a function to create html elements
/**
 * ?
 * React.createElement(<html element name>, <css style>, <words>)
 * while you want to create an element
 */
function App() {
  return React.createElement("p", { style: { color: "red" } }, "Hello");
}

// * or you can create a bunch of html elements
/**
 * ?
 * React.createElement("div", <css style>, <html elements array>)
 * while you want to create a lot of elements
 */
function ALotElements() {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Welcome to react~"),
    React.createElement("h4", null, "just a little practice"),
    React.createElement("button", null, "A click button here"),
  ]);
}

// * Upload elements from above
/**
 * ?
 * ReactDOM.render(<function name>, <where you want to put into the index.html file>);
 * to create elements in the index.html file
 */
ReactDOM.render(ALotElements(), document.querySelector("#root"));
