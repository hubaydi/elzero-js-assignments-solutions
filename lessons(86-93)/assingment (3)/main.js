const inp = document.querySelector('form input[type="number"]');
const resultDiv = document.querySelector('div.result');

inp.oninput = function () {
  if (inp.value[0] === "-") {
    //console.log(inp.value[0])
    resultDiv.innerHTML = "please Enter correct number";
  } else {
    let numberValue = Number(inp.value);
  
    if (numberValue == "") {
      resultDiv.innerHTML = "{0} USD Dollar = {0} Egyptian Pound";
    } else {
      resultDiv.innerHTML = `$${numberValue.toFixed(2)} USD Dollar = ${(numberValue * 15.6).toFixed(2)} Egyptian Pound`;
    }
  }
}
