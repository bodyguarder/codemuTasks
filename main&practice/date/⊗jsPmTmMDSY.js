//#1
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
console.log(days[date.getDay()]);

//#2
let date_1 = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(days[date_1.getDay()]);

//#3
let date_2 = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(days[date_2.getDay()]);