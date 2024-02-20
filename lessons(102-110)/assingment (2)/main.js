
setTimeout(popUp, 5000);

function popUp() {
  const arr1 = []
  const container = document.createElement('div');
  container.className = "container";

  const h3 = document.createElement('h3');
  h3.textContent = "Welcome";

  const p = document.createElement('p');
  p.textContent = "Welcome to Elzero Web School";

  const button = document.createElement('button');
  button.textContent = "X";

  container.append(h3, p, button);
  document.scripts[0].before(container);
  
  button.onclick = function () {
    container.remove();
  }
}