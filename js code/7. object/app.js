let student = {
  // properties setting
  name: "Kiwi",
  age: 19,
  gender: "male",
  friends: ["May", "Ming", "Peter"],
  isMarry: false,
  girldFriend: null,

  // methods setting
  sayHi() {
    console.log("Hello~ Nice to meet you.");
  },
  walk() {
    console.log("Walking...");
  },
  speak(word) {
    console.log(word);
  }
};

console.log(student.friends);
student.sayHi();
student.speak("Hello, my friend.");


// this
let Kiwi = {
  age: 19,
  sayAge() {
    console.log("Kiwi is " + this.age + " now.");
  },
};

Kiwi.sayAge();