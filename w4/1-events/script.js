function sayHi() {
    let name = prompt("Hi what is your name?")
    document.write("Hi " + name);
}

let body = document.querySelector("body");

let toggle = false;
function changeBackgroundColor() {
    if (toggle) {
        body.style.backgroundColor = "green";
        toggle = false;
    } else {
        body.style.backgroundColor = "yellow";
        toggle = true;
    }
}

function changeBGto(color) {
    body.style.backgroundColor = color;
}

let togImg = false;
function changeImg() {
    let img = document.querySelector("img");
    if (!togImg) {
        img.setAttribute("src", "leaf.jpg");
        togImg = true;
    } else {
        img.setAttribute("src", "leaf.jpeg");
        togImg = false;
    }
}

function randomNumber() {
    let random = Math.floor((Math.random() * 100) + 1);
    let randomImg = "https://picsum.photos/id/" + random + "/200/200";
    // let randomImg = "https://picsum.photos/id/" + random + "/" + (random +50) +"/" + (random + 50) + "";
    document.getElementById("randomNumberOutput").innerHTML = random;
    document.getElementById("randomImage").innerHTML = "<img src=" + randomImg + ">";
}

let togChange = false;
function autoChange() {
    setInterval(function () {
        randomNumber();
    }, 2000);
}

let colors = ["cornflowerblue", "powderblue", "plum",
    "indigo", "lavender", "thistle",
    "pink", "lightgreen", "peachpuff"];
let arrayCounter = 0;

function changeBGarray() {
    let btn = document.getElementById("btnColorArray");
    body.style.backgroundColor = colors[arrayCounter];
    btn.innerHTML = colors[arrayCounter];
    arrayCounter++;
    if (arrayCounter >= colors.length) {
        arrayCounter = 0;
    }
}

function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function changeRanBg() {
    let diff = 100;
    let c1 = getRandomNumber(1, (255 - diff));
    let c2 = getRandomNumber(1, (255 - diff));
    let c3 = getRandomNumber(1, (255 - diff));
    let cc1 = c1 + diff;
    let cc2 = c2 + diff;
    let cc3 = c3 + diff;
    let color = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
    let colorBtn = "rgb(" + cc1 + "," + cc2 + "," + cc3 + ")";
    let btn = document.getElementById("btnColorRan");
    body.style.backgroundColor = color;
    btn.style.backgroundColor = colorBtn;
    if ((c1 + c2 + c3) < 200) {
        btn.style.color = "white";
        btn.style.border = "2px solid white";
    } else {
        btn.style.color = "black";
        btn.style.border = "2px solid black";
    }
    btn.innerHTML = color;
}

let colorInterval = false;

function changeInterv() {
    changeRanBg();
    intervalActive = true;
}

let intervalActive = false;
function toggleAuto() {
    let btn = document.getElementById("intervButton");
    if (intervalActive) {
        clearInterval(colorInterval);
        intervalActive = false;
        btn.innerHTML = "Start Random Color"

    } else {
        colorInterval = setInterval(changeInterv, 500);
        intervalActive = true;
        btn.innerHTML = "Stop This"
    }
}

let inputField = document.getElementById("input1");
function valueInput(){
    let p = document.getElementById("valueOutput");
    p.innerHTML = "Hi " + inputField.value;
}

let p = document.getElementById("hoverP");
let imgHover = document.getElementById("hoverImg");
function over(){
    p.innerHTML = "Please go away";
    imgHover.setAttribute("src", "galaxy.jpeg");
}

function out(){
    p.innerHTML = "Thanks for going away!";
    imgHover.setAttribute("src", "mountain.jpeg");
}