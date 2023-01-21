function findDuplicate(array){
  let length = array.length;
  
  if (length == 1 || length == 0)
    return false;

  for (let i=0; i<length-1; i++){
    for (let j=i+1; j<length; j++){
      if (array[i] == array[j])
        return true;
    }
  }

  return false;
}


console.log(findDuplicate([1, 3, 5, 7, 9, 3]));
// returns true
console.log(findDuplicate([]));
// returns false
console.log(findDuplicate([3, 4, 5, 6, 7, 10000, 0]));
// returns false 