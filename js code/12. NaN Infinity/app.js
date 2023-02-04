// NaN
let test1 = 5 / "Hi";             // bec of: num and string calculation
let test2 = 0 / 0;                // bec of: calculus
let test3 = 0 * Infinity;         // bec of: calculus
let test4 = Infinity / Infinity;  // bec of: calculus
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

// Infinity
let test5 = 1 / 0;
let test6 = Infinity / 3;
console.log(test5);
console.log(test6);

// check is NaN or not
let checkNaN = isNaN(test1);
console.log('5 / "Hi" is', checkNaN); // true - will be printed