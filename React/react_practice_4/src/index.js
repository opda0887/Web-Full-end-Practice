import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import State from "./State";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <State />
  </React.StrictMode>,
  document.querySelector("#root")
);
