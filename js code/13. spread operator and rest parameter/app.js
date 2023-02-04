// a example of Rest parameter
let bigNum = Math.max(2, 3, 4, 5, 6, 7, -1, 100);  // can enter infinite arguments
console.log(bigNum);  // 100 - will be printed

// how to make it?
function findMax(...allInput) {
  console.log(typeof allInput);

  let MAX = -Infinity;
  allInput.forEach(e => {
    if (e > MAX)
      MAX = e;
  })
  console.log(MAX);
}

findMax(2, 3, 4, 5, 6, 7, -1, 100);

/**
 * ps
 * allInput is now an array (in func)
 */

// use spread operator to combine two arrays
let arr1 = ["Eddie", "Peter"];
let arr2 = ["May", "Kiwi"];

let combineArray = [...arr1, ...arr2];
console.log(combineArray);        // Eddie, Peter, May, Kiwi - will be printed
console.log(typeof combineArray); // object - will be printed