let nums = [2, 12, 11, 5, 10, 1, 99];

const finalValue = nums.reduce((acc, currElement) => {
  return currElement % 2 !== 0 ? acc + currElement : acc * currElement;
}, 1);

console.log(finalValue);
// 500