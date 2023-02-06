// map
let languages = ["Java", "C", "Python", "Go"];

let upperLanguages = languages.map((e) => {
  return e.toUpperCase();
});

console.log(languages);
console.log(upperLanguages);

let example2 = [
  { name: "Peter", age: 18, gender: "male" },
  { name: "May", age: 12, gender: "female" },
  { name: "Wang", age: 20, gender: "male" },
];

let upperExample2 = example2.map(function (i) {
  return i.name.toUpperCase();
});

console.log(upperExample2);

// find
let oneOver18 = example2.find((e) => {
  return e.age >= 18; // 條件
});

console.log(oneOver18);

// filter
let allOver18 = example2.filter((e) => {
  return e.age >= 18; // 條件
});

console.log(allOver18);

// some
let anyOver18 = example2.some((e) => {
  return e.age >= 18;
});

console.log(anyOver18);

// every
let everyOver18 = example2.every((e) => {
  return e.age >= 18;
});

console.log(everyOver18);

// sort
let fruits = ["Watermelon", "Apple", "Banana", "Orange"];
fruits.sort(); // will change the origin array
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Watermelon'] - will be printed

let numbers = [10, 50, 1, 66, 2, 3, 98];
numbers.sort(); // based on string comparison
console.log(numbers); // [1, 10, 2, 3, 50, 66, 98] - will be printed

numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 10, 50, 66, 98] - will be printed

fruits.sort((a, b) => {
  return a.length - b.length;
});
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Watermelon'] - will be printed
