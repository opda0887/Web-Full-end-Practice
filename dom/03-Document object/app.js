// document object
console.log(document);

// getElementById()
let myH1 = document.getElementById("first");
console.log(myH1);

// getElementByClassNmae()
let myP = document.getElementsByClassName("second");
console.log(myP);

// createElement()
let h = document.createElement("h1");
console.log(h);

// querySelector()
let h2 = document.querySelector(".second");
console.log(h2);

// querySelectorAll()
let seconds = document.querySelectorAll(".second");
console.log(seconds);
console.log(seconds[0]);
// NodeList is not an array