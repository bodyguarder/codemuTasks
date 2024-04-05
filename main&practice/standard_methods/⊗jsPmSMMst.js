//#1
let num = 12345;
let str = String(num);
let arr = str.split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum);

//#2
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum);

//#3
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum); 

//#4
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}

console.log(sum);

//#5
let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
  prod *= Number(digit);
}

console.log(prod);