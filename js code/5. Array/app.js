let friends = ["John", "Eddie", "Kiwi"];

// index
console.log(friends[1]);  // Eddie - will be printed

// length
console.log(friends.length);  // 3 - will be printed

// push, pop
friends.push("Harry");
console.log(friends);

friends.pop();
console.log(friends);

// shift, unshift
friends.shift();
console.log(friends);

friends.unshift("May");
console.log(friends);

// combine two array
let arr1 = ["Eddie", "Peter"];
let arr2 = ["May", "Kiwi"];

let combineArray = arr1.concat(arr2); // an array
console.log(combineArray);            // Eddie, Peter, May, Kiwi - will be printed
console.log(typeof combineArray);     // object - will be printed