// An object can be a property of another object
let Peter = {
  name: "Peter",
  age: 18,
  intro() {
    console.log("Hello, I'm Peter. Eddie is my best friend.")
  },
}

let student = {
  name: "Eddie",
  age: 19,
  friend: Peter,
  intro() {
    console.log("Hello, I'm Eddie. Nice to meet you.")
  },
}

console.log(student.friend);
student.friend.intro();


// console
window.console.log("Hi"); // Hi - will be printed
window.console.error("This text is red color.");