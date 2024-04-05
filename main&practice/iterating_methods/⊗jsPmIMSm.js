//#1
let arr = [2, 0, 0, 0];
let check = arr.some(elem => elem > 0);
console.log(check);

//#2
let arr = [2, 0, 0, 10];
let check = arr.some((elem, index) => elem * (index + 1) > 30);
console.log(check);