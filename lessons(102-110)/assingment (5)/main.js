const myDiv = document.querySelector('div');

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML == 5) {
    window.open('https://elzero.org', '', 'width=500, height=500, top=20, left=700')
  } else if (myDiv.innerHTML == 0) {
    clearInterval(counter);
  }
}, 1000)