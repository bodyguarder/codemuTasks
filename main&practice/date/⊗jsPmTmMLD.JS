//#1
function func(month, year) {
  let date = new Date(year, month + 1, 0);
  return date;
}

console.log(func(0, 2023).getDate());

//#2
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[func(4, 2025).getDay()]);