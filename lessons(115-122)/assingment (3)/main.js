let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

const arr = arr3.concat(arr1);

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
const [, a, b, c] = arr;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed