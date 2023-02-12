/**
 * How to copy an array
 */

let people = ["Kiwi", "May"];

// false method：try1 point to the people value
let try1 = people;

// correct method
let try2 = [...people]; // spread operator

/**
 * Ternary operator
 */

let age = 18;
let money = 0;

// if else
if (age >= 18) money = 100;
else money = 50;

// Ternary operator
let ans = age >= 18 ? 100 : 50;
console.log(money, ans);

/**
 * Default Parameter
 */

function multiply(a = 1, b = 1) {
  console.log(a * b);
}

multiply(); // 1 - will be printed
multiply(5); // 5 - will be printed
multiply(5, 2); // 10 - will be printed

/**
 * backtick string
 */

let name = "Kiwi";
console.log(`Hello, I am ${name}.`);
// Hello, I am Kiwi. - will bw printed

/**
 * floating point
 */

console.log(0.1 + 0.2 == 0.3); // false will be printed

// toFixed(1)：取到小數點後一位
console.log((0.1 + 0.2).toFixed(1) == (0.3).toFixed(1)); // true - will be printed

/**
 * IIFE
 */

(function (name) {
  console.log(`Hello, ${name}.`);
})("Kiwi");
// Hello, Kiwi. - will be printed

/**
 * destruct an object
 * the element needs to be the same
 */

// construct an object
let Kiwi = {
  hisname: "Kiwi",
  hisage: 19,
  gender: "male",

  friend: {
    fullName: "Peter",
  },
};

// destruct an object
let { hisname, hisage, gender } = Kiwi;
let { fullName } = Kiwi.friend;

console.log(hisname, fullName);
// Kiwi Peter - will be printed

/**
 * Switch
 */

let checkAge = 18;

switch (checkAge) {
  case 18:
    console.log(`You are 18.`);
    break;
  default:
    console.log(`Not 18.`);
    break;
}
