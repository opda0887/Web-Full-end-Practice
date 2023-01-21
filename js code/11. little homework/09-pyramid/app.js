function pyramid(layer){
  let end = layer;

  for (let i=1; i<=end; i++){  // a layer, a run
    let string = "";
    
    // add blank
    let blank = layer -1;
    for (let j=0; j<blank; j++)
      string += " ";
    
    // add star
    let star = i + (i-1);
    for (let j=blank; j<blank+star; j++)
      string += "*";
    
    console.log(string);

    layer--;
  }
}


pyramid(1);
//*
pyramid(2);
//  *
// ***
pyramid(5);
//    *
//   ***
//  *****
// *******