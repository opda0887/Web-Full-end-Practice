import React from "react";
import "./styles/style.css";

// ? use arrow function expression to create a function element
const App = () => {
  let friends = [
    { name: "Peter", age: 18 },
    { name: "May", age: 19 },
    { name: "Eddie", age: 17 },
  ];
  return (
    <div>
      {/* use CSS in JSX */}
      <h1 style={{ color: "red", fontSize: "6rem" }}>Hello</h1>
      <h3>This is the formal React practice.</h3>
      <button>Click for more information</button>
      {/*use JavaScript in JSX */}
      {friends.map((friend) => {
        return (
          <div>
            <p>
              {friend.name} is {friend.age} year old.
            </p>
          </div>
        );
      })}
    </div>
  );
};

// ? export App function element
export default App;
