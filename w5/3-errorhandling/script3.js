
/**
 * Divide num 1 / num 2
 * if Num 2 is 0 the program should catch the error 
 * and give back a message on the document
 */
function divide() {
    let btn = document.getElementById("divideBtn");
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let out = document.getElementById("result");
    try {
        if (num2 == 0) throw "You cannot devide through 0";
        let result = num1 / num2;
        out.innerHTML = "The Result is: " + result.toFixed(4); //Round to 4 digits after comma
        out.style.color = "black";
        out.style.fontWeight = "normal";
    } catch (error) {
        out.innerHTML = "You cannot divide by 0";
        out.style.color = "red";
        out.style.fontWeight = "bold";
    }
}

// Enter in Input Field 1
document.getElementById("input1")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode ===  12) {
            document.getElementById("divideBtn").click();
        }
    });



// Enter in Input Field 2
document.getElementById("input2")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("divideBtn").click();
        }
    });

///////////////////////////////////////////////////

let minLength = 12;
let requirements = "Letters, Uppercase, Number";
document.getElementById("minLength").innerHTML = minLength;
document.getElementById("requirements").innerHTML = "Also requires: " + requirements;

let password = document.getElementById("password").value;

// Enter triggers checkPassword method
document.getElementById("password")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            checkPassword();
        }
    });

function hasNumber(myString) {
    return /\d/.test(myString);
}

function checkLetters(pw) {
    if (pw.match(/[a-z]/i)) {
        return true;
    } else {
        return false;
    }
}

function checkPassword() {
    password = document.getElementById("password").value;
    let outcome = document.getElementById("passOutcome");
    let upperCaseTrue = false;
    let letterTrue = checkLetters(password);
    let numberTrue = hasNumber(password);

    for (i = 0; i < password.length; i++) {
        if (password[i] == password[i].toUpperCase()) {
            upperCaseTrue = true;
        }
    }
    try {
        if (password.length < minLength) throw "Your password is too short! It has only " + password.length + " characters!";
        if (!upperCaseTrue) throw "Your password doesn't contain any uppercase Characters!";
        if (!letterTrue) throw "Your password doesn't contain any letters!";
        if (!numberTrue) throw "Your password doesn't contain any number!";
        outcome.style.color = "green";
        outcome.innerHTML = "Successfully changed Password!";
        storePassword(password);
        document.getElementById("password").value = "";
        document.getElementById("pwLength").innerHTML = "";
    } catch (error) {
        outcome.style.color = "red";
        outcome.innerHTML = error;
    }
}

function writePasswordLength() {
    password = document.getElementById("password").value;
    let pwlength = document.getElementById("pwLength");
    pwlength.innerHTML = " " + password.length;
    if (password.length >= minLength) {
        pwlength.style.color = "green";
    } else {
        pwlength.style.color = "red";
    }
}

let count = 1;
// Writes down accepted PWs on the Website
function storePassword(pw) {
    let password = document.getElementById("password").value;
    let p = document.createElement("h5");
    p.style.fontWeight = "normal";
    p.style.margin = "5px 0";
    let text = document.createTextNode(count + ". "+ pw);
    let storage = document.getElementById("pwStorage");
    storage.prepend(p);
    p.appendChild(text);

    let allPasswords = document.querySelectorAll("h5");
    let color = 50;
    if(allPasswords.length == 12){
        document.getElementById("pwStorage").removeChild(allPasswords[11]);
    }
    allPasswords = document.querySelectorAll("h5");
    if(allPasswords.length >= 3){
        for (let index = 3; index < allPasswords.length; index++) {
            allPasswords[index].style.color = "rgb("+color+","+color+","+color+")"; 
            color = color + 20;           
        }
    }
    count ++;
}

