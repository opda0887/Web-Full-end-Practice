// window object
/**
 * e 代表 click event
 * JS event is an object
 */
window.addEventListener("click", e => {
  console.log("You click", e, "\n", typeof e);
})

// target
let myH = document.querySelector("h1");
myH.addEventListener("click", e => {
  console.log(e.target);            // h1 - will be printed
  console.log(e.target.innerText);  // This this the first h1. - will be printed
})

// preventDefault()
let submitButton = document.querySelector("button");
submitButton.addEventListener("click", e => {
  e.preventDefault();   // 使button無法進行submit
})