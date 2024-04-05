//#1
let arr = [1, 4, 16];
let newArr = arr.map(function func(elem) {
  return Math.sqrt(elem);
});
console.log(newArr);

//#3
let arr = ['123', '456', '789'];
let newArr = arr.map(function func(elem) {
  let elemSplit = elem.split('');
  let splitArr = [];
  for (let i = elemSplit.length - 1; i >= 0; i--) {
    splitArr.push(elemSplit[i]);
  }
  let str = splitArr.join('');
  return str;
});

console.log(newArr);

//#4
let arr = ['123', '456', '789'];

let newArr = arr.map(function func(elem) {
  let elemSplit = elem.split('');
  return elemSplit.map(function func(str) {
    return Number(str);
  });
});

console.log(newArr);