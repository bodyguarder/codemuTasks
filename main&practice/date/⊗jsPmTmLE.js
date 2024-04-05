function func(year) {
  let date = new Date(year, 2, 0);
  if (date.getDate() == 29) {
    console.log('високосный');
  } else {
    console.log('обычный');
  }
}

func(2024);