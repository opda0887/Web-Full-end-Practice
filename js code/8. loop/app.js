// // for loop
for (let i=0;i<10;i++){
  console.log(i);
}

// // while loop
let j = 10;
while (j > 0){
  console.log(j);
  j--;
}

// break
for (let i=0 ; i < 3 ; i++){
  if (i==1)
    break;
  console.log(i);
}

// break
for (let i=0 ; i < 3 ; i++){
  if (i==1)
    continue;
  console.log(i);
}

// Nested loop
for (let i=1; i<=3; i++){
  for (let j=1; j<=3; j++)
    console.log( i*j );
}