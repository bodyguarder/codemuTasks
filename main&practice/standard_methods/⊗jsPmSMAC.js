//#1
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

//#2
let arr = [1, 2, 3, 4, 5];
let subArr = ['a', 'b', 'c'];
arr.splice(3, 0, ...subArr);
console.log(arr);

//#3 
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);
