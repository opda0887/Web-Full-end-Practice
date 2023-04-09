import React, { useState } from "react";
// useRef, useLocation, use Effect, useState...
// Hooks

// ? State -> can change variable imediately

const State = () => {
  // [variable, change variable func]
  // useState(value)
  let [name, setNmae] = useState("Peter Lin");

  const rename = () => {
    setNmae("John Lin");
  };

  return (
    <div>
      <h1 style={{ color: "purple", textDecoration: "underline" }}>{name}</h1>
      <h3>A lot of name: </h3>
      <p>{name}</p>
      <p>{name}</p>
      <p>{name}</p>
      <button onClick={rename}>Change name</button>
    </div>
  );
};

export default State;
