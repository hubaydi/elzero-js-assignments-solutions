let chars = ["Z", "Y", "A", "D", "E", 10, 1];

const nums = chars.filter(n => typeof n === 'number' ? n : '');
const strings = chars.filter(s => typeof s === 'string' ? s : '');
const newChars = [...nums, ...strings];
const nL = nums.length;
newChars.copyWithin(0, nL, nL + nL);

console.log(newChars);

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']