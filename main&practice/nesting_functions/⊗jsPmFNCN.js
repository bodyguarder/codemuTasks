function each(arr, callback) {
  let res = [];
  for (let elem of arr) {
    res.push(callback(elem));
  }
  return res;
}

function cube(num) {
  return num ** 3;
}

let result = each([1, 2, 3, 4, 5], cube);
console.log(result);