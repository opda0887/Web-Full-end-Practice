import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // import App
import Nav from "./Nav"; // impoer Nav
import Footer from "./Footer"; // import Footer

ReactDOM.render(
  // ? use <React.StrictMode> to put the App, Nav into the webpage
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
  document.querySelector("#root")
);
