let btn = document.getElementById("btn");
let div = document.getElementById("myDiv");

btn.addEventListener("click", doThing);
function doThing(e){
    console.log(e.target.id);
}

div.addEventListener("click", divClick);
function divClick(e){
    console.log(e.target.innerHTML);
    
}

let input = document.getElementById("fName");
input.addEventListener("keyup", inputKeyUp);
function inputKeyUp(e){
    document.querySelector("h1").textContent = e.target.value;
}