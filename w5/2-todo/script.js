let main = document.getElementById("list");
let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input");
let counter = 0;
let taskList = document.querySelectorAll("p");

addBtn.addEventListener("click", function(){
    let task = document.createElement("p");
    let text = document.createTextNode(input.value);
    input.value = "";
    console.log(main);
    main.appendChild(task);
    task.appendChild(text);
    task.setAttribute("id", "task" + counter);
    task.setAttribute("style", "background-color: " + addDarkerBackground());
    
    taskList = document.querySelectorAll("p");
    taskList[counter].addEventListener("click", function(){
        let removeMe = this;
        removeMe.classList.add("animate");   
        setTimeout(function () {
              main.removeChild(removeMe); 
          }, 200);
    
        counter --;
    });
    counter ++;
})

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});

let r = 180;
let g = 190;
let b = 205;
let growIntA = 10;
let growIntB = 20;

function addDarkerBackground(){
    g += growIntA;
    b += growIntB;
    r += growIntA;
    if(r >= 255){
        r = 150;
        growIntA = getRandomArbitrary(10, 50);
    }
    if(g >= 255){
        g = 180;
        growIntA = getRandomArbitrary(10, 50);
    }
    if(b >= 255){
        b = 190;
        growIntB = getRandomArbitrary(10, 50);
    }
    return color = "rgb("+r+","+g+","+b+")";
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }