let arr = [1, 4, 16];
let sum = 0;
arr.forEach(function func(elem) {
  sum += Math.pow(elem, 2);
})
console.log(sum);