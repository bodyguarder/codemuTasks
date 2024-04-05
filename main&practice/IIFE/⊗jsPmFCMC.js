//#1
(function () {
  return function () {
    return function () {
      return alert('!');
    }
  }
})()()();

//#2
(function (num) {
  let num_1 = num;
  return function (num) {
    let num_2 = num;
    return console.log(num_1 + num_2);
  }
})(1)(2);

//#3
(function (num) {
  let num_1 = num;
  return function (num) {
    let num_2 = num;
    return function (num) {
      let num_3 = num;
      return console.log(num_1 + num_2 + num_3);
    }
  }
})(1)(2)(3);