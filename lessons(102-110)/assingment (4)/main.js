const myDiv = document.querySelector('div');

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML === "0") {
    clearInterval(counter);
    window.location.replace('https://elzero.org')
  }
}, 1000)