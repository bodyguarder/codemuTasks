function test(num, func1, func2) {
  return func1(num) + func2(num);
}

let square = function (num) {
  return Math.pow(num, 2);
}

let cube = function (num) {
  return Math.pow(num, 3);
}

console.log(test(3, square, cube));