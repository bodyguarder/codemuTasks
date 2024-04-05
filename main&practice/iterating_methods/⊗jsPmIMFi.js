//#1
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let posNumArr = arr.filter(elem => elem > 0);
console.log(posNumArr);

//#2
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let negNumArr = arr.filter(elem => elem < 0);
console.log(negNumArr);

//#3
let arr = [-2, 5, 1123, -5, -1, 11, 332, 4, -1];

let posNumArr = arr.filter(elem => elem > 0 && elem < 10);
console.log(posNumArr);

//#4
let arr = ['-2', '5', '1123332', '-5', '-1', '11', '332123', '4', '-1'];

let strArr = arr.filter(elem => elem.length > 5);
console.log(strArr);

//#5
let arr = [2, 5, 1123, -5, -1, 11, 332, 4, -1];

let posNumArr = arr.filter((elem, index) => elem*(index + 1) < 30);
console.log(posNumArr);

//#6
let arr = [1, 2, [3, 4], 5, [6, 7]];

let posNumArr = arr.filter(elem => typeof elem != 'object');
console.log(posNumArr);