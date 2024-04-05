//#1
let date_1 = new Date(1988, 2, 1);
let date_2 = new Date(2000, 0, 10);
let dif = date_2.getTime() - date_1.getTime();
console.log(dif / (1000 * 60 * 60 * 24));

//#2
let birthday = new Date(1993, 8, 6);
let now = new Date();
let dif = now.getTime() - birthday.getTime();
console.log(dif / (1000 * 60 * 60 * 24 * 30.5));