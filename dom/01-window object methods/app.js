// window.alert()
window.alert("Hello.");

// window.prompt()
window.prompt("What's your name?");

// window.setInterval()
function callTime(){  // print the time now
  let today = new Date();
  let text = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate() + "--" +
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  console.log(text);
}

let printTime = setInterval(callTime, 3000);  // per 3 seconds, run callTime() function

// window.clearInterval()
function stopTime(){
  clearInterval(printTime);
}
