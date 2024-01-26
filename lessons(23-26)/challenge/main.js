/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Number(Math.min(a, b, c, d).toFixed()));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** d.toFixed()); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Number.parseInt(d));
console.log(+d.toFixed()); // the Unary Plus will make it a Number 
console.log(Math.floor(d));
console.log(Math.trunc(d));

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // 67 => Number

// You can also use Math.round() rather than Math.ceil
console.log(Math.round(Math.trunc(b) / Math.ceil(d))); // 67 => Number