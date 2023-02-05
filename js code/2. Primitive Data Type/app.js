// Number
let pi = 3.1415926;
console.log(pi.toString() + 777);  // 3.1415926777 - will be printed
console.log(pi.toFixed(2));  // 3.14 - will be printed


//String
let str1 = "Peter";
let str2 = "May";
let str3 = "5";
let str4 = "4999999999999";
console.log(str1 > str2);
console.log(str3 > str4);

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


// boolen
let isPretty = true;
console.log(isPretty);  // true - will be printed
isPretty = false;
console.log(isPretty);  // false - will be printed


// undefined
let x;
console.log(x); // undefined - will be printed


// null
let y = null;
console.log(y)  // null - will be printed


// symbol
let z = Symbol();
console.log(z); // Symbol() - will be printed


// 確認資料型態
let t1 = true;
let t2 = "true";
console.log(typeof(t1));  // boolen - will be printed
console.log(typeof(t2));  // string - will be printed