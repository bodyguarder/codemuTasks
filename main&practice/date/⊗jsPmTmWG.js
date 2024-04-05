//#1
let date = new Date();
console.log(date.getDay());

//#2
function dayType(day) {
  if (day == 6 || day == 0) {
    return "it's weekend!";
  } else {
    return "it's workday!";
  }
}

console.log(dayType(date.getDay()));

//#3
function func(day) {
  return 7 - day;
}

console.log(func(date.getDay()));