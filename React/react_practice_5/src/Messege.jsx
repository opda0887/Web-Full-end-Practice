import React from "react";
import "./styles/style.css";

const Messege = ({ msg, messeges, setMesseges }) => {
  const deleteHandler = () => {
    // * when m !== msg => true => remain
    // * when m === msg => false => delete
    setMesseges(messeges.filter((m) => m.id !== msg.id));
  };

  return (
    <div className="msg">
      <h3>{msg.input}</h3>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Messege;
