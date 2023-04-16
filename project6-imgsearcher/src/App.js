import React from "react";
import { Routes, Route } from "react-router-dom"; // ! npm install react-router-dom
import { Nav, Footer } from "./components";
import { Homepage, About } from "./pages";

const App = () => {
  return (
    <div className="igsch__app">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
