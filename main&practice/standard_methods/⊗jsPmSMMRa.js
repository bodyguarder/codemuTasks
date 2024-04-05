//#1
function getRandomInt(min, max) {
  let RandomInt = Math.floor(Math.random() * (max - min) + min)
  console.log(RandomInt);
  return RandomInt;
}

getRandomInt(1, 100);

//#2
let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(1, 100));
}

console.log(arr);