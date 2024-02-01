let index = 10;
let jump = 2;

for (; ;) {
  if (index === jump) {
    break;
  }
  console.log(index);

  index -= jump;
}

// Output
// 10
// 8
// 6
// 4