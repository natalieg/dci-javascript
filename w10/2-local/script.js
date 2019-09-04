let form = document.getElementById("task-form");
let taskInput = document.getElementById("task");
let taskList = document.getElementById("task-list");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);

document.addEventListener("DomContentLoaded", loadTasks());

function addTask(e) {
    e.preventDefault();
    showTask(taskInput.value);
    storeToLocalStorage(taskInput.value);
    taskInput.value = "";
}

function showTask(taskName){
    let h5 = document.createElement("h5");
    h5.innerHTML = taskName;
    taskList.appendChild(h5);
    let delBtn = document.createElement("button");
    delBtn.innerText = "del";
    delBtn.classList.add("delete");
    delBtn.style.float = "right";
    h5.appendChild(delBtn);
}

function removeTask(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement);
    }
}

function storeToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    let myTasks = JSON.parse(localStorage.getItem("tasks"));
    myTasks.forEach(task => {
        showTask(task);
    });
}

function store(){
    let myTasks = JSON.parse(localStorage.getItem("tasks"));
    myTasks.push("More tasks for you!");
    myTasks = JSON.stringify(myTasks);
    localStorage.setItem("tasks", myTasks);
}

function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks")); 
    }
    tasks.forEach(function(task, index){
        if(taskItem.firstChild.textContent === task){
            tasks.splice(index, 1)
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
}