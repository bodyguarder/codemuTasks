//#1
let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 4
  },
  f: {
    g: 5,
    j: 6,
    k: {
      l: 7,
      m: {
        n: 8,
        o: 9
      }
    }
  }
};

function func(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      func(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

func(obj);

//#2
let arr = [1, [2, 7, 8],
  [3, 4, [5, [6, 7]]]
];
let newArr = [];

function getArr(arr) {
  for (let elem of arr) {
    if (typeof elem == 'object') {
      getArr(elem);
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
}

console.log(getArr(arr));