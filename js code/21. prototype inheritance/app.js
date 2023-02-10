/**
 * Prototype inheritance
 */

// original object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(this.name + " says hi.");
};

// new object
function Student(name, age, score) {
  Person.call(this, name, age); // this refers to the Student object
  this.score = score;
}

// if we need to inherit sayHi() in Student object
Student.prototype = Object.create(Person.prototype);

// Student object can also create its own methods
Student.prototype.doTest = function () {
  console.log(this.name + " is doing test.");
};

// start
let Kiwi = new Student("Kiwi", 25, 95);
Kiwi.sayHi();
Kiwi.doTest();
