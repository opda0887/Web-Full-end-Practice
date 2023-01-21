function isPrime(num){
  if (num == 1 || num == 0)
    return false;
  for (let i=2; i<num; i++){
    if (num%i == 0)
      return false;
  }
  return true;
}



console.log(isPrime(1)); 
// returns false
console.log(isPrime(5)); 
// returns true
console.log(isPrime(91)); 
// returns false
console.log(isPrime(1000000)); 
// returns false