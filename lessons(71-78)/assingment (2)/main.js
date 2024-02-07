let myString = "EElllzzzzzzzeroo";

let newValue = myString.split('').filter(function (ele, i, arr) {
  return ele !== arr[i - 1];
}).reduce(function (acc, ele) {
  return acc + ele;
});

console.log(newValue);
// Elzero