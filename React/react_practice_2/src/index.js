import React from "react";
import ReactDOM from "react-dom";

// * JSX
// ! this type of function must be capitalized
// ! must use <div>
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h3>This is JSX</h3>
      <button style={{ color: "red" }}>a button</button>
    </div>
  );
}

ReactDOM.render(App(), document.querySelector("#root"));
