function palindrome(origin_text){
  let text = origin_text.toLowerCase();
  let last_index = text.length - 1;

  for (let i=0; i<text.length; i++){
    if (text[i] != text[last_index])
      return false;
    last_index--;
  }

  return true;
}


console.log(palindrome("bearaeb"));
// true
console.log(palindrome("Wh hw"));
// true
console.log(palindrome("Aloha, how are you today?"));
// false