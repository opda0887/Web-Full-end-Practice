// let, const, var

/**
 * Initializer
 * let, var 不需要
 * const 則依定要先付予值
 */
let x;
// const y;   /* 這裡會出現錯誤，因為const一定要先付予值 */
var z;
console.log(x); // undefined - will be printed
// console.log(y);
console.log(z); // undefined - will be printed

/**
 * re-declaration
 * 只有 var 可以 re-declaration
 */
let num1 = 10;
// let num1 = 20;  /* 這裡會出現錯誤，因為 num1 在 let 中不可宣告兩次 */
const num2 = 10;
// const num2 = 20;  /* 這裡會出現錯誤，因為 num2 在 const 中不可宣告兩次 */
var num3 = 10;
var num3 = 20;
console.log(num3); // 20 - will be printed

/**
 * re-assignment
 * 只有 const 不可以 re-assignment
 */
let n1 = 10;
n1 = 20;
console.log(n1); // 20 - will be printed
const n2 = 10;
// n2 = 20;  /* 這裡會出現錯誤，因為 num2 在 const 中不可更改值 */
var n3 = 10;
n3 = 20;
console.log(n3); // 20 - will be printed

/**
 * hosting
 * 在程式碼執行前，記憶體空間會先分配給 function declaration & var
 * -> 宣告時不用寫在使用時前面
 */
console.log(example); // undefined - will be printed
var example = 10;
console.log(example); // 10 - will be printed
sayHi(); // Hello - will be printed
function sayHi() {
  console.log("Hello");
}
