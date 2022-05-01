const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = []; 

function saveToDos(){ 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();   
}


function paintTodo(newToDo){
    console.log("i will paint", newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;

    const delete_btn = document .createElement("button");
    delete_btn.innerText = "delete";
    delete_btn.addEventListener("click", deleteToDo)
    span.src = `li/${newToDo}`;
    li.appendChild(span);
    li.appendChild(delete_btn);
    //console.log(li);
    toDoList.appendChild(li);
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newToDo  = toDoInput.value;
    toDoInput.Value = "";
    console.log(newToDo, toDoInput.value);
    toDos.push(newToDo);
    paintTodo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is turn of", item));
}