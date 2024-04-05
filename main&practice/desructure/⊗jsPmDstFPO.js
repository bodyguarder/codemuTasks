//#1
function func({color, width, height}) {
  console.log(color);
}

func({
  color: 'red',
  width: 400,
  height: 500
});

//#2
function func({width, height, color = 'black'}) {
  console.log(width, color);
}

func({
  color: 'red',
  width: 400,
  height: 500
});