const numInput = document.querySelector('[name="elements"]');
const textInput = document.querySelector('[type="text"]');
const select = document.getElementsByTagName('select')[0];
const submitInput = document.querySelector('input[type="submit"]');
const holderDiv = document.querySelector('div.results')


document.forms[0].onsubmit = function (e) {
  holderDiv.innerHTML = "";
  if (textInput.value == '') {
    textInput.value = select.value;
  }
  // i have added some new ideas. thanks to our teacher Osama Elzero.
  if (numInput.value == '' || numInput.value > 100) {
    const newElement = document.createElement('p');
    newElement.className = "warning";
    newElement.innerHTML = 'can u please type a valid number (<span>greater than 0 and less than 100</span>)';
    newElement.style.color = '#FC5404';
    newElement.style.margin = 'auto';
    holderDiv.appendChild(newElement);

  } else {
    for (let i = 1; i <= numInput.value; i++) {
      
      const newElement = document.createElement(select.value);
      newElement.className = "box";
      newElement.title = "Element";
      newElement.id = `id-${i}`;
      newElement.innerHTML = textInput.value;
  
      holderDiv.appendChild(newElement);
    }
  }
  e.preventDefault();
}