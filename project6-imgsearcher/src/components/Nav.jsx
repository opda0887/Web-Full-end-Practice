import React from "react";
import { Link } from "react-router-dom"; // ! npm install react-router-dom
// a -> link; href -> to

const Nav = () => {
  return (
    <nav className="igsch__nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
