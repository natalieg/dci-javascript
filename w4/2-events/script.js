let input = document.querySelectorAll("input");

function myFocus(number){
    input[number].style.backgroundColor = "yellow";
}

function inputChange(number){
    input[number].style.backgroundColor= "pink";
}

function mySelect(number){
    input[number].style.backgroundColor = "lightgreen";
}

function deleteStyle(number){
    input[number].style.backgroundColor = "white";
}

function keyDown(num){
    input[num].style.fontWeight = "bold";
}

function keyUp(num){
    input[num].style.fontWeight = "normal";
    // console.log(input[num].value);
}

function formSubmit(){
    alert("You will be redirected");
}