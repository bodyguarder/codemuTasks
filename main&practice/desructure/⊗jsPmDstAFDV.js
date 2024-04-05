function funcDate() {
  return (new Date).getDate();
}

function funcMonth() {
  return (new Date).getMonth() + 1;
}

function funcYear() {
  return (new Date).getFullYear();
}

let arr = [];

let [year = funcYear(), month = funcMonth(), day = funcDate()] = arr;

console.log(year, month, day);