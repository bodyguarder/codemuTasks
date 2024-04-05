//#1
function func([name, surname, department, position, salary]) {
  console.log(name, surname, department, position, salary);
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

//#2
function func([name, surname, ...info]) {
  console.log(name, surname, info);
}

func(['John', 'Smit', 'development', 'programmer', 2000]);

//#3
function func([name, surname, department, position = 'junior']) {
  console.log(name, surname, department, position);
}

func(['John', 'Smit', 'development']);

//#4
function func(department = 'development', [name, surname], [year, month, day]) {
  console.log(department, name, surname, year, month, day);
}

func('development', ['John', 'Smit'], [2018, 12, 31]);