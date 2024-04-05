let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
  e: 50
};
let sum = 0;

for (let key in obj) {
  let value = obj[key];
  let elem = String(value);
  if (elem[0] === '1' || elem[0] === '2') {
    sum += value;
  }
}

console.log(sum);