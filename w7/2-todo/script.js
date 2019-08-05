let list = document.getElementById("list");
let input = document.getElementById("todoInput");
let button = document.getElementById("todoBtn");

class Todo{
    constructor(text){
        this.text = text;
    }
    writeTodo(){
        let task = document.createElement("li");
        let edit = document.createElement("button");
        let text = document.createTextNode(this.text);
        edit.innerHTML = "e";
        edit.style.marginLeft = "5px";
        task.appendChild(text);
        task.appendChild(edit);
        list.prepend(task);

        edit.addEventListener("click", function(){
            // change stuff
        })
    }
}

button.addEventListener("click", function(){
    let todo = new Todo(input.value);
    todo.writeTodo();
    input.value = "";
})

/// test tasks
let t1 = new Todo("Task2");
t1.writeTodo();

let t2 = new Todo("Do more");
t2.writeTodo();