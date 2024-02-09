// Method One
const objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
const objMethodTwo = new Object({ property: "Method Two" });

console.log(objMethodTwo.property); // "Method Two"

// Method Three
const objMethodThree = Object.create({ property: "Method Three" });

console.log(objMethodThree.property); // "Method Three"

// Method Four
const objMethodFour = Object.assign({}, { property: "Method Four", });

console.log(objMethodFour.property); // "Method Four"