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
