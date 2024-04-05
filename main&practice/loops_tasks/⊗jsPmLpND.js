//#1
for (let i = 10; i < 1000; i++) {
  let str = String(i);
  console.log(str[0]);  
}

//#2
for (let i = 10; i < 1000; i++) {
  let str = String(i);
  let num_0 = Number(str[0]);
  let num_1 = Number(str[1]);
  let sum = num_0 + num_1;
  console.log(sum);
}

//#4
for (let i = 10; i < 1000; i++) {
  let str = String(i);
  let num_0 = Number(str[0]);
  let num_1 = Number(str[1]);
  let sum = num_0 + num_1;

  if (sum == 5) {
    console.log(str);
  } 
}