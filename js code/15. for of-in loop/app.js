/* The for loop we learn before */

let number = [10, 20, 30];
let student = "Peter";
let Peter = {
  name: "Peter Wang",
  age: 18,
  haveBaby: false,
};

// for
for (let i = 0; i < number.length; i++) {
  console.log(number);
}

// forEach
number.forEach((n) => {
  console.log(n);
});

// for of - cannot use on object
for (let c of student) {
  console.log(c);
}

// for in - can use on object
for (let p in Peter) {
  console.log(p); // print its properties
  console.log(Peter[p]); // print its value
}

for (let i in number) {
  console.log(i); // print the array's index
  console.log(number[i]); // print the array's value
}
