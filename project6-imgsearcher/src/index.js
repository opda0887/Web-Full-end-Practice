import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./App";

const container = document.querySelector("#root");
const root = ReactDomClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
