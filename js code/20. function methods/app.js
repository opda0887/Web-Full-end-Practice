/**
 * Function methods
 * inherit object's prototype, so function can also do methods
 */

let Kiwi = {
  name: "Kiwi",
  age: 18,
};

function sayHi(country) {
  // check what is this represent
  console.log(this);

  console.log("Hello, I'm " + this.name + ". I'm from " + country + ".");
}

sayHi("Korea"); // this: window object

// bind
let Kiwi_sayHi = sayHi.bind(Kiwi);
Kiwi_sayHi("Taiwan");

// call
sayHi.call(Kiwi, "Japan");

// apply
sayHi.apply(Kiwi, ["China"]);
