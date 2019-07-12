let main = document.getElementById("list");
let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input");
let counter = 0;
let taskList = document.querySelectorAll("p");

addBtn.addEventListener("click", function(){
    let task = document.createElement("p");
    let text = document.createTextNode(input.value);
    input.value = "";
    // console.log(main);
    main.appendChild(task);
    task.appendChild(text);
    task.setAttribute("id", "task" + counter);
    task.setAttribute("style", "background-color: " + addDarkerBackground());
    
    // Adds Event Listener to every new Item
    taskList = document.querySelectorAll("p");
    taskList[counter].addEventListener("click", function(){
        let removeMe = this;
        removeMe.classList.add("animate");   
        setTimeout(function () {
              main.removeChild(removeMe); 
          }, 200);
    
        counter --;
        input.focus();
    });
    counter ++;
    input.focus();
})

/**
 * Input Field reacts to Enter
 */
document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});


/**
 * Random Background Color
 */
let r = 100;
let g = 150;
let b = 150;
let growIntA = 10;
let growIntB = 20;

function addDarkerBackground(){
    g += growIntA;
    b += growIntB;
    r += growIntA;
    if(r >= 255){
        r = 120;
        growIntA = getRandomArbitrary(5, 40);
    }
    if(g >= 255){
        g = 160;
        growIntA = getRandomArbitrary(5, 40);
    }
    if(b >= 255){
        b = 160;
        growIntB = getRandomArbitrary(5, 40);
    }
    return color = "rgb("+r+","+g+","+b+")";
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }