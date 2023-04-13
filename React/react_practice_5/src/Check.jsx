import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // ! use uuid

const Check = ({ messeges, setMesseges }) => {
  const [input, setInput] = useState("");
  // 原本要放： const [messeges, setMesseges] = useState([]);，但將其移到App.jsx中

  const inputHandler = (e) => {
    setInput(e.target.value); // * quick change input text
  };

  const clickHandlier = (e) => {
    e.preventDefault();
    setMesseges([...messeges, { input, id: uuidv4() }]); // * store msgs, and add id to each msgs
    setInput(""); // * reset input value
  };

  return (
    <div>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={clickHandlier}>Submit</button>
    </div>
  );
};

export default Check;
