//#2
let checkSimple = true;
let num = 10;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    checkSimple = false;
  }
}

console.log(checkSimple);