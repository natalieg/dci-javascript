let banner = document.getElementById("bannerMessage");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

let step = 20
console.log(step);
let max = 250;
let min = 70;
let r = max;
let g = min;
let b = min;
let level = 1;

function changeRGB() {
    step = document.getElementById("changeValue").value % 100;
    if (step == undefined || step == 0) {
        step = 20;
    }
    switch (level) {
        case 1:
            g += step;
            if (g >= max) {
                level = 2
            }
            break;
        case 2:
            r -= step;
            if (r <= min) { level = 3 }
            break;
        case 3:
            b += step;
            if (b >= max) { level = 4 }
            break;
        case 4:
            g -= step;
            if (g <= min) { level = 5 }
            break;
        case 5:
            r += step;
            if (r >= max) { level = 6 }
            break;
        case 6:
            b -= step;
            if (b <= min) {
                level = 1
            }
            break;
    }
    // console.log("rgb(" + r + "," + g + "," + b + ")");
    return ("rgba(" + r + "," + g + "," + b + ",.6)");
}

banner.style.backgroundColor = changeRGB();
btn.onclick = function () {
    let newColor = changeRGB();
    banner.style.backgroundColor = newColor;
    document.getElementById("colorCode").innerHTML = newColor;
}

btn2.onclick = function () {
    banner.classList.toggle("small");
}

let btn3 = document.getElementById("btn3");

let img = false;
let clickCounter = 1;
btn3.onclick = function(){
    if(img){
        newImgDiv(); 
        img = false;
    } else {
        newColorDiv();
        img = true;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let imgArray = [];

for (let index = 1; index < 12; index++) {
    imgArray.push("img/img" + index);
}

/**
 * Creates a new color Div
 */
function newColorDiv () {
    let newDiv = document.createElement("div");
    newDiv.classList.add("miniDiv");
    newDiv.style.backgroundColor = changeRGB();
    newDiv.style.borderRadius = getRandomInt(20) + "px";
    newDiv.addEventListener("click", function () {
        let me = this;
        this.classList.add("growMe");
        setTimeout(function () {
            document.getElementById("content").removeChild(me);
        }, 300);
        document.getElementById("popCount").innerText = "You popped " + clickCounter + " Divs!";
        clickCounter ++;
    })
    document.getElementById("content").prepend(newDiv);
}

/**
 * Creates a new Div with an image background
 */
let imgCounter = 0;
function newImgDiv(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("miniDiv");
    newDiv.style.backgroundImage = "url('" + imgArray[getRandomInt(imgArray.length - 1)] + ".jpeg'";
    newDiv.addEventListener("click", function () {
        let me = this;
        this.classList.add("growMe");
        setTimeout(function () {
            document.getElementById("content").removeChild(me);
        }, 200);
        document.getElementById("popCount").innerText = "You popped " + clickCounter + " Divs!";
        clickCounter ++;
    })
    
    document.getElementById("content").prepend(newDiv);
}