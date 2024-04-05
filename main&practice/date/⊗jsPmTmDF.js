let date = new Date();
let currentTime = date.getHours() + ':' + addZero(date.getMinutes()) + ':' + date.getSeconds() + ' ' + addZero(date.getDay()) + '.' + addZero((date.getMonth() + 1)) + '.' + date.getFullYear();

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

console.log(currentTime);