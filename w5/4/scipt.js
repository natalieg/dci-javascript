let myList = document.getElementById("list");

console.log(myList.firstElementChild);
console.log(myList.lastElementChild);

console.log(myList.children[1]);
console.log(myList.children[2]);
console.log(myList.children[2].innerHTML);

let btn = document.getElementById("btn");
let content = document.getElementById("content");
let counter = 0;

let length = myList.children.length;

let step = 15;
let max = 220;
let min = 20;
let r = max;
let g = min;
let b = min;
let level = 1;

function changeRGB() {
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

    console.log("rgb(" + r + "," + g + "," + b + ")");
    return ("rgb(" + r + "," + g + "," + b + ")");
}


let colorGrey = 0;
let greyChange = 5;
function greyColor(){
    colorGrey += greyChange;
    if(colorGrey >= 250 || colorGrey < 0){
        greyChange = greyChange * -1;
    }
    return ("rgba(" + 50 + "," + colorGrey + "," + colorGrey + ", .6)");
}

let minFont = 2;
let fontSize = minFont;
let maxFont = 55;
let changeFontValue = 1;
function changeFontSize(){
    fontSize += changeFontValue;
    if(fontSize > maxFont || fontSize < minFont){
        changeFontValue = changeFontValue * -1;
    } 
return fontSize;
}


btn.focus();
btn.addEventListener("click", function () {
    let newP = document.createElement("span");
    content.prepend(newP);
    newP.innerHTML = " " + myList.children[counter].innerHTML + " ";
    newP.style.color = changeRGB();
    newP.style.backgroundColor = greyColor();
    newP.style.fontSize = changeFontSize() + "px";
    counter++;
    if (counter >= length) {
        counter = 0;
    }
});

console.log(document.body.childNodes[1].nodeName);
