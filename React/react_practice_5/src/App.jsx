import React, { useState } from "react";
import Check from "./Check";
import Info from "./Info";

const App = () => {
  // ? State lifting
  const [messeges, setMesseges] = useState([]);

  return (
    <div>
      <Check messeges={messeges} setMesseges={setMesseges} />
      <Info messeges={messeges} setMesseges={setMesseges} />
    </div>
  );
};

export default App;
