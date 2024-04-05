let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let diff = now - date;
console.log(diff / (1000 * 60 * 60));
console.log(date);