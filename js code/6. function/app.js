// declare a function
function sayHi( name ) {
  console.log("Hi", name);
  console.log("Welcome to my website.");
}

// call the function
let name = prompt("Enter your name: ")
sayHi(name);

// turn Celsius to Fahrenheit
function tempConvert(oC){
  let oF = oC * 1.8 + 32;
  return oF;
}

let temperture = tempConvert(100);
console.log(temperture);