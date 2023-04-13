import React, { useState, useEffect } from "react";

const UEffect = () => {
  const [name, setName] = useState("Peter");

  const changeName = () => {
    setName("Wang");
  };

  useEffect(() => {
    console.log("useEffect is running");
  }, [name]); // ! [] -> everytime refresh the page will call this UE function

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={changeName}>Change name...</button>
    </div>
  );
};

export default UEffect;
