function func(...nums) {//здесь троеточие это оператор rest
  let sum = 0;
  for (let elem of nums) {
    sum += elem;
  }

  let average = sum / nums.length;
  return average;
}

let arr = [1, 3, 4, 2];
console.log(func(...arr));//здесь троеточие это оператор spread