let select = document.getElementById("select");
let f1 = document.getElementById("cm");
let f2 = document.getElementById("inch");
let l1 = document.getElementById("label1");
let l2 = document.getElementById("label2");

select.addEventListener("change", function () {
    f1.value = "";
    f2.value = "";
    converter();
});

f1.addEventListener("keyup", converter());
f2.addEventListener("keyup", converter());

function converter() {
    console.log(`Select is ${select.value} Value 1 is ${f1.value} Value 2 is ${f2.value}`)
    f1.removeEventListener("keyup", convertToInch);
    f2.removeEventListener("keyup", convertToCM);
    f1.removeEventListener("keyup", convertSecToMin);
    f2.removeEventListener("keyup", convertMinToSec);
    f1.removeEventListener("keyup", convertGramToKilo);
    f2.removeEventListener("keyup", convertKiloToGram);
    f1.removeEventListener("keyup", convertCelToFar);
    f2.removeEventListener("keyup", convertFarToCel);

    switch (select.value) {
        case "0":
            l1.innerHTML = "Centimeter";
            l2.innerHTML = "Inches"
            f1.addEventListener("keyup", convertToInch);
            f2.addEventListener("keyup", convertToCM);
            console.log("Convert CM INCH");
            break;
        case "1":
            l1.innerHTML = "Seconds";
            l2.innerHTML = "Minutes"
            f1.addEventListener("keyup", convertSecToMin);
            f2.addEventListener("keyup", convertMinToSec);
            console.log("Convert Sec Min");
           
            break;
        case "2":
            l1.innerHTML = "Gram";
            l2.innerHTML = "Kilo";
            f1.addEventListener("keyup", convertGramToKilo);
            f2.addEventListener("keyup", convertKiloToGram);
            console.log("Convert KG Gram");
            break;
        case "3":
            l1.innerHTML = "Celsius";
            l2.innerHTML = "Farenheit";
            f1.addEventListener("keyup", convertCelToFar);
            f2.addEventListener("keyup", convertFarToCel);
            console.log("Convert Celsius Farenheit");
            break;
    }
}


////////////////////////////////////////////////////
// Converting Centimeter/Inch
function convertToInch(e) {
    e.preventDefault();
    let inc = parseFloat(e.target.value) * 0.3937;
    inc = inc.toFixed(2);
    f2.value = inc;
}

function convertToCM(e) {
    e.preventDefault();
    let c = parseFloat(e.target.value) * 2.54;
    c = c.toFixed(2);
    f1.value = c;
}
//////////////////////////////////////////////////////
function convertSecToMin(e) {
    e.preventDefault();
    let m = parseInt(e.target.value) / 60;
    m = m.toFixed(2);
    f2.value = m;
}
function convertMinToSec(e) {
    e.preventDefault();
    let s = parseInt(e.target.value) * 60;
    s = s.toFixed(2);
    f1.value = s;
}

///////////////////////////////////////////////////////
function convertGramToKilo(e) {
    e.preventDefault();
    let k = parseFloat(e.target.value) / 1000;
    k = k.toFixed(2);
    f2.value = k;
}
function convertKiloToGram(e) {
    e.preventDefault();
    let g = parseFloat(e.target.value) * 1000;
    g = g.toFixed(2);
    f1.value = g;
}

///////////////////////////////////////////////////////
/**
 * Celsius and Farenheit
 */
function convertCelToFar(e) {
    e.preventDefault();
    let cel = parseFloat(e.target.value);
    let far = 32 + (cel * 9 / 5);
    far = far.toFixed(2);
    f2.value = far;
}
function convertFarToCel(e) {
    e.preventDefault();
    let far = parseFloat(e.target.value);
    let cel = 5 / 9 * (far - 32);
    cel = cel.toFixed(2);
    f1.value = cel;
}