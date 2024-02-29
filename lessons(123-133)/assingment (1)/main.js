const setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers)

console.log([...setOfNumbers][[...setOfNumbers].length - 1])
