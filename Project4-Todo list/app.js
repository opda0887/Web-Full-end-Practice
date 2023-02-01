let showBox = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
  // prevent form from being submitted
  e.preventDefault();

  // get input value
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoDate = form.children[1].value;

  // create a todo item
  let Todo = document.createElement("div");
  Todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  let date = document.createElement("p");
  date.classList.add("todo-date");

  text.innerText = todoText;
  text.setAttribute("title", todoText); // if text is overflowed, curser hover and show all text
  if (todoDate == "")
    date.innerText = ""
  else
    date.innerText = "\"" + todoDate + "\"";
  
  Todo.appendChild(text);
  Todo.appendChild(date);

  // create complete and trash can
  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.setAttribute("title", "Todo finish")
  complete.innerHTML = '<img src="./img/check.png" alt="check button">';
  complete.addEventListener("click", e => {
    let todoElement = e.target.parentElement;
    todoElement.classList.toggle("done");  // 若todo已經complete，再點擊一次則恢復原狀
  })

  let trashCan = document.createElement("button");
  trashCan.classList.add("delete");
  trashCan.setAttribute("title", "Todo delete");
  trashCan.innerHTML = '<img src="./img/trash-bin.png" alt="delete button">';
  trashCan.addEventListener("click", e => {
    let todoElement = e.target.parentElement;
    todoElement.style.animation = "scaleDown 0.3s ease 0s 1 forwards";
    // after the animation end, todo element will be removed
    todoElement.addEventListener("animationend", () => {
      todoElement.remove();
    })
  })

  Todo.appendChild(complete);
  Todo.appendChild(trashCan);

  // make animation
  Todo.style.animation = "scaleUp 0.3s ease 0s 1 forwards";
  /**
   * The animation setting rules
   * name -> duration -> time-function -> delay-time -> loop-count -> direction
   * https://www.w3schools.com/css/css3_animations.asp
   */

  // set an object
  let myTodo = {
    todoText: todoText,
    todoDate: todoDate,
  }

  // put the todo object into an array, then store data
  let list = localStorage.getItem("list");
  if (list == null) {
    // if localsotrage doesn't have any element
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    // localsotrage have element
    let preData = JSON.parse(list);
    preData.push(myTodo);
    localStorage.setItem("list", JSON.stringify(preData));
  }

  // append all items into showbox
  showBox.appendChild(Todo);

  // reset the todo input
  form.children[0].value = "";
  form.children[1].value = "";
});