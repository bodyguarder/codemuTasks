//#1
let arr = [];
let k = 1;
for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i].push(k++);
  }
}
console.log(arr);

//#2
let arr = [];
let k = 0;
for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i].push(k += 2);
  }
}
console.log(arr);

//#3
let arr = [];
let k = 0;
for (let i = 0; i < 2; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let m = 0; m < 2; m++) {
      arr[i][j][m] = ++k;
    }
  }
}
console.log(arr);

