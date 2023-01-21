function intersection(arr1, arr2){
  let ans = [];
  let leng_1 = arr1.length;
  let leng_2 = arr2.length;
  
  for (let i=0; i<leng_1; i++){
    for (let j=0; j<leng_2; j++){
      if (arr1[i] == arr2[j]){
        let check = 0;
        for (let k=0; k<ans.length; k++){
          if (arr1[i] == ans[k]){
            check = 1;
            break;
          }
        }
        if (check == 0){
          ans.push(arr1[i]);
          break;
        }
      }
    }
  }

  return ans;
}


console.log(intersection([3, 4, 1, 3, 4, 6, 10], [3, 3, 5, 11, 4, 3, 100, 144, 0, 4]));
// returns [3, 4]