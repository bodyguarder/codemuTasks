function test(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }

  return arr;
}

let square = function (num) {
  return Math.pow(num, 2);
}

let cube = function (num) {
  return Math.pow(num, 3);
}

let arr_1 = [1, 2, 3];
let arr_2 = [1, 2, 3];
let res_1 = test(arr_1, square);
let res_2 = test(arr_2, cube);
console.log(res_1, res_2);