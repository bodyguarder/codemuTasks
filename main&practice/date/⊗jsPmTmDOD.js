//#1
let date_1 = new Date(2000, 8, 1);
let date_2 = new Date(2010, 1, 15);
let diff = date_2 - date_1;
console.log(diff);

//#2
console.log(diff / (1000 * 60 * 60 * 24));

//#3
console.log(diff / (1000 * 60 * 60 * 24 * 30.5));

//#4
console.log(diff / (1000 * 60 * 60 * 24 * 30.5 * 12));