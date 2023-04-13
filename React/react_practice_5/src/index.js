import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./App";
import UEffect from "./UEffect";

// ! React 18 - create root to render the page
const container = document.querySelector("#root");
const root = ReactDomClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <UEffect />
  </React.StrictMode>
);
