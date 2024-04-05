//#1
let keys = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let values = [1, 2, 3, 4, 5, 6, 7];

let obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}
console.log(obj);

//#2
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

let newObj = {};

for (let key in obj) {
  let value = obj[key];
  if (value % 2 === 0) {
    newObj[key] = value;
  }
}

console.log(newObj);

//#3
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

let newObj = {};
for (let key in obj) {
  newObj[obj[key]] = key;
}
console.log(newObj);