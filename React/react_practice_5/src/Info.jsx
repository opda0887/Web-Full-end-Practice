import React from "react";
import Messege from "./Messege";

const Info = ({ messeges, setMesseges }) => {
  return (
    <div>
      {messeges.map((msg) => {
        return (
          <Messege
            msg={msg}
            messeges={messeges}
            setMesseges={setMesseges}
            key={msg.id}
          />
        );
      })}
    </div>
  );
};

export default Info;
