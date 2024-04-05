//#1
function checkEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      return false;
    }
  }

  return true;
}

let arrEven = [2, 4, 6];
let arrOdd = [1, 3, 5];

console.log(checkEven(arrEven));
console.log(checkEven(arrOdd));

//#2
function checkOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      return false;
    }
  }

  return true;
}

let arrEven = [2, 4, 6];
let arrOdd = [1, 3, 5];

console.log(checkOdd(arrEven));
console.log(checkOdd(arrOdd));

//#3
function checkArr(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }

  return false;
}

let arr = [2, 2, 4, 6];
let array = [1, 3, 5];

console.log(checkArr(arr));
console.log(checkArr(array));