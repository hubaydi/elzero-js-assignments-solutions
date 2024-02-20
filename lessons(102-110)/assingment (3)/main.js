const myDiv = document.querySelector('div');

// let counter = setInterval(counterFunction, 1000);

// function counterFunction() {
//   myDiv.innerHTML -= 1;
// if (myDiv.innerHTML === "0") {
//   clearInterval(counter);
// }
// }

let counter = setInterval(function () {
  myDiv.innerHTML -= 1;
  if (myDiv.innerHTML === "0") {
    clearInterval(counter);
  }
}, 1000)
