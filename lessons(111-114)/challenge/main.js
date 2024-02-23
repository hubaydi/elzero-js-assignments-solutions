const inputFeild = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('input[type="submit"]');
const container = document.querySelector('.container');

if (localStorage.length) {
  for (let i = 0; i < localStorage.length; i++) {
    let value = localStorage[localStorage.key(i)];
    let taskId = localStorage.key(i);
  createTask(value, taskId);
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputFeild.value) {
    let taskId = `task-id-${(Math.random() * 10000).toFixed()}`;
    localStorage[taskId] = inputFeild.value;
    createTask(inputFeild.value, taskId);
  }
})

//Task creation
function createTask(value, taskId) {
  // First create Elements.
  const task = document.createElement('div');
  const button = document.createElement('button');
  const p = document.createElement('p');
  // Then add text and class.
  task.classList.add('task');
  p.textContent = value; // this value will be inputFeild.value or it will come from localStorage.
  button.textContent = 'Delete';
  // Then append them to the parent Elements.
  task.append(p, button);
  container.appendChild(task);
  inputFeild.value = '';
  deleteTask(button, taskId)
}

// Deleting a task.
function deleteTask(button, taskId) {
  button.addEventListener('click', () => {
    localStorage.removeItem(taskId)
    button.parentElement.remove();
  })
}