import React from "react";
import Major from "./Major";

const Footer = () => {
  let majors = [
    { name: "Basic Programming", score: 88, classes: 3 },
    { name: "Physics", score: 92, classes: 3 },
    { name: "Calculus", score: 84, classes: 4 },
  ];
  return (
    <div>
      <h3>My major: </h3>
      {majors.map((m) => {
        return <Major name={m.name} score={m.score} classes={m.classes} />;
      })}
    </div>
  );
};

export default Footer;
