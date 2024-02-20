const thePrompt = prompt(`Print Number From - To`, '5-20');

let arr = [];
if (thePrompt) {
  arr = thePrompt.split('-').map((n) => +n).sort((a, b) => a - b);
};

for (let i = arr[0]; i <= arr[1]; i++) {
  const div = document.createElement('div');
  div.append(i);
  document.scripts[0].before(div);
}


