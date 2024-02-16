const fDiv = document.querySelector('.one');
const sDiv = document.querySelector('.two');
const divs = document.getElementsByTagName('div');
const sDivText = fDiv.textContent;

// fDiv => firstDiv
fDiv.title = sDiv.title;
fDiv.textContent = sDiv.textContent;

// sDiv => secondDiv
sDiv.title = sDiv.className;
sDiv.textContent = `${sDivText}  ${divs.length}`;