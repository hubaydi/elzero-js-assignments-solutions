let start = 10;
let end = 0;
let stopHere = 3;

for (let i = start; i > end; i--) {
  if (i < stopHere) {
    break;
  }
  if (i < start) {
    console.log(`${end}${i}`)
  } else {
    console.log(i)
  }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03