//#1
let now = new Date();
let date = new Date(2023, 11, 3);
let diff = now - date;
console.log(diff / 1000);

//#2
let endDay = new Date(2023, 11, 3, 23, 59, 59);
let diff_2 = endDay - now;
console.log(diff_2 / 1000);

//#3
let newYear = new Date(2023, 11, 31, 23, 59, 59);
let diff_3 = newYear - now;
console.log(diff_3 / (1000 * 60 * 60 * 24));

//#4
let count = 0;

for (let month = 0; month <= 11; month++) {
  let date = new Date(now.getFullYear(), month, 13);
  if (date.getDay() == 5) {
    count++;
  }
}

console.log(count);