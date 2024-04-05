//#1
function func(num_1) {
  return function (num_2) {
    return function (num_3) {
      return num_1 + num_2 + num_3;
    }
  }
}

console.log(func(2)(3)(4));

//#2
function func(num_1) {
  return function (num_2) {
    return function (num_3) {
      return function (num_4) {
        return function () {
          let arr = [];
          arr.push(num_1, num_2, num_3, num_4);
          return arr;
        }
      }
    }
  }
}

console.log(func(2)(3)(4)(5)());