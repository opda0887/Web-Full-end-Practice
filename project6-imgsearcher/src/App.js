import React from "react";
import { Nav, Footer } from "./components";
import { Homepage } from "./pages";

const App = () => {
  return (
    <div className="igsch__app">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
