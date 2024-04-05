let str = '';
for (let i = 0; i < 5; i++) {
  str = str + '-';
}
console.log(str);

let str = '';
for (let i = 1; i < 10; i++) {
  str = str + i;
}
console.log(str);

let str = '';
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    str = str + '-' + i + '-';
  } else {
    str = str + i;
  }
}
console.log(str);