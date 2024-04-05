function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}

let [name, surname, ...info] = func();

console.log(name, surname, info);