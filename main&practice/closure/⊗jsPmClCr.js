//#1
function countFunc() {
  let num = 1;

  return function func() {
    console.log(num);
    num++;
  }
}

let callFunc = countFunc();
callFunc();
callFunc();
callFunc();

//#2
function countFunc() {
  let num = 10;

  return function func() {
    console.log(num);
    num--;
  }
}

let callFunc = countFunc();
callFunc();
callFunc();
callFunc();

//#3
function countFunc() {
  let num = 5;

  return function func() {
    if (num == 0) {
      return console.log('count is finished');
    }
    console.log(num);
    num--;
  }
}

let callFunc = countFunc();
callFunc();
callFunc();
callFunc();
callFunc();
callFunc();
callFunc();
callFunc();