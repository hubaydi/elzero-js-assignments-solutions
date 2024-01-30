/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my[my.length] = "Elzero";
my.length -= counter;
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(true, counter)); // ["Elham", "Mazero"]

console.log(my[my.length] = "Elzero"); // "Elzero"

console.log(my[2].charAt(4) + my[2][5].toUpperCase()); // "rO"