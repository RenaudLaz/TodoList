//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);     //au clic sur button, appelle la fonction addTodo
todoList.addEventListener("click", deleteCheck);

//FONCTIONS
function addTodo(event){
    event.preventDefault();
    //Creation todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creation du li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //bouton Check
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);
    //bouton Delete
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //AJOUTER TODO A TODOLIST
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove()
        });
    }
    //CHECK TODO
    if (item.classList[0] === "check-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("check");
    }
}