// Select elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const title = document.getElementById("title-id");

// Function to add a new task
function addTodo() {
  const taskText = input.value.trim();
  if (taskText === "") return; // Avoid empty tasks

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = ""; // Clear the input field
}

function hi() {
  window.alert("HI");
}

// Add event listener to button
addBtn.addEventListener("click", addTodo);

// Add task with Enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
