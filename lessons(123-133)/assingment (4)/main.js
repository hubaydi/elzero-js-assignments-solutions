let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].filter(n => +n).join(''));
// Needed Output
// 123