let myP = document.querySelector("p");

console.log(typeof myP.classList);
console.log(myP.classList);  // show element's all classes

// add() - 在element中添加...class
myP.classList.add("red", "bold");

// remove() - 在element中移除...class
myP.classList.remove("red");

// toggle()
myP.classList.toggle("blue"); // myP not has .blue, so .blue will be added
myP.classList.toggle("big");  // myP has .big, so .big will be removed

// contains()
let checkBlue = myP.classList.contains("blue");
console.log(checkBlue);