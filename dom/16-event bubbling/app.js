let outsideE = document.querySelector("div.outside");
let insideE = document.querySelector("div.inside");

outsideE.addEventListener("click", () => {
  console.log("You click the red part.");
})

insideE.addEventListener("click", (e) => {
  e.stopPropagation();  // 阻止event bubbling
  console.log("You click the blue part.");
})