let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let body = document.querySelector("body");

h1.style.fontSize = "2.5em";

var isBlue = false;
function changeColor(){
    if(isBlue == true){
        body.style.background = "white";
        isBlue = false;
    } else {
        body.style.background = "lightblue";
        isBlue = true;
    }
}


setInterval(function(){
    changeColor(); 
    }, 1000);