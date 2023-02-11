/**
 * Class
 * a method to replace with prototype inheritance
 * we gonna re-write the codes in 21. lecture
 */

class Person {
  // constructor function
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name + " says hi.");
  }
}

class Student extends Person {
  constructor(name, age, score) {
    super(name, age); // 將name, age傳到母集合(Person)裡面去，super: 母集合
    this.score = score;
  }

  doTest() {
    console.log(this.name + " is doing test.");
  }
}

// start
let Kiwi = new Student("Kiwi", 25, 95);
Kiwi.sayHi();
Kiwi.doTest();

/**
 * Class - static properties and methods
 * build static value/function in the class
 */

class Circle {
  static pi = 3.14159; // 在class中設立定植

  constructor(radius) {
    this.radius = radius;
  }

  printArea() {
    console.log("The circle area is:", Circle.pi * this.radius * this.radius);
  }

  static printAreaFormula() {
    // 在class中設立固定函式
    console.log("Calculate area: pi * radius^2.");
  }
}

let c1 = new Circle(10);

Circle.printAreaFormula();
c1.printArea();
