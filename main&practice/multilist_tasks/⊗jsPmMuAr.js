//#1
let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

//#2
let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
let sum = 0;

for (let subArr of arr) {
  for (let elem of subArr) {
    sum += elem;
  }
}
console.log(sum);