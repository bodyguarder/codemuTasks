//#1
let arr = [
  [1, 2, 3],
  [4, 5],
  [6]
];
let sum = 0;
for (let subArr of arr) {
  for (let elem of subArr) {
    sum += elem;
  }
}
console.log(sum);

//#2
let arr = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];
let sum = 0;
for (let subArr of arr) {
  for (let list of subArr) {
    for (let elem of list)
    sum += elem;
  }
}
console.log(sum);