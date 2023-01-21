function mySort(array){
  let length = array.length;
  for (let i=0; i<length; i++){
    for (let j=0; j<length-1; j++){
      if (array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

console.log(mySort([17, 0, -3, 2, 1, 0.5])); 
// returns [-3, 0, 0.5, 1, 2, 17]