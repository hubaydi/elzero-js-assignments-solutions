
const start = performance.now();

let index = 1;

while (index <= 99_999) {
  const div = document.createElement('div');
  div.append(document.createTextNode(index));
  document.body.append(div);
  index++;
}
const end = performance.now();

const excutionTime = `Loop Took ${Math.trunc(end - start)} Milliseconds.` ;
console.log(excutionTime);