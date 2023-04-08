import React from "react";

// ? Props (Properties)
// Every components in React has its own properties

const Major = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>get {props.score}</h5>
      <h5>have {props.classes} classes</h5>
    </div>
  );
};

export default Major;
