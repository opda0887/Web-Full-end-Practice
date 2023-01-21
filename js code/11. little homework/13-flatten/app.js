function flatten(array){
  let ans = [];
  flat(array);
  return ans;

  function flat(A){
    for (let i=0; i<A.length; i++){
      if (Array.isArray(A[i]))
        flat(A[i]);
      else
        ans.push(A[i]);
    }
  }
}



console.log(flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]));
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]