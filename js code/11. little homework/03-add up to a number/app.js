function addUpTo(num){

  let ans = 0;
  for (let i=1; i<=num; i++)
    ans += i;
  
  return ans;
}

console.log(addUpTo(5));
console.log(addUpTo(100));
console.log(addUpTo(5000));
console.log(addUpTo(100000));