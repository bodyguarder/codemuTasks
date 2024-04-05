function func(num) {
  let i = 1;
  while (true) {
    num = num / 2;

    if (num < 10) {
      return i;
    }

    i++;
  }
}

console.log(func(30));