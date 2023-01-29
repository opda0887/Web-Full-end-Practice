// setItem, getItem, removeItem, clear

localStorage.setItem("name", "Eddie");
console.log(localStorage);

let getName = localStorage.getItem("name");
console.log(getName);   // Eddie - will be printed

localStorage.setItem("country", "Taiwan");
localStorage.removeItem("country");
console.log(localStorage.getItem("country"));   // null - will be printed

// localStorage.clear()

/**
 * Storage can only store string type
 * if wanna store non-string type -> use JSON
 * 
 * JSON.stringify(element) : 將資料作為字串儲存
 * JSON.parse(element)       : 將stringify的element資料變回element的原始type來解讀
 */
localStorage.clear();

let friends = ["Eddie", "Peter", "May"];

localStorage.setItem("myFriends", JSON.stringify(friends));
let getFriends = localStorage.getItem("myFriends");
let myfriendsArray = JSON.parse(getFriends);

console.log(myfriendsArray);