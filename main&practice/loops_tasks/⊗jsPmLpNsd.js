//#2
let str = '';
for (let i = 10; i <= 30; i += 10) {
  for (let j = 1; j <= 3; ++j) {
    str = str + (i + j) + ' '
  }
}

console.log(str);