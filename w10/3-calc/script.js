/**
 * Addition
 */
let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let addRes = document.getElementById("addRes");

add1.addEventListener("keyup", addition);
add2.addEventListener("keyup", addition);

function addition() {
    if (add1.value != "" && add2.value != "") {
        let num1 = parseFloat(add1.value);
        let num2 = parseFloat(add2.value);
        addRes.value = num1 + num2;
    } else {
        addRes.value = "";
    }
}

/**
 * Substraction
 */
let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
let subRes = document.getElementById("subRes");

sub1.addEventListener("keyup", substraction);
sub2.addEventListener("keyup", substraction);

function substraction() {
    if (sub1.value != "" && sub2.value != "") {
        let num1 = parseFloat(sub1.value);
        let num2 = parseFloat(sub2.value);
        subRes.value = num1 - num2;
    } else {
        subRes.value = "";
    }
}

/**
 * Multiplication
 */
let mul1 = document.getElementById("mul1");
let mul2 = document.getElementById("mul2");
let mulRes = document.getElementById("mulRes");

mul1.addEventListener("keyup", multiplication);
mul2.addEventListener("keyup", multiplication);

function multiplication() {
    if (mul1.value != "" && mul2.value != "") {
        let num1 = parseFloat(mul1.value);
        let num2 = parseFloat(mul2.value);
        mulRes.value = num1 * num2;
    } else {
        mulRes.value = "";
    }
}

/**
 * Dividing
 */
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let divRes = document.getElementById("divRes");

div1.addEventListener("keyup", divide);
div2.addEventListener("keyup", divide);

function divide() {
    if (div1.value != "" && div2.value != "" && div2.value != 0) {
        let num1 = parseFloat(div1.value);
        let num2 = parseFloat(div2.value);
        divRes.value = num1 / num2;
    } else {
        divRes.value = "";
    }
}