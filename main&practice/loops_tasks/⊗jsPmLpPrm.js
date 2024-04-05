//#1
for (let i = 1; i < 100; i++) {
  console.log(i);
}

//#2
for (let i = 100; i > 1; i--) {
  console.log(i);
}

//#3
for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//#4
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push('x');
}
console.log(arr);

//#5
let arr = [];
for (let i = 1; i < 10; i++) {
  arr.push(i);
}
console.log(arr);

//#6
let arr = [6, 7, 8, 9, 10, 125];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

//#7
let arr = [6, 7, 8, 9, 10, 125, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    console.log('array has number 5');
    break;
  }
}

//#8
let arr = [6, 7, 8, 9, 10, 125, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//#9
let arr = [6, 7, 8, 9, 10, 125, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i] ** 2;
}
console.log(sum);

//#10
let arr = [6, 7, 8, 9, 10, 125, 5];
let sum = 0;
let average = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
average = sum / arr.length
console.log(average);

//#11
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);

//#12
let arr = [];
for (let i = 10; i > 1; i--) {
  arr.push(i);
}
console.log(arr);

//#13
let arr = [-6, -7, -8, -9, 10, -125, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
console.log(sum);

//#14
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
  let str = String(elem);
  if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
    console.log(elem);
  }
}

//#15
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//#16
let arr = [0, 1, 30, 3, 5, 3000];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === i) {
    console.log(arr[i]);
  }
}

//#21
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  obj[key] += obj[key] * 0.1
}
console.log(obj);

//#22
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  if (obj[key] <= 400) {
    obj[key] += obj[key] * 0.1
  }
}
console.log(obj);

//#23
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
  let key = arr1[i];
  let value = arr2[i];
  obj[key] = value;
}
console.log(obj);

//#24
let obj = {
  1: 6,
  2: 7,
  3: 8,
  4: 9,
  5: 10
};
let sumOfKey = 0;
let sumOfValue = 0;
for (let key in obj) {
  sumOfKey += Number(key);
  sumOfValue += obj[key];
}
console.log(sumOfKey/sumOfValue);

//#25
let obj = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5
};

let keys = [];
let values = [];
for (let key in obj) {
  keys.push(key);
  values.push(obj[key]);
}
console.log(keys);
console.log(values);

//#26
let obj = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};

let values = [];
for (let key in obj) {
  value = String(obj[key]);
  if (value[0] === '1' || value[0] === '2') {
    values.push(obj[key]);
  }
}
console.log(values);

//#27 
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[i + 1] = arr[i];
}
console.log(obj);

//#28
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = i + 1;
}
console.log(obj);

