const numberOne = 10;
const numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof(numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log("Normal Concatenate " + "\n" + numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`Template Literals Way
${numberOne}
${numberTwo}
`);
/*
  Template Literals Way
  20
  10
*/