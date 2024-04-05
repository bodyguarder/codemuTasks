//#1
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
}
let sum = 0;

for (let subObj in obj) {
  for (let key in obj[subObj]) {
    sum += obj[subObj][key];
  }
}
console.log(sum);

//#2
let obj = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  },
}

let sum = 0;

for (let subObj in obj) {
  for (let subKey in obj[subObj]) {
    for (let key in obj[subObj][subKey]) {
      sum += obj[subObj][subKey][key];
    }
  }
}

console.log(sum);