let todos = [];

function saveInputs() {
  let inputTitle = document.getElementById("ip-title").value;
  let inputDescription = document.getElementById("ip-description").value;

  if (inputTitle && inputDescription) {
    let todo = {
      title: inputTitle,
      description: inputDescription
    };

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();

    document.getElementById("ip-title").innerHTML = ""
  }
}

function displayTodos() {
  let todoList = document.querySelector(".todos");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    let todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `<h3>${todo.title}</h3><p>${todo.description}</p> <hr class="separator">`;
    todoList.appendChild(todoItem);
  });
}

function getInputs() {
  let storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    displayTodos();
  }
}

document.getElementById("btn-create-todo").addEventListener("click", saveInputs);
window.addEventListener("load", getInputs);
