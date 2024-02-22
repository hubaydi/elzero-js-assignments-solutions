const selectBoxes = document.querySelectorAll('select');

for (let i = 16; i <= 30; i++) {
  const option = document.createElement('option');
  option.setAttribute('value', `${i}px`);
  option.textContent = `${i}px`;
  selectBoxes[2].append(option);
}
selectBoxes[2][0].setAttribute('selected', true);

if (localStorage['font-family']) {
  document.body.style.fontFamily = `${localStorage['font-family']}, sans-serif`;
  selectBoxes.forEach(function (ele) {
    ele.style.fontFamily = `${localStorage['font-family']}, sans-serif`;
  })
  selectBoxes[0][0].removeAttribute('selected');

  selectBoxes[0]
    .querySelector(`option[value='${localStorage['font-family']}']`)
    .setAttribute('selected', true);
}
if (localStorage.color) {
  document.body.style.color = localStorage.color;
  selectBoxes.forEach(function (ele) {
    ele.style.color = localStorage.getItem('color');
  })
  selectBoxes[1][0].removeAttribute('selected');

  selectBoxes[1]
    .querySelector(`option[value='${localStorage['color']}']`)
    .setAttribute('selected', true);
}
if (localStorage['font-size']) {
  document.body.style.fontSize = localStorage['font-size'];
  selectBoxes.forEach(function (ele) {
    ele.style.fontSize = localStorage.getItem('font-size');
  })
  selectBoxes[2][0].removeAttribute('selected');

  selectBoxes[2]
    .querySelector(`option[value='${localStorage['font-size']}']`)
    .setAttribute('selected', true);

}


selectBoxes.forEach(select => {
  select.addEventListener('change', () => {
    // Remove 'selected' attribute.
    for (let i = 0; i < select.length; i++) {
      select[i].removeAttribute('selected');
    }
    // Add 'selected' Attribute to the selected option.
    const selectedOption = select.querySelector(`option[value='${select.value}']`);
    selectedOption.setAttribute('selected', true);

    if (select === selectBoxes[0]) {
      document.body.style.fontFamily = `${select.value}, sans-serif`;
      localStorage['font-family'] = select.value;
      selectBoxes.forEach(function (ele) {
        ele.style.fontFamily = `${select.value}, sans-serif`;
      })

    } else if (select === selectBoxes[1]) {
      document.body.style.color = select.value;
      localStorage.color = select.value;
      selectBoxes.forEach(function (ele) {
        ele.style.color = select.value
      })

    } else if (select === selectBoxes[2]) {
      document.body.style.fontSize = select.value;
      localStorage['font-size'] = select.value;
      selectBoxes.forEach(function (ele) {
        ele.style.fontSize = select.value
      })
    }
  })
})