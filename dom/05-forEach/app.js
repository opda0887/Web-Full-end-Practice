let lucky_number = [1, 10, 50, 77, 31, 40, 100];

// function declaration
lucky_number.forEach(function checkNum(n) {
  if (n > 35)
    console.log(n);
});

// arrow function expression
lucky_number.forEach(n => {
  if (n <= 35)
    console.log(n);
});

// arrow function expression - ex
lucky_number.forEach((n, index, arr) => {
  if (n == 77){
    console.log(n + " is in the " + index + " index.");
    console.log(arr);
  }
});