//#1
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
  let str = String(elem);
  let firstNum = Number(str[0]);
  if (firstNum === 1 || firstNum === 2) {
    sum += firstNum;
  }
}
console.log(sum);