//#1
let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      sum += arr[i][j][k];
    }
  }
}
console.log(sum);