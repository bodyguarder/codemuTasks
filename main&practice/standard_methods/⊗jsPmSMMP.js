//#1
console.log(Math.pow(2, 10));

//#2
console.log(Math.sqrt(245));
console.log(Math.pow(245, 0.5));

//#3
let arr = [4, 2, 5, 19, 13, 0, 10];
let sumOfCube = 0;
for (let elem of arr) {
  sumOfCube += Math.pow(elem, 3);
}
console.log(Math.sqrt(sumOfCube));