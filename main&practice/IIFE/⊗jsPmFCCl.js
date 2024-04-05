//#1
let count = (function () {
  let num = 1;
  return function () {
    console.log(num);
    num++;
  }
})();

count();
count();

//#2
let count = (function () {
  let num = 1;
  return function () {
    console.log(num);
    if (num == 5) {
      num = 0;
    }
    num++;
  }
})();

count();
count();
count();
count();
count();
count();