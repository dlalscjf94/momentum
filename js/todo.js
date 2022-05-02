const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; 

function saveToDos(){ 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();   
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintTodo(newToDo){
    console.log("i will paint", newToDo);
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;

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
    const newTodoObj = {
        text: newToDo, 
        id: Date.now(),
    };
    // console.log(newToDo, toDoInput.value);
    // toDos.push(newToDo);
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item) => console.log("this is turn of", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}


// ex filter
const arr = ["pizza", "banana", "potato"];
function sexyfilter(food){return food !== "banana"};
arr.filter(sexyfilter);
// result => ["pizza", "potato"]