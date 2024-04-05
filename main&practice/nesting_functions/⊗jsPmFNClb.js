function each(arr, callback) {
  let res = [];
  for (let elem of arr) {
    res.push(callback(elem));
  }
  return res;
}

//#1
let arr = [1, 2, 3];
console.log(each(arr, function (elem) {
  return elem * 2;
}));

//#2
let arr_1 = ['html', 'css', 'js'];
console.log(each(arr_1, function (elem) {
  let arr = elem.split('');
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  
  let str = newArr.join('');
  return str;
}));

//#3
console.log(each(arr_1, function (elem) {
  let arr = elem.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}));