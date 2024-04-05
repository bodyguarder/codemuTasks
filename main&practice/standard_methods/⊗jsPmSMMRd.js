//#1
let num = 379;
let sqrt = Math.sqrt(num);
console.log(sqrt);
console.log(Math.round(sqrt));
console.log(sqrt.toFixed(1));
console.log(sqrt.toFixed(2));

//#2
let num = 587;
let obj = {};
let sqrt = Math.sqrt(num);
obj.floor = Math.floor(sqrt);
obj.ceil = Math.ceil(sqrt);
console.log(sqrt);
console.log(obj);