const myForm = document.querySelector('form');

getSessionStorage();

for (let i = 0; i < myForm.length; i++) {
  myForm[i].addEventListener('change', () => {
    if (myForm[i].tagName === "INPUT") {
      sessionStorage[myForm[i].getAttribute('name')] = myForm[i].value;
    } else {
      sessionStorage.select = myForm[i].value;
    }
  }) 
}

function getSessionStorage() {
  for (let i = 0; i < myForm.length; i++) { 
    if (sessionStorage[myForm[i].getAttribute('name')]) {
      myForm[i].value = sessionStorage[myForm[i].getAttribute('name')];
    } else if (sessionStorage.select) {
      myForm[i].value = sessionStorage.select;
    }
  }
}