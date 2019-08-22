let mainDiv = document.getElementById("main");
let box = document.querySelectorAll(".box");

mainDiv.addEventListener("dragstart", start);
mainDiv.addEventListener("dragend", end);

box.forEach(element => {
   element.addEventListener("dragover", over); 
   element.addEventListener("dragenter", enter); 
   element.addEventListener("drop", drop); 
});

function start(){
    mainDiv.style.backgroundColor = "green";
}

function end(){
    mainDiv.style.backgroundColor = "yellow";
}

function over(e){
    e.preventDefault();
}

function enter(e){
    e.preventDefault();
}

function drop(){
    this.append(mainDiv);
}