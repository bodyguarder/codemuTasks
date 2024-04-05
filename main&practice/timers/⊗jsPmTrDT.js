let i = 0;
function timer() {
  console.log(i);
  i++;
  setTimeout(function() {
    timer();
  }, 1000);
}

timer();