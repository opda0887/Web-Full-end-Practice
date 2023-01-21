function inversePyramid(layer) {
  let end = layer;

  for (let i=end; i>=1; i--){  // a layer, a run
    let string = "";
    
    // add blank
    let blank = end -i;
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


inversePyramid(4);
// *******
//  *****
//   ***
//    *