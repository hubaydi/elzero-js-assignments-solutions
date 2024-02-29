let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// method one 
const m1 = numsOne.concat(numsTwo);
console.log(m1);
// Method two
const m2 = [...numsOne, ...numsTwo];
console.log(m2);
// Method three
const m3 = numsOne.push(...numsTwo);
console.log(m3);
// Needed Output
[1, 2, 3, 4, 5, 6]