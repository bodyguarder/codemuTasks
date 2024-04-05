function func(num_1, num_2) {
  function square(num) {
    return Math.pow(num, 2);
  }

  function cube(num) {
    return Math.pow(num, 3);
  }

  return square(num_1) + cube(num_2);
}

console.log(func(2, 3));

