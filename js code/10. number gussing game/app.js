// make a number guessing game - guess a number from 1 to 100
let randnum = Math.ceil( Math.random() * 100 );

let iGuess = prompt("Guess a number from 1 to 100");
iGuess = Number(iGuess);  // string to num

let small = 1;
let big = 100;

while (iGuess != randnum){

  if ( isNaN(iGuess) )   // if not a number
    alert("Please enter qualified number");
  else if ( iGuess>100 || iGuess<0)
    alert("Please enter a number from 1 to 100");
  else {
    if (iGuess > randnum){
      alert("Guess a smaller number");
      big = iGuess;
    }
    else if (iGuess < randnum){
      alert("Guess a bigger number"); 
      small = iGuess;
    } 
  }

  iGuess = prompt("Guess a number from " + small + " to " + big);
  iGuess = Number(iGuess);  // string to num
}

alert("Your are correct. The number is : " + randnum);