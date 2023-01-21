function factorPrime(num){
  let end = num;
  let ans = "";
  let count = 0;

  for (let i=2; i<=end; i++){
    while (num % i == 0){
      if (count == 0){
        ans = ans + i;
        count = 1;
      } else
        ans = ans + " x " + i;
      num /= i;
      end = num;
    }
  }
  return ans;
}


console.log(factorPrime(120));
// returns "2 x 2 x 2 x 3 x 5"