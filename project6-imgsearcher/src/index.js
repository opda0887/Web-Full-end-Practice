import React from "react";
import ReactDomClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ! npm install react-router-dom
import App from "./App";
import "./styles/style.css";

const container = document.querySelector("#root");
const root = ReactDomClient.createRoot(container);

// * <BrowserRouter>: help us to switch the routes(pages)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
