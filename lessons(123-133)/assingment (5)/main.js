let theName = "Elzero";

// method one
console.log(theName.split(''));

// method two
console.log(Array.from(theName));

// method three
console.log([...theName]);

// method four
console.log(Object.assign([], theName));

// method five
let arr = [];
let i = 0;
while (i < theName.length) {
  arr.push(theName[i]);
  i++;
}

console.log(arr);


// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']