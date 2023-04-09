import React from "react";

// ? event handling

const App = () => {
  const sayHello = () => {
    alert("Hello, my friend");
  };

  const callYourName = (name) => {
    alert("Nice to meet you, " + name);
  };

  return (
    <div>
      <button onClick={sayHello}>Hello~</button>
      <br />
      <form action="">
        <input className="nameBox" type="text" />
        <button
          onClick={(e) => {
            // e.preventDefault();
            let name = document.querySelector(".nameBox").value;
            callYourName(name);
          }}
        >
          Type your name
        </button>
      </form>
    </div>
  );
};

export default App;
