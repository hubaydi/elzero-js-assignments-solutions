function multiply(...integer) {
  let result = 1;

  for (let i = 0; i < integer.length; i++) {
    if (typeof integer[i] !== 'number') {
      continue;
    } 
    result *= parseInt(integer[i]);
    
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply(100.5, 10.576, "B"); // 1000