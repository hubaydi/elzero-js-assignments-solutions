const inputFeild = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('input[type="submit"]');
const container = document.querySelector('.container');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputFeild.value) {

    createTask();
    deleteTask();

  }
})

//Task creation
function createTask() {
  const task = document.createElement('div');
  task.classList.add('task');

  const p = document.createElement('p');
  p.textContent = inputFeild.value;

  const button = document.createElement('button');
  button.textContent = 'Delete';

  task.append(p, button);
  container.appendChild(task);
  inputFeild.value = '';
}

// Deleting a task.
function deleteTask() {
  const deleteBtns = document.querySelectorAll('.task button');
  deleteBtns.forEach(function (button) {
    button.addEventListener('click', () => {
      button.parentElement.remove();
    })
  })
}