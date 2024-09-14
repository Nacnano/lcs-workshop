// Select elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTodo() {
  const taskText = input.value.trim();
  if (taskText === '') return; // Avoid empty tasks

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = ''; // Clear the input field
}

// Add event listener to button
addBtn.addEventListener('click', addTodo);

// Add task with Enter key
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});
