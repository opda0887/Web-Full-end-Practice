// Number
let pi = 3.1415926;
console.log(pi.toString() + 777);  // 3.1415926777 - will be printed
console.log(pi.toFixed(2));  // 3.14 - will be printed


//String
let name = "Kiwi Lin";
console.log(name.length);  // 8 - will be printed

let name2 = "KDA";
console.log(name2[-1]); // undefined - will be printed
console.log(name2[0]);  // K - will be printed
console.log(name2[1]);  // D - will be printed
console.log(name2[2]);  // A - will be printed
console.log(name2[3]);  // undefined - will be printed

let characters = "abcdefg";
console.log(characters.slice(1,4));  // bcd - will be printed

let greeting = "Hello";
console.log(greeting.indexOf("l"));    // 2 - will be printed (the first "l")
console.log(greeting.indexOf("ell"));  // 1 - will be printed (tje index of "e")
console.log(greeting.indexOf("W"));    // -1 - will be printed (no element)

let country = "Taiwan";
console.log(country.toLowerCase());  // taiwan - will be printed
console.log(country.toUpperCase());  // TAIWAN - will be printed

let text = "I'm the best.";
console.log(text.split(" "));  // meet whitespace will be cut
