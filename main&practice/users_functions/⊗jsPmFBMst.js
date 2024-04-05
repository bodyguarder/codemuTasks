//#3
let arr = [1, 2, 3, 4, 5];

function func(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  console.log(res);
}

func(arr);


//#5
let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

//#6
let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }
  
  return sum;
}

//#7
function add(num) {
  if (num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

console.log(add(8));
console.log(add(11));

//#8
let arr = [1, 2, 3, 4, 5];
let result = sum(arr);
console.log(result);

function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

//#9
let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
  let arr = String(num).split('');
  let sum = 0;

  for (let elem of arr) {
    sum += Number(elem);
  }

  return sum;
}

//#10
console.log(isPrime(13)); // должен вывести true
console.log(isPrime(10));
console.log(isPrime(9));
console.log(isPrime(7));

function isPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) {
      continue;
    } else {
      flag = false;
      return flag;
    }
  }

  return flag;
}