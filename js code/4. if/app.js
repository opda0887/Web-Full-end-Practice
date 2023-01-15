let isCool = true;

if (isCool)
  console.log("You are cool.");
else
  console.log("You might be beautiful.");


// 更進階一點
let age = prompt("Enter your age: ");
age = Number(age);

if (isNaN(age))
  alert("Please enter number!!");
else {
  if (age >= 65)
    alert("Oh, you are pretty old.");
  else if (age >= 18)
    alert("Nice, you are an adult.");
  else
    alert("What? You can't enter this palce!");
}
