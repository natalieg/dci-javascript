var br = "<br>";
var brbr = "<br><br>";
var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

var cars = ["BMW", "Mercedes", "Audi", "Volvo", "Ford", "VW", "Tesla"];
var fruit = new Array("apple", "banana", "grape", "pear");
var countries = ["Germany", " Poland", "England", "India", "Russia", "America", "Canada", "France"];
var students = ["Peter", "Natalie", "Ali", "Tando", "Achmed"]
var colors = ["lightblue", "red", "blue", "yellow", "green", "pink", "orange", "#39CCCC", "#B7D4FF", "#7EB3FF",
    "#CEFF9D", "#FFFCBB", "#FED876", "#FBCEB5", "#FFAF50", "#FDA371", "##DCABAE"]


for (i = 0; i < 56; i++) {
    let divId = "div" + i;
    // console.log(divId);
    document.write("<div id='" + divId + "'></div>");
    setDivStyle(divId);
}

function setDivStyle(div) {
    let minCol = 150;
    let maxCol = 256;
    let randomColor = "rgb(" + (getRandomIntMinMax(minCol, maxCol)) + ","
        + (getRandomIntMinMax(minCol, maxCol)) + ","
        + (getRandomIntMinMax(minCol, maxCol)) + ")";
    console.log(randomColor);
    document.getElementById(div).style.backgroundColor = randomColor;
    document.getElementById(div).style.padding = "5px";
    document.getElementById(div).style.margin = "5px";
    document.getElementById(div).style.textAlign = "center";
    let sizeRan = getRandomIntMinMax(60, 200);
    let size = sizeRan + "px";
    document.getElementById(div).style.width = size;
    document.getElementById(div).style.height = size;
    // document.getElementById(div).style.lineHeight = size;
    document.getElementById(div).style.float = "left";
    document.getElementById(div).style.fontSize = (sizeRan / 7) + "px";
    document.getElementById(div).style.borderRadius = getRandomInt(80) + "px";
    // document.getElementById(div).style.borderRadius = "20px";
    document.getElementById(div).innerHTML = div + brbr + randomColor;
}

console.log(countries);
console.log(cars);
console.log(fruit);

cars.pop();
cars.push("Jaguar");

// var c = 1;
// cars.forEach(function(element){
//     document.write(c + ". Car: " + space + element);
//     document.write(space + students[getRandomInt(students.length)]);
//     document.write(space + countries[getRandomInt(countries.length)] + br);
//     ++c;
// })

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntMinMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }