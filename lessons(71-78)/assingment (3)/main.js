let myArray = ["E", "l", "z", ["e", "r"], "o"];

const stringValue = myArray.reduce((acc, element) => {
  return acc + element;
}).split(",").reduce(function (acc, element) {
  return acc + element;
});

console.log(stringValue);
// Elzero