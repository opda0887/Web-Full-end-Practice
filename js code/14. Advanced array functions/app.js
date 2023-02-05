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
// {name: 'Peter', age: 18, gender: 'male'}
// {name: 'Wang', age: 20, gender: 'male'}
// - will be printed
