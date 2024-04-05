//#1
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let check = arr.every(elem => elem > 0);
console.log(check);

//#2
let arr = [ 1, 3, 4];

let check = arr.every((elem, index) => (elem * (index + 1)) < 30);
console.log(check);