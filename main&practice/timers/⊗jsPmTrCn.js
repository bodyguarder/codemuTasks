let i = 100;
setInterval(() => console.log(--i), 1000);

//⊗jsPmTrTS
let j = 10;
let timerId = setInterval(function func() {
  console.log(--j);

  if (j <= 0) {
    clearInterval(timerId);
  }
}, 1000);
