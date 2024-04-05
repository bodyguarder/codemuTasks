//#1
let arr = [1, 2, 3, 0, 4, 5];

for (let elem of arr) {
  if (elem !== 0) {
    console.log(elem);
  } else {
    break;
  }
}

//#2
let arr = [1, 2, 3, 0, -5, 5];
let sum = 0;

for (let elem of arr) {
  if (elem >= 0) {
    sum = sum + elem;
  } else {
    console.log(sum);
    break;
  }
}

//#3
let arr = [1, 2, 3, 0, -5, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 3) {
    console.log(i);
    break;
  }
}

//#4
let sum = 0;
let count = 1;

while (true) {
  sum = sum + count;
  count++;
  if (sum > 100) {
    count = count - 1;
    console.log(count);
    break;
  }
}