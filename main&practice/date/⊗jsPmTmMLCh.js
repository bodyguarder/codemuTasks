let now = new Date();
let nowYear = now.getFullYear();
let count = 0;

for (let year = 2000; year <= nowYear; year++) {
  let date = new Date(year, 0, 1);
  if (date.getDay() == 6 || date.getDay() == 0) {
    count++;
  }
}

console.log(count);

