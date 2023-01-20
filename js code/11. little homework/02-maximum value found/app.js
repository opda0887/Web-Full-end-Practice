function findBiggest(numArray) {
  
  let length = numArray.length;

  if (length == 0)  // no element
    return undefined;
  
  let max = numArray[0];

  for (let i=0; i<length; i++)
  {
    if (max < numArray[i])
      max = numArray[i];
  }

  return max;
}

console.log(findBiggest([15, 20, 22, 16, 7]));
console.log(findBiggest([1, 2, 3, 4, 5, 999]));
console.log(findBiggest([-11, 0, -3, -4, -5, -999]));
console.log(findBiggest([]));