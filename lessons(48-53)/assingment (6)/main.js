let start = 0;
let swappedName = "elZerO";
let holder = []
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    holder.push(swappedName[i].toLowerCase());

  } else {
    holder.push(swappedName[i].toUpperCase())
  }
}

console.log(holder.join(''))
// Output
"ELzERo"