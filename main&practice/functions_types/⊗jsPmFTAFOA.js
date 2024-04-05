let obj = {
  sum: function (arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum;
  },
  square: function (arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += Math.pow(elem, 2);
    }
    return sum;
  },
  cube: function (arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += Math.pow(elem, 3);
    }
    return sum;
  },
}

let arr = [1, 2, 3, 4, 5];

console.log(obj.sum(arr));
console.log(obj.square(arr));
console.log(obj.cube(arr));