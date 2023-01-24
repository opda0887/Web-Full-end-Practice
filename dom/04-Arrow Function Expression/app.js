// function declaration
function sayHi(){
  console.log("Hi");
}

// arrow function expression
let sayHi2 = () => {
  console.log("Hi-2");
}

sayHi();
sayHi2();

// this keyword
let student = {
  name: "Eddie",
  // function declaration
  walk() {
    console.log(this);  // student
    console.log(this.name + " is walking.");
  },
  // arrow function expression
  greeting: () => {
    console.log(this);  // window object
    console.log(this.name + " is greeting.");
  }
}

student.walk();
student.greeting();