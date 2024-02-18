const addingInput = document.querySelector(".assign input[class='classes-to-add'");
const removingInput = document.querySelector(".assign input[class='classes-to-remove'");
const ownerDiv = document.querySelector("div[title='Current'");
const holderDiv = document.querySelector(".assign .classes-list div");

addingInput.addEventListener('blur', function () {
  if (!(this.value === "")) {
    const arr = this.value.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        ownerDiv.classList.add(arr[i]);
      }
    this.value = '';
    holderDiv.innerHTML = '';
    let sorted = ownerDiv.classList.value.split(' ').sort();
    for (let i = 0; i < sorted.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = sorted[i];
      holderDiv.append(span);
    }
  } 
});

removingInput.addEventListener('blur', function () {
  if (!(this.value === "")) {
    const arr = this.value.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        ownerDiv.classList.remove(arr[i]);
      }
    this.value = '';
    holderDiv.innerHTML = '';
    let sorted = ownerDiv.classList.value.split(' ').sort();
    for (let i = 0; i < sorted.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = sorted[i];
      if (span.innerHTML != '') {
        holderDiv.append(span);
      }
    }
  } 
});

