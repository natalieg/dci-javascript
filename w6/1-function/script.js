// function without argument
function greeting(){
    console.log("Good Morning");
}

// call the function
greeting();

// function with argument
function sayHi(message){
    console.log(message);
}

sayHi("good Morning!! :)") // call function with message

let m = "Hi, this is the greeting from a Variable" // new Variable
sayHi(m); // call function with argument = variable m

///////////////////////////////////////////////////////

// function with two arguments
function getMax(num1, num2){
    console.log("comparing " + arguments[0] + " and " + arguments[1])
    if(num1 > num2){
       return "The bigger number is: " + num1;
    } else {
        return "The bigger number is: " + num2;
    }
}

console.log(getMax(12,4));
console.log(getMax(5,20));

/**
 * Function without parameters but callable with values
 * Without defining parameters this function can be used, argument[position] takes the
 * place of the variables 
 */
function getMax1(){
    if(arguments[0] > arguments[1]){
        return (arguments[0] + " is bigger")
    } else {
        return (arguments[1] + " is bigger")
    }
}

/**
 * Loop through all given numbers and find the max
 */
function getMaxLoop(){
    let length = arguments.length;
    let max = 0;
    for(i = 0; i < length; i ++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

function getMaxLoopArray(array){
    let length = array.length;
    let max = 0;
    for(i = 0; i < length; i ++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

/**
 * Loop through all given numbers and find the min
 */
function getMinLoop(){
    let length = arguments.length;
    let min = arguments[0];
    for(i = 0; i < length; i ++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return "The min is " + min;
}

////////////////

let maxBtn = document.getElementById("checkMaxBtn");
maxBtn.onclick = function(){
    let checkArray = document.getElementById("maxIn").value;
    checkArray = checkArray.split(',').map(Number);
    let text = getMaxLoopArray(checkArray);
    document.getElementById("maxOut").innerHTML = text;
}

let input = document.getElementById("maxIn")
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("checkMaxBtn").click();
    }
  });