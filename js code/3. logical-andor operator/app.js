// ==, ===
console.log(3 == 3);    // true - will be printed
console.log(3 == "3");  // true - will be printed
console.log(3 === "3"); // false - will be printed
console.log(3 === 3);   // true - will be printed

// !=, !==
console.log(4 != 3);    // true - will be printed
console.log(4 != "3");  // true - will be printed
console.log(4 !== "4"); // true - will be printed
console.log(4 !== 4); // false - will be printed

// >, <, >=, <=
console.log(3 > 4);   // false - will be printed
console.log(3 < 4);   // true - will be printed
console.log(3 >= 4);  // false - will be printed
console.log(3 >= 4);  // true - will be printed


// AND, OR operator
let check1 = 1 == 2;  // false
let check2 = 3 >= 2;  // true
console.log(check1 && check2);  // false - will be printed
console.log(check1 || check2);  // true - will be printed
