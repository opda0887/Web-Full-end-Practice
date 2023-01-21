function confirmEnding(text, p){
  let req_length = p.length;
  let text_length = text.length;

  for (let i=req_length-1; i>=0; i--){
    if (p[i] != text[text_length-1])
      return false;
    text_length--;
  }

  return true;
}

console.log(confirmEnding("Bastian", "n"));
// true
console.log(confirmEnding("Connor", "n"));
// false
console.log(confirmEnding("Eddie is good", "ood"));
// true