//#1
let arr = [1, 2, 3];

function calcSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calcSum(arr));

//#2
function createArr(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(createArr(9));

//#3
function create(string) {
  return string.split('');
}

let str = 'string';

console.log(create(str));

//#4
function create(string) {
  let arr = string.split('');
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let str = 'string';

console.log(create(str));

//#5
function create(string) {
  let arr = string.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

let str = 'string';

console.log(create(str));

//#6
function create(string) {
  let arr = string.split('');
  arr[0] = arr[0].toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ' ') {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }

  return arr.join('');
}

let str = 'string will small';

console.log(create(str));

//#11
function getRandomElem(arr) {
  let i = Math.floor(Math.random() * (arr[arr.length - 1] - arr[0] + 1)) + arr[0];
  return arr[i];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(getRandomElem(arr));
console.log(getRandomElem(arr));
console.log(getRandomElem(arr));
console.log(getRandomElem(arr));